var i = r(200651);
r(192379);
var a = r(481060),
    o = r(493773),
    s = r(367907),
    l = r(524444),
    u = r(297047),
    c = r(592125),
    d = r(944486),
    f = r(626135),
    p = r(981631),
    h = r(388032),
    _ = r(202776);
function m(e) {
    let { guild: n, message: r, onClose: m } = e,
        g = c.Z.getChannel(d.Z.getChannelId(n.id));
    if (
        ((0, o.Z)(() => {
            f.default.track(p.rMx.OPEN_POPOUT, {
                type: 'New Member Badge Popout',
                guild_id: n.id,
                channel_id: null == g ? void 0 : g.id
            });
        }),
        null == g)
    )
        return null;
    let E = () => {
        s.ZP.trackWithMetadata(p.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: r.author.id }), m(), (0, u.q)(r.author, g.id);
    };
    return (0, i.jsx)(l.W_, {
        children: (0, i.jsxs)('div', {
            className: _.popoutContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: _.mainContent,
                    children: [
                        (0, i.jsx)('div', {
                            className: _.iconContainer,
                            children: (0, i.jsx)(a.NewUserIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40
                            })
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: _.header,
                                    children: h.intl.string(h.t['v/OYd3'])
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: h.intl.string(h.t.Z85MlJ)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(a.Button, {
                    size: a.Button.Sizes.SMALL,
                    color: a.Button.Colors.BRAND,
                    className: _.ctaButton,
                    innerClassName: _.ctaButtonContent,
                    fullWidth: !0,
                    onClick: E,
                    children: h.intl.format(h.t['+xsVS0'], { username: r.author.username })
                })
            ]
        })
    });
}
n.Z = m;
