n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(345332),
    a = n(481060),
    s = n(260722),
    o = n(681678),
    d = n(138201),
    c = n(388032);
let u = (e) => {
    var t, n;
    let { parents: u } = e,
        [m, b] = l.useState(!1),
        p = l.useCallback(() => {
            (0, s.ty)()
                .then(() => {
                    var e, t;
                    (0, a.showToast)(
                        (0, i.Y)(
                            c.intl.formatToPlainString(c.t.wr4IT5, {
                                count: u.length,
                                parent1: u[0].username,
                                parent2: null == (e = u[1]) ? void 0 : e.username,
                                parent3: null == (t = u[2]) ? void 0 : t.username,
                            }),
                            a.ToastType.SUCCESS,
                        ),
                    ),
                        b(!0);
                })
                .catch(() => {
                    o.Z.showFailedToast();
                });
        }, [u]);
    if (0 === u.length) return null;
    let g = c.intl.formatToPlainString(c.t.HqyWeO, {
        count: u.length,
        parent1: u[0].username,
        parent2: null == (t = u[1]) ? void 0 : t.username,
        parent3: null == (n = u[2]) ? void 0 : n.username,
    });
    return (0, r.jsx)(d.JZ, {
        title: g,
        description: c.intl.string(c.t["5l/hlt"]),
        buttonText: m ? c.intl.string(c.t.ntuuk7) : c.intl.string(c.t["sYdX/H"]),
        buttonDisabled: m,
        onButtonPress: p,
    });
};
