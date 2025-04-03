n.d(t, { D: () => N });
var r = n(200651),
    i = n(192379),
    l = n(990547),
    a = n(481060),
    o = n(287734),
    c = n(213609),
    s = n(377171),
    u = n(626135),
    d = n(436952),
    f = n(54480),
    O = n(611725),
    b = n(981631),
    p = n(388032),
    h = n(837229);
function N(e) {
    let { openPickerForChannel: t } = (0, O.B)(),
        n = (0, i.useCallback)(() => {
            o.default.selectPrivateChannel(e.id), t(e.id), u.default.track(b.rMx.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT_CLICKED, { channel_id: e.id });
        }, [e.id, t]),
        { canAccessPicker: N, entryPoint: y } = (0, f.m)({
            location: 'useChannelWallpaperItem',
            selectedChannelId: e.id
        }),
        _ = y === d.FN.CONTEXT_MENU && e.isPrivate() && N;
    return ((0, c.Z)(
        {
            type: l.ImpressionTypes.MENU,
            name: l.ImpressionNames.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT
        },
        { disableTrack: !_ }
    ),
    _)
        ? (0, r.jsx)(a.sNh, {
              id: 'set-wallpaper',
              label: (0, r.jsxs)('div', {
                  className: h.label,
                  children: [
                      p.NW.string(p.t.GixvUl),
                      (0, r.jsx)(a.IGR, {
                          text: p.NW.string(p.t.y2b7CA),
                          color: s.Z.BG_BRAND
                      })
                  ]
              }),
              icon: () =>
                  (0, r.jsx)('div', {
                      className: h.iconWrapper,
                      children: (0, r.jsx)(a.SrA, { size: 'xs' })
                  }),
              action: n
          })
        : null;
}
