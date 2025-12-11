n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(668339),
    o = n(481060),
    c = n(510231),
    d = n(434404),
    u = n(383124),
    g = n(795691),
    m = n(388032),
    f = n(39169);
let p = () => null;
function b(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: l, matchSorterOptions: a } = (0, c.h)();
    return (0, r.jsx)(s.d, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: f.selectWrapper,
        options: l,
        value: t,
        placeholder: m.intl.string(m.t.JTLolO),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: a,
        clearQueryOnSelect: !0,
        customPillContainerClassName: f.pills,
        renderCustomPill: p,
    });
}
function h(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: i } = e;
    return 0 === t.length
        ? null
        : (0, r.jsx)("div", {
              className: f.selectedGames,
              children: t.map((e) =>
                  (0, r.jsx)(
                      u.Z,
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
let x = [];
function j(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        s = n.id,
        c = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : x,
        u = i.useCallback(
            (e) => {
                d.Z.updateGuildProfile(s, { gameApplicationIds: e });
            },
            [s],
        ),
        f = i.useCallback(
            (e) => {
                let t = c.filter((t) => t !== e);
                d.Z.updateGuildProfile(s, { gameApplicationIds: t });
            },
            [s, c],
        ),
        p = i.useRef(c),
        j = i.useMemo(() => (a().isEqual(new Set(c), new Set(p.current)) || (p.current = [...c]), p.current), [c]);
    return (0, r.jsxs)(o.C3N, {
        label: m.intl.string(m.t.BR68vK),
        description: m.intl.string(m.t.MobxiB),
        children: [
            (0, r.jsx)(b, {
                gameApplicationIds: c,
                handleChange: u,
                disabled: !l,
            }),
            (0, r.jsx)(h, {
                gameApplicationIds: j,
                onRemoveGame: f,
                disabled: !l,
            }),
            (0, r.jsx)(g.Z, {
                guildId: s,
                selectedGameApplicationIds: c,
                onUpdateGames: u,
                disabled: !l,
            }),
        ],
    });
}
