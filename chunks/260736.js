n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(67390),
    a = n(896835),
    o = n(447564),
    s = n(63063),
    c = n(739566),
    d = n(942951),
    u = n(834129),
    m = n(981631),
    h = n(388032),
    f = n(505984);
function p(e) {
    let { compact: t, message: n, channel: p } = e,
        _ = (0, c.ZP)(n),
        g = (0, d.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: p.guild_id,
            messageId: n.id
        })(_),
        E = (0, a.j)('HDStreamingUpgradedMessage'),
        C = () => (0, o.openHDPotionModal)(p, 'HDStreamingUpgradedMessage'),
        I = E ? C : s.Z.getArticleURL(m.BhN.HD_STREAMING_POTION);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: f.parentContainer,
                children: (0, i.jsx)(u.Z, {
                    iconNode: (0, i.jsx)(r.PotionIcon, { size: 'sm' }),
                    timestamp: n.timestamp,
                    compact: t,
                    children: h.intl.format(h.t['u0qJ4+'], {
                        actorName: _.nick,
                        actorHook: g
                    })
                })
            }),
            (0, i.jsxs)(r.Clickable, {
                onClick: () => {
                    E ? C() : window.open(s.Z.getArticleURL(m.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: f.embed,
                children: [
                    (0, i.jsx)(l.Z, {}),
                    (0, i.jsxs)('div', {
                        className: f.text,
                        children: [
                            (0, i.jsx)(r.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: f.title,
                                children: h.intl.string(h.t['Fh/mk5'])
                            }),
                            (0, i.jsx)(r.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: h.intl.format(h.t['bmGF+f'], { helpCenterLink: I })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
