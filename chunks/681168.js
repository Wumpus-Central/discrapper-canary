n.d(t, { A: () => b });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(140735),
    s = n(349288),
    o = n(531142),
    d = n(939249),
    c = n(43990),
    u = n(696986),
    m = n(534514),
    _ = n(834730),
    p = n(769840),
    h = n(263577),
    A = n(156603),
    C = n(176563),
    x = n(506326),
    f = n(915089),
    E = n(818348),
    I = n(985018),
    N = n(672743),
    g = n(392419);
function v(e) {
    let { className: t, clickableClassName: n, clickable: l, children: c } = e,
        u = (0, f.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: o } = l;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(i.A, { id: u, children: e }),
                (0, a.jsx)(s.Anchor, { className: r()(t, n), href: o, "aria-describedby": u, children: c }),
            ],
        });
    }
    let { onClick: m, ariaDescription: _ } = l ?? {};
    return (0, a.jsxs)(o.g.Provider, {
        value: null == m,
        children: [
            null != m && null != _ && (0, a.jsx)(i.A, { id: u, children: _ }),
            (0, a.jsx)(d.D, {
                onClick: m,
                "aria-describedby": null == m ? void 0 : u,
                className: r()(t, null != m && n),
                children: c,
            }),
        ],
    });
}
function T(e) {
    let { clickable: t, ...n } = e;
    return (0, a.jsx)(v, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: g.v });
}
function b(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: i,
            thumbnailUrl: s,
            titleClickable: o,
            subtitleClickable: d,
            thumbnailClickable: g,
            providerIconProps: b,
            style: S = {},
        } = e,
        j = (0, f.GV)(),
        { primaryColor: O, secondaryColor: y } = (0, C.A)(s);
    return (
        null != s && (S.background = `linear-gradient(45deg, ${O}, ${y})`),
        (0, a.jsx)(c.N, {
            theme: E.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, a.jsxs)("figure", {
                    "aria-roledescription": I.intl.string(I.t.zFfUhF),
                    "aria-labelledby": j,
                    className: r()(N.kL, e),
                    style: S,
                    children: [
                        (0, a.jsx)(v, {
                            className: N.iT,
                            clickableClassName: N.vk,
                            clickable: g,
                            children: (0, a.jsx)(h.V, { src: s, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, a.jsxs)("div", {
                            className: N.op,
                            children: [
                                (0, a.jsx)(p.A, { channel: n, entry: t, className: N.VV }),
                                (0, a.jsx)(u.h, { size: 2 }),
                                (0, a.jsx)(T, {
                                    clickable: o,
                                    className: N.sd,
                                    children: (0, a.jsx)(m.D, {
                                        id: j,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: r()(N.ek, N.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != i
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(u.h, { size: 2 }),
                                              (0, a.jsx)(T, {
                                                  clickable: d,
                                                  className: N.sd,
                                                  children: (0, a.jsx)(_.E, {
                                                      variant: "text-sm/normal",
                                                      className: r()(N.c1, N.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: i,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, a.jsx)(x.iT, { className: N.jp, entry: t, location: x.N5.EMBED }),
                            ],
                        }),
                        (0, a.jsx)("div", { className: N.Y, children: null != b ? (0, a.jsx)(A.A, { ...b }) : null }),
                    ],
                }),
        })
    );
}
