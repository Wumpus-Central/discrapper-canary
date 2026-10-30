(n.d(t, { M$: () => C, Mg: () => N, Og: () => k, VY: () => m, Y1: () => b, aF: () => T, uk: () => y }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    s = n(201718),
    o = n(287809),
    i = n(940874),
    l = n(649121),
    a = n(975189),
    c = n(688954),
    d = n(371169),
    u = n(260498),
    p = n(664619),
    h = n(1371),
    _ = n(513845),
    f = n(392739),
    g = n(573083),
    E = n(855859),
    S = n(691344);
let m = {
        capture_preview(e, t) {
            let { projectId: n, ws: r } = t;
            (!0 !== e.probe && e.spec?.mode !== "widget" && (0, _.T5)(n), w(n, r, e).catch(() => {}));
        },
        control_preview(e, t) {
            let { projectId: n, ws: r } = t;
            ((0, _.T5)(n), A(n, r, e).catch(() => {}));
        },
        control_abort(e, t) {
            let { projectId: n } = t;
            h.A.abortPreviewControl(n);
        },
        control_claim(e, t) {
            let { projectId: n } = t;
            (0, f.n1)(n, e.id);
        },
        capture_claim(e, t) {
            let { projectId: n } = t;
            (0, f.n1)(n, e.id, e.upload_token);
        },
        preview_operation(e, t) {
            let { projectId: n } = t;
            "begin" === e.phase
                ? ((0, _.T5)(n), (0, g.pF)(n, "tuning" === e.mode), h.A.beginPreviewOperation(n))
                : ((0, g.pF)(n, !1), h.A.endPreviewOperation(n));
        },
        widget_refreshed() {
            O();
        },
        overlay_background(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_OVERLAY_BACKGROUND_SET",
                projectId: n,
                blur: e.blur,
                imageEtag: e.image_etag,
            });
        },
    },
    y = {
        preview_app_published(e, t) {
            let { projectId: n } = t,
                r = u.Ay.getProject(n)?.preview_application_id;
            null != r && ((0, p._b)(r).catch(() => void 0), !0 === e.has_activity && (0, S.K)(n, { known: !0 }));
        },
        preview_ready(e, t) {
            let { projectId: n } = t;
            (0, i.OA)(n, e);
            let r =
                null != e.integration_installed && null != e.bot_permissions_changed
                    ? {
                          integrationInstalled: e.integration_installed,
                          botPermissionsChanged: e.bot_permissions_changed,
                      }
                    : void 0;
            (null != r &&
                null != e.project &&
                null != e.has_activity &&
                (0, d.Ni)(n, { ...r, project: e.project, hasActivity: e.has_activity }),
                (0, p.tZ)(n, { isPreview: !0, install: r }).catch((e) => {
                    console.error("[conjure] post-preview-publish refresh failed", n, e);
                }));
        },
    };
async function O() {
    let e = o.default.getCurrentUser()?.id;
    if (null != e)
        try {
            await s.A.fetchUserApplicationIdentitiesWithProfiles(e);
        } catch {}
}
function b(e, t) {
    let n = (0, a.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function T(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.BK)(e),
        s = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${s}`;
}
async function C(e, t) {
    let n = await (0, c.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function k(e) {
    let t = await (0, c.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function N(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function w(e, t, n) {
    let r,
        s = Date.now();
    (console.debug("[conjure] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, E.b)(e, "widget"));
    try {
        r = await h.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.sendCaptureAck(n.id, "accepted"), await (0, f.bm)(e, n.id)),
            resolveUploadUrl: () => R(e),
        });
    } catch (e) {
        (console.error("[conjure] preview capture relay failed", e), (r = { status: "failed" }));
    }
    (console.debug("[conjure] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - s,
    }),
        t.sendCaptureAck(n.id, r.status, r.code, r.message));
}
async function A(e, t, n) {
    let r = Date.now();
    console.debug("[conjure] control request received", { id: n.id, build: n.build, steps: n.request?.steps?.length });
    try {
        let s = await h.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, f.bm)(e, n.id)) != null),
        );
        (console.debug("[conjure] control relay answered", { id: n.id, status: s.status, ms: Date.now() - r }),
            "completed" === s.status
                ? t.sendControlAck(n.id, "completed", s.response)
                : "failed" === s.status
                  ? t.sendControlAck(n.id, "failed", void 0, s.message)
                  : t.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[conjure] preview control relay failed", e),
            t.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function R(e) {
    let { ticket: t, baseUrl: n } = await (0, l.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
