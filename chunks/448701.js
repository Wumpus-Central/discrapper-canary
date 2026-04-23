n.d(i, { default: () => u });
var a = n(627968),
    e = n(189213),
    l = n(17928),
    r = n(587895),
    o = n(975571),
    p = n(652215),
    s = n(985018);
let c = o.A.getArticleURL(p.MVz.MISSING_ENTITLEMENT),
    u = l.Ay.connectStores([r.A], (t) => {
        let { applicationId: i } = t;
        return { application: r.A.getApplication(i) };
    })(function (t) {
        let { application: i, transitionState: n, onClose: l } = t;
        return (0, a.jsx)(e.Modal, {
            transitionState: n,
            size: "md",
            onClose: l,
            title:
                null != i
                    ? s.intl.formatToPlainString(s.t.N2mILu, { applicationName: i.name })
                    : s.intl.string(s.t.nS8PUT),
            subtitle:
                null != i
                    ? s.intl.format(s.t["MM/7qx"], { applicationName: i.name, supportArticleURL: c })
                    : s.intl.format(s.t["IfQUx+"], { supportArticleURL: c }),
            actions: [{ text: s.intl.string(s.t.BddRzS), onClick: l, variant: "primary" }],
        });
    });
