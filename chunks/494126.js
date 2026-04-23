"use strict";
n.r(t),
    n.d(t, {
        launchFrame: () => d,
        stopFrame: () => _,
        updateFramePanelMode: () => c,
        refreshProxyTicket: () => E,
        updateFrameLayoutMode: () => u,
    });
var i = n(228366),
    r = n(795816),
    s = n(907645),
    a = n(574152),
    o = n(933958),
    l = n(582776);
async function d(e) {
    let { applicationId: t } = e;
    i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t });
    try {
        let e,
            n = await (0, r.D2)(t);
        (e = o.Ay.getCurrentEmbeddedActivity()),
            null != e &&
                (0, a.A)().leaveActivity({ location: e.location, applicationId: e.applicationId, showFeedback: !1 }),
            (0, l.Q)(),
            i.h.dispatch({ type: "FRAME_LAUNCH", applicationId: t, proxyTicket: n });
    } catch (r) {
        let e = (0, a.A)(),
            n = await (0, s.f)(r, t);
        throw (
            (e.showLaunchErrorModal(n.message),
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, error: r }),
            r)
        );
    }
}
function _(e) {
    let { applicationId: t } = e;
    i.h.dispatch({ type: "FRAME_STOP", applicationId: t });
}
function u(e) {
    let { applicationId: t, layoutMode: n } = e;
    i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: t, layoutMode: n });
}
function c(e) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", activityPanelMode: e });
}
async function E(e) {
    let { applicationId: t } = e;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !0 });
    try {
        let e = await (0, r.D2)(t);
        i.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: t, proxyTicket: e });
    } catch (i) {
        let e = (0, a.A)(),
            n = await (0, s.f)(i, t);
        return e.showLaunchErrorModal(n.message), !1;
    } finally {
        i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !1 });
    }
    return !0;
}
