(n.d(t, { M$: () => v, Mg: () => R, Og: () => N, VY: () => g, Y1: () => m, aF: () => k, uk: () => A }),
    n(323874),
    n(14289),
    n(35956));
var r = n(73153),
    i = n(201718),
    a = n(287809),
    o = n(940874),
    l = n(649121),
    c = n(975189),
    s = n(688954),
    u = n(371169),
    d = n(260498),
    p = n(664619),
    _ = n(1371),
    h = n(513845),
    f = n(392739),
    C = n(573083),
    y = n(855859),
    T = n(691344);
let g = {
        capture_preview(e, t) {
            let { projectId: n, ws: r } = t;
            (!0 !== e.probe && e.spec?.mode !== "widget" && (0, h.T5)(n), w(n, r, e).catch(() => {}));
        },
        control_preview(e, t) {
            let { projectId: n, ws: r } = t;
            ((0, h.T5)(n), b(n, r, e).catch(() => {}));
        },
        control_abort(e, t) {
            let { projectId: n } = t;
            _.A.abortPreviewControl(n);
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
                ? ((0, h.T5)(n), (0, C.pF)(n, "tuning" === e.mode), _.A.beginPreviewOperation(n))
                : ((0, C.pF)(n, !1), _.A.endPreviewOperation(n));
        },
        widget_refreshed() {
            E();
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
    A = {
        preview_app_published(e, t) {
            let { projectId: n } = t,
                r = d.Ay.getProject(n)?.preview_application_id;
            null != r && ((0, p._b)(r).catch(() => void 0), !0 === e.has_activity && (0, T.K)(n, { known: !0 }));
        },
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
                (0, u.Ni)(n, { ...r, project: e.project, hasActivity: e.has_activity }),
                (0, p.tZ)(n, { isPreview: !0, install: r }).catch((e) => {
                    console.error("[conjure] post-preview-publish refresh failed", n, e);
                }));
        },
    };
async function E() {
    let e = a.default.getCurrentUser()?.id;
    if (null != e)
        try {
            await i.A.fetchUserApplicationIdentitiesWithProfiles(e);
        } catch {}
}
function m(e, t) {
    let n = (0, c.KY)(e);
    if (null == n) return !1;
    try {
        return (n.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
async function k(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.BK)(e),
        i = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${i}`;
}
async function v(e, t) {
    let n = await (0, s.h)(e, "/agent/overlay-background", { method: "PUT", body: t });
    if (!n.ok) throw Error(`overlay background upload failed (${n.status})`);
}
async function N(e) {
    let t = await (0, s.h)(e, "/agent/overlay-background", { method: "DELETE" });
    if (!t.ok) throw Error(`overlay background reset failed (${t.status})`);
}
async function R(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.BK)(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function w(e, t, n) {
    let r,
        i = Date.now();
    (console.debug("[conjure] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, y.b)(e, "widget"));
    try {
        r = await _.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.sendCaptureAck(n.id, "accepted"), await (0, f.bm)(e, n.id)),
            resolveUploadUrl: () => U(e),
        });
    } catch (e) {
        (console.error("[conjure] preview capture relay failed", e), (r = { status: "failed" }));
    }
    (console.debug("[conjure] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - i,
    }),
        t.sendCaptureAck(n.id, r.status, r.code, r.message));
}
async function b(e, t, n) {
    let r = Date.now();
    console.debug("[conjure] control request received", { id: n.id, build: n.build, steps: n.request?.steps?.length });
    try {
        let i = await _.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.sendControlAck(n.id, "accepted"), (await (0, f.bm)(e, n.id)) != null),
        );
        (console.debug("[conjure] control relay answered", { id: n.id, status: i.status, ms: Date.now() - r }),
            "completed" === i.status
                ? t.sendControlAck(n.id, "completed", i.response)
                : "failed" === i.status
                  ? t.sendControlAck(n.id, "failed", void 0, i.message)
                  : t.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[conjure] preview control relay failed", e),
            t.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function U(e) {
    let { ticket: t, baseUrl: n } = await (0, l.BK)(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
