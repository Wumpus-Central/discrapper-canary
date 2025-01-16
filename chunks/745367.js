e.r(t),
    e.d(t, {
        default: function () {
            return p;
        }
    });
var o = e(200651);
e(192379);
var i = e(481060),
    r = e(864762),
    c = e(779341),
    s = e(642566),
    l = e(742699),
    a = e(686494),
    u = e(573703),
    d = e(798930),
    C = e(981631),
    h = e(38920);
function p(n) {
    let { transitionState: t, onClose: e, analyticsLocation: p } = n,
        { slide: x, gotoNext: f, gotoError: g, handleWaitingForConnection: v, handleAuthToken: _, expectedCallbackState: j, callbackData: N } = (0, r.k)(p, C.ABu.CRUNCHYROLL);
    return (0, o.jsx)(i.ModalRoot, {
        className: h.modal,
        transitionState: t,
        disableTrack: !0,
        children: (0, o.jsxs)(i.Slides, {
            activeSlide: x,
            width: 408,
            children: [
                (0, o.jsx)(i.Slide, {
                    id: d.O.LANDING,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: f,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: d.O.PRE_CONNECT,
                    children: (0, o.jsx)(a.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: v,
                        onAuthToken: _,
                        onError: g,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: d.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(a.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: j,
                        onAuthToken: _,
                        onError: g,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: d.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(c.Z, {
                        authToken: N,
                        onContinue: f,
                        onError: g,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: d.O.ERROR,
                    children: (0, o.jsx)(s.Z, {
                        onContinue: f,
                        onClose: e
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: d.O.SUCCESS,
                    children: (0, o.jsx)(u.Z, { onClose: e })
                })
            ]
        })
    });
}
