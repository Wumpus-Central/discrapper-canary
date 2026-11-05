e.d(t, { default: () => W });
var i = e(477900),
    o = e(582128),
    s = e(935462),
    r = e(430690),
    l = e(670404),
    a = e(333748),
    c = e(910316),
    d = e(652215),
    h = e(544105);
function g(n) {
    let { authToken: t, onContinue: e, onError: o, onClose: s } = n;
    return (0, i.jsx)(c.W, {
        platformType: d.fg2.XBOX,
        clientId: a.i.XBOX_APPLICATION_ID,
        scopes: h.sS,
        authToken: t,
        onContinue: e,
        onError: o,
        onClose: s,
    });
}
var C = e(478474),
    x = e(792996);
function f(n) {
    let { onContinue: t, onClose: e } = n;
    return (0, i.jsx)(C.s, {
        title: x.intl.string(x.t.INwPCV),
        body: x.intl.string(x.t.GyXRRz),
        onClose: e,
        onContinue: t,
    });
}
var u = e(983851),
    b = e(500060),
    m = e(177953),
    p = e(687966),
    j = e(975571),
    N = e(458172);
function X(n) {
    let { onContinue: t, onClose: e } = n,
        s = j.A.getArticleURL(d.MVz.XBOX_CONNECTION),
        r = x.intl.format(x.t.CIc3IN, { helpdeskArticleUrl: s }),
        l = o.useMemo(
            () => [
                { label: x.intl.string(x.t.ihQXsb), icon: u.VoiceNormalIcon },
                { label: x.intl.string(x.t.Xt1n4P), icon: b.ScreenStreamIcon },
                { label: x.intl.string(x.t.xqVY3p), icon: m.GroupIcon },
                { label: x.intl.string(x.t.iQsKVW), icon: p.GameControllerIcon },
            ],
            [],
        );
    return (0, i.jsx)(N.B, {
        platformType: d.fg2.XBOX,
        headerConnect: x.intl.string(x.t.m8aahn),
        headerReconnect: x.intl.string(x.t.z3rAhq),
        body: r,
        onClose: e,
        onContinue: t,
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
function O(n) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: e,
            expectedCallbackState: o,
            onAuthToken: s,
            onError: r,
            onClose: l,
        } = n,
        a = t
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
        c = t ? x.intl.string(x.t.EuwcxO) : x.intl.string(x.t["e/z3na"]),
        h = t ? x.intl.string(x.t["1GjS/W"]) : x.intl.string(x.t["7tXu0i"]);
    return (0, i.jsx)(E.b, {
        platformType: d.fg2.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: e,
        expectedCallbackState: o,
        onAuthToken: s,
        onError: r,
        onClose: l,
        img: a,
        title: c,
        body: h,
    });
}
var A = e(534514),
    I = e(834730),
    v = e(28863),
    T = e(573648),
    y = e(414121),
    S = e(162185),
    k = e(282022),
    R = e(326513);
function w() {
    return (0, i.jsxs)("div", {
        className: k.rV,
        children: [
            (0, i.jsxs)("div", {
                className: k.bF,
                children: [
                    (0, i.jsxs)(A.D, {
                        className: k.n5,
                        variant: "body-lg/semibold",
                        children: [
                            (0, i.jsx)("div", {
                                className: k.YD,
                                children: (0, i.jsx)("img", { src: T.A.get(d.fg2.XBOX).icon.whiteSVG, alt: "" }),
                            }),
                            x.intl.string(x.t["12Kx2v"]),
                        ],
                    }),
                    (0, i.jsx)(I.E, {
                        tag: "p",
                        variant: "body-md/normal",
                        color: "text-default",
                        children: x.intl.string(x.t.M5yEcb),
                    }),
                    (0, i.jsx)(I.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: (0, i.jsx)(v.Anchor, {
                            href: j.A.getArticleURL(d.MVz.XBOX_CONNECTION),
                            children: x.intl.string(x.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(y.Ay, { className: k.C9, text: h.EY, size: 90 }),
        ],
    });
}
function _(n) {
    let { onClose: t } = n;
    return (0, i.jsx)(S.b, {
        img: (0, i.jsx)("img", { src: R.A, width: "124", height: "160", alt: "" }),
        title: x.intl.string(x.t["7QsHmh"]),
        body: x.intl.string(x.t.byYNPX),
        content: (0, i.jsx)(w, {}),
        onClose: t,
    });
}
var B = e(52643),
    V = e(844768);
function W(n) {
    let { transitionState: t, onClose: e, analyticsLocation: o } = n,
        {
            slide: a,
            gotoNext: c,
            gotoError: h,
            handleWaitingForConnection: C,
            handleAuthToken: x,
            expectedCallbackState: u,
            callbackData: b,
        } = (0, l.m)(o, d.fg2.XBOX);
    return (0, i.jsx)(s.EO, {
        "data-migration-pending": !0,
        className: V.yl,
        transitionState: t,
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
                        onWaitingForConnection: C,
                        onAuthToken: x,
                        onError: h,
                        onClose: e,
                    }),
                }),
                (0, i.jsx)(r.q, {
                    id: B.N.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(O, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: u,
                        onAuthToken: x,
                        onError: h,
                        onClose: e,
                    }),
                }),
                (0, i.jsx)(r.q, {
                    id: B.N.DISCORD_CONSENT,
                    children: (0, i.jsx)(g, { authToken: b, onContinue: c, onError: h, onClose: e }),
                }),
                (0, i.jsx)(r.q, { id: B.N.ERROR, children: (0, i.jsx)(f, { onContinue: c, onClose: e }) }),
                (0, i.jsx)(r.q, { id: B.N.SUCCESS, children: (0, i.jsx)(_, { onClose: e }) }),
            ],
        }),
    });
}
