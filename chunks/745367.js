e.d(t, { default: () => _ });
var o = e(255367);
e(73800);
var i = e(481060),
    r = e(864762),
    s = e(779341),
    l = e(642566),
    a = e(742699),
    c = e(686494),
    d = e(573703),
    u = e(798930),
    C = e(981631),
    h = e(475286);
function _(n) {
    let { transitionState: t, onClose: e, analyticsLocation: _ } = n,
        { slide: p, gotoNext: x, gotoError: g, handleWaitingForConnection: b, handleAuthToken: f, expectedCallbackState: v, callbackData: j } = (0, r.k)(_, C.ABu.CRUNCHYROLL);
    return (0, o.jsx)(i.Y0X, {
        className: h.modal,
        transitionState: t,
        disableTrack: !0,
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: p,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(a.Z, {
                        onContinue: x,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: b,
                        onAuthToken: f,
                        onError: g,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: v,
                        onAuthToken: f,
                        onError: g,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: j,
                        onContinue: x,
                        onError: g,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: x,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: e })
                })
            ]
        })
    });
}
