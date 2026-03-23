n.d(t, { A: () => f });
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
    _ = n(82890);
function g() {
    return (0, a.jsx)(i.Text, { variant: "text-sm/normal", color: "text-subtle", children: x.intl.string(x.t.GruYxV) });
}
let f = function (e) {
    let { application: t, detectedGame: n, trackAction: f } = e,
        p = l.useMemo(() => n.genres.map(r.du).join(", "), [n]),
        h = n.publishers.join(", "),
        v = n.developers.join(", "),
        A = n.firstReleaseDate,
        j = (0, c.A)(n),
        I = (0, o.Y)(n),
        b = !(0, s.uJ)(p),
        C = !(0, s.uJ)(h),
        E = !(0, s.uJ)(v),
        N = !(0, s.uJ)(A),
        T = j.length > 0,
        S = I.length > 0 && !I.every((e) => (0, s.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: _.uW,
        children: [
            (0, a.jsx)("div", {
                className: _.Gf,
                children: (0, a.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: x.intl.string(x.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: _.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.genres.length ? x.intl.string(x.t.pDgwYB) : x.intl.string(x.t.mjFKqn),
                            }),
                            b
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: p,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.publishers.length
                                        ? x.intl.string(x.t.Hc7Enk)
                                        : x.intl.string(x.t["4Byy/G"]),
                            }),
                            C
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: h,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.developers.length ? x.intl.string(x.t.KATEJB) : x.intl.string(x.t.na3PT0),
                            }),
                            E
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: v,
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: x.intl.string(x.t.H3mPDT),
                            }),
                            N
                                ? (0, a.jsx)(i.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.Gu,
                                      children: new Date(A).toLocaleDateString(x.intl.currentLocale, {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                      }),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.length > 1 ? x.intl.string(x.t.PNqxNe) : x.intl.string(x.t["UxAag+"]),
                            }),
                            T
                                ? (0, a.jsx)("div", {
                                      className: _.Gu,
                                      children: j.map((e) => (0, a.jsx)(m.s, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.J1,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: x.intl.string(x.t["Oj3o1/"]),
                            }),
                            S
                                ? (0, a.jsx)("div", {
                                      className: _.Gu,
                                      children: I.map((e) => (0, a.jsx)(u.K, { website: e, trackClick: f }, e.url)),
                                  })
                                : (0, a.jsx)(g, {}),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: _.OQ, children: (0, a.jsx)(d.A, { application: t, trackAction: f }) }),
        ],
    });
};
