t.d(e, { default: () => h });
var i = t(627968);
t(64700);
var o = t(397927),
    r = t(889058),
    s = t(572196),
    a = t(523858),
    d = t(672517),
    l = t(575957),
    c = t(66337),
    C = t(25765),
    b = t(652215),
    g = t(689588);
function h(n) {
    let { transitionState: e, onClose: t, analyticsLocation: h } = n,
        {
            slide: x,
            gotoNext: f,
            gotoError: u,
            handleWaitingForConnection: p,
            handleAuthToken: N,
            expectedCallbackState: j,
            callbackData: _,
        } = (0, r.m)(h, b.fg2.CRUNCHYROLL);
    return (0, i.jsx)(o.EOs, {
        "data-migration-pending": !0,
        className: g.yl,
        transitionState: e,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, i.jsxs)(o.tN_, {
            activeSlide: x,
            width: 408,
            children: [
                (0, i.jsx)(o.q7S, {
                    id: C.N.LANDING,
                    children: (0, i.jsx)(d.A, {
                        onContinue: f,
                        onClose: t,
                    }),
                }),
                (0, i.jsx)(o.q7S, {
                    id: C.N.PRE_CONNECT,
                    children: (0, i.jsx)(l.A, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: p,
                        onAuthToken: N,
                        onError: u,
                        onClose: t,
                    }),
                }),
                (0, i.jsx)(o.q7S, {
                    id: C.N.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(l.A, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: j,
                        onAuthToken: N,
                        onError: u,
                        onClose: t,
                    }),
                }),
                (0, i.jsx)(o.q7S, {
                    id: C.N.DISCORD_CONSENT,
                    children: (0, i.jsx)(s.A, {
                        authToken: _,
                        onContinue: f,
                        onError: u,
                        onClose: t,
                    }),
                }),
                (0, i.jsx)(o.q7S, {
                    id: C.N.ERROR,
                    children: (0, i.jsx)(a.A, {
                        onContinue: f,
                        onClose: t,
                    }),
                }),
                (0, i.jsx)(o.q7S, {
                    id: C.N.SUCCESS,
                    children: (0, i.jsx)(c.A, { onClose: t }),
                }),
            ],
        }),
    });
}
