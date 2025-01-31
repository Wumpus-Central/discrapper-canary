e.d(n, { default: () => p });
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
    _ = e(38920);
function p(t) {
    let { transitionState: n, onClose: e, analyticsLocation: p, platformType: A } = t,
        { slide: T, gotoNext: C, gotoError: I, handleWaitingForConnection: b, handleAuthToken: f, expectedCallbackState: h, callbackData: N, errorCode: P } = (0, r.k)(p, A);
    return (0, o.jsx)(i.Y0X, {
        className: _.modal,
        transitionState: n,
        disableTrack: !0,
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: T,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(a.A, {
                        platformType: A,
                        onContinue: C,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(l.A, {
                        platformType: A,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: b,
                        onAuthToken: f,
                        onError: I,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(l.A, {
                        platformType: A,
                        isWaitingForConnection: !0,
                        expectedCallbackState: h,
                        onAuthToken: f,
                        onError: I,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.E, {
                        platformType: A,
                        authToken: N,
                        onContinue: C,
                        onError: I,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(c.X, {
                        onContinue: C,
                        onClose: e,
                        errorCode: P
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
