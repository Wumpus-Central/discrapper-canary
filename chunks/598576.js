n.d(t, { default: () => b });
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(864762),
    s = n(509340),
    a = n(135184),
    c = n(409553),
    l = n(494801),
    d = n(319392),
    u = n(798930),
    f = n(981631),
    p = n(475286);
function b(e) {
    let { transitionState: t, onClose: n, analyticsLocation: b } = e,
        { slide: x, gotoNext: g, gotoError: C, handleWaitingForConnection: h, handleAuthToken: _, expectedCallbackState: m, callbackData: j } = (0, i.k)(b, f.ABu.XBOX);
    return (0, o.jsx)(r.Y0X, {
        className: p.modal,
        transitionState: t,
        disableTrack: !0,
        children: (0, o.jsxs)(r.MyZ, {
            activeSlide: x,
            width: 408,
            children: [
                (0, o.jsx)(r.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(c.Z, {
                        onContinue: g,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(l.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: _,
                        onError: C,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(l.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: m,
                        onAuthToken: _,
                        onError: C,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: j,
                        onContinue: g,
                        onError: C,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(a.Z, {
                        onContinue: g,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: n })
                })
            ]
        })
    });
}
