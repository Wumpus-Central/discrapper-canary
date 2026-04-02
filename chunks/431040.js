n.d(t, { A: () => p });
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(541830),
    s = n(240248),
    c = n(899273),
    o = n(504186),
    d = n(814698),
    u = n(839671),
    m = n(936636),
    x = n(424994),
    h = n(985018),
    g = n(12388);
function f() {
    return (0, a.jsx)(i.Text, { variant: "text-sm/normal", color: "text-subtle", children: h.intl.string(h.t.GruYxV) });
}
let p = function (e) {
    let { application: t, detectedGame: n, trackAction: p } = e,
        _ = l.useMemo(() => n.genres.map(r.du).join(", "), [n]),
        v = n.publishers.join(", "),
        A = n.developers.join(", "),
        j = n.firstReleaseDate,
        E = (0, o.A)(n),
        C = (0, c.Y)(n),
        I = !(0, s.uJ)(_),
        b = !(0, s.uJ)(v),
        N = !(0, s.uJ)(A),
        S = !(0, s.uJ)(j),
        T = E.length > 0,
        k = C.length > 0 && !C.every((e) => (0, s.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: g.uW,
        children: [
            (0, a.jsx)("div", {
                className: g.Gf,
                children: (0, a.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: h.intl.string(h.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: g.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: g.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.genres.length ? h.intl.string(h.t.pDgwYB) : h.intl.string(h.t.mjFKqn),
                            }),
                            I
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: g.Gu,
                                      children: _,
                                  })
                                : (0, a.jsx)(f, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: g.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.publishers.length
                                        ? h.intl.string(h.t.Hc7Enk)
                                        : h.intl.string(h.t["4Byy/G"]),
                            }),
                            b
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: g.Gu,
                                      children: v,
                                  })
                                : (0, a.jsx)(f, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: g.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.developers.length ? h.intl.string(h.t.KATEJB) : h.intl.string(h.t.na3PT0),
                            }),
                            N
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: g.Gu,
                                      children: A,
                                  })
                                : (0, a.jsx)(f, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: g.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.string(h.t.H3mPDT),
                            }),
                            S
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: g.Gu,
                                      children: new Date(j).toLocaleDateString(h.intl.currentLocale, {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                      }),
                                  })
                                : (0, a.jsx)(f, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: g.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: E.length > 1 ? h.intl.string(h.t.PNqxNe) : h.intl.string(h.t["UxAag+"]),
                            }),
                            T
                                ? (0, a.jsx)("div", {
                                      className: g.Gu,
                                      children: E.map((e) => (0, a.jsx)(m.s, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(f, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: g.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.string(h.t["Oj3o1/"]),
                            }),
                            k
                                ? (0, a.jsx)("div", {
                                      className: g.Gu,
                                      children: C.map((e) => (0, a.jsx)(u.K, { website: e, trackAction: p }, e.url)),
                                  })
                                : (0, a.jsx)(f, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: g.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.string(h.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: g.Gu,
                                children: h.intl.format(h.t.XPFZVl, { igdbLink: x.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: g.OQ, children: (0, a.jsx)(d.A, { application: t, trackAction: p }) }),
        ],
    });
};
