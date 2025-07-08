n.d(t, {
    eU: () => l,
    s2: () => o,
    xT: () => s
});
var r = n(570140),
    i = n(566620),
    a = n(317381);
function o(e) {
    let { applicationId: t } = e,
        n = a.ZP.getCurrentEmbeddedActivity();
    (null != n &&
        (0, i.mW)({
            location: n.location,
            applicationId: n.applicationId,
            showFeedback: !1
        }),
        r.Z.dispatch({
            type: 'FRAME_LAUNCH',
            applicationId: t
        }));
}
function s(e) {
    let { applicationId: t } = e;
    r.Z.dispatch({
        type: 'FRAME_STOP',
        applicationId: t
    });
}
function l(e) {
    let { applicationId: t, layoutMode: n } = e;
    r.Z.dispatch({
        type: 'FRAME_UPDATE_LAYOUT_MODE',
        applicationId: t,
        layoutMode: n
    });
}
