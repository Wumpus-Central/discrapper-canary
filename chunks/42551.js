n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(658722),
    o = n.n(i),
    a = n(954955),
    s = n.n(a),
    c = n(498607),
    u = n.n(c),
    d = n(399606),
    C = n(333200),
    m = n(563115),
    b = n(910693),
    f = n(893966),
    p = n(527379),
    h = n(285173),
    g = n(388032),
    j = n(115491);
let x = new Set();
function v(e) {
    let { guildId: t } = e,
        n = (0, b.BG)(t),
        i = (0, d.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], u()),
        [a, c] = l.useState(i.selectedRoleIds),
        v = (0, m.h)(t, x, !0),
        y = l.useCallback(
            (e) => {
                (0, p.Dr)(t, { selectedRoleIds: e }), n(e);
            },
            [t, n],
        ),
        O = l.useMemo(() => s()(y, 300), [y]),
        H = l.useCallback(
            (e) => {
                let t = new Set(null != e ? e : []);
                c(t), O(t);
            },
            [O],
        ),
        _ = l.useCallback(
            (e) => {
                let { record: n } = e;
                return {
                    id: n.id,
                    value: n.id,
                    label: n.name,
                    leading: (0, r.jsx)(
                        h.$,
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
                let n = new Map(v.map((e) => [e.record.id, e]));
                return e.filter((e) => {
                    let r = n.get(e.value);
                    if (null == r) return !1;
                    let { record: l } = r;
                    return o()(t.toLowerCase(), l.name.toLowerCase());
                });
            },
            [v],
        );
    return (0, r.jsx)("div", {
        className: j.rolePopout,
        children: (0, r.jsx)(C.V, {
            label: g.intl.string(g.t.ZveC7e),
            hideLabel: !0,
            placeholder: g.intl.string(g.t.ZveC7e),
            value: Array.from(a),
            onSelectionChange: H,
            options: v,
            formatOption: _,
            customMatchSorter: w,
            selectionMode: "multiple",
            autoFocus: !0,
            closeOnSelect: !1,
            shouldFocusWrap: !0,
        }),
    });
}
