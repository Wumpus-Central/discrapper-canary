n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(67390),
    o = n(63063),
    a = n(739566),
    s = n(942951),
    c = n(834129),
    u = n(981631),
    d = n(388032),
    p = n(587091);
function m(e) {
    let { compact: t, message: n, channel: m } = e,
        f = (0, a.ZP)(n),
        g = (0, s.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: m.guild_id,
            messageId: n.id,
        })(f),
        _ = o.Z.getArticleURL(u.BhN.HD_STREAMING_POTION);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: p.parentContainer,
                children: (0, r.jsx)(c.Z, {
                    iconNode: (0, r.jsx)(i.hh5, { size: "sm" }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: d.intl.format(d.t["u0qJ4+"], {
                        actorName: f.nick,
                        actorHook: g,
                    }),
                }),
            }),
            (0, r.jsxs)(i.P3F, {
                onClick: () => {
                    window.open(o.Z.getArticleURL(u.BhN.HD_STREAMING_POTION), "_blank");
                },
                className: p.embed,
                children: [
                    (0, r.jsx)(l.Z, {}),
                    (0, r.jsxs)("div", {
                        className: p.text,
                        children: [
                            (0, r.jsx)(i.Text, {
                                color: "text-default",
                                variant: "text-sm/semibold",
                                className: p.title,
                                children: d.intl.string(d.t["Fh/mk5"]),
                            }),
                            (0, r.jsx)(i.Text, {
                                color: "text-primary",
                                variant: "text-xs/normal",
                                children: d.intl.format(d.t["bmGF+f"], { helpCenterLink: _ }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
