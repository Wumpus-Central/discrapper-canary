n.d(t, { K: () => t4, A: () => t6 });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(364522),
    o = n(761508),
    d = n(707554),
    u = n(140735),
    c = n(207803),
    g = n(183555),
    m = n(61881),
    f = n(695904),
    x = n(116331),
    h = n(827258),
    I = n(17928),
    p = n(652215),
    A = n(28863),
    j = n(517164),
    E = n(114212),
    v = n(290863),
    S = n(461213),
    C = n(975571),
    b = n(146655),
    k = n(489379),
    T = n(402857),
    N = n(353394),
    y = n(64622),
    w = n(986712),
    R = n(435558),
    _ = n(297264),
    L = n(834730),
    O = n(534890),
    P = n(366010),
    D = n(308528),
    M = n(736653),
    G = n(573648),
    U = n(780964),
    W = n(766075),
    F = n(562153),
    H = n(993401),
    B = n(375708),
    V = n(92795);
let z = [
        () => B.intl.string(B.t.madJdE),
        () => B.intl.string(B.t.NYmfoP),
        () => B.intl.string(B.t.R2PaCg),
        () => B.intl.string(B.t.laSR8h),
        () => B.intl.string(B.t.DnsJE8),
    ],
    K = [
        () => B.intl.string(B.t.nFSbeE),
        () => B.intl.string(B.t.gTcxOz),
        () => B.intl.string(B.t["8T0wYj"]),
        () => B.intl.string(B.t.BIHl1g),
        () => B.intl.string(B.t["jhBm0+"]),
    ],
    Y = [
        () => B.intl.string(B.t.AyMGXA),
        () => B.intl.string(B.t.aAFW7V),
        (e) => B.intl.formatToPlainString(B.t.h2g0cM, { name: e }),
        () => B.intl.string(B.t.rrYh58),
        () => B.intl.string(B.t["HX3K+F"]),
        () => B.intl.string(B.t["/yW3aY"]),
        () => B.intl.string(B.t["PmL/v0"]),
        () => B.intl.string(B.t.IALa3h),
        () => B.intl.string(B.t.HRcTFL),
        () => B.intl.string(B.t.NuCqPt),
        () => B.intl.string(B.t["M1tw+4"]),
        () => B.intl.string(B.t.UBm1y2),
        () => B.intl.string(B.t.Cu95PQ),
        () => B.intl.string(B.t["R/wFuh"]),
        () => B.intl.string(B.t.HQPAVT),
        () => B.intl.string(B.t.YolGh4),
    ],
    X = [
        p.fg2.STEAM,
        p.fg2.PLAYSTATION,
        p.fg2.XBOX,
        p.fg2.TWITCH,
        p.fg2.BATTLENET,
        p.fg2.LEAGUE_OF_LEGENDS,
        p.fg2.EPIC_GAMES,
        p.fg2.RIOT_GAMES,
        p.fg2.ROBLOX,
        p.fg2.SPOTIFY,
        p.fg2.YOUTUBE,
        p.fg2.CRUNCHYROLL,
        p.fg2.BUNGIE,
    ];
function q(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: V.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: V.FS,
                children: [
                    (0, i.jsx)(_.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(L.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function Z() {
    let e = B.intl.string(B.t.RnD2yZ),
        [t] = l.useState(() => ((0, R.sample)(z) ?? z[0])());
    return (0, i.jsx)(q, { heading: e, bodyText: t });
}
function J() {
    let e = B.intl.string(B.t.bFgqYJ),
        [t] = l.useState(() => ((0, R.sample)(K) ?? K[0])());
    return (0, i.jsx)(q, { heading: e, bodyText: t });
}
function Q(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        a = F.Ay.getName(n, s, t),
        o = B.intl.formatToPlainString(B.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, R.sample)(Y) ?? Y[0])(a)),
        u = l.useCallback(() => {
            D.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, i.jsx)(q, {
        heading: o,
        bodyText: d,
        children: (0, i.jsx)("div", {
            className: V.v0,
            children: (0, i.jsx)(H.FD, { icon: O.ChatIcon, text: B.intl.string(B.t["g33r/P"]), onClick: u }),
        }),
    });
}
function $() {
    let e = (0, M.Ay)();
    return (0, i.jsx)("div", {
        className: V.HU,
        children: X.map((t, n) => {
            let l = G.A.get(t);
            if (null == l) return null;
            let s = (0, P.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: s, alt: l.name, className: V.gj }, n);
        }),
    });
}
function ee(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            t?.(), (0, W.openUserSettings)(U.X.CONNECTIONS_CATEGORY);
        }, [t]),
        s = l.useCallback(() => {
            t?.(), (0, W.openUserSettings)(U.X.CONNECTED_GAMES_CATEGORY);
        }, [t]);
    return (0, i.jsxs)(q, {
        heading: B.intl.string(B.t.VB6LWY),
        bodyText: B.intl.string(B.t.KpjsU9),
        children: [
            (0, i.jsx)($, {}),
            (0, i.jsxs)("div", {
                className: V.v0,
                children: [
                    (0, i.jsx)(H.FD, { text: B.intl.string(B.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(H.FD, { text: B.intl.string(B.t.GTCx0p), onClick: s }),
                ],
            }),
        ],
    });
}
var et = n(83013),
    en = n(518477),
    ei = n(587763);
function el(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: s, channelId: r, onClose: a } = e,
        { live: o, recent: d, stream: u } = (0, b.A)(t.id),
        { voiceChannel: c, voiceActivity: g } = (0, k.A)({ userId: t.id, guildId: s }),
        m = (0, I.bG)([j.A], () => j.A.isFetchingUserOutbox(t.id)),
        f = t.id === n.id,
        x = (0, I.bG)([S.A, v.A], () => {
            let e = f ? S.A.getStatus() : v.A.getStatus(t.id);
            return e === p.clD.OFFLINE || e === p.clD.INVISIBLE;
        }),
        h = o.length > 0 || null != u,
        R = l?.private !== !0 && null == u && null == g && null != c,
        _ = !x && (h || R),
        L = d.length > 0;
    return _ || L || !m
        ? _ || L || m
            ? (0, i.jsxs)(t4, {
                  className: ei.XG,
                  fade: !0,
                  children: [
                      _
                          ? (0, i.jsx)(et.A, {
                                heading: B.intl.string(B.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: ei.kR,
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(y.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: u,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(T.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        R &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(w.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: c,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      L
                          ? (0, i.jsx)(et.A, {
                                heading: B.intl.string(B.t.jzgEoL),
                                introText: f
                                    ? B.intl.format(B.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  A.Anchor,
                                                  {
                                                      href: C.A.getArticleURL(p.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: en.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: ei.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(N.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : f
              ? (0, i.jsx)(ee, { onClose: a })
              : (0, i.jsx)(Q, { user: t, guildId: l?.guildId ?? s, channelId: r, onClose: a })
        : (0, i.jsx)("div", {
              className: ei.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: ei.kr,
                          children: [
                              (0, i.jsx)(E.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(E.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var es = n(163126),
    er = n(688810),
    ea = n(913453),
    eo = n(229187),
    ed = n(402860),
    eu = n(503062),
    ec = n(393213);
function eg(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        { analyticsLocations: a } = (0, er.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, g.NJ)(),
        { mutualFriends: u, mutualFriendsCount: c } = (0, ea.A)(t),
        m = (0, es.A)();
    return (
        l.useEffect(() => {
            (0, eo.A)(t.id, m);
        }, [t.id, m]),
        (0, i.jsx)(t4, {
            className: ec.XG,
            children:
                null == u
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: ec.D$,
                                  children: [
                                      (0, i.jsx)(E.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(E.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === u.length
                      ? (0, i.jsx)(Z, {})
                      : u.map((e) => {
                            let { key: t, user: l, status: u } = e;
                            return (0, i.jsx)(
                                eu.A,
                                {
                                    user: l,
                                    status: u,
                                    guildId: n,
                                    channelId: s,
                                    onSelect: () => {
                                        r?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, ed.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
                                                sourceAnalyticsLocations: a,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var em = n(398590),
    ef = n(345942),
    ex = n(51943);
function eh(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, ea.A)(t);
    return (0, i.jsx)(t4, {
        className: ec.XG,
        fade: !0,
        children:
            null == s && r
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: ec.Y7,
                              children: [
                                  (0, i.jsx)(E.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(E.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != s || r) && s?.length !== 0
                  ? s?.map((e) => {
                        let { guild: s, nick: r } = e;
                        return (0, i.jsx)(
                            ex.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    l({ action: "PRESS_MUTUAL_GUILD" }), (0, ef.u)(s.id), n(), (0, em.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, i.jsx)(J, {}),
    });
}
var eI = n(159454),
    ep = n(132500),
    eA = n(777480),
    ej = n(821609),
    eE = n(34188),
    ev = n(307301),
    eS = n(825484),
    eC = n(952270),
    eb = n(885574),
    ek = n(444927),
    eT = n(793574),
    eN = n(429913),
    ey = n(839534),
    ew = n(895360),
    eR = n(152472),
    e_ = n(267102),
    eL = n(285373);
n(321073);
var eO = n(721932),
    eP = n(403362),
    eD = n(832163),
    eM = n(501838),
    eG = n(44724),
    eU = n(808247),
    eW = n(673843),
    eF = n(561794),
    eH = n(855052),
    eB = n(287809),
    eV = n(228366),
    ez = n(419731),
    eK = n(321191),
    eY = n(249203),
    eX = n(600761),
    eq = n(389667),
    eZ = n(535089),
    eJ = n(128988),
    eQ = n(686246),
    e$ = n(111085),
    e0 = n(107563),
    e1 = n(840411),
    e8 = n(666810);
let e2 = (0, n(945810).mj)({
    name: "2026-07-wishlist-show-owned-items-last",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 1: { isEnabled: !0 } },
});
var e7 = n(724834),
    e5 = n(451395),
    e3 = n(823016),
    e4 = n(100741);
function e9(e) {
    let { item: t, index: n, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e3.r)();
    return (0, i.jsx)(e5.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": B.intl.formatToPlainString(B.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: e4.C,
        dropBeforeClassName: e4.A,
        dropAfterClassName: e4.Ze,
        draggingClassName: e4.Id,
        children: (0, i.jsx)("div", { className: e4.An, children: r }),
    });
}
let e6 = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: u,
            isNew: c,
        } = e,
        { registerDragHandleRef: g } = (0, e3.r)(),
        m = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(e5.jV, {
                          buttonRef: g(String(t.skuId)),
                          className: e4.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, g, t.skuId],
        ),
        f = l.useMemo(
            () =>
                (0, i.jsx)(e7.A, {
                    item: t,
                    wishlistOwner: s,
                    guildId: r,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: m,
                    isNew: c,
                }),
            [t, s, r, d, m, o, c],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(e9, { item: t, index: n, wishlistId: o, onReorder: u, children: f }),
          })
        : (0, i.jsx)("li", { children: f });
});
function te(e) {
    var t;
    let { items: n, profileOwner: s, guildId: r, showEditingControls: a, ackedWishlistUpdatedAt: o } = e,
        d = eB.default.getCurrentUser(),
        { defaultWishlistId: u } = (0, I.cf)([eK.A], () => ({ defaultWishlistId: eK.A.getFirstWishlistId(s.id) })),
        c = null != d && d.id !== s.id,
        g =
            ((t = c ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            e2.useConfig({ location: t }).isEnabled && c),
        m = (0, I.bG)([e$.A], () => {
            let e = n;
            return (
                g &&
                    (e = (0, e1.hE)(e, (e) => {
                        var t;
                        return (
                            (t = e$.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== p.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [n, g, s.id]),
        { isDragging: f } = (0, eQ.V)((e) => ({ isDragging: e.isDragging() })),
        x = l.useCallback(
            (e, t) => {
                if (e === t || null == u || 0 === m.length || e < 0 || e >= m.length || t < 0 || t >= m.length) return;
                let n = e0.A.getWishlist(u);
                if (null == n) return;
                let i = m[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, e1.Ap)(n, m, e, t);
                eU.A.reorderWishlistItem(u, i.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [u, m],
        );
    if (null == d || null == u) return null;
    let h = (0, i.jsx)("ul", {
        className: e4.Vg,
        children: m.map((e, t) =>
            (0, i.jsx)(
                e6,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: u,
                    isDragging: f,
                    onReorder: x,
                    isNew: (0, ez.f3)(e.addedAt, o),
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, i.jsx)(e3.B, { emptyListFallbackRef: null, children: h }) : h;
}
function tt(e) {
    let t = eB.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(e8.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(te, { ...e }),
    });
}
var tn = n(815021),
    ti = n(299679);
n(667532);
var tl = n(862772),
    ts = n(202541),
    tr = n(172218),
    ta = n(575593),
    to = n(691540),
    td = n(857250),
    tu = n(97483),
    tc = n(765178),
    tg = n(31969),
    tm = n(174459),
    tf = n(661492),
    tx = n(95817),
    th = n(212387),
    tI = n(74135),
    tp = n(460442),
    tA = n(699976),
    tj = n(964164),
    tE = n(880465);
let tv = tA.Z.SIZE_90;
function tS(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: s,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: d,
            onClick: u,
            "aria-label": c,
            wishlistId: m,
            children: f,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, g.NJ)(),
        h = (0, ti.Ar)(),
        I = (0, ek.A)(() => (0, ep.A)()),
        { handleVisibilityChange: A } = (0, tx.G)(I),
        j = (0, tr.K)(A, 0.5, h?.surface != null),
        E = l.useCallback(() => {
            x({
                wishlistId: m,
                action: en.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tm.default.track(p.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: m,
                        wishlist_owner_id: h.wishlistOwnerId,
                        surface: h.surface,
                        position_in_section: h.positionInSection,
                        item_source: h.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: I,
                        impression_session_id: h.impressionSessionId,
                        location_stack: h.analyticsLocations,
                    }),
                u();
        }, [u, t.id, t.productLine, x, m, h, I]);
    return (0, i.jsx)("div", {
        ref: j,
        children: (0, i.jsx)(th.A, {
            sku: t,
            user: n,
            guildId: s,
            spec: tv,
            cardStyle: r()(tj.Nr, a),
            skuPreviewStyle: r()(tj.ev, o),
            onHoverOrFocusChange: d,
            onClick: E,
            "aria-label": c,
            children: f,
        }),
    });
}
function tC(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: s,
            handleOpenUserProfileModal: a,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: u,
            promotion: c,
            ...g
        } = e,
        [m, f] = l.useState(!1),
        x = l.useCallback(async () => {
            if (!m) {
                f(!0);
                try {
                    await eU.A.addSkuToWishlist(t.id, n), u?.(), a?.({ tabSection: en.RP.WISHLIST });
                } catch (e) {
                    (0, to.P0)((0, td.o)(B.intl.string(B.t.F8FvUy), tu.Ck.FAILURE)),
                        tc.O.announce(B.intl.string(B.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, m, a, u]),
        h = l.useMemo(() => r()({ [tj.zW]: s || m }, o), [s, m, o]);
    return (0, i.jsxs)(tS, {
        "aria-label": B.intl.formatToPlainString(B.t.xRjJBe, { productName: (0, tf.T)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: h,
        onClick: x,
        isHoveringOrFocusing: s,
        ...g,
        children: [(0, i.jsx)(tp.oU, { isHoveringOrFocusing: s, loading: m }), !s && !m && c],
    });
}
function tb(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: s } = (0, er.Ay)(...(n ?? []), eT.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        r = (0, tg.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(tC, {
        sku: t,
        analyticsLocations: s,
        promotion: null != r ? (0, i.jsx)(tI.s, { spec: tv, icon: r.Icon, tooltipText: r.tooltip }) : null,
        ...l,
    });
}
function tk(e) {
    let { sku: t, ...n } = e,
        s = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case ta.R.PROFILE_EFFECT:
                case ta.R.NAMEPLATE:
                case ta.R.BUNDLE:
                case ta.R.PROFILE_FRAME:
                    return;
                case ta.R.AVATAR_DECORATION:
                    return tj.ML;
                default:
                    return r()(tj.ML, tj.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(tC, { sku: t, skuPreviewStyle: s, ...n });
}
function tT(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(tC, { sku: t, skuPreviewStyle: tE.MO, ...n });
}
function tN(e) {
    let { sku: t, ...n } = e,
        [s, r] = l.useState(!1);
    switch (t.productLine) {
        case p.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(tb, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case p.EZt.COLLECTIBLES:
            return (0, i.jsx)(tk, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case p.EZt.PREMIUM:
            return (0, i.jsx)(tT, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        default:
            return null;
    }
}
var ty = n(609965);
function tw(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: s, className: a, items: o } = e,
        d = (0, I.bG)([eB.default], () => eB.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: r()(ty.Vg, a),
        children: o.map((e, r) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                ti.dB,
                {
                    newValue: { positionInSection: r, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(tN, {
                        sku: a,
                        wishlistId: t?.id,
                        wishlistOwner: d,
                        guildId: n,
                        handleOpenUserProfileModal: l,
                        analyticsLocations: s,
                    }),
                },
                a.id,
            );
        }),
    });
}
var tR = n(554146),
    t_ = n(131607),
    tL = n(927813),
    tO = n(49999);
let tP = 90 * tL.A.Millis.DAY,
    tD = 90 * tL.A.Millis.DAY;
var tM = n(469364);
function tG(e) {
    let {
            user: t,
            guildId: n,
            wishlist: s,
            hasFetchedWishlist: r = !1,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
        } = e,
        {
            isVisible: u,
            isDismissible: c,
            markAsDismissed: g,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                s = (n?.items.length ?? 0) >= 3,
                [r, a] = l.useState(!1);
            !i || s || r || a(!0);
            let o = (0, I.bG)(
                    [eK.A],
                    () => (null != n ? new Date(eK.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [d, u] = (0, t_.Wl)(
                    tR.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: o + tD, cooldownDurationMs: tP },
                    void 0,
                    !0,
                ),
                c = d === tR.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (c || r || !s),
                isDismissible: s,
                markAsDismissed: l.useCallback(() => {
                    a(!1), u(tO.i.USER_DISMISS);
                }, [u]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return u
        ? (0, i.jsx)(tU, {
              user: t,
              guildId: n,
              wishlist: s,
              analyticsLocations: a,
              impressionSessionId: o,
              className: d,
              isDismissible: c,
              markAsDismissed: g,
          })
        : null;
}
function tU(e) {
    let {
            user: t,
            guildId: n,
            wishlist: s,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
            isDismissible: u,
            markAsDismissed: c,
        } = e,
        { items: g } = (function (e) {
            let {
                    userId: t,
                    wishlist: n,
                    numWishlistItemsToRecommend: i,
                    maxWishlistItemsToShow: s = i,
                    source: r,
                } = e,
                { recommendations: a, status: o } = (0, tl.Ul)({ userId: t, numItems: i, source: r }),
                d = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                u = "success" === o && !d.has(ts.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return u && e.unshift({ sku: (0, e1.rI)(), itemSource: "takeover" }), e.slice(0, s);
                }, [a, d, u, s]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: s,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eF.B5.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tM.kL, d),
              children: [
                  (0, i.jsxs)("div", {
                      className: tM.wx,
                      children: [
                          (0, i.jsx)(L.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: B.intl.string(B.t["+GB8Kt"]),
                          }),
                          u &&
                              (0, i.jsx)("div", {
                                  className: tM.b,
                                  children: (0, i.jsx)(tn.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(ti.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: s?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(tw, {
                          items: g,
                          guildId: n,
                          wishlist: s,
                          className: r()(tM.Vg, tM.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var tW = n(477782),
    tF = n(403581),
    tH = n(922016),
    tB = n(980707),
    tV = n(789645),
    tz = n(847374),
    tK = n(486020),
    tY = n(431194);
function tX(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [u, c] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(eP.Vq).map((e) => {
                        let t = tK.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: B.intl.formatToPlainString(B.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: tY.I, src: t, alt: "" }) : eE.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: eE.U },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, eN.A)(o), handleOpenGameShop: r }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(tW.rX, {
                    children: [
                        null != s &&
                            (0, i.jsx)(tW.Dr, {
                                id: "browse-collectibles-shop",
                                label: B.intl.string(B.t["5upuqx"]),
                                iconLeft: eE.U,
                                leadingAccessory: { type: "icon", icon: eE.U },
                                action: s,
                            }),
                        null != a &&
                            (0, i.jsx)(tW.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: B.intl.string(B.t.lG6a5x),
                                iconLeft: tF.t,
                                leadingAccessory: { type: "icon", icon: tF.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, i.jsx)(
                                    tW.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, g],
        );
    return (0, i.jsx)(tH.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tB.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": B.intl.string(B.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(ej.$, {
                buttonRef: d,
                variant: n,
                size: "sm",
                icon: u ? tV.P : tz.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tq = n(509434),
    tZ = n(365199);
let tJ = C.A.getArticleURL(p.MVz.CUSTOM_PROFILES_WISHLIST);
function tQ(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, er.Ay)(eT.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(tW.rX, {
                          children: [
                              (0, i.jsx)(tW.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: B.intl.string(B.t.b2nFyA),
                                  subtext: B.intl.string(B.t.dw58pE),
                                  checked: n,
                                  action: s,
                              }),
                              (0, i.jsx)(tW.bX, {}),
                              (0, i.jsx)(tW.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: B.intl.string(B.t.hvVgAZ),
                                  icon: tq.I,
                                  trailingIndicator: { type: "icon", icon: tq.I },
                                  action: () => window.open(tJ),
                              }),
                          ],
                      })
                    : null,
            [t, n, s],
        );
    return null == o
        ? null
        : (0, i.jsx)(er.f5, {
              value: a,
              children: (0, i.jsx)(tH.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(tB.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": B.intl.string(B.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(H.q3, {
                          buttonRef: r,
                          icon: tZ.MoreHorizontalIcon,
                          tooltipText: B.intl.string(B.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var t$ = n(526725);
function t0(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(tX, {
              title: B.intl.string(B.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(ej.$, {
              variant: "secondary",
              size: "sm",
              icon: eE.U,
              text: B.intl.string(B.t["i/yzHs"]),
              onClick: n,
          });
}
function t1(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: n,
        isWishlistPublic: l,
        handleOpenShop: s,
        handleOpenGameShop: r,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: t$.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(tX, {
                          title: B.intl.string(B.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: n.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(ej.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: ev.j,
                          text: B.intl.string(B.t.SDUwM0),
                          onClick: s,
                      })),
            (0, i.jsx)(tQ, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function t8(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: s } = e,
        r = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, i.jsx)(ej.$, {
        variant: "primary",
        size: "sm",
        icon: eE.U,
        text: B.intl.formatToPlainString(B.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function t2(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, e_.Us)() === p.BRT.OVERLAY,
        d = (0, eN.A)(n),
        u = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(t8, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(tX, {
                title: B.intl.string(B.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, r, d, a]);
    return (0, i.jsxs)("div", {
        className: t$.y7,
        children: [
            (0, i.jsxs)("div", {
                className: t$.q6,
                children: [
                    (0, i.jsx)(_.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: B.intl.string(B.t.HGnLLT),
                    }),
                    (0, i.jsx)(L.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: B.intl.string(B.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != u) &&
                (0, i.jsxs)(eS.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(ej.$, {
                                variant: "primary",
                                size: "sm",
                                icon: eE.U,
                                text: B.intl.string(B.t.ZbS4QB),
                                onClick: s,
                            }),
                        u,
                    ],
                }),
        ],
    });
}
function t7(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: u,
        } = e,
        c = r.id,
        m = (0, I.bG)([eK.A], () => eK.A.getWishlistSettings(s.id, c)),
        { trackUserProfileWishlistAction: f } = (0, g.NJ)(),
        x = !1 === s.nsfwAllowed,
        [h, p] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && p(m.visibility === eA.a.PUBLIC);
    }, [m?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        j = (0, eZ.A)({ wishlistId: c, onAction: A, productLines: null != r ? (0, eH.y9)(r) : null }),
        E = l.useCallback(() => {
            if (null == c) return;
            let e = h ? eA.a.PRIVATE : eA.a.PUBLIC;
            p(!h),
                eU.A.updateWishlistVisibility(c, e),
                f({
                    wishlistId: c,
                    action: h ? en.Mq.WISHLIST_TOGGLE_PRIVATE : en.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eH.y9)(r) : void 0,
                });
        }, [c, h, f, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: t$.lm,
                    children: [
                        (0, i.jsx)(eC.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(L.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                x &&
                (0, i.jsxs)("div", {
                    className: t$.lm,
                    children: [
                        (0, i.jsx)(eb.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(L.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: j,
                className: t$.U1,
                children: [
                    (0, i.jsx)(L.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: B.intl.format(B.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(t1, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: h,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: u,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, i.jsx)(t0, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function t5(e) {
    let { profileOwner: t, guildId: n } = e,
        s = l.useRef(null);
    (0, eX.i)({ containerRef: s, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: o } = (0, I.cf)([eK.A, eB.default], () => ({
            wishlistId: eK.A.getFirstWishlistId(t.id),
            currentUser: eB.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, er.Ay)(),
        u = (0, ek.A)(() =>
            (0, f.aS)()?.enabled === !0 ? (eY.A.getEntry(t.id)?.ackedWishlistUpdatedAt ?? null) : null,
        );
    l.useEffect(() => {
        !(function (e) {
            if (e === eB.default.getCurrentUser()?.id || null == (0, f.aS)()) return;
            let t = eK.A.getFirstWishlistId(e);
            if (null == t) return;
            let n = (0, ez.SR)(eK.A.getWishlistSettings(e, t));
            null != n && eV.h.dispatch({ type: "PROFILE_READ_STATE_ACK_WISHLIST", userId: e, wishlistUpdatedAt: n });
        })(t.id);
    }, [t.id]);
    let c = (0, eq.A)(t.id),
        { wishlist: g, wasFetched: m, error: x } = (0, eF.fw)({ wishlistId: a, userId: t.id }),
        [h, p] = l.useState(!1);
    m && !h && p(!0), (0, eW.A)(g);
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                s = n.id === i?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, I.bG)([eD.A], () => eD.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, eO.$)(n) && null != a[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, a]),
                d = (0, eM.w)({ userIds: r }),
                u = (0, eM.mn)({ userIds: r }),
                c = (0, eM.tR)(r),
                g = (0, eM.rY)(),
                m = (0, eM.qx)(),
                f = (0, eM.px)();
            return l.useMemo(
                () => (0, R.uniq)([...o, ...d, ...u, ...c, ...(s ? [...g, ...m, ...f] : [])].filter(eP.Vq)),
                [o, d, u, c, g, m, f, s],
            );
        })({ wishlist: g, profileOwner: t, currentUser: o }),
        j = (0, ek.A)(() => (0, ep.A)()),
        E = l.useCallback(() => {
            (0, ey.Cz)({ analyticsLocations: d, analyticsSource: eT.A.USER_PROFILE_WISHLIST });
        }, [d]),
        v = l.useCallback((e) => {
            (0, eG.G)({ applicationId: e });
        }, []),
        S = l.useCallback((e) => {
            (0, ed.closeUserProfileModal)(), (0, eG.default)({ applicationId: e });
        }, []),
        { handleToggle: C } = (0, eR.c)({
            userId: o?.id,
            skuId: ts.pe.TIER_2,
            nuxGraphic: eL.g,
            onNuxShow: ew.D,
            location: eT.A.USER_PROFILE_WISHLIST,
        });
    if (null == o || null != x) return null;
    let b = null == g || 0 === g.items.length;
    return (0, i.jsxs)(t4, {
        scrollerRef: s,
        className: r()({ [t$.XG]: !b }),
        fade: !0,
        children: [
            b
                ? (0, i.jsx)(t2, {
                      showEditingControls: c,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: E,
                      handleOpenGameShop: S,
                      handleOpenGameShopMouseDown: v,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eJ.A, { scrollerRef: s }),
                          (0, i.jsx)(t7, {
                              isOwner: o?.id === t.id,
                              showEditingControls: c,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: E,
                              handleOpenGameShop: S,
                              handleAddNitroToWishlist: (0, eH.C3)(g, ts.pe.TIER_2) ? void 0 : C,
                          }),
                          (0, i.jsx)(tt, {
                              items: g.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: c,
                              ackedWishlistUpdatedAt: u,
                          }),
                      ],
                  }),
            c &&
                (0, i.jsx)(tG, {
                    user: t,
                    guildId: n,
                    wishlist: g,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: j,
                    className: b ? t$._E : t$.HZ,
                }),
        ],
    });
}
var t3 = n(131058);
function t4(e) {
    let { children: t, className: n, scrollerRef: l, ...s } = e;
    return (0, i.jsx)(a.Ip, { ref: l, className: r()(t3.gN, n), fade: !0, ...s, children: t });
}
function t9(e) {
    let { user: t, currentUser: n, section: l, displayProfile: s, guildId: r, channelId: a, onClose: o } = e;
    return l === en.RP.ACTIVITY
        ? (0, i.jsx)(el, { user: t, currentUser: n, displayProfile: s, guildId: r, channelId: a, onClose: o })
        : l === en.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(eg, { user: t, guildId: r, channelId: a, onClose: o })
          : l === en.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(eh, { user: t, onClose: o })
            : l === en.RP.WIDGETS
              ? (0, i.jsx)(eI.A, { user: t, guildId: r, channelId: a })
              : l === en.RP.WISHLIST
                ? (0, i.jsx)(t5, { profileOwner: t, guildId: r })
                : null;
}
function t6(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: s,
            guildId: r,
            channelId: I,
            items: p,
            initialSection: A,
            onClose: j,
        } = e,
        { trackUserProfileAction: E } = (0, g.NJ)(),
        { shouldLogExposure: v } = (0, x.A)(t),
        S = l.useRef(!1),
        C = p.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        C && !S.current && ((S.current = !0), E({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [C, E]);
    let [b, k] = l.useState(() => (p.find((e) => e.section === A) ?? p[0]).section),
        T = p.find((e) => e.section === b) ?? p[0];
    return (
        T.section !== b && k(T.section),
        (0, i.jsxs)("div", {
            className: t3.kL,
            children: [
                v && (0, i.jsx)(f.kM, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: t3.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: T.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && T.section === en.RP.WIDGETS
                                ? (0, c.VQ)()
                                : (E({ action: "PRESS_SECTION", section: e }), k(e));
                        },
                        children: p.map((e) =>
                            (0, i.jsxs)(
                                o.V.Item,
                                {
                                    className: t3.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? B.intl.formatToPlainString(B.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, i.jsx)(h.A, { className: t3.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(o.V.Panel, {
                    id: T.section,
                    "aria-label": T.text,
                    className: t3.NM,
                    children: (0, i.jsx)(d.F, {
                        component: (0, i.jsx)(u.A, { children: (0, i.jsx)(d.H, { children: T.text }) }),
                        children: (0, i.jsx)(t9, {
                            user: t,
                            currentUser: n,
                            displayProfile: s,
                            guildId: r,
                            channelId: I,
                            section: T.section,
                            onClose: j,
                        }),
                    }),
                }),
            ],
        })
    );
}
