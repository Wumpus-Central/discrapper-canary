n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(405269),
    s = n(541830),
    o = n(240248),
    c = n(899273),
    d = n(504186),
    u = n(814698),
    m = n(839671),
    x = n(936636),
    h = n(424994),
    f = n(985018),
    p = n(706445);
function g() {
    return (0, a.jsx)(i.Text, { variant: "text-sm/normal", color: "text-subtle", children: f.intl.string(f.t.GruYxV) });
}
let _ = function (e) {
    let { application: t, detectedGame: n, trackAction: _ } = e,
        v = l.useMemo(() => n.genres.map(s.du).join(", "), [n]),
        A = n.publishers.join(", "),
        j = n.developers.join(", "),
        E = n.firstReleaseDate,
        b = (0, d.A)(n),
        C = (0, c.Y)(n),
        I = !(0, o.uJ)(v),
        N = !(0, o.uJ)(A),
        S = !(0, o.uJ)(j),
        T = !(0, o.uJ)(E),
        y = b.length > 0,
        L = C.length > 0 && !C.every((e) => (0, o.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: p.uW,
        children: [
            (0, a.jsx)("div", {
                className: p.Gf,
                children: (0, a.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: f.intl.string(f.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: p.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: p.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.genres.length ? f.intl.string(f.t.pDgwYB) : f.intl.string(f.t.mjFKqn),
                            }),
                            I
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: p.Gu,
                                      children: v,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: p.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.publishers.length
                                        ? f.intl.string(f.t.Hc7Enk)
                                        : f.intl.string(f.t["4Byy/G"]),
                            }),
                            N
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: p.Gu,
                                      children: A,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: p.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.developers.length ? f.intl.string(f.t.KATEJB) : f.intl.string(f.t.na3PT0),
                            }),
                            S
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: p.Gu,
                                      children: j,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: p.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: f.intl.string(f.t.H3mPDT),
                            }),
                            T
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: p.Gu,
                                      children: r.i$(new Date(E), "LL"),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: p.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: b.length > 1 ? f.intl.string(f.t.PNqxNe) : f.intl.string(f.t["UxAag+"]),
                            }),
                            y
                                ? (0, a.jsx)("div", {
                                      className: p.Gu,
                                      children: b.map((e) => (0, a.jsx)(x.s, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: p.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: f.intl.string(f.t["Oj3o1/"]),
                            }),
                            L
                                ? (0, a.jsx)("div", {
                                      className: p.Gu,
                                      children: C.map((e) => (0, a.jsx)(m.K, { website: e, trackAction: _ }, e.url)),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: p.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: f.intl.string(f.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: p.Gu,
                                children: f.intl.format(f.t.XPFZVl, { igdbLink: h.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: p.OQ, children: (0, a.jsx)(u.A, { application: t, trackAction: _ }) }),
        ],
    });
};
