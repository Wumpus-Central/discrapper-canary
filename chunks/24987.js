t.d(n, { default: () => g });
var o = t(627968);
t(64700);
var i = t(397927),
    r = t(889058),
    s = t(572196),
    l = t(523858),
    a = t(672517),
    d = t(575957),
    c = t(66337),
    C = t(25765),
    _ = t(652215),
    u = t(689588);
function g(e) {
    let { transitionState: n, onClose: t, analyticsLocation: g } = e,
        {
            slide: h,
            gotoNext: x,
            gotoError: p,
            handleWaitingForConnection: b,
            handleAuthToken: N,
            expectedCallbackState: j,
            callbackData: v,
        } = (0, r.m)(g, _.fg2.CRUNCHYROLL);
    return (0, o.jsx)(i.EOs, {
        "data-migration-pending": !0,
        className: u.yl,
        transitionState: n,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, o.jsxs)(i.tN_, {
            activeSlide: h,
            width: 408,
            children: [
                (0, o.jsx)(i.q7S, { id: C.N.LANDING, children: (0, o.jsx)(a.A, { onContinue: x, onClose: t }) }),
                (0, o.jsx)(i.q7S, {
                    id: C.N.PRE_CONNECT,
                    children: (0, o.jsx)(d.A, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: b,
                        onAuthToken: N,
                        onError: p,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: C.N.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(d.A, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: j,
                        onAuthToken: N,
                        onError: p,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: C.N.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.A, { authToken: v, onContinue: x, onError: p, onClose: t }),
                }),
                (0, o.jsx)(i.q7S, { id: C.N.ERROR, children: (0, o.jsx)(l.A, { onContinue: x, onClose: t }) }),
                (0, o.jsx)(i.q7S, { id: C.N.SUCCESS, children: (0, o.jsx)(c.A, { onClose: t }) }),
            ],
        }),
    });
}
