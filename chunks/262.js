n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(857395),
    r = n(739566),
    s = n(834129),
    o = n(388032);
function c(e) {
    let { children: t, messageReference: n, guildName: r } = e;
    if (null == n) return (0, i.jsx)(l.eee, { children: t });
    let { guild_id: s, channel_id: o, message_id: c } = n;
    return null == s
        ? (0, i.jsx)(l.eee, { children: t })
        : (0, i.jsx)(a.Z, {
              guildId: s,
              channelId: o,
              messageId: c,
              name: r,
              children: (e) => {
                  let { 'aria-controls': n, 'aria-expanded': a, ...r } = e;
                  return (0, i.jsx)(l.eee, {
                      ...r,
                      children: t
                  });
              }
          });
}
function d(e) {
    let { usernameHook: t, message: l, compact: a } = e,
        { content: d, timestamp: u, messageReference: m } = l,
        h = (0, r.ZP)(l),
        _ = t(h),
        p = (null != d ? d : '').split(' ').slice(0, -1).join(' '),
        g = o.intl.format(o.t['47CZc3'], {
            username: h.nick,
            usernameHook: _,
            webhookName: d,
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
    return (0, i.jsx)(s.Z, {
        icon: n(570111),
        timestamp: u,
        compact: a,
        children: g
    });
}
