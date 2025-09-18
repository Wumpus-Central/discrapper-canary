n.r(t),
    n.d(t, {
        launchFrame: () => l,
        stopFrame: () => c,
        updateFrameLayoutMode: () => u,
    });
var r = n(570140),
    i = n(566620),
    a = n(317381),
    o = n(201567),
    s = n(574952);
async function l(e) {
    let { applicationId: t } = e;
    r.Z.dispatch({
        type: "FRAME_LAUNCH_START",
        applicationId: t,
    });
    try {
        let e = await (0, i.a_)(t),
            n = a.ZP.getCurrentEmbeddedActivity();
        null != n &&
            (0, i.mW)({
                location: n.location,
                applicationId: n.applicationId,
                showFeedback: !1,
            }),
            r.Z.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                proxyTicket: e,
            });
    } catch (i) {
        let e = (0, s.Z)(),
            n = await (0, o.k)(i, t);
        throw (
            (e.showLaunchErrorModal(n.message),
            r.Z.dispatch({
                type: "FRAME_LAUNCH_FAIL",
                applicationId: t,
                error: i,
            }),
            i)
        );
    }
}
function c(e) {
    let { applicationId: t } = e;
    r.Z.dispatch({
        type: "FRAME_STOP",
        applicationId: t,
    });
}
function u(e) {
    let { applicationId: t, layoutMode: n } = e;
    r.Z.dispatch({
        type: "FRAME_UPDATE_LAYOUT_MODE",
        applicationId: t,
        layoutMode: n,
    });
}
