n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(436952),
    a = n(54480),
    s = n(611725),
    c = n(626135),
    u = n(665149),
    d = n(981631),
    p = n(388032);
let h = function (e) {
    let { channel: t } = e,
        { activePickerChannelId: n, openPickerForChannel: h, closePicker: f } = (0, s.B)(),
        m = i.useCallback(() => {
            n === t.id ? (f(), c.default.track(d.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'close' })) : (h(t.id), c.default.track(d.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'open' }));
        }, [t.id, n, f, h]),
        { canAccessPicker: g, entryPoint: b } = (0, a.m)({
            location: 'channel_header_toolbar',
            selectedChannelId: t.id
        });
    return g && b === o.FN.TOOLBAR
        ? (0, r.jsx)(u.JO, {
              onClick: m,
              tooltip: p.NW.string(p.t.GixvUl),
              icon: l.XBm,
              'aria-label': p.NW.string(p.t.GixvUl),
              showBadge: !1,
              selected: n === t.id
          })
        : null;
};
