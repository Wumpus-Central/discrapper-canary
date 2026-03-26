t.d(n, { default: () => g });
var o = t(627968);
t(64700);
var i = t(397927),
    r = t(71448),
    s = t(52722),
    l = t(270640),
    a = t(347103),
    d = t(194887),
    c = t(6059),
    C = t(690095),
    _ = t(652215),
    u = t(58123);
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
