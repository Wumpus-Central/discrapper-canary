s.d(t, { default: () => S });
var n = s(627968),
    i = s(64700),
    l = s(503698),
    r = s.n(l),
    a = s(311907),
    c = s(990078),
    o = s(732955),
    d = s(397927),
    u = s(855057),
    x = s(45837),
    g = s(888697),
    f = s(94113),
    m = s(493819),
    p = s(131955),
    j = s(924804),
    h = s(985018),
    b = s(92112);
let _ = [
    { gif: s(203736), png: s(775788) },
    { gif: s(640237), png: s(689006) },
    { gif: s(964805), png: s(533798) },
    { gif: s(322821), png: s(891814) },
];
function C(e) {
    let { shouldAnimate: t } = e;
    return (0, n.jsx)("div", {
        className: b.p8,
        children: _.map((e) =>
            (0, n.jsx)("div", { className: b.Nw, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function N(e) {
    let { onOpenGIFPicker: t } = e,
        { shouldAnimate: s, onMouseEnter: i, onMouseLeave: l } = (0, x.A)();
    return (0, n.jsxs)("ul", {
        className: b.f9,
        children: [
            (0, n.jsx)("li", {
                children: (0, n.jsx)(c.m, {
                    text: h.intl.string(j.default.BIdpHb),
                    children: (0, n.jsx)("div", {
                        className: r()(b.uK, b.IZ),
                        children: (0, n.jsxs)("div", {
                            className: b.Mn,
                            children: [
                                (0, n.jsx)(d.XGR, { size: "md", color: "currentColor" }),
                                (0, n.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: h.intl.string(j.default.bjP2Do),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
            (0, n.jsx)("li", {
                children: (0, n.jsxs)(d.DUT, {
                    className: b.uK,
                    onClick: t,
                    onMouseEnter: i,
                    onMouseLeave: l,
                    children: [
                        (0, n.jsx)(C, { shouldAnimate: s }),
                        (0, n.jsxs)("div", {
                            className: b.Mn,
                            children: [
                                (0, n.jsx)(d.Osp, { size: "md", color: "currentColor" }),
                                (0, n.jsx)(d.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: h.intl.string(j.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function I(e) {
    let { onSelect: t } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(d.Text, { variant: "text-sm/semibold", children: h.intl.string(j.default.SQb1dl) }),
            (0, n.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: b.u2,
                children: h.intl.string(j.default["2THN2i"]),
            }),
            (0, n.jsx)("div", {
                className: b.si,
                children: p.Kg.map((e, s) => {
                    let { gif: i, png: l } = e;
                    return (0, n.jsx)(
                        d.DUT,
                        {
                            onClick: () => t(i),
                            children: (0, n.jsx)(m.A, { src: i, staticSrc: l, autoPlayOnMount: !0, className: b.yh }),
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
function v(e) {
    let { recentUrls: t, onSelect: s } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(d.Text, { variant: "text-sm/semibold", children: h.intl.string(j.default.dDID2M) }),
            (0, n.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: b.u2,
                children: h.intl.string(j.default["9Xxm0y"]),
            }),
            (0, n.jsx)("div", {
                className: b.si,
                children: t.map((e) =>
                    (0, n.jsx)(
                        d.DUT,
                        { onClick: () => s(e), children: (0, n.jsx)(m.A, { src: e, className: b.yh }) },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function S(e) {
    let { transitionState: t, onClose: s, channel: l } = e,
        [r, c] = i.useState("HOME"),
        d = (0, a.bG)([f.A], () => f.A.getRecentImageUrls()),
        x = i.useCallback(
            async (e) => {
                await (0, g._)(l.id, e), s();
            },
            [l.id, s],
        ),
        m = i.useCallback(
            (e) => {
                let t = e.src ?? e.url;
                null != t && x(t);
            },
            [x],
        );
    return "GIF_PICKER" === r
        ? (0, n.jsxs)(o.dWK, {
              transitionState: t,
              onClose: s,
              size: "md",
              children: [
                  (0, n.jsx)(o.rQ0, { title: h.intl.string(j.default.HkszWk) }),
                  (0, n.jsx)("div", {
                      className: b.SD,
                      children: (0, n.jsx)(u.A, { className: b.XC, onSelectGIF: m, headingColor: "text-subtle" }),
                  }),
              ],
          })
        : (0, n.jsx)(o.aFV, {
              transitionState: t,
              onClose: s,
              size: "md",
              title: h.intl.string(j.default.yyPbqI),
              subtitle: h.intl.string(j.default["+y6KsI"]),
              actions: [],
              children: (0, n.jsxs)("div", {
                  className: b.jE,
                  children: [
                      (0, n.jsx)(N, { onOpenGIFPicker: () => c("GIF_PICKER") }),
                      d.length > 0 ? (0, n.jsx)(v, { recentUrls: d, onSelect: x }) : (0, n.jsx)(I, { onSelect: x }),
                  ],
              }),
          });
}
