n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(345332),
    a = n(481060),
    s = n(260722),
    o = n(277537),
    d = n(681678),
    c = n(138201),
    u = n(388032);
let m = (e) => {
    var t, n;
    let { parents: m } = e,
        p = (0, o.PO)("share_with_parent_element"),
        [g, _] = l.useState(!1),
        x = l.useCallback(() => {
            (0, s.ty)()
                .then(() => {
                    var e, t;
                    (0, a.showToast)(
                        (0, i.Y)(
                            u.intl.formatToPlainString(u.t.wr4IT5, {
                                count: m.length,
                                parent1: m[0].username,
                                parent2: null == (e = m[1]) ? void 0 : e.username,
                                parent3: null == (t = m[2]) ? void 0 : t.username,
                            }),
                            a.ToastType.SUCCESS,
                        ),
                    ),
                        _(!0);
                })
                .catch(() => {
                    d.Z.showFailedToast();
                });
        }, [m]);
    if (0 === m.length || !p) return null;
    let h = u.intl.formatToPlainString(u.t.HqyWeO, {
        count: m.length,
        parent1: m[0].username,
        parent2: null == (t = m[1]) ? void 0 : t.username,
        parent3: null == (n = m[2]) ? void 0 : n.username,
    });
    return (0, r.jsx)(c.JZ, {
        title: h,
        description: u.intl.string(u.t["5l/hlt"]),
        buttonText: g ? u.intl.string(u.t.ntuuk7) : u.intl.string(u.t["sYdX/H"]),
        buttonDisabled: g,
        onButtonPress: x,
    });
};
