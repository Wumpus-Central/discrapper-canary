n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(385499),
    l = n(739566),
    c = n(464891),
    u = n(83561),
    d = n(834129),
    f = n(674563),
    p = n(388032),
    _ = n(682392);
function m(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        m = (0, l.ZP)(t),
        h = i(m),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: E, onMouseLeave: b },
        } = (0, u.m)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: E,
        onMouseLeave: b,
        children: (0, r.jsx)(d.Z, {
            className: a()(_.mainContainer, { [_.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(u.S, { src: g }),
            iconContainerClassName: _.iconContainer,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: a()(_.content, { [_.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: _.spanCorrection,
                        className: a()(_.usernameContainer, _.spanCorrection, { [_.compact]: n }),
                        username: (0, r.jsxs)("div", {
                            className: _.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: _.username,
                                    children: p.intl.string(p.t.hG1StD),
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: _.systemTag,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(_.__invalid_messageContent, { [_.compact]: n }),
                        children: p.intl.format(p.t.qntXNQ, {
                            username: m.nick,
                            usernameHook: h,
                        }),
                    }),
                ],
            }),
        }),
    });
}
