n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(799899),
    l = n(435935),
    c = n(442837),
    u = n(481060),
    d = n(960412),
    f = n(151662),
    _ = n(695346),
    p = n(342386),
    h = n(981631),
    m = n(930441),
    g = n(412297),
    E = n(388032),
    b = n(262526),
    y = n(10198);
let O = () => {
    let e = _.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([f.Z], () => f.Z.getEmailSettings());
    function a(e) {
        (0, d.pR)(m.$Z.FAMILY_CENTER_DIGEST, e);
    }
    return (
        i.useEffect(() => {
            null == n && (0, d.Y7)();
        }, [n]),
        (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: E.intl.string(g.default.USIXU1),
                }),
                (0, r.jsx)(u.j7V, {
                    className: o()(y.marginTop8, y.marginBottom20),
                    value: e,
                    note: E.intl.string(g.default["5MdB3t"]),
                    hideBorder: !0,
                    onChange: _.Ex.updateSetting,
                    children: E.intl.string(g.default.zkEceX),
                }),
                e
                    ? (0, r.jsx)(u.Zbd, {
                          className: b.enableCard,
                          type: u.Zbd.Types.CUSTOM,
                          outline: !0,
                          children: (0, r.jsxs)(l.k, {
                              justify: l.k.Justify.END,
                              children: [
                                  (0, r.jsx)(l.k.Child, {
                                      children: (0, r.jsx)(u.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: E.intl.string(g.default.xAVm7O),
                                      }),
                                  }),
                                  (0, r.jsx)(u.P3F, {
                                      children: (0, r.jsx)(s.rU, {
                                          onClick: p.Z,
                                          to: {
                                              pathname: h.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 },
                                          },
                                          children: E.intl.string(g.default.cUIXFR),
                                      }),
                                  }),
                                  (0, r.jsx)(u.G2e, {
                                      icon: u.ZSh,
                                      className: b.arrow,
                                      disableColor: !0,
                                  }),
                              ],
                          }),
                      })
                    : null,
                (0, r.jsx)(u.j7V, {
                    className: o()(y.marginTop20, y.marginBottom20),
                    value: !!t[m.$Z.FAMILY_CENTER_DIGEST],
                    note: E.intl.string(g.default["y34S4+"]),
                    hideBorder: !0,
                    onChange: a,
                    children: E.intl.string(g.default.irvJKS),
                }),
            ],
        })
    );
};
