n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(67390),
    a = n(63063),
    o = n(739566),
    s = n(942951),
    c = n(834129),
    u = n(981631),
    d = n(388032),
    p = n(861477);
function m(e) {
    let { compact: t, message: n, channel: m } = e,
        f = (0, o.ZP)(n),
        _ = (0, s.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: m.guild_id,
            messageId: n.id
        })(f),
        g = a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: p.parentContainer,
                children: (0, r.jsx)(c.Z, {
                    iconNode: (0, r.jsx)(i.hh5, { size: 'sm' }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: d.intl.format(d.t['u0qJ4+'], {
                        actorName: f.nick,
                        actorHook: _
                    })
                })
            }),
            (0, r.jsxs)(i.P3F, {
                onClick: () => {
                    window.open(a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: p.embed,
                children: [
                    (0, r.jsx)(l.Z, {}),
                    (0, r.jsxs)('div', {
                        className: p.text,
                        children: [
                            (0, r.jsx)(i.Text, {
                                color: 'text-default',
                                variant: 'text-sm/semibold',
                                className: p.title,
                                children: d.intl.string(d.t['Fh/mk5'])
                            }),
                            (0, r.jsx)(i.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: d.intl.format(d.t['bmGF+f'], { helpCenterLink: g })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
