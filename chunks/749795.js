n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(709066),
    l = n(763754),
    c = n(643204),
    u = n(809115),
    d = n(888675),
    f = n(705751),
    p = n(985018),
    _ = n(234054);

function h(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        h = (0, l.Ay)(t),
        m = i(h),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: E, onMouseLeave: b },
        } = (0, u.a)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: E,
        onMouseLeave: b,
        children: (0, r.jsx)(d.A, {
            className: a()(_.rs, {
                [_.oE]: n,
            }),
            iconNode: n
                ? null
                : (0, r.jsx)(u.l, {
                      src: g,
                  }),
            iconContainerClassName: _.zc,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: a()(_.Qs, {
                    [_.oE]: n,
                }),
                children: [
                    (0, r.jsx)(c.ix, {
                        message: t,
                        messageClassname: _.he,
                        className: a()(_.QV, _.he, {
                            [_.oE]: n,
                        }),
                        username: (0, r.jsxs)("div", {
                            className: _.he,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: _.Xh,
                                    children: p.intl.string(p.t.hG1StD),
                                }),
                                (0, r.jsx)(o.A, {
                                    type: f.nu.SYSTEM_DM,
                                    className: _.Al,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(_.__invalid_messageContent, {
                            [_.oE]: n,
                        }),
                        children: p.intl.format(p.t.qntXNQ, {
                            username: h.nick,
                            usernameHook: m,
                        }),
                    }),
                ],
            }),
        }),
    });
}
