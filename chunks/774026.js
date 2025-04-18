n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(913527),
    l = n.n(i),
    s = n(793030),
    a = n(739566),
    o = n(942951),
    c = n(67390),
    d = n(63063),
    u = n(981631),
    f = n(388032),
    m = n(447556);
function h(e) {
    var t;
    let { streamingUntil: n, user: i, channel: h } = e,
        x = (0, a.JZ)(i, h),
        p = (0, o.l)({
            user: i,
            channelId: h.id,
            guildId: h.guild_id,
            messageId: void 0
        })(x),
        g = l()(n).diff(l()(), 'hours');
    return g <= 0
        ? null
        : (0, r.jsxs)('div', {
              className: m.attribution,
              children: [
                  (0, r.jsx)(c.Z, { className: m.img }),
                  (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(s.X6, {
                              variant: 'heading-sm/bold',
                              children: f.NW.string(f.t.K04rOD)
                          }),
                          (0, r.jsx)(s.xv, {
                              color: 'text-muted',
                              variant: 'text-sm/medium',
                              children: f.NW.format(f.t.NZDuBg, {
                                  actorName: null != (t = i.globalName) ? t : i.username,
                                  actorHook: p,
                                  num: g,
                                  helpCenterLink: d.Z.getArticleURL(u.BhN.HD_STREAMING_POTION)
                              })
                          })
                      ]
                  })
              ]
          });
}
