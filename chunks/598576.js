n.d(t, { default: () => b });
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
    f = n(771831);
function b(e) {
    let { transitionState: t, onClose: n, analyticsLocation: b } = e,
        {
            slide: g,
            gotoNext: x,
            gotoError: h,
            handleWaitingForConnection: C,
            handleAuthToken: _,
            expectedCallbackState: m,
            callbackData: v,
        } = (0, i.k)(b, p.ABu.XBOX);
    return (0, o.jsx)(r.Y0X, {
        className: f.modal,
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
                        onAuthToken: _,
                        onError: h,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(l.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: m,
                        onAuthToken: _,
                        onError: h,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.Mi4, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: v,
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
