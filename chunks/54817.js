n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(385499),
    s = n(739566),
    c = n(464891),
    d = n(83561),
    u = n(834129),
    p = n(981631),
    m = n(674563),
    f = n(388032),
    h = n(39684);
function g(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        g = (0, s.ZP)(t),
        _ = i(g),
        {
            avatarSrc: b,
            eventHandlers: { onMouseEnter: v, onMouseLeave: y }
        } = (0, d.m)(!0),
        x =
            '' !== t.content
                ? new Date(t.content).toLocaleString(f.NW.currentLocale, {
                      hour: 'numeric',
                      minute: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric'
                  })
                : '';
    return (0, r.jsx)('div', {
        onMouseEnter: v,
        onMouseLeave: y,
        children: (0, r.jsx)(u.Z, {
            className: a()(h.mainContainer, { [h.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(d.S, { src: b }),
            iconContainerClassName: h.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: a()(h.content, { [h.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: h.spanCorrection,
                        className: a()(h.usernameContainer, h.spanCorrection, { [h.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: h.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: h.username,
                                    children: f.NW.string(f.t.hG1StL)
                                }),
                                (0, r.jsx)(l.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: h.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: a()(h.__invalid_messageContent, { [h.compact]: n }),
                        children:
                            t.type === p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? f.NW.format(f.t['+m8eDw'], {
                                      username: g.nick,
                                      usernameHook: _,
                                      time: x
                                  })
                                : f.NW.format(f.t.BHeke3, {
                                      username: g.nick,
                                      usernameHook: _
                                  })
                    })
                ]
            })
        })
    });
}
