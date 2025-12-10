n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(210753),
    d = n(768581),
    f = n(324060),
    p = n(5888),
    _ = n(539041),
    m = n(909397),
    h = n(198358),
    g = n(391876),
    E = n(883166),
    b = n(612776),
    y = n(860076),
    O = n(388032),
    v = n(417788),
    S = n(612782);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { numDaysPlayed: t, game: n, index: a } = e,
        l = (0, i.useContext)(f.Q),
        p = (0, c.dQu)(l.primaryColor).hex(),
        { id: m, name: h, coverImageHash: b } = n,
        { coverImageUrl: I } = (0, u.$)(m),
        T =
            null != I
                ? I
                : d.ZP.getGameAssetURL({
                      id: m,
                      hash: b,
                  }),
        C = (0, E.gl)();
    return (0, r.jsxs)(E.QR, {
        className: o()(S.gameContainer, { [S.largerGameContainer]: 0 === a }),
        spring: C,
        children: [
            (0, r.jsx)(_.Z, {
                children: (0, r.jsxs)("div", {
                    className: S.artContainer,
                    children: [
                        null != T
                            ? (0, r.jsx)("img", {
                                  className: S.gameArt,
                                  alt: "",
                                  src: T,
                              })
                            : (0, r.jsx)("div", {
                                  className: S.gameArt,
                                  style: { borderColor: p },
                                  children: (0, r.jsx)(s.IMN, {
                                      size: "lg",
                                      className: S.unknownGameIcon,
                                  }),
                              }),
                        (0, r.jsx)("div", {
                            className: S.rank,
                            style: { backgroundColor: p },
                            children: (0, r.jsxs)(g.Z, {
                                variant: "text-lg/normal",
                                className: v.numeric,
                                children: ["#", a + 1],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(g.Z, {
                variant: "eyebrow",
                className: S.name,
                children: h,
            }),
            (0, r.jsx)(g.Z, {
                variant: "text-sm/bold",
                className: S.sessions,
                children: O.intl.format(y.default.MugpMu, { numSessions: t }),
            }),
        ],
    });
}
function P() {
    let e = (0, i.useContext)(f.Q),
        t = (0, c.dQu)(e.primaryColor).hex(),
        {
            applications: { totalGamesPlayed: n, applications: a } = {
                totalGamesPlayed: 0,
                applications: [],
            },
        } = (0, l.e7)([p.Z], () => p.Z.getCheckpointData());
    return (0, r.jsxs)(h.Z, {
        verticalFlow: !0,
        className: S.container,
        children: [
            (0, r.jsxs)("div", {
                className: v.title,
                children: [
                    (0, r.jsx)(s.iWm, {
                        size: "refresh_sm",
                        color: t,
                        colorClass: v.iconColor,
                    }),
                    (0, r.jsx)(g.Z, {
                        variant: "eyebrow",
                        className: v.eyebrow,
                        children: O.intl.string(y.default.dW6EBf),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: S.header,
                children: [
                    (0, r.jsx)(g.Z, {
                        variant: "display-lg",
                        className: S.display,
                        children: O.intl.string(O.t.URyqtP),
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(g.Z, {
                                variant: "heading-xxl/medium",
                                className: S.subtitle,
                                children: O.intl.format(y.default.gzlOml, {
                                    numGames: n,
                                    gamesHook: (e, t) =>
                                        (0, r.jsx)(
                                            g.Z,
                                            {
                                                variant: "heading-xxl/medium",
                                                className: S.inline,
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                            (0, r.jsx)(m.o, { slide: b.yD.GAMING }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: S.games,
                children: a.map((e, t) => (0, r.jsx)(N, A(T({}, e), { index: t }), "game-".concat(t))),
            }),
        ],
    });
}
