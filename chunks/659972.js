n.d(t, {
    Z: () => b,
    k: () => g,
}),
    n(953529);
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    c = n(565138),
    d = n(372769),
    u = n(857395),
    x = n(131154),
    m = n(38981),
    h = n(302592),
    g =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.TRENDING = 1)] = "TRENDING"),
        (r[(r.PERSONALIZED = 2)] = "PERSONALIZED"),
        (r[(r.USER_GUILDS = 3)] = "USER_GUILDS"),
        (r[(r.FRIENDS_GUILDS = 4)] = "FRIENDS_GUILDS"),
        (r[(r.INTRO_CARD = 5)] = "INTRO_CARD"),
        (r[(r.FEATURED = 6)] = "FEATURED"),
        r);
function b(e) {
    let {
            guild: t,
            stageInstance: n,
            showGuildPopout: r,
            setShowGuildPopout: a,
            handleGuildNameClick: g,
            source: b,
            speakers: p,
            speakerCount: f,
            audienceCount: v,
            channelName: _,
        } = e,
        j = l.useRef(null),
        N = t.id;
    return (0, i.jsx)("div", {
        className: h.contentContainer,
        children: (0, i.jsxs)("div", {
            className: h.headerContainer,
            children: [
                (0, i.jsxs)("div", {
                    className: h.guildInfoContainer,
                    children: [
                        (0, i.jsx)(u.Z, {
                            guildId: N,
                            shouldShow: r,
                            onRequestClose: () => a(!1),
                            targetElementRef: j,
                            children: () =>
                                (0, i.jsxs)(s.P3F, {
                                    className: h.flexContainerRow,
                                    onClick: g,
                                    innerRef: j,
                                    children: [
                                        (0, i.jsx)(c.Z, {
                                            guild: t,
                                            size: c.Z.Sizes.MINI,
                                            className: h.guildIcon,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: h.flexContainerRow,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    color: "header-secondary",
                                                    variant: "text-sm/normal",
                                                    className: o()(h.guildName, { [h.disabled]: null == g }),
                                                    children: t.name,
                                                }),
                                                (0, i.jsx)(d.Z, { guild: t }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: h.rightJustifiedContent,
                            children: [
                                6 === b &&
                                    (0, i.jsx)("div", {
                                        className: h.featuredTag,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            className: h.featuredTagText,
                                            children: "Featured",
                                        }),
                                    }),
                                (0, i.jsx)(m.Z, {
                                    count: v,
                                    className: h.__invalid_audienceCount,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-lg/semibold",
                    className: h.topicText,
                    children: n.topic,
                }),
                (0, i.jsx)(s.Text, {
                    color: "header-secondary",
                    className: h.description,
                    variant: "text-sm/normal",
                    children: n.description,
                }),
                (0, i.jsx)(x.Z, {
                    guild: t,
                    speakers: p,
                    speakerCount: f,
                    className: h.speakers,
                }),
                null != _ &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("hr", { className: h.divider }),
                            (0, i.jsxs)("div", {
                                className: h.footer,
                                children: [
                                    (0, i.jsx)(s.ewx, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 20,
                                        height: 20,
                                        className: h.icon,
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        color: "header-secondary",
                                        className: h.__invalid_label,
                                        variant: "text-sm/normal",
                                        children: _,
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
