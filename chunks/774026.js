t.d(n, { Z: () => g });
var l = t(200651);
t(192379);
var i = t(913527),
    s = t.n(i),
    a = t(793030),
    r = t(739566),
    o = t(942951),
    u = t(67390),
    c = t(63063),
    d = t(981631),
    m = t(388032),
    x = t(417859);
function g(e) {
    var n;
    let { streamingUntil: t, user: i, channel: g } = e,
        h = (0, r.JZ)(i, g),
        v = (0, o.l)({
            user: i,
            channelId: g.id,
            guildId: g.guild_id,
            messageId: void 0
        })(h),
        Z = s()(t).diff(s()(), 'hours');
    return Z <= 0
        ? null
        : (0, l.jsxs)('div', {
              className: x.attribution,
              children: [
                  (0, l.jsx)(u.Z, { className: x.img }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(a.X6, {
                              variant: 'heading-sm/bold',
                              children: m.intl.string(m.t.K04rOD)
                          }),
                          (0, l.jsx)(a.xv, {
                              color: 'text-muted',
                              variant: 'text-sm/medium',
                              children: m.intl.format(m.t.NZDuBg, {
                                  actorName: null !== (n = i.globalName) && void 0 !== n ? n : i.username,
                                  actorHook: v,
                                  num: Z,
                                  helpCenterLink: c.Z.getArticleURL(d.BhN.HD_STREAMING_POTION)
                              })
                          })
                      ]
                  })
              ]
          });
}
