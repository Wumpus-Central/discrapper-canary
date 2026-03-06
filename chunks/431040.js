"use strict";
n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(541830),
    s = n(240248),
    c = n(899273),
    o = n(504186),
    d = n(839671),
    u = n(936636),
    m = n(985018),
    x = n(203540);
let h = function (e) {
    let { detectedGame: t, trackClick: n } = e,
        h = a.useMemo(() => t.genres.map(r.du).join(", "), [t]),
        f = t.publishers.join(", "),
        g = t.developers.join(", "),
        p = t.firstReleaseDate,
        _ = (0, o.A)(t),
        v = (0, c.Y)(t),
        j = !(0, s.uJ)(h),
        A = !(0, s.uJ)(f),
        I = !(0, s.uJ)(g),
        E = null != p,
        b = _.length > 0,
        N = v.length > 0;
    return j || A || I || E || b || N
        ? (0, l.jsxs)("div", {
              className: x.uW,
              children: [
                  (0, l.jsx)("div", {
                      className: x.Gf,
                      children: (0, l.jsx)(i.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: m.intl.string(m.t["7OjmmH"]),
                      }),
                  }),
                  (0, l.jsxs)("div", {
                      className: x.kL,
                      children: [
                          j
                              ? (0, l.jsxs)("div", {
                                    className: x.J1,
                                    children: [
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children:
                                                t.genres.length > 1
                                                    ? m.intl.string(m.t.pDgwYB)
                                                    : m.intl.string(m.t.mjFKqn),
                                        }),
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: h,
                                        }),
                                    ],
                                })
                              : null,
                          A
                              ? (0, l.jsxs)("div", {
                                    className: x.J1,
                                    children: [
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children:
                                                t.publishers.length > 1
                                                    ? m.intl.string(m.t.Hc7Enk)
                                                    : m.intl.string(m.t["4Byy/G"]),
                                        }),
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: f,
                                        }),
                                    ],
                                })
                              : null,
                          I
                              ? (0, l.jsxs)("div", {
                                    className: x.J1,
                                    children: [
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children:
                                                t.developers.length > 1
                                                    ? m.intl.string(m.t.KATEJB)
                                                    : m.intl.string(m.t.na3PT0),
                                        }),
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: g,
                                        }),
                                    ],
                                })
                              : null,
                          E
                              ? (0, l.jsxs)("div", {
                                    className: x.J1,
                                    children: [
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: m.intl.string(m.t.H3mPDT),
                                        }),
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: new Date(p).toLocaleDateString(m.intl.currentLocale, {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }),
                                        }),
                                    ],
                                })
                              : null,
                          b
                              ? (0, l.jsxs)("div", {
                                    className: x.J1,
                                    children: [
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children:
                                                _.length > 1 ? m.intl.string(m.t.PNqxNe) : m.intl.string(m.t["UxAag+"]),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: x._e,
                                            children: _.map((e) => (0, l.jsx)(u.s, { platform: e }, e)),
                                        }),
                                    ],
                                })
                              : null,
                          N
                              ? (0, l.jsxs)("div", {
                                    className: x.J1,
                                    children: [
                                        (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: m.intl.string(m.t["Oj3o1/"]),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: x._e,
                                            children: v.map((e) =>
                                                (0, l.jsx)(d.K, { website: e, trackClick: n }, e.url),
                                            ),
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
