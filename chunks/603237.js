n.d(t, { n: () => g });
var r = n(54381),
    i = n(473749),
    s = n(481060),
    a = n(82554),
    l = n(63063),
    o = n(432510),
    c = n(981631),
    u = n(388032),
    d = n(885146);
let h = {
        [a.BM.MESSAGE]: u.t.fuqnBC,
        [a.BM.USER]: u.t.F4jrRW,
        [a.BM.GUILD]: u.t.gH3aMs,
    },
    f = (e) => {
        let { title: t, menuType: n, onReopen: a } = e,
            l = i.useCallback(() => {
                (0, o.l)(n, a)();
            }, [n, a]);
        return (0, r.jsxs)(s.P3F, {
            className: d.reportButton,
            onClick: l,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
                (0, r.jsx)(s.V7D, {
                    size: "sm",
                    style: { transform: "rotate(180deg)" },
                }),
            ],
        });
    },
    g = (e) => {
        let { showBackButton: t, onBack: n, dsaCapabilities: i, renderFooter: o, onClose: g, onReopen: m } = e,
            p =
                t && null != n
                    ? (0, r.jsx)("div", {
                          className: d.footerButtons,
                          children: (0, r.jsx)(s.Button, {
                              variant: "secondary",
                              text: u.intl.string(u.t["13/7kX"]),
                              onClick: n,
                          }),
                      })
                    : null;
        return (0, r.jsxs)(s.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    children: u.intl.string(u.t.Z11w18),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: u.intl.format(u.t["532l+q"], {
                        supportURL: l.Z.getArticleURL(c.BhN.COPYRIGHT_AND_IP_POLICY),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: d.container,
                    children: i.map((e) =>
                        e === a.BM.MEDIA_TAKEDOWN || null == h[e]
                            ? null
                            : (0, r.jsx)(
                                  f,
                                  {
                                      title: u.intl.string(h[e]),
                                      menuType: e,
                                      onClose: g,
                                      onReopen: m,
                                  },
                                  e,
                              ),
                    ),
                }),
                null == o ? void 0 : o(p),
            ],
        });
    };
