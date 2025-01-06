n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(857395),
    a = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    let { children: t, messageReference: n, guildName: a } = e;
    if (null == n) return (0, i.jsx)(r.Anchor, { children: t });
    let { guild_id: o, channel_id: s, message_id: c } = n;
    return null == o
        ? (0, i.jsx)(r.Anchor, { children: t })
        : (0, i.jsx)(l.Z, {
              guildId: o,
              channelId: s,
              messageId: c,
              name: a,
              children: (e) => {
                  let { 'aria-controls': n, 'aria-expanded': l, ...a } = e;
                  return (0, i.jsx)(r.Anchor, {
                      ...a,
                      children: t
                  });
              }
          });
}
function u(e) {
    let { usernameHook: t, message: r, compact: l } = e,
        { content: u, timestamp: d, messageReference: m } = r,
        h = (0, a.ZP)(r),
        f = t(h),
        p = (null != u ? u : '').split(' ').slice(0, -1).join(' '),
        _ = s.intl.format(s.t['47CZc3'], {
            username: h.nick,
            usernameHook: f,
            webhookName: u,
            webhookNameHook: (e, t) =>
                (0, i.jsx)(
                    c,
                    {
                        messageReference: m,
                        guildName: p,
                        children: e
                    },
                    t
                )
        });
    return (0, i.jsx)(o.Z, {
        icon: n(570111),
        timestamp: d,
        compact: l,
        children: _
    });
}
