n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(827734),
    a = n(834730),
    o = n(534514),
    d = n(821609),
    c = n(289873),
    u = n(696986),
    m = n(565645),
    g = n(975807),
    h = n(263063),
    x = n(860689),
    _ = n(452499),
    p = n(477470),
    A = n(35275),
    E = n(985018),
    f = n(357518);
function j(e) {
    let { subscribers: t } = e;
    return (0, i.jsxs)("div", {
        className: f.D$,
        children: [
            (0, i.jsx)("div", {
                className: f.DM,
                children: (0, i.jsx)(a.E, { variant: "text-md/normal", color: "always-white", children: t }),
            }),
            (0, i.jsxs)("div", {
                className: f.Dn,
                children: [
                    (0, i.jsx)(A.A, { color: r.A.colors.WHITE.css }),
                    (0, i.jsx)(a.E, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: E.intl.string(E.t["3NNXPW"]),
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: l, subscriberCount: s } = e,
        r = (0, x.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t, icon: n });
    return (0, i.jsxs)("div", {
        className: f.hz,
        children: [
            (0, i.jsx)(h.Ay, { className: f.al, iconSrc: l, guild: r, size: h.Ay.Sizes.LARGE }),
            (0, i.jsxs)("div", {
                className: f.PY,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                    null != s && (0, i.jsx)(j, { subscribers: s }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: l } = e;
    return (0, i.jsxs)("div", {
        className: f.GX,
        children: [
            (0, i.jsx)(a.E, { variant: "text-lg/normal", color: "interactive-text-active", children: t }),
            (0, i.jsx)(a.E, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                children: E.intl.format(E.t.m0b6Kj, {
                    attributionName: n,
                    attributionTitle: l ?? E.intl.string(E.t.pclUFJ),
                }),
            }),
        ],
    });
}
function C(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: l } = e,
        r = null != t && t.length > 0,
        o = () => {
            null != l && (0, g.A)(l);
        };
    return (0, i.jsx)("div", {
        className: f.AC,
        children: r
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(a.E, {
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: f.JE,
                          children: E.intl.string(E.t.wg53L8),
                      }),
                      (0, i.jsxs)("div", {
                          className: f.lZ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: s()(f.fP, null != n && f.ow),
                                  children: [
                                      t.map((e) =>
                                          (0, i.jsx)(
                                              m.A,
                                              {
                                                  className: f.Zg,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated,
                                              },
                                              e.id,
                                          ),
                                      ),
                                      null != n &&
                                          (0, i.jsx)("div", {
                                              className: f.Ss,
                                              children: (0, i.jsxs)(a.E, {
                                                  variant: "text-md/semibold",
                                                  color: "text-default",
                                                  children: ["+", n],
                                              }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: f.Yy,
                                  children: (0, i.jsx)(d.$, {
                                      variant: "secondary",
                                      disabled: null == l,
                                      onClick: o,
                                      text: E.intl.string(E.t.mQ2IGa),
                                      fullWidth: !0,
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsx)("div", {
                  className: f.Yy,
                  children: (0, i.jsx)(d.$, {
                      variant: "secondary",
                      disabled: null == l,
                      onClick: o,
                      text: E.intl.string(E.t.mQ2IGa),
                      fullWidth: !0,
                  }),
              }),
    });
}
function b(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: l, quote_attribution: s, quote_attribution_title: r } = t,
        a = (0, _.A)(n, 4, 60),
        { isLoading: o, hasAllImperativeDetails: d } = a;
    if (o) return (0, i.jsx)("div", { className: f.w_, children: (0, i.jsx)(c.y, {}) });
    if (!d) return null;
    let {
        guildIcon: u,
        guildName: m,
        guildAvatarUrl: g,
        subscriberCount: h,
        emojisToShow: x,
        notShownEmojiCount: p,
        storePageUrl: A,
    } = a.details;
    return (0, i.jsxs)("div", {
        className: f.w_,
        children: [
            (0, i.jsx)(N, { guildIcon: u, guildName: m, guildAvatarUrl: g, subscriberCount: h }),
            (0, i.jsx)(I, { quote: l, quoteAttribution: s, quoteAttributionTitle: r }),
            (0, i.jsx)(C, { emojisToShow: x, notShownEmojiCount: p, storePageUrl: A }),
        ],
    });
}
function v(e) {
    let { highlightedCreators: t } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(o.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: E.intl.string(E.t["tJp+QV"]),
            }),
            (0, i.jsx)(u.h, { size: 24 }),
            (0, i.jsx)(p.A, {
                carouselClassName: f.g9,
                items: t,
                renderItem: (e) => (0, i.jsx)(b, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7e3,
            }),
        ],
    });
}
