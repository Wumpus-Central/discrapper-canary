n.d(t, { default: () => u });
var o = n(627968);
n(64700);
var i = n(935462),
    r = n(430690),
    s = n(71448),
    l = n(52722),
    a = n(270640),
    d = n(347103),
    c = n(194887),
    C = n(6059),
    h = n(690095),
    _ = n(652215),
    g = n(974651);
function u(e) {
    let { transitionState: t, onClose: n, analyticsLocation: u } = e,
        {
            slide: x,
            gotoNext: p,
            gotoError: b,
            handleWaitingForConnection: N,
            handleAuthToken: v,
            expectedCallbackState: j,
            callbackData: f,
        } = (0, s.m)(u, _.fg2.CRUNCHYROLL);
    return (0, o.jsx)(i.EO, {
        "data-migration-pending": !0,
        className: g.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, o.jsxs)(r.t, {
            activeSlide: x,
            width: 408,
            children: [
                (0, o.jsx)(r.q, { id: h.N.LANDING, children: (0, o.jsx)(d.A, { onContinue: p, onClose: n }) }),
                (0, o.jsx)(r.q, {
                    id: h.N.PRE_CONNECT,
                    children: (0, o.jsx)(c.A, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: N,
                        onAuthToken: v,
                        onError: b,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.q, {
                    id: h.N.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.A, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: j,
                        onAuthToken: v,
                        onError: b,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.q, {
                    id: h.N.DISCORD_CONSENT,
                    children: (0, o.jsx)(l.A, { authToken: f, onContinue: p, onError: b, onClose: n }),
                }),
                (0, o.jsx)(r.q, { id: h.N.ERROR, children: (0, o.jsx)(a.A, { onContinue: p, onClose: n }) }),
                (0, o.jsx)(r.q, { id: h.N.SUCCESS, children: (0, o.jsx)(C.A, { onClose: n }) }),
            ],
        }),
    });
}
