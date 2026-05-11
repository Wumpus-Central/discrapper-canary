e.d(t, { default: () => _ });
var i = e(627968),
    o = e(64700),
    r = e(935462),
    s = e(430690),
    l = e(670404),
    a = e(910316),
    c = e(652215),
    d = e(539170);
function C(n) {
    let { authToken: t, onContinue: e, onError: o, onClose: r } = n;
    return (0, i.jsx)(a.W, {
        platformType: c.fg2.CRUNCHYROLL,
        clientId: d.ex,
        scopes: d._B,
        authToken: t,
        onContinue: e,
        onError: o,
        onClose: r,
    });
}
var g = e(478474),
    h = e(375708);
function u(n) {
    let { onContinue: t, onClose: e } = n;
    return (0, i.jsx)(g.s, {
        title: h.intl.string(h.t["8YK70c"]),
        body: h.intl.string(h.t.moyYLf),
        onClose: e,
        onContinue: t,
    });
}
var x = e(748562),
    N = e(975571),
    p = e(505134);
function j(n) {
    let { onContinue: t, onClose: e } = n,
        r = N.A.getArticleURL(c.MVz.CRUNCHYROLL_CONNECTION),
        s = o.useMemo(() => [{ label: h.intl.string(h.t["2TXHQd"]), icon: x.U }], []);
    return (0, i.jsx)(p.B, {
        platformType: c.fg2.CRUNCHYROLL,
        headerConnect: h.intl.string(h.t["Da+3NJ"]),
        body: h.intl.string(h.t.MaPpPL),
        learnMoreLink: r,
        onClose: e,
        onContinue: t,
        img: (0, i.jsx)("img", { src: "/assets/bb42d0ee2b7d1545.png", width: 234, height: 152, alt: "" }),
        valueProps: s,
    });
}
var f = e(873885);
function m(n) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: e,
            expectedCallbackState: o,
            onAuthToken: r,
            onError: s,
            onClose: l,
        } = n,
        a = t
            ? (0, i.jsx)("img", { src: "/assets/bc91209df760be4e.png", width: "168", height: "124", alt: "" })
            : (0, i.jsx)("img", { src: "/assets/8bd88f3ff4b731d0.png", width: "152", height: "123", alt: "" }),
        C = t ? h.intl.string(h.t.tZ6ze7) : h.intl.string(h.t.siPkNp),
        g = t ? h.intl.string(h.t.VgWnwP) : h.intl.string(h.t.oS4NEH);
    return (0, i.jsx)(f.b, {
        platformType: c.fg2.CRUNCHYROLL,
        isWaitingForConnection: t,
        onWaitingForConnection: e,
        expectedCallbackState: o,
        onAuthToken: r,
        onError: s,
        onClose: l,
        img: a,
        title: C,
        body: g,
        redirectDestination: d.v7,
    });
}
var b = e(834730),
    R = e(349288),
    L = e(162185),
    v = e(890311);
function E() {
    return (0, i.jsx)("div", {
        className: v.__invalid_getCrunchyrollApp,
        children: (0, i.jsx)("div", {
            className: v.__invalid_getCrunchyrollAppBody,
            children: (0, i.jsx)(b.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: (0, i.jsx)(R.Anchor, {
                    href: N.A.getArticleURL(c.MVz.CRUNCHYROLL_CONNECTION),
                    children: h.intl.string(h.t.hvVgAZ),
                }),
            }),
        }),
    });
}
function k(n) {
    let { onClose: t } = n;
    return (0, i.jsx)(L.b, {
        img: (0, i.jsx)("img", { src: "/assets/f57d187b12fee97a.png", width: "224", height: "104", alt: "" }),
        title: h.intl.string(h.t.Fnvxvk),
        body: h.intl.string(h.t.YwXceg),
        content: (0, i.jsx)(E, {}),
        onClose: t,
    });
}
var O = e(52643),
    T = e(729727);
function _(n) {
    let { transitionState: t, onClose: e, analyticsLocation: o } = n,
        {
            slide: a,
            gotoNext: d,
            gotoError: g,
            handleWaitingForConnection: h,
            handleAuthToken: x,
            expectedCallbackState: N,
            callbackData: p,
        } = (0, l.m)(o, c.fg2.CRUNCHYROLL);
    return (0, i.jsx)(r.EO, {
        "data-migration-pending": !0,
        className: T.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, i.jsxs)(s.t, {
            activeSlide: a,
            width: 408,
            children: [
                (0, i.jsx)(s.q, { id: O.N.LANDING, children: (0, i.jsx)(j, { onContinue: d, onClose: e }) }),
                (0, i.jsx)(s.q, {
                    id: O.N.PRE_CONNECT,
                    children: (0, i.jsx)(m, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: x,
                        onError: g,
                        onClose: e,
                    }),
                }),
                (0, i.jsx)(s.q, {
                    id: O.N.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(m, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: N,
                        onAuthToken: x,
                        onError: g,
                        onClose: e,
                    }),
                }),
                (0, i.jsx)(s.q, {
                    id: O.N.DISCORD_CONSENT,
                    children: (0, i.jsx)(C, { authToken: p, onContinue: d, onError: g, onClose: e }),
                }),
                (0, i.jsx)(s.q, { id: O.N.ERROR, children: (0, i.jsx)(u, { onContinue: d, onClose: e }) }),
                (0, i.jsx)(s.q, { id: O.N.SUCCESS, children: (0, i.jsx)(k, { onClose: e }) }),
            ],
        }),
    });
}
