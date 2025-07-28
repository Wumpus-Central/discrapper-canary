(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    s = n(481060),
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
        { options: l, matchSorterOptions: a } = (0, o.h)();
    return (0, r.jsx)(s.VcW, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: g.selectWrapper,
        options: l,
        value: t,
        placeholder: m.intl.string(m.t.JTLolJ),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: a,
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
    let { profile: n, canManageGuild: l } = e,
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
        v = i.useRef(d),
        _ = i.useMemo(() => (a().isEqual(new Set(d), new Set(v.current)) || (v.current = [...d]), v.current), [d]);
    return (0, r.jsxs)(s.hjN, {
        className: p.section,
        children: [
            (0, r.jsxs)('div', {
                className: p.sectionHeader,
                children: [
                    (0, r.jsx)(s.vwX, { children: m.intl.string(m.t.BR68vL) }),
                    (0, r.jsx)(s.R94, {
                        type: s.geA.DESCRIPTION,
                        children: m.intl.string(m.t.MobxiI)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.sectionBody,
                children: [
                    (0, r.jsx)(f, {
                        gameApplicationIds: d,
                        handleChange: h,
                        disabled: !l
                    }),
                    (0, r.jsx)(x, {
                        gameApplicationIds: _,
                        onRemoveGame: j,
                        disabled: !l
                    }),
                    (0, r.jsx)(u.Z, {
                        guildId: o,
                        selectedGameApplicationIds: d,
                        onUpdateGames: h,
                        disabled: !l
                    })
                ]
            })
        ]
    });
}
