(n.d(t, { M$: () => T, Mg: () => y, Og: () => g, VY: () => _, Y1: () => f, aF: () => C, uk: () => h }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    i = n(940874),
    a = n(649121),
    o = n(975189),
    c = n(688954),
    l = n(664619),
    s = n(1371),
    u = n(392739),
    d = n(573083),
    p = n(855859);
let _ = {
        capture_preview(e, t) {
            let { projectId: n, ws: r } = t;
            E(n, r, e).catch(() => {});
        },
        control_preview(e, t) {
            let { projectId: n, ws: r } = t;
            A(n, r, e).catch(() => {});
        },
        control_abort(e, t) {
            let { projectId: n } = t;
            s.A.abortPreviewControl(n);
        },
        control_claim(e, t) {
            let { projectId: n } = t;
            (0, u.n1)(n, e.id);
        },
        capture_claim(e, t) {
            let { projectId: n } = t;
            (0, u.n1)(n, e.id, e.upload_token);
        },
        preview_operation(e, t) {
            let { projectId: n } = t;
            "begin" === e.phase
                ? ((0, d.pF)(n, "tuning" === e.mode), s.A.beginPreviewOperation(n))
                : ((0, d.pF)(n, !1), s.A.endPreviewOperation(n));
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
    h = {
        preview_ready(e, t) {
            let { projectId: n } = t;
            ((0, i.OA)(n, e),
                (0, l.tZ)(n, { isPreview: !0 }).catch((e) => {
                    console.error("[vibegrations] post-preview-publish refresh failed", n, e);
                }));
        },
    };
function f(e, t) {
    let n = (0, o.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function C(e, t) {
    let { ticket: n, baseUrl: r } = await (0, a.BK)(e),
        i = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${i}`;
}
async function T(e, t) {
    let n = await (0, c.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function g(e) {
    let t = await (0, c.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function y(e, t) {
    let { ticket: n, baseUrl: r } = await (0, a.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function E(e, t, n) {
    let r,
        i = Date.now();
    (console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, p.b)(e, "widget"));
    try {
        r = await s.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.sendCaptureAck(n.id, "accepted"), await (0, u.bm)(e, n.id)),
            resolveUploadUrl: () => k(e),
        });
    } catch (e) {
        (console.error("[vibegrations] preview capture relay failed", e), (r = { status: "failed" }));
    }
    (console.debug("[vibegrations] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - i,
    }),
        t.sendCaptureAck(n.id, r.status, r.code, r.message));
}
async function A(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let i = await s.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, u.bm)(e, n.id)) != null),
        );
        (console.debug("[vibegrations] control relay answered", { id: n.id, status: i.status, ms: Date.now() - r }),
            "completed" === i.status
                ? t.sendControlAck(n.id, "completed", i.response)
                : "failed" === i.status
                  ? t.sendControlAck(n.id, "failed", void 0, i.message)
                  : t.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[vibegrations] preview control relay failed", e),
            t.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function k(e) {
    let { ticket: t, baseUrl: n } = await (0, a.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
