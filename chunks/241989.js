n.d(t, {
    DH: () => p,
    JW: () => f,
    a6: () => _,
    f7: () => u,
    jw: () => h,
    oo: () => m,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(756366),
    l = n(985018),
    c = n(559485);
function u(e) {
    var t;
    let {
            header: n,
            headerIconSrc: i,
            label: u,
            description: d,
            graphic: f,
            price: p,
            PriceIcon: _,
            strikethroughPrice: h,
            gift: m,
            className: g,
        } = e,
        E =
            null != m
                ? l.intl.format(o.default["2PiTTi"], {
                      username: m.username,
                      nickname: null != (t = m.nickname) ? t : m.username,
                      avatar: () =>
                          (0, r.jsx)("img", {
                              alt: "",
                              src: m.avatarUrl,
                              className: c.s,
                          }),
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: a()(c.kL, g),
        children: [
            null != f &&
                (0, r.jsx)("div", {
                    className: c.Kk,
                    children: f,
                }),
            (0, r.jsxs)("div", {
                className: c.Qs,
                children: [
                    null != n &&
                        (0, r.jsxs)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            lineClamp: 1,
                            className: c.wx,
                            children: [
                                null != i &&
                                    (0, r.jsx)("img", {
                                        alt: "",
                                        src: i,
                                        className: c.nr,
                                    }),
                                n,
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: c.zH,
                        children: [
                            (0, r.jsxs)("div", {
                                className: c.Qq,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        lineClamp: 1,
                                        children: u,
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        lineClamp: 2,
                                        children: d,
                                    }),
                                    null != E &&
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            lineClamp: 1,
                                            className: c.Qy,
                                            children: E,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: c.p6,
                                children: [
                                    (0, r.jsxs)(s.Text, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        className: c.nw,
                                        children: [null != _ && (0, r.jsx)(_, { size: "xs" }), p],
                                    }),
                                    null != h &&
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: c.Jb,
                                            children: h,
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(s.hLv, {
        color: t,
        className: c.nC,
        children: (0, r.jsx)(n, {
            size: "lg",
            color: "var(--icon-strong)",
        }),
    });
}
function f() {
    return (0, r.jsx)(d, {
        color: "nitro-pink",
        Icon: s.tvc,
    });
}
function p() {
    return (0, r.jsx)(d, {
        color: "nitro-green",
        Icon: s.tvc,
    });
}
function _() {
    return (0, r.jsx)(d, {
        color: "pink",
        Icon: s._Jp,
    });
}
function h() {
    return (0, r.jsx)(s.k9F, {
        size: "lg",
        color: "var(--icon-muted)",
    });
}
function m() {
    return (0, r.jsx)("div", {
        className: c.CX,
        children: (0, r.jsx)(s.tvc, {
            size: "lg",
            color: "var(--neutral-1)",
        }),
    });
}
