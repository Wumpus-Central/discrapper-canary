n.d(t, { D: () => h });
var r = n(200651),
    i = n(192379),
    l = n(990547),
    a = n(481060),
    o = n(287734),
    c = n(213609),
    u = n(377171),
    s = n(626135),
    d = n(839606),
    f = n(54480),
    O = n(981631),
    b = n(388032),
    p = n(837229);
function h(e) {
    let { openPickerForChannel: t } = (0, d.B)(),
        n = (0, i.useCallback)(() => {
            o.default.selectPrivateChannel(e.id), t(e.id), s.default.track(O.rMx.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT_CLICKED, { channel_id: e.id });
        }, [e.id, t]),
        { canAccessPicker: h } = (0, f.m)({
            location: 'useChannelWallpaperItem',
            selectedChannelId: e.id
        }),
        v = e.isPrivate() && h;
    return ((0, c.Z)(
        {
            type: l.ImpressionTypes.MENU,
            name: l.ImpressionNames.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT
        },
        { disableTrack: !v }
    ),
    v)
        ? (0, r.jsx)(a.sNh, {
              id: 'set-wallpaper',
              label: (0, r.jsxs)('div', {
                  className: p.label,
                  children: [
                      b.intl.string(b.t.GixvUl),
                      (0, r.jsx)(a.IGR, {
                          text: b.intl.string(b.t.y2b7CA),
                          color: u.Z.BG_BRAND
                      })
                  ]
              }),
              icon: () =>
                  (0, r.jsx)('div', {
                      className: p.iconWrapper,
                      children: (0, r.jsx)(a.SrA, { size: 'xs' })
                  }),
              action: n
          })
        : null;
}
