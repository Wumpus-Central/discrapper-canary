i.d(e, { A: () => N });
var a = i(477900),
    l = i(582128),
    r = i(503698),
    n = i.n(r),
    t = i(866665),
    d = i(939249),
    c = i(297264),
    o = i(661531),
    m = i(713517),
    x = i(240248),
    h = i(857707),
    v = i(105292),
    u = i(228433),
    j = i(862649);
function N(s) {
    let { title: e, subtitle: i, subtitleCta: r, subtitlePrefixIcon: N, isFlush: p = !1, onClick: C } = s,
        { isPortrait: g } = l.useContext(h.D),
        f = l.useRef(null),
        { isHoveringOrFocusing: D } = (0, m.A)(f);
    return (0, a.jsx)(t.m, {
        text: v.intl.string(v.t.EuHF34),
        children: (0, a.jsx)(d.D, {
            onClick: C,
            className: u.vk,
            children: (0, a.jsxs)("div", {
                className: n()(j.hA, u.zH, { [u.zT]: p }),
                ref: f,
                children: [
                    (0, a.jsx)("div", {
                        className: u.nM,
                        children: (0, a.jsx)(c.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: n()(u.Fv, { [u.am]: g }),
                            lineClamp: g ? void 0 : 1,
                            children: e,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: n()(u.nM, { [u.wT]: g }),
                        children: [
                            null != N
                                ? (0, a.jsx)("div", {
                                      className: n()(u.CF, { [u.BW]: g }),
                                      children: (0, a.jsx)(N, {
                                          size: "xs",
                                          color: D ? o.A.colors.ICON_STRONG.css : o.A.colors.ICON_MUTED.css,
                                      }),
                                  })
                                : null,
                            (0, a.jsx)(c.D, {
                                variant: "heading-sm/medium",
                                className: n()(u.CF, { [u.BW]: g }),
                                color: D ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: i,
                            }),
                            (0, x.uJ)(r)
                                ? null
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: n()(u.SC, { [u.b2]: g }),
                                          }),
                                          (0, a.jsx)(c.D, {
                                              className: n()(u.Fv, { [u.am]: g }),
                                              variant: "heading-sm/medium",
                                              lineClamp: g ? void 0 : 1,
                                              color: D ? "text-strong" : "text-subtle",
                                              children: r,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
