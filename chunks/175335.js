n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(110259),
    o = n(311907),
    d = n(827734),
    c = n(821609),
    u = n(289873),
    m = n(696986),
    _ = n(534514),
    h = n(834730),
    p = n(58149),
    g = n(139286),
    A = n(263063),
    f = n(250627),
    x = n(22007),
    C = n(813516),
    E = n(71393),
    I = n(954571),
    v = n(722888),
    b = n(43136),
    T = n(575926),
    S = n(652215),
    y = n(985018),
    N = n(736132);
function j(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([E.A], () => E.A.getGuild(t)),
        { loading: a, subscriptionsSettings: j } = (0, v.G)(t),
        { listingsLoaded: L } = (0, f.bb)(t),
        R = (0, f.fZ)(t, { publishedOnly: !0 }),
        P = l.useCallback(async () => {
            I.default.track(S.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, p.H$)(t) }), await (0, x.A)(S.BVt.SERVER_SHOP(t));
        }, [t]);
    (0, g.A)({ type: r.ImpressionTypes.VIEW, name: r.ImpressionNames.GUILD_SHOP_EMBED }, { disableTrack: null == n });
    let w = R.length > 0 ? new Date(Math.min(...R.map((e) => Date.parse(e.published_at)))) : void 0;
    return a || !L
        ? (0, i.jsx)("div", { className: s()(N.lm, N.dc), children: (0, i.jsx)(u.y, {}) })
        : null == n || null == j
          ? null
          : (0, i.jsxs)("div", {
                className: N.lm,
                children: [
                    (0, i.jsx)(b.C, { coverImageAsset: j.cover_image_asset ?? null }),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: N.qs,
                        children: [
                            (0, i.jsx)(T.h, {
                                height: "16px",
                                width: "16px",
                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, i.jsx)(_.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: N.Nl,
                                children: y.intl.string(y.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsx)(_.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: y.intl.format(y.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, i.jsx)(m.h, { size: 4 }),
                    (0, i.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: j.description,
                    }),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsx)(C.A, {}),
                    (0, i.jsx)(m.h, { size: 16 }),
                    (0, i.jsxs)("div", {
                        className: N.kS,
                        children: [
                            (0, i.jsx)(A.Ay, { guild: n }),
                            (0, i.jsxs)("ul", {
                                className: N.q6,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(h.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: y.intl.format(y.t.tKZNlb, { listingCount: R.length }),
                                        }),
                                    }),
                                    null != w &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: y.intl.format(y.t["kXr8+b"], {
                                                    createdYear: w.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: N.$h,
                                children: (0, i.jsx)(c.$, { onClick: P, icon: T.A, text: y.intl.string(y.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
