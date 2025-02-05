t.d(n, {
    Z: () => x,
    k: () => h
});
var l,
    i = t(200651);
t(192379);
var r = t(120356),
    a = t.n(r),
    s = t(481060),
    o = t(565138),
    c = t(372769),
    d = t(857395),
    u = t(131154),
    _ = t(38981),
    m = t(820331),
    h = (((l = {})[(l.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (l[(l.TRENDING = 1)] = 'TRENDING'), (l[(l.PERSONALIZED = 2)] = 'PERSONALIZED'), (l[(l.USER_GUILDS = 3)] = 'USER_GUILDS'), (l[(l.FRIENDS_GUILDS = 4)] = 'FRIENDS_GUILDS'), (l[(l.INTRO_CARD = 5)] = 'INTRO_CARD'), (l[(l.FEATURED = 6)] = 'FEATURED'), l);
function x(e) {
    let { guild: n, stageInstance: t, showGuildPopout: l, setShowGuildPopout: r, handleGuildNameClick: h, source: x, speakers: g, speakerCount: v, audienceCount: b, channelName: N } = e,
        j = n.id;
    return (0, i.jsx)('div', {
        className: m.contentContainer,
        children: (0, i.jsxs)('div', {
            className: m.headerContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: m.guildInfoContainer,
                    children: [
                        (0, i.jsx)(d.Z, {
                            guildId: j,
                            shouldShow: l,
                            onRequestClose: () => r(!1),
                            children: () =>
                                (0, i.jsxs)(s.P3F, {
                                    className: m.flexContainerRow,
                                    onClick: h,
                                    children: [
                                        (0, i.jsx)(o.Z, {
                                            guild: n,
                                            size: o.Z.Sizes.MINI,
                                            className: m.guildIcon
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: m.flexContainerRow,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-sm/normal',
                                                    className: a()(m.guildName, { [m.disabled]: null == h }),
                                                    children: n.name
                                                }),
                                                (0, i.jsx)(c.Z, { guild: n })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsxs)('div', {
                            className: m.rightJustifiedContent,
                            children: [
                                6 === x &&
                                    (0, i.jsx)('div', {
                                        className: m.featuredTag,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            className: m.featuredTagText,
                                            children: 'Featured'
                                        })
                                    }),
                                (0, i.jsx)(_.Z, {
                                    count: b,
                                    className: m.__invalid_audienceCount
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(s.Text, {
                    color: 'header-primary',
                    variant: 'text-lg/semibold',
                    className: m.topicText,
                    children: t.topic
                }),
                (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: m.description,
                    variant: 'text-sm/normal',
                    children: t.description
                }),
                (0, i.jsx)(u.Z, {
                    guild: n,
                    speakers: g,
                    speakerCount: v,
                    className: m.speakers
                }),
                null != N &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('hr', { className: m.divider }),
                            (0, i.jsxs)('div', {
                                className: m.footer,
                                children: [
                                    (0, i.jsx)(s.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20,
                                        className: m.icon
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        color: 'header-secondary',
                                        className: m.__invalid_label,
                                        variant: 'text-sm/normal',
                                        children: N
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
