n.d(t, { D: () => d });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(377171),
    o = n(436952),
    c = n(611725),
    s = n(388032),
    u = n(151889);
function d(e) {
    let t = (0, o.sX)({ location: 'channel_context_menu' }),
        { openPickerForChannel: n } = (0, c.B)(),
        d = (0, i.useCallback)(() => {
            n(e.id);
        }, [e.id, n]);
    return t.enabled && t.entryPoint === o.FN.CONTEXT_MENU && e.isPrivate()
        ? (0, r.jsx)(l.sNh, {
              id: 'set-wallpaper',
              label: (0, r.jsxs)('div', {
                  className: u.label,
                  children: [
                      s.NW.string(s.t.GixvUl),
                      (0, r.jsx)(l.IGR, {
                          text: s.NW.string(s.t.y2b7CA),
                          color: a.Z.BG_BRAND
                      })
                  ]
              }),
              icon: () =>
                  (0, r.jsx)('div', {
                      className: u.iconWrapper,
                      children: (0, r.jsx)(l.SrA, { size: 'xs' })
                  }),
              action: d
          })
        : null;
}
