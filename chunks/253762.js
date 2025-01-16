e.r(t),
    e.d(t, {
        default: function () {
            return A;
        }
    });
var o = e(200651);
e(192379);
var i = e(481060),
    c = e(864762),
    r = e(428681),
    s = e(42338),
    l = e(569932),
    a = e(555638),
    d = e(42011),
    u = e(798930),
    p = e(38920);
function A(n) {
    let { transitionState: t, onClose: e, analyticsLocation: A, platformType: T } = n,
        { slide: f, gotoNext: C, gotoError: I, handleWaitingForConnection: h, handleAuthToken: _, expectedCallbackState: N, callbackData: P, errorCode: S } = (0, c.k)(A, T);
    return (0, o.jsx)(i.ModalRoot, {
        className: p.modal,
        transitionState: t,
        disableTrack: !0,
        children: (0, o.jsxs)(i.Slides, {
            activeSlide: f,
            width: 408,
            children: [
                (0, o.jsx)(i.Slide, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(l.A, {
                        platformType: T,
                        onContinue: C,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(a.A, {
                        platformType: T,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: _,
                        onError: I,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(a.A, {
                        platformType: T,
                        isWaitingForConnection: !0,
                        expectedCallbackState: N,
                        onAuthToken: _,
                        onError: I,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(r.E, {
                        platformType: T,
                        authToken: P,
                        onContinue: C,
                        onError: I,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(s.X, {
                        onContinue: C,
                        onClose: e,
                        errorCode: S
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.W, { onClose: e })
                })
            ]
        })
    });
}
