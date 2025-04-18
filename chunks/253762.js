n.d(e, { default: () => _ });
var o = n(200651);
n(192379);
var i = n(481060),
    r = n(864762),
    s = n(428681),
    c = n(42338),
    a = n(569932),
    d = n(555638),
    l = n(42011),
    u = n(798930),
    p = n(475286);
function _(t) {
    let { transitionState: e, onClose: n, analyticsLocation: _, platformType: b } = t,
        { slide: N, gotoNext: C, gotoError: T, handleWaitingForConnection: h, handleAuthToken: f, expectedCallbackState: A, callbackData: g, errorCode: I } = (0, r.k)(_, b);
    return (0, o.jsx)(i.Y0X, {
        className: p.modal,
        transitionState: e,
        disableTrack: !0,
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: N,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(a.A, {
                        platformType: b,
                        onContinue: C,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(d.A, {
                        platformType: b,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: f,
                        onError: T,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(d.A, {
                        platformType: b,
                        isWaitingForConnection: !0,
                        expectedCallbackState: A,
                        onAuthToken: f,
                        onError: T,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.E, {
                        platformType: b,
                        authToken: g,
                        onContinue: C,
                        onError: T,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(c.X, {
                        onContinue: C,
                        onClose: n,
                        errorCode: I
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(l.W, { onClose: n })
                })
            ]
        })
    });
}
