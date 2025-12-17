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
    f = n(981631),
    p = n(674563),
    _ = n(388032),
    m = n(138851);
function h(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        h = (0, l.ZP)(t),
        g = i(h),
        {
            avatarSrc: E,
            eventHandlers: { onMouseEnter: b, onMouseLeave: y },
        } = (0, u.m)(!0),
        O =
            "" !== t.content
                ? new Date(t.content).toLocaleString(_.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                  })
                : "";
    return (0, r.jsx)("div", {
        onMouseEnter: b,
        onMouseLeave: y,
        children: (0, r.jsx)(d.Z, {
            className: a()(m.mainContainer, { [m.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(u.S, { src: E }),
            iconContainerClassName: m.iconContainer,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: a()(m.content, { [m.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: m.spanCorrection,
                        className: a()(m.usernameContainer, m.spanCorrection, { [m.compact]: n }),
                        username: (0, r.jsxs)("div", {
                            className: m.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: m.username,
                                    children: _.intl.string(_.t.hG1StD),
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: p.Hb.SYSTEM_DM,
                                    className: m.systemTag,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(m.__invalid_messageContent, { [m.compact]: n }),
                        children:
                            t.type === f.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? _.intl.format(_.t["+m8eD7"], {
                                      username: h.nick,
                                      usernameHook: g,
                                      time: O,
                                  })
                                : _.intl.format(_.t["BHeke+"], {
                                      username: h.nick,
                                      usernameHook: g,
                                  }),
                    }),
                ],
            }),
        }),
    });
}
