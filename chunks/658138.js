n.d(t, { D: () => p });
var r = n(255367),
    i = n(73800),
    l = n(990547),
    a = n(481060),
    o = n(287734),
    c = n(213609),
    s = n(377171),
    u = n(626135),
    d = n(839606),
    f = n(54480),
    O = n(981631),
    b = n(388032),
    _ = n(209863);
function p(e) {
    let { openPickerForChannel: t } = (0, d.B)(),
        n = (0, i.useCallback)(() => {
            o.default.selectPrivateChannel(e.id),
                t(e.id),
                u.default.track(O.rMx.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT_CLICKED, { channel_id: e.id });
        }, [e.id, t]),
        { canAccessPicker: p } = (0, f.m)({
            location: "useChannelWallpaperItem",
            channelId: e.id,
        }),
        h = e.isPrivate() && p;
    return ((0, c.Z)(
        {
            type: l.ImpressionTypes.MENU,
            name: l.ImpressionNames.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT,
        },
        { disableTrack: !h },
    ),
    h)
        ? (0, r.jsx)(a.sNh, {
              id: "set-wallpaper",
              label: (0, r.jsxs)("div", {
                  className: _.label,
                  children: [
                      b.intl.string(b.t.GixvUl),
                      (0, r.jsx)(a.IGR, {
                          text: b.intl.string(b.t.y2b7CA),
                          color: s.Z.BG_BRAND,
                      }),
                  ],
              }),
              icon: () =>
                  (0, r.jsx)("div", {
                      className: _.iconWrapper,
                      children: (0, r.jsx)(a.SrA, { size: "xs" }),
                  }),
              action: n,
          })
        : null;
}
