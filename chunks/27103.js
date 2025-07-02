n.d(t, { Z: () => _ });
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
    p = n(674563),
    m = n(388032),
    f = n(126759);
function _(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        _ = (0, s.ZP)(t),
        g = i(_),
        {
            avatarSrc: h,
            eventHandlers: { onMouseEnter: b, onMouseLeave: E }
        } = (0, u.m)(!0);
    return (0, r.jsx)('div', {
        onMouseEnter: b,
        onMouseLeave: E,
        children: (0, r.jsx)(d.Z, {
            className: l()(f.mainContainer, { [f.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(u.S, { src: h }),
            iconContainerClassName: f.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: l()(f.content, { [f.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: f.spanCorrection,
                        className: l()(f.usernameContainer, f.spanCorrection, { [f.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: f.spanCorrection,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: f.username,
                                    children: m.intl.string(m.t.hG1StL)
                                }),
                                (0, r.jsx)(o.Z, {
                                    type: p.Hb.SYSTEM_DM,
                                    className: f.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(f.__invalid_messageContent, { [f.compact]: n }),
                        children: m.intl.format(m.t.qntXNT, {
                            username: _.nick,
                            usernameHook: g
                        })
                    })
                ]
            })
        })
    });
}
