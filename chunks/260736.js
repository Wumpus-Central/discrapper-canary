n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(67390),
    r = n(896835),
    s = n(447564),
    o = n(63063),
    c = n(739566),
    d = n(942951),
    u = n(834129),
    m = n(981631),
    _ = n(388032),
    h = n(46918);
function p(e) {
    let { compact: t, message: n, channel: p } = e,
        g = (0, c.ZP)(n),
        f = (0, d.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: p.guild_id,
            messageId: n.id
        })(g),
        x = (0, r.j)('HDStreamingUpgradedMessage'),
        C = () => (0, s.k)(p, 'HDStreamingUpgradedMessage'),
        v = x ? C : o.Z.getArticleURL(m.BhN.HD_STREAMING_POTION);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: h.parentContainer,
                children: (0, i.jsx)(u.Z, {
                    iconNode: (0, i.jsx)(l.hh5, { size: 'sm' }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: _.intl.format(_.t['u0qJ4+'], {
                        actorName: g.nick,
                        actorHook: f
                    })
                })
            }),
            (0, i.jsxs)(l.P3F, {
                onClick: () => {
                    x ? C() : window.open(o.Z.getArticleURL(m.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: h.embed,
                children: [
                    (0, i.jsx)(a.Z, {}),
                    (0, i.jsxs)('div', {
                        className: h.text,
                        children: [
                            (0, i.jsx)(l.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: h.title,
                                children: _.intl.string(_.t['Fh/mk5'])
                            }),
                            (0, i.jsx)(l.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: _.intl.format(_.t['bmGF+f'], { helpCenterLink: v })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
