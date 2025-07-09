n.d(t, { Z: () => g });
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
    _ = n(126759);
function g(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        g = (0, s.ZP)(t),
        h = i(g),
        {
            avatarSrc: b,
            eventHandlers: { onMouseEnter: E, onMouseLeave: y }
        } = (0, u.m)(!0),
        x =
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
        onMouseLeave: y,
        children: (0, r.jsx)(d.Z, {
            className: l()(_.mainContainer, { [_.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(u.S, { src: b }),
            iconContainerClassName: _.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: l()(_.content, { [_.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: _.spanCorrection,
                        className: l()(_.usernameContainer, _.spanCorrection, { [_.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: _.spanCorrection,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: _.username,
                                    children: f.intl.string(f.t.hG1StL)
                                }),
                                (0, r.jsx)(o.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: _.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(_.__invalid_messageContent, { [_.compact]: n }),
                        children:
                            t.type === p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? f.intl.format(f.t['+m8eDw'], {
                                      username: g.nick,
                                      usernameHook: h,
                                      time: x
                                  })
                                : f.intl.format(f.t.BHeke3, {
                                      username: g.nick,
                                      usernameHook: h
                                  })
                    })
                ]
            })
        })
    });
}
