n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(783878),
    o = n(270003),
    d = n(383329),
    c = n(997509),
    u = n(308072),
    m = n(298818),
    g = n(985018),
    h = n(785252);
function x(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: l } = e,
        { options: s, matchSorterOptions: r } = (0, d.R)();
    return (0, i.jsx)(a.Z, {
        selectionMode: "multiple",
        hideTags: !0,
        options: s,
        value: t,
        placeholder: g.intl.string(g.t.JTLolO),
        onSelectionChange: n,
        disabled: 20 === t.length || l,
        matchSorterOptions: r,
    });
}
function _(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: l } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: h.Rh,
              children: t.map((e) => (0, i.jsx)(u.A, { applicationId: e, selected: !0, onClick: n, disabled: l }, e)),
          });
}
let p = [];
function A(e) {
    let { profile: t, canManageGuild: n } = e,
        s = t.id,
        a = t?.gameApplicationIds ?? p,
        d = l.useCallback(
            (e) => {
                c.A.updateGuildProfile(s, { gameApplicationIds: e });
            },
            [s],
        ),
        u = l.useCallback(
            (e) => {
                let t = a.filter((t) => t !== e);
                c.A.updateGuildProfile(s, { gameApplicationIds: t });
            },
            [s, a],
        ),
        h = l.useRef(a),
        A = l.useMemo(() => (r().isEqual(new Set(a), new Set(h.current)) || (h.current = [...a]), h.current), [a]);
    return (0, i.jsxs)(o.n, {
        label: g.intl.string(g.t.BR68vK),
        description: g.intl.string(g.t.MobxiB),
        children: [
            (0, i.jsx)(x, { gameApplicationIds: a, handleChange: d, disabled: !n }),
            (0, i.jsx)(_, { gameApplicationIds: A, onRemoveGame: u, disabled: !n }),
            (0, i.jsx)(m.A, { guildId: s, selectedGameApplicationIds: a, onUpdateGames: d, disabled: !n }),
        ],
    });
}
