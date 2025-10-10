n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    s = n.n(l),
    a = n(481060),
    o = n(510231),
    c = n(434404),
    d = n(383124),
    u = n(795691),
    g = n(388032),
    m = n(448369),
    p = n(270856);
let f = () => null;
function h(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: l, matchSorterOptions: s } = (0, o.h)();
    return (0, r.jsx)(a.VcW, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: m.selectWrapper,
        options: l,
        value: t,
        placeholder: g.intl.string(g.t.JTLolJ),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: s,
        clearQueryOnSelect: !0,
        customPillContainerClassName: m.pills,
        renderCustomPill: f,
    });
}
function x(e) {
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
let b = [];
function j(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        o = n.id,
        d = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : b,
        f = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(o, { gameApplicationIds: e });
            },
            [o],
        ),
        j = i.useCallback(
            (e) => {
                let t = d.filter((t) => t !== e);
                c.Z.updateGuildProfile(o, { gameApplicationIds: t });
            },
            [o, d],
        ),
        _ = i.useRef(d),
        v = i.useMemo(() => (s().isEqual(new Set(d), new Set(_.current)) || (_.current = [...d]), _.current), [d]);
    return (0, r.jsxs)(a.hjN, {
        className: p.section,
        children: [
            (0, r.jsxs)("div", {
                className: p.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: g.intl.string(g.t.BR68vL) }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: g.intl.string(g.t.MobxiI),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: m.sectionBody,
                children: [
                    (0, r.jsx)(h, {
                        gameApplicationIds: d,
                        handleChange: f,
                        disabled: !l,
                    }),
                    (0, r.jsx)(x, {
                        gameApplicationIds: v,
                        onRemoveGame: j,
                        disabled: !l,
                    }),
                    (0, r.jsx)(u.Z, {
                        guildId: o,
                        selectedGameApplicationIds: d,
                        onUpdateGames: f,
                        disabled: !l,
                    }),
                ],
            }),
        ],
    });
}
