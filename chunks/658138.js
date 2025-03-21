n.d(t, { D: () => f });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(287734),
    o = n(377171),
    c = n(436952),
    s = n(611725),
    u = n(388032),
    d = n(151889);
function f(e) {
    let t = (0, c.sX)({ location: 'channel_context_menu' }),
        { openPickerForChannel: n } = (0, s.B)(),
        f = (0, i.useCallback)(() => {
            a.default.selectPrivateChannel(e.id), n(e.id);
        }, [e.id, n]);
    return t.enabled && t.entryPoint === c.FN.CONTEXT_MENU && e.isPrivate()
        ? (0, r.jsx)(l.sNh, {
              id: 'set-wallpaper',
              label: (0, r.jsxs)('div', {
                  className: d.label,
                  children: [
                      u.NW.string(u.t.GixvUl),
                      (0, r.jsx)(l.IGR, {
                          text: u.NW.string(u.t.y2b7CA),
                          color: o.Z.BG_BRAND
                      })
                  ]
              }),
              icon: () =>
                  (0, r.jsx)('div', {
                      className: d.iconWrapper,
                      children: (0, r.jsx)(l.SrA, { size: 'xs' })
                  }),
              action: f
          })
        : null;
}
