"use strict";
n.d(t, { A: () => T });
var i = {};
n.r(i),
    n.d(i, {
        launchFrame: () => h,
        refreshProxyTicket: () => g,
        stopFrame: () => p,
        updateFrameLayoutMode: () => E,
        updateFramePanelMode: () => m,
    });
var r = n(523527),
    s = n(267102),
    a = n(567249),
    o = n(574172),
    l = n(228366),
    u = n(795816),
    c = n(907645),
    d = n(574152),
    _ = n(933958),
    f = n(582776);
async function h(e) {
    let { applicationId: t } = e;
    l.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t });
    try {
        let e,
            n = await (0, u.D2)(t);
        (e = _.Ay.getCurrentEmbeddedActivity()),
            null != e &&
                (0, d.A)().leaveActivity({ location: e.location, applicationId: e.applicationId, showFeedback: !1 }),
            (0, f.Q)(),
            l.h.dispatch({ type: "FRAME_LAUNCH", applicationId: t, proxyTicket: n });
    } catch (i) {
        let e = (0, d.A)(),
            n = await (0, c.f)(i, t);
        throw (
            (e.showLaunchErrorModal(n.message),
            l.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, error: i }),
            i)
        );
    }
}
function p(e) {
    let { applicationId: t } = e;
    l.h.dispatch({ type: "FRAME_STOP", applicationId: t });
}
function E(e) {
    let { applicationId: t, layoutMode: n } = e;
    l.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: t, layoutMode: n });
}
function m(e) {
    l.h.dispatch({ type: "FRAME_SET_PANEL_MODE", activityPanelMode: e });
}
async function g(e) {
    let { applicationId: t } = e;
    l.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !0 });
    try {
        let e = await (0, u.D2)(t);
        l.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: t, proxyTicket: e });
    } catch (i) {
        let e = (0, d.A)(),
            n = await (0, c.f)(i, t);
        return e.showLaunchErrorModal(n.message), !1;
    } finally {
        l.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !1 });
    }
    return !0;
}
var A = n(652215);
async function I(e) {
    let t = (0, s.zd)();
    a.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT) && (0, o.close)(A.MLl.ACTIVITY_POPOUT),
        await h(e),
        t === A.BRT.POPOUT && (0, r.A)();
}
let T = { ...i, launchFrame: I };
