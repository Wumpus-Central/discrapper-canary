n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(481060),
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
        { options: s, matchSorterOptions: a } = (0, o.h)();
    return (0, r.jsx)(l.VcW, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: g.selectWrapper,
        options: s,
        value: t,
        placeholder: m.NW.string(m.t.acyezc),
        onChange: n,
        isDisabled: 20 === t.length || i,
        matchSorterOptions: a,
        clearQueryOnSelect: !0,
        customPillContainerClassName: g.pills,
        renderCustomPill: h
    });
}
function b(e) {
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
let x = [];
function j(e) {
    var t;
    let { profile: n, canManageGuild: s } = e,
        o = n.id,
        d = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : x,
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
        _ = i.useMemo(() => (a().isEqual(new Set(d), new Set(N.current)) || (N.current = [...d]), N.current), [d]);
    return (0, r.jsxs)(l.hjN, {
        className: p.section,
        children: [
            (0, r.jsxs)('div', {
                className: p.sectionHeader,
                children: [
                    (0, r.jsx)(l.vwX, { children: m.NW.string(m.t.BR68vL) }),
                    (0, r.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
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
                    (0, r.jsx)(b, {
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
