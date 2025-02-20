t.d(n, { Z: () => h });
var l = t(200651);
t(192379);
var i = t(913527),
    r = t.n(i),
    s = t(793030),
    a = t(739566),
    o = t(942951),
    c = t(67390),
    u = t(63063),
    d = t(981631),
    m = t(388032),
    g = t(637402);
function h(e) {
    var n;
    let { streamingUntil: t, user: i, channel: h } = e,
        x = (0, a.JZ)(i, h),
        v = (0, o.l)({
            user: i,
            channelId: h.id,
            guildId: h.guild_id,
            messageId: void 0
        })(x),
        f = r()(t).diff(r()(), 'hours');
    return f <= 0
        ? null
        : (0, l.jsxs)('div', {
              className: g.attribution,
              children: [
                  (0, l.jsx)(c.Z, { className: g.img }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(s.X6, {
                              variant: 'heading-sm/bold',
                              children: m.NW.string(m.t.K04rOD)
                          }),
                          (0, l.jsx)(s.xv, {
                              color: 'text-muted',
                              variant: 'text-sm/medium',
                              children: m.NW.format(m.t.NZDuBg, {
                                  actorName: null !== (n = i.globalName) && void 0 !== n ? n : i.username,
                                  actorHook: v,
                                  num: f,
                                  helpCenterLink: u.Z.getArticleURL(d.BhN.HD_STREAMING_POTION)
                              })
                          })
                      ]
                  })
              ]
          });
}
