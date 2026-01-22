n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(91871),
    o = n.n(i),
    a = n(111956),
    s = n.n(a),
    c = n(33851),
    d = n.n(c),
    u = n(417597),
    C = n(783878),
    f = n(57222),
    b = n(504049),
    m = n(266047),
    p = n(221950),
    j = n(950072),
    g = n(985018),
    h = n(246542);
let x = new Set();
function y(e) {
    let { guildId: t } = e,
        n = (0, b.hs)(t),
        i = (0, u.bG)([m.A], () => m.A.getSearchStateByGuildId(t), [t], d()),
        [a, c] = l.useState(i.selectedRoleIds),
        y = (0, f.H)(t, x, !0),
        O = l.useCallback(
            (e) => {
                (0, p.Ld)(t, { selectedRoleIds: e }), n(e);
            },
            [t, n],
        ),
        v = l.useMemo(() => s()(O, 300), [O]),
        H = l.useCallback(
            (e) => {
                let t = new Set(null != e ? e : []);
                c(t), v(t);
            },
            [v],
        ),
        w = l.useCallback(
            (e) => {
                let { record: n } = e;
                return {
                    id: n.id,
                    value: n.id,
                    label: n.name,
                    leading: (0, r.jsx)(
                        j.C,
                        {
                            role: n,
                            guildId: t,
                        },
                        n.id,
                    ),
                };
            },
            [t],
        ),
        A = l.useCallback(
            (e, t) => {
                let n = new Map(y.map((e) => [e.record.id, e]));
                return e.filter((e) => {
                    let r = n.get(e.value);
                    if (null == r) return !1;
                    let { record: l } = r;
                    return o()(t.toLowerCase(), l.name.toLowerCase());
                });
            },
            [y],
        );
    return (0, r.jsx)("div", {
        className: h.qm,
        children: (0, r.jsx)(C.Z, {
            label: g.intl.string(g.t.ZveC7e),
            hideLabel: !0,
            placeholder: g.intl.string(g.t.ZveC7e),
            value: Array.from(a),
            onSelectionChange: H,
            options: y,
            formatOption: w,
            customMatchSorter: A,
            selectionMode: "multiple",
            autoFocus: !0,
            closeOnSelect: !1,
            shouldFocusWrap: !0,
        }),
    });
}
