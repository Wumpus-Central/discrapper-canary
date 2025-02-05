n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(385499),
    o = n(739566),
    c = n(464891),
    d = n(83561),
    u = n(834129),
    m = n(981631),
    _ = n(674563),
    h = n(388032),
    p = n(403498);
function g(e) {
    let { message: t, compact: n, usernameHook: l } = e,
        g = (0, o.ZP)(t),
        f = l(g),
        {
            avatarSrc: x,
            eventHandlers: { onMouseEnter: C, onMouseLeave: v }
        } = (0, d.m)(!0),
        E =
            '' !== t.content
                ? new Date(t.content).toLocaleString(h.intl.currentLocale, {
                      hour: 'numeric',
                      minute: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric'
                  })
                : '';
    return (0, i.jsx)('div', {
        onMouseEnter: C,
        onMouseLeave: v,
        children: (0, i.jsx)(u.Z, {
            className: a()(p.mainContainer, { [p.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(d.S, { src: x }),
            iconContainerClassName: p.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: a()(p.content, { [p.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: p.spanCorrection,
                        className: a()(p.usernameContainer, p.spanCorrection, { [p.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: p.spanCorrection,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: p.username,
                                    children: h.intl.string(h.t.hG1StL)
                                }),
                                (0, i.jsx)(s.Z, {
                                    type: _.Hb.SYSTEM_DM,
                                    className: p.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: a()(p.__invalid_messageContent, { [p.compact]: n }),
                        children:
                            t.type === m.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? h.intl.format(h.t['+m8eDw'], {
                                      username: g.nick,
                                      usernameHook: f,
                                      time: E
                                  })
                                : h.intl.format(h.t.BHeke3, {
                                      username: g.nick,
                                      usernameHook: f
                                  })
                    })
                ]
            })
        })
    });
}
