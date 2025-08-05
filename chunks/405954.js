(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(481060),
    s = n(436952),
    o = n(839606),
    c = n(54480),
    d = n(266454),
    u = n(243778),
    h = n(626135),
    p = n(665149),
    f = n(981631),
    g = n(921944),
    m = n(388032);
let b = function (e) {
    let { channel: t } = e,
        { activePickerChannelId: n, openPickerForChannel: b, closePicker: _ } = (0, o.B)(),
        { canAccessPicker: y, entryPoint: j } = (0, c.m)({
            location: 'channel_header_toolbar',
            channelId: t.id
        }),
        O = (0, d.Nj)(l.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
        x = y && j === s.FN.TOOLBAR && O,
        [v, C] = (0, u.US)(x ? [l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE] : []),
        E = v === l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE,
        Z = i.useCallback(() => {
            (E && C(g.L.TAKE_ACTION), n === t.id ? (_(), h.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'close' })) : (b(t.id), h.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'open' })));
        }, [n, t.id, _, b, E, C]);
    return x
        ? (0, r.jsx)(p.JO, {
              onClick: Z,
              tooltip: m.intl.string(m.t.GixvUl),
              icon: a.XBm,
              iconSize: 20,
              'aria-label': m.intl.string(m.t.GixvUl),
              showBadge: E,
              selected: n === t.id
          })
        : null;
};
