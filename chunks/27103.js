n.d(t, { Z: () => h });
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
    _ = n(388032),
    p = n(78642);
function h(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        h = (0, l.ZP)(t),
        m = i(h),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: E, onMouseLeave: b },
        } = (0, u.m)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: E,
        onMouseLeave: b,
        children: (0, r.jsx)(d.Z, {
            className: a()(p.mainContainer, { [p.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(u.S, { src: g }),
            iconContainerClassName: p.iconContainer,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: a()(p.content, { [p.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: p.spanCorrection,
                        className: a()(p.usernameContainer, p.spanCorrection, { [p.compact]: n }),
                        username: (0, r.jsxs)("div", {
                            className: p.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: p.username,
                                    children: _.intl.string(_.t.hG1StD),
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: p.systemTag,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(p.__invalid_messageContent, { [p.compact]: n }),
                        children: _.intl.format(_.t.qntXNQ, {
                            username: h.nick,
                            usernameHook: m,
                        }),
                    }),
                ],
            }),
        }),
    });
}
