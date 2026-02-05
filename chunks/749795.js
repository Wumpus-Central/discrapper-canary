n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(397927),
    s = n(709066),
    o = n(763754),
    d = n(643204),
    c = n(809115),
    u = n(888675),
    m = n(705751),
    _ = n(985018),
    h = n(234054);
function p(e) {
    let { message: t, compact: n, usernameHook: l } = e,
        p = (0, o.Ay)(t),
        g = l(p),
        {
            avatarSrc: A,
            eventHandlers: { onMouseEnter: f, onMouseLeave: x },
        } = (0, c.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: f,
        onMouseLeave: x,
        children: (0, i.jsx)(u.A, {
            className: a()(h.rs, { [h.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(c.l, { src: A }),
            iconContainerClassName: h.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(h.Qs, { [h.oE]: n }),
                children: [
                    (0, i.jsx)(d.ix, {
                        message: t,
                        messageClassname: h.he,
                        className: a()(h.QV, h.he, { [h.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: h.he,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: h.Xh,
                                    children: _.intl.string(_.t.hG1StD),
                                }),
                                (0, i.jsx)(s.A, { type: m.nu.SYSTEM_DM, className: h.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: a()(h.__invalid_messageContent, { [h.oE]: n }),
                        children: _.intl.format(_.t.qntXNQ, { username: p.nick, usernameHook: g }),
                    }),
                ],
            }),
        }),
    });
}
