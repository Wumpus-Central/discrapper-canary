n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(110259),
    o = n(17928),
    c = n(661531),
    d = n(821609),
    u = n(289873),
    _ = n(696986),
    m = n(534514),
    h = n(834730),
    p = n(58149),
    g = n(139286),
    f = n(548118),
    x = n(250627),
    A = n(22007),
    C = n(749314),
    v = n(71393),
    I = n(954571),
    E = n(722888),
    b = n(43136),
    y = n(575926),
    T = n(652215),
    j = n(985018),
    N = n(736132);
function S(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([v.A], () => v.A.getGuild(t)),
        { loading: a, subscriptionsSettings: S } = (0, E.G)(t),
        { listingsLoaded: k } = (0, x.bb)(t),
        L = (0, x.fZ)(t, { publishedOnly: !0 }),
        R = l.useCallback(async () => {
            I.default.track(T.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, p.H$)(t) }), await (0, A.A)(T.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, g.A)({ type: s.ImpressionTypes.VIEW, name: s.ImpressionNames.GUILD_SHOP_EMBED }, { disableTrack: null == n });
    let w = L.length > 0 ? new Date(Math.min(...L.map((e) => Date.parse(e.published_at)))) : void 0;
    return a || !k
        ? (0, i.jsx)("div", { className: r()(N.lm, N.dc), children: (0, i.jsx)(u.y, {}) })
        : null == n || null == S
          ? null
          : (0, i.jsxs)("div", {
                className: N.lm,
                children: [
                    (0, i.jsx)(b.C, { coverImageAsset: S.cover_image_asset ?? null }),
                    (0, i.jsx)(_.h, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: N.qs,
                        children: [
                            (0, i.jsx)(y.h, {
                                height: "16px",
                                width: "16px",
                                color: c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, i.jsx)(m.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: N.Nl,
                                children: j.intl.string(j.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, i.jsx)(_.h, { size: 16 }),
                    (0, i.jsx)(m.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: j.intl.format(j.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, i.jsx)(_.h, { size: 4 }),
                    (0, i.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: S.description,
                    }),
                    (0, i.jsx)(_.h, { size: 16 }),
                    (0, i.jsx)(C.A, {}),
                    (0, i.jsx)(_.h, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: N.kS,
                        children: [
                            (0, i.jsx)(f.Ay, { guild: n }),
                            (0, i.jsxs)("ul", {
                                className: N.q6,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(h.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: j.intl.format(j.t.tKZNlb, { listingCount: L.length }),
                                        }),
                                    }),
                                    null != w &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: j.intl.format(j.t["kXr8+b"], {
                                                    createdYear: w.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: N.$h,
                                children: (0, i.jsx)(d.$, { onClick: R, icon: y.A, text: j.intl.string(j.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
