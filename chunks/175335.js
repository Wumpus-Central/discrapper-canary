n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(110259),
    o = n(311907),
    d = n(827734),
    c = n(732955),
    u = n(397927),
    m = n(58149),
    _ = n(139286),
    h = n(263063),
    p = n(250627),
    g = n(22007),
    A = n(813516),
    f = n(71393),
    x = n(954571),
    E = n(722888),
    C = n(43136),
    I = n(575926),
    T = n(652215),
    v = n(985018),
    N = n(266847);
function S(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([f.A], () => f.A.getGuild(t)),
        { loading: a, subscriptionsSettings: S } = (0, E.G)(t),
        { listingsLoaded: b } = (0, p.bb)(t),
        y = (0, p.fZ)(t, { publishedOnly: !0 }),
        j = l.useCallback(async () => {
            x.default.track(T.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, m.H$)(t) }), await (0, g.A)(T.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, _.A)({ type: s.ImpressionTypes.VIEW, name: s.ImpressionNames.GUILD_SHOP_EMBED }, { disableTrack: null == n });
    let R = y.length > 0 ? new Date(Math.min(...y.map((e) => Date.parse(e.published_at)))) : void 0;
    return a || !b
        ? (0, i.jsx)("div", { className: r()(N.lm, N.dc), children: (0, i.jsx)(u.y$y, {}) })
        : null == n || null == S
          ? null
          : (0, i.jsxs)("div", {
                className: N.lm,
                children: [
                    (0, i.jsx)(C.C, { coverImageAsset: S.cover_image_asset ?? null }),
                    (0, i.jsx)(u.hKd, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: N.qs,
                        children: [
                            (0, i.jsx)(I.h, {
                                height: "16px",
                                width: "16px",
                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, i.jsx)(u.Heading, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: N.Nl,
                                children: v.intl.string(v.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, i.jsx)(u.hKd, { size: 16 }),
                    (0, i.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: v.intl.format(v.t.NZeik9, { guildName: n.name }),
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
                        className: N.kS,
                        children: [
                            (0, i.jsx)(h.A, { guild: n }),
                            (0, i.jsxs)("ul", {
                                className: N.q6,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(u.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: v.intl.format(v.t.tKZNlb, { listingCount: y.length }),
                                        }),
                                    }),
                                    null != R &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: v.intl.format(v.t["kXr8+b"], {
                                                    createdYear: R.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: N.$h,
                                children: (0, i.jsx)(c.$nd, { onClick: j, icon: I.A, text: v.intl.string(v.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
