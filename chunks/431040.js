n.d(t, { A: () => A });
var a = n(627968),
    l = n(64700),
    i = n(534514),
    r = n(834730),
    s = n(155718),
    o = n(405269),
    d = n(541830),
    c = n(240248),
    u = n(899273),
    m = n(504186),
    _ = n(814698),
    h = n(839671),
    f = n(936636),
    g = n(424994),
    p = n(985018),
    x = n(287677);
function b() {
    return (0, a.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: p.intl.string(p.t.GruYxV) });
}
let A = function (e) {
    let { application: t, game: n, trackAction: A } = e,
        v = l.useMemo(() => n.genres.map(d.du).join(", "), [n]),
        E = n.getCompanyByRole(s.wk.PUBLISHER),
        I = n.getCompanyByRole(s.wk.DEVELOPER),
        C = E.map((e) => e.name).join(", "),
        N = I.map((e) => e.name).join(", "),
        j = n.firstReleaseDate,
        y = (0, m.A)(n),
        S = (0, u.Y)(n),
        R = !(0, c.uJ)(v),
        T = !(0, c.uJ)(C),
        L = !(0, c.uJ)(N),
        k = !(0, c.uJ)(j),
        M = y.length > 0,
        w = S.length > 0 && !S.every((e) => (0, c.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: x.uW,
        children: [
            (0, a.jsx)("div", {
                className: x.Gf,
                children: (0, a.jsx)(i.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: p.intl.string(p.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: x.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.genres.length ? p.intl.string(p.t.pDgwYB) : p.intl.string(p.t.mjFKqn),
                            }),
                            R
                                ? (0, a.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: v,
                                  })
                                : (0, a.jsx)(b, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== E.length ? p.intl.string(p.t.Hc7Enk) : p.intl.string(p.t["4Byy/G"]),
                            }),
                            T
                                ? (0, a.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: C,
                                  })
                                : (0, a.jsx)(b, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== I.length ? p.intl.string(p.t.KATEJB) : p.intl.string(p.t.na3PT0),
                            }),
                            L
                                ? (0, a.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: N,
                                  })
                                : (0, a.jsx)(b, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: p.intl.string(p.t.H3mPDT),
                            }),
                            k
                                ? (0, a.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: o.i$(new Date(j), "LL"),
                                  })
                                : (0, a.jsx)(b, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: y.length > 1 ? p.intl.string(p.t.PNqxNe) : p.intl.string(p.t["UxAag+"]),
                            }),
                            M
                                ? (0, a.jsx)("div", {
                                      className: x.Gu,
                                      children: y.map((e) => (0, a.jsx)(f.s, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(b, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: p.intl.string(p.t["Oj3o1/"]),
                            }),
                            w
                                ? (0, a.jsx)("div", {
                                      className: x.Gu,
                                      children: S.map((e) => (0, a.jsx)(h.K, { website: e, trackAction: A }, e.url)),
                                  })
                                : (0, a.jsx)(b, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: p.intl.string(p.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: x.Gu,
                                children: p.intl.format(p.t.XPFZVl, { igdbLink: g.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: x.OQ, children: (0, a.jsx)(_.A, { application: t, trackAction: A }) }),
        ],
    });
};
