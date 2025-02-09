l.d(n, { Z: () => g });
var t = l(200651);
l(192379);
var i = l(913527),
    s = l.n(i),
    a = l(793030),
    r = l(739566),
    o = l(942951),
    u = l(67390),
    c = l(63063),
    d = l(981631),
    m = l(388032),
    x = l(635745);
function g(e) {
    var n;
    let { streamingUntil: l, user: i, channel: g } = e,
        h = (0, r.JZ)(i, g),
        Z = (0, o.l)({
            user: i,
            channelId: g.id,
            guildId: g.guild_id,
            messageId: void 0
        })(h),
        v = s()(l).diff(s()(), 'hours');
    return v <= 0
        ? null
        : (0, t.jsxs)('div', {
              className: x.attribution,
              children: [
                  (0, t.jsx)(u.Z, { className: x.img }),
                  (0, t.jsxs)('div', {
                      children: [
                          (0, t.jsx)(a.X6, {
                              variant: 'heading-sm/bold',
                              children: m.intl.string(m.t.K04rOD)
                          }),
                          (0, t.jsx)(a.xv, {
                              color: 'text-muted',
                              variant: 'text-sm/medium',
                              children: m.intl.format(m.t.NZDuBg, {
                                  actorName: null !== (n = i.globalName) && void 0 !== n ? n : i.username,
                                  actorHook: Z,
                                  num: v,
                                  helpCenterLink: c.Z.getArticleURL(d.BhN.HD_STREAMING_POTION)
                              })
                          })
                      ]
                  })
              ]
          });
}
