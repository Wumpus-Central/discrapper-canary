"use strict";
n.d(t, { default: () => b });
var s = n(627968);
n(64700);
var r = n(397927),
    o = n(71448),
    i = n(113294),
    a = n(78196),
    c = n(900491),
    l = n(796099),
    d = n(957295),
    p = n(690095),
    u = n(652215),
    _ = n(376978);
function b(e) {
    let { transitionState: t, onClose: n, analyticsLocation: b } = e,
        {
            slide: f,
            gotoNext: C,
            gotoError: g,
            handleWaitingForConnection: x,
            handleAuthToken: h,
            expectedCallbackState: m,
            callbackData: j,
        } = (0, o.m)(b, u.fg2.XBOX);
    return (0, s.jsx)(r.EOs, {
        "data-migration-pending": !0,
        className: _.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, s.jsxs)(r.tN_, {
            activeSlide: f,
            width: 408,
            children: [
                (0, s.jsx)(r.q7S, { id: p.N.LANDING, children: (0, s.jsx)(c.A, { onContinue: C, onClose: n }) }),
                (0, s.jsx)(r.q7S, {
                    id: p.N.PRE_CONNECT,
                    children: (0, s.jsx)(l.A, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: x,
                        onAuthToken: h,
                        onError: g,
                        onClose: n,
                    }),
                }),
                (0, s.jsx)(r.q7S, {
                    id: p.N.PRE_CONNECT_WAITING,
                    children: (0, s.jsx)(l.A, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: m,
                        onAuthToken: h,
                        onError: g,
                        onClose: n,
                    }),
                }),
                (0, s.jsx)(r.q7S, {
                    id: p.N.DISCORD_CONSENT,
                    children: (0, s.jsx)(i.A, { authToken: j, onContinue: C, onError: g, onClose: n }),
                }),
                (0, s.jsx)(r.q7S, { id: p.N.ERROR, children: (0, s.jsx)(a.A, { onContinue: C, onClose: n }) }),
                (0, s.jsx)(r.q7S, { id: p.N.SUCCESS, children: (0, s.jsx)(d.A, { onClose: n }) }),
            ],
        }),
    });
}
