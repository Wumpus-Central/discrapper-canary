n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(345332),
    a = n(481060),
    o = n(260722),
    s = n(277537),
    c = n(681678),
    d = n(138201),
    u = n(388032);
let _ = (e) => {
    var t, n;
    let { parents: _ } = e,
        m = (0, s.PO)("share_with_parent_element"),
        [p, g] = i.useState(!1),
        f = i.useCallback(() => {
            (0, o.ty)()
                .then(() => {
                    var e, t;
                    (0, a.showToast)(
                        (0, l.Y)(
                            u.intl.formatToPlainString(u.t.wr4IT0, {
                                count: _.length,
                                parent1: _[0].username,
                                parent2: null == (e = _[1]) ? void 0 : e.username,
                                parent3: null == (t = _[2]) ? void 0 : t.username,
                            }),
                            a.ToastType.SUCCESS,
                        ),
                    ),
                        g(!0);
                })
                .catch(() => {
                    c.Z.showFailedToast();
                });
        }, [_]);
    if (0 === _.length || !m) return null;
    let b = u.intl.formatToPlainString(u.t.HqyWeH, {
        count: _.length,
        parent1: _[0].username,
        parent2: null == (t = _[1]) ? void 0 : t.username,
        parent3: null == (n = _[2]) ? void 0 : n.username,
    });
    return (0, r.jsx)(d.JZ, {
        title: b,
        description: u.intl.string(u.t["5l/hlp"]),
        buttonText: p ? u.intl.string(u.t.ntuuk5) : u.intl.string(u.t["sYdX/P"]),
        buttonDisabled: p,
        onButtonPress: f,
    });
};
