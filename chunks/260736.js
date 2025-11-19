n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(222423),
    o = n(63063),
    s = n(739566),
    l = n(942951),
    c = n(834129),
    u = n(981631),
    d = n(388032),
    f = n(587091);
function _(e) {
    let { compact: t, message: n, channel: _ } = e,
        p = (0, s.ZP)(n),
        h = (0, l.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: _.guild_id,
            messageId: n.id,
        })(p),
        m = o.Z.getArticleURL(u.BhN.HD_STREAMING_POTION);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: f.parentContainer,
                children: (0, r.jsx)(c.Z, {
                    iconNode: (0, r.jsx)(i.hh5, { size: "sm" }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: d.intl.format(d.t.u0qJ4z, {
                        actorName: p.nick,
                        actorHook: h,
                    }),
                }),
            }),
            (0, r.jsxs)(i.P3F, {
                onClick: () => {
                    window.open(o.Z.getArticleURL(u.BhN.HD_STREAMING_POTION), "_blank");
                },
                className: f.embed,
                children: [
                    (0, r.jsx)(a.Z, {}),
                    (0, r.jsxs)("div", {
                        className: f.text,
                        children: [
                            (0, r.jsx)(i.Text, {
                                color: "text-default",
                                variant: "text-sm/semibold",
                                className: f.title,
                                children: d.intl.string(d.t["Fh/mk/"]),
                            }),
                            (0, r.jsx)(i.Text, {
                                color: "text-primary",
                                variant: "text-xs/normal",
                                children: d.intl.format(d.t["bmGF+V"], { helpCenterLink: m }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
