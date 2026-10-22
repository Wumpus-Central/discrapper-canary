n.d(t, {
    dx: () => E,
    TV: () => S,
    BG: () => O,
    $C: () => m,
    rS: () => g,
    Mz: () => b,
    qy: () => f,
    xQ: () => A,
    BC: () => w,
});
var s = n(73153),
    r = n(587895),
    o = n(975189),
    i = n(276983),
    l = n(998979),
    a = n(947980);
let c = new Set();
async function d(e) {
    let { applicationId: t, appName: n, permissions: r } = e,
        o = r.filter((e) => (0, i.yG)(e) && null == l.A.getDecision(t, e));
    if (!(0 === o.length || c.has(t))) {
        c.add(t);
        try {
            let e = await (0, a.A)({ appName: n, iframeId: null, permissions: o });
            null != e &&
                s.h.dispatch({
                    type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
                    applicationId: t,
                    permissions: o,
                    allowed: e,
                });
        } finally {
            c.delete(t);
        }
    }
}
var u = n(260498),
    p = n(664619),
    h = n(722701),
    _ = n(28883);
let f = {
        publish_notice(e, t) {
            let { projectId: n } = t;
            s.h.dispatch({
                type: "CONJURE_CHAT_PUBLISH_NOTICE",
                projectId: n,
                id: e.id,
                content: e.content,
                timestamp: e.ts,
                publishNotice: e.publish_notice,
            });
        },
    },
    g = {
        publish_options(e, t) {
            let { projectId: n } = t,
                s = k.get(n);
            if (null == s || s.nonce !== e.nonce) return;
            (k.delete(n), clearTimeout(s.timeout));
            let r = e.options;
            !0 !== e.ok ||
            null == r ||
            !Array.isArray(r.destinations) ||
            0 === r.destinations.length ||
            r.destinations.length > 7 ||
            r.destinations.some(
                (e) =>
                    "string" != typeof e?.id ||
                    0 === e.id.length ||
                    e.id.length > 100 ||
                    "string" != typeof e.label ||
                    0 === e.label.length ||
                    e.label.length > 100,
            ) ||
            new Set(
                r.destinations.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ).size !== r.destinations.length ||
            !r.destinations.some((e) => {
                let { id: t } = e;
                return t === r.selected_destination_id;
            })
                ? s.reject(Error(e.error ?? "Could not load publish destinations. Try again."))
                : s.resolve(r);
        },
        async publish_approval_required(e, t) {
            let { projectId: r } = t;
            if ((0, _.d)(e.approval_url, e.approval_kind)) {
                s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: r, approvalUrl: e.approval_url });
                let { promptPublishApproval: t } = await Promise.all([n.e("46233"), n.e("241989"), n.e("574246")]).then(
                    n.bind(n, 200389),
                );
                t(e.approval_url);
            }
        },
        publish_cta(e, t) {
            let { projectId: n } = t;
            null != e.publish_cta &&
                s.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: {
                        publishCta: {
                            surface: C(e.publish_cta.surface),
                            reason: "new_ui" === e.publish_cta.reason ? "new_ui" : "first_publish",
                        },
                    },
                });
        },
        publish_status(e, t) {
            let { projectId: n } = t;
            s.h.dispatch({
                type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                projectId: n,
                published: !0 === e.published,
                hasUnpublishedChanges: !0 === e.has_unpublished_changes,
                surface: C(e.surface),
                previewAppChannels: Array.isArray(e.preview_app_channels)
                    ? e.preview_app_channels.filter((e) => "string" == typeof e)
                    : [],
                previewDevicePermissions: Array.isArray(e.preview_device_permissions)
                    ? e.preview_device_permissions.filter(i.de)
                    : [],
                publishedRevision: "number" == typeof e.published_revision ? e.published_revision : null,
                publishedAt: "string" == typeof e.published_at ? e.published_at : null,
                publishing: !0 === e.publishing,
                patchNotesSent: Array.isArray(e.patch_notes_sent)
                    ? e.patch_notes_sent.flatMap((e) =>
                          "number" == typeof e?.published_revision &&
                          "string" == typeof e.guild_id &&
                          "string" == typeof e.channel_id &&
                          "string" == typeof e.message_id
                              ? [
                                    {
                                        publishedRevision: e.published_revision,
                                        guildId: e.guild_id,
                                        channelId: e.channel_id,
                                        messageId: e.message_id,
                                    },
                                ]
                              : [],
                      )
                    : void 0,
                newUiUnpublished: !0 === e.new_ui_unpublished,
            });
        },
        publish_result(e, t) {
            let { projectId: n } = t;
            s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null });
            let o = y.get(n);
            if ((y.delete(n), null != o && (clearTimeout(o.timeout), o.resolve(e)), !0 !== e.ok))
                (0, p.Is)(n, e.error ?? "publish_result not ok", !1);
            else {
                let e = h.A.getPublishStatus(n);
                (null != e &&
                    s.h.dispatch({
                        type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                        projectId: n,
                        published: !0,
                        hasUnpublishedChanges: !1,
                        surface: e.surface,
                        previewAppChannels: e.previewAppChannels,
                        previewDevicePermissions: e.previewDevicePermissions,
                        publishedRevision: e.publishedRevision,
                        publishedAt: e.publishedAt,
                    }),
                    (function (e) {
                        let t = u.Ay.getProject(e),
                            n = h.A.getPublishStatus(e)?.previewDevicePermissions;
                        if (t?.install_scope !== "user" || "" === t.application_id || null == n) return;
                        let s = t.application_id;
                        d({ applicationId: s, appName: r.A.getApplication(s)?.name ?? t.name, permissions: n });
                    })(n));
            }
        },
        patch_notes_draft(e, t) {
            let { projectId: n } = t,
                s = T.get(n);
            null != s && s.nonce === e.nonce && (T.delete(n), clearTimeout(s.timeout), s.resolve(e));
        },
    };
function E(e) {
    (0, o.KY)(e)?.sendPreparePublish();
}
function S(e, t) {
    let n = !1;
    return new Promise((r, i) => {
        let l = (0, o.KY)(e);
        if (null == l) return void i(Error("Not connected"));
        if (y.has(e)) return void i(Error("Publish already in flight"));
        let a = setTimeout(() => {
            b(e, "Publish timed out");
        }, 9e5);
        (y.set(e, { resolve: r, reject: i, timeout: a }),
            (n = !0),
            s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            l.sendPublish(t);
        } catch (t) {
            (y.delete(e), clearTimeout(a), i(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, p.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            n && s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function m(e) {
    return new Promise((t, n) => {
        let s = (0, o.KY)(e);
        if (null == s) return void n(Error("Not connected"));
        w(e, "Superseded by a newer draft request");
        let r = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => {
                w(e, "Draft timed out");
            }, 45e3);
        T.set(e, { resolve: t, reject: n, timeout: i, nonce: r });
        try {
            s.sendDraftPatchNotes(r);
        } catch (t) {
            (T.delete(e), clearTimeout(i), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
function O(e, t, n) {
    s.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
    try {
        let s = (0, o.KY)(e);
        if (null == s) throw Error("Not connected");
        s.sendPatchNotesSent(t, n);
    } catch (t) {
        console.warn("[conjure] could not record sent patch notes", e, t);
    }
}
let y = new Map();
function b(e, t) {
    (s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: e, approvalUrl: null }), R(e, t));
    let n = y.get(e);
    null != n && (y.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let T = new Map();
function w(e, t) {
    let n = T.get(e);
    null != n && (T.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let N = new Set(["activity", "automod", "widget", "bot"]);
function C(e) {
    return null != e && N.has(e) ? e : null;
}
let k = new Map();
function R(e, t) {
    let n = k.get(e);
    null != n && (k.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
function A(e) {
    return new Promise((t, n) => {
        let s = (0, o.KY)(e);
        if (null == s) return n(Error("Not connected"));
        if (!s.supportsPublishOptions)
            return void t({
                destinations: [{ id: "conjuring", label: "Conjuring" }],
                selected_destination_id: "conjuring",
            });
        R(e, "Superseded by a newer publish request");
        let r = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => R(e, "Could not load publish destinations. Try again."), 15e3);
        k.set(e, { resolve: t, reject: n, timeout: i, nonce: r });
        try {
            s.sendPublishOptions(r);
        } catch {
            R(e, "Could not load publish destinations. Try again.");
        }
    });
}
