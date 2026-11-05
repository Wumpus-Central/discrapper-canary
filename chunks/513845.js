var i = e(620632),
    n = e(73153),
    p = e(457827),
    _ = e(95701),
    c = e(260498),
    u = e(951178),
    a = e(519325),
    s = e(802905),
    d = e(357858),
    r = e(652215);
function o(t) {
    a.A.reloadAppFrames(t);
}
function h(t) {
    s.A.isPaused(t) && n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !1 });
}
e.d(
    E,
    {},
    {
        BD: function (t) {
            let E = c.Ay.getProject(t);
            null != E && (o(E.application_id), (0, u._7)(E) && o(E.preview_application_id ?? null));
        },
        CN: async function (t) {
            let { body: E } = await i.Bo.post({ url: r.Rsh.CONJURE_PROJECT_PREVIEW_DM(t), rejectWithError: !0 }),
                e = (0, _.UE)(E);
            return (n.h.dispatch({ type: "CHANNEL_CREATE", channel: e }), e.id);
        },
        GG: function (t) {
            n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
        },
        HV: function (t) {
            n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
        },
        Lw: function (t) {
            n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
        },
        R2: o,
        T5: function (t) {
            (0, d.Td)(t) && h(t);
        },
        _j: h,
        di: function (t, E) {
            (n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !0 }), (0, p.r)(E));
        },
        vX: function (t, E) {
            n.h.dispatch({ type: "CONJURE_GAME_CAPTURE_SELECT", projectId: t, captureId: E });
        },
    },
);
