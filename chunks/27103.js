n.d(t, {
    Z: function () {
        return p;
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
    u = n(83561),
    d = n(834129),
    m = n(674563),
    h = n(388032),
    f = n(403498);
function p(e) {
    let { message: t, compact: n, usernameHook: r } = e,
        p = (0, s.ZP)(t),
        _ = r(p),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: E, onMouseLeave: C }
        } = (0, u.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: E,
        onMouseLeave: C,
        children: (0, i.jsx)(d.Z, {
            className: l()(f.mainContainer, { [f.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(u.S, { src: g }),
            iconContainerClassName: f.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: l()(f.content, { [f.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: f.spanCorrection,
                        className: l()(f.usernameContainer, f.spanCorrection, { [f.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: f.spanCorrection,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: f.username,
                                    children: h.intl.string(h.t.hG1StL)
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: f.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: l()(f.__invalid_messageContent, { [f.compact]: n }),
                        children: h.intl.format(h.t.qntXNT, {
                            username: p.nick,
                            usernameHook: _
                        })
                    })
                ]
            })
        })
    });
}
