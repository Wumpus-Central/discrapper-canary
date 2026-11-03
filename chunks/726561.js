(e.r(s), e.d(s, { default: () => il }));
var l,
    n = e(477900),
    t = e(582128),
    r = e(607399),
    d = e(17928),
    a = e(565787),
    c = e(364522),
    o = e(289873),
    u = e(277984),
    g = e(9113),
    m = e(726249),
    j = e(683271),
    x = e(936555),
    h = e(465932),
    _ = e(403010),
    v = e(742589),
    N = e(71393),
    A = e(615405),
    I = e(300233),
    p = e(217976),
    L = e(514179),
    b = e(707554),
    E = e(599941),
    T = e(915869),
    S = e(700206),
    f = e(950344),
    G = e(815332),
    O = e(456540),
    R = e(217530),
    y = e(162093),
    B = e(534514),
    k = e(834730),
    C = e(548118),
    F = e(253932),
    U = e(218394),
    D = e(428558),
    M = e(447940);
function P(i) {
    let { coverImageAsset: s, title: e, guild: l, description: t, children: r } = i,
        d = F.kt.useSetting(),
        a = (0, U.j)(),
        [c, o] = (0, D.A)(s, a && d);
    return (0, n.jsxs)("div", {
        className: M.kL,
        children: [
            (0, n.jsx)("div", {
                ref: c,
                className: M.El,
                children: null != o && (0, n.jsx)("img", { src: o, alt: "", className: M.N4 }),
            }),
            (0, n.jsx)("div", { className: M._C, children: (0, n.jsx)(C.Ay, { guild: l, size: C.Ay.Sizes.XLARGE }) }),
            (0, n.jsx)(B.D, { variant: "heading-xl/semibold", className: M.H1, children: e }),
            (0, n.jsx)(k.E, { className: M.jr, variant: "body-md/normal", color: "text-default", children: t }),
            r,
        ],
    });
}
var z = e(652215),
    w = e(105292),
    X = e(493375);
let H = function (i) {
    let { guild: s } = i,
        e = (0, E.uk)(s.id)[0];
    (0, f.A)({
        guildId: s.id,
        groupListingId: e?.id,
        location: z.ThZ.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: e?.subscription_listings_ids,
    });
    let { activeSubscription: l } = (0, S.A)(e?.id),
        t = (0, E.Tq)(s.id),
        r = t?.description,
        { editStateIds: d } = T.d0(e?.id ?? null, s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(P, {
                title: w.intl.format(w.t["rm+ojA"], { serverName: s.name }),
                description: r ?? null,
                coverImageAsset: t?.cover_image_asset ?? null,
                guild: s,
                children: [
                    null != e ? (0, n.jsx)(G.A, { className: X.Ds, groupListingId: e.id, subscription: l }) : null,
                    (0, n.jsx)(O.A, { subscription: l }),
                ],
            }),
            (0, n.jsx)(b.F, {
                children: (0, n.jsx)(R.A, {
                    children: d.map((i) =>
                        (0, n.jsx)(
                            y.A,
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
var W = e(131937),
    Z = e(139286),
    K = e(224834),
    Q = (((l = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible"), (l.NOT_GUILD_MEMBER = "not_guild_member"), l);
function V(i) {
    let { errorType: s } = i;
    return (
        (0, Z.A)({
            type: W.ImpressionTypes.PAGE,
            name: W.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: s },
        }),
        (0, n.jsx)("div", {
            className: K.Xd,
            children: (0, n.jsxs)("div", {
                className: K.lr,
                children: [
                    (0, n.jsx)("img", { src: "/assets/6b450d698584e501.svg", alt: "", className: K.W9 }),
                    (0, n.jsx)(B.D, {
                        variant: "heading-xl/semibold",
                        className: K.mW,
                        children: "guild_not_eligible" === s ? w.intl.string(w.t.atZQVZ) : w.intl.string(w.t.gAdWBl),
                    }),
                    (0, n.jsx)(k.E, {
                        variant: "body-md/normal",
                        className: K.LS,
                        children: "guild_not_eligible" === s ? w.intl.string(w.t.teWe5G) : w.intl.string(w.t["X/yMrK"]),
                    }),
                ],
            }),
        })
    );
}
var q = e(696986),
    J = e(302150),
    Y = e(330766);
function $() {
    return (0, n.jsx)("div", {
        className: J.kL,
        children: (0, n.jsxs)("div", {
            className: J.Qs,
            children: [
                (0, n.jsx)("img", { src: Y, alt: w.intl.string(w.t.MvLOqp) }),
                (0, n.jsx)(q.h, { size: 12 }),
                (0, n.jsx)(B.D, {
                    className: J.wx,
                    variant: "heading-lg/semibold",
                    children: w.intl.string(w.t.t18lFj),
                }),
                (0, n.jsx)(q.h, { size: 8 }),
                (0, n.jsx)(k.E, {
                    color: "text-default",
                    variant: "body-sm/normal",
                    children: w.intl.string(w.t.TvGJgk),
                }),
            ],
        }),
    });
}
var ii = e(746080),
    is = e(536620);
function ie(i) {
    let { guildId: s } = i,
        e = (0, d.bG)([N.A], () => N.A.getGuild(s), [s]),
        l = (0, d.bG)([_.A], () => _.A.isConnected()),
        b = (0, x.A)(s),
        E = (0, p.A)(s),
        T = (0, d.bG)([A.A], () => A.A.isSubscriptionFetching),
        S = (0, I.X)(),
        { shouldHideGuildPurchaseEntryPoints: f, restrictionsLoading: G } = (0, h.MH)(s),
        O = null == e || !S || T || G;
    ((0, m.HU)({ subsection: w.intl.string(w.t["KzCF/6"]), location: e?.name }),
        (0, g.A)(r.Fr ? "role-subscriptions-overview" : void 0));
    let R = l && (null == e || !(b || E) || (f && !G));
    if (
        (t.useEffect(() => {
            u.hP();
        }, []),
        t.useEffect(() => {
            R && !r.Fr && (0, j.B)(s, ii.VV.ROLE_SUBSCRIPTIONS);
        }, [s, R]),
        r.Fr && R)
    ) {
        let i = null == e ? Q.NOT_GUILD_MEMBER : Q.GUILD_NOT_ELIGIBLE;
        return (0, n.jsx)(V, { errorType: i });
    }
    return (0, n.jsxs)("div", {
        className: is.kL,
        children: [
            (0, n.jsxs)(v.A, {
                toolbar: (0, n.jsx)(t.Fragment, {}),
                className: is.jr,
                children: [
                    (0, n.jsx)(v.A.Icon, { icon: (0, a.k)(L.A), "aria-hidden": !0 }),
                    (0, n.jsx)(v.A.Title, { children: w.intl.string(w.t["KzCF/6"]) }),
                ],
            }),
            (0, n.jsx)("div", { id: "guild-role-subscription-overview-notice" }),
            (0, n.jsx)("div", {
                className: is.Qs,
                children: b
                    ? (0, n.jsx)(c.d_, {
                          className: is.XG,
                          children: (0, n.jsx)("div", {
                              className: is.gT,
                              children: O ? (0, n.jsx)(o.y, {}) : (0, n.jsx)(H, { guild: e }),
                          }),
                      })
                    : (0, n.jsx)($, {}),
            }),
        ],
    });
}
function il(i) {
    let { guildId: s } = i;
    return (0, n.jsx)(I.H, { guildId: s, refetchOnMount: !0, children: (0, n.jsx)(ie, { guildId: s }) });
}
