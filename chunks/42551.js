n.d(t, { Z: () => x }), n(388685);
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
    g = n(388032);
let j = new Set();
function x(e) {
    let { guildId: t } = e,
        n = (0, b.BG)(t),
        i = (0, d.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], u()),
        [a, c] = l.useState(i.selectedRoleIds),
        x = (0, m.h)(t, j, !0),
        v = l.useCallback(
            (e) => {
                (0, p.Dr)(t, { selectedRoleIds: e }), n(e);
            },
            [t, n],
        ),
        y = l.useMemo(() => s()(v, 300), [v]),
        O = l.useCallback(
            (e) => {
                let t = new Set(null != e ? e : []);
                c(t), y(t);
            },
            [y],
        ),
        H = l.useCallback(
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
        _ = l.useCallback(
            (e, t) => {
                let n = new Map(x.map((e) => [e.record.id, e]));
                return e.filter((e) => {
                    let r = n.get(e.value);
                    if (null == r) return !1;
                    let { record: l } = r;
                    return o()(t.toLowerCase(), l.name.toLowerCase());
                });
            },
            [x],
        );
    return (0, r.jsx)(C.V, {
        label: g.intl.string(g.t.ZveC7e),
        hideLabel: !0,
        placeholder: g.intl.string(g.t.ZveC7e),
        value: Array.from(a),
        onSelectionChange: O,
        options: x,
        formatOption: H,
        customMatchSorter: _,
        selectionMode: "multiple",
        autoFocus: !0,
        closeOnSelect: !1,
        shouldFocusWrap: !0,
    });
}
