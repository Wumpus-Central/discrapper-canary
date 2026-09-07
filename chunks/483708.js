n.d(t, { K: () => t4, A: () => t9 });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(364522),
    o = n(761508),
    c = n(707554),
    d = n(140735),
    u = n(207803),
    g = n(183555),
    m = n(61881),
    x = n(695904),
    f = n(116331),
    h = n(827258),
    p = n(17928),
    I = n(652215),
    j = n(28863),
    A = n(517164),
    E = n(114212),
    v = n(290863),
    S = n(461213),
    C = n(975571),
    b = n(146655),
    T = n(489379),
    k = n(402857),
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
    F = n(766075),
    W = n(562153),
    H = n(993401),
    V = n(375708),
    B = n(92795);
let z = [
        () => V.intl.string(V.t.madJdE),
        () => V.intl.string(V.t.NYmfoP),
        () => V.intl.string(V.t.R2PaCg),
        () => V.intl.string(V.t.laSR8h),
        () => V.intl.string(V.t.DnsJE8),
    ],
    K = [
        () => V.intl.string(V.t.nFSbeE),
        () => V.intl.string(V.t.gTcxOz),
        () => V.intl.string(V.t["8T0wYj"]),
        () => V.intl.string(V.t.BIHl1g),
        () => V.intl.string(V.t["jhBm0+"]),
    ],
    Y = [
        () => V.intl.string(V.t.AyMGXA),
        () => V.intl.string(V.t.aAFW7V),
        (e) => V.intl.formatToPlainString(V.t.h2g0cM, { name: e }),
        () => V.intl.string(V.t.rrYh58),
        () => V.intl.string(V.t["HX3K+F"]),
        () => V.intl.string(V.t["/yW3aY"]),
        () => V.intl.string(V.t["PmL/v0"]),
        () => V.intl.string(V.t.IALa3h),
        () => V.intl.string(V.t.HRcTFL),
        () => V.intl.string(V.t.NuCqPt),
        () => V.intl.string(V.t["M1tw+4"]),
        () => V.intl.string(V.t.UBm1y2),
        () => V.intl.string(V.t.Cu95PQ),
        () => V.intl.string(V.t["R/wFuh"]),
        () => V.intl.string(V.t.HQPAVT),
        () => V.intl.string(V.t.YolGh4),
    ],
    X = [
        I.fg2.STEAM,
        I.fg2.PLAYSTATION,
        I.fg2.XBOX,
        I.fg2.TWITCH,
        I.fg2.BATTLENET,
        I.fg2.LEAGUE_OF_LEGENDS,
        I.fg2.EPIC_GAMES,
        I.fg2.RIOT_GAMES,
        I.fg2.ROBLOX,
        I.fg2.SPOTIFY,
        I.fg2.YOUTUBE,
        I.fg2.CRUNCHYROLL,
        I.fg2.BUNGIE,
    ];
function q(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: B.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: B.FS,
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
    let e = V.intl.string(V.t.RnD2yZ),
        [t] = l.useState(() => ((0, R.sample)(z) ?? z[0])());
    return (0, i.jsx)(q, { heading: e, bodyText: t });
}
function J() {
    let e = V.intl.string(V.t.bFgqYJ),
        [t] = l.useState(() => ((0, R.sample)(K) ?? K[0])());
    return (0, i.jsx)(q, { heading: e, bodyText: t });
}
function Q(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        a = W.Ay.getName(n, s, t),
        o = V.intl.formatToPlainString(V.t.sjSitP, { name: a }),
        [c] = l.useState(() => ((0, R.sample)(Y) ?? Y[0])(a)),
        d = l.useCallback(() => {
            D.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, i.jsx)(q, {
        heading: o,
        bodyText: c,
        children: (0, i.jsx)("div", {
            className: B.v0,
            children: (0, i.jsx)(H.FD, { icon: O.ChatIcon, text: V.intl.string(V.t["g33r/P"]), onClick: d }),
        }),
    });
}
function $() {
    let e = (0, M.Ay)();
    return (0, i.jsx)("div", {
        className: B.HU,
        children: X.map((t, n) => {
            let l = G.A.get(t);
            if (null == l) return null;
            let s = (0, P.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: s, alt: l.name, className: B.gj }, n);
        }),
    });
}
function ee(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            t?.(), (0, F.openUserSettings)(U.X.CONNECTIONS_CATEGORY);
        }, [t]),
        s = l.useCallback(() => {
            t?.(), (0, F.openUserSettings)(U.X.CONNECTED_GAMES_CATEGORY);
        }, [t]);
    return (0, i.jsxs)(q, {
        heading: V.intl.string(V.t.VB6LWY),
        bodyText: V.intl.string(V.t.KpjsU9),
        children: [
            (0, i.jsx)($, {}),
            (0, i.jsxs)("div", {
                className: B.v0,
                children: [
                    (0, i.jsx)(H.FD, { text: V.intl.string(V.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(H.FD, { text: V.intl.string(V.t.GTCx0p), onClick: s }),
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
        { live: o, recent: c, stream: d } = (0, b.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, T.A)({ userId: t.id, guildId: s }),
        m = (0, p.bG)([A.A], () => A.A.isFetchingUserOutbox(t.id)),
        x = t.id === n.id,
        f = (0, p.bG)([S.A, v.A], () => {
            let e = x ? S.A.getStatus() : v.A.getStatus(t.id);
            return e === I.clD.OFFLINE || e === I.clD.INVISIBLE;
        }),
        h = o.length > 0 || null != d,
        R = l?.private !== !0 && null == d && null == g && null != u,
        _ = !f && (h || R),
        L = c.length > 0;
    return _ || L || !m
        ? _ || L || m
            ? (0, i.jsxs)(t4, {
                  className: ei.XG,
                  fade: !0,
                  children: [
                      _
                          ? (0, i.jsx)(et.A, {
                                heading: V.intl.string(V.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: ei.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(y.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: d,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(k.A, {
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
                                                    voiceChannel: u,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      L
                          ? (0, i.jsx)(et.A, {
                                heading: V.intl.string(V.t.jzgEoL),
                                introText: x
                                    ? V.intl.format(V.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  j.Anchor,
                                                  {
                                                      href: C.A.getArticleURL(I.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: en.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: ei.kR,
                                    children: c.map((e) =>
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
            : x
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
    ec = n(402860),
    ed = n(503062),
    eu = n(393213);
function eg(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        { analyticsLocations: a } = (0, er.Ay)(),
        { context: o, trackUserProfileAction: c } = (0, g.NJ)(),
        { mutualFriends: d, mutualFriendsCount: u } = (0, ea.A)(t),
        m = (0, es.A)();
    return (
        l.useEffect(() => {
            (0, eo.A)(t.id, m);
        }, [t.id, m]),
        (0, i.jsx)(t4, {
            className: eu.XG,
            children:
                null == d
                    ? Array.from({ length: u ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: eu.D$,
                                  children: [
                                      (0, i.jsx)(E.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(E.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(Z, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                ed.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: s,
                                    onSelect: () => {
                                        r?.(),
                                            c({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, ec.openUserProfileModal)({
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
    ex = n(345942),
    ef = n(51943);
function eh(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, ea.A)(t);
    return (0, i.jsx)(t4, {
        className: eu.XG,
        fade: !0,
        children:
            null == s && r
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: eu.Y7,
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
                            ef.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    l({ action: "PRESS_MUTUAL_GUILD" }), (0, ex.u)(s.id), n(), (0, em.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, i.jsx)(J, {}),
    });
}
var ep = n(159454),
    eI = n(132500),
    ej = n(777480),
    eA = n(821609),
    eE = n(34188),
    ev = n(307301),
    eS = n(825484),
    eC = n(952270),
    eb = n(885574),
    eT = n(444927),
    ek = n(793574),
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
    eF = n(673843),
    eW = n(561794),
    eH = n(855052),
    eV = n(287809),
    eB = n(228366),
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
function e6(e) {
    let { item: t, index: n, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e3.r)();
    return (0, i.jsx)(e5.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": V.intl.formatToPlainString(V.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: e4.C,
        dropBeforeClassName: e4.A,
        dropAfterClassName: e4.Ze,
        draggingClassName: e4.Id,
        children: (0, i.jsx)("div", { className: e4.An, children: r }),
    });
}
let e9 = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: c,
            onReorder: d,
            isNew: u,
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
        x = l.useMemo(
            () =>
                (0, i.jsx)(e7.A, {
                    item: t,
                    wishlistOwner: s,
                    guildId: r,
                    wishlistId: o,
                    isDragging: c,
                    dragHandle: m,
                    isNew: u,
                }),
            [t, s, r, c, m, o, u],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(e6, { item: t, index: n, wishlistId: o, onReorder: d, children: x }),
          })
        : (0, i.jsx)("li", { children: x });
});
function te(e) {
    var t;
    let { items: n, profileOwner: s, guildId: r, showEditingControls: a, ackedWishlistUpdatedAt: o } = e,
        c = eV.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, p.cf)([eK.A], () => ({ defaultWishlistId: eK.A.getFirstWishlistId(s.id) })),
        u = null != c && c.id !== s.id,
        g =
            ((t = u ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            e2.useConfig({ location: t }).isEnabled && u),
        m = (0, p.bG)([e$.A], () => {
            let e = n;
            return (
                g &&
                    (e = (0, e1.hE)(e, (e) => {
                        var t;
                        return (
                            (t = e$.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== I.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [n, g, s.id]),
        { isDragging: x } = (0, eQ.V)((e) => ({ isDragging: e.isDragging() })),
        f = l.useCallback(
            (e, t) => {
                if (e === t || null == d || 0 === m.length || e < 0 || e >= m.length || t < 0 || t >= m.length) return;
                let n = e0.A.getWishlist(d);
                if (null == n) return;
                let i = m[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, e1.Ap)(n, m, e, t);
                eU.A.reorderWishlistItem(d, i.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [d, m],
        );
    if (null == c || null == d) return null;
    let h = (0, i.jsx)("ul", {
        className: e4.Vg,
        children: m.map((e, t) =>
            (0, i.jsx)(
                e9,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: d,
                    isDragging: x,
                    onReorder: f,
                    isNew: (0, ez.f3)(e.addedAt, o),
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, i.jsx)(e3.B, { emptyListFallbackRef: null, children: h }) : h;
}
function tt(e) {
    let t = eV.default.getCurrentUser()?.id,
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
    tc = n(857250),
    td = n(97483),
    tu = n(765178),
    tg = n(31969),
    tm = n(174459),
    tx = n(661492),
    tf = n(95817),
    th = n(212387),
    tp = n(74135),
    tI = n(460442),
    tj = n(699976),
    tA = n(964164),
    tE = n(880465);
let tv = tj.Z.SIZE_90;
function tS(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: s,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: c,
            onClick: d,
            "aria-label": u,
            wishlistId: m,
            children: x,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, g.NJ)(),
        h = (0, ti.Ar)(),
        p = (0, eT.A)(() => (0, eI.A)()),
        { handleVisibilityChange: j } = (0, tf.G)(p),
        A = (0, tr.K)(j, 0.5, h?.surface != null),
        E = l.useCallback(() => {
            f({
                wishlistId: m,
                action: en.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tm.default.track(I.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: m,
                        wishlist_owner_id: h.wishlistOwnerId,
                        surface: h.surface,
                        position_in_section: h.positionInSection,
                        item_source: h.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: p,
                        impression_session_id: h.impressionSessionId,
                        location_stack: h.analyticsLocations,
                    }),
                d();
        }, [d, t.id, t.productLine, f, m, h, p]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(th.A, {
            sku: t,
            user: n,
            guildId: s,
            spec: tv,
            cardStyle: r()(tA.Nr, a),
            skuPreviewStyle: r()(tA.ev, o),
            onHoverOrFocusChange: c,
            onClick: E,
            "aria-label": u,
            children: x,
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
            wishlistOwner: c,
            onAddSuccess: d,
            promotion: u,
            ...g
        } = e,
        [m, x] = l.useState(!1),
        f = l.useCallback(async () => {
            if (!m) {
                x(!0);
                try {
                    await eU.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: en.RP.WISHLIST });
                } catch (e) {
                    (0, to.P0)((0, tc.o)(V.intl.string(V.t.F8FvUy), td.Ck.FAILURE)),
                        tu.O.announce(V.intl.string(V.t.F8FvUy));
                } finally {
                    x(!1);
                }
            }
        }, [t, n, m, a, d]),
        h = l.useMemo(() => r()({ [tA.zW]: s || m }, o), [s, m, o]);
    return (0, i.jsxs)(tS, {
        "aria-label": V.intl.formatToPlainString(V.t.xRjJBe, { productName: (0, tx.T)(t) }),
        sku: t,
        wishlistOwner: c,
        skuPreviewStyle: h,
        onClick: f,
        isHoveringOrFocusing: s,
        ...g,
        children: [(0, i.jsx)(tI.oU, { isHoveringOrFocusing: s, loading: m }), !s && !m && u],
    });
}
function tb(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: s } = (0, er.Ay)(...(n ?? []), ek.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        r = (0, tg.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(tC, {
        sku: t,
        analyticsLocations: s,
        promotion: null != r ? (0, i.jsx)(tp.s, { spec: tv, icon: r.Icon, tooltipText: r.tooltip }) : null,
        ...l,
    });
}
function tT(e) {
    let { sku: t, ...n } = e,
        s = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case ta.R.PROFILE_EFFECT:
                case ta.R.NAMEPLATE:
                case ta.R.BUNDLE:
                case ta.R.PROFILE_FRAME:
                    return;
                case ta.R.AVATAR_DECORATION:
                    return tA.ML;
                default:
                    return r()(tA.ML, tA.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(tC, { sku: t, skuPreviewStyle: s, ...n });
}
function tk(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(tC, { sku: t, skuPreviewStyle: tE.MO, ...n });
}
function tN(e) {
    let { sku: t, ...n } = e,
        [s, r] = l.useState(!1);
    switch (t.productLine) {
        case I.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(tb, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case I.EZt.COLLECTIBLES:
            return (0, i.jsx)(tT, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case I.EZt.PREMIUM:
            return (0, i.jsx)(tk, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        default:
            return null;
    }
}
var ty = n(609965);
function tw(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: s, className: a, items: o } = e,
        c = (0, p.bG)([eV.default], () => eV.default.getUser(t?.userId));
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
                        wishlistOwner: c,
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
            className: c,
        } = e,
        {
            isVisible: d,
            isDismissible: u,
            markAsDismissed: g,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                s = (n?.items.length ?? 0) >= 3,
                [r, a] = l.useState(!1);
            !i || s || r || a(!0);
            let o = (0, p.bG)(
                    [eK.A],
                    () => (null != n ? new Date(eK.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [c, d] = (0, t_.Wl)(
                    tR.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: o + tD, cooldownDurationMs: tP },
                    void 0,
                    !0,
                ),
                u = c === tR.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (u || r || !s),
                isDismissible: s,
                markAsDismissed: l.useCallback(() => {
                    a(!1), d(tO.i.USER_DISMISS);
                }, [d]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return d
        ? (0, i.jsx)(tU, {
              user: t,
              guildId: n,
              wishlist: s,
              analyticsLocations: a,
              impressionSessionId: o,
              className: c,
              isDismissible: u,
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
            className: c,
            isDismissible: d,
            markAsDismissed: u,
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
                c = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !c.has(ts.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !c.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return d && e.unshift({ sku: (0, e1.rI)(), itemSource: "takeover" }), e.slice(0, s);
                }, [a, c, d, s]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: s,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eW.B5.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tM.kL, c),
              children: [
                  (0, i.jsxs)("div", {
                      className: tM.wx,
                      children: [
                          (0, i.jsx)(L.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: V.intl.string(V.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: tM.b,
                                  children: (0, i.jsx)(tn.J, { size: "xs", onClick: u }),
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
var tF = n(477782),
    tW = n(403581),
    tH = n(922016),
    tV = n(980707),
    tB = n(789645),
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
        c = l.useRef(null),
        [d, u] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(eP.Vq).map((e) => {
                        let t = tK.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: V.intl.formatToPlainString(V.t["HDT/rg"], { applicationName: e.name }),
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
                (0, i.jsxs)(tF.rX, {
                    children: [
                        null != s &&
                            (0, i.jsx)(tF.Dr, {
                                id: "browse-collectibles-shop",
                                label: V.intl.string(V.t["5upuqx"]),
                                iconLeft: eE.U,
                                leadingAccessory: { type: "icon", icon: eE.U },
                                action: s,
                            }),
                        null != a &&
                            (0, i.jsx)(tF.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: V.intl.string(V.t.lG6a5x),
                                iconLeft: tW.t,
                                leadingAccessory: { type: "icon", icon: tW.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, i.jsx)(
                                    tF.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, g],
        );
    return (0, i.jsx)(tH.Y, {
        targetElementRef: c,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tV.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": V.intl.string(V.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(eA.$, {
                buttonRef: c,
                variant: n,
                size: "sm",
                icon: d ? tB.P : tz.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tq = n(509434),
    tZ = n(365199);
let tJ = C.A.getArticleURL(I.MVz.CUSTOM_PROFILES_WISHLIST);
function tQ(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, er.Ay)(ek.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(tF.rX, {
                          children: [
                              (0, i.jsx)(tF.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: V.intl.string(V.t.b2nFyA),
                                  subtext: V.intl.string(V.t.dw58pE),
                                  checked: n,
                                  action: s,
                              }),
                              (0, i.jsx)(tF.bX, {}),
                              (0, i.jsx)(tF.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: V.intl.string(V.t.hvVgAZ),
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
                      return (0, i.jsx)(tV.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": V.intl.string(V.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(H.q3, {
                          buttonRef: r,
                          icon: tZ.MoreHorizontalIcon,
                          tooltipText: V.intl.string(V.t["UKOtz+"]),
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
              title: V.intl.string(V.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(eA.$, {
              variant: "secondary",
              size: "sm",
              icon: eE.U,
              text: V.intl.string(V.t["i/yzHs"]),
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
                          title: V.intl.string(V.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: n.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(eA.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: ev.j,
                          text: V.intl.string(V.t.SDUwM0),
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
    return (0, i.jsx)(eA.$, {
        variant: "primary",
        size: "sm",
        icon: eE.U,
        text: V.intl.formatToPlainString(V.t["HDT/rg"], { applicationName: t.name }),
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
        o = (0, e_.Us)() === I.BRT.OVERLAY,
        c = (0, eN.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = c.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(t8, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(tX, {
                title: V.intl.string(V.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, r, c, a]);
    return (0, i.jsxs)("div", {
        className: t$.y7,
        children: [
            (0, i.jsxs)("div", {
                className: t$.q6,
                children: [
                    (0, i.jsx)(_.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: V.intl.string(V.t.HGnLLT),
                    }),
                    (0, i.jsx)(L.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: V.intl.string(V.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(eS.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(eA.$, {
                                variant: "primary",
                                size: "sm",
                                icon: eE.U,
                                text: V.intl.string(V.t.ZbS4QB),
                                onClick: s,
                            }),
                        d,
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
            handleOpenGameShop: c,
            handleAddNitroToWishlist: d,
        } = e,
        u = r.id,
        m = (0, p.bG)([eK.A], () => eK.A.getWishlistSettings(s.id, u)),
        { trackUserProfileWishlistAction: x } = (0, g.NJ)(),
        f = !1 === s.nsfwAllowed,
        [h, I] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && I(m.visibility === ej.a.PUBLIC);
    }, [m?.visibility]);
    let j = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && x({ wishlistId: t, action: n, productLines: i });
            },
            [x],
        ),
        A = (0, eZ.A)({ wishlistId: u, onAction: j, productLines: null != r ? (0, eH.y9)(r) : null }),
        E = l.useCallback(() => {
            if (null == u) return;
            let e = h ? ej.a.PRIVATE : ej.a.PUBLIC;
            I(!h),
                eU.A.updateWishlistVisibility(u, e),
                x({
                    wishlistId: u,
                    action: h ? en.Mq.WISHLIST_TOGGLE_PRIVATE : en.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eH.y9)(r) : void 0,
                });
        }, [u, h, x, r]);
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
                            children: V.intl.string(V.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                f &&
                (0, i.jsxs)("div", {
                    className: t$.lm,
                    children: [
                        (0, i.jsx)(eb.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(L.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: V.intl.string(V.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: A,
                className: t$.U1,
                children: [
                    (0, i.jsx)(L.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: V.intl.format(V.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(t1, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: h,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                              handleAddNitroToWishlist: d,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, i.jsx)(t0, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
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
    let { wishlistId: a, currentUser: o } = (0, p.cf)([eK.A, eV.default], () => ({
            wishlistId: eK.A.getFirstWishlistId(t.id),
            currentUser: eV.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, er.Ay)(),
        d = (0, eT.A)(() =>
            (0, x.aS)()?.enabled === !0 ? (eY.A.getEntry(t.id)?.ackedWishlistUpdatedAt ?? null) : null,
        );
    l.useEffect(() => {
        !(function (e) {
            if (e === eV.default.getCurrentUser()?.id || null == (0, x.aS)()) return;
            let t = eK.A.getFirstWishlistId(e);
            if (null == t) return;
            let n = (0, ez.SR)(eK.A.getWishlistSettings(e, t));
            null != n && eB.h.dispatch({ type: "PROFILE_READ_STATE_ACK_WISHLIST", userId: e, wishlistUpdatedAt: n });
        })(t.id);
    }, [t.id]);
    let u = (0, eq.A)(t.id),
        { wishlist: g, wasFetched: m, error: f } = (0, eW.fw)({ wishlistId: a, userId: t.id }),
        [h, I] = l.useState(!1);
    m && !h && I(!0), (0, eF.A)(g);
    let j = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                s = n.id === i?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, p.bG)([eD.A], () => eD.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, eO.$)(n) && null != a[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, a]),
                c = (0, eM.w)({ userIds: r }),
                d = (0, eM.mn)({ userIds: r }),
                u = (0, eM.tR)(r),
                g = (0, eM.rY)(),
                m = (0, eM.qx)(),
                x = (0, eM.px)();
            return l.useMemo(
                () => (0, R.uniq)([...o, ...c, ...d, ...u, ...(s ? [...g, ...m, ...x] : [])].filter(eP.Vq)),
                [o, c, d, u, g, m, x, s],
            );
        })({ wishlist: g, profileOwner: t, currentUser: o }),
        A = (0, eT.A)(() => (0, eI.A)()),
        E = l.useCallback(() => {
            (0, ey.Cz)({ analyticsLocations: c, analyticsSource: ek.A.USER_PROFILE_WISHLIST });
        }, [c]),
        v = l.useCallback((e) => {
            (0, eG.G)({ applicationId: e });
        }, []),
        S = l.useCallback((e) => {
            (0, ec.closeUserProfileModal)(), (0, eG.default)({ applicationId: e });
        }, []),
        { handleToggle: C } = (0, eR.c)({
            userId: o?.id,
            skuId: ts.pe.TIER_2,
            nuxGraphic: eL.g,
            onNuxShow: ew.D,
            location: ek.A.USER_PROFILE_WISHLIST,
        });
    if (null == o || null != f) return null;
    let b = null == g || 0 === g.items.length;
    return (0, i.jsxs)(t4, {
        scrollerRef: s,
        className: r()({ [t$.XG]: !b }),
        fade: !0,
        children: [
            b
                ? (0, i.jsx)(t2, {
                      showEditingControls: u,
                      socialLayerStorefrontApplicationIds: j,
                      handleOpenShop: E,
                      handleOpenGameShop: S,
                      handleOpenGameShopMouseDown: v,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eJ.A, { scrollerRef: s }),
                          (0, i.jsx)(t7, {
                              isOwner: o?.id === t.id,
                              showEditingControls: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: j,
                              handleOpenShop: E,
                              handleOpenGameShop: S,
                              handleAddNitroToWishlist: (0, eH.C3)(g, ts.pe.TIER_2) ? void 0 : C,
                          }),
                          (0, i.jsx)(tt, {
                              items: g.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: u,
                              ackedWishlistUpdatedAt: d,
                          }),
                      ],
                  }),
            u &&
                (0, i.jsx)(tG, {
                    user: t,
                    guildId: n,
                    wishlist: g,
                    hasFetchedWishlist: h,
                    analyticsLocations: c,
                    impressionSessionId: A,
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
function t6(e) {
    let { user: t, currentUser: n, section: l, displayProfile: s, guildId: r, channelId: a, onClose: o } = e;
    return l === en.RP.ACTIVITY
        ? (0, i.jsx)(el, { user: t, currentUser: n, displayProfile: s, guildId: r, channelId: a, onClose: o })
        : l === en.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(eg, { user: t, guildId: r, channelId: a, onClose: o })
          : l === en.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(eh, { user: t, onClose: o })
            : l === en.RP.WIDGETS
              ? (0, i.jsx)(ep.A, { user: t, guildId: r, channelId: a })
              : l === en.RP.WISHLIST
                ? (0, i.jsx)(t5, { profileOwner: t, guildId: r })
                : null;
}
function t9(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: s,
            guildId: r,
            channelId: p,
            items: I,
            initialSection: j,
            onClose: A,
        } = e,
        { trackUserProfileAction: E } = (0, g.NJ)(),
        { shouldLogExposure: v } = (0, f.A)(t),
        S = l.useRef(!1),
        C = I.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        C && !S.current && ((S.current = !0), E({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [C, E]);
    let [b, T] = l.useState(() => (I.find((e) => e.section === j) ?? I[0]).section),
        k = I.find((e) => e.section === b) ?? I[0];
    return (
        k.section !== b && T(k.section),
        (0, i.jsxs)("div", {
            className: t3.kL,
            children: [
                v && (0, i.jsx)(x.kM, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: t3.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: k.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && k.section === en.RP.WIDGETS
                                ? (0, u.VQ)()
                                : (E({ action: "PRESS_SECTION", section: e }), T(e));
                        },
                        children: I.map((e) =>
                            (0, i.jsxs)(
                                o.V.Item,
                                {
                                    className: t3.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? V.intl.formatToPlainString(V.t.c4JwHL, { tabName: e.text })
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
                    id: k.section,
                    "aria-label": k.text,
                    className: t3.NM,
                    children: (0, i.jsx)(c.F, {
                        component: (0, i.jsx)(d.A, { children: (0, i.jsx)(c.H, { children: k.text }) }),
                        children: (0, i.jsx)(t6, {
                            user: t,
                            currentUser: n,
                            displayProfile: s,
                            guildId: r,
                            channelId: p,
                            section: k.section,
                            onClose: A,
                        }),
                    }),
                }),
            ],
        })
    );
}
