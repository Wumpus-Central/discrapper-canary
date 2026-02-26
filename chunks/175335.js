n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(110259),
    o = n(311907),
    d = n(827734),
    c = n(732955),
    u = n(397927),
    _ = n(58149),
    m = n(139286),
    h = n(263063),
    p = n(250627),
    g = n(22007),
    A = n(813516),
    x = n(71393),
    f = n(954571),
    C = n(722888),
    E = n(43136),
    I = n(575926),
    b = n(652215),
    T = n(985018),
    v = n(566457);
function S(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        { loading: r, subscriptionsSettings: S } = (0, C.G)(t),
        { listingsLoaded: y } = (0, p.bb)(t),
        N = (0, p.fZ)(t, { publishedOnly: !0 }),
        j = l.useCallback(async () => {
            f.default.track(b.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, _.H$)(t) }), await (0, g.A)(b.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, m.A)({ type: s.ImpressionTypes.VIEW, name: s.ImpressionNames.GUILD_SHOP_EMBED }, { disableTrack: null == n });
    let L = N.length > 0 ? new Date(Math.min(...N.map((e) => Date.parse(e.published_at)))) : void 0;
    return r || !y
        ? (0, i.jsx)("div", { className: a()(v.lm, v.dc), children: (0, i.jsx)(u.y$y, {}) })
        : null == n || null == S
          ? null
          : (0, i.jsxs)("div", {
                className: v.lm,
                children: [
                    (0, i.jsx)(E.C, { coverImageAsset: S.cover_image_asset ?? null }),
                    (0, i.jsx)(u.hKd, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: v.qs,
                        children: [
                            (0, i.jsx)(I.h, {
                                height: "16px",
                                width: "16px",
                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, i.jsx)(u.Heading, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: v.Nl,
                                children: T.intl.string(T.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, i.jsx)(u.hKd, { size: 16 }),
                    (0, i.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: T.intl.format(T.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, i.jsx)(u.hKd, { size: 4 }),
                    (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: S.description,
                    }),
                    (0, i.jsx)(u.hKd, { size: 16 }),
                    (0, i.jsx)(A.A, {}),
                    (0, i.jsx)(u.hKd, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: v.kS,
                        children: [
                            (0, i.jsx)(h.Ay, { guild: n }),
                            (0, i.jsxs)("ul", {
                                className: v.q6,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(u.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: T.intl.format(T.t.tKZNlb, { listingCount: N.length }),
                                        }),
                                    }),
                                    null != L &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: T.intl.format(T.t["kXr8+b"], {
                                                    createdYear: L.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: v.$h,
                                children: (0, i.jsx)(c.$nd, { onClick: j, icon: I.A, text: T.intl.string(T.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
