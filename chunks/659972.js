t.d(n, {
    Z: () => m,
    k: () => x
});
var l,
    i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    s = t(481060),
    o = t(565138),
    c = t(372769),
    d = t(857395),
    u = t(131154),
    _ = t(38981),
    h = t(820331),
    x = (((l = {})[(l.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (l[(l.TRENDING = 1)] = 'TRENDING'), (l[(l.PERSONALIZED = 2)] = 'PERSONALIZED'), (l[(l.USER_GUILDS = 3)] = 'USER_GUILDS'), (l[(l.FRIENDS_GUILDS = 4)] = 'FRIENDS_GUILDS'), (l[(l.INTRO_CARD = 5)] = 'INTRO_CARD'), (l[(l.FEATURED = 6)] = 'FEATURED'), l);
function m(e) {
    let { guild: n, stageInstance: t, showGuildPopout: l, setShowGuildPopout: a, handleGuildNameClick: x, source: m, speakers: g, speakerCount: b, audienceCount: v, channelName: N } = e,
        j = n.id;
    return (0, i.jsx)('div', {
        className: h.contentContainer,
        children: (0, i.jsxs)('div', {
            className: h.headerContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: h.guildInfoContainer,
                    children: [
                        (0, i.jsx)(d.Z, {
                            guildId: j,
                            shouldShow: l,
                            onRequestClose: () => a(!1),
                            children: () =>
                                (0, i.jsxs)(s.P3F, {
                                    className: h.flexContainerRow,
                                    onClick: x,
                                    children: [
                                        (0, i.jsx)(o.Z, {
                                            guild: n,
                                            size: o.Z.Sizes.MINI,
                                            className: h.guildIcon
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: h.flexContainerRow,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-sm/normal',
                                                    className: r()(h.guildName, { [h.disabled]: null == x }),
                                                    children: n.name
                                                }),
                                                (0, i.jsx)(c.Z, { guild: n })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsxs)('div', {
                            className: h.rightJustifiedContent,
                            children: [
                                6 === m &&
                                    (0, i.jsx)('div', {
                                        className: h.featuredTag,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            className: h.featuredTagText,
                                            children: 'Featured'
                                        })
                                    }),
                                (0, i.jsx)(_.Z, {
                                    count: v,
                                    className: h.__invalid_audienceCount
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(s.Text, {
                    color: 'header-primary',
                    variant: 'text-lg/semibold',
                    className: h.topicText,
                    children: t.topic
                }),
                (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: h.description,
                    variant: 'text-sm/normal',
                    children: t.description
                }),
                (0, i.jsx)(u.Z, {
                    guild: n,
                    speakers: g,
                    speakerCount: b,
                    className: h.speakers
                }),
                null != N &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('hr', { className: h.divider }),
                            (0, i.jsxs)('div', {
                                className: h.footer,
                                children: [
                                    (0, i.jsx)(s.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20,
                                        className: h.icon
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        color: 'header-secondary',
                                        className: h.__invalid_label,
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
