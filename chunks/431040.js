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
    f = n(12388);
function g() {
    return (0, a.jsx)(i.Text, { variant: "text-sm/normal", color: "text-subtle", children: h.intl.string(h.t.GruYxV) });
}
let p = function (e) {
    let { application: t, detectedGame: n, trackAction: p } = e,
        _ = l.useMemo(() => n.genres.map(r.du).join(", "), [n]),
        v = n.publishers.join(", "),
        j = n.developers.join(", "),
        A = n.firstReleaseDate,
        C = (0, o.A)(n),
        b = (0, c.Y)(n),
        I = !(0, s.uJ)(_),
        E = !(0, s.uJ)(v),
        N = !(0, s.uJ)(j),
        S = !(0, s.uJ)(A),
        k = C.length > 0,
        T = b.length > 0 && !b.every((e) => (0, s.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: f.uW,
        children: [
            (0, a.jsx)("div", {
                className: f.Gf,
                children: (0, a.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: h.intl.string(h.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: f.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: f.J1,
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
                                      className: f.Gu,
                                      children: _,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.publishers.length
                                        ? h.intl.string(h.t.Hc7Enk)
                                        : h.intl.string(h.t["4Byy/G"]),
                            }),
                            E
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: f.Gu,
                                      children: v,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
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
                                      className: f.Gu,
                                      children: j,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
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
                                      className: f.Gu,
                                      children: new Date(A).toLocaleDateString(h.intl.currentLocale, {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                      }),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: C.length > 1 ? h.intl.string(h.t.PNqxNe) : h.intl.string(h.t["UxAag+"]),
                            }),
                            k
                                ? (0, a.jsx)("div", {
                                      className: f.Gu,
                                      children: C.map((e) => (0, a.jsx)(m.s, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.string(h.t["Oj3o1/"]),
                            }),
                            T
                                ? (0, a.jsx)("div", {
                                      className: f.Gu,
                                      children: b.map((e) => (0, a.jsx)(u.K, { website: e, trackAction: p }, e.url)),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.string(h.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: f.Gu,
                                children: h.intl.format(h.t.XPFZVl, { igdbLink: x.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: f.OQ, children: (0, a.jsx)(d.A, { application: t, trackAction: p }) }),
        ],
    });
};
