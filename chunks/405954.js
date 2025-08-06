(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(481060),
    s = n(436952),
    o = n(839606),
    c = n(54480),
    u = n(266454),
    d = n(243778),
    h = n(626135),
    p = n(665149),
    f = n(981631),
    g = n(921944),
    m = n(388032);
let b = function (e) {
    let { channel: t } = e,
        { activePickerChannelId: n, openPickerForChannel: b, closePicker: y } = (0, o.B)(),
        { canAccessPicker: x, entryPoint: j } = (0, c.m)({
            location: 'channel_header_toolbar',
            channelId: t.id
        }),
        _ = (0, u.Nj)(l.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
        O = x && j === s.FN.TOOLBAR && _,
        [v, C] = (0, d.US)(O ? [l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE] : []),
        E = v === l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE,
        S = i.useCallback(() => {
            (E && C(g.L.TAKE_ACTION), n === t.id ? (y(), h.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'close' })) : (b(t.id), h.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'open' })));
        }, [n, t.id, y, b, E, C]);
    return O
        ? (0, r.jsx)(p.JO, {
              onClick: S,
              tooltip: m.intl.string(m.t.GixvUl),
              icon: a.XBm,
              iconSize: 20,
              'aria-label': m.intl.string(m.t.GixvUl),
              showBadge: E,
              selected: n === t.id
          })
        : null;
};
