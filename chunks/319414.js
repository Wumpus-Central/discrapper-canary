i.d(e, { Z: () => E }), i(47120);
var n = i(200651);
i(192379);
var l = i(442837),
    s = i(352527),
    o = i(183584),
    r = i(487029),
    a = i(592125),
    d = i(944486),
    u = i(554174),
    c = i(710111),
    h = i(714902);
function E() {
    let [t, e] = (0, l.Wu)([s.Z], () => [s.Z.enabled, s.Z.keepOpen]),
        i = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        E = (0, l.e7)([a.Z], () => a.Z.getChannel(i), [i]),
        p = null == E ? void 0 : E.getGuildId();
    return t && null != E
        ? (0, n.jsx)('div', {
              className: h.container,
              children: (0, n.jsx)(r.Z, {
                  width: c.FW.width,
                  height: c.FW.height,
                  guildId: p,
                  channel: E,
                  keepOpen: e,
                  onClose: function () {
                      let t = (0, u.Z)();
                      null != t && (0, o.oZ)(t);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
