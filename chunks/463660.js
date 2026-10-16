(n.d(t, { M$: () => T, Mg: () => E, Og: () => g, VY: () => h, Y1: () => C, aF: () => y, uk: () => f }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    o = n(940874),
    i = n(649121),
    a = n(975189),
    c = n(688954),
    l = n(371169),
    s = n(664619),
    u = n(1371),
    d = n(392739),
    p = n(573083),
    _ = n(855859);
let h = {
        capture_preview(e, t) {
            let { projectId: n, ws: r } = t;
            A(n, r, e).catch(() => {});
        },
        control_preview(e, t) {
            let { projectId: n, ws: r } = t;
            k(n, r, e).catch(() => {});
        },
        control_abort(e, t) {
            let { projectId: n } = t;
            u.A.abortPreviewControl(n);
        },
        control_claim(e, t) {
            let { projectId: n } = t;
            (0, d.n1)(n, e.id);
        },
        capture_claim(e, t) {
            let { projectId: n } = t;
            (0, d.n1)(n, e.id, e.upload_token);
        },
        preview_operation(e, t) {
            let { projectId: n } = t;
            "begin" === e.phase
                ? ((0, p.pF)(n, "tuning" === e.mode), u.A.beginPreviewOperation(n))
                : ((0, p.pF)(n, !1), u.A.endPreviewOperation(n));
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
    f = {
        preview_ready(e, t) {
            let { projectId: n } = t;
            (0, o.OA)(n, e);
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
                (0, l.Ni)(n, { ...r, project: e.project, hasActivity: e.has_activity }),
                (0, s.tZ)(n, { isPreview: !0, install: r }).catch((e) => {
                    console.error("[conjure] post-preview-publish refresh failed", n, e);
                }));
        },
    };
function C(e, t) {
    let n = (0, a.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function y(e, t) {
    let { ticket: n, baseUrl: r } = await (0, i.BK)(e),
        o = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${o}`;
}
async function T(e, t) {
    let n = await (0, c.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function g(e) {
    let t = await (0, c.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function E(e, t) {
    let { ticket: n, baseUrl: r } = await (0, i.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function A(e, t, n) {
    let r,
        o = Date.now();
    (console.debug("[conjure] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, _.b)(e, "widget"));
    try {
        r = await u.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.sendCaptureAck(n.id, "accepted"), await (0, d.bm)(e, n.id)),
            resolveUploadUrl: () => m(e),
        });
    } catch (e) {
        (console.error("[conjure] preview capture relay failed", e), (r = { status: "failed" }));
    }
    (console.debug("[conjure] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - o,
    }),
        t.sendCaptureAck(n.id, r.status, r.code, r.message));
}
async function k(e, t, n) {
    let r = Date.now();
    console.debug("[conjure] control request received", { id: n.id, build: n.build, steps: n.request?.steps?.length });
    try {
        let o = await u.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, d.bm)(e, n.id)) != null),
        );
        (console.debug("[conjure] control relay answered", { id: n.id, status: o.status, ms: Date.now() - r }),
            "completed" === o.status
                ? t.sendControlAck(n.id, "completed", o.response)
                : "failed" === o.status
                  ? t.sendControlAck(n.id, "failed", void 0, o.message)
                  : t.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[conjure] preview control relay failed", e),
            t.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function m(e) {
    let { ticket: t, baseUrl: n } = await (0, i.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
