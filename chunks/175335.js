n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(110259),
    o = n(17928),
    d = n(661531),
    c = n(821609),
    u = n(289873),
    m = n(696986),
    h = n(534514),
    g = n(834730),
    A = n(58149),
    p = n(139286),
    x = n(548118),
    f = n(250627),
    C = n(22007),
    E = n(749314),
    v = n(71393),
    I = n(954571),
    _ = n(722888),
    j = n(43136),
    N = n(575926),
    T = n(652215),
    y = n(985018),
    S = n(736132);
function b(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([v.A], () => v.A.getGuild(t)),
        { loading: s, subscriptionsSettings: b } = (0, _.G)(t),
        { listingsLoaded: k } = (0, f.bb)(t),
        L = (0, f.fZ)(t, { publishedOnly: !0 }),
        R = l.useCallback(async () => {
            I.default.track(T.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, A.H$)(t) }), await (0, C.A)(T.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, p.A)({ type: r.ImpressionTypes.VIEW, name: r.ImpressionNames.GUILD_SHOP_EMBED }, { disableTrack: null == n });
    let P = L.length > 0 ? new Date(Math.min(...L.map((e) => Date.parse(e.published_at)))) : void 0;
    return s || !k
        ? (0, i.jsx)("div", { className: a()(S.lm, S.dc), children: (0, i.jsx)(u.y, {}) })
        : null == n || null == b
          ? null
          : (0, i.jsxs)("div", {
                className: S.lm,
                children: [
                    (0, i.jsx)(j.C, { coverImageAsset: b.cover_image_asset ?? null }),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: S.qs,
                        children: [
                            (0, i.jsx)(N.h, {
                                height: "16px",
                                width: "16px",
                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, i.jsx)(h.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: S.Nl,
                                children: y.intl.string(y.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: y.intl.format(y.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, i.jsx)(m.h, { size: 4 }),
                    (0, i.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: b.description,
                    }),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsx)(E.A, {}),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: S.kS,
                        children: [
                            (0, i.jsx)(x.Ay, { guild: n }),
                            (0, i.jsxs)("ul", {
                                className: S.q6,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(g.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: y.intl.format(y.t.tKZNlb, { listingCount: L.length }),
                                        }),
                                    }),
                                    null != P &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: y.intl.format(y.t["kXr8+b"], {
                                                    createdYear: P.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: S.$h,
                                children: (0, i.jsx)(c.$, { onClick: R, icon: N.A, text: y.intl.string(y.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
