n.d(t, {
    Z: () => m,
    k: () => _
}),
    n(266796);
var r,
    i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(565138),
    s = n(372769),
    d = n(857395),
    u = n(131154),
    h = n(38981),
    g = n(7394),
    _ = (((r = {})[(r.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (r[(r.TRENDING = 1)] = 'TRENDING'), (r[(r.PERSONALIZED = 2)] = 'PERSONALIZED'), (r[(r.USER_GUILDS = 3)] = 'USER_GUILDS'), (r[(r.FRIENDS_GUILDS = 4)] = 'FRIENDS_GUILDS'), (r[(r.INTRO_CARD = 5)] = 'INTRO_CARD'), (r[(r.FEATURED = 6)] = 'FEATURED'), r);
function m(e) {
    let { guild: t, stageInstance: n, showGuildPopout: r, setShowGuildPopout: l, handleGuildNameClick: _, source: m, speakers: b, speakerCount: x, audienceCount: f, channelName: p } = e,
        N = t.id;
    return (0, i.jsx)('div', {
        className: g.contentContainer,
        children: (0, i.jsxs)('div', {
            className: g.headerContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: g.guildInfoContainer,
                    children: [
                        (0, i.jsx)(d.Z, {
                            guildId: N,
                            shouldShow: r,
                            onRequestClose: () => l(!1),
                            children: () =>
                                (0, i.jsxs)(o.P3F, {
                                    className: g.flexContainerRow,
                                    onClick: _,
                                    children: [
                                        (0, i.jsx)(c.Z, {
                                            guild: t,
                                            size: c.Z.Sizes.MINI,
                                            className: g.guildIcon
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: g.flexContainerRow,
                                            children: [
                                                (0, i.jsx)(o.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-sm/normal',
                                                    className: a()(g.guildName, { [g.disabled]: null == _ }),
                                                    children: t.name
                                                }),
                                                (0, i.jsx)(s.Z, { guild: t })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsxs)('div', {
                            className: g.rightJustifiedContent,
                            children: [
                                6 === m &&
                                    (0, i.jsx)('div', {
                                        className: g.featuredTag,
                                        children: (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            className: g.featuredTagText,
                                            children: 'Featured'
                                        })
                                    }),
                                (0, i.jsx)(h.Z, {
                                    count: f,
                                    className: g.__invalid_audienceCount
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(o.Text, {
                    color: 'header-primary',
                    variant: 'text-lg/semibold',
                    className: g.topicText,
                    children: n.topic
                }),
                (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: g.description,
                    variant: 'text-sm/normal',
                    children: n.description
                }),
                (0, i.jsx)(u.Z, {
                    guild: t,
                    speakers: b,
                    speakerCount: x,
                    className: g.speakers
                }),
                null != p &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('hr', { className: g.divider }),
                            (0, i.jsxs)('div', {
                                className: g.footer,
                                children: [
                                    (0, i.jsx)(o.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20,
                                        className: g.icon
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        color: 'header-secondary',
                                        className: g.__invalid_label,
                                        variant: 'text-sm/normal',
                                        children: p
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
