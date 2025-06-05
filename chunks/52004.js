i.d(n, { default: () => d });
var e = i(255367);
i(73800);
var l = i(442837),
    s = i(481060),
    a = i(812206),
    r = i(600164),
    c = i(63063),
    o = i(981631),
    m = i(388032),
    p = i(981860);
let x = c.Z.getArticleURL(o.BhN.MISSING_ENTITLEMENT),
    d = l.ZP.connectStores([a.Z], (t) => {
        let { applicationId: n } = t;
        return { application: a.Z.getApplication(n) };
    })(function (t) {
        let { application: n, transitionState: i, onClose: l } = t;
        return (0, e.jsxs)(s.Y0X, {
            transitionState: i,
            size: s.CgR.MEDIUM,
            parentComponent: 'MissingEntitlementModal',
            children: [
                (0, e.jsxs)(s.xBx, {
                    align: r.Z.Align.CENTER,
                    justify: r.Z.Justify.BETWEEN,
                    children: [
                        (0, e.jsx)(s.vwX, {
                            tag: s.RB0.H4,
                            children: null != n ? m.intl.formatToPlainString(m.t.N2mILi, { applicationName: n.name }) : m.intl.string(m.t.nS8PUV)
                        }),
                        (0, e.jsx)(s.olH, { onClick: l })
                    ]
                }),
                (0, e.jsxs)(s.hzk, {
                    children: [
                        (0, e.jsx)('div', { className: p.missingEntitlementImage }),
                        (0, e.jsx)(s.Text, {
                            className: p.text,
                            variant: 'text-md/normal',
                            children:
                                null != n
                                    ? m.intl.format(m.t['MM/7q6'], {
                                          applicationName: n.name,
                                          supportArticleURL: x
                                      })
                                    : m.intl.format(m.t.IfQUx8, { supportArticleURL: x })
                        })
                    ]
                }),
                (0, e.jsx)(s.mzw, {
                    children: (0, e.jsx)(s.zxk, {
                        onClick: l,
                        children: m.intl.string(m.t.BddRzc)
                    })
                })
            ]
        });
    });
