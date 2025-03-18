n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(436952),
    a = n(611725),
    s = n(665149),
    c = n(388032);
let u = function (e) {
    let { channel: t } = e,
        { activePickerChannelId: n, openPickerForChannel: u, closePickerForChannel: d } = (0, a.B)(),
        p = i.useCallback(() => {
            n === t.id ? d() : u(t.id);
        }, [t.id, n, d, u]),
        h = (0, o.sX)({ location: 'channel_header_toolbar' });
    return h.enabled && h.entryPoint === o.FN.TOOLBAR
        ? (0, r.jsx)(s.JO, {
              onClick: p,
              tooltip: c.NW.string(c.t.GixvUl),
              icon: l.XBm,
              'aria-label': c.NW.string(c.t.GixvUl),
              showBadge: !1,
              selected: n === t.id
          })
        : null;
};
