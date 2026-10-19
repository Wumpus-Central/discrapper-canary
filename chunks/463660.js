(n.d(t, { M$: () => g, Mg: () => k, Og: () => A, VY: () => f, Y1: () => y, aF: () => T, uk: () => C }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    a = n(940874),
    o = n(649121),
    i = n(975189),
    l = n(688954),
    c = n(371169),
    s = n(664619),
    u = n(1371),
    d = n(513845),
    p = n(392739),
    _ = n(573083),
    h = n(855859);
let f = {
        capture_preview(e, t) {
            let { projectId: n, ws: r } = t;
            (!0 !== e.probe && e.spec?.mode !== "widget" && (0, d.T5)(n), E(n, r, e).catch(() => {}));
        },
        control_preview(e, t) {
            let { projectId: n, ws: r } = t;
            ((0, d.T5)(n), m(n, r, e).catch(() => {}));
        },
        control_abort(e, t) {
            let { projectId: n } = t;
            u.A.abortPreviewControl(n);
        },
        control_claim(e, t) {
            let { projectId: n } = t;
            (0, p.n1)(n, e.id);
        },
        capture_claim(e, t) {
            let { projectId: n } = t;
            (0, p.n1)(n, e.id, e.upload_token);
        },
        preview_operation(e, t) {
            let { projectId: n } = t;
            "begin" === e.phase
                ? ((0, d.T5)(n), (0, _.pF)(n, "tuning" === e.mode), u.A.beginPreviewOperation(n))
                : ((0, _.pF)(n, !1), u.A.endPreviewOperation(n));
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
    C = {
        preview_ready(e, t) {
            let { projectId: n } = t;
            (0, a.OA)(n, e);
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
                (0, c.Ni)(n, { ...r, project: e.project, hasActivity: e.has_activity }),
                (0, s.tZ)(n, { isPreview: !0, install: r }).catch((e) => {
                    console.error("[conjure] post-preview-publish refresh failed", n, e);
                }));
        },
    };
function y(e, t) {
    let n = (0, i.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function T(e, t) {
    let { ticket: n, baseUrl: r } = await (0, o.BK)(e),
        a = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function g(e, t) {
    let n = await (0, l.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function A(e) {
    let t = await (0, l.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function k(e, t) {
    let { ticket: n, baseUrl: r } = await (0, o.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function E(e, t, n) {
    let r,
        a = Date.now();
    (console.debug("[conjure] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, h.b)(e, "widget"));
    try {
        r = await u.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.sendCaptureAck(n.id, "accepted"), await (0, p.bm)(e, n.id)),
            resolveUploadUrl: () => v(e),
        });
    } catch (e) {
        (console.error("[conjure] preview capture relay failed", e), (r = { status: "failed" }));
    }
    (console.debug("[conjure] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - a,
    }),
        t.sendCaptureAck(n.id, r.status, r.code, r.message));
}
async function m(e, t, n) {
    let r = Date.now();
    console.debug("[conjure] control request received", { id: n.id, build: n.build, steps: n.request?.steps?.length });
    try {
        let a = await u.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, p.bm)(e, n.id)) != null),
        );
        (console.debug("[conjure] control relay answered", { id: n.id, status: a.status, ms: Date.now() - r }),
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
async function v(e) {
    let { ticket: t, baseUrl: n } = await (0, o.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
