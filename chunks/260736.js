n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(67390),
    a = n(63063),
    s = n(739566),
    l = n(942951),
    c = n(834129),
    u = n(981631),
    d = n(388032),
    f = n(861477);
function _(e) {
    let { compact: t, message: n, channel: _ } = e,
        p = (0, s.ZP)(n),
        h = (0, l.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: _.guild_id,
            messageId: n.id
        })(p),
        m = a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: f.parentContainer,
                children: (0, r.jsx)(c.Z, {
                    iconNode: (0, r.jsx)(i.hh5, { size: 'sm' }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: d.intl.format(d.t['u0qJ4+'], {
                        actorName: p.nick,
                        actorHook: h
                    })
                })
            }),
            (0, r.jsxs)(i.P3F, {
                onClick: () => {
                    window.open(a.Z.getArticleURL(u.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: f.embed,
                children: [
                    (0, r.jsx)(o.Z, {}),
                    (0, r.jsxs)('div', {
                        className: f.text,
                        children: [
                            (0, r.jsx)(i.Text, {
                                color: 'text-default',
                                variant: 'text-sm/semibold',
                                className: f.title,
                                children: d.intl.string(d.t['Fh/mk5'])
                            }),
                            (0, r.jsx)(i.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: d.intl.format(d.t['bmGF+f'], { helpCenterLink: m })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
