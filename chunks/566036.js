n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(510231),
    o = n(434404),
    c = n(999382),
    d = n(383124),
    u = n(795691),
    m = n(388032),
    h = n(361193),
    g = n(750609);
let x = () => null;
function p(e) {
    let { gameApplicationIds: t, handleChange: n } = e,
        { options: r, matchSorterOptions: l } = (0, a.h)();
    return (0, i.jsx)(s.VcW, {
        multi: !0,
        hidePills: !0,
        autoFocus: !0,
        wrapperClassName: h.selectWrapper,
        options: r,
        value: t,
        placeholder: m.intl.string(m.t.acyezc),
        onChange: n,
        isDisabled: 20 === t.length,
        matchSorterOptions: l,
        clearQueryOnSelect: !0,
        customPillContainerClassName: h.pills,
        renderCustomPill: x
    });
}
function _(e) {
    let { gameApplicationIds: t, onRemoveGame: n } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)('div', {
              className: h.selectedGames,
              children: t.map((e) =>
                  (0, i.jsx)(
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
let C = [];
function f(e) {
    var t;
    let { guild: n } = e,
        a = n.id,
        d = (0, l.e7)([c.Z], () => c.Z.getGuildProfile()),
        x = null !== (t = null == d ? void 0 : d.gameApplicationIds) && void 0 !== t ? t : C,
        f = r.useCallback(
            (e) => {
                o.Z.updateGuildProfile(a, { gameApplicationIds: e });
            },
            [a]
        ),
        v = r.useCallback(
            (e) => {
                let t = x.filter((t) => t !== e);
                o.Z.updateGuildProfile(a, { gameApplicationIds: t });
            },
            [a, x]
        );
    return null == d
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', { className: h.separator }),
                  (0, i.jsxs)(s.hjN, {
                      className: g.section,
                      children: [
                          (0, i.jsxs)('div', {
                              className: g.sectionHeader,
                              children: [
                                  (0, i.jsx)(s.vwX, { children: m.intl.string(m.t.BR68vL) }),
                                  (0, i.jsx)(s.R94, {
                                      type: s.geA.DESCRIPTION,
                                      children: m.intl.string(m.t.MobxiI)
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: h.sectionBody,
                              children: [
                                  (0, i.jsx)(p, {
                                      gameApplicationIds: x,
                                      handleChange: f
                                  }),
                                  (0, i.jsx)(_, {
                                      gameApplicationIds: x,
                                      onRemoveGame: v
                                  }),
                                  (0, i.jsx)(u.Z, {
                                      guildId: a,
                                      selectedGameApplicationIds: x,
                                      onUpdateGames: f
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
