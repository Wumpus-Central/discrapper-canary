n.d(t, { D: () => u });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(377171),
    o = n(436952),
    c = n(388032),
    s = n(151889);
function u(e) {
    let t = (0, o.sX)({ location: 'channel_context_menu' }),
        n = (0, i.useCallback)(() => {}, []);
    return t.enabled && t.entryPoint === o.FN.CONTEXT_MENU && e.isPrivate()
        ? (0, r.jsx)(l.sNh, {
              id: 'set-wallpaper',
              label: (0, r.jsxs)('div', {
                  className: s.label,
                  children: [
                      c.NW.string(c.t.GixvUl),
                      (0, r.jsx)(l.IGR, {
                          text: c.NW.string(c.t.y2b7CA),
                          color: a.Z.BG_BRAND
                      })
                  ]
              }),
              icon: () =>
                  (0, r.jsx)('div', {
                      className: s.iconWrapper,
                      children: (0, r.jsx)(l.SrA, { size: 'xs' })
                  }),
              action: n
          })
        : null;
}
