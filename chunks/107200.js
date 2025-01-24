n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(352527),
    a = n(183584),
    l = n(487029),
    s = n(592125),
    d = n(944486),
    c = n(554174),
    u = n(710111),
    p = n(408704);
function h() {
    let [e, t] = (0, o.Wu)([r.Z], () => [r.Z.enabled, r.Z.keepOpen]),
        n = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        h = (0, o.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        _ = null == h ? void 0 : h.getGuildId();
    return e && null != h
        ? (0, i.jsx)('div', {
              className: p.widget,
              children: (0, i.jsx)(l.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: _,
                  channel: h,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.Z)();
                      null != e && (0, a.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
