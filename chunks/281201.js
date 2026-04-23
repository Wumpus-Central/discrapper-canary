"use strict";
n.d(t, { default: () => C });
var s = n(627968);
n(64700);
var r = n(935462),
    i = n(430690),
    o = n(71448),
    a = n(113294),
    l = n(78196),
    c = n(900491),
    d = n(796099),
    p = n(957295),
    u = n(690095),
    _ = n(652215),
    h = n(974651);
function C(e) {
    let { transitionState: t, onClose: n, analyticsLocation: C } = e,
        {
            slide: f,
            gotoNext: g,
            gotoError: b,
            handleWaitingForConnection: x,
            handleAuthToken: A,
            expectedCallbackState: m,
            callbackData: v,
        } = (0, o.m)(C, _.fg2.XBOX);
    return (0, s.jsx)(r.EO, {
        "data-migration-pending": !0,
        className: h.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, s.jsxs)(i.t, {
            activeSlide: f,
            width: 408,
            children: [
                (0, s.jsx)(i.q, { id: u.N.LANDING, children: (0, s.jsx)(c.A, { onContinue: g, onClose: n }) }),
                (0, s.jsx)(i.q, {
                    id: u.N.PRE_CONNECT,
                    children: (0, s.jsx)(d.A, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: x,
                        onAuthToken: A,
                        onError: b,
                        onClose: n,
                    }),
                }),
                (0, s.jsx)(i.q, {
                    id: u.N.PRE_CONNECT_WAITING,
                    children: (0, s.jsx)(d.A, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: m,
                        onAuthToken: A,
                        onError: b,
                        onClose: n,
                    }),
                }),
                (0, s.jsx)(i.q, {
                    id: u.N.DISCORD_CONSENT,
                    children: (0, s.jsx)(a.A, { authToken: v, onContinue: g, onError: b, onClose: n }),
                }),
                (0, s.jsx)(i.q, { id: u.N.ERROR, children: (0, s.jsx)(l.A, { onContinue: g, onClose: n }) }),
                (0, s.jsx)(i.q, { id: u.N.SUCCESS, children: (0, s.jsx)(p.A, { onClose: n }) }),
            ],
        }),
    });
}
