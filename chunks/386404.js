l.d(t, { A: () => j });
var n = l(627968),
    i = l(64700),
    s = l(91871),
    a = l.n(s),
    r = l(111956),
    o = l.n(r),
    C = l(33851),
    d = l.n(C),
    c = l(417597),
    u = l(397927),
    m = l(57222),
    x = l(504049),
    h = l(266047),
    g = l(221950),
    _ = l(950072),
    H = l(985018),
    p = l(246542);
let f = new Set();
function j(e) {
    let { guildId: t } = e,
        l = (0, x.hs)(t),
        s = (0, c.bG)([h.A], () => h.A.getSearchStateByGuildId(t), [t], d()),
        [r, C] = i.useState(s.selectedRoleIds),
        j = (0, m.H)(t, f, !0),
        v = i.useCallback(
            (e) => {
                (0, g.Ld)(t, { selectedRoleIds: e }), l(e);
            },
            [t, l],
        ),
        b = i.useMemo(() => o()(v, 300), [v]),
        A = i.useCallback(
            (e) => {
                let t = new Set(e ?? []);
                C(t), b(t);
            },
            [b],
        ),
        L = i.useCallback(
            (e) => {
                let { record: l } = e;
                return {
                    id: l.id,
                    value: l.id,
                    label: l.name,
                    leading: (0, n.jsx)(_.C, { role: l, guildId: t }, l.id),
                };
            },
            [t],
        ),
        N = i.useCallback(
            (e, t) => {
                let l = new Map(j.map((e) => [e.record.id, e]));
                return e.filter((e) => {
                    let n = l.get(e.value);
                    if (null == n) return !1;
                    let { record: i } = n;
                    return a()(t.toLowerCase(), i.name.toLowerCase());
                });
            },
            [j],
        );
    return (0, n.jsx)("div", {
        className: p.qm,
        children: (0, n.jsx)(u.ZiE, {
            label: H.intl.string(H.t.ZveC7e),
            hideLabel: !0,
            placeholder: H.intl.string(H.t.ZveC7e),
            value: Array.from(r),
            onSelectionChange: A,
            options: j,
            formatOption: L,
            customMatchSorter: N,
            selectionMode: "multiple",
            autoFocus: !0,
            closeOnSelect: !1,
            shouldFocusWrap: !0,
        }),
    });
}
