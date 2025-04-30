e.d(n, { default: () => _ });
var o = e(200651);
e(192379);
var i = e(481060),
    r = e(864762),
    s = e(428681),
    c = e(42338),
    a = e(569932),
    l = e(555638),
    d = e(42011),
    u = e(798930),
    p = e(475286);
function _(t) {
    let { transitionState: n, onClose: e, analyticsLocation: _, platformType: b } = t,
        { slide: C, gotoNext: T, gotoError: h, handleWaitingForConnection: f, handleAuthToken: A, expectedCallbackState: g, callbackData: I, errorCode: N } = (0, r.k)(_, b);
    return (0, o.jsx)(i.Y0X, {
        className: p.modal,
        transitionState: n,
        disableTrack: !0,
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: C,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(a.A, {
                        platformType: b,
                        onContinue: T,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(l.A, {
                        platformType: b,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: f,
                        onAuthToken: A,
                        onError: h,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(l.A, {
                        platformType: b,
                        isWaitingForConnection: !0,
                        expectedCallbackState: g,
                        onAuthToken: A,
                        onError: h,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.E, {
                        platformType: b,
                        authToken: I,
                        onContinue: T,
                        onError: h,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(c.X, {
                        onContinue: T,
                        onClose: e,
                        errorCode: N
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.W, { onClose: e })
                })
            ]
        })
    });
}
