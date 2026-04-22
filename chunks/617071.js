"use strict";
n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    r = n(857250),
    l = n(691540),
    s = n(97483),
    d = n(899847),
    o = n(662502),
    c = n(632738),
    u = n(985018);
let _ = (e) => {
    let { parents: t } = e,
        [n, _] = i.useState(!1),
        m = i.useCallback(() => {
            (0, d.Xz)()
                .then(() => {
                    (0, l.P0)(
                        (0, r.o)(
                            u.intl.formatToPlainString(u.t.wr4IT5, {
                                count: t.length,
                                parent1: t[0].username,
                                parent2: t[1]?.username,
                                parent3: t[2]?.username,
                            }),
                            s.Ck.SUCCESS,
                        ),
                    ),
                        _(!0);
                })
                .catch(() => {
                    o.A.showFailedToast();
                });
        }, [t]);
    if (0 === t.length) return null;
    let p = u.intl.formatToPlainString(u.t.HqyWeO, {
        count: t.length,
        parent1: t[0].username,
        parent2: t[1]?.username,
        parent3: t[2]?.username,
    });
    return (0, a.jsx)(c.PQ, {
        title: p,
        description: u.intl.string(u.t["5l/hlt"]),
        buttonText: n ? u.intl.string(u.t.ntuuk7) : u.intl.string(u.t["sYdX/H"]),
        buttonDisabled: n,
        onButtonPress: m,
    });
};
