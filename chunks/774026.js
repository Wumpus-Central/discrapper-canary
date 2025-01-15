t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(200651);
t(192379);
var i = t(913527),
    s = t.n(i),
    r = t(793030),
    a = t(739566),
    o = t(942951),
    u = t(67390),
    c = t(63063),
    d = t(981631),
    m = t(388032),
    g = t(637464);
function h(e) {
    var n;
    let { streamingUntil: t, user: i, channel: h } = e,
        x = (0, a.JZ)(i, h),
        S = (0, o.l)({
            user: i,
            channelId: h.id,
            guildId: h.guild_id,
            messageId: void 0
        })(x),
        v = s()(t).diff(s()(), 'hours');
    return v <= 0
        ? null
        : (0, l.jsxs)('div', {
              className: g.attribution,
              children: [
                  (0, l.jsx)(u.Z, { className: g.img }),
                  (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(r.X6, {
                              variant: 'heading-sm/bold',
                              children: m.intl.string(m.t.K04rOD)
                          }),
                          (0, l.jsx)(r.xv, {
                              color: 'text-muted',
                              variant: 'text-sm/medium',
                              children: m.intl.format(m.t.NZDuBg, {
                                  actorName: null !== (n = i.globalName) && void 0 !== n ? n : i.username,
                                  actorHook: S,
                                  num: v,
                                  helpCenterLink: c.Z.getArticleURL(d.BhN.HD_STREAMING_POTION)
                              })
                          })
                      ]
                  })
              ]
          });
}
