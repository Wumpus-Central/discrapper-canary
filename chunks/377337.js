"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(397927),
    o = n(383329),
    d = n(997509),
    c = n(308072),
    u = n(298818),
    m = n(985018),
    g = n(66903);
function x(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: s } = e,
        { options: l, matchSorterOptions: r } = (0, o.R)();
    return (0, i.jsx)(a.ZiE, {
        selectionMode: "multiple",
        hideTags: !0,
        options: l,
        value: t,
        placeholder: m.intl.string(m.t.JTLolO),
        onSelectionChange: n,
        disabled: 20 === t.length || s,
        matchSorterOptions: r,
    });
}
function h(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: s } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: g.Rh,
              children: t.map((e) => (0, i.jsx)(c.A, { applicationId: e, selected: !0, onClick: n, disabled: s }, e)),
          });
}
let _ = [];
function p(e) {
    let { profile: t, canManageGuild: n } = e,
        l = t.id,
        o = t?.gameApplicationIds ?? _,
        c = s.useCallback(
            (e) => {
                d.A.updateGuildProfile(l, { gameApplicationIds: e });
            },
            [l],
        ),
        g = s.useCallback(
            (e) => {
                let t = o.filter((t) => t !== e);
                d.A.updateGuildProfile(l, { gameApplicationIds: t });
            },
            [l, o],
        ),
        p = s.useRef(o),
        A = s.useMemo(() => (r().isEqual(new Set(o), new Set(p.current)) || (p.current = [...o]), p.current), [o]);
    return (0, i.jsxs)(a.nVY, {
        label: m.intl.string(m.t.BR68vK),
        description: m.intl.string(m.t.MobxiB),
        children: [
            (0, i.jsx)(x, { gameApplicationIds: o, handleChange: c, disabled: !n }),
            (0, i.jsx)(h, { gameApplicationIds: A, onRemoveGame: g, disabled: !n }),
            (0, i.jsx)(u.A, { guildId: l, selectedGameApplicationIds: o, onUpdateGames: c, disabled: !n }),
        ],
    });
}
