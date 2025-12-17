n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(345332),
    a = n(481060),
    s = n(260722),
    o = n(681678),
    c = n(138201),
    d = n(388032);
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
                            d.intl.formatToPlainString(d.t.wr4IT5, {
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
    let g = d.intl.formatToPlainString(d.t.HqyWeO, {
        count: u.length,
        parent1: u[0].username,
        parent2: null == (t = u[1]) ? void 0 : t.username,
        parent3: null == (n = u[2]) ? void 0 : n.username,
    });
    return (0, r.jsx)(c.JZ, {
        title: g,
        description: d.intl.string(d.t["5l/hlt"]),
        buttonText: m ? d.intl.string(d.t.ntuuk7) : d.intl.string(d.t["sYdX/H"]),
        buttonDisabled: m,
        onButtonPress: p,
    });
};
