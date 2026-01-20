n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(481060),
    o = n(510231),
    c = n(434404),
    d = n(383124),
    u = n(795691),
    g = n(388032),
    f = n(39169);
function m(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: l, matchSorterOptions: a } = (0, o.h)();
    return (0, r.jsx)(s.VcW, {
        selectionMode: "multiple",
        hideTags: !0,
        options: l,
        value: t,
        placeholder: g.intl.string(g.t.JTLolO),
        onSelectionChange: n,
        disabled: 20 === t.length || i,
        matchSorterOptions: a,
    });
}
function b(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: i } = e;
    return 0 === t.length
        ? null
        : (0, r.jsx)("div", {
              className: f.selectedGames,
              children: t.map((e) =>
                  (0, r.jsx)(
                      d.Z,
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
function h(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        o = n.id,
        d = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : p,
        f = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(o, { gameApplicationIds: e });
            },
            [o],
        ),
        h = i.useCallback(
            (e) => {
                let t = d.filter((t) => t !== e);
                c.Z.updateGuildProfile(o, { gameApplicationIds: t });
            },
            [o, d],
        ),
        x = i.useRef(d),
        j = i.useMemo(() => (a().isEqual(new Set(d), new Set(x.current)) || (x.current = [...d]), x.current), [d]);
    return (0, r.jsxs)(s.C3N, {
        label: g.intl.string(g.t.BR68vK),
        description: g.intl.string(g.t.MobxiB),
        children: [
            (0, r.jsx)(m, {
                gameApplicationIds: d,
                handleChange: f,
                disabled: !l,
            }),
            (0, r.jsx)(b, {
                gameApplicationIds: j,
                onRemoveGame: h,
                disabled: !l,
            }),
            (0, r.jsx)(u.Z, {
                guildId: o,
                selectedGameApplicationIds: d,
                onUpdateGames: f,
                disabled: !l,
            }),
        ],
    });
}
