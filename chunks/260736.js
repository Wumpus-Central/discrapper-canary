n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(67390),
    a = n(896835),
    o = n(447564),
    s = n(63063),
    c = n(739566),
    u = n(942951),
    d = n(834129),
    p = n(981631),
    m = n(388032),
    f = n(861477);
function _(e) {
    let { compact: t, message: n, channel: _ } = e,
        h = (0, c.ZP)(n),
        g = (0, u.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: _.guild_id,
            messageId: n.id
        })(h),
        b = (0, a.j)('HDStreamingUpgradedMessage'),
        E = () => (0, o.k)(_, 'HDStreamingUpgradedMessage'),
        y = b ? E : s.Z.getArticleURL(p.BhN.HD_STREAMING_POTION);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: f.parentContainer,
                children: (0, r.jsx)(d.Z, {
                    iconNode: (0, r.jsx)(i.hh5, { size: 'sm' }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: m.intl.format(m.t['u0qJ4+'], {
                        actorName: h.nick,
                        actorHook: g
                    })
                })
            }),
            (0, r.jsxs)(i.P3F, {
                onClick: () => {
                    b ? E() : window.open(s.Z.getArticleURL(p.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: f.embed,
                children: [
                    (0, r.jsx)(l.Z, {}),
                    (0, r.jsxs)('div', {
                        className: f.text,
                        children: [
                            (0, r.jsx)(i.Text, {
                                color: 'text-default',
                                variant: 'text-sm/semibold',
                                className: f.title,
                                children: m.intl.string(m.t['Fh/mk5'])
                            }),
                            (0, r.jsx)(i.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: m.intl.format(m.t['bmGF+f'], { helpCenterLink: y })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
