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
    h = n(388032),
    _ = n(403498);
function p(e) {
    let { message: t, compact: n, usernameHook: l } = e,
        p = (0, o.ZP)(t),
        g = l(p),
        {
            avatarSrc: f,
            eventHandlers: { onMouseEnter: x, onMouseLeave: E }
        } = (0, d.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: x,
        onMouseLeave: E,
        children: (0, i.jsx)(u.Z, {
            className: a()(_.mainContainer, { [_.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(d.S, { src: f }),
            iconContainerClassName: _.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: a()(_.content, { [_.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: _.spanCorrection,
                        className: a()(_.usernameContainer, _.spanCorrection, { [_.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: _.spanCorrection,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: _.username,
                                    children: h.intl.string(h.t.hG1StL)
                                }),
                                (0, i.jsx)(s.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: _.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: a()(_.__invalid_messageContent, { [_.compact]: n }),
                        children: h.intl.format(h.t.qntXNT, {
                            username: p.nick,
                            usernameHook: g
                        })
                    })
                ]
            })
        })
    });
}
