n.r(t),
    n.d(t, {
        launchFrame: () => u,
        refreshProxyTicket: () => _,
        stopFrame: () => d,
        updateFrameLayoutMode: () => f,
        updateFramePanelMode: () => p,
    });
var r = n(73153),
    i = n(795816),
    a = n(933958),
    s = n(907645),
    o = n(574152),
    l = n(91242),
    c = n(580954);
async function u(e) {
    let { applicationId: t } = e;
    r.h.dispatch({
        type: "FRAME_LAUNCH_START",
        applicationId: t,
    });
    try {
        let e = await (0, i.D2)(t),
            n = a.Ay.getCurrentEmbeddedActivity();
        null != n &&
            (0, o.A)().leaveActivity({
                location: n.location,
                applicationId: n.applicationId,
                showFeedback: !1,
            });
        let s = l.A.getConnectedFrame();
        null != s &&
            s.applicationId !== t &&
            (0, c.A)().leaveFrame({
                applicationId: s.applicationId,
            }),
            r.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                proxyTicket: e,
            });
    } catch (i) {
        let e = (0, o.A)(),
            n = await (0, s.f)(i, t);
        throw (
            (e.showLaunchErrorModal(n.message),
            r.h.dispatch({
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
    r.h.dispatch({
        type: "FRAME_STOP",
        applicationId: t,
    });
}

function f(e) {
    let { applicationId: t, layoutMode: n } = e;
    r.h.dispatch({
        type: "FRAME_UPDATE_LAYOUT_MODE",
        applicationId: t,
        layoutMode: n,
    });
}

function p(e) {
    r.h.dispatch({
        type: "FRAME_SET_PANEL_MODE",
        activityPanelMode: e,
    });
}
async function _(e) {
    let { applicationId: t } = e;
    r.h.dispatch({
        type: "FRAME_SET_PROXY_TICKET_REFRESHING",
        applicationId: t,
        refreshing: !0,
    });
    try {
        let e = await (0, i.D2)(t);
        r.h.dispatch({
            type: "FRAME_UPDATE_PROXY_TICKET",
            applicationId: t,
            proxyTicket: e,
        });
    } catch (r) {
        let e = (0, o.A)(),
            n = await (0, s.f)(r, t);
        return e.showLaunchErrorModal(n.message), !1;
    } finally {
        r.h.dispatch({
            type: "FRAME_SET_PROXY_TICKET_REFRESHING",
            applicationId: t,
            refreshing: !1,
        });
    }
    return !0;
}
