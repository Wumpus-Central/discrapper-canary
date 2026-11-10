var a = i(477900),
    l = i(582128),
    r = i(503698),
    n = i.n(r),
    t = i(866665),
    d = i(939249),
    c = i(534514),
    o = i(646514),
    x = i(713517),
    m = i(240248),
    h = i(857707),
    v = i(792996),
    u = i(228433);
i.d(
    e,
    {},
    {
        A: function (s) {
            let {
                    prefix: e,
                    title: i,
                    subtitle: r,
                    subtitleCta: j,
                    subtitlePrefixIcon: N,
                    isFlush: p = !1,
                    onClick: C,
                } = s,
                { isPortrait: f } = l.useContext(h.D),
                g = l.useRef(null),
                { isHoveringOrFocusing: D } = (0, x.A)(g);
            return (0, a.jsx)(t.m, {
                text: v.intl.string(v.t.EuHF34),
                children: (0, a.jsx)(d.D, {
                    onClick: C,
                    className: u.vk,
                    children: (0, a.jsxs)("div", {
                        ref: g,
                        className: n()(u.lO, { [u.zN]: p }),
                        children: [
                            e,
                            (0, a.jsxs)("div", {
                                className: u.Qq,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: u.nM,
                                        children: (0, a.jsx)(c.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-strong",
                                            className: n()(u.Fv, { [u.am]: f }),
                                            lineClamp: f ? void 0 : 1,
                                            children: i,
                                        }),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: n()(u.nM, { [u.wT]: f }),
                                        children: [
                                            null != N
                                                ? (0, a.jsx)("div", {
                                                      className: n()(u.CF, { [u.BW]: f }),
                                                      children: (0, a.jsx)(N, {
                                                          size: "xs",
                                                          color: D
                                                              ? o.A.colors.ICON_STRONG.css
                                                              : o.A.colors.ICON_MUTED.css,
                                                      }),
                                                  })
                                                : null,
                                            (0, a.jsx)(c.D, {
                                                variant: "heading-xs/medium",
                                                className: n()(u.CF, { [u.BW]: f }),
                                                color: D ? "text-strong" : "text-subtle",
                                                lineClamp: 1,
                                                children: r,
                                            }),
                                            (0, m.uJ)(j)
                                                ? null
                                                : (0, a.jsxs)(a.Fragment, {
                                                      children: [
                                                          (0, a.jsx)("div", {
                                                              "aria-hidden": "true",
                                                              className: n()(u.SC, { [u.b2]: f }),
                                                          }),
                                                          (0, a.jsx)(c.D, {
                                                              className: n()(u.Fv, { [u.am]: f }),
                                                              variant: "heading-xs/medium",
                                                              lineClamp: f ? void 0 : 1,
                                                              color: D ? "text-strong" : "text-subtle",
                                                              children: j,
                                                          }),
                                                      ],
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            });
        },
    },
);
