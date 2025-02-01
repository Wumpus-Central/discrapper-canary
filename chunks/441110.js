n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(493773),
    s = n(367907),
    o = n(524444),
    l = n(297047),
    u = n(592125),
    c = n(944486),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(202776);
let h = function (e) {
    let { guild: t, message: n, onClose: h } = e,
        m = u.Z.getChannel(c.Z.getChannelId(t.id));
    if (
        ((0, a.Z)(() => {
            d.default.track(f.rMx.OPEN_POPOUT, {
                type: 'New Member Badge Popout',
                guild_id: t.id,
                channel_id: null == m ? void 0 : m.id
            });
        }),
        null == m)
    )
        return null;
    let g = () => {
        s.ZP.trackWithMetadata(f.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }), h(), (0, l.q)(n.author, m.id);
    };
    return (0, i.jsx)(o.W_, {
        children: (0, i.jsxs)('div', {
            className: p.popoutContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: p.mainContent,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.iconContainer,
                            children: (0, i.jsx)(r.hg2, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40
                            })
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: p.header,
                                    children: _.intl.string(_.t['v/OYd3'])
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    children: _.intl.string(_.t.Z85MlJ)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(r.zxk, {
                    size: r.zxk.Sizes.SMALL,
                    color: r.zxk.Colors.BRAND,
                    className: p.ctaButton,
                    innerClassName: p.ctaButtonContent,
                    fullWidth: !0,
                    onClick: g,
                    children: _.intl.format(_.t['+xsVS0'], { username: n.author.username })
                })
            ]
        })
    });
};
