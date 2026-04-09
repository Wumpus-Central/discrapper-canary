n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    l = n(397927),
    r = n(155718),
    s = n(405269),
    o = n(541830),
    c = n(240248),
    d = n(899273),
    u = n(504186),
    m = n(814698),
    x = n(839671),
    g = n(936636),
    h = n(424994),
    f = n(985018),
    _ = n(706445);
function p() {
    return (0, a.jsx)(l.Text, { variant: "text-sm/normal", color: "text-subtle", children: f.intl.string(f.t.GruYxV) });
}
let v = function (e) {
    let { application: t, game: n, trackAction: v } = e,
        A = i.useMemo(() => n.genres.map(o.du).join(", "), [n]),
        j = n.getCompanyByRole(r.wk.PUBLISHER),
        E = n.getCompanyByRole(r.wk.DEVELOPER),
        I = j.map((e) => e.name).join(", "),
        b = E.map((e) => e.name).join(", "),
        C = n.firstReleaseDate,
        N = (0, u.A)(n),
        S = (0, d.Y)(n),
        T = !(0, c.uJ)(A),
        y = !(0, c.uJ)(I),
        L = !(0, c.uJ)(b),
        k = !(0, c.uJ)(C),
        R = N.length > 0,
        O = S.length > 0 && !S.every((e) => (0, c.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: _.uW,
        children: [
            (0, a.jsx)("div", {
                className: _.Gf,
                children: (0, a.jsx)(l.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: f.intl.string(f.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: _.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.genres.length ? f.intl.string(f.t.pDgwYB) : f.intl.string(f.t.mjFKqn),
                            }),
                            T
                                ? (0, a.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: A,
                                  })
                                : (0, a.jsx)(p, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== j.length ? f.intl.string(f.t.Hc7Enk) : f.intl.string(f.t["4Byy/G"]),
                            }),
                            y
                                ? (0, a.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: I,
                                  })
                                : (0, a.jsx)(p, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== E.length ? f.intl.string(f.t.KATEJB) : f.intl.string(f.t.na3PT0),
                            }),
                            L
                                ? (0, a.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: b,
                                  })
                                : (0, a.jsx)(p, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: f.intl.string(f.t.H3mPDT),
                            }),
                            k
                                ? (0, a.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: s.i$(new Date(C), "LL"),
                                  })
                                : (0, a.jsx)(p, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: N.length > 1 ? f.intl.string(f.t.PNqxNe) : f.intl.string(f.t["UxAag+"]),
                            }),
                            R
                                ? (0, a.jsx)("div", {
                                      className: _.Gu,
                                      children: N.map((e) => (0, a.jsx)(g.s, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(p, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: f.intl.string(f.t["Oj3o1/"]),
                            }),
                            O
                                ? (0, a.jsx)("div", {
                                      className: _.Gu,
                                      children: S.map((e) => (0, a.jsx)(x.K, { website: e, trackAction: v }, e.url)),
                                  })
                                : (0, a.jsx)(p, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: f.intl.string(f.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: _.Gu,
                                children: f.intl.format(f.t.XPFZVl, { igdbLink: h.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: _.OQ, children: (0, a.jsx)(m.A, { application: t, trackAction: v }) }),
        ],
    });
};
