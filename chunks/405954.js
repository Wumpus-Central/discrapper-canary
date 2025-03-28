n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(481060),
    a = n(436952),
    s = n(54480),
    c = n(611725),
    u = n(243778),
    d = n(626135),
    p = n(665149),
    h = n(981631),
    f = n(921944),
    m = n(388032);
let g = function (e) {
    let { channel: t } = e,
        { activePickerChannelId: n, openPickerForChannel: g, closePicker: b } = (0, c.B)(),
        { canAccessPicker: _, entryPoint: C } = (0, s.m)({
            location: 'channel_header_toolbar',
            selectedChannelId: t.id
        }),
        v = _ && C === a.FN.TOOLBAR,
        [y, x] = (0, u.US)(v ? [l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE] : []),
        j = y === l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE,
        O = i.useCallback(() => {
            j && x(f.L.TAKE_ACTION), n === t.id ? (b(), d.default.track(h.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'close' })) : (g(t.id), d.default.track(h.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'open' }));
        }, [n, t.id, b, g, j, x]);
    return v
        ? (0, r.jsx)(p.JO, {
              onClick: O,
              tooltip: m.NW.string(m.t.GixvUl),
              icon: o.XBm,
              iconSize: 20,
              'aria-label': m.NW.string(m.t.GixvUl),
              showBadge: j,
              selected: n === t.id
          })
        : null;
};
