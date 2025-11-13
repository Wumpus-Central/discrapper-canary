n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(367907),
    c = n(359110),
    u = n(769654),
    d = n(496675),
    p = n(205129),
    f = n(626135),
    h = n(981631),
    g = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
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
function b(e) {
    let t = i.useContext(f.AnalyticsContext),
        n = e.voiceChannels[0],
        b = (0, l.e7)([d.Z], () => null != n && d.Z.can(h.Plq.CONNECT, n.channel));
    return null == n
        ? null
        : [
              (0, r.jsx)(
                  a.sNh,
                  {
                      id: "join-voice",
                      action: function () {
                          (0, c.Kh)(n.channel.id),
                              s.default.selectVoiceChannel(n.channel.id),
                              o.ZP.trackWithMetadata(
                                  h.rMx.ACTIVITY_FEED_VOICE_CHANNEL_VISITED,
                                  m(
                                      {
                                          source: _(m({}, t.location), { object: h.qAy.LIST_ITEM }),
                                          guild_id: n.guild.id,
                                          channel_id: n.channel.id,
                                      },
                                      (0, p.y)(e),
                                  ),
                              );
                      },
                      label: g.intl.string(g.t["8yOlh9"]),
                      disabled: !b,
                  },
                  "join-voice",
              ),
              (0, r.jsx)(
                  a.sNh,
                  {
                      id: "goto-server",
                      action: function () {
                          (0, u.X)(n.guild.id),
                              o.ZP.trackWithMetadata(
                                  h.rMx.ACTIVITY_FEED_GUILD_VISITED,
                                  m(
                                      {
                                          source: _(m({}, t.location), { object: h.qAy.LIST_ITEM }),
                                          guild_id: n.guild.id,
                                          af_recently_played: !1,
                                      },
                                      (0, p.y)(e),
                                  ),
                              );
                      },
                      label: g.intl.string(g.t.RGgqm1),
                  },
                  "goto-server",
              ),
          ];
}
