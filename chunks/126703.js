n.d(t, { default: () => p });
var r = n(627968);
n(64700);
var s = n(397927),
    i = n(889058),
    o = n(710656),
    a = n(218390),
    c = n(13457),
    l = n(51937),
    d = n(949653),
    f = n(25765),
    b = n(652215),
    u = n(689588);
function p(e) {
    let { transitionState: t, onClose: n, analyticsLocation: p } = e,
        {
            slide: g,
            gotoNext: h,
            gotoError: x,
            handleWaitingForConnection: C,
            handleAuthToken: m,
            expectedCallbackState: y,
            callbackData: j,
        } = (0, i.m)(p, b.fg2.XBOX);
    return (0, r.jsx)(s.EOs, {
        "data-migration-pending": !0,
        className: u.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, r.jsxs)(s.tN_, {
            activeSlide: g,
            width: 408,
            children: [
                (0, r.jsx)(s.q7S, {
                    id: f.N.LANDING,
                    children: (0, r.jsx)(c.A, {
                        onContinue: h,
                        onClose: n,
                    }),
                }),
                (0, r.jsx)(s.q7S, {
                    id: f.N.PRE_CONNECT,
                    children: (0, r.jsx)(l.A, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: C,
                        onAuthToken: m,
                        onError: x,
                        onClose: n,
                    }),
                }),
                (0, r.jsx)(s.q7S, {
                    id: f.N.PRE_CONNECT_WAITING,
                    children: (0, r.jsx)(l.A, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: y,
                        onAuthToken: m,
                        onError: x,
                        onClose: n,
                    }),
                }),
                (0, r.jsx)(s.q7S, {
                    id: f.N.DISCORD_CONSENT,
                    children: (0, r.jsx)(o.A, {
                        authToken: j,
                        onContinue: h,
                        onError: x,
                        onClose: n,
                    }),
                }),
                (0, r.jsx)(s.q7S, {
                    id: f.N.ERROR,
                    children: (0, r.jsx)(a.A, {
                        onContinue: h,
                        onClose: n,
                    }),
                }),
                (0, r.jsx)(s.q7S, {
                    id: f.N.SUCCESS,
                    children: (0, r.jsx)(d.A, { onClose: n }),
                }),
            ],
        }),
    });
}
