n.d(t, { Z: () => h }), n(388685);
var i = n(200651);
n(192379);
var r = n(442837),
    o = n(352527),
    l = n(183584),
    a = n(487029),
    s = n(592125),
    c = n(944486),
    u = n(554174),
    d = n(333031),
    p = n(710111),
    f = n(975539);
function h() {
    let [e, t] = (0, r.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        h = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        m = null == h ? void 0 : h.getGuildId();
    return e && null != h
        ? (0, i.jsx)(d.Z, {
              className: f.container,
              children: (0, i.jsx)(a.Z, {
                  width: p.FW.width,
                  height: p.FW.height,
                  guildId: m,
                  channel: h,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.Z)();
                      null != e && (0, l.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
