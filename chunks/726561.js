"use strict";
i.r(t), i.d(t, { default: () => er });
var r,
    s = i(627968),
    n = i(64700),
    a = i(607399),
    l = i(17928),
    o = i(565787),
    _ = i(364522),
    c = i(289873),
    d = i(323082),
    u = i(9113),
    g = i(726249),
    f = i(683271),
    m = i(936555),
    x = i(465932),
    p = i(366853),
    h = i(742589),
    C = i(71393),
    L = i(615405),
    v = i(300233),
    j = i(217976),
    b = i(514179),
    I = i(707554),
    A = i(599941),
    N = i(915869),
    S = i(700206),
    E = i(950344),
    T = i(815332),
    k = i(456540),
    R = i(217530),
    P = i(817649),
    G = i(534514),
    O = i(834730),
    B = i(548118),
    U = i(253932),
    M = i(218394),
    y = i(428558),
    w = i(556545);
function D(e) {
    let { coverImageAsset: t, title: i, guild: r, description: n, children: a } = e,
        l = U.kt.useSetting(),
        o = (0, M.j)(),
        [_, c] = (0, y.A)(t, o && l);
    return (0, s.jsxs)("div", {
        className: w.kL,
        children: [
            (0, s.jsx)("div", {
                ref: _,
                className: w.El,
                children: null != c && (0, s.jsx)("img", { src: c, alt: "", className: w.N4 }),
            }),
            (0, s.jsx)("div", { className: w._C, children: (0, s.jsx)(B.Ay, { guild: r, size: B.Ay.Sizes.XLARGE }) }),
            (0, s.jsx)(G.D, { variant: "heading-xl/semibold", className: w.H1, children: i }),
            (0, s.jsx)(O.E, { className: w.jr, variant: "text-md/normal", color: "text-default", children: n }),
            a,
        ],
    });
}
var z = i(652215),
    F = i(985018),
    H = i(607876);
let W = (e) => {
    let { guild: t } = e,
        i = (0, A.uk)(t.id)[0];
    (0, E.A)({
        guildId: t.id,
        groupListingId: i?.id,
        location: z.ThZ.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: i?.subscription_listings_ids,
    });
    let { activeSubscription: r } = (0, S.A)(i?.id),
        n = (0, A.Tq)(t.id),
        a = n?.description,
        { editStateIds: l } = N.d0(i?.id ?? null, t.id);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(D, {
                title: F.intl.format(F.t["rm+ojA"], { serverName: t.name }),
                description: a ?? null,
                coverImageAsset: n?.cover_image_asset ?? null,
                guild: t,
                children: [
                    null != i ? (0, s.jsx)(T.A, { className: H.Ds, groupListingId: i.id, subscription: r }) : null,
                    (0, s.jsx)(k.A, { subscription: r }),
                ],
            }),
            (0, s.jsx)(I.F, {
                children: (0, s.jsx)(R.A, {
                    children: l.map((e) =>
                        (0, s.jsx)(
                            P.A,
                            {
                                guildId: t.id,
                                groupListingId: i?.id ?? "",
                                listingId: e,
                                analyticsLocation: z.ThZ.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            e,
                        ),
                    ),
                }),
            }),
        ],
    });
};
var X = i(110259),
    q = i(139286),
    V = i(640509),
    Q = (((r = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible"), (r.NOT_GUILD_MEMBER = "not_guild_member"), r);
let Z = (e) => {
    let { errorType: t } = e;
    return (
        (0, q.A)({
            type: X.ImpressionTypes.PAGE,
            name: X.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t },
        }),
        (0, s.jsx)("div", {
            className: V.Xd,
            children: (0, s.jsxs)("div", {
                className: V.lr,
                children: [
                    (0, s.jsx)("img", { src: "/assets/6b450d698584e501.svg", alt: "", className: V.W9 }),
                    (0, s.jsx)(G.D, {
                        variant: "heading-xl/extrabold",
                        className: V.mW,
                        children: "guild_not_eligible" === t ? F.intl.string(F.t.atZQVZ) : F.intl.string(F.t.gAdWBl),
                    }),
                    (0, s.jsx)(O.E, {
                        variant: "text-md/normal",
                        className: V.LS,
                        children: "guild_not_eligible" === t ? F.intl.string(F.t.teWe5G) : F.intl.string(F.t["X/yMrK"]),
                    }),
                ],
            }),
        })
    );
};
var K = i(696986),
    Y = i(109335),
    J = i(330766);
function $() {
    return (0, s.jsx)("div", {
        className: Y.kL,
        children: (0, s.jsxs)("div", {
            className: Y.Qs,
            children: [
                (0, s.jsx)("img", { src: J, alt: F.intl.string(F.t.MvLOqp) }),
                (0, s.jsx)(K.h, { size: 12 }),
                (0, s.jsx)(G.D, {
                    className: Y.wx,
                    variant: "heading-lg/semibold",
                    children: F.intl.string(F.t.t18lFj),
                }),
                (0, s.jsx)(K.h, { size: 8 }),
                (0, s.jsx)(O.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: F.intl.string(F.t.TvGJgk),
                }),
            ],
        }),
    });
}
var ee = i(746080),
    et = i(832933);
function ei(e) {
    let { guildId: t } = e,
        i = (0, l.bG)([C.A], () => C.A.getGuild(t), [t]),
        r = (0, l.bG)([p.A], () => p.A.isConnected()),
        I = (0, m.A)(t),
        A = (0, j.A)(t),
        N = (0, l.bG)([L.A], () => L.A.isSubscriptionFetching),
        S = (0, v.X)(),
        { shouldHideGuildPurchaseEntryPoints: E, restrictionsLoading: T } = (0, x.MH)(t),
        k = null == i || !S || N || T;
    (0, g.HU)({ subsection: F.intl.string(F.t["KzCF/6"]), location: i?.name }),
        (0, u.A)(a.Fr ? "role-subscriptions-overview" : void 0);
    let R = r && (null == i || !(I || A) || (E && !T));
    if (
        (n.useEffect(() => {
            d.hP();
        }, []),
        n.useEffect(() => {
            R && !a.Fr && (0, f.B)(t, ee.VV.ROLE_SUBSCRIPTIONS);
        }, [t, R]),
        a.Fr && R)
    ) {
        let e = null == i ? Q.NOT_GUILD_MEMBER : Q.GUILD_NOT_ELIGIBLE;
        return (0, s.jsx)(Z, { errorType: e });
    }
    return (0, s.jsxs)("div", {
        className: et.kL,
        children: [
            (0, s.jsxs)(h.A, {
                toolbar: (0, s.jsx)(n.Fragment, {}),
                className: et.jr,
                children: [
                    (0, s.jsx)(h.A.Icon, { icon: (0, o.k)(b.A), "aria-hidden": !0 }),
                    (0, s.jsx)(h.A.Title, { children: F.intl.string(F.t["KzCF/6"]) }),
                ],
            }),
            (0, s.jsx)("div", { id: "guild-role-subscription-overview-notice" }),
            (0, s.jsx)("div", {
                className: et.Qs,
                children: I
                    ? (0, s.jsx)(_.d_, {
                          className: et.XG,
                          children: (0, s.jsx)("div", {
                              className: et.gT,
                              children: k ? (0, s.jsx)(c.y, {}) : (0, s.jsx)(W, { guild: i }),
                          }),
                      })
                    : (0, s.jsx)($, {}),
            }),
        ],
    });
}
function er(e) {
    let { guildId: t } = e;
    return (0, s.jsx)(v.H, { guildId: t, refetchOnMount: !0, children: (0, s.jsx)(ei, { guildId: t }) });
}
