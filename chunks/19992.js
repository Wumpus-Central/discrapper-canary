"use strict";
n.d(t, { c: () => p });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(17372),
    a = n(975571),
    o = n(204173),
    d = n(652215),
    c = n(985018),
    u = n(86661);
let h = { [l.tY.MESSAGE]: c.t.fuqnBC, [l.tY.USER]: c.t.F4jrRW, [l.tY.GUILD]: c.t.gH3aMs },
    _ = (e) => {
        let { title: t, menuType: n, onReopen: l } = e,
            a = s.useCallback(() => {
                (0, o.i)(n, l)();
            }, [n, l]);
        return (0, i.jsxs)(r.DUT, {
            className: u.b0,
            onClick: a,
            children: [
                (0, i.jsx)(r.Text, { variant: "text-md/medium", children: t }),
                (0, i.jsx)(r.n2b, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    p = (e) => {
        let { showBackButton: t, onBack: n, dsaCapabilities: s, renderFooter: o, onClose: p, onReopen: g } = e,
            m =
                t && null != n
                    ? (0, i.jsx)("div", {
                          className: u.Hq,
                          children: (0, i.jsx)(r.Button, {
                              variant: "secondary",
                              text: c.intl.string(c.t["13/7kX"]),
                              onClick: n,
                          }),
                      })
                    : null;
        return (0, i.jsxs)(r.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)(r.Heading, { variant: "heading-xl/semibold", children: c.intl.string(c.t.Z11w18) }),
                (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: c.intl.format(c.t["532l+q"], {
                        supportURL: a.A.getArticleURL(d.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: u.kL,
                    children: s.map((e) =>
                        e === l.tY.MEDIA_TAKEDOWN || null == h[e]
                            ? null
                            : (0, i.jsx)(_, { title: c.intl.string(h[e]), menuType: e, onClose: p, onReopen: g }, e),
                    ),
                }),
                o?.(m),
            ],
        });
    };
