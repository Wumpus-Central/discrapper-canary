t.d(n, { default: () => p });
var o = t(54381);
t(473749);
var i = t(481060),
    r = t(864762),
    a = t(779341),
    s = t(642566),
    l = t(742699),
    d = t(686494),
    c = t(573703),
    u = t(798930),
    C = t(981631),
    b = t(926375);
function p(e) {
    let { transitionState: n, onClose: t, analyticsLocation: p } = e,
        {
            slide: h,
            gotoNext: x,
            gotoError: g,
            handleWaitingForConnection: f,
            handleAuthToken: v,
            expectedCallbackState: _,
            callbackData: N,
        } = (0, r.k)(p, C.ABu.CRUNCHYROLL);
    return (0, o.jsx)(i.Y0X, {
        "data-migration-pending": !0,
        className: b.modal,
        transitionState: n,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: h,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: x,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(d.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: f,
                        onAuthToken: v,
                        onError: g,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(d.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: _,
                        onAuthToken: v,
                        onError: g,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(a.Z, {
                        authToken: N,
                        onContinue: x,
                        onError: g,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(s.Z, {
                        onContinue: x,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(c.Z, { onClose: t }),
                }),
            ],
        }),
    });
}
