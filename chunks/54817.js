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
    f = n(981631),
    _ = n(674563),
    p = n(388032),
    h = n(78642);
function m(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        m = (0, l.ZP)(t),
        g = i(m),
        {
            avatarSrc: E,
            eventHandlers: { onMouseEnter: b, onMouseLeave: y },
        } = (0, u.m)(!0),
        O =
            "" !== t.content
                ? new Date(t.content).toLocaleString(p.intl.currentLocale, {
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
            className: a()(h.mainContainer, { [h.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(u.S, { src: E }),
            iconContainerClassName: h.iconContainer,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: a()(h.content, { [h.compact]: n }),
                children: [
                    (0, r.jsx)(c.nD, {
                        message: t,
                        messageClassname: h.spanCorrection,
                        className: a()(h.usernameContainer, h.spanCorrection, { [h.compact]: n }),
                        username: (0, r.jsxs)("div", {
                            className: h.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: h.username,
                                    children: p.intl.string(p.t.hG1StD),
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: _.Hb.SYSTEM_DM,
                                    className: h.systemTag,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(h.__invalid_messageContent, { [h.compact]: n }),
                        children:
                            t.type === f.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? p.intl.format(p.t["+m8eD7"], {
                                      username: m.nick,
                                      usernameHook: g,
                                      time: O,
                                  })
                                : p.intl.format(p.t["BHeke+"], {
                                      username: m.nick,
                                      usernameHook: g,
                                  }),
                    }),
                ],
            }),
        }),
    });
}
