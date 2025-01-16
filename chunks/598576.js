t.r(n),
    t.d(n, {
        default: function () {
            return x;
        }
    });
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(864762),
    c = t(509340),
    s = t(135184),
    a = t(409553),
    l = t(494801),
    d = t(319392),
    u = t(798930),
    f = t(981631),
    p = t(38920);
function x(e) {
    let { transitionState: n, onClose: t, analyticsLocation: x } = e,
        { slide: C, gotoNext: g, gotoError: b, handleWaitingForConnection: h, handleAuthToken: _, expectedCallbackState: m, callbackData: v } = (0, r.k)(x, f.ABu.XBOX);
    return (0, o.jsx)(i.ModalRoot, {
        className: p.modal,
        transitionState: n,
        disableTrack: !0,
        children: (0, o.jsxs)(i.Slides, {
            activeSlide: C,
            width: 408,
            children: [
                (0, o.jsx)(i.Slide, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(a.Z, {
                        onContinue: g,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(l.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: _,
                        onError: b,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(l.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: m,
                        onAuthToken: _,
                        onError: b,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(c.Z, {
                        authToken: v,
                        onContinue: g,
                        onError: b,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(s.Z, {
                        onContinue: g,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: t })
                })
            ]
        })
    });
}
