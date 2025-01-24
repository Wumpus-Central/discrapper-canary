i.d(e, {
    Z: function () {
        return E;
    }
}),
    i(47120);
var n = i(200651);
i(192379);
var l = i(442837),
    o = i(352527),
    r = i(183584),
    s = i(487029),
    a = i(592125),
    u = i(944486),
    d = i(554174),
    c = i(710111),
    h = i(714902);
function E() {
    let [t, e] = (0, l.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
        i = (0, l.e7)([u.Z], () => u.Z.getVoiceChannelId()),
        E = (0, l.e7)([a.Z], () => a.Z.getChannel(i), [i]),
        p = null == E ? void 0 : E.getGuildId();
    return t && null != E
        ? (0, n.jsx)('div', {
              className: h.container,
              children: (0, n.jsx)(s.Z, {
                  width: c.FW.width,
                  height: c.FW.height,
                  guildId: p,
                  channel: E,
                  keepOpen: e,
                  onClose: function () {
                      let t = (0, d.Z)();
                      null != t && (0, r.oZ)(t);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
