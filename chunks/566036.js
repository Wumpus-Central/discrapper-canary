n.d(t, { Z: () => j }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    l = n.n(s),
    a = n(481060),
    o = n(510231),
    c = n(434404),
    d = n(383124),
    u = n(795691),
    m = n(388032),
    g = n(210530),
    p = n(381109);
let h = () => null;
function f(e) {
    let { gameApplicationIds: t, handleChange: n, disabled: i } = e,
        { options: s, matchSorterOptions: l } = (0, o.h)();
    return (0, r.jsx)(a.VcW, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: g.selectWrapper,
        options: s,
        value: t,
        placeholder: m.NW.string(m.t.acyezc),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: l,
        clearQueryOnSelect: !0,
        customPillContainerClassName: g.pills,
        renderCustomPill: h
    });
}
function x(e) {
    let { gameApplicationIds: t, onRemoveGame: n, disabled: i } = e;
    return 0 === t.length
        ? null
        : (0, r.jsx)('div', {
              className: g.selectedGames,
              children: t.map((e) =>
                  (0, r.jsx)(
                      d.Z,
                      {
                          applicationId: e,
                          selected: !0,
                          onClick: n,
                          disabled: i
                      },
                      e
                  )
              )
          });
}
let b = [];
function j(e) {
    var t;
    let { profile: n, canManageGuild: s } = e,
        o = n.id,
        d = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : b,
        h = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(o, { gameApplicationIds: e });
            },
            [o]
        ),
        j = i.useCallback(
            (e) => {
                let t = d.filter((t) => t !== e);
                c.Z.updateGuildProfile(o, { gameApplicationIds: t });
            },
            [o, d]
        ),
        N = i.useRef(d),
        _ = i.useMemo(() => (l().isEqual(new Set(d), new Set(N.current)) || (N.current = [...d]), N.current), [d]);
    return (0, r.jsxs)(a.hjN, {
        className: p.section,
        children: [
            (0, r.jsxs)('div', {
                className: p.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: m.NW.string(m.t.BR68vL) }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: m.NW.string(m.t.MobxiI)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.sectionBody,
                children: [
                    (0, r.jsx)(f, {
                        gameApplicationIds: d,
                        handleChange: h,
                        disabled: !s
                    }),
                    (0, r.jsx)(x, {
                        gameApplicationIds: _,
                        onRemoveGame: j,
                        disabled: !s
                    }),
                    (0, r.jsx)(u.Z, {
                        guildId: o,
                        selectedGameApplicationIds: d,
                        onUpdateGames: h,
                        disabled: !s
                    })
                ]
            })
        ]
    });
}
