n.d(t, { K: () => t1, A: () => t2 });
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
    x = n(17928),
    f = n(652215),
    h = n(28863),
    I = n(517164),
    p = n(114212),
    j = n(290863),
    A = n(461213),
    E = n(975571),
    v = n(146655),
    S = n(489379),
    C = n(402857),
    b = n(353394),
    k = n(64622),
    T = n(986712),
    y = n(435558),
    N = n(297264),
    R = n(834730),
    w = n(534890),
    _ = n(366010),
    L = n(308528),
    O = n(736653),
    P = n(573648),
    D = n(780964),
    M = n(766075),
    G = n(562153),
    U = n(993401),
    F = n(375708),
    W = n(92795);
let H = [
        () => F.intl.string(F.t.madJdE),
        () => F.intl.string(F.t.NYmfoP),
        () => F.intl.string(F.t.R2PaCg),
        () => F.intl.string(F.t.laSR8h),
        () => F.intl.string(F.t.DnsJE8),
    ],
    V = [
        () => F.intl.string(F.t.nFSbeE),
        () => F.intl.string(F.t.gTcxOz),
        () => F.intl.string(F.t["8T0wYj"]),
        () => F.intl.string(F.t.BIHl1g),
        () => F.intl.string(F.t["jhBm0+"]),
    ],
    B = [
        () => F.intl.string(F.t.AyMGXA),
        () => F.intl.string(F.t.aAFW7V),
        (e) => F.intl.formatToPlainString(F.t.h2g0cM, { name: e }),
        () => F.intl.string(F.t.rrYh58),
        () => F.intl.string(F.t["HX3K+F"]),
        () => F.intl.string(F.t["/yW3aY"]),
        () => F.intl.string(F.t["PmL/v0"]),
        () => F.intl.string(F.t.IALa3h),
        () => F.intl.string(F.t.HRcTFL),
        () => F.intl.string(F.t.NuCqPt),
        () => F.intl.string(F.t["M1tw+4"]),
        () => F.intl.string(F.t.UBm1y2),
        () => F.intl.string(F.t.Cu95PQ),
        () => F.intl.string(F.t["R/wFuh"]),
        () => F.intl.string(F.t.HQPAVT),
        () => F.intl.string(F.t.YolGh4),
    ],
    z = [
        f.fg2.STEAM,
        f.fg2.PLAYSTATION,
        f.fg2.XBOX,
        f.fg2.TWITCH,
        f.fg2.BATTLENET,
        f.fg2.LEAGUE_OF_LEGENDS,
        f.fg2.EPIC_GAMES,
        f.fg2.RIOT_GAMES,
        f.fg2.ROBLOX,
        f.fg2.SPOTIFY,
        f.fg2.YOUTUBE,
        f.fg2.CRUNCHYROLL,
        f.fg2.BUNGIE,
    ];
function Y(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: W.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: W.FS,
                children: [
                    (0, i.jsx)(N.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(R.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function K() {
    let e = F.intl.string(F.t.RnD2yZ),
        [t] = l.useState(() => ((0, y.sample)(H) ?? H[0])());
    return (0, i.jsx)(Y, { heading: e, bodyText: t });
}
function X() {
    let e = F.intl.string(F.t.bFgqYJ),
        [t] = l.useState(() => ((0, y.sample)(V) ?? V[0])());
    return (0, i.jsx)(Y, { heading: e, bodyText: t });
}
function q(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        a = G.Ay.getName(n, s, t),
        o = F.intl.formatToPlainString(F.t.sjSitP, { name: a }),
        [c] = l.useState(() => ((0, y.sample)(B) ?? B[0])(a)),
        d = l.useCallback(() => {
            L.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, i.jsx)(Y, {
        heading: o,
        bodyText: c,
        children: (0, i.jsx)("div", {
            className: W.v0,
            children: (0, i.jsx)(U.FD, { icon: w.ChatIcon, text: F.intl.string(F.t["g33r/P"]), onClick: d }),
        }),
    });
}
function Z() {
    let e = (0, O.Ay)();
    return (0, i.jsx)("div", {
        className: W.HU,
        children: z.map((t, n) => {
            let l = P.A.get(t);
            if (null == l) return null;
            let s = (0, _.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: s, alt: l.name, className: W.gj }, n);
        }),
    });
}
function J(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            t?.(), (0, M.openUserSettings)(D.X.CONNECTIONS_CATEGORY);
        }, [t]),
        s = l.useCallback(() => {
            t?.(), (0, M.openUserSettings)(D.X.CONNECTED_GAMES_CATEGORY);
        }, [t]);
    return (0, i.jsxs)(Y, {
        heading: F.intl.string(F.t.VB6LWY),
        bodyText: F.intl.string(F.t.KpjsU9),
        children: [
            (0, i.jsx)(Z, {}),
            (0, i.jsxs)("div", {
                className: W.v0,
                children: [
                    (0, i.jsx)(U.FD, { text: F.intl.string(F.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(U.FD, { text: F.intl.string(F.t.GTCx0p), onClick: s }),
                ],
            }),
        ],
    });
}
var Q = n(83013),
    $ = n(518477),
    ee = n(587763);
function et(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: s, channelId: r, onClose: a } = e,
        { live: o, recent: c, stream: d } = (0, v.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, S.A)({ userId: t.id, guildId: s }),
        m = (0, x.bG)([I.A], () => I.A.isFetchingUserOutbox(t.id)),
        y = t.id === n.id,
        N = (0, x.bG)([A.A, j.A], () => {
            let e = y ? A.A.getStatus() : j.A.getStatus(t.id);
            return e === f.clD.OFFLINE || e === f.clD.INVISIBLE;
        }),
        R = o.length > 0 || null != d,
        w = l?.private !== !0 && null == d && null == g && null != u,
        _ = !N && (R || w),
        L = c.length > 0;
    return _ || L || !m
        ? _ || L || m
            ? (0, i.jsxs)(t1, {
                  className: ee.XG,
                  fade: !0,
                  children: [
                      _
                          ? (0, i.jsx)(Q.A, {
                                heading: F.intl.string(F.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: ee.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(k.A, {
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
                                                    children: (0, i.jsx)(C.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        w &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(T.A, {
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
                          ? (0, i.jsx)(Q.A, {
                                heading: F.intl.string(F.t.jzgEoL),
                                introText: y
                                    ? F.intl.format(F.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  h.Anchor,
                                                  {
                                                      href: E.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: $.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: ee.kR,
                                    children: c.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(b.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : y
              ? (0, i.jsx)(J, { onClose: a })
              : (0, i.jsx)(q, { user: t, guildId: l?.guildId ?? s, channelId: r, onClose: a })
        : (0, i.jsx)("div", {
              className: ee.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: ee.kr,
                          children: [
                              (0, i.jsx)(p.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(p.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var en = n(163126),
    ei = n(688810),
    el = n(913453),
    es = n(229187),
    er = n(402860),
    ea = n(503062),
    eo = n(393213);
function ec(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        { analyticsLocations: a } = (0, ei.Ay)(),
        { context: o, trackUserProfileAction: c } = (0, g.NJ)(),
        { mutualFriends: d, mutualFriendsCount: u } = (0, el.A)(t),
        m = (0, en.A)();
    return (
        l.useEffect(() => {
            (0, es.A)(t.id, m);
        }, [t.id, m]),
        (0, i.jsx)(t1, {
            className: eo.XG,
            children:
                null == d
                    ? Array.from({ length: u ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: eo.D$,
                                  children: [
                                      (0, i.jsx)(p.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(p.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(K, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                ea.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: s,
                                    onSelect: () => {
                                        r?.(),
                                            c({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, er.openUserProfileModal)({
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
var ed = n(398590),
    eu = n(345942),
    eg = n(51943);
function em(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, el.A)(t);
    return (0, i.jsx)(t1, {
        className: eo.XG,
        fade: !0,
        children:
            null == s && r
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: eo.Y7,
                              children: [
                                  (0, i.jsx)(p.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(p.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != s || r) && s?.length !== 0
                  ? s?.map((e) => {
                        let { guild: s, nick: r } = e;
                        return (0, i.jsx)(
                            eg.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    l({ action: "PRESS_MUTUAL_GUILD" }), (0, eu.u)(s.id), n(), (0, ed.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, i.jsx)(X, {}),
    });
}
var ex = n(711871),
    ef = n(132500),
    eh = n(777480),
    eI = n(821609),
    ep = n(34188),
    ej = n(307301),
    eA = n(825484),
    eE = n(952270),
    ev = n(885574),
    eS = n(444927),
    eC = n(793574),
    eb = n(429913),
    ek = n(839534),
    eT = n(895360),
    ey = n(152472),
    eN = n(267102),
    eR = n(285373);
n(321073);
var ew = n(721932),
    e_ = n(403362),
    eL = n(832163),
    eO = n(501838),
    eP = n(44724),
    eD = n(808247),
    eM = n(673843),
    eG = n(561794),
    eU = n(855052),
    eF = n(287809),
    eW = n(321191),
    eH = n(600761),
    eV = n(389667),
    eB = n(535089),
    ez = n(128988),
    eY = n(686246),
    eK = n(111085),
    eX = n(107563),
    eq = n(840411),
    eZ = n(666810);
let eJ = (0, n(945810).mj)({
    name: "2026-07-wishlist-show-owned-items-last",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 1: { isEnabled: !0 } },
});
var eQ = n(724834),
    e$ = n(451395),
    e0 = n(823016),
    e1 = n(100741);
function e8(e) {
    let { item: t, index: n, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e0.r)();
    return (0, i.jsx)(e$.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": F.intl.formatToPlainString(F.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: e1.C,
        dropBeforeClassName: e1.A,
        dropAfterClassName: e1.Ze,
        draggingClassName: e1.Id,
        children: (0, i.jsx)("div", { className: e1.An, children: r }),
    });
}
let e2 = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: c,
            onReorder: d,
        } = e,
        { registerDragHandleRef: u } = (0, e0.r)(),
        g = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(e$.jV, {
                          buttonRef: u(String(t.skuId)),
                          className: e1.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, u, t.skuId],
        ),
        m = l.useMemo(
            () =>
                (0, i.jsx)(eQ.A, {
                    item: t,
                    wishlistOwner: s,
                    guildId: r,
                    wishlistId: o,
                    isDragging: c,
                    dragHandle: g,
                }),
            [t, s, r, c, g, o],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(e8, { item: t, index: n, wishlistId: o, onReorder: d, children: m }),
          })
        : (0, i.jsx)("li", { children: m });
});
function e7(e) {
    var t;
    let { items: n, profileOwner: s, guildId: r, showEditingControls: a } = e,
        o = eF.default.getCurrentUser(),
        { defaultWishlistId: c } = (0, x.cf)([eW.A], () => ({ defaultWishlistId: eW.A.getFirstWishlistId(s.id) })),
        d = null != o && o.id !== s.id,
        u =
            ((t = d ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            eJ.useConfig({ location: t }).isEnabled && d),
        g = (0, x.bG)([eK.A], () => {
            let e = n;
            return (
                u &&
                    (e = (0, eq.hE)(e, (e) => {
                        var t;
                        return (
                            (t = eK.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== f.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [n, u, s.id]),
        { isDragging: m } = (0, eY.V)((e) => ({ isDragging: e.isDragging() })),
        h = l.useCallback(
            (e, t) => {
                if (e === t || null == c || 0 === g.length || e < 0 || e >= g.length || t < 0 || t >= g.length) return;
                let n = eX.A.getWishlist(c);
                if (null == n) return;
                let i = g[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, eq.Ap)(n, g, e, t);
                eD.A.reorderWishlistItem(c, i.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [c, g],
        );
    if (null == o || null == c) return null;
    let I = (0, i.jsx)("ul", {
        className: e1.Vg,
        children: g.map((e, t) =>
            (0, i.jsx)(
                e2,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: c,
                    isDragging: m,
                    onReorder: h,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, i.jsx)(e0.B, { emptyListFallbackRef: null, children: I }) : I;
}
function e5(e) {
    let t = eF.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(eZ.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(e7, { ...e }),
    });
}
var e3 = n(815021),
    e4 = n(299679);
n(667532);
var e6 = n(862772),
    e9 = n(202541),
    te = n(172218),
    tt = n(575593),
    tn = n(691540),
    ti = n(857250),
    tl = n(97483),
    ts = n(765178),
    tr = n(31969),
    ta = n(174459),
    to = n(661492),
    tc = n(95817),
    td = n(212387),
    tu = n(74135),
    tg = n(460442),
    tm = n(699976),
    tx = n(964164),
    tf = n(880465);
let th = tm.Z.SIZE_90;
function tI(e) {
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
        { trackUserProfileWishlistAction: h } = (0, g.NJ)(),
        I = (0, e4.Ar)(),
        p = (0, eS.A)(() => (0, ef.A)()),
        { handleVisibilityChange: j } = (0, tc.G)(p),
        A = (0, te.K)(j, 0.5, I?.surface != null),
        E = l.useCallback(() => {
            h({
                wishlistId: m,
                action: $.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                I?.surface != null &&
                    ta.default.track(f.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: m,
                        wishlist_owner_id: I.wishlistOwnerId,
                        surface: I.surface,
                        position_in_section: I.positionInSection,
                        item_source: I.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: p,
                        impression_session_id: I.impressionSessionId,
                        location_stack: I.analyticsLocations,
                    }),
                d();
        }, [d, t.id, t.productLine, h, m, I, p]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(td.A, {
            sku: t,
            user: n,
            guildId: s,
            spec: th,
            cardStyle: r()(tx.Nr, a),
            skuPreviewStyle: r()(tx.ev, o),
            onHoverOrFocusChange: c,
            onClick: E,
            "aria-label": u,
            children: x,
        }),
    });
}
function tp(e) {
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
                    await eD.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: $.RP.WISHLIST });
                } catch (e) {
                    (0, tn.P0)((0, ti.o)(F.intl.string(F.t.F8FvUy), tl.Ck.FAILURE)),
                        ts.O.announce(F.intl.string(F.t.F8FvUy));
                } finally {
                    x(!1);
                }
            }
        }, [t, n, m, a, d]),
        h = l.useMemo(() => r()({ [tx.zW]: s || m }, o), [s, m, o]);
    return (0, i.jsxs)(tI, {
        "aria-label": F.intl.formatToPlainString(F.t.xRjJBe, { productName: (0, to.T)(t) }),
        sku: t,
        wishlistOwner: c,
        skuPreviewStyle: h,
        onClick: f,
        isHoveringOrFocusing: s,
        ...g,
        children: [(0, i.jsx)(tg.oU, { isHoveringOrFocusing: s, loading: m }), !s && !m && u],
    });
}
function tj(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: s } = (0, ei.Ay)(...(n ?? []), eC.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        r = (0, tr.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(tp, {
        sku: t,
        analyticsLocations: s,
        promotion: null != r ? (0, i.jsx)(tu.s, { spec: th, icon: r.Icon, tooltipText: r.tooltip }) : null,
        ...l,
    });
}
function tA(e) {
    let { sku: t, ...n } = e,
        s = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case tt.R.PROFILE_EFFECT:
                case tt.R.NAMEPLATE:
                case tt.R.BUNDLE:
                case tt.R.PROFILE_FRAME:
                    return;
                case tt.R.AVATAR_DECORATION:
                    return tx.ML;
                default:
                    return r()(tx.ML, tx.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(tp, { sku: t, skuPreviewStyle: s, ...n });
}
function tE(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(tp, { sku: t, skuPreviewStyle: tf.MO, ...n });
}
function tv(e) {
    let { sku: t, ...n } = e,
        [s, r] = l.useState(!1);
    switch (t.productLine) {
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(tj, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case f.EZt.COLLECTIBLES:
            return (0, i.jsx)(tA, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case f.EZt.PREMIUM:
            return (0, i.jsx)(tE, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        default:
            return null;
    }
}
var tS = n(609965);
function tC(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: s, className: a, items: o } = e,
        c = (0, x.bG)([eF.default], () => eF.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: r()(tS.Vg, a),
        children: o.map((e, r) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                e4.dB,
                {
                    newValue: { positionInSection: r, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(tv, {
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
var tb = n(554146),
    tk = n(131607),
    tT = n(927813),
    ty = n(49999);
let tN = 90 * tT.A.Millis.DAY,
    tR = 90 * tT.A.Millis.DAY;
var tw = n(469364);
function t_(e) {
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
            let o = (0, x.bG)(
                    [eW.A],
                    () => (null != n ? new Date(eW.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [c, d] = (0, tk.Wl)(
                    tb.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: o + tR, cooldownDurationMs: tN },
                    void 0,
                    !0,
                ),
                u = c === tb.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (u || r || !s),
                isDismissible: s,
                markAsDismissed: l.useCallback(() => {
                    a(!1), d(ty.i.USER_DISMISS);
                }, [d]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return d
        ? (0, i.jsx)(tL, {
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
function tL(e) {
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
                { recommendations: a, status: o } = (0, e6.Ul)({ userId: t, numItems: i, source: r }),
                c = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !c.has(e9.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !c.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return d && e.unshift({ sku: (0, eq.rI)(), itemSource: "takeover" }), e.slice(0, s);
                }, [a, c, d, s]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: s,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eG.B5.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tw.kL, c),
              children: [
                  (0, i.jsxs)("div", {
                      className: tw.wx,
                      children: [
                          (0, i.jsx)(R.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: F.intl.string(F.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: tw.b,
                                  children: (0, i.jsx)(e3.J, { size: "xs", onClick: u }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(e4.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: s?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(tC, {
                          items: g,
                          guildId: n,
                          wishlist: s,
                          className: r()(tw.Vg, tw.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var tO = n(477782),
    tP = n(403581),
    tD = n(922016),
    tM = n(980707),
    tG = n(789645),
    tU = n(847374),
    tF = n(486020),
    tW = n(431194);
function tH(e) {
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
                    t.filter(e_.Vq).map((e) => {
                        let t = tF.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: tW.I, src: t, alt: "" }) : ep.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: ep.U },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, eb.A)(o), handleOpenGameShop: r }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(tO.rX, {
                    children: [
                        null != s &&
                            (0, i.jsx)(tO.Dr, {
                                id: "browse-collectibles-shop",
                                label: F.intl.string(F.t["5upuqx"]),
                                iconLeft: ep.U,
                                leadingAccessory: { type: "icon", icon: ep.U },
                                action: s,
                            }),
                        null != a &&
                            (0, i.jsx)(tO.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: F.intl.string(F.t.lG6a5x),
                                iconLeft: tP.t,
                                leadingAccessory: { type: "icon", icon: tP.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, i.jsx)(
                                    tO.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, g],
        );
    return (0, i.jsx)(tD.Y, {
        targetElementRef: c,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tM.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": F.intl.string(F.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(eI.$, {
                buttonRef: c,
                variant: n,
                size: "sm",
                icon: d ? tG.P : tU.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tV = n(509434),
    tB = n(365199);
let tz = E.A.getArticleURL(f.MVz.CUSTOM_PROFILES_WISHLIST);
function tY(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, ei.Ay)(eC.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(tO.rX, {
                          children: [
                              (0, i.jsx)(tO.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: F.intl.string(F.t.b2nFyA),
                                  subtext: F.intl.string(F.t.dw58pE),
                                  checked: n,
                                  action: s,
                              }),
                              (0, i.jsx)(tO.bX, {}),
                              (0, i.jsx)(tO.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: F.intl.string(F.t.hvVgAZ),
                                  icon: tV.I,
                                  trailingIndicator: { type: "icon", icon: tV.I },
                                  action: () => window.open(tz),
                              }),
                          ],
                      })
                    : null,
            [t, n, s],
        );
    return null == o
        ? null
        : (0, i.jsx)(ei.f5, {
              value: a,
              children: (0, i.jsx)(tD.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(tM.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": F.intl.string(F.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(U.q3, {
                          buttonRef: r,
                          icon: tB.MoreHorizontalIcon,
                          tooltipText: F.intl.string(F.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tK = n(526725);
function tX(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(tH, {
              title: F.intl.string(F.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(eI.$, {
              variant: "secondary",
              size: "sm",
              icon: ep.U,
              text: F.intl.string(F.t["i/yzHs"]),
              onClick: n,
          });
}
function tq(e) {
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
        className: tK.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(tH, {
                          title: F.intl.string(F.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: n.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(eI.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: ej.j,
                          text: F.intl.string(F.t.SDUwM0),
                          onClick: s,
                      })),
            (0, i.jsx)(tY, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function tZ(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: s } = e,
        r = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, i.jsx)(eI.$, {
        variant: "primary",
        size: "sm",
        icon: ep.U,
        text: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function tJ(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, eN.Us)() === f.BRT.OVERLAY,
        c = (0, eb.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = c.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(tZ, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(tH, {
                title: F.intl.string(F.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, r, c, a]);
    return (0, i.jsxs)("div", {
        className: tK.y7,
        children: [
            (0, i.jsxs)("div", {
                className: tK.q6,
                children: [
                    (0, i.jsx)(N.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: F.intl.string(F.t.HGnLLT),
                    }),
                    (0, i.jsx)(R.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: F.intl.string(F.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(eA.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(eI.$, {
                                variant: "primary",
                                size: "sm",
                                icon: ep.U,
                                text: F.intl.string(F.t.ZbS4QB),
                                onClick: s,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function tQ(e) {
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
        m = (0, x.bG)([eW.A], () => eW.A.getWishlistSettings(s.id, u)),
        { trackUserProfileWishlistAction: f } = (0, g.NJ)(),
        h = !1 === s.nsfwAllowed,
        [I, p] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && p(m.visibility === eh.a.PUBLIC);
    }, [m?.visibility]);
    let j = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        A = (0, eB.A)({ wishlistId: u, onAction: j, productLines: null != r ? (0, eU.y9)(r) : null }),
        E = l.useCallback(() => {
            if (null == u) return;
            let e = I ? eh.a.PRIVATE : eh.a.PUBLIC;
            p(!I),
                eD.A.updateWishlistVisibility(u, e),
                f({
                    wishlistId: u,
                    action: I ? $.Mq.WISHLIST_TOGGLE_PRIVATE : $.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eU.y9)(r) : void 0,
                });
        }, [u, I, f, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !I &&
                (0, i.jsxs)("div", {
                    className: tK.lm,
                    children: [
                        (0, i.jsx)(eE.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(R.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.RX7D9h),
                        }),
                    ],
                }),
            I &&
                h &&
                (0, i.jsxs)("div", {
                    className: tK.lm,
                    children: [
                        (0, i.jsx)(ev.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(R.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: A,
                className: tK.U1,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: F.intl.format(F.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(tq, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: I,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                              handleAddNitroToWishlist: d,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, i.jsx)(tX, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                          }),
                ],
            }),
        ],
    });
}
function t$(e) {
    let { profileOwner: t, guildId: n } = e,
        s = l.useRef(null);
    (0, eH.i)({ containerRef: s, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: o } = (0, x.cf)([eW.A, eF.default], () => ({
            wishlistId: eW.A.getFirstWishlistId(t.id),
            currentUser: eF.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, ei.Ay)(),
        d = (0, eV.A)(t.id),
        { wishlist: u, wasFetched: g, error: m } = (0, eG.fw)({ wishlistId: a, userId: t.id }),
        [f, h] = l.useState(!1);
    g && !f && h(!0), (0, eM.A)(u);
    let I = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                s = n.id === i?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, x.bG)([eL.A], () => eL.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, ew.$)(n) && null != a[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, a]),
                c = (0, eO.w)({ userIds: r }),
                d = (0, eO.mn)({ userIds: r }),
                u = (0, eO.tR)(r),
                g = (0, eO.rY)(),
                m = (0, eO.qx)(),
                f = (0, eO.px)();
            return l.useMemo(
                () => (0, y.uniq)([...o, ...c, ...d, ...u, ...(s ? [...g, ...m, ...f] : [])].filter(e_.Vq)),
                [o, c, d, u, g, m, f, s],
            );
        })({ wishlist: u, profileOwner: t, currentUser: o }),
        p = (0, eS.A)(() => (0, ef.A)()),
        j = l.useCallback(() => {
            (0, ek.Cz)({ analyticsLocations: c, analyticsSource: eC.A.USER_PROFILE_WISHLIST });
        }, [c]),
        A = l.useCallback((e) => {
            (0, eP.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            (0, er.closeUserProfileModal)(), (0, eP.default)({ applicationId: e });
        }, []),
        { handleToggle: v } = (0, ey.c)({
            userId: o?.id,
            skuId: e9.pe.TIER_2,
            nuxGraphic: eR.g,
            onNuxShow: eT.D,
            location: eC.A.USER_PROFILE_WISHLIST,
        });
    if (null == o || null != m) return null;
    let S = null == u || 0 === u.items.length;
    return (0, i.jsxs)(t1, {
        scrollerRef: s,
        className: r()({ [tK.XG]: !S }),
        fade: !0,
        children: [
            S
                ? (0, i.jsx)(tJ, {
                      showEditingControls: d,
                      socialLayerStorefrontApplicationIds: I,
                      handleOpenShop: j,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: A,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ez.A, { scrollerRef: s }),
                          (0, i.jsx)(tQ, {
                              isOwner: o?.id === t.id,
                              showEditingControls: d,
                              profileOwner: t,
                              wishlist: u,
                              socialLayerStorefrontApplicationIds: I,
                              handleOpenShop: j,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, eU.C3)(u, e9.pe.TIER_2) ? void 0 : v,
                          }),
                          (0, i.jsx)(e5, { items: u.items, profileOwner: t, guildId: n, showEditingControls: d }),
                      ],
                  }),
            d &&
                (0, i.jsx)(t_, {
                    user: t,
                    guildId: n,
                    wishlist: u,
                    hasFetchedWishlist: f,
                    analyticsLocations: c,
                    impressionSessionId: p,
                    className: S ? tK._E : tK.HZ,
                }),
        ],
    });
}
var t0 = n(131058);
function t1(e) {
    let { children: t, className: n, scrollerRef: l, ...s } = e;
    return (0, i.jsx)(a.Ip, { ref: l, className: r()(t0.gN, n), fade: !0, ...s, children: t });
}
function t8(e) {
    let { user: t, currentUser: n, section: l, displayProfile: s, guildId: r, channelId: a, onClose: o } = e;
    return l === $.RP.ACTIVITY
        ? (0, i.jsx)(et, { user: t, currentUser: n, displayProfile: s, guildId: r, channelId: a, onClose: o })
        : l === $.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(ec, { user: t, guildId: r, channelId: a, onClose: o })
          : l === $.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(em, { user: t, onClose: o })
            : l === $.RP.WIDGETS
              ? (0, i.jsx)(ex.A, { user: t, guildId: r, channelId: a })
              : l === $.RP.WISHLIST
                ? (0, i.jsx)(t$, { profileOwner: t, guildId: r })
                : null;
}
function t2(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: s,
            guildId: r,
            channelId: x,
            items: f,
            initialSection: h,
            onClose: I,
        } = e,
        { trackUserProfileAction: p } = (0, g.NJ)(),
        [j, A] = l.useState(() => (f.find((e) => e.section === h) ?? f[0]).section),
        E = f.find((e) => e.section === j) ?? f[0];
    return (
        E.section !== j && A(E.section),
        (0, i.jsxs)("div", {
            className: t0.kL,
            children: [
                (0, i.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: t0.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: E.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && E.section === $.RP.WIDGETS
                                ? (0, u.VQ)()
                                : (p({ action: "PRESS_SECTION", section: e }), A(e));
                        },
                        children: f.map((e) =>
                            (0, i.jsx)(
                                o.V.Item,
                                { className: t0.YU, id: e.section, "aria-label": e.text, children: e.text },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(o.V.Panel, {
                    id: E.section,
                    "aria-label": E.text,
                    className: t0.NM,
                    children: (0, i.jsx)(c.F, {
                        component: (0, i.jsx)(d.A, { children: (0, i.jsx)(c.H, { children: E.text }) }),
                        children: (0, i.jsx)(t8, {
                            user: t,
                            currentUser: n,
                            displayProfile: s,
                            guildId: r,
                            channelId: x,
                            section: E.section,
                            onClose: I,
                        }),
                    }),
                }),
            ],
        })
    );
}
