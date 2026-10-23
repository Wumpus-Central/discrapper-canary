(n.d(t, { M$: () => R, Mg: () => v, Og: () => N, VY: () => A, Y1: () => m, aF: () => k, uk: () => g }),
    n(323874),
    n(14289),
    n(35956));
var i = n(73153),
    a = n(201718),
    r = n(287809),
    o = n(940874),
    c = n(649121),
    s = n(975189),
    l = n(688954),
    d = n(371169),
    u = n(260498),
    p = n(664619),
    _ = n(1371),
    h = n(513845),
    C = n(392739),
    T = n(573083),
    f = n(855859),
    y = n(691344);
let A = {
        capture_preview(e, t) {
            let { projectId: n, ws: i } = t;
            (!0 !== e.probe && e.spec?.mode !== "widget" && (0, h.T5)(n), w(n, i, e).catch(() => {}));
        },
        control_preview(e, t) {
            let { projectId: n, ws: i } = t;
            ((0, h.T5)(n), U(n, i, e).catch(() => {}));
        },
        control_abort(e, t) {
            let { projectId: n } = t;
            _.A.abortPreviewControl(n);
        },
        control_claim(e, t) {
            let { projectId: n } = t;
            (0, C.n1)(n, e.id);
        },
        capture_claim(e, t) {
            let { projectId: n } = t;
            (0, C.n1)(n, e.id, e.upload_token);
        },
        preview_operation(e, t) {
            let { projectId: n } = t;
            "begin" === e.phase
                ? ((0, h.T5)(n), (0, T.pF)(n, "tuning" === e.mode), _.A.beginPreviewOperation(n))
                : ((0, T.pF)(n, !1), _.A.endPreviewOperation(n));
        },
        widget_refreshed() {
            E();
        },
        overlay_background(e, t) {
            let { projectId: n } = t;
            i.h.dispatch({
                type: "CONJURE_OVERLAY_BACKGROUND_SET",
                projectId: n,
                blur: e.blur,
                imageEtag: e.image_etag,
            });
        },
    },
    g = {
        preview_app_published(e, t) {
            let { projectId: n } = t,
                i = u.Ay.getProject(n)?.preview_application_id;
            null != i && ((0, p._b)(i).catch(() => void 0), !0 === e.has_activity && (0, y.K)(n, { known: !0 }));
        },
        preview_ready(e, t) {
            let { projectId: n } = t;
            (0, o.OA)(n, e);
            let i =
                null != e.integration_installed && null != e.bot_permissions_changed
                    ? {
                          integrationInstalled: e.integration_installed,
                          botPermissionsChanged: e.bot_permissions_changed,
                      }
                    : void 0;
            (null != i &&
                null != e.project &&
                null != e.has_activity &&
                (0, d.Ni)(n, { ...i, project: e.project, hasActivity: e.has_activity }),
                (0, p.tZ)(n, { isPreview: !0, install: i }).catch((e) => {
                    console.error("[conjure] post-preview-publish refresh failed", n, e);
                }));
        },
    };
async function E() {
    let e = r.default.getCurrentUser()?.id;
    if (null != e)
        try {
            await a.A.fetchUserApplicationIdentitiesWithProfiles(e);
        } catch {}
}
function m(e, t) {
    let n = (0, s.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function k(e, t) {
    let { ticket: n, baseUrl: i } = await (0, c.BK)(e),
        a = new URLSearchParams({ ticket: n });
    return `${i}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function R(e, t) {
    let n = await (0, l.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function N(e) {
    let t = await (0, l.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function v(e, t) {
    let { ticket: n, baseUrl: i } = await (0, c.BK)(e);
    return `${i}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function w(e, t, n) {
    let i,
        a = Date.now();
    (console.debug("[conjure] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, f.b)(e, "widget"));
    try {
        i = await _.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.sendCaptureAck(n.id, "accepted"), await (0, C.bm)(e, n.id)),
            resolveUploadUrl: () => b(e),
        });
    } catch (e) {
        (console.error("[conjure] preview capture relay failed", e), (i = { status: "failed" }));
    }
    (console.debug("[conjure] capture relay answered", {
        id: n.id,
        status: i.status,
        code: i.code,
        ms: Date.now() - a,
    }),
        t.sendCaptureAck(n.id, i.status, i.code, i.message));
}
async function U(e, t, n) {
    let i = Date.now();
    console.debug("[conjure] control request received", { id: n.id, build: n.build, steps: n.request?.steps?.length });
    try {
        let a = await _.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, C.bm)(e, n.id)) != null),
        );
        (console.debug("[conjure] control relay answered", { id: n.id, status: a.status, ms: Date.now() - i }),
            "completed" === a.status
                ? t.sendControlAck(n.id, "completed", a.response)
                : "failed" === a.status
                  ? t.sendControlAck(n.id, "failed", void 0, a.message)
                  : t.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[conjure] preview control relay failed", e),
            t.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function b(e) {
    let { ticket: t, baseUrl: n } = await (0, c.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
