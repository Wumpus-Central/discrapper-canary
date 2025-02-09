n.d(t, { Z: () => p });
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
    m = n(674563),
    _ = n(388032),
    h = n(611242);
function p(e) {
    let { message: t, compact: n, usernameHook: l } = e,
        p = (0, o.ZP)(t),
        g = l(p),
        {
            avatarSrc: f,
            eventHandlers: { onMouseEnter: x, onMouseLeave: C }
        } = (0, d.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: x,
        onMouseLeave: C,
        children: (0, i.jsx)(u.Z, {
            className: a()(h.mainContainer, { [h.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(d.S, { src: f }),
            iconContainerClassName: h.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: a()(h.content, { [h.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: h.spanCorrection,
                        className: a()(h.usernameContainer, h.spanCorrection, { [h.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: h.spanCorrection,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: h.username,
                                    children: _.intl.string(_.t.hG1StL)
                                }),
                                (0, i.jsx)(s.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: h.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: a()(h.__invalid_messageContent, { [h.compact]: n }),
                        children: _.intl.format(_.t.qntXNT, {
                            username: p.nick,
                            usernameHook: g
                        })
                    })
                ]
            })
        })
    });
}
