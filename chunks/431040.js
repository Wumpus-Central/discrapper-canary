n.d(t, { A: () => A });
var l = n(627968),
    a = n(64700),
    i = n(534514),
    r = n(834730),
    s = n(155718),
    o = n(405269),
    c = n(541830),
    d = n(240248),
    u = n(899273),
    m = n(504186),
    h = n(814698),
    f = n(839671),
    _ = n(936636),
    g = n(424994),
    p = n(985018),
    x = n(60541);
function E() {
    return (0, l.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: p.intl.string(p.t.GruYxV) });
}
let A = function (e) {
    let { application: t, game: n, trackAction: A } = e,
        v = a.useMemo(() => n.genres.map(c.du).join(", "), [n]),
        I = n.getCompanyByRole(s.wk.PUBLISHER),
        b = n.getCompanyByRole(s.wk.DEVELOPER),
        j = I.map((e) => e.name).join(", "),
        N = b.map((e) => e.name).join(", "),
        C = n.firstReleaseDate,
        S = (0, m.A)(n),
        y = (0, u.Y)(n),
        R = !(0, d.uJ)(v),
        L = !(0, d.uJ)(j),
        T = !(0, d.uJ)(N),
        k = !(0, d.uJ)(C),
        w = S.length > 0,
        M = y.length > 0 && !y.every((e) => (0, d.uJ)(e.url));
    return (0, l.jsxs)("div", {
        className: x.uW,
        children: [
            (0, l.jsx)("div", {
                className: x.Gf,
                children: (0, l.jsx)(i.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: p.intl.string(p.t["7OjmmH"]),
                }),
            }),
            (0, l.jsxs)("div", {
                className: x.kL,
                children: [
                    (0, l.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.genres.length ? p.intl.string(p.t.pDgwYB) : p.intl.string(p.t.mjFKqn),
                            }),
                            R
                                ? (0, l.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: v,
                                  })
                                : (0, l.jsx)(E, {}),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== I.length ? p.intl.string(p.t.Hc7Enk) : p.intl.string(p.t["4Byy/G"]),
                            }),
                            L
                                ? (0, l.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: j,
                                  })
                                : (0, l.jsx)(E, {}),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== b.length ? p.intl.string(p.t.KATEJB) : p.intl.string(p.t.na3PT0),
                            }),
                            T
                                ? (0, l.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: N,
                                  })
                                : (0, l.jsx)(E, {}),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: p.intl.string(p.t.H3mPDT),
                            }),
                            k
                                ? (0, l.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: x.Gu,
                                      children: o.i$(new Date(C), "LL"),
                                  })
                                : (0, l.jsx)(E, {}),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: S.length > 1 ? p.intl.string(p.t.PNqxNe) : p.intl.string(p.t["UxAag+"]),
                            }),
                            w
                                ? (0, l.jsx)("div", {
                                      className: x.Gu,
                                      children: S.map((e) => (0, l.jsx)(_.s, { platform: e }, e)),
                                  })
                                : (0, l.jsx)(E, {}),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: p.intl.string(p.t["Oj3o1/"]),
                            }),
                            M
                                ? (0, l.jsx)("div", {
                                      className: x.Gu,
                                      children: y.map((e) => (0, l.jsx)(f.K, { website: e, trackAction: A }, e.url)),
                                  })
                                : (0, l.jsx)(E, {}),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: x.J1,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: p.intl.string(p.t["BwQ+9e"]),
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: x.Gu,
                                children: p.intl.format(p.t.XPFZVl, { igdbLink: g.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: x.OQ, children: (0, l.jsx)(h.A, { application: t, trackAction: A }) }),
        ],
    });
};
