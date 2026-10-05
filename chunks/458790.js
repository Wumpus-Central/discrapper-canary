n.d(t, { Q: () => C, u: () => N });
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(821609),
    a = n(289873),
    o = n(834730),
    u = n(235986),
    d = n(250627),
    c = n(871109),
    g = n(571654),
    m = n(411342),
    A = n(179499),
    E = n(741231),
    h = n(95035),
    x = n(830543),
    p = n(317525),
    S = n(71393),
    T = n(652215),
    f = n(375708),
    I = n(460103);
function _(e) {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: I.Iu,
        children: (0, i.jsxs)(u.A, {
            justify: u.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
}
function N(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, d.Qi)(t, n, { requireCurrentGuild: !1 }),
        a = (0, g.z)(r),
        o = (0, l.bG)([S.A], () => S.A.getGuild(t)),
        u = r?.role_id != null && r?.attachments_count === 0 ? f.intl.string(f.t.H11qcT) : a,
        c = s.useCallback(async () => {
            (o?.features.has(T.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, E.A)(T.BVt.GUILD_PRODUCT(t, n))
                : await (0, E.A)(T.BVt.CHANNEL(t)),
                (0, x.default)());
        }, [o, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != u && (0, i.jsx)(_, { description: f.intl.string(f.t.lXPbJb), detail: u }),
            null != o &&
                (0, i.jsx)(_, {
                    description: f.intl.string(f.t.Wpn8z8),
                    detail: (0, i.jsx)(h.A, { onClick: c, children: o.name }),
                }),
        ],
    });
}
function C(e) {
    let { guildId: t, guildProductListingId: n } = e,
        s = (0, d.Qi)(t, n, { requireCurrentGuild: !1 }),
        u = (0, l.bG)([c.A], () => c.A.getGuildProductFetchState(n) === c.e.FETCHING),
        g = s?.role_id,
        E = (0, l.bG)([p.A], () => (null != g ? p.A.getRole(t, g) : void 0), [t, g]),
        h = (0, A.A)({ guildId: t, productId: n }),
        x = (s?.attachments?.length ?? 0) > 0,
        S = null != E;
    return u
        ? (0, i.jsx)("div", { className: I.hT, children: (0, i.jsx)(a.y, {}) })
        : null != s && (x || S)
          ? (0, i.jsxs)("div", {
                className: I.hT,
                children: [
                    x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: I.yE,
                                    children: f.intl.string(f.t.hxawoy),
                                }),
                                (0, i.jsx)(r.$, { ...h }),
                            ],
                        }),
                    S &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                x && (0, i.jsx)("div", { className: I.yF }),
                                (0, i.jsx)(o.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: I.yE,
                                    children: f.intl.string(f.t.gWBNet),
                                }),
                                (0, i.jsx)(m.A, { role: E }),
                            ],
                        }),
                ],
            })
          : null;
}
