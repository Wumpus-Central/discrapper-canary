n.d(t, { D: () => h });
var r = n(200651),
    i = n(192379),
    l = n(990547),
    a = n(481060),
    o = n(287734),
    c = n(213609),
    s = n(377171),
    u = n(626135),
    d = n(436952),
    f = n(611725),
    O = n(981631),
    b = n(388032),
    p = n(151889);
function h(e) {
    let t = (0, d.sX)({ location: 'channel_context_menu' }),
        { openPickerForChannel: n } = (0, f.B)(),
        h = (0, i.useCallback)(() => {
            o.default.selectPrivateChannel(e.id), n(e.id), u.default.track(O.rMx.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT_CLICKED, { channel_id: e.id });
        }, [e.id, n]),
        N = t.enabled && t.entryPoint === d.FN.CONTEXT_MENU && e.isPrivate();
    return ((0, c.Z)(
        {
            type: l.ImpressionTypes.MENU,
            name: l.ImpressionNames.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT
        },
        { disableTrack: !N }
    ),
    N)
        ? (0, r.jsx)(a.sNh, {
              id: 'set-wallpaper',
              label: (0, r.jsxs)('div', {
                  className: p.label,
                  children: [
                      b.NW.string(b.t.GixvUl),
                      (0, r.jsx)(a.IGR, {
                          text: b.NW.string(b.t.y2b7CA),
                          color: s.Z.BG_BRAND
                      })
                  ]
              }),
              icon: () =>
                  (0, r.jsx)('div', {
                      className: p.iconWrapper,
                      children: (0, r.jsx)(a.SrA, { size: 'xs' })
                  }),
              action: h
          })
        : null;
}
