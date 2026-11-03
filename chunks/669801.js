i.d(t, { default: () => q });
var e = i(477900),
    o = i(582128),
    s = i(935462),
    r = i(430690),
    l = i(670404),
    a = i(333748),
    c = i(910316),
    d = i(652215),
    h = i(544105);
function g(n) {
    let { authToken: t, onContinue: i, onError: o, onClose: s } = n;
    return (0, e.jsx)(c.W, {
        platformType: d.fg2.XBOX,
        clientId: a.i.XBOX_APPLICATION_ID,
        scopes: h.sS,
        authToken: t,
        onContinue: i,
        onError: o,
        onClose: s,
    });
}
var C = i(478474),
    x = i(105292);
function f(n) {
    let { onContinue: t, onClose: i } = n;
    return (0, e.jsx)(C.s, {
        title: x.intl.string(x.t.INwPCV),
        body: x.intl.string(x.t.GyXRRz),
        onClose: i,
        onContinue: t,
    });
}
var u = i(983851),
    b = i(500060),
    j = i(177953),
    m = i(687966),
    p = i(975571),
    N = i(505134);
function X(n) {
    let { onContinue: t, onClose: i } = n,
        s = p.A.getArticleURL(d.MVz.XBOX_CONNECTION),
        r = x.intl.format(x.t.CIc3IN, { helpdeskArticleUrl: s }),
        l = o.useMemo(
            () => [
                { label: x.intl.string(x.t.ihQXsb), icon: u.H },
                { label: x.intl.string(x.t.Xt1n4P), icon: b.o },
                { label: x.intl.string(x.t.xqVY3p), icon: j.n },
                { label: x.intl.string(x.t.iQsKVW), icon: m.GameControllerIcon },
            ],
            [],
        );
    return (0, e.jsx)(N.B, {
        platformType: d.fg2.XBOX,
        headerConnect: x.intl.string(x.t.m8aahn),
        headerReconnect: x.intl.string(x.t.z3rAhq),
        body: r,
        onClose: i,
        onContinue: t,
        img: (0, e.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/87626cb25be78ee682ab4ee85e63b0680a5d90f8a5e6f8d469ffb6889d7959e3.png",
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: l,
    });
}
var E = i(873885);
function O(n) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: i,
            expectedCallbackState: o,
            onAuthToken: s,
            onError: r,
            onClose: l,
        } = n,
        a = t
            ? (0, e.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/2cf087a7f12e3d1d09c0c9416169f2b67f08a27a8642aef5635519900f3e904b.png",
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, e.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/abb7826c12c091e08c0ad121b2a6ab48fce6ffd2123f1219b8ef58399908f3ff.png",
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        c = t ? x.intl.string(x.t.EuwcxO) : x.intl.string(x.t["e/z3na"]),
        h = t ? x.intl.string(x.t["1GjS/W"]) : x.intl.string(x.t["7tXu0i"]);
    return (0, e.jsx)(E.b, {
        platformType: d.fg2.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: i,
        expectedCallbackState: o,
        onAuthToken: s,
        onError: r,
        onClose: l,
        img: a,
        title: c,
        body: h,
    });
}
var A = i(534514),
    v = i(834730),
    T = i(28863),
    y = i(573648),
    I = i(414121),
    k = i(162185),
    S = i(282022),
    R = i(326513);
function w() {
    return (0, e.jsxs)("div", {
        className: S.rV,
        children: [
            (0, e.jsxs)("div", {
                className: S.bF,
                children: [
                    (0, e.jsxs)(A.D, {
                        className: S.n5,
                        variant: "body-lg/semibold",
                        children: [
                            (0, e.jsx)("div", {
                                className: S.YD,
                                children: (0, e.jsx)("img", { src: y.A.get(d.fg2.XBOX).icon.whiteSVG, alt: "" }),
                            }),
                            x.intl.string(x.t["12Kx2v"]),
                        ],
                    }),
                    (0, e.jsx)(v.E, {
                        tag: "p",
                        variant: "body-md/normal",
                        color: "text-default",
                        children: x.intl.string(x.t.M5yEcb),
                    }),
                    (0, e.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: (0, e.jsx)(T.Anchor, {
                            href: p.A.getArticleURL(d.MVz.XBOX_CONNECTION),
                            children: x.intl.string(x.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, e.jsx)(I.Ay, { className: S.C9, text: h.EY, size: 90 }),
        ],
    });
}
function _(n) {
    let { onClose: t } = n;
    return (0, e.jsx)(k.b, {
        img: (0, e.jsx)("img", { src: R.A, width: "124", height: "160", alt: "" }),
        title: x.intl.string(x.t["7QsHmh"]),
        body: x.intl.string(x.t.byYNPX),
        content: (0, e.jsx)(w, {}),
        onClose: t,
    });
}
var B = i(52643),
    W = i(844768);
function q(n) {
    let { transitionState: t, onClose: i, analyticsLocation: o } = n,
        {
            slide: a,
            gotoNext: c,
            gotoError: h,
            handleWaitingForConnection: C,
            handleAuthToken: x,
            expectedCallbackState: u,
            callbackData: b,
        } = (0, l.m)(o, d.fg2.XBOX);
    return (0, e.jsx)(s.EO, {
        "data-migration-pending": !0,
        className: W.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, e.jsxs)(r.t, {
            activeSlide: a,
            width: 408,
            children: [
                (0, e.jsx)(r.q, { id: B.N.LANDING, children: (0, e.jsx)(X, { onContinue: c, onClose: i }) }),
                (0, e.jsx)(r.q, {
                    id: B.N.PRE_CONNECT,
                    children: (0, e.jsx)(O, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: C,
                        onAuthToken: x,
                        onError: h,
                        onClose: i,
                    }),
                }),
                (0, e.jsx)(r.q, {
                    id: B.N.PRE_CONNECT_WAITING,
                    children: (0, e.jsx)(O, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: u,
                        onAuthToken: x,
                        onError: h,
                        onClose: i,
                    }),
                }),
                (0, e.jsx)(r.q, {
                    id: B.N.DISCORD_CONSENT,
                    children: (0, e.jsx)(g, { authToken: b, onContinue: c, onError: h, onClose: i }),
                }),
                (0, e.jsx)(r.q, { id: B.N.ERROR, children: (0, e.jsx)(f, { onContinue: c, onClose: i }) }),
                (0, e.jsx)(r.q, { id: B.N.SUCCESS, children: (0, e.jsx)(_, { onClose: i }) }),
            ],
        }),
    });
}
