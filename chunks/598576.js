n.d(t, { default: () => b });
var o = n(200651);
n(192379);
var i = n(481060),
    r = n(864762),
    s = n(509340),
    a = n(135184),
    l = n(409553),
    c = n(494801),
    d = n(319392),
    u = n(798930),
    p = n(981631),
    f = n(522137);
function b(e) {
    let { transitionState: t, onClose: n, analyticsLocation: b } = e,
        { slide: x, gotoNext: C, gotoError: _, handleWaitingForConnection: g, handleAuthToken: h, expectedCallbackState: v, callbackData: m } = (0, r.k)(b, p.ABu.XBOX);
    return (0, o.jsx)(i.Y0X, {
        className: f.modal,
        transitionState: t,
        disableTrack: !0,
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: x,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: C,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: g,
                        onAuthToken: h,
                        onError: _,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: v,
                        onAuthToken: h,
                        onError: _,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: m,
                        onContinue: C,
                        onError: _,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(a.Z, {
                        onContinue: C,
                        onClose: n
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: n })
                })
            ]
        })
    });
}
