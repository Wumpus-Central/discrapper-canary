e.r(s), e.d(s, { default: () => il });
var l,
    t = e(627968),
    n = e(64700),
    r = e(607399),
    a = e(17928),
    d = e(565787),
    c = e(364522),
    o = e(289873),
    u = e(323082),
    g = e(9113),
    x = e(726249),
    m = e(683271),
    j = e(936555),
    h = e(465932),
    _ = e(454219),
    v = e(742589),
    N = e(71393),
    A = e(615405),
    I = e(300233),
    p = e(217976),
    L = e(514179),
    E = e(707554),
    b = e(599941),
    T = e(915869),
    S = e(700206),
    G = e(950344),
    f = e(815332),
    O = e(456540),
    R = e(217530),
    B = e(817649),
    k = e(534514),
    C = e(834730),
    F = e(548118),
    U = e(253932),
    y = e(218394),
    D = e(428558),
    M = e(556545);
function P(i) {
    let { coverImageAsset: s, title: e, guild: l, description: n, children: r } = i,
        a = U.kt.useSetting(),
        d = (0, y.j)(),
        [c, o] = (0, D.A)(s, d && a);
    return (0, t.jsxs)("div", {
        className: M.kL,
        children: [
            (0, t.jsx)("div", {
                ref: c,
                className: M.El,
                children: null != o && (0, t.jsx)("img", { src: o, alt: "", className: M.N4 }),
            }),
            (0, t.jsx)("div", { className: M._C, children: (0, t.jsx)(F.Ay, { guild: l, size: F.Ay.Sizes.XLARGE }) }),
            (0, t.jsx)(k.D, { variant: "heading-xl/semibold", className: M.H1, children: e }),
            (0, t.jsx)(C.E, { className: M.jr, variant: "text-md/normal", color: "text-default", children: n }),
            r,
        ],
    });
}
var z = e(652215),
    w = e(985018),
    X = e(607876);
let H = (i) => {
    let { guild: s } = i,
        e = (0, b.uk)(s.id)[0];
    (0, G.A)({
        guildId: s.id,
        groupListingId: e?.id,
        location: z.ThZ.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: e?.subscription_listings_ids,
    });
    let { activeSubscription: l } = (0, S.A)(e?.id),
        n = (0, b.Tq)(s.id),
        r = n?.description,
        { editStateIds: a } = T.d0(e?.id ?? null, s.id);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(P, {
                title: w.intl.format(w.t["rm+ojA"], { serverName: s.name }),
                description: r ?? null,
                coverImageAsset: n?.cover_image_asset ?? null,
                guild: s,
                children: [
                    null != e ? (0, t.jsx)(f.A, { className: X.Ds, groupListingId: e.id, subscription: l }) : null,
                    (0, t.jsx)(O.A, { subscription: l }),
                ],
            }),
            (0, t.jsx)(E.F, {
                children: (0, t.jsx)(R.A, {
                    children: a.map((i) =>
                        (0, t.jsx)(
                            B.A,
                            {
                                guildId: s.id,
                                groupListingId: e?.id ?? "",
                                listingId: i,
                                analyticsLocation: z.ThZ.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            i,
                        ),
                    ),
                }),
            }),
        ],
    });
};
var W = e(110259),
    Z = e(139286),
    K = e(640509),
    Q = (((l = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible"), (l.NOT_GUILD_MEMBER = "not_guild_member"), l);
let V = (i) => {
    let { errorType: s } = i;
    return (
        (0, Z.A)({
            type: W.ImpressionTypes.PAGE,
            name: W.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: s },
        }),
        (0, t.jsx)("div", {
            className: K.Xd,
            children: (0, t.jsxs)("div", {
                className: K.lr,
                children: [
                    (0, t.jsx)("img", { src: "/assets/6b450d698584e501.svg", alt: "", className: K.W9 }),
                    (0, t.jsx)(k.D, {
                        variant: "heading-xl/extrabold",
                        className: K.mW,
                        children: "guild_not_eligible" === s ? w.intl.string(w.t.atZQVZ) : w.intl.string(w.t.gAdWBl),
                    }),
                    (0, t.jsx)(C.E, {
                        variant: "text-md/normal",
                        className: K.LS,
                        children: "guild_not_eligible" === s ? w.intl.string(w.t.teWe5G) : w.intl.string(w.t["X/yMrK"]),
                    }),
                ],
            }),
        })
    );
};
var q = e(696986),
    J = e(109335),
    Y = e(330766);
function $() {
    return (0, t.jsx)("div", {
        className: J.kL,
        children: (0, t.jsxs)("div", {
            className: J.Qs,
            children: [
                (0, t.jsx)("img", { src: Y, alt: w.intl.string(w.t.MvLOqp) }),
                (0, t.jsx)(q.h, { size: 12 }),
                (0, t.jsx)(k.D, {
                    className: J.wx,
                    variant: "heading-lg/semibold",
                    children: w.intl.string(w.t.t18lFj),
                }),
                (0, t.jsx)(q.h, { size: 8 }),
                (0, t.jsx)(C.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: w.intl.string(w.t.TvGJgk),
                }),
            ],
        }),
    });
}
var ii = e(746080),
    is = e(832933);
function ie(i) {
    let { guildId: s } = i,
        e = (0, a.bG)([N.A], () => N.A.getGuild(s), [s]),
        l = (0, a.bG)([_.A], () => _.A.isConnected()),
        E = (0, j.A)(s),
        b = (0, p.A)(s),
        T = (0, a.bG)([A.A], () => A.A.isSubscriptionFetching),
        S = (0, I.X)(),
        { shouldHideGuildPurchaseEntryPoints: G, restrictionsLoading: f } = (0, h.MH)(s),
        O = null == e || !S || T || f;
    (0, x.HU)({ subsection: w.intl.string(w.t["KzCF/6"]), location: e?.name }),
        (0, g.A)(r.Fr ? "role-subscriptions-overview" : void 0);
    let R = l && (null == e || !(E || b) || (G && !f));
    if (
        (n.useEffect(() => {
            u.hP();
        }, []),
        n.useEffect(() => {
            R && !r.Fr && (0, m.B)(s, ii.VV.ROLE_SUBSCRIPTIONS);
        }, [s, R]),
        r.Fr && R)
    ) {
        let i = null == e ? Q.NOT_GUILD_MEMBER : Q.GUILD_NOT_ELIGIBLE;
        return (0, t.jsx)(V, { errorType: i });
    }
    return (0, t.jsxs)("div", {
        className: is.kL,
        children: [
            (0, t.jsxs)(v.A, {
                toolbar: (0, t.jsx)(n.Fragment, {}),
                className: is.jr,
                children: [
                    (0, t.jsx)(v.A.Icon, { icon: (0, d.k)(L.A), "aria-hidden": !0 }),
                    (0, t.jsx)(v.A.Title, { children: w.intl.string(w.t["KzCF/6"]) }),
                ],
            }),
            (0, t.jsx)("div", { id: "guild-role-subscription-overview-notice" }),
            (0, t.jsx)("div", {
                className: is.Qs,
                children: E
                    ? (0, t.jsx)(c.d_, {
                          className: is.XG,
                          children: (0, t.jsx)("div", {
                              className: is.gT,
                              children: O ? (0, t.jsx)(o.y, {}) : (0, t.jsx)(H, { guild: e }),
                          }),
                      })
                    : (0, t.jsx)($, {}),
            }),
        ],
    });
}
function il(i) {
    let { guildId: s } = i;
    return (0, t.jsx)(I.H, { guildId: s, refetchOnMount: !0, children: (0, t.jsx)(ie, { guildId: s }) });
}
