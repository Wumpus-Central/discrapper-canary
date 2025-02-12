n.d(i, { default: () => d });
var e = n(200651);
n(192379);
var l = n(442837),
    s = n(481060),
    a = n(812206),
    r = n(600164),
    c = n(63063),
    o = n(981631),
    m = n(388032),
    p = n(764568);
let x = c.Z.getArticleURL(o.BhN.MISSING_ENTITLEMENT),
    d = l.ZP.connectStores([a.Z], (t) => {
        let { applicationId: i } = t;
        return { application: a.Z.getApplication(i) };
    })(function (t) {
        let { application: i, transitionState: n, onClose: l } = t;
        return (0, e.jsxs)(s.Y0X, {
            transitionState: n,
            size: s.CgR.MEDIUM,
            children: [
                (0, e.jsxs)(s.xBx, {
                    align: r.Z.Align.CENTER,
                    justify: r.Z.Justify.BETWEEN,
                    children: [
                        (0, e.jsx)(s.vwX, {
                            tag: s.RB0.H4,
                            children: null != i ? m.intl.formatToPlainString(m.t.N2mILi, { applicationName: i.name }) : m.intl.string(m.t.nS8PUV)
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
                                null != i
                                    ? m.intl.format(m.t['MM/7q6'], {
                                          applicationName: i.name,
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
