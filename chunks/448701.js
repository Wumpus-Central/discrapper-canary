n.d(i, {
    default: () => u,
});
var e = n(627968),
    a = n(311907),
    l = n(397927),
    r = n(587895),
    s = n(235986),
    c = n(975571),
    o = n(652215),
    p = n(985018),
    d = n(421021);
let m = c.A.getArticleURL(o.MVz.MISSING_ENTITLEMENT),
    u = a.Ay.connectStores([r.A], (t) => {
        let { applicationId: i } = t;
        return {
            application: r.A.getApplication(i),
        };
    })(function (t) {
        let { application: i, transitionState: n, onClose: a } = t;
        return (0, e.jsxs)(l.EOs, {
            transitionState: n,
            size: l.rIJ.MEDIUM,
            parentComponent: "MissingEntitlementModal",
            children: [
                (0, e.jsxs)(l.rQ0, {
                    align: s.A.Align.CENTER,
                    justify: s.A.Justify.BETWEEN,
                    children: [
                        (0, e.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children:
                                null != i
                                    ? p.intl.formatToPlainString(p.t.N2mILu, {
                                          applicationName: i.name,
                                      })
                                    : p.intl.string(p.t.nS8PUT),
                        }),
                        (0, e.jsx)(l.s_y, {
                            onClick: a,
                        }),
                    ],
                }),
                (0, e.jsxs)(l.$mQ, {
                    children: [
                        (0, e.jsx)("div", {
                            className: d.r,
                        }),
                        (0, e.jsx)(l.Text, {
                            className: d.Q,
                            variant: "text-md/normal",
                            children:
                                null != i
                                    ? p.intl.format(p.t["MM/7qx"], {
                                          applicationName: i.name,
                                          supportArticleURL: m,
                                      })
                                    : p.intl.format(p.t["IfQUx+"], {
                                          supportArticleURL: m,
                                      }),
                        }),
                    ],
                }),
                (0, e.jsx)(l.jlY, {
                    children: (0, e.jsx)(l.Button, {
                        variant: "primary",
                        text: p.intl.string(p.t.BddRzS),
                        onClick: a,
                    }),
                }),
            ],
        });
    });
