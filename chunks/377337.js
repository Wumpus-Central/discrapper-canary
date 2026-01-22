n.d(t, { A: () => x }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(397927),
    c = n(383329),
    o = n(997509),
    d = n(308072),
    u = n(298818),
    f = n(985018),
    g = n(258761);
function b(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: l, matchSorterOptions: s } = (0, c.R)();
    return (0, r.jsx)(a.ZiE, {
        selectionMode: "multiple",
        hideTags: !0,
        options: l,
        value: t,
        placeholder: f.intl.string(f.t.JTLolO),
        onSelectionChange: n,
        disabled: 20 === t.length || i,
        matchSorterOptions: s,
    });
}
function m(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: i } = e;
    return 0 === t.length
        ? null
        : (0, r.jsx)("div", {
              className: g.Rh,
              children: t.map((e) =>
                  (0, r.jsx)(
                      d.A,
                      {
                          applicationId: e,
                          selected: !0,
                          onClick: n,
                          disabled: i,
                      },
                      e,
                  ),
              ),
          });
}
let p = [];
function x(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        c = n.id,
        d = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : p,
        g = i.useCallback(
            (e) => {
                o.A.updateGuildProfile(c, { gameApplicationIds: e });
            },
            [c],
        ),
        x = i.useCallback(
            (e) => {
                let t = d.filter((t) => t !== e);
                o.A.updateGuildProfile(c, { gameApplicationIds: t });
            },
            [c, d],
        ),
        h = i.useRef(d),
        j = i.useMemo(() => (s().isEqual(new Set(d), new Set(h.current)) || (h.current = [...d]), h.current), [d]);
    return (0, r.jsxs)(a.nVY, {
        label: f.intl.string(f.t.BR68vK),
        description: f.intl.string(f.t.MobxiB),
        children: [
            (0, r.jsx)(b, {
                gameApplicationIds: d,
                handleChange: g,
                disabled: !l,
            }),
            (0, r.jsx)(m, {
                gameApplicationIds: j,
                onRemoveGame: x,
                disabled: !l,
            }),
            (0, r.jsx)(u.A, {
                guildId: c,
                selectedGameApplicationIds: d,
                onUpdateGames: g,
                disabled: !l,
            }),
        ],
    });
}
