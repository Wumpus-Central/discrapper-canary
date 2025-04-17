n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(67390),
    l = n(896835),
    o = n(447564),
    s = n(63063),
    c = n(739566),
    u = n(942951),
    d = n(834129),
    p = n(981631),
    m = n(388032),
    f = n(861477);
function h(e) {
    let { compact: t, message: n, channel: h } = e,
        g = (0, c.ZP)(n),
        _ = (0, u.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: h.guild_id,
            messageId: n.id
        })(g),
        b = (0, l.j)('HDStreamingUpgradedMessage'),
        x = () => (0, o.k)(h, 'HDStreamingUpgradedMessage'),
        y = b ? x : s.Z.getArticleURL(p.BhN.HD_STREAMING_POTION);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: f.parentContainer,
                children: (0, r.jsx)(d.Z, {
                    iconNode: (0, r.jsx)(i.hh5, { size: 'sm' }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: m.NW.format(m.t['u0qJ4+'], {
                        actorName: g.nick,
                        actorHook: _
                    })
                })
            }),
            (0, r.jsxs)(i.P3F, {
                onClick: () => {
                    b ? x() : window.open(s.Z.getArticleURL(p.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: f.embed,
                children: [
                    (0, r.jsx)(a.Z, {}),
                    (0, r.jsxs)('div', {
                        className: f.text,
                        children: [
                            (0, r.jsx)(i.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: f.title,
                                children: m.NW.string(m.t['Fh/mk5'])
                            }),
                            (0, r.jsx)(i.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: m.NW.format(m.t['bmGF+f'], { helpCenterLink: y })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
