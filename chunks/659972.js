t.d(n, {
    Z: function () {
        return f;
    },
    k: function () {
        return i;
    }
});
var l,
    i,
    a = t(200651);
t(192379);
var r = t(120356),
    o = t.n(r),
    s = t(481060),
    c = t(565138),
    d = t(372769),
    u = t(857395),
    m = t(131154),
    x = t(38981),
    h = t(820331);
function f(e) {
    let { guild: n, stageInstance: t, showGuildPopout: l, setShowGuildPopout: i, handleGuildNameClick: r, source: f, speakers: g, speakerCount: v, audienceCount: _, channelName: I } = e,
        j = n.id;
    return (0, a.jsx)('div', {
        className: h.contentContainer,
        children: (0, a.jsxs)('div', {
            className: h.headerContainer,
            children: [
                (0, a.jsxs)('div', {
                    className: h.guildInfoContainer,
                    children: [
                        (0, a.jsx)(u.Z, {
                            guildId: j,
                            shouldShow: l,
                            onRequestClose: () => i(!1),
                            children: () =>
                                (0, a.jsxs)(s.Clickable, {
                                    className: h.flexContainerRow,
                                    onClick: r,
                                    children: [
                                        (0, a.jsx)(c.Z, {
                                            guild: n,
                                            size: c.Z.Sizes.MINI,
                                            className: h.guildIcon
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: h.flexContainerRow,
                                            children: [
                                                (0, a.jsx)(s.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-sm/normal',
                                                    className: o()(h.guildName, { [h.disabled]: null == r }),
                                                    children: n.name
                                                }),
                                                (0, a.jsx)(d.Z, { guild: n })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, a.jsxs)('div', {
                            className: h.rightJustifiedContent,
                            children: [
                                6 === f &&
                                    (0, a.jsx)('div', {
                                        className: h.featuredTag,
                                        children: (0, a.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            className: h.featuredTagText,
                                            children: 'Featured'
                                        })
                                    }),
                                (0, a.jsx)(x.Z, {
                                    count: _,
                                    className: h.__invalid_audienceCount
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsx)(s.Text, {
                    color: 'header-primary',
                    variant: 'text-lg/semibold',
                    className: h.topicText,
                    children: t.topic
                }),
                (0, a.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: h.description,
                    variant: 'text-sm/normal',
                    children: t.description
                }),
                (0, a.jsx)(m.Z, {
                    guild: n,
                    speakers: g,
                    speakerCount: v,
                    className: h.speakers
                }),
                null != I &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)('hr', { className: h.divider }),
                            (0, a.jsxs)('div', {
                                className: h.footer,
                                children: [
                                    (0, a.jsx)(s.StageIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20,
                                        className: h.icon
                                    }),
                                    (0, a.jsx)(s.Text, {
                                        color: 'header-secondary',
                                        className: h.__invalid_label,
                                        variant: 'text-sm/normal',
                                        children: I
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
((l = i || (i = {}))[(l.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (l[(l.TRENDING = 1)] = 'TRENDING'), (l[(l.PERSONALIZED = 2)] = 'PERSONALIZED'), (l[(l.USER_GUILDS = 3)] = 'USER_GUILDS'), (l[(l.FRIENDS_GUILDS = 4)] = 'FRIENDS_GUILDS'), (l[(l.INTRO_CARD = 5)] = 'INTRO_CARD'), (l[(l.FEATURED = 6)] = 'FEATURED');
