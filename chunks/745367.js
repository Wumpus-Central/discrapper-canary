t.d(e, { default: () => _ });
var o = t(54381);
t(473749);
var i = t(481060),
    r = t(864762),
    s = t(779341),
    l = t(642566),
    a = t(742699),
    c = t(686494),
    d = t(573703),
    u = t(798930),
    C = t(981631),
    h = t(771831);
function _(n) {
    let { transitionState: e, onClose: t, analyticsLocation: _ } = n,
        {
            slide: p,
            gotoNext: x,
            gotoError: g,
            handleWaitingForConnection: b,
            handleAuthToken: f,
            expectedCallbackState: v,
            callbackData: N,
        } = (0, r.k)(_, C.ABu.CRUNCHYROLL);
    return (0, o.jsx)(i.Y0X, {
        className: h.modal,
        transitionState: e,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: p,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(a.Z, {
                        onContinue: x,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: b,
                        onAuthToken: f,
                        onError: g,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: v,
                        onAuthToken: f,
                        onError: g,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: N,
                        onContinue: x,
                        onError: g,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: x,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: t }),
                }),
            ],
        }),
    });
}
