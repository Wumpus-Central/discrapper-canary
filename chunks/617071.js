n.d(t, { A: () => c });
var l = n(627968),
    a = n(64700),
    i = n(857250),
    r = n(397927),
    s = n(899847),
    d = n(662502),
    o = n(632738),
    u = n(985018);
let c = (e) => {
    let { parents: t } = e,
        [n, c] = a.useState(!1),
        m = a.useCallback(() => {
            (0, s.Xz)()
                .then(() => {
                    (0, r.showToast)(
                        (0, i.o)(
                            u.intl.formatToPlainString(u.t.wr4IT5, {
                                count: t.length,
                                parent1: t[0].username,
                                parent2: t[1]?.username,
                                parent3: t[2]?.username,
                            }),
                            r.ToastType.SUCCESS,
                        ),
                    ),
                        c(!0);
                })
                .catch(() => {
                    d.A.showFailedToast();
                });
        }, [t]);
    if (0 === t.length) return null;
    let _ = u.intl.formatToPlainString(u.t.HqyWeO, {
        count: t.length,
        parent1: t[0].username,
        parent2: t[1]?.username,
        parent3: t[2]?.username,
    });
    return (0, l.jsx)(o.PQ, {
        title: _,
        description: u.intl.string(u.t["5l/hlt"]),
        buttonText: n ? u.intl.string(u.t.ntuuk7) : u.intl.string(u.t["sYdX/H"]),
        buttonDisabled: n,
        onButtonPress: m,
    });
};
