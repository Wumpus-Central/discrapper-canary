n.d(t, { Z: () => _ }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(352527),
    o = n(183584),
    a = n(487029),
    s = n(592125),
    d = n(944486),
    c = n(554174),
    u = n(710111),
    h = n(238765);
function _() {
    let [e, t] = (0, l.Wu)([r.Z], () => [r.Z.enabled, r.Z.keepOpen]),
        n = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        _ = (0, l.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        p = null == _ ? void 0 : _.getGuildId();
    return e && null != _
        ? (0, i.jsx)('div', {
              className: h.container,
              children: (0, i.jsx)(a.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: p,
                  channel: _,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.Z)();
                      null != e && (0, o.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
