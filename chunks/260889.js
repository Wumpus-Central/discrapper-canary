n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(367907),
    c = n(359110),
    u = n(769654),
    d = n(496675),
    p = n(205129),
    h = n(626135),
    f = n(981631),
    g = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let t = i.useContext(h.AnalyticsContext),
        n = e.voiceChannels[0],
        _ = (0, l.e7)([d.Z], () => null != n && d.Z.can(f.Plq.CONNECT, n.channel));
    return null == n
        ? null
        : [
              (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'join-voice',
                      action: function () {
                          (0, c.Kh)(n.channel.id),
                              o.default.selectVoiceChannel(n.channel.id),
                              s.ZP.trackWithMetadata(
                                  f.rMx.ACTIVITY_FEED_VOICE_CHANNEL_VISITED,
                                  m(
                                      {
                                          source: b(m({}, t.location), { object: f.qAy.LIST_ITEM }),
                                          guild_id: n.guild.id,
                                          channel_id: n.channel.id
                                      },
                                      (0, p.y)(e)
                                  )
                              );
                      },
                      label: g.NW.string(g.t['8yOlh4']),
                      disabled: !_
                  },
                  'join-voice'
              ),
              (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'goto-server',
                      action: function () {
                          (0, u.X)(n.guild.id),
                              s.ZP.trackWithMetadata(
                                  f.rMx.ACTIVITY_FEED_GUILD_VISITED,
                                  m(
                                      {
                                          source: b(m({}, t.location), { object: f.qAy.LIST_ITEM }),
                                          guild_id: n.guild.id,
                                          af_recently_played: !1
                                      },
                                      (0, p.y)(e)
                                  )
                              );
                      },
                      label: g.NW.string(g.t.RGgqm5)
                  },
                  'goto-server'
              )
          ];
}
