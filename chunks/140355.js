n.d(t, { K: () => t4, A: () => ne });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(364522),
    o = n(761508),
    d = n(707554),
    c = n(140735),
    u = n(207803),
    g = n(183555),
    m = n(61881),
    x = n(695904),
    f = n(116331),
    h = n(713348),
    p = n(827258),
    I = n(17928),
    j = n(652215),
    A = n(28863),
    E = n(517164),
    v = n(114212),
    C = n(290863),
    S = n(461213),
    b = n(975571),
    k = n(146655),
    y = n(489379),
    T = n(402857),
    N = n(353394),
    w = n(64622),
    R = n(986712),
    L = n(435558),
    _ = n(297264),
    P = n(834730),
    O = n(534890),
    D = n(366010),
    G = n(308528),
    M = n(736653),
    U = n(573648),
    W = n(780964),
    F = n(766075),
    H = n(562153),
    V = n(993401),
    B = n(375708),
    z = n(92795);
let Y = [
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
    X = [
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
    q = [
        j.fg2.STEAM,
        j.fg2.PLAYSTATION,
        j.fg2.XBOX,
        j.fg2.TWITCH,
        j.fg2.BATTLENET,
        j.fg2.LEAGUE_OF_LEGENDS,
        j.fg2.EPIC_GAMES,
        j.fg2.RIOT_GAMES,
        j.fg2.ROBLOX,
        j.fg2.SPOTIFY,
        j.fg2.YOUTUBE,
        j.fg2.CRUNCHYROLL,
        j.fg2.BUNGIE,
    ];
function Z(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: z.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: z.FS,
                children: [
                    (0, i.jsx)(_.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(P.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function J() {
    let e = B.intl.string(B.t.RnD2yZ),
        [t] = l.useState(() => ((0, L.sample)(Y) ?? Y[0])());
    return (0, i.jsx)(Z, { heading: e, bodyText: t });
}
function Q() {
    let e = B.intl.string(B.t.bFgqYJ),
        [t] = l.useState(() => ((0, L.sample)(K) ?? K[0])());
    return (0, i.jsx)(Z, { heading: e, bodyText: t });
}
function $(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        a = H.Ay.getName(n, s, t),
        o = B.intl.formatToPlainString(B.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, L.sample)(X) ?? X[0])(a)),
        c = l.useCallback(() => {
            (G.A.openPrivateChannel({ recipientIds: t.id }), r?.());
        }, [t.id, r]);
    return (0, i.jsx)(Z, {
        heading: o,
        bodyText: d,
        children: (0, i.jsx)("div", {
            className: z.v0,
            children: (0, i.jsx)(V.FD, { icon: O.ChatIcon, text: B.intl.string(B.t["g33r/P"]), onClick: c }),
        }),
    });
}
function ee() {
    let e = (0, M.Ay)();
    return (0, i.jsx)("div", {
        className: z.HU,
        children: q.map((t, n) => {
            let l = U.A.get(t);
            if (null == l) return null;
            let s = (0, D.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: s, alt: l.name, className: z.gj }, n);
        }),
    });
}
function et(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, F.openUserSettings)(W.X.CONNECTIONS_CATEGORY));
        }, [t]),
        s = l.useCallback(() => {
            (t?.(), (0, F.openUserSettings)(W.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(Z, {
        heading: B.intl.string(B.t.VB6LWY),
        bodyText: B.intl.string(B.t.KpjsU9),
        children: [
            (0, i.jsx)(ee, {}),
            (0, i.jsxs)("div", {
                className: z.v0,
                children: [
                    (0, i.jsx)(V.FD, { text: B.intl.string(B.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(V.FD, { text: B.intl.string(B.t.GTCx0p), onClick: s }),
                ],
            }),
        ],
    });
}
var en = n(83013),
    ei = n(518477),
    el = n(587763);
function es(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: s, channelId: r, onClose: a } = e,
        { live: o, recent: d, stream: c } = (0, k.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, y.A)({ userId: t.id, guildId: s }),
        m = (0, I.bG)([E.A], () => E.A.isFetchingUserOutbox(t.id)),
        x = t.id === n.id,
        f = (0, I.bG)([S.A, C.A], () => {
            let e = x ? S.A.getStatus() : C.A.getStatus(t.id);
            return e === j.clD.OFFLINE || e === j.clD.INVISIBLE;
        }),
        h = o.length > 0 || null != c,
        p = l?.private !== !0 && null == c && null == g && null != u,
        L = !f && (h || p),
        _ = d.length > 0;
    return L || _ || !m
        ? L || _ || m
            ? (0, i.jsxs)(t4, {
                  className: el.XG,
                  fade: !0,
                  children: [
                      L
                          ? (0, i.jsx)(en.A, {
                                heading: B.intl.string(B.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: el.kR,
                                    children: [
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(w.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: c,
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
                                        p &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(R.A, {
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
                      _
                          ? (0, i.jsx)(en.A, {
                                heading: B.intl.string(B.t.jzgEoL),
                                introText: x
                                    ? B.intl.format(B.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  A.Anchor,
                                                  {
                                                      href: b.A.getArticleURL(j.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: ei.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: el.kR,
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
            : x
              ? (0, i.jsx)(et, { onClose: a })
              : (0, i.jsx)($, { user: t, guildId: l?.guildId ?? s, channelId: r, onClose: a })
        : (0, i.jsx)("div", {
              className: el.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: el.kr,
                          children: [
                              (0, i.jsx)(v.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(v.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var er = n(163126),
    ea = n(688810),
    eo = n(913453),
    ed = n(229187),
    ec = n(402860),
    eu = n(503062),
    eg = n(393213);
function em(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        { analyticsLocations: a } = (0, ea.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, g.NJ)(),
        { mutualFriends: c, mutualFriendsCount: u } = (0, eo.A)(t),
        m = (0, er.A)();
    return (
        l.useEffect(() => {
            (0, ed.A)(t.id, m);
        }, [t.id, m]),
        (0, i.jsx)(t4, {
            className: eg.XG,
            children:
                null == c
                    ? Array.from({ length: u ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: eg.D$,
                                  children: [
                                      (0, i.jsx)(v.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(v.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === c.length
                      ? (0, i.jsx)(J, {})
                      : c.map((e) => {
                            let { key: t, user: l, status: c } = e;
                            return (0, i.jsx)(
                                eu.A,
                                {
                                    user: l,
                                    status: c,
                                    guildId: n,
                                    channelId: s,
                                    onSelect: () => {
                                        (r?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, ec.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
                                                sourceAnalyticsLocations: a,
                                            }));
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var ex = n(398590),
    ef = n(345942),
    eh = n(51943);
function ep(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, eo.A)(t);
    return (0, i.jsx)(t4, {
        className: eg.XG,
        fade: !0,
        children:
            null == s && r
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: eg.Y7,
                              children: [
                                  (0, i.jsx)(v.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(v.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != s || r) && s?.length !== 0
                  ? s?.map((e) => {
                        let { guild: s, nick: r } = e;
                        return (0, i.jsx)(
                            eh.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, ef.u)(s.id), n(), (0, ex.jH)());
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, i.jsx)(Q, {}),
    });
}
var eI = n(773033),
    ej = n(132500),
    eA = n(777480),
    eE = n(821609),
    ev = n(34188),
    eC = n(307301),
    eS = n(825484),
    eb = n(952270),
    ek = n(885574),
    ey = n(444927),
    eT = n(793574),
    eN = n(429913),
    ew = n(839534),
    eR = n(895360),
    eL = n(152472),
    e_ = n(267102),
    eP = n(285373);
n(321073);
var eO = n(721932),
    eD = n(403362),
    eG = n(832163),
    eM = n(501838),
    eU = n(44724),
    eW = n(808247),
    eF = n(673843),
    eH = n(594832),
    eV = n(855052),
    eB = n(287809),
    ez = n(639935),
    eY = n(249203),
    eK = n(321191),
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
    e3 = n(419731),
    e5 = n(451395),
    e6 = n(823016),
    e4 = n(100741);
function e9(e) {
    let { item: t, index: n, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e6.r)();
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
let te = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: c,
            isNew: u,
            onClick: g,
        } = e,
        { registerDragHandleRef: m } = (0, e6.r)(),
        x = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        f = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(e5.jV, {
                          buttonRef: m(String(t.skuId)),
                          className: e4.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, m, t.skuId],
        ),
        h = l.useMemo(
            () =>
                (0, i.jsx)(e7.A, {
                    item: t,
                    wishlistOwner: s,
                    guildId: r,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: f,
                    isNew: u,
                    onClick: x,
                }),
            [t, s, r, d, f, o, u, x],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(e9, { item: t, index: n, wishlistId: o, onReorder: c, children: h }),
          })
        : (0, i.jsx)("li", { children: h });
});
function tt(e) {
    var t;
    let { items: n, profileOwner: s, guildId: r, showEditingControls: a, lastViewedAt: o } = e,
        d = eB.default.getCurrentUser(),
        { defaultWishlistId: c } = (0, I.cf)([eK.A], () => ({ defaultWishlistId: eK.A.getFirstWishlistId(s.id) })),
        u = null != d && d.id !== s.id,
        g =
            ((t = u ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            e2.useConfig({ location: t }).isEnabled && u),
        m = (0, I.bG)(
            [e$.A],
            () => {
                let e = n;
                return (
                    g &&
                        (e = (0, e1.hE)(e, (e) => {
                            var t;
                            return (
                                (t = e$.A.hasSentGift(e.skuId, s.id)),
                                e.skuProductLine !== j.EZt.PREMIUM && (!0 === e.isOwned || t)
                            );
                        })),
                    e
                );
            },
            [n, g, s.id],
        ),
        { isDragging: x } = (0, eQ.V)((e) => ({ isDragging: e.isDragging() })),
        [f, h] = l.useState([]),
        p = l.useCallback((e) => {
            h((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        A = l.useCallback(
            (e, t) => {
                if (e === t || null == c || 0 === m.length || e < 0 || e >= m.length || t < 0 || t >= m.length) return;
                let n = e0.A.getWishlist(c);
                if (null == n) return;
                let i = m[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, e1.Ap)(n, m, e, t);
                eW.A.reorderWishlistItem(c, i.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [c, m],
        );
    if (null == d || null == c) return null;
    let E = (0, i.jsx)("ul", {
        className: e4.Vg,
        children: m.map((e, t) =>
            (0, i.jsx)(
                te,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: c,
                    isDragging: x,
                    onReorder: A,
                    isNew: (0, e3.f3)(e.addedAt, o) && !f.includes(e.skuId),
                    onClick: p,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, i.jsx)(e6.B, { emptyListFallbackRef: null, children: E }) : E;
}
function tn(e) {
    let t = eB.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(e8.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(tt, { ...e }),
    });
}
var ti = n(815021),
    tl = n(299679);
n(667532);
var ts = n(862772),
    tr = n(202541),
    ta = n(172218),
    to = n(575593),
    td = n(691540),
    tc = n(857250),
    tu = n(97483),
    tg = n(765178),
    tm = n(31969),
    tx = n(174459),
    tf = n(661492),
    th = n(95817),
    tp = n(146423),
    tI = n(74135),
    tj = n(460442),
    tA = n(699976),
    tE = n(964164),
    tv = n(880465);
let tC = tA.Z.SIZE_90;
function tS(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: s,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: d,
            onClick: c,
            "aria-label": u,
            wishlistId: m,
            children: x,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, g.NJ)(),
        h = (0, tl.Ar)(),
        p = (0, ey.A)(() => (0, ej.A)()),
        { handleVisibilityChange: I } = (0, th.G)(p),
        A = (0, ta.K)(I, 0.5, h?.surface != null),
        E = l.useCallback(() => {
            (f({
                wishlistId: m,
                action: ei.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tx.default.track(j.HAw.WISHLIST_ITEM_CLICKED, {
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
                c());
        }, [c, t.id, t.productLine, f, m, h, p]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(tp.A, {
            sku: t,
            user: n,
            guildId: s,
            spec: tC,
            cardStyle: r()(tE.Nr, a),
            skuPreviewStyle: r()(tE.ev, o),
            onHoverOrFocusChange: d,
            onClick: E,
            "aria-label": u,
            children: x,
        }),
    });
}
function tb(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: s,
            handleOpenUserProfileModal: a,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: c,
            promotion: u,
            ...g
        } = e,
        [m, x] = l.useState(!1),
        f = l.useCallback(async () => {
            if (!m) {
                x(!0);
                try {
                    (await eW.A.addSkuToWishlist(t.id, n), c?.(), a?.({ tabSection: ei.RP.WISHLIST }));
                } catch (e) {
                    ((0, td.P0)((0, tc.o)(B.intl.string(B.t.F8FvUy), tu.Ck.FAILURE)),
                        tg.O.announce(B.intl.string(B.t.F8FvUy)));
                } finally {
                    x(!1);
                }
            }
        }, [t, n, m, a, c]),
        h = l.useMemo(() => r()({ [tE.zW]: s || m }, o), [s, m, o]);
    return (0, i.jsxs)(tS, {
        "aria-label": B.intl.formatToPlainString(B.t.xRjJBe, { productName: (0, tf.T)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: h,
        onClick: f,
        isHoveringOrFocusing: s,
        ...g,
        children: [(0, i.jsx)(tj.oU, { isHoveringOrFocusing: s, loading: m }), !s && !m && u],
    });
}
function tk(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: s } = (0, ea.Ay)(...(n ?? []), eT.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        r = (0, tm.F)("sku_purchase_badge", { applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(tb, {
        sku: t,
        analyticsLocations: s,
        promotion: null != r ? (0, i.jsx)(tI.s, { spec: tC, icon: r.Icon, tooltipText: r.tooltip }) : null,
        ...l,
    });
}
function ty(e) {
    let { sku: t, ...n } = e,
        s = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case to.R.PROFILE_EFFECT:
                case to.R.NAMEPLATE:
                case to.R.BUNDLE:
                case to.R.PROFILE_FRAME:
                    return;
                case to.R.AVATAR_DECORATION:
                    return tE.ML;
                default:
                    return r()(tE.ML, tE.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(tb, { sku: t, skuPreviewStyle: s, ...n });
}
function tT(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(tb, { sku: t, skuPreviewStyle: tv.MO, ...n });
}
function tN(e) {
    let { sku: t, ...n } = e,
        [s, r] = l.useState(!1);
    switch (t.productLine) {
        case j.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(tk, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case j.EZt.COLLECTIBLES:
            return (0, i.jsx)(ty, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        case j.EZt.PREMIUM:
            return (0, i.jsx)(tT, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: r, ...n });
        default:
            return null;
    }
}
var tw = n(609965);
function tR(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: s, className: a, items: o } = e,
        d = (0, I.bG)([eB.default], () => eB.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: r()(tw.Vg, a),
        children: o.map((e, r) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                tl.dB,
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
var tL = n(554146),
    t_ = n(131607),
    tP = n(927813),
    tO = n(49999);
let tD = 90 * tP.A.Millis.DAY,
    tG = 90 * tP.A.Millis.DAY;
var tM = n(469364);
function tU(e) {
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
            isVisible: c,
            isDismissible: u,
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
                [d, c] = (0, t_.Wl)(
                    tL.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: o + tG, cooldownDurationMs: tD },
                    void 0,
                    !0,
                ),
                u = d === tL.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (u || r || !s),
                isDismissible: s,
                markAsDismissed: l.useCallback(() => {
                    (a(!1), c(tO.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return c
        ? (0, i.jsx)(tW, {
              user: t,
              guildId: n,
              wishlist: s,
              analyticsLocations: a,
              impressionSessionId: o,
              className: d,
              isDismissible: u,
              markAsDismissed: g,
          })
        : null;
}
function tW(e) {
    let {
            user: t,
            guildId: n,
            wishlist: s,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
            isDismissible: c,
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
                { recommendations: a, status: o } = (0, ts.Ul)({ userId: t, numItems: i, source: r }),
                d = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                c = "success" === o && !d.has(tr.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (c && e.unshift({ sku: (0, e1.rI)(), itemSource: "takeover" }), e.slice(0, s));
                }, [a, d, c, s]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: s,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eH.B5.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tM.kL, d),
              children: [
                  (0, i.jsxs)("div", {
                      className: tM.wx,
                      children: [
                          (0, i.jsx)(P.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: B.intl.string(B.t["+GB8Kt"]),
                          }),
                          c &&
                              (0, i.jsx)("div", {
                                  className: tM.b,
                                  children: (0, i.jsx)(ti.J, { size: "xs", onClick: u }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(tl.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: s?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(tR, {
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
    tH = n(403581),
    tV = n(922016),
    tB = n(980707),
    tz = n(789645),
    tY = n(847374),
    tK = n(486020),
    tX = n(431194);
function tq(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [c, u] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(eD.Vq).map((e) => {
                        let t = tK.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: B.intl.formatToPlainString(B.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: tX.I, src: t, alt: "" }) : ev.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: ev.U },
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
                                label: B.intl.string(B.t["5upuqx"]),
                                iconLeft: ev.U,
                                leadingAccessory: { type: "icon", icon: ev.U },
                                action: s,
                            }),
                        null != a &&
                            (0, i.jsx)(tF.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: B.intl.string(B.t.lG6a5x),
                                iconLeft: tH.t,
                                leadingAccessory: { type: "icon", icon: tH.t },
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
    return (0, i.jsx)(tV.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
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
            (0, i.jsx)(eE.$, {
                buttonRef: d,
                variant: n,
                size: "sm",
                icon: c ? tz.P : tY.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tZ = n(509434),
    tJ = n(365199);
let tQ = b.A.getArticleURL(j.MVz.CUSTOM_PROFILES_WISHLIST);
function t$(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, ea.Ay)(eT.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(tF.rX, {
                          children: [
                              (0, i.jsx)(tF.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: B.intl.string(B.t.b2nFyA),
                                  subtext: B.intl.string(B.t.dw58pE),
                                  checked: n,
                                  action: s,
                              }),
                              (0, i.jsx)(tF.bX, {}),
                              (0, i.jsx)(tF.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: B.intl.string(B.t.hvVgAZ),
                                  icon: tZ.I,
                                  trailingIndicator: { type: "icon", icon: tZ.I },
                                  action: () => window.open(tQ),
                              }),
                          ],
                      })
                    : null,
            [t, n, s],
        );
    return null == o
        ? null
        : (0, i.jsx)(ea.f5, {
              value: a,
              children: (0, i.jsx)(tV.Y, {
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
                      (0, i.jsx)(V.q3, {
                          buttonRef: r,
                          icon: tJ.MoreHorizontalIcon,
                          tooltipText: B.intl.string(B.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var t0 = n(526725);
function t1(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(tq, {
              title: B.intl.string(B.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(eE.$, {
              variant: "secondary",
              size: "sm",
              icon: ev.U,
              text: B.intl.string(B.t["i/yzHs"]),
              onClick: n,
          });
}
function t8(e) {
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
        className: t0.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(tq, {
                          title: B.intl.string(B.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: n.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(eE.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: eC.j,
                          text: B.intl.string(B.t.SDUwM0),
                          onClick: s,
                      })),
            (0, i.jsx)(t$, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function t2(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: s } = e,
        r = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, i.jsx)(eE.$, {
        variant: "primary",
        size: "sm",
        icon: ev.U,
        text: B.intl.formatToPlainString(B.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function t7(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, e_.Us)() === j.BRT.OVERLAY,
        d = (0, eN.A)(n),
        c = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(t2, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(tq, {
                title: B.intl.string(B.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, r, d, a]);
    return (0, i.jsxs)("div", {
        className: t0.y7,
        children: [
            (0, i.jsxs)("div", {
                className: t0.q6,
                children: [
                    (0, i.jsx)(_.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: B.intl.string(B.t.HGnLLT),
                    }),
                    (0, i.jsx)(P.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: B.intl.string(B.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != c) &&
                (0, i.jsxs)(eS.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(eE.$, {
                                variant: "primary",
                                size: "sm",
                                icon: ev.U,
                                text: B.intl.string(B.t.ZbS4QB),
                                onClick: s,
                            }),
                        c,
                    ],
                }),
        ],
    });
}
function t3(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        u = r.id,
        m = (0, I.bG)([eK.A], () => eK.A.getWishlistSettings(s.id, u)),
        { trackUserProfileWishlistAction: x } = (0, g.NJ)(),
        f = !1 === s.nsfwAllowed,
        [h, p] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && p(m.visibility === eA.a.PUBLIC);
    }, [m?.visibility]);
    let j = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && x({ wishlistId: t, action: n, productLines: i });
            },
            [x],
        ),
        A = (0, eZ.A)({ wishlistId: u, onAction: j, productLines: null != r ? (0, eV.y9)(r) : null }),
        E = l.useCallback(() => {
            if (null == u) return;
            let e = h ? eA.a.PRIVATE : eA.a.PUBLIC;
            (p(!h),
                eW.A.updateWishlistVisibility(u, e),
                x({
                    wishlistId: u,
                    action: h ? ei.Mq.WISHLIST_TOGGLE_PRIVATE : ei.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eV.y9)(r) : void 0,
                }));
        }, [u, h, x, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: t0.lm,
                    children: [
                        (0, i.jsx)(eb.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(P.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                f &&
                (0, i.jsxs)("div", {
                    className: t0.lm,
                    children: [
                        (0, i.jsx)(ek.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(P.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: A,
                className: t0.U1,
                children: [
                    (0, i.jsx)(P.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: B.intl.format(B.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(t8, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: h,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, i.jsx)(t1, {
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
        { analyticsLocations: d } = (0, ea.Ay)(),
        c = (0, ey.A)(() => ((0, x.aS)()?.enabled === !0 ? (eY.A.getEntry(t.id)?.lastViewedAt ?? null) : null));
    l.useEffect(() => {
        (0, ez.Z)(t.id);
    }, [t.id]);
    let u = (0, eq.A)(t.id),
        { wishlist: g, wasFetched: m, error: f } = (0, eH.fw)({ wishlistId: a, userId: t.id }),
        [h, p] = l.useState(!1);
    (m && !h && p(!0), (0, eF.A)(g));
    let j = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                s = n.id === i?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, I.bG)([eG.A], () => eG.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, eO.$)(n) && null != a[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, a]),
                d = (0, eM.w)({ userIds: r }),
                c = (0, eM.mn)({ userIds: r }),
                u = (0, eM.tR)(r),
                g = (0, eM.rY)(),
                m = (0, eM.qx)(),
                x = (0, eM.px)();
            return l.useMemo(
                () => (0, L.uniq)([...o, ...d, ...c, ...u, ...(s ? [...g, ...m, ...x] : [])].filter(eD.Vq)),
                [o, d, c, u, g, m, x, s],
            );
        })({ wishlist: g, profileOwner: t, currentUser: o }),
        A = (0, ey.A)(() => (0, ej.A)()),
        E = l.useCallback(() => {
            (0, ew.Cz)({ analyticsLocations: d, analyticsSource: eT.A.USER_PROFILE_WISHLIST });
        }, [d]),
        v = l.useCallback((e) => {
            (0, eU.G)({ applicationId: e });
        }, []),
        C = l.useCallback((e) => {
            ((0, ec.closeUserProfileModal)(), (0, eU.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, eL.c)({
            userId: o?.id,
            skuId: tr.pe.TIER_2,
            nuxGraphic: eP.g,
            onNuxShow: eR.D,
            location: eT.A.USER_PROFILE_WISHLIST,
        });
    if (null == o || null != f) return null;
    let b = null == g || 0 === g.items.length;
    return (0, i.jsxs)(t4, {
        scrollerRef: s,
        className: r()({ [t0.XG]: !b }),
        fade: !0,
        children: [
            b
                ? (0, i.jsx)(t7, {
                      showEditingControls: u,
                      socialLayerStorefrontApplicationIds: j,
                      handleOpenShop: E,
                      handleOpenGameShop: C,
                      handleOpenGameShopMouseDown: v,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eJ.A, { scrollerRef: s }),
                          (0, i.jsx)(t3, {
                              isOwner: o?.id === t.id,
                              showEditingControls: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: j,
                              handleOpenShop: E,
                              handleOpenGameShop: C,
                              handleAddNitroToWishlist: (0, eV.C3)(g, tr.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(tn, {
                              items: g.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: u,
                              lastViewedAt: c,
                          }),
                      ],
                  }),
            u &&
                (0, i.jsx)(tU, {
                    user: t,
                    guildId: n,
                    wishlist: g,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: A,
                    className: b ? t0._E : t0.HZ,
                }),
        ],
    });
}
var t6 = n(131058);
function t4(e) {
    let { children: t, className: n, scrollerRef: l, ...s } = e;
    return (0, i.jsx)(a.Ip, { ref: l, className: r()(t6.gN, n), fade: !0, ...s, children: t });
}
function t9(e) {
    let { user: t, currentUser: n, section: l, displayProfile: s, guildId: r, channelId: a, onClose: o } = e;
    return l === ei.RP.ACTIVITY
        ? (0, i.jsx)(es, { user: t, currentUser: n, displayProfile: s, guildId: r, channelId: a, onClose: o })
        : l === ei.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(em, { user: t, guildId: r, channelId: a, onClose: o })
          : l === ei.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(ep, { user: t, onClose: o })
            : l === ei.RP.WIDGETS
              ? (0, i.jsx)(eI.A, { user: t, guildId: r, channelId: a })
              : l === ei.RP.WISHLIST
                ? (0, i.jsx)(t5, { profileOwner: t, guildId: r })
                : null;
}
function ne(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: s,
            guildId: r,
            channelId: I,
            items: j,
            initialSection: A,
            onClose: E,
        } = e,
        { trackUserProfileAction: v } = (0, g.NJ)(),
        { shouldLogExposure: C } = (0, f.A)(t);
    (0, h.A)(t);
    let S = l.useRef(!1),
        b = j.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        b && !S.current && ((S.current = !0), v({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [b, v]);
    let [k, y] = l.useState(() => (j.find((e) => e.section === A) ?? j[0]).section),
        T = j.find((e) => e.section === k) ?? j[0];
    return (
        T.section !== k && y(T.section),
        (0, i.jsxs)("div", {
            className: t6.kL,
            children: [
                C && (0, i.jsx)(x.kM, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: t6.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: T.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && T.section === ei.RP.WIDGETS
                                ? (0, u.VQ)()
                                : (v({ action: "PRESS_SECTION", section: e }), y(e));
                        },
                        children: j.map((e) =>
                            (0, i.jsxs)(
                                o.V.Item,
                                {
                                    className: t6.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? B.intl.formatToPlainString(B.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, i.jsx)(p.A, { className: t6.Pf }),
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
                    className: t6.NM,
                    children: (0, i.jsx)(d.F, {
                        component: (0, i.jsx)(c.A, { children: (0, i.jsx)(d.H, { children: T.text }) }),
                        children: (0, i.jsx)(t9, {
                            user: t,
                            currentUser: n,
                            displayProfile: s,
                            guildId: r,
                            channelId: I,
                            section: T.section,
                            onClose: E,
                        }),
                    }),
                }),
            ],
        })
    );
}
