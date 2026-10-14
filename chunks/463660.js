(n.d(t, { M$: () => T, Mg: () => E, Og: () => y, VY: () => _, Y1: () => f, aF: () => C, uk: () => h }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    o = n(940874),
    a = n(649121),
    i = n(975189),
    c = n(688954),
    l = n(664619),
    s = n(1371),
    u = n(392739),
    d = n(573083),
    p = n(855859);
let _ = {
        capture_preview(e, t) {
            let { projectId: n, ws: r } = t;
            g(n, r, e).catch(() => {});
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
            ((0, o.OA)(n, e),
                (0, l.tZ)(n, { isPreview: !0 }).catch((e) => {
                    console.error("[conjure] post-preview-publish refresh failed", n, e);
                }));
        },
    };
function f(e, t) {
    let n = (0, i.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function C(e, t) {
    let { ticket: n, baseUrl: r } = await (0, a.BK)(e),
        o = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${o}`;
}
async function T(e, t) {
    let n = await (0, c.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function y(e) {
    let t = await (0, c.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function E(e, t) {
    let { ticket: n, baseUrl: r } = await (0, a.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function g(e, t, n) {
    let r,
        o = Date.now();
    (console.debug("[conjure] capture request received", { id: n.id, build: n.build, probe: n.probe }),
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
async function A(e, t, n) {
    let r = Date.now();
    console.debug("[conjure] control request received", { id: n.id, build: n.build, steps: n.request?.steps?.length });
    try {
        let o = await s.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, u.bm)(e, n.id)) != null),
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
async function k(e) {
    let { ticket: t, baseUrl: n } = await (0, a.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
