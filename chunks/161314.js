n.d(t, { Z: () => N }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(692547),
    u = n(159691),
    d = n(481060),
    f = n(367907),
    p = n(213609),
    _ = n(565138),
    m = n(267101),
    h = n(336197),
    g = n(661824),
    E = n(430824),
    b = n(626135),
    y = n(76535),
    O = n(866104),
    v = n(886176),
    S = n(981631),
    I = n(388032),
    T = n(736636);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e) {
    var t;
    let { guildId: n } = e,
        a = (0, l.e7)([E.Z], () => E.Z.getGuild(n)),
        { loading: A, subscriptionsSettings: N } = (0, y.H)(n),
        { listingsLoaded: P } = (0, m.eD)(n),
        R = (0, m.ue)(n, { publishedOnly: !0 }),
        D = i.useCallback(async () => {
            b.default.track(S.rMx.GUILD_SHOP_EMBED_CLICKED, C({}, (0, f.hH)(n))), await (0, h.Z)(S.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, p.Z)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.GUILD_SHOP_EMBED,
        },
        { disableTrack: null == a },
    );
    let w = R.length > 0 ? new Date(Math.min(...R.map((e) => Date.parse(e.published_at)))) : void 0;
    return A || !P
        ? (0, r.jsx)("div", {
              className: o()(T.guildShopEmbed, T.spinnerContainer),
              children: (0, r.jsx)(d.$jN, {}),
          })
        : null == a || null == N
          ? null
          : (0, r.jsxs)("div", {
                className: T.guildShopEmbed,
                children: [
                    (0, r.jsx)(O.Z, { coverImageAsset: null != (t = N.cover_image_asset) ? t : null }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsxs)("div", {
                        className: T.serverShopLabel,
                        children: [
                            (0, r.jsx)(v.Z, {
                                height: "16px",
                                width: "16px",
                                color: c.Z.colors.INTERACTIVE_NORMAL.css,
                            }),
                            (0, r.jsx)(d.Heading, {
                                variant: "heading-sm/semibold",
                                color: "interactive-normal",
                                className: T.serverShopLabelText,
                                children: I.intl.string(I.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: I.intl.format(I.t.NZeik9, { guildName: a.name }),
                    }),
                    (0, r.jsx)(d.LZC, { size: 4 }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: N.description,
                    }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsx)(g.Z, {}),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsxs)("div", {
                        className: T.guildShopEmbedFooter,
                        children: [
                            (0, r.jsx)(_.Z, { guild: a }),
                            (0, r.jsxs)("ul", {
                                className: T.guildShopSummary,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: I.intl.format(I.t.tKZNlb, { listingCount: R.length }),
                                        }),
                                    }),
                                    null != w &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: I.intl.format(I.t["kXr8+b"], {
                                                    createdYear: w.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: T.guildShopEmbedCta,
                                children: (0, r.jsx)(u.zxk, {
                                    onClick: D,
                                    icon: v.P,
                                    text: I.intl.string(I.t.jXx1CC),
                                }),
                            }),
                        ],
                    }),
                ],
            });
}
