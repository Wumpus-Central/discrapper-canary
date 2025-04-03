t.d(n, { default: () => _ });
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(864762),
    s = t(779341),
    a = t(642566),
    l = t(742699),
    c = t(686494),
    d = t(573703),
    u = t(798930),
    C = t(981631),
    h = t(475286);
function _(e) {
    let { transitionState: n, onClose: t, analyticsLocation: _ } = e,
        { slide: p, gotoNext: x, gotoError: N, handleWaitingForConnection: g, handleAuthToken: b, expectedCallbackState: f, callbackData: v } = (0, r.k)(_, C.ABu.CRUNCHYROLL);
    return (0, o.jsx)(i.Y0X, {
        className: h.modal,
        transitionState: n,
        disableTrack: !0,
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: p,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: x,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: g,
                        onAuthToken: b,
                        onError: N,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: f,
                        onAuthToken: b,
                        onError: N,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: v,
                        onContinue: x,
                        onError: N,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(a.Z, {
                        onContinue: x,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: t })
                })
            ]
        })
    });
}
