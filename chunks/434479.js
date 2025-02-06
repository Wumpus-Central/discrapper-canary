n.d(t, { m: () => h });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(91192),
    o = n(589440),
    s = n(481060),
    c = n(23202),
    d = n(831746),
    u = n(193877);
function h(e) {
    var t;
    let { id: n, className: l, innerClassName: h, renderIcon: p, text: m, selected: g, trailing: f, showUnread: _ = !1, ...v } = e,
        C = (0, a.JA)(n),
        x = null !== (t = (0, o.q)(m)) && void 0 !== t ? t : '';
    return (0, i.jsx)('li', {
        children: (0, i.jsxs)(s.kL8, {
            ...v,
            buttonProps: {
                ...C,
                id: n,
                role: 'button'
            },
            tag: 'div',
            'aria-label': x,
            focusProps: {
                offset: {
                    top: 1,
                    bottom: 1,
                    right: 4
                }
            },
            onContextMenu:
                null != v.onContextMenu
                    ? v.onContextMenu
                    : (e) => {
                          e.stopPropagation();
                      },
            className: r()(d.containerDefault, u.wrapper, { [u.modeSelected]: g }, l),
            children: [
                _ ? (0, i.jsx)('div', { className: r()(u.unread, u.unreadImportant) }) : null,
                (0, i.jsx)('div', {
                    className: r()([u.link, u.basicChannelRowLink, h]),
                    children: (0, i.jsxs)('div', {
                        className: c.content,
                        children: [
                            (0, i.jsx)('div', {
                                className: u.iconContainer,
                                children: p(u.icon)
                            }),
                            (0, i.jsx)('div', {
                                className: u.name,
                                'aria-hidden': !0,
                                children: m
                            }),
                            f
                        ]
                    })
                })
            ]
        })
    });
}
