n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    s = n(481060),
    o = n(510231),
    c = n(434404),
    d = n(383124),
    u = n(795691),
    g = n(388032),
    m = n(448369);
let p = () => null;
function f(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: l, matchSorterOptions: a } = (0, o.h)();
    return (0, r.jsx)(s.VcW, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: m.selectWrapper,
        options: l,
        value: t,
        placeholder: g.intl.string(g.t.JTLolJ),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: a,
        clearQueryOnSelect: !0,
        customPillContainerClassName: m.pills,
        renderCustomPill: p,
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
let x = [];
function b(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        o = n.id,
        d = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : x,
        m = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(o, { gameApplicationIds: e });
            },
            [o],
        ),
        p = i.useCallback(
            (e) => {
                let t = d.filter((t) => t !== e);
                c.Z.updateGuildProfile(o, { gameApplicationIds: t });
            },
            [o, d],
        ),
        b = i.useRef(d),
        j = i.useMemo(() => (a().isEqual(new Set(d), new Set(b.current)) || (b.current = [...d]), b.current), [d]);
    return (0, r.jsxs)(s.C3N, {
        label: g.intl.string(g.t.BR68vL),
        description: g.intl.string(g.t.MobxiI),
        children: [
            (0, r.jsx)(f, {
                gameApplicationIds: d,
                handleChange: m,
                disabled: !l,
            }),
            (0, r.jsx)(h, {
                gameApplicationIds: j,
                onRemoveGame: p,
                disabled: !l,
            }),
            (0, r.jsx)(u.Z, {
                guildId: o,
                selectedGameApplicationIds: d,
                onUpdateGames: m,
                disabled: !l,
            }),
        ],
    });
}
