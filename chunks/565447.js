n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(827734),
    a = n(397927),
    c = n(565645),
    o = n(975807),
    d = n(263063),
    u = n(860689),
    f = n(452499),
    g = n(477470),
    b = n(35275),
    m = n(985018),
    p = n(518863);
function x(e) {
    let { subscribers: t } = e;
    return (0, r.jsxs)("div", {
        className: p.D$,
        children: [
            (0, r.jsx)("div", {
                className: p.DM,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: t,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.Dn,
                children: [
                    (0, r.jsx)(b.A, { color: s.A.colors.WHITE.css }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: m.intl.string(m.t["3NNXPW"]),
                    }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: i, subscriberCount: l } = e,
        s = (0, u.dangerouslyConstructGuildRecordFromUntypedObject)({
            name: t,
            icon: n,
        });
    return (0, r.jsxs)("div", {
        className: p.hz,
        children: [
            (0, r.jsx)(d.A, {
                className: p.al,
                iconSrc: i,
                guild: s,
                size: d.A.Sizes.LARGE,
            }),
            (0, r.jsxs)("div", {
                className: p.PY,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    null != l && (0, r.jsx)(x, { subscribers: l }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: i } = e;
    return (0, r.jsxs)("div", {
        className: p.GX,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-lg/normal",
                color: "interactive-text-active",
                children: t,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                children: m.intl.format(m.t.m0b6Kj, {
                    attributionName: n,
                    attributionTitle: null != i ? i : m.intl.string(m.t.pclUFJ),
                }),
            }),
        ],
    });
}
function O(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: i } = e,
        s = null != t && t.length > 0,
        d = () => {
            null != i && (0, o.A)(i);
        };
    return (0, r.jsx)("div", {
        className: p.AC,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(a.Text, {
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: p.JE,
                          children: m.intl.string(m.t.wg53L8),
                      }),
                      (0, r.jsxs)("div", {
                          className: p.lZ,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: l()(p.fP, null != n && p.ow),
                                  children: [
                                      t.map((e) =>
                                          (0, r.jsx)(
                                              c.A,
                                              {
                                                  className: p.Zg,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated,
                                              },
                                              e.id,
                                          ),
                                      ),
                                      null != n &&
                                          (0, r.jsx)("div", {
                                              className: p.Ss,
                                              children: (0, r.jsxs)(a.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "text-default",
                                                  children: ["+", n],
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: p.Yy,
                                  children: (0, r.jsx)(a.Button, {
                                      variant: "secondary",
                                      disabled: null == i,
                                      onClick: d,
                                      text: m.intl.string(m.t.mQ2IGa),
                                      fullWidth: !0,
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : (0, r.jsx)("div", {
                  className: p.Yy,
                  children: (0, r.jsx)(a.Button, {
                      variant: "secondary",
                      disabled: null == i,
                      onClick: d,
                      text: m.intl.string(m.t.mQ2IGa),
                      fullWidth: !0,
                  }),
              }),
    });
}
function y(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: i, quote_attribution: l, quote_attribution_title: s } = t,
        c = (0, f.A)(n, 4, 60),
        { isLoading: o, hasAllImperativeDetails: d } = c;
    if (o)
        return (0, r.jsx)("div", {
            className: p.w_,
            children: (0, r.jsx)(a.y$y, {}),
        });
    if (!d) return null;
    let {
        guildIcon: u,
        guildName: g,
        guildAvatarUrl: b,
        subscriberCount: m,
        emojisToShow: x,
        notShownEmojiCount: y,
        storePageUrl: v,
    } = c.details;
    return (0, r.jsxs)("div", {
        className: p.w_,
        children: [
            (0, r.jsx)(h, {
                guildIcon: u,
                guildName: g,
                guildAvatarUrl: b,
                subscriberCount: m,
            }),
            (0, r.jsx)(j, {
                quote: i,
                quoteAttribution: l,
                quoteAttributionTitle: s,
            }),
            (0, r.jsx)(O, {
                emojisToShow: x,
                notShownEmojiCount: y,
                storePageUrl: v,
            }),
        ],
    });
}
function v(e) {
    let { highlightedCreators: t } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: m.intl.string(m.t["tJp+QV"]),
            }),
            (0, r.jsx)(a.hKd, { size: 24 }),
            (0, r.jsx)(g.A, {
                carouselClassName: p.g9,
                items: t,
                renderItem: (e) => (0, r.jsx)(y, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7000,
            }),
        ],
    });
}
