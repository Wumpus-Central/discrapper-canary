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
    p = n(787491),
    g = n(541946);
let h = () => null;
function f(e) {
    let { gameApplicationIds: t, handleChange: n } = e,
        { options: i, matchSorterOptions: s } = (0, o.h)();
    return (0, r.jsx)(l.VcW, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: p.selectWrapper,
        options: i,
        value: t,
        placeholder: m.NW.string(m.t.acyezc),
        onChange: n,
        isDisabled: 20 === t.length,
        matchSorterOptions: s,
        clearQueryOnSelect: !0,
        customPillContainerClassName: p.pills,
        renderCustomPill: h
    });
}
function b(e) {
    let { gameApplicationIds: t, onRemoveGame: n } = e;
    return 0 === t.length
        ? null
        : (0, r.jsx)('div', {
              className: p.selectedGames,
              children: t.map((e) =>
                  (0, r.jsx)(
                      d.Z,
                      {
                          applicationId: e,
                          selected: !0,
                          onClick: n
                      },
                      e
                  )
              )
          });
}
let x = [];
function j(e) {
    var t;
    let { profile: n } = e,
        s = n.id,
        o = null !== (t = null == n ? void 0 : n.gameApplicationIds) && void 0 !== t ? t : x,
        d = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(s, { gameApplicationIds: e });
            },
            [s]
        ),
        h = i.useCallback(
            (e) => {
                let t = o.filter((t) => t !== e);
                c.Z.updateGuildProfile(s, { gameApplicationIds: t });
            },
            [s, o]
        ),
        j = i.useRef(o),
        N = i.useMemo(() => (a().isEqual(new Set(o), new Set(j.current)) || (j.current = [...o]), j.current), [o]);
    return (0, r.jsxs)(l.hjN, {
        className: g.section,
        children: [
            (0, r.jsxs)('div', {
                className: g.sectionHeader,
                children: [
                    (0, r.jsx)(l.vwX, { children: m.NW.string(m.t.BR68vL) }),
                    (0, r.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: m.NW.string(m.t.MobxiI)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: p.sectionBody,
                children: [
                    (0, r.jsx)(f, {
                        gameApplicationIds: o,
                        handleChange: d
                    }),
                    (0, r.jsx)(b, {
                        gameApplicationIds: N,
                        onRemoveGame: h
                    }),
                    (0, r.jsx)(u.Z, {
                        guildId: s,
                        selectedGameApplicationIds: o,
                        onUpdateGames: d
                    })
                ]
            })
        ]
    });
}
