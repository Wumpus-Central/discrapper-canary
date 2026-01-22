n.d(t, {
    A: () => u,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(857250),
    i = n(397927),
    s = n(899847),
    o = n(662502),
    c = n(632738),
    d = n(985018);
let u = (e) => {
    var t, n;
    let { parents: u } = e,
        [m, b] = r.useState(!1),
        p = r.useCallback(() => {
            (0, s.Xz)()
                .then(() => {
                    var e, t;
                    (0, i.showToast)(
                        (0, a.o)(
                            d.intl.formatToPlainString(d.t.wr4IT5, {
                                count: u.length,
                                parent1: u[0].username,
                                parent2: null == (e = u[1]) ? void 0 : e.username,
                                parent3: null == (t = u[2]) ? void 0 : t.username,
                            }),
                            i.ToastType.SUCCESS,
                        ),
                    ),
                        b(!0);
                })
                .catch(() => {
                    o.A.showFailedToast();
                });
        }, [u]);
    if (0 === u.length) return null;
    let x = d.intl.formatToPlainString(d.t.HqyWeO, {
        count: u.length,
        parent1: u[0].username,
        parent2: null == (t = u[1]) ? void 0 : t.username,
        parent3: null == (n = u[2]) ? void 0 : n.username,
    });
    return (0, l.jsx)(c.PQ, {
        title: x,
        description: d.intl.string(d.t["5l/hlt"]),
        buttonText: m ? d.intl.string(d.t.ntuuk7) : d.intl.string(d.t["sYdX/H"]),
        buttonDisabled: m,
        onButtonPress: p,
    });
};
