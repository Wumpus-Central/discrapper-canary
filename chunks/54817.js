n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(385499),
    s = n(739566),
    c = n(464891),
    d = n(83561),
    u = n(834129),
    m = n(981631),
    h = n(674563),
    f = n(388032),
    p = n(403498);
function _(e) {
    let { message: t, compact: n, usernameHook: r } = e,
        _ = (0, s.ZP)(t),
        g = r(_),
        {
            avatarSrc: E,
            eventHandlers: { onMouseEnter: C, onMouseLeave: I }
        } = (0, d.m)(!0),
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
    return (0, i.jsx)('div', {
        onMouseEnter: C,
        onMouseLeave: I,
        children: (0, i.jsx)(u.Z, {
            className: l()(p.mainContainer, { [p.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(d.S, { src: E }),
            iconContainerClassName: p.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: l()(p.content, { [p.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: p.spanCorrection,
                        className: l()(p.usernameContainer, p.spanCorrection, { [p.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: p.spanCorrection,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: p.username,
                                    children: f.intl.string(f.t.hG1StL)
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: h.Hb.SYSTEM_DM,
                                    className: p.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: l()(p.__invalid_messageContent, { [p.compact]: n }),
                        children:
                            t.type === m.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? f.intl.format(f.t['+m8eDw'], {
                                      username: _.nick,
                                      usernameHook: g,
                                      time: x
                                  })
                                : f.intl.format(f.t.BHeke3, {
                                      username: _.nick,
                                      usernameHook: g
                                  })
                    })
                ]
            })
        })
    });
}
