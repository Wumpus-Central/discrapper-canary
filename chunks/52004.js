n.d(i, { default: () => d });
var e = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(812206),
    r = n(600164),
    c = n(63063),
    o = n(981631),
    m = n(388032),
    p = n(981860);
let x = c.Z.getArticleURL(o.BhN.MISSING_ENTITLEMENT),
    d = s.ZP.connectStores([l.Z], (t) => {
        let { applicationId: i } = t;
        return { application: l.Z.getApplication(i) };
    })(function (t) {
        let { application: i, transitionState: n, onClose: s } = t;
        return (0, e.jsxs)(a.Y0X, {
            transitionState: n,
            size: a.CgR.MEDIUM,
            children: [
                (0, e.jsxs)(a.xBx, {
                    align: r.Z.Align.CENTER,
                    justify: r.Z.Justify.BETWEEN,
                    children: [
                        (0, e.jsx)(a.vwX, {
                            tag: a.RB0.H4,
                            children: null != i ? m.NW.formatToPlainString(m.t.N2mILi, { applicationName: i.name }) : m.NW.string(m.t.nS8PUV)
                        }),
                        (0, e.jsx)(a.olH, { onClick: s })
                    ]
                }),
                (0, e.jsxs)(a.hzk, {
                    children: [
                        (0, e.jsx)('div', { className: p.missingEntitlementImage }),
                        (0, e.jsx)(a.Text, {
                            className: p.text,
                            variant: 'text-md/normal',
                            children:
                                null != i
                                    ? m.NW.format(m.t['MM/7q6'], {
                                          applicationName: i.name,
                                          supportArticleURL: x
                                      })
                                    : m.NW.format(m.t.IfQUx8, { supportArticleURL: x })
                        })
                    ]
                }),
                (0, e.jsx)(a.mzw, {
                    children: (0, e.jsx)(a.zxk, {
                        onClick: s,
                        children: m.NW.string(m.t.BddRzc)
                    })
                })
            ]
        });
    });
