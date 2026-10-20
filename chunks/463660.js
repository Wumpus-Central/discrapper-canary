(n.d(t, { M$: () => E, Mg: () => k, Og: () => m, VY: () => y, Y1: () => g, aF: () => A, uk: () => T }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    a = n(940874),
    i = n(649121),
    o = n(975189),
    l = n(688954),
    c = n(371169),
    s = n(260498),
    u = n(664619),
    d = n(1371),
    p = n(513845),
    _ = n(392739),
    h = n(573083),
    C = n(855859),
    f = n(691344);
let y = {
        capture_preview(e, t) {
            let { projectId: n, ws: r } = t;
            (!0 !== e.probe && e.spec?.mode !== "widget" && (0, p.T5)(n), v(n, r, e).catch(() => {}));
        },
        control_preview(e, t) {
            let { projectId: n, ws: r } = t;
            ((0, p.T5)(n), N(n, r, e).catch(() => {}));
        },
        control_abort(e, t) {
            let { projectId: n } = t;
            d.A.abortPreviewControl(n);
        },
        control_claim(e, t) {
            let { projectId: n } = t;
            (0, _.n1)(n, e.id);
        },
        capture_claim(e, t) {
            let { projectId: n } = t;
            (0, _.n1)(n, e.id, e.upload_token);
        },
        preview_operation(e, t) {
            let { projectId: n } = t;
            "begin" === e.phase
                ? ((0, p.T5)(n), (0, h.pF)(n, "tuning" === e.mode), d.A.beginPreviewOperation(n))
                : ((0, h.pF)(n, !1), d.A.endPreviewOperation(n));
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
    T = {
        preview_app_published(e, t) {
            let { projectId: n } = t,
                r = s.Ay.getProject(n)?.preview_application_id;
            null != r && ((0, u._b)(r).catch(() => void 0), !0 === e.has_activity && (0, f.K)(n, { known: !0 }));
        },
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
                (0, u.tZ)(n, { isPreview: !0, install: r }).catch((e) => {
                    console.error("[conjure] post-preview-publish refresh failed", n, e);
                }));
        },
    };
function g(e, t) {
    let n = (0, o.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function A(e, t) {
    let { ticket: n, baseUrl: r } = await (0, i.BK)(e),
        a = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function E(e, t) {
    let n = await (0, l.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function m(e) {
    let t = await (0, l.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function k(e, t) {
    let { ticket: n, baseUrl: r } = await (0, i.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function v(e, t, n) {
    let r,
        a = Date.now();
    (console.debug("[conjure] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, C.b)(e, "widget"));
    try {
        r = await d.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.sendCaptureAck(n.id, "accepted"), await (0, _.bm)(e, n.id)),
            resolveUploadUrl: () => R(e),
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
async function N(e, t, n) {
    let r = Date.now();
    console.debug("[conjure] control request received", { id: n.id, build: n.build, steps: n.request?.steps?.length });
    try {
        let a = await d.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, _.bm)(e, n.id)) != null),
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
async function R(e) {
    let { ticket: t, baseUrl: n } = await (0, i.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
