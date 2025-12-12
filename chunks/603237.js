n.d(t, { n: () => m });
var r = n(54381),
    i = n(473749),
    s = n(481060),
    l = n(82554),
    a = n(63063),
    o = n(432510),
    c = n(981631),
    u = n(388032),
    d = n(16362);
let h = {
        [l.BM.MESSAGE]: u.t.fuqnBC,
        [l.BM.USER]: u.t.F4jrRW,
        [l.BM.GUILD]: u.t.gH3aMs,
    },
    g = (e) => {
        let { title: t, menuType: n, onReopen: l } = e,
            a = i.useCallback(() => {
                (0, o.l)(n, l)();
            }, [n, l]);
        return (0, r.jsxs)(s.P3F, {
            className: d.reportButton,
            onClick: a,
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
    m = (e) => {
        let { showBackButton: t, onBack: n, dsaCapabilities: i, renderFooter: o, onClose: m, onReopen: p } = e,
            f =
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
                        supportURL: a.Z.getArticleURL(c.BhN.COPYRIGHT_AND_IP_POLICY),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: d.container,
                    children: i.map((e) =>
                        e === l.BM.MEDIA_TAKEDOWN || null == h[e]
                            ? null
                            : (0, r.jsx)(
                                  g,
                                  {
                                      title: u.intl.string(h[e]),
                                      menuType: e,
                                      onClose: m,
                                      onReopen: p,
                                  },
                                  e,
                              ),
                    ),
                }),
                null == o ? void 0 : o(f),
            ],
        });
    };
