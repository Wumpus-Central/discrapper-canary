e.d(n, { default: () => q });
var i = e(627968),
    s = e(64700),
    o = e(935462),
    r = e(430690),
    l = e(670404),
    a = e(333748),
    c = e(910316),
    d = e(652215),
    h = e(544105);
function g(t) {
    let { authToken: n, onContinue: e, onError: s, onClose: o } = t;
    return (0, i.jsx)(c.W, {
        platformType: d.fg2.XBOX,
        clientId: a.i.XBOX_APPLICATION_ID,
        scopes: h.sS,
        authToken: n,
        onContinue: e,
        onError: s,
        onClose: o,
    });
}
var x = e(478474),
    C = e(375708);
function f(t) {
    let { onContinue: n, onClose: e } = t;
    return (0, i.jsx)(x.s, {
        title: C.intl.string(C.t.INwPCV),
        body: C.intl.string(C.t.GyXRRz),
        onClose: e,
        onContinue: n,
    });
}
var u = e(983851),
    j = e(500060),
    p = e(177953),
    b = e(687966),
    m = e(975571),
    N = e(505134);
function X(t) {
    let { onContinue: n, onClose: e } = t,
        o = m.A.getArticleURL(d.MVz.XBOX_CONNECTION),
        r = C.intl.format(C.t.CIc3IN, { helpdeskArticleUrl: o }),
        l = s.useMemo(
            () => [
                { label: C.intl.string(C.t.ihQXsb), icon: u.H },
                { label: C.intl.string(C.t.Xt1n4P), icon: j.o },
                { label: C.intl.string(C.t.xqVY3p), icon: p.n },
                { label: C.intl.string(C.t.iQsKVW), icon: b._ },
            ],
            [],
        );
    return (0, i.jsx)(N.B, {
        platformType: d.fg2.XBOX,
        headerConnect: C.intl.string(C.t.m8aahn),
        headerReconnect: C.intl.string(C.t.z3rAhq),
        body: r,
        onClose: e,
        onContinue: n,
        img: (0, i.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/87626cb25be78ee682ab4ee85e63b0680a5d90f8a5e6f8d469ffb6889d7959e3.png",
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: l,
    });
}
var E = e(873885);
function O(t) {
    let {
            isWaitingForConnection: n,
            onWaitingForConnection: e,
            expectedCallbackState: s,
            onAuthToken: o,
            onError: r,
            onClose: l,
        } = t,
        a = n
            ? (0, i.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/2cf087a7f12e3d1d09c0c9416169f2b67f08a27a8642aef5635519900f3e904b.png",
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, i.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/abb7826c12c091e08c0ad121b2a6ab48fce6ffd2123f1219b8ef58399908f3ff.png",
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        c = n ? C.intl.string(C.t.EuwcxO) : C.intl.string(C.t["e/z3na"]),
        h = n ? C.intl.string(C.t["1GjS/W"]) : C.intl.string(C.t["7tXu0i"]);
    return (0, i.jsx)(E.b, {
        platformType: d.fg2.XBOX,
        isWaitingForConnection: n,
        onWaitingForConnection: e,
        expectedCallbackState: s,
        onAuthToken: o,
        onError: r,
        onClose: l,
        img: a,
        title: c,
        body: h,
    });
}
var A = e(534514),
    v = e(834730),
    T = e(349288),
    k = e(573648),
    I = e(414121),
    y = e(162185),
    S = e(570623),
    R = e(326513);
function _() {
    return (0, i.jsxs)("div", {
        className: S.rV,
        children: [
            (0, i.jsxs)("div", {
                className: S.bF,
                children: [
                    (0, i.jsxs)(A.D, {
                        className: S.n5,
                        variant: "text-lg/semibold",
                        children: [
                            (0, i.jsx)("div", {
                                className: S.YD,
                                children: (0, i.jsx)("img", { src: k.A.get(d.fg2.XBOX).icon.whiteSVG, alt: "" }),
                            }),
                            C.intl.string(C.t["12Kx2v"]),
                        ],
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: C.intl.string(C.t.M5yEcb),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, i.jsx)(T.Anchor, {
                            href: m.A.getArticleURL(d.MVz.XBOX_CONNECTION),
                            children: C.intl.string(C.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(I.Ay, { className: S.C9, text: h.EY, size: 90 }),
        ],
    });
}
function w(t) {
    let { onClose: n } = t;
    return (0, i.jsx)(y.b, {
        img: (0, i.jsx)("img", { src: R.A, width: "124", height: "160", alt: "" }),
        title: C.intl.string(C.t["7QsHmh"]),
        body: C.intl.string(C.t.byYNPX),
        content: (0, i.jsx)(_, {}),
        onClose: n,
    });
}
var B = e(52643),
    W = e(729727);
function q(t) {
    let { transitionState: n, onClose: e, analyticsLocation: s } = t,
        {
            slide: a,
            gotoNext: c,
            gotoError: h,
            handleWaitingForConnection: x,
            handleAuthToken: C,
            expectedCallbackState: u,
            callbackData: j,
        } = (0, l.m)(s, d.fg2.XBOX);
    return (0, i.jsx)(o.EO, {
        "data-migration-pending": !0,
        className: W.yl,
        transitionState: n,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, i.jsxs)(r.t, {
            activeSlide: a,
            width: 408,
            children: [
                (0, i.jsx)(r.q, { id: B.N.LANDING, children: (0, i.jsx)(X, { onContinue: c, onClose: e }) }),
                (0, i.jsx)(r.q, {
                    id: B.N.PRE_CONNECT,
                    children: (0, i.jsx)(O, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: x,
                        onAuthToken: C,
                        onError: h,
                        onClose: e,
                    }),
                }),
                (0, i.jsx)(r.q, {
                    id: B.N.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(O, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: u,
                        onAuthToken: C,
                        onError: h,
                        onClose: e,
                    }),
                }),
                (0, i.jsx)(r.q, {
                    id: B.N.DISCORD_CONSENT,
                    children: (0, i.jsx)(g, { authToken: j, onContinue: c, onError: h, onClose: e }),
                }),
                (0, i.jsx)(r.q, { id: B.N.ERROR, children: (0, i.jsx)(f, { onContinue: c, onClose: e }) }),
                (0, i.jsx)(r.q, { id: B.N.SUCCESS, children: (0, i.jsx)(w, { onClose: e }) }),
            ],
        }),
    });
}
