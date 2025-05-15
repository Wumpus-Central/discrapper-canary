n.d(t, {
    Z: () => b,
    k: () => m
}),
    n(953529);
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    c = n(481060),
    s = n(565138),
    d = n(372769),
    u = n(857395),
    h = n(131154),
    g = n(38981),
    _ = n(7394),
    m = (((r = {})[(r.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (r[(r.TRENDING = 1)] = 'TRENDING'), (r[(r.PERSONALIZED = 2)] = 'PERSONALIZED'), (r[(r.USER_GUILDS = 3)] = 'USER_GUILDS'), (r[(r.FRIENDS_GUILDS = 4)] = 'FRIENDS_GUILDS'), (r[(r.INTRO_CARD = 5)] = 'INTRO_CARD'), (r[(r.FEATURED = 6)] = 'FEATURED'), r);
function b(e) {
    let { guild: t, stageInstance: n, showGuildPopout: r, setShowGuildPopout: a, handleGuildNameClick: m, source: b, speakers: f, speakerCount: x, audienceCount: p, channelName: v } = e,
        j = l.useRef(null),
        N = t.id;
    return (0, i.jsx)('div', {
        className: _.contentContainer,
        children: (0, i.jsxs)('div', {
            className: _.headerContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: _.guildInfoContainer,
                    children: [
                        (0, i.jsx)(u.Z, {
                            guildId: N,
                            shouldShow: r,
                            onRequestClose: () => a(!1),
                            targetElementRef: j,
                            children: () =>
                                (0, i.jsxs)(c.P3F, {
                                    className: _.flexContainerRow,
                                    onClick: m,
                                    innerRef: j,
                                    children: [
                                        (0, i.jsx)(s.Z, {
                                            guild: t,
                                            size: s.Z.Sizes.MINI,
                                            className: _.guildIcon
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: _.flexContainerRow,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-sm/normal',
                                                    className: o()(_.guildName, { [_.disabled]: null == m }),
                                                    children: t.name
                                                }),
                                                (0, i.jsx)(d.Z, { guild: t })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsxs)('div', {
                            className: _.rightJustifiedContent,
                            children: [
                                6 === b &&
                                    (0, i.jsx)('div', {
                                        className: _.featuredTag,
                                        children: (0, i.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            className: _.featuredTagText,
                                            children: 'Featured'
                                        })
                                    }),
                                (0, i.jsx)(g.Z, {
                                    count: p,
                                    className: _.__invalid_audienceCount
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.Text, {
                    color: 'header-primary',
                    variant: 'text-lg/semibold',
                    className: _.topicText,
                    children: n.topic
                }),
                (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: _.description,
                    variant: 'text-sm/normal',
                    children: n.description
                }),
                (0, i.jsx)(h.Z, {
                    guild: t,
                    speakers: f,
                    speakerCount: x,
                    className: _.speakers
                }),
                null != v &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('hr', { className: _.divider }),
                            (0, i.jsxs)('div', {
                                className: _.footer,
                                children: [
                                    (0, i.jsx)(c.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20,
                                        className: _.icon
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        className: _.__invalid_label,
                                        variant: 'text-sm/normal',
                                        children: v
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
