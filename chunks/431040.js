n.d(t, { A: () => g });
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(541830),
    s = n(240248),
    o = n(899273),
    c = n(504186),
    d = n(814698),
    u = n(839671),
    m = n(936636),
    x = n(985018),
    f = n(82890);
function h() {
    return (0, a.jsx)(i.Text, { variant: "text-sm/normal", color: "text-subtle", children: x.intl.string(x.t.GruYxV) });
}
let g = function (e) {
    let { application: t, detectedGame: n, trackAction: g } = e,
        p = l.useMemo(() => n.genres.map(r.du).join(", "), [n]),
        v = n.publishers.join(", "),
        j = n.developers.join(", "),
        _ = n.firstReleaseDate,
        A = (0, c.A)(n),
        E = (0, o.Y)(n),
        I = !(0, s.uJ)(p),
        b = !(0, s.uJ)(v),
        N = !(0, s.uJ)(j),
        C = !(0, s.uJ)(_),
        T = A.length > 0,
        S = E.length > 0 && !E.every((e) => (0, s.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: f.uW,
        children: [
            (0, a.jsx)("div", {
                className: f.Gf,
                children: (0, a.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: x.intl.string(x.t["7OjmmH"]),
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
                                children: 1 !== n.genres.length ? x.intl.string(x.t.pDgwYB) : x.intl.string(x.t.mjFKqn),
                            }),
                            I
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: f.Gu,
                                      children: p,
                                  })
                                : (0, a.jsx)(h, {}),
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
                                        ? x.intl.string(x.t.Hc7Enk)
                                        : x.intl.string(x.t["4Byy/G"]),
                            }),
                            b
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: f.Gu,
                                      children: v,
                                  })
                                : (0, a.jsx)(h, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.developers.length ? x.intl.string(x.t.KATEJB) : x.intl.string(x.t.na3PT0),
                            }),
                            N
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: f.Gu,
                                      children: j,
                                  })
                                : (0, a.jsx)(h, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: x.intl.string(x.t.H3mPDT),
                            }),
                            C
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: f.Gu,
                                      children: new Date(_).toLocaleDateString(x.intl.currentLocale, {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                      }),
                                  })
                                : (0, a.jsx)(h, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: A.length > 1 ? x.intl.string(x.t.PNqxNe) : x.intl.string(x.t["UxAag+"]),
                            }),
                            T
                                ? (0, a.jsx)("div", {
                                      className: f.Gu,
                                      children: A.map((e) => (0, a.jsx)(m.s, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(h, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: x.intl.string(x.t["Oj3o1/"]),
                            }),
                            S
                                ? (0, a.jsx)("div", {
                                      className: f.Gu,
                                      children: E.map((e) => (0, a.jsx)(u.K, { website: e, trackClick: g }, e.url)),
                                  })
                                : (0, a.jsx)(h, {}),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: f.OQ, children: (0, a.jsx)(d.A, { application: t, trackAction: g }) }),
        ],
    });
};
