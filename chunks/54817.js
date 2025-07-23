n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(385499),
    s = n(739566),
    c = n(464891),
    u = n(605568),
    d = n(834129),
    p = n(981631),
    m = n(674563),
    f = n(388032),
    g = n(126759);
function h(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        h = (0, s.ZP)(t),
        _ = i(h),
        {
            avatarSrc: b,
            eventHandlers: { onMouseEnter: E, onMouseLeave: x }
        } = (0, u.m)(!0),
        y =
            '' !== t.content
                ? new Date(t.content).toLocaleString(f.intl.currentLocale, {
                      hour: 'numeric',
                      minute: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric'
                  })
                : '';
    return (0, r.jsx)('div', {
        onMouseEnter: E,
        onMouseLeave: x,
        children: (0, r.jsx)(d.Z, {
            className: l()(g.mainContainer, { [g.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(u.S, { src: b }),
            iconContainerClassName: g.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: l()(g.content, { [g.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: g.spanCorrection,
                        className: l()(g.usernameContainer, g.spanCorrection, { [g.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: g.spanCorrection,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: g.username,
                                    children: f.intl.string(f.t.hG1StL)
                                }),
                                (0, r.jsx)(o.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: g.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(g.__invalid_messageContent, { [g.compact]: n }),
                        children:
                            t.type === p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? f.intl.format(f.t['+m8eDw'], {
                                      username: h.nick,
                                      usernameHook: _,
                                      time: y
                                  })
                                : f.intl.format(f.t.BHeke3, {
                                      username: h.nick,
                                      usernameHook: _
                                  })
                    })
                ]
            })
        })
    });
}
