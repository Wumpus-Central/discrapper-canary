n.d(t, { A: () => N });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(397927),
    i = n(769840),
    o = n(263577),
    c = n(156603),
    d = n(176563),
    u = n(506326),
    m = n(915089),
    p = n(818348),
    A = n(985018),
    h = n(787226),
    C = n(16312);
function E(e) {
    let { className: t, clickableClassName: n, clickable: a, children: i } = e,
        o = (0, m.GV)();
    if (null != a && "href" in a) {
        let { ariaDescription: e, href: c } = a;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(s.AC4, { id: o, children: e }),
                (0, l.jsx)(s.MzZ, { className: r()(t, n), href: c, "aria-describedby": o, children: i }),
            ],
        });
    }
    let { onClick: c, ariaDescription: d } = a ?? {};
    return (0, l.jsxs)(s.gmh.Provider, {
        value: null == c,
        children: [
            null != c && null != d && (0, l.jsx)(s.AC4, { id: o, children: d }),
            (0, l.jsx)(s.DUT, {
                onClick: c,
                "aria-describedby": null == c ? void 0 : o,
                className: r()(t, null != c && n),
                children: i,
            }),
        ],
    });
}
function x(e) {
    let { clickable: t, ...n } = e;
    return (0, l.jsx)(E, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: C.v });
}
function N(e) {
    let {
            entry: t,
            channel: n,
            title: a,
            subtitle: C,
            thumbnailUrl: N,
            titleClickable: I,
            subtitleClickable: _,
            thumbnailClickable: f,
            providerIconProps: g,
            style: T = {},
        } = e,
        v = (0, m.GV)(),
        { primaryColor: j, secondaryColor: S } = (0, d.A)(N);
    return (
        null != N && (T.background = `linear-gradient(45deg, ${j}, ${S})`),
        (0, l.jsx)(s.NPJ, {
            theme: p.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, l.jsxs)("figure", {
                    "aria-roledescription": A.intl.string(A.t.zFfUhF),
                    "aria-labelledby": v,
                    className: r()(h.kL, e),
                    style: T,
                    children: [
                        (0, l.jsx)(E, {
                            className: h.iT,
                            clickableClassName: h.vk,
                            clickable: f,
                            children: (0, l.jsx)(o.V, { src: N, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, l.jsxs)("div", {
                            className: h.op,
                            children: [
                                (0, l.jsx)(i.A, { channel: n, entry: t, className: h.VV }),
                                (0, l.jsx)(s.hKd, { size: 2 }),
                                (0, l.jsx)(x, {
                                    clickable: I,
                                    className: h.sd,
                                    children: (0, l.jsx)(s.Heading, {
                                        id: v,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: r()(h.ek, h.IY),
                                        scaleFontToUserSetting: !0,
                                        children: a,
                                    }),
                                }),
                                null != C
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(s.hKd, { size: 2 }),
                                              (0, l.jsx)(x, {
                                                  clickable: _,
                                                  className: h.sd,
                                                  children: (0, l.jsx)(s.Text, {
                                                      variant: "text-sm/normal",
                                                      className: r()(h.c1, h.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: C,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, l.jsx)(u.iT, { className: h.jp, entry: t, location: u.N5.EMBED }),
                            ],
                        }),
                        (0, l.jsx)("div", { className: h.Y, children: null != g ? (0, l.jsx)(c.A, { ...g }) : null }),
                    ],
                }),
        })
    );
}
