n.d(t, { default: () => f });
var o = n(54381);
n(473749);
var r = n(481060),
    i = n(864762),
    s = n(509340),
    a = n(135184),
    c = n(409553),
    l = n(494801),
    d = n(319392),
    u = n(798930),
    p = n(981631),
    b = n(926375);
function f(e) {
    let { transitionState: t, onClose: n, analyticsLocation: f } = e,
        {
            slide: g,
            gotoNext: x,
            gotoError: h,
            handleWaitingForConnection: C,
            handleAuthToken: m,
            expectedCallbackState: v,
            callbackData: O,
        } = (0, i.k)(f, p.ABu.XBOX);
    return (0, o.jsx)(r.Y0X, {
        "data-migration-pending": !0,
        className: b.modal,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, o.jsxs)(r.MyZ, {
            activeSlide: g,
            width: 408,
            children: [
                (0, o.jsx)(r.Mi4, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(c.Z, {
                        onContinue: x,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(l.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: C,
                        onAuthToken: m,
                        onError: h,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(l.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: v,
                        onAuthToken: m,
                        onError: h,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: O,
                        onContinue: x,
                        onError: h,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(a.Z, {
                        onContinue: x,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: n }),
                }),
            ],
        }),
    });
}
