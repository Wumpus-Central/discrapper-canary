n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    s = n.n(l),
    a = n(668339),
    o = n(481060),
    c = n(510231),
    u = n(434404),
    d = n(383124),
    g = n(795691),
    m = n(388032),
    p = n(448369);
let f = () => null;
function h(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: l, matchSorterOptions: s } = (0, c.h)();
    return (0, r.jsx)(a.d, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: p.selectWrapper,
        options: l,
        value: t,
        placeholder: m.intl.string(m.t.JTLolO),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: s,
        clearQueryOnSelect: !0,
        customPillContainerClassName: p.pills,
        renderCustomPill: f,
    });
}
function x(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: i } = e;
    return 0 === t.length
        ? null
        : (0, r.jsx)("div", {
              className: p.selectedGames,
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
let b = [];
function j(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        a = n.id,
        c = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : b,
        d = i.useCallback(
            (e) => {
                u.Z.updateGuildProfile(a, { gameApplicationIds: e });
            },
            [a],
        ),
        p = i.useCallback(
            (e) => {
                let t = c.filter((t) => t !== e);
                u.Z.updateGuildProfile(a, { gameApplicationIds: t });
            },
            [a, c],
        ),
        f = i.useRef(c),
        j = i.useMemo(() => (s().isEqual(new Set(c), new Set(f.current)) || (f.current = [...c]), f.current), [c]);
    return (0, r.jsxs)(o.C3N, {
        label: m.intl.string(m.t.BR68vK),
        description: m.intl.string(m.t.MobxiB),
        children: [
            (0, r.jsx)(h, {
                gameApplicationIds: c,
                handleChange: d,
                disabled: !l,
            }),
            (0, r.jsx)(x, {
                gameApplicationIds: j,
                onRemoveGame: p,
                disabled: !l,
            }),
            (0, r.jsx)(g.Z, {
                guildId: a,
                selectedGameApplicationIds: c,
                onUpdateGames: d,
                disabled: !l,
            }),
        ],
    });
}
