n.d(t, { default: () => p });
var o = n(54381);
n(473749);
var i = n(481060),
    a = n(864762),
    r = n(428681),
    d = n(42338),
    s = n(569932),
    c = n(555638),
    l = n(42011),
    b = n(798930),
    u = n(926375);
function p(e) {
    let { transitionState: t, onClose: n, analyticsLocation: p, platformType: C } = e,
        {
            slide: h,
            gotoNext: f,
            gotoError: T,
            handleWaitingForConnection: A,
            handleAuthToken: g,
            expectedCallbackState: _,
            callbackData: I,
            errorCode: N,
        } = (0, a.k)(p, C);
    return (0, o.jsx)(i.Y0X, {
        "data-migration-pending": !0,
        className: u.modal,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "PlayStationLinkModal",
        children: (0, o.jsxs)(i.MyZ, {
            activeSlide: h,
            width: 408,
            children: [
                (0, o.jsx)(i.Mi4, {
                    id: b.O.LANDING,
                    children: (0, o.jsx)(s.A, {
                        platformType: C,
                        onContinue: f,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: b.O.PRE_CONNECT,
                    children: (0, o.jsx)(c.A, {
                        platformType: C,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: A,
                        onAuthToken: g,
                        onError: T,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: b.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.A, {
                        platformType: C,
                        isWaitingForConnection: !0,
                        expectedCallbackState: _,
                        onAuthToken: g,
                        onError: T,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: b.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(r.E, {
                        platformType: C,
                        authToken: I,
                        onContinue: f,
                        onError: T,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: b.O.ERROR,
                    children: (0, o.jsx)(d.X, {
                        onContinue: f,
                        onClose: n,
                        errorCode: N,
                    }),
                }),
                (0, o.jsx)(i.Mi4, {
                    id: b.O.SUCCESS,
                    children: (0, o.jsx)(l.W, { onClose: n }),
                }),
            ],
        }),
    });
}
