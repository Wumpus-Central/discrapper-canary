t.d(n, {
    Z: () => x,
    k: () => h
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
    m = t(38981),
    _ = t(585898),
    h = (((l = {})[(l.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (l[(l.TRENDING = 1)] = 'TRENDING'), (l[(l.PERSONALIZED = 2)] = 'PERSONALIZED'), (l[(l.USER_GUILDS = 3)] = 'USER_GUILDS'), (l[(l.FRIENDS_GUILDS = 4)] = 'FRIENDS_GUILDS'), (l[(l.INTRO_CARD = 5)] = 'INTRO_CARD'), (l[(l.FEATURED = 6)] = 'FEATURED'), l);
function x(e) {
    let { guild: n, stageInstance: t, showGuildPopout: l, setShowGuildPopout: a, handleGuildNameClick: h, source: x, speakers: g, speakerCount: v, audienceCount: b, channelName: j } = e,
        N = n.id;
    return (0, i.jsx)('div', {
        className: _.contentContainer,
        children: (0, i.jsxs)('div', {
            className: _.headerContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: _.guildInfoContainer,
                    children: [
                        (0, i.jsx)(d.Z, {
                            guildId: N,
                            shouldShow: l,
                            onRequestClose: () => a(!1),
                            children: () =>
                                (0, i.jsxs)(s.P3F, {
                                    className: _.flexContainerRow,
                                    onClick: h,
                                    children: [
                                        (0, i.jsx)(o.Z, {
                                            guild: n,
                                            size: o.Z.Sizes.MINI,
                                            className: _.guildIcon
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: _.flexContainerRow,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-sm/normal',
                                                    className: r()(_.guildName, { [_.disabled]: null == h }),
                                                    children: n.name
                                                }),
                                                (0, i.jsx)(c.Z, { guild: n })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsxs)('div', {
                            className: _.rightJustifiedContent,
                            children: [
                                6 === x &&
                                    (0, i.jsx)('div', {
                                        className: _.featuredTag,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            className: _.featuredTagText,
                                            children: 'Featured'
                                        })
                                    }),
                                (0, i.jsx)(m.Z, {
                                    count: b,
                                    className: _.__invalid_audienceCount
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(s.Text, {
                    color: 'header-primary',
                    variant: 'text-lg/semibold',
                    className: _.topicText,
                    children: t.topic
                }),
                (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: _.description,
                    variant: 'text-sm/normal',
                    children: t.description
                }),
                (0, i.jsx)(u.Z, {
                    guild: n,
                    speakers: g,
                    speakerCount: v,
                    className: _.speakers
                }),
                null != j &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('hr', { className: _.divider }),
                            (0, i.jsxs)('div', {
                                className: _.footer,
                                children: [
                                    (0, i.jsx)(s.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20,
                                        className: _.icon
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        color: 'header-secondary',
                                        className: _.__invalid_label,
                                        variant: 'text-sm/normal',
                                        children: j
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
