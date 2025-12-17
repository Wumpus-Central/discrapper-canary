i.d(n, { default: () => x });
var e = i(54381),
    a = i(442837),
    l = i(481060),
    s = i(812206),
    r = i(600164),
    c = i(63063),
    o = i(981631),
    m = i(388032),
    p = i(192329);
let d = c.Z.getArticleURL(o.BhN.MISSING_ENTITLEMENT),
    x = a.ZP.connectStores([s.Z], (t) => {
        let { applicationId: n } = t;
        return { application: s.Z.getApplication(n) };
    })(function (t) {
        let { application: n, transitionState: i, onClose: a } = t;
        return (0, e.jsxs)(l.Y0X, {
            transitionState: i,
            size: l.CgR.MEDIUM,
            parentComponent: "MissingEntitlementModal",
            children: [
                (0, e.jsxs)(l.xBx, {
                    align: r.Z.Align.CENTER,
                    justify: r.Z.Justify.BETWEEN,
                    children: [
                        (0, e.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children:
                                null != n
                                    ? m.intl.formatToPlainString(m.t.N2mILu, { applicationName: n.name })
                                    : m.intl.string(m.t.nS8PUT),
                        }),
                        (0, e.jsx)(l.olH, { onClick: a }),
                    ],
                }),
                (0, e.jsxs)(l.hzk, {
                    children: [
                        (0, e.jsx)("div", { className: p.missingEntitlementImage }),
                        (0, e.jsx)(l.Text, {
                            className: p.text,
                            variant: "text-md/normal",
                            children:
                                null != n
                                    ? m.intl.format(m.t["MM/7qx"], {
                                          applicationName: n.name,
                                          supportArticleURL: d,
                                      })
                                    : m.intl.format(m.t["IfQUx+"], { supportArticleURL: d }),
                        }),
                    ],
                }),
                (0, e.jsx)(l.mzw, {
                    children: (0, e.jsx)(l.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t.BddRzS),
                        onClick: a,
                    }),
                }),
            ],
        });
    });
