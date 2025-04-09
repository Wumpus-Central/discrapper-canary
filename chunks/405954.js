n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(481060),
    a = n(436952),
    s = n(839606),
    c = n(54480),
    u = n(605236),
    d = n(243778),
    p = n(626135),
    h = n(665149),
    f = n(981631),
    m = n(921944),
    g = n(388032);
let b = function (e) {
    let { channel: t } = e,
        { activePickerChannelId: n, openPickerForChannel: b, closePicker: _ } = (0, s.B)(),
        { canAccessPicker: y, entryPoint: C } = (0, c.m)({
            location: 'channel_header_toolbar',
            selectedChannelId: t.id
        }),
        x = (0, u.wE)(l.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
        v = y && C === a.FN.TOOLBAR && x,
        [j, O] = (0, d.US)(v ? [l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE] : []),
        E = j === l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE,
        N = i.useCallback(() => {
            E && O(m.L.TAKE_ACTION), n === t.id ? (_(), p.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'close' })) : (b(t.id), p.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'open' }));
        }, [n, t.id, _, b, E, O]);
    return v
        ? (0, r.jsx)(h.JO, {
              onClick: N,
              tooltip: g.NW.string(g.t.GixvUl),
              icon: o.XBm,
              iconSize: 20,
              'aria-label': g.NW.string(g.t.GixvUl),
              showBadge: E,
              selected: n === t.id
          })
        : null;
};
