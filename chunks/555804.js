n.r(t),
    n.d(t, {
        launchFrame: () => u,
        stopFrame: () => d,
        updateFrameLayoutMode: () => f,
        updateFramePanelMode: () => p,
    });
var r = n(570140),
    i = n(566620),
    a = n(317381),
    o = n(201567),
    s = n(574952),
    l = n(591472),
    c = n(837366);
async function u(e) {
    let { applicationId: t } = e;
    r.Z.dispatch({
        type: "FRAME_LAUNCH_START",
        applicationId: t,
    });
    try {
        let e = await (0, i.a_)(t),
            n = a.ZP.getCurrentEmbeddedActivity();
        null != n &&
            (0, s.Z)().leaveActivity({
                location: n.location,
                applicationId: n.applicationId,
                showFeedback: !1,
            });
        let o = l.Z.getConnectedFrame();
        null != o && o.applicationId !== t && (0, c.Z)().leaveFrame({ applicationId: o.applicationId }),
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
function d(e) {
    let { applicationId: t } = e;
    r.Z.dispatch({
        type: "FRAME_STOP",
        applicationId: t,
    });
}
function f(e) {
    let { applicationId: t, layoutMode: n } = e;
    r.Z.dispatch({
        type: "FRAME_UPDATE_LAYOUT_MODE",
        applicationId: t,
        layoutMode: n,
    });
}
function p(e) {
    r.Z.dispatch({
        type: "FRAME_SET_PANEL_MODE",
        activityPanelMode: e,
    });
}
