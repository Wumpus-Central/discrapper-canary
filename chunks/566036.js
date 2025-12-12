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
    f = n(388032),
    m = n(39169);
let b = () => null;
function p(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: l, matchSorterOptions: a } = (0, c.h)();
    return (0, r.jsx)(s.d, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: m.selectWrapper,
        options: l,
        value: t,
        placeholder: f.intl.string(f.t.JTLolO),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: a,
        clearQueryOnSelect: !0,
        customPillContainerClassName: m.pills,
        renderCustomPill: b,
    });
}
function h(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: i } = e;
    return 0 === t.length
        ? null
        : (0, r.jsx)("div", {
              className: m.selectedGames,
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
        m = i.useCallback(
            (e) => {
                let t = c.filter((t) => t !== e);
                d.Z.updateGuildProfile(s, { gameApplicationIds: t });
            },
            [s, c],
        ),
        b = i.useRef(c),
        j = i.useMemo(() => (a().isEqual(new Set(c), new Set(b.current)) || (b.current = [...c]), b.current), [c]);
    return (0, r.jsxs)(o.C3N, {
        label: f.intl.string(f.t.BR68vK),
        description: f.intl.string(f.t.MobxiB),
        children: [
            (0, r.jsx)(p, {
                gameApplicationIds: c,
                handleChange: u,
                disabled: !l,
            }),
            (0, r.jsx)(h, {
                gameApplicationIds: j,
                onRemoveGame: m,
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
