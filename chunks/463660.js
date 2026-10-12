(n.d(t, { M$: () => T, Mg: () => y, Og: () => g, VY: () => _, Y1: () => f, aF: () => C, uk: () => h }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    a = n(940874),
    i = n(382541),
    o = n(649121),
    c = n(975189),
    l = n(664619),
    s = n(649162),
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
            ((0, a.OA)(n, e),
                (0, l.tZ)(n, { isPreview: !0 }).catch((e) => {
                    console.error("[vibegrations] post-preview-publish refresh failed", n, e);
                }));
        },
    };
function f(e, t) {
    let n = (0, c.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function C(e, t) {
    let { ticket: n, baseUrl: r } = await (0, o.BK)(e),
        a = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function T(e, t) {
    let { ticket: n, baseUrl: r } = await (0, i.d)(e),
        a = await fetch(`${r}/agent/overlay-background?${new URLSearchParams({ ticket: n })}`, {
            method: "PUT",
            body: t,
        });
    if (!a.ok) throw Error(`overlay background upload failed (${a.status})`);
}
async function g(e) {
    let { ticket: t, baseUrl: n } = await (0, i.d)(e),
        r = await fetch(`${n}/agent/overlay-background?${new URLSearchParams({ ticket: t })}`, { method: "DELETE" });
    if (!r.ok) throw Error(`overlay background reset failed (${r.status})`);
}
async function y(e, t) {
    let { ticket: n, baseUrl: r } = await (0, o.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function E(e, t, n) {
    let r,
        a = Date.now();
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
        ms: Date.now() - a,
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
        let a = await s.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, u.bm)(e, n.id)) != null),
        );
        (console.debug("[vibegrations] control relay answered", { id: n.id, status: a.status, ms: Date.now() - r }),
            "completed" === a.status
                ? t.sendControlAck(n.id, "completed", a.response)
                : "failed" === a.status
                  ? t.sendControlAck(n.id, "failed", void 0, a.message)
                  : t.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[vibegrations] preview control relay failed", e),
            t.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function k(e) {
    let { ticket: t, baseUrl: n } = await (0, o.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
