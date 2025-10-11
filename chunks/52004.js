n.d(i, { default: () => x });
var e = n(951288),
    a = n(442837),
    l = n(481060),
    s = n(812206),
    r = n(600164),
    c = n(63063),
    o = n(981631),
    m = n(388032),
    p = n(281556);
let d = c.Z.getArticleURL(o.BhN.MISSING_ENTITLEMENT),
    x = a.ZP.connectStores([s.Z], (t) => {
        let { applicationId: i } = t;
        return { application: s.Z.getApplication(i) };
    })(function (t) {
        let { application: i, transitionState: n, onClose: a } = t;
        return (0, e.jsxs)(l.Y0X, {
            transitionState: n,
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
                                null != i
                                    ? m.intl.formatToPlainString(m.t.N2mILi, { applicationName: i.name })
                                    : m.intl.string(m.t.nS8PUV),
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
                                null != i
                                    ? m.intl.format(m.t["MM/7q6"], {
                                          applicationName: i.name,
                                          supportArticleURL: d,
                                      })
                                    : m.intl.format(m.t.IfQUx8, { supportArticleURL: d }),
                        }),
                    ],
                }),
                (0, e.jsx)(l.mzw, {
                    children: (0, e.jsx)(l.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t.BddRzc),
                        onClick: a,
                    }),
                }),
            ],
        });
    });
