n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(436952),
    a = n(611725),
    s = n(626135),
    c = n(665149),
    u = n(981631),
    d = n(388032);
let p = function (e) {
    let { channel: t } = e,
        { activePickerChannelId: n, openPickerForChannel: p, closePicker: h } = (0, a.B)(),
        f = i.useCallback(() => {
            n === t.id ? (h(), s.default.track(u.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'close' })) : (p(t.id), s.default.track(u.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, { action: 'open' }));
        }, [t.id, n, h, p]),
        m = (0, o.sX)({ location: 'channel_header_toolbar' });
    return m.enabled && m.entryPoint === o.FN.TOOLBAR
        ? (0, r.jsx)(c.JO, {
              onClick: f,
              tooltip: d.NW.string(d.t.GixvUl),
              icon: l.XBm,
              'aria-label': d.NW.string(d.t.GixvUl),
              showBadge: !1,
              selected: n === t.id
          })
        : null;
};
