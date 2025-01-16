i.d(t, {
    Z: function () {
        return f;
    }
}),
    i(47120);
var n = i(200651);
i(192379);
var l = i(442837),
    o = i(352527),
    s = i(183584),
    r = i(487029),
    a = i(592125),
    u = i(944486),
    d = i(554174),
    c = i(710111),
    h = i(714902);
function f() {
    let [e, t] = (0, l.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
        i = (0, l.e7)([u.Z], () => u.Z.getVoiceChannelId()),
        f = (0, l.e7)([a.Z], () => a.Z.getChannel(i), [i]),
        p = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, n.jsx)('div', {
              className: h.container,
              children: (0, n.jsx)(r.Z, {
                  width: c.FW.width,
                  height: c.FW.height,
                  guildId: p,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, d.Z)();
                      null != e && (0, s.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
