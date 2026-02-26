"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(827734),
    a = n(397927),
    o = n(565645),
    d = n(975807),
    c = n(263063),
    u = n(860689),
    m = n(452499),
    g = n(477470),
    x = n(35275),
    h = n(985018),
    _ = n(982169);
function p(e) {
    let { subscribers: t } = e;
    return (0, i.jsxs)("div", {
        className: _.D$,
        children: [
            (0, i.jsx)("div", {
                className: _.DM,
                children: (0, i.jsx)(a.Text, { variant: "text-md/normal", color: "always-white", children: t }),
            }),
            (0, i.jsxs)("div", {
                className: _.Dn,
                children: [
                    (0, i.jsx)(x.A, { color: r.A.colors.WHITE.css }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: h.intl.string(h.t["3NNXPW"]),
                    }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: s, subscriberCount: l } = e,
        r = (0, u.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t, icon: n });
    return (0, i.jsxs)("div", {
        className: _.hz,
        children: [
            (0, i.jsx)(c.Ay, { className: _.al, iconSrc: s, guild: r, size: c.Ay.Sizes.LARGE }),
            (0, i.jsxs)("div", {
                className: _.PY,
                children: [
                    (0, i.jsx)(a.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                    null != l && (0, i.jsx)(p, { subscribers: l }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: s } = e;
    return (0, i.jsxs)("div", {
        className: _.GX,
        children: [
            (0, i.jsx)(a.Text, { variant: "text-lg/normal", color: "interactive-text-active", children: t }),
            (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                children: h.intl.format(h.t.m0b6Kj, {
                    attributionName: n,
                    attributionTitle: s ?? h.intl.string(h.t.pclUFJ),
                }),
            }),
        ],
    });
}
function j(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: s } = e,
        r = null != t && t.length > 0,
        c = () => {
            null != s && (0, d.A)(s);
        };
    return (0, i.jsx)("div", {
        className: _.AC,
        children: r
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(a.Text, {
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: _.JE,
                          children: h.intl.string(h.t.wg53L8),
                      }),
                      (0, i.jsxs)("div", {
                          className: _.lZ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: l()(_.fP, null != n && _.ow),
                                  children: [
                                      t.map((e) =>
                                          (0, i.jsx)(
                                              o.A,
                                              {
                                                  className: _.Zg,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated,
                                              },
                                              e.id,
                                          ),
                                      ),
                                      null != n &&
                                          (0, i.jsx)("div", {
                                              className: _.Ss,
                                              children: (0, i.jsxs)(a.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "text-default",
                                                  children: ["+", n],
                                              }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: _.Yy,
                                  children: (0, i.jsx)(a.Button, {
                                      variant: "secondary",
                                      disabled: null == s,
                                      onClick: c,
                                      text: h.intl.string(h.t.mQ2IGa),
                                      fullWidth: !0,
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsx)("div", {
                  className: _.Yy,
                  children: (0, i.jsx)(a.Button, {
                      variant: "secondary",
                      disabled: null == s,
                      onClick: c,
                      text: h.intl.string(h.t.mQ2IGa),
                      fullWidth: !0,
                  }),
              }),
    });
}
function N(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: s, quote_attribution: l, quote_attribution_title: r } = t,
        o = (0, m.A)(n, 4, 60),
        { isLoading: d, hasAllImperativeDetails: c } = o;
    if (d) return (0, i.jsx)("div", { className: _.w_, children: (0, i.jsx)(a.y$y, {}) });
    if (!c) return null;
    let {
        guildIcon: u,
        guildName: g,
        guildAvatarUrl: x,
        subscriberCount: h,
        emojisToShow: p,
        notShownEmojiCount: N,
        storePageUrl: E,
    } = o.details;
    return (0, i.jsxs)("div", {
        className: _.w_,
        children: [
            (0, i.jsx)(A, { guildIcon: u, guildName: g, guildAvatarUrl: x, subscriberCount: h }),
            (0, i.jsx)(f, { quote: s, quoteAttribution: l, quoteAttributionTitle: r }),
            (0, i.jsx)(j, { emojisToShow: p, notShownEmojiCount: N, storePageUrl: E }),
        ],
    });
}
function E(e) {
    let { highlightedCreators: t } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: h.intl.string(h.t["tJp+QV"]),
            }),
            (0, i.jsx)(a.hKd, { size: 24 }),
            (0, i.jsx)(g.A, {
                carouselClassName: _.g9,
                items: t,
                renderItem: (e) => (0, i.jsx)(N, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7e3,
            }),
        ],
    });
}
