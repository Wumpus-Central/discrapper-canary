n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(510231),
    o = n(434404),
    c = n(999382),
    d = n(383124),
    u = n(795691),
    m = n(388032),
    p = n(787491),
    g = n(541946);
let h = () => null;
function f(e) {
    let { gameApplicationIds: t, handleChange: n } = e,
        { options: i, matchSorterOptions: s } = (0, l.h)();
    return (0, r.jsx)(a.VcW, {
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
    let { guild: n } = e,
        l = n.id,
        d = (0, s.e7)([c.Z], () => c.Z.getGuildProfile()),
        h = null !== (t = null == d ? void 0 : d.gameApplicationIds) && void 0 !== t ? t : x,
        j = i.useCallback(
            (e) => {
                o.Z.updateGuildProfile(l, { gameApplicationIds: e });
            },
            [l]
        ),
        N = i.useCallback(
            (e) => {
                let t = h.filter((t) => t !== e);
                o.Z.updateGuildProfile(l, { gameApplicationIds: t });
            },
            [l, h]
        );
    return null == d
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', { className: p.separator }),
                  (0, r.jsxs)(a.hjN, {
                      className: g.section,
                      children: [
                          (0, r.jsxs)('div', {
                              className: g.sectionHeader,
                              children: [
                                  (0, r.jsx)(a.vwX, { children: m.NW.string(m.t.BR68vL) }),
                                  (0, r.jsx)(a.R94, {
                                      type: a.geA.DESCRIPTION,
                                      children: m.NW.string(m.t.MobxiI)
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: p.sectionBody,
                              children: [
                                  (0, r.jsx)(f, {
                                      gameApplicationIds: h,
                                      handleChange: j
                                  }),
                                  (0, r.jsx)(b, {
                                      gameApplicationIds: h,
                                      onRemoveGame: N
                                  }),
                                  (0, r.jsx)(u.Z, {
                                      guildId: l,
                                      selectedGameApplicationIds: h,
                                      onUpdateGames: j
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
