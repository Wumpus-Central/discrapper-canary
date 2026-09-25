i.d(t, { K: () => t3, A: () => t6 });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(364522),
    o = i(761508),
    d = i(707554),
    c = i(140735),
    u = i(207803),
    g = i(183555),
    m = i(61881),
    x = i(695904),
    f = i(116331),
    h = i(713348),
    p = i(827258),
    I = i(17928),
    A = i(652215),
    j = i(28863),
    E = i(517164),
    v = i(114212),
    C = i(290863),
    S = i(461213),
    b = i(975571),
    k = i(146655),
    y = i(489379),
    T = i(402857),
    N = i(353394),
    R = i(64622),
    w = i(986712),
    L = i(435558),
    _ = i(297264),
    P = i(834730),
    O = i(534890),
    D = i(366010),
    G = i(308528),
    M = i(736653),
    U = i(573648),
    F = i(780964),
    W = i(766075),
    H = i(562153),
    V = i(993401),
    B = i(375708),
    Y = i(92795);
let z = [
        () => B.intl.string(B.t.madJdE),
        () => B.intl.string(B.t.NYmfoP),
        () => B.intl.string(B.t.R2PaCg),
        () => B.intl.string(B.t.laSR8h),
        () => B.intl.string(B.t.DnsJE8),
    ],
    X = [
        () => B.intl.string(B.t.nFSbeE),
        () => B.intl.string(B.t.gTcxOz),
        () => B.intl.string(B.t["8T0wYj"]),
        () => B.intl.string(B.t.BIHl1g),
        () => B.intl.string(B.t["jhBm0+"]),
    ],
    K = [
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
        A.fg2.STEAM,
        A.fg2.PLAYSTATION,
        A.fg2.XBOX,
        A.fg2.TWITCH,
        A.fg2.BATTLENET,
        A.fg2.LEAGUE_OF_LEGENDS,
        A.fg2.EPIC_GAMES,
        A.fg2.RIOT_GAMES,
        A.fg2.ROBLOX,
        A.fg2.SPOTIFY,
        A.fg2.YOUTUBE,
        A.fg2.CRUNCHYROLL,
        A.fg2.BUNGIE,
    ];
function J(e) {
    let { heading: t, bodyText: i, children: l } = e;
    return (0, n.jsxs)("div", {
        className: Y.Ie,
        children: [
            (0, n.jsxs)("div", {
                className: Y.FS,
                children: [
                    (0, n.jsx)(_.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(P.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            }),
            l,
        ],
    });
}
function Z() {
    let e = B.intl.string(B.t.RnD2yZ),
        [t] = l.useState(() => ((0, L.sample)(z) ?? z[0])());
    return (0, n.jsx)(J, { heading: e, bodyText: t });
}
function Q() {
    let e = B.intl.string(B.t.bFgqYJ),
        [t] = l.useState(() => ((0, L.sample)(X) ?? X[0])());
    return (0, n.jsx)(J, { heading: e, bodyText: t });
}
function $(e) {
    let { user: t, guildId: i, channelId: s, onClose: a } = e,
        r = H.Ay.getName(i, s, t),
        o = B.intl.formatToPlainString(B.t.sjSitP, { name: r }),
        [d] = l.useState(() => ((0, L.sample)(K) ?? K[0])(r)),
        c = l.useCallback(() => {
            (G.A.openPrivateChannel({ recipientIds: t.id }), a?.());
        }, [t.id, a]);
    return (0, n.jsx)(J, {
        heading: o,
        bodyText: d,
        children: (0, n.jsx)("div", {
            className: Y.v0,
            children: (0, n.jsx)(V.FD, { icon: O.ChatIcon, text: B.intl.string(B.t["g33r/P"]), onClick: c }),
        }),
    });
}
function ee() {
    let e = (0, M.Ay)();
    return (0, n.jsx)("div", {
        className: Y.HU,
        children: q.map((t, i) => {
            let l = U.A.get(t);
            if (null == l) return null;
            let s = (0, D.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, n.jsx)("img", { src: s, alt: l.name, className: Y.gj }, i);
        }),
    });
}
function et(e) {
    let { onClose: t } = e,
        i = l.useCallback(() => {
            (t?.(), (0, W.openUserSettings)(F.X.CONNECTIONS_CATEGORY));
        }, [t]),
        s = l.useCallback(() => {
            (t?.(), (0, W.openUserSettings)(F.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, n.jsxs)(J, {
        heading: B.intl.string(B.t.VB6LWY),
        bodyText: B.intl.string(B.t.KpjsU9),
        children: [
            (0, n.jsx)(ee, {}),
            (0, n.jsxs)("div", {
                className: Y.v0,
                children: [
                    (0, n.jsx)(V.FD, { text: B.intl.string(B.t["/Hl24U"]), onClick: i }),
                    (0, n.jsx)(V.FD, { text: B.intl.string(B.t.GTCx0p), onClick: s }),
                ],
            }),
        ],
    });
}
var ei = i(83013),
    en = i(518477),
    el = i(587763);
function es(e) {
    let { user: t, currentUser: i, displayProfile: l, guildId: s, channelId: a, onClose: r } = e,
        { live: o, recent: d, stream: c } = (0, k.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, y.A)({ userId: t.id, guildId: s }),
        m = (0, I.bG)([E.A], () => E.A.isFetchingUserOutbox(t.id)),
        x = t.id === i.id,
        f = (0, I.bG)([S.A, C.A], () => {
            let e = x ? S.A.getStatus() : C.A.getStatus(t.id);
            return e === A.clD.OFFLINE || e === A.clD.INVISIBLE;
        }),
        h = o.length > 0 || null != c,
        p = l?.private !== !0 && null == c && null == g && null != u,
        L = !f && (h || p),
        _ = d.length > 0;
    return L || _ || !m
        ? L || _ || m
            ? (0, n.jsxs)(t3, {
                  className: el.XG,
                  fade: !0,
                  children: [
                      L
                          ? (0, n.jsx)(ei.A, {
                                heading: B.intl.string(B.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: el.kR,
                                    children: [
                                        null != c &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(R.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    stream: c,
                                                    onClose: r,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, n.jsx)(
                                                "li",
                                                {
                                                    children: (0, n.jsx)(T.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        activity: e,
                                                        onClose: r,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        p &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(w.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    voiceChannel: u,
                                                    onClose: r,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      _
                          ? (0, n.jsx)(ei.A, {
                                heading: B.intl.string(B.t.jzgEoL),
                                introText: x
                                    ? B.intl.format(B.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, n.jsx)(
                                                  j.Anchor,
                                                  {
                                                      href: b.A.getArticleURL(A.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: en.bk.RECENT_ACTIVITY,
                                children: (0, n.jsx)("ul", {
                                    className: el.kR,
                                    children: d.map((e) =>
                                        (0, n.jsx)(
                                            "li",
                                            { children: (0, n.jsx)(N.A, { user: t, entry: e, onClose: r }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : x
              ? (0, n.jsx)(et, { onClose: r })
              : (0, n.jsx)($, { user: t, guildId: l?.guildId ?? s, channelId: a, onClose: r })
        : (0, n.jsx)("div", {
              className: el.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: el.kr,
                          children: [
                              (0, n.jsx)(v.FQ, { width: 60, opacity: 0.08 }),
                              (0, n.jsx)(v.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var ea = i(163126),
    er = i(688810),
    eo = i(913453),
    ed = i(229187),
    ec = i(402860),
    eu = i(503062),
    eg = i(393213);
function em(e) {
    let { user: t, guildId: i, channelId: s, onClose: a } = e,
        { analyticsLocations: r } = (0, er.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, g.NJ)(),
        { mutualFriends: c, mutualFriendsCount: u } = (0, eo.A)(t),
        m = (0, ea.A)();
    return (
        l.useEffect(() => {
            (0, ed.A)(t.id, m);
        }, [t.id, m]),
        (0, n.jsx)(t3, {
            className: eg.XG,
            children:
                null == c
                    ? Array.from({ length: u ?? 10 }).map((e, t) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: eg.D$,
                                  children: [
                                      (0, n.jsx)(v.FQ, { width: 40, opacity: 0.08 }),
                                      (0, n.jsx)(v.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === c.length
                      ? (0, n.jsx)(Z, {})
                      : c.map((e) => {
                            let { key: t, user: l, status: c } = e;
                            return (0, n.jsx)(
                                eu.A,
                                {
                                    user: l,
                                    status: c,
                                    guildId: i,
                                    channelId: s,
                                    onSelect: () => {
                                        (a?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, ec.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
                                                sourceAnalyticsLocations: r,
                                            }));
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var ex = i(398590),
    ef = i(345942),
    eh = i(51943);
function ep(e) {
    let { user: t, onClose: i } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: a } = (0, eo.A)(t);
    return (0, n.jsx)(t3, {
        className: eg.XG,
        fade: !0,
        children:
            null == s && a
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, n.jsxs)(
                          "div",
                          {
                              className: eg.Y7,
                              children: [
                                  (0, n.jsx)(v.FQ, { width: 40, opacity: 0.08 }),
                                  (0, n.jsx)(v.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != s || a) && s?.length !== 0
                  ? s?.map((e) => {
                        let { guild: s, nick: a } = e;
                        return (0, n.jsx)(
                            eh.A,
                            {
                                user: t,
                                guild: s,
                                nick: a,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, ef.u)(s.id), i(), (0, ex.jH)());
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, n.jsx)(Q, {}),
    });
}
var eI = i(763432),
    eA = i(132500),
    ej = i(777480),
    eE = i(821609),
    ev = i(34188),
    eC = i(307301),
    eS = i(825484),
    eb = i(952270),
    ek = i(885574),
    ey = i(444927),
    eT = i(793574),
    eN = i(429913),
    eR = i(839534),
    ew = i(895360),
    eL = i(152472),
    e_ = i(267102),
    eP = i(285373);
i(321073);
var eO = i(721932),
    eD = i(403362),
    eG = i(832163),
    eM = i(501838),
    eU = i(44724),
    eF = i(808247),
    eW = i(673843),
    eH = i(594832),
    eV = i(855052),
    eB = i(287809),
    eY = i(639935),
    ez = i(249203),
    eX = i(321191),
    eK = i(600761),
    eq = i(389667),
    eJ = i(535089),
    eZ = i(128988),
    eQ = i(686246),
    e$ = i(107563),
    e0 = i(840411),
    e1 = i(666810),
    e2 = i(248550),
    e8 = i(419731),
    e5 = i(451395),
    e7 = i(823016),
    e3 = i(100741);
function e4(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: a } = e,
        { manageFocusOnReorder: r } = (0, e7.r)();
    return (0, n.jsx)(e5.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": B.intl.formatToPlainString(B.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => r(String(t.skuId)),
        className: e3.C,
        dropBeforeClassName: e3.A,
        dropAfterClassName: e3.Ze,
        draggingClassName: e3.Id,
        children: (0, n.jsx)("div", { className: e3.An, children: a }),
    });
}
let e6 = l.memo(function (e) {
    let {
            item: t,
            index: i,
            profileOwner: s,
            guildId: a,
            showEditingControls: r,
            wishlistId: o,
            isDragging: d,
            onReorder: c,
            isNew: u,
            onClick: g,
        } = e,
        { registerDragHandleRef: m } = (0, e7.r)(),
        x = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        f = l.useMemo(
            () =>
                r
                    ? (0, n.jsx)(e5.jV, {
                          buttonRef: m(String(t.skuId)),
                          className: e3.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [r, m, t.skuId],
        ),
        h = l.useMemo(
            () =>
                (0, n.jsx)(e2.A, {
                    item: t,
                    wishlistOwner: s,
                    guildId: a,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: f,
                    isNew: u,
                    onClick: x,
                }),
            [t, s, a, d, f, o, u, x],
        );
    return r
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(e4, { item: t, index: i, wishlistId: o, onReorder: c, children: h }),
          })
        : (0, n.jsx)("li", { children: h });
});
function e9(e) {
    let { items: t, profileOwner: i, guildId: s, showEditingControls: a, lastViewedAt: r } = e,
        o = eB.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, I.cf)([eX.A], () => ({ defaultWishlistId: eX.A.getFirstWishlistId(i.id) })),
        { isDragging: c } = (0, eQ.V)((e) => ({ isDragging: e.isDragging() })),
        [u, g] = l.useState([]),
        m = l.useCallback((e) => {
            g((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        x = l.useCallback(
            (e, i) => {
                if (e === i || null == d || 0 === t.length || e < 0 || e >= t.length || i < 0 || i >= t.length) return;
                let n = e$.A.getWishlist(d);
                if (null == n) return;
                let l = t[e],
                    { newWishlistData: s, previousSkuId: a, nextSkuId: r } = (0, e0.Ap)(n, t, e, i);
                eF.A.reorderWishlistItem(d, l.skuId, { previousSkuId: a, nextSkuId: r, newWishlistData: s });
            },
            [d, t],
        );
    if (null == o || null == d) return null;
    let f = (0, n.jsx)("ul", {
        className: e3.Vg,
        children: t.map((e, t) =>
            (0, n.jsx)(
                e6,
                {
                    item: e,
                    index: t,
                    profileOwner: i,
                    guildId: s,
                    showEditingControls: a,
                    wishlistId: d,
                    isDragging: c,
                    onReorder: x,
                    isNew: (0, e8.f3)(e.addedAt, r) && !u.includes(e.skuId),
                    onClick: m,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, n.jsx)(e7.B, { emptyListFallbackRef: null, children: f }) : f;
}
function te(e) {
    let t = eB.default.getCurrentUser()?.id,
        i = null != t && t !== e.profileOwner.id;
    return (0, n.jsx)(e1.h, {
        isGifting: i,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, n.jsx)(e9, { ...e }),
    });
}
var tt = i(815021),
    ti = i(299679);
i(667532);
var tn = i(862772),
    tl = i(202541),
    ts = i(172218),
    ta = i(575593),
    tr = i(691540),
    to = i(857250),
    td = i(97483),
    tc = i(765178),
    tu = i(2157),
    tg = i(174459),
    tm = i(661492),
    tx = i(95817),
    tf = i(146423),
    th = i(74135),
    tp = i(460442),
    tI = i(699976),
    tA = i(964164),
    tj = i(880465);
let tE = tI.Z.SIZE_90;
function tv(e) {
    let {
            sku: t,
            wishlistOwner: i,
            guildId: s,
            style: r,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: d,
            onClick: c,
            "aria-label": u,
            wishlistId: m,
            children: x,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, g.NJ)(),
        h = (0, ti.Ar)(),
        p = (0, ey.A)(() => (0, eA.A)()),
        { handleVisibilityChange: I } = (0, tx.G)(p),
        j = (0, ts.K)(I, 0.5, h?.surface != null),
        E = l.useCallback(() => {
            (f({
                wishlistId: m,
                action: en.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tg.default.track(A.HAw.WISHLIST_ITEM_CLICKED, {
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
    return (0, n.jsx)("div", {
        ref: j,
        children: (0, n.jsx)(tf.A, {
            sku: t,
            user: i,
            guildId: s,
            spec: tE,
            cardStyle: a()(tA.Nr, r),
            skuPreviewStyle: a()(tA.ev, o),
            onHoverOrFocusChange: d,
            onClick: E,
            "aria-label": u,
            children: x,
        }),
    });
}
function tC(e) {
    let {
            sku: t,
            analyticsLocations: i,
            isHoveringOrFocusing: s,
            handleOpenUserProfileModal: r,
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
                    (await eF.A.addSkuToWishlist(t.id, i), c?.(), r?.({ tabSection: en.RP.WISHLIST }));
                } catch (e) {
                    ((0, tr.P0)((0, to.o)(B.intl.string(B.t.F8FvUy), td.Ck.FAILURE)),
                        tc.O.announce(B.intl.string(B.t.F8FvUy)));
                } finally {
                    x(!1);
                }
            }
        }, [t, i, m, r, c]),
        h = l.useMemo(() => a()({ [tA.zW]: s || m }, o), [s, m, o]);
    return (0, n.jsxs)(tv, {
        "aria-label": B.intl.formatToPlainString(B.t.xRjJBe, { productName: (0, tm.T)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: h,
        onClick: f,
        isHoveringOrFocusing: s,
        ...g,
        children: [(0, n.jsx)(tp.oU, { isHoveringOrFocusing: s, loading: m }), !s && !m && u],
    });
}
function tS(e) {
    let { sku: t, analyticsLocations: i, ...l } = e,
        { analyticsLocations: s } = (0, er.Ay)(...(i ?? []), eT.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        a = (0, tu.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, n.jsx)(tC, {
        sku: t,
        analyticsLocations: s,
        promotion: null != a ? (0, n.jsx)(th.s, { spec: tE, icon: a.Icon, tooltipText: a.tooltip }) : null,
        ...l,
    });
}
function tb(e) {
    let { sku: t, ...i } = e,
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
                    return a()(tA.ML, tA.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, n.jsx)(tC, { sku: t, skuPreviewStyle: s, ...i });
}
function tk(e) {
    let { sku: t, ...i } = e;
    return (0, n.jsx)(tC, { sku: t, skuPreviewStyle: tj.MO, ...i });
}
function ty(e) {
    let { sku: t, ...i } = e,
        [s, a] = l.useState(!1);
    switch (t.productLine) {
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(tS, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...i });
        case A.EZt.COLLECTIBLES:
            return (0, n.jsx)(tb, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...i });
        case A.EZt.PREMIUM:
            return (0, n.jsx)(tk, { sku: t, isHoveringOrFocusing: s, setIsHoveringOrFocusing: a, ...i });
        default:
            return null;
    }
}
var tT = i(609965);
function tN(e) {
    let { wishlist: t, guildId: i, handleOpenUserProfileModal: l, analyticsLocations: s, className: r, items: o } = e,
        d = (0, I.bG)([eB.default], () => eB.default.getUser(t?.userId));
    return (0, n.jsx)("ul", {
        className: a()(tT.Vg, r),
        children: o.map((e, a) => {
            let { sku: r, itemSource: o } = e;
            return (0, n.jsx)(
                ti.dB,
                {
                    newValue: { positionInSection: a, skuId: r.id, itemSource: o, productLine: r.productLine },
                    children: (0, n.jsx)(ty, {
                        sku: r,
                        wishlistId: t?.id,
                        wishlistOwner: d,
                        guildId: i,
                        handleOpenUserProfileModal: l,
                        analyticsLocations: s,
                    }),
                },
                r.id,
            );
        }),
    });
}
var tR = i(554146),
    tw = i(131607),
    tL = i(927813),
    t_ = i(49999);
let tP = 90 * tL.A.Millis.DAY,
    tO = 90 * tL.A.Millis.DAY;
var tD = i(469364);
function tG(e) {
    let {
            user: t,
            guildId: i,
            wishlist: s,
            hasFetchedWishlist: a = !1,
            analyticsLocations: r,
            impressionSessionId: o,
            className: d,
        } = e,
        {
            isVisible: c,
            isDismissible: u,
            markAsDismissed: g,
        } = (function (e) {
            let { userId: t, wishlist: i, hasFetchedWishlist: n } = e,
                s = (i?.items.length ?? 0) >= 3,
                [a, r] = l.useState(!1);
            !n || s || a || r(!0);
            let o = (0, I.bG)(
                    [eX.A],
                    () => (null != i ? new Date(eX.A.getWishlistSettings(t, i.id)?.updated_at ?? 0).valueOf() : 0),
                    [i, t],
                ),
                [d, c] = (0, tw.Wl)(
                    tR.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: o + tO, cooldownDurationMs: tP },
                    void 0,
                    !0,
                ),
                u = d === tR.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: n && (u || a || !s),
                isDismissible: s,
                markAsDismissed: l.useCallback(() => {
                    (r(!1), c(t_.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: a });
    return c
        ? (0, n.jsx)(tM, {
              user: t,
              guildId: i,
              wishlist: s,
              analyticsLocations: r,
              impressionSessionId: o,
              className: d,
              isDismissible: u,
              markAsDismissed: g,
          })
        : null;
}
function tM(e) {
    let {
            user: t,
            guildId: i,
            wishlist: s,
            analyticsLocations: r,
            impressionSessionId: o,
            className: d,
            isDismissible: c,
            markAsDismissed: u,
        } = e,
        { items: g } = (function (e) {
            let {
                    userId: t,
                    wishlist: i,
                    numWishlistItemsToRecommend: n,
                    maxWishlistItemsToShow: s = n,
                    source: a,
                } = e,
                { recommendations: r, status: o } = (0, tn.Ul)({ userId: t, numItems: n, source: a }),
                d = l.useMemo(() => new Set(i?.items.map((e) => e.skuId) ?? []), [i]),
                c = "success" === o && !d.has(tl.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = r.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (c && e.unshift({ sku: (0, e0.rI)(), itemSource: "takeover" }), e.slice(0, s));
                }, [r, d, c, s]),
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
        : (0, n.jsxs)("div", {
              className: a()(tD.kL, d),
              children: [
                  (0, n.jsxs)("div", {
                      className: tD.wx,
                      children: [
                          (0, n.jsx)(P.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: B.intl.string(B.t["+GB8Kt"]),
                          }),
                          c &&
                              (0, n.jsx)("div", {
                                  className: tD.b,
                                  children: (0, n.jsx)(tt.J, { size: "xs", onClick: u }),
                              }),
                      ],
                  }),
                  (0, n.jsx)(ti.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: s?.id,
                          analyticsLocations: r,
                      },
                      children: (0, n.jsx)(tN, {
                          items: g,
                          guildId: i,
                          wishlist: s,
                          className: a()(tD.Vg, tD.e6),
                          analyticsLocations: r,
                      }),
                  }),
              ],
          });
}
var tU = i(477782),
    tF = i(403581),
    tW = i(922016),
    tH = i(980707),
    tV = i(789645),
    tB = i(847374),
    tY = i(486020),
    tz = i(431194);
function tX(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: a,
            handleAddNitroToWishlist: r,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [c, u] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return l.useMemo(
                () =>
                    t.filter(eD.Vq).map((e) => {
                        let t = tY.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: B.intl.formatToPlainString(B.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: tz.I, src: t, alt: "" }) : ev.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: ev.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, eN.A)(o), handleOpenGameShop: a }),
        m = l.useMemo(
            () =>
                (0, n.jsxs)(tU.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(tU.Dr, {
                                id: "browse-collectibles-shop",
                                label: B.intl.string(B.t["5upuqx"]),
                                iconLeft: ev.U,
                                leadingAccessory: { type: "icon", icon: ev.U },
                                action: s,
                            }),
                        null != r &&
                            (0, n.jsx)(tU.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: B.intl.string(B.t.lG6a5x),
                                iconLeft: tF.t,
                                leadingAccessory: { type: "icon", icon: tF.t },
                                action: r,
                            }),
                        null != a &&
                            g.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a } = e;
                                return (0, n.jsx)(
                                    tU.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, a, r, g],
        );
    return (0, n.jsx)(tW.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tH.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": B.intl.string(B.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eE.$, {
                buttonRef: d,
                variant: i,
                size: "sm",
                icon: c ? tV.P : tB.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tK = i(509434),
    tq = i(365199);
let tJ = b.A.getArticleURL(A.MVz.CUSTOM_PROFILES_WISHLIST);
function tZ(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        a = l.useRef(null),
        { analyticsLocations: r } = (0, er.Ay)(eT.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(tU.rX, {
                          children: [
                              (0, n.jsx)(tU.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: B.intl.string(B.t.b2nFyA),
                                  subtext: B.intl.string(B.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(tU.bX, {}),
                              (0, n.jsx)(tU.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: B.intl.string(B.t.hvVgAZ),
                                  icon: tK.I,
                                  trailingIndicator: { type: "icon", icon: tK.I },
                                  action: () => window.open(tJ),
                              }),
                          ],
                      })
                    : null,
            [t, i, s],
        );
    return null == o
        ? null
        : (0, n.jsx)(er.f5, {
              value: r,
              children: (0, n.jsx)(tW.Y, {
                  targetElementRef: a,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(tH.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": B.intl.string(B.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(V.q3, {
                          buttonRef: a,
                          icon: tq.MoreHorizontalIcon,
                          tooltipText: B.intl.string(B.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tQ = i(526725);
function t$(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(tX, {
              title: B.intl.string(B.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(eE.$, {
              variant: "secondary",
              size: "sm",
              icon: ev.U,
              text: B.intl.string(B.t["i/yzHs"]),
              onClick: i,
          });
}
function t0(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: i,
        isWishlistPublic: l,
        handleOpenShop: s,
        handleOpenGameShop: a,
        handleAddNitroToWishlist: r,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: tQ.$s,
        children: [
            t &&
                (i.length > 0 || null != r
                    ? (0, n.jsx)(tX, {
                          title: B.intl.string(B.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: i.length > 0 ? a : void 0,
                          handleAddNitroToWishlist: r,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(eE.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: eC.j,
                          text: B.intl.string(B.t.SDUwM0),
                          onClick: s,
                      })),
            (0, n.jsx)(tZ, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function t1(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: s } = e,
        a = l.useCallback(() => {
            i(t.id);
        }, [t, i]),
        r = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, n.jsx)(eE.$, {
        variant: "primary",
        size: "sm",
        icon: ev.U,
        text: B.intl.formatToPlainString(B.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function t2(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: a,
            handleOpenGameShopMouseDown: r,
        } = e,
        o = (0, e_.Us)() === A.BRT.OVERLAY,
        d = (0, eN.A)(i),
        c = l.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(t1, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(tX, {
                title: B.intl.string(B.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [o, i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: tQ.y7,
        children: [
            (0, n.jsxs)("div", {
                className: tQ.q6,
                children: [
                    (0, n.jsx)(_.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: B.intl.string(B.t.HGnLLT),
                    }),
                    (0, n.jsx)(P.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: B.intl.string(B.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != c) &&
                (0, n.jsxs)(eS.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, n.jsx)(eE.$, {
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
function t8(e) {
    let {
            isOwner: t,
            showEditingControls: i,
            profileOwner: s,
            wishlist: a,
            socialLayerStorefrontApplicationIds: r,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        u = a.id,
        m = (0, I.bG)([eX.A], () => eX.A.getWishlistSettings(s.id, u)),
        { trackUserProfileWishlistAction: x } = (0, g.NJ)(),
        f = !1 === s.nsfwAllowed,
        [h, p] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && p(m.visibility === ej.a.PUBLIC);
    }, [m?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: i, productLines: n } = e;
                null != t && x({ wishlistId: t, action: i, productLines: n });
            },
            [x],
        ),
        j = (0, eJ.A)({ wishlistId: u, onAction: A, productLines: null != a ? (0, eV.y9)(a) : null }),
        E = l.useCallback(() => {
            if (null == u) return;
            let e = h ? ej.a.PRIVATE : ej.a.PUBLIC;
            (p(!h),
                eF.A.updateWishlistVisibility(u, e),
                x({
                    wishlistId: u,
                    action: h ? en.Mq.WISHLIST_TOGGLE_PRIVATE : en.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != a ? (0, eV.y9)(a) : void 0,
                }));
        }, [u, h, x, a]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !h &&
                (0, n.jsxs)("div", {
                    className: tQ.lm,
                    children: [
                        (0, n.jsx)(eb.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(P.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                f &&
                (0, n.jsxs)("div", {
                    className: tQ.lm,
                    children: [
                        (0, n.jsx)(ek.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(P.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: j,
                className: tQ.U1,
                children: [
                    (0, n.jsx)(P.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: B.intl.format(B.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(t0, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: r,
                              isWishlistPublic: h,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, n.jsx)(t$, {
                              socialLayerStorefrontApplicationIds: r,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function t5(e) {
    let { profileOwner: t, guildId: i } = e,
        s = l.useRef(null);
    (0, eK.i)({ containerRef: s, itemType: "WISHLIST_ITEM" });
    let { wishlistId: r, currentUser: o } = (0, I.cf)([eX.A, eB.default], () => ({
            wishlistId: eX.A.getFirstWishlistId(t.id),
            currentUser: eB.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, er.Ay)(),
        c = (0, ey.A)(() => ((0, x.aS)()?.enabled === !0 ? (ez.A.getEntry(t.id)?.lastViewedAt ?? null) : null));
    l.useEffect(() => {
        (0, eY.Z)(t.id);
    }, [t.id]);
    let u = (0, eq.A)(t.id),
        { wishlist: g, wasFetched: m, error: f } = (0, eH.fw)({ wishlistId: r, userId: t.id }),
        [h, p] = l.useState(!1);
    (m && !h && p(!0), (0, eW.A)(g));
    let A = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                a = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                r = (0, I.bG)([eG.A], () => eG.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, eO.$)(i) && null != r[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, r]),
                d = (0, eM.w)({ userIds: a }),
                c = (0, eM.mn)({ userIds: a }),
                u = (0, eM.tR)(a),
                g = (0, eM.rY)(),
                m = (0, eM.qx)(),
                x = (0, eM.px)();
            return l.useMemo(
                () => (0, L.uniq)([...o, ...d, ...c, ...u, ...(s ? [...g, ...m, ...x] : [])].filter(eD.Vq)),
                [o, d, c, u, g, m, x, s],
            );
        })({ wishlist: g, profileOwner: t, currentUser: o }),
        j = (0, ey.A)(() => (0, eA.A)()),
        E = l.useCallback(() => {
            (0, eR.Cz)({ analyticsLocations: d, analyticsSource: eT.A.USER_PROFILE_WISHLIST });
        }, [d]),
        v = l.useCallback((e) => {
            (0, eU.G)({ applicationId: e });
        }, []),
        C = l.useCallback((e) => {
            ((0, ec.closeUserProfileModal)(), (0, eU.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, eL.c)({
            userId: o?.id,
            skuId: tl.pe.TIER_2,
            nuxGraphic: eP.g,
            onNuxShow: ew.D,
            location: eT.A.USER_PROFILE_WISHLIST,
        });
    if (null == o || null != f) return null;
    let b = null == g || 0 === g.items.length;
    return (0, n.jsxs)(t3, {
        scrollerRef: s,
        className: a()({ [tQ.XG]: !b }),
        fade: !0,
        children: [
            b
                ? (0, n.jsx)(t2, {
                      showEditingControls: u,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: E,
                      handleOpenGameShop: C,
                      handleOpenGameShopMouseDown: v,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eZ.A, { scrollerRef: s }),
                          (0, n.jsx)(t8, {
                              isOwner: o?.id === t.id,
                              showEditingControls: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: E,
                              handleOpenGameShop: C,
                              handleAddNitroToWishlist: (0, eV.C3)(g, tl.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, n.jsx)(te, {
                              items: g.items,
                              profileOwner: t,
                              guildId: i,
                              showEditingControls: u,
                              lastViewedAt: c,
                          }),
                      ],
                  }),
            u &&
                (0, n.jsx)(tG, {
                    user: t,
                    guildId: i,
                    wishlist: g,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: j,
                    className: b ? tQ._E : tQ.HZ,
                }),
        ],
    });
}
var t7 = i(131058);
function t3(e) {
    let { children: t, className: i, scrollerRef: l, ...s } = e;
    return (0, n.jsx)(r.Ip, { ref: l, className: a()(t7.gN, i), fade: !0, ...s, children: t });
}
function t4(e) {
    let { user: t, currentUser: i, section: l, displayProfile: s, guildId: a, channelId: r, onClose: o } = e;
    return l === en.RP.ACTIVITY
        ? (0, n.jsx)(es, { user: t, currentUser: i, displayProfile: s, guildId: a, channelId: r, onClose: o })
        : l === en.RP.MUTUAL_FRIENDS
          ? (0, n.jsx)(em, { user: t, guildId: a, channelId: r, onClose: o })
          : l === en.RP.MUTUAL_GUILDS
            ? (0, n.jsx)(ep, { user: t, onClose: o })
            : l === en.RP.WIDGETS
              ? (0, n.jsx)(eI.A, { user: t, guildId: a, channelId: r })
              : l === en.RP.WISHLIST
                ? (0, n.jsx)(t5, { profileOwner: t, guildId: a })
                : null;
}
function t6(e) {
    let {
            user: t,
            currentUser: i,
            displayProfile: s,
            guildId: a,
            channelId: I,
            items: A,
            initialSection: j,
            onClose: E,
        } = e,
        { trackUserProfileAction: v } = (0, g.NJ)(),
        { shouldLogExposure: C } = (0, f.A)(t);
    (0, h.A)(t);
    let S = l.useRef(!1),
        b = A.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        b && !S.current && ((S.current = !0), v({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [b, v]);
    let [k, y] = l.useState(() => (A.find((e) => e.section === j) ?? A[0]).section),
        T = A.find((e) => e.section === k) ?? A[0];
    return (
        T.section !== k && y(T.section),
        (0, n.jsxs)("div", {
            className: t7.kL,
            children: [
                C && (0, n.jsx)(x.kM, { location: "UserProfileModalV2Tabs" }),
                (0, n.jsx)(r.Ip, {
                    orientation: "horizontal",
                    className: t7.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, n.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: T.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && T.section === en.RP.WIDGETS
                                ? (0, u.VQ)()
                                : (v({ action: "PRESS_SECTION", section: e }), y(e));
                        },
                        children: A.map((e) =>
                            (0, n.jsxs)(
                                o.V.Item,
                                {
                                    className: t7.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? B.intl.formatToPlainString(B.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, n.jsx)(p.A, { className: t7.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: T.section,
                    "aria-label": T.text,
                    className: t7.NM,
                    children: (0, n.jsx)(d.F, {
                        component: (0, n.jsx)(c.A, { children: (0, n.jsx)(d.H, { children: T.text }) }),
                        children: (0, n.jsx)(t4, {
                            user: t,
                            currentUser: i,
                            displayProfile: s,
                            guildId: a,
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
