t.d(n, { default: () => h });
var o = t(627968);
t(64700);
var i = t(935462),
    r = t(430690),
    s = t(71448),
    l = t(52722),
    a = t(270640),
    d = t(347103),
    c = t(194887),
    C = t(6059),
    _ = t(690095),
    u = t(652215),
    g = t(974651);
function h(e) {
    let { transitionState: n, onClose: t, analyticsLocation: h } = e,
        {
            slide: p,
            gotoNext: x,
            gotoError: b,
            handleWaitingForConnection: N,
            handleAuthToken: j,
            expectedCallbackState: v,
            callbackData: f,
        } = (0, s.m)(h, u.fg2.CRUNCHYROLL);
    return (0, o.jsx)(i.EO, {
        "data-migration-pending": !0,
        className: g.yl,
        transitionState: n,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, o.jsxs)(r.t, {
            activeSlide: p,
            width: 408,
            children: [
                (0, o.jsx)(r.q, { id: _.N.LANDING, children: (0, o.jsx)(d.A, { onContinue: x, onClose: t }) }),
                (0, o.jsx)(r.q, {
                    id: _.N.PRE_CONNECT,
                    children: (0, o.jsx)(c.A, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: N,
                        onAuthToken: j,
                        onError: b,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(r.q, {
                    id: _.N.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.A, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: v,
                        onAuthToken: j,
                        onError: b,
                        onClose: t,
                    }),
                }),
                (0, o.jsx)(r.q, {
                    id: _.N.DISCORD_CONSENT,
                    children: (0, o.jsx)(l.A, { authToken: f, onContinue: x, onError: b, onClose: t }),
                }),
                (0, o.jsx)(r.q, { id: _.N.ERROR, children: (0, o.jsx)(a.A, { onContinue: x, onClose: t }) }),
                (0, o.jsx)(r.q, { id: _.N.SUCCESS, children: (0, o.jsx)(C.A, { onClose: t }) }),
            ],
        }),
    });
}
