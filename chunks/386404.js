n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(91871),
    o = n.n(i),
    a = n(111956),
    s = n.n(a),
    c = n(33851),
    u = n.n(c),
    d = n(417597),
    C = n(397927),
    m = n(57222),
    p = n(504049),
    f = n(266047),
    b = n(221950),
    j = n(950072),
    g = n(985018),
    h = n(246542);
let x = new Set();

function y(e) {
    let { guildId: t } = e,
        n = (0, p.hs)(t),
        i = (0, d.bG)([f.A], () => f.A.getSearchStateByGuildId(t), [t], u()),
        [a, c] = l.useState(i.selectedRoleIds),
        y = (0, m.H)(t, x, !0),
        O = l.useCallback(
            (e) => {
                (0, b.Ld)(t, {
                    selectedRoleIds: e,
                }),
                    n(e);
            },
            [t, n],
        ),
        v = l.useMemo(() => s()(O, 300), [O]),
        _ = l.useCallback(
            (e) => {
                let t = new Set(null != e ? e : []);
                c(t), v(t);
            },
            [v],
        ),
        H = l.useCallback(
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
        w = l.useCallback(
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
        children: (0, r.jsx)(C.ZiE, {
            label: g.intl.string(g.t.ZveC7e),
            hideLabel: !0,
            placeholder: g.intl.string(g.t.ZveC7e),
            value: Array.from(a),
            onSelectionChange: _,
            options: y,
            formatOption: H,
            customMatchSorter: w,
            selectionMode: "multiple",
            autoFocus: !0,
            closeOnSelect: !1,
            shouldFocusWrap: !0,
        }),
    });
}
