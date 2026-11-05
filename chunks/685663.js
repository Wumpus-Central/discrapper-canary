n.d(t, { default: () => eC });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(855986),
    c = n(189213),
    o = n(939249),
    u = n(834730),
    d = n(403581),
    h = n(140735),
    A = n(750943),
    m = n(391242),
    f = n(638495),
    E = n(192308),
    g = n(793574),
    x = n(688810),
    C = n(753838),
    p = n(946274),
    R = n(739053),
    T = n(82498),
    j = n(702211),
    N = n(699576),
    _ = n(469054),
    y = n(866665),
    v = n(559106),
    F = n(241326),
    b = n(534514),
    S = n(289873),
    L = n(695366),
    I = n(646514),
    M = n(287809),
    H = n(101058),
    U = n(620632),
    w = n(765178),
    k = n(73153),
    D = n(157559),
    P = n(627784);
function O() {
    return { isFetching: !1, lastFetchedAt: null, error: null };
}
let G = [],
    V = O();
class B extends i.Ay.Store {
    static displayName = "RecentAvatarsStore";
    get isFetching() {
        return V.isFetching;
    }
    get fetchError() {
        return V.error;
    }
    get shouldFetch() {
        return Date.now() - (V.lastFetchedAt ?? 0) > 3e5 && !V.isFetching;
    }
    getAvatars() {
        return G;
    }
}
let z = new B(k.h, {
    RECENT_AVATARS_FETCH_START: function () {
        ((V.isFetching = !0), (V.error = null));
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        ((G = t), (V.isFetching = !1), (V.lastFetchedAt = Date.now()));
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        ((V.isFetching = !1), (V.error = t));
    },
    RECENT_AVATARS_UPDATE: function () {
        V.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        G = G.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        ((G = []), (V = O()));
    },
});
var q = n(652215),
    J = n(792996);
async function K(e) {
    try {
        (await U.Bo.del({ url: q.Rsh.RECENT_AVATARS_DELETE(e), rejectWithError: !0 }),
            await k.h.dispatch({ type: "RECENT_AVATAR_DELETE", avatarId: e }),
            w.O.announce(J.intl.string(J.t.YJPieI)));
    } catch (e) {
        D.A.show({ title: J.intl.string(J.t.iufib1), body: J.intl.string(J.t["/ZNT+0"]) });
    }
}
var W = n(778712),
    X = n(595535),
    Z = n(486863);
function $(e) {
    let { className: t, size: n = X.q } = e,
        l = (0, W.FT)(n);
    return (0, a.jsx)("svg", {
        width: l,
        height: l,
        viewBox: `0 0 ${l} ${l}`,
        className: s()(Z.R, t),
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.4505 50.6604C44.3703 50.7187 44.2897 50.7766 44.2088 50.8341C43.105 51.6191 41.9418 52.3261 40.7273 52.9469C36.9087 54.8989 32.583 56 28 56C23.417 56 19.0913 54.8989 15.2727 52.9469C15.2661 52.9436 15.2595 52.9402 15.253 52.9368C13.9566 52.2728 12.7189 51.5108 11.5495 50.6604C9.38994 49.0899 7.46354 47.2183 5.832 45.1072C5.467 44.6349 5.11675 44.1506 4.78196 43.6551C1.76288 39.1862 0 33.799 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 34.442 53.8244 40.376 50.168 45.1072C48.5365 47.2183 46.6101 49.0899 44.4505 50.6604ZM40.2456 47.3651C36.7036 49.6096 32.5036 50.9091 28 50.9091C23.4964 50.9091 19.2964 49.6096 15.7544 47.3651L16.3313 41.5957C16.3944 40.965 15.6427 40.6731 15.2985 41.2054C14.56 42.3472 13.7498 43.7851 13.0644 45.3716C11.1151 43.6941 9.4513 41.6942 8.15574 39.4546C12.1168 32.607 19.5204 28 28 28C36.4796 28 43.8832 32.607 47.8443 39.4546C46.5487 41.6942 44.8849 43.6941 42.9356 45.3716C42.2502 43.7851 41.44 42.3472 40.7015 41.2054C40.3573 40.6731 39.6056 40.965 39.6687 41.5957L40.2456 47.3651ZM28 25.4545C32.9204 25.4545 36.9091 21.4658 36.9091 16.5455C36.9091 11.6251 32.9204 7.63636 28 7.63636C23.0796 7.63636 19.0909 11.6251 19.0909 16.5455C19.0909 21.4658 23.0796 25.4545 28 25.4545Z",
        }),
    });
}
var Y = n(656925),
    Q = n(339984),
    ee = n(421184);
function et(e) {
    let { avatar: t, index: n, onSelectRecentAvatar: r, onDeleteRecentAvatar: s, avatarButtonRef: i } = e,
        { id: c, storageHash: u, description: d = J.intl.string(J.t.lqaIxI) } = t,
        { avatarSrc: h, eventHandlers: A } = (0, Y.A)({ avatarId: c, storageHash: u }),
        { onMouseEnter: m, onMouseLeave: f } = A,
        E = l.useRef(null),
        g = d ?? u.substring(0, 6).toUpperCase(),
        x = J.intl.formatToPlainString(J.t.tmJ75y, { orderNumber: n + 1, description: g }),
        C = J.intl.formatToPlainString(J.t.pBzwhc, { orderNumber: n + 1, description: g });
    return (0, a.jsxs)("div", {
        className: ee.ge,
        children: [
            (0, a.jsx)(o.D, {
                onClick: () => r(t),
                onMouseEnter: m,
                onMouseLeave: f,
                className: ee.Hk,
                "aria-label": x,
                innerRef: i,
                children: (0, a.jsx)("img", { src: h, alt: d, className: ee.Hc }),
            }),
            (0, a.jsx)(y.m, {
                text: J.intl.string(J.t.N86XcP),
                anchorRef: E,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, a.jsx)(v.vN, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        ref: E,
                        "aria-label": C,
                        onClick: (e) => s(e, n, c, u, C),
                        className: ee.G5,
                        children: (0, a.jsx)(F.TrashIcon, { size: "xs", color: "currentColor", className: ee.fy }),
                    }),
                }),
            }),
        ],
    });
}
function en(e) {
    let { avatars: t, onComplete: r, setFetchError: c, className: o, returnRef: u } = e,
        d = (0, i.bG)([M.default], () => M.default.getCurrentUser()),
        A = l.useRef([]),
        m = l.useRef(null),
        g = l.useRef(t.length),
        x = l.useRef(null),
        [C, p] = l.useState(!1),
        [R, T] = l.useState(!1),
        j = t.length,
        N = Math.max(6 - j, 0),
        _ = (0, f.k)(),
        y = l.useCallback(
            async (e) => {
                if (null == d || C) return;
                (p(!0), c(null));
                let { id: t, storageHash: l, description: s } = e,
                    i = (0, H.Xp)({ userId: d.id, avatarId: t, storageHash: l, size: 1024, canAnimate: !0 });
                try {
                    let t = await fetch(i),
                        c = await t.blob(),
                        { filename: o, type: d } = (0, H.yM)(l, s);
                    (0, E.mM)(
                        async () => {
                            let { default: t } = await Promise.all([
                                n.e(144909),
                                n.e(985768),
                                n.e(329172),
                                n.e(196063),
                                n.e(392028),
                                n.e(124054),
                                n.e(237403),
                                n.e(655327),
                                n.e(67702),
                                n.e(1214),
                                n.e(424199),
                                n.e(188941),
                                n.e(543039),
                                n.e(827708),
                                n.e(266900),
                                n.e(948804),
                                n.e(314243),
                                n.e(417286),
                                n.e(721690),
                                n.e(35757),
                                n.e(832817),
                                n.e(893928),
                                n.e(165595),
                                n.e(416143),
                                n.e(791154),
                                n.e(92124),
                                n.e(988077),
                                n.e(232551),
                                n.e(561216),
                                n.e(692835),
                                n.e(588940),
                                n.e(21219),
                                n.e(829177),
                                n.e(106943),
                                n.e(348674),
                                n.e(14962),
                                n.e(786751),
                                n.e(858164),
                                n.e(422891),
                                n.e(977547),
                                n.e(894747),
                                n.e(444376),
                                n.e(924862),
                                n.e(571470),
                                n.e(50342),
                                n.e(507406),
                                n.e(836681),
                                n.e(455524),
                                n.e(324633),
                                n.e(574571),
                                n.e(777124),
                            ]).then(n.bind(n, 142630));
                            return (n) =>
                                (0, a.jsx)(t, {
                                    imageUri: i,
                                    file: new File([c], o, { type: d }),
                                    originalAsset: e,
                                    onCrop: r,
                                    uploadType: Q.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    returnRef: u,
                                    ...n,
                                });
                        },
                        { contextKey: _ },
                    );
                } catch (e) {
                    c(J.intl.string(J.t.fZRH9P));
                } finally {
                    p(!1);
                }
            },
            [_, C, r, u, c, d],
        ),
        v = l.useCallback(
            (e, l, r, s, i) => {
                let c = l + 1 < t.length ? l + 1 : l - 1;
                ((x.current = c >= 0 ? A.current[c] : m.current),
                    e.shiftKey
                        ? K(r)
                        : (T(!0),
                          (0, E.mM)(async () => {
                              let { default: e } = await Promise.all([n.e(206130), n.e(48944)]).then(n.bind(n, 555251));
                              return (t) => {
                                  let { onClose: n, ...l } = t;
                                  return (0, a.jsx)(e, {
                                      avatarId: r,
                                      storageHash: s,
                                      avatarDescription: i,
                                      onConfirmDelete: () => K(r),
                                      onClose: async () => {
                                          (await n(),
                                              requestAnimationFrame(() => {
                                                  T(!1);
                                              }));
                                      },
                                      ...l,
                                  });
                              };
                          })));
            },
            [t],
        );
    return (
        l.useEffect(() => {
            R ||
                (t.length < g.current &&
                    null != x.current &&
                    requestAnimationFrame(() => {
                        x.current?.focus();
                    }),
                (g.current = t.length));
        }, [t.length, R]),
        (0, a.jsx)("div", {
            className: s()(ee.AU, o),
            children: (0, a.jsxs)("div", {
                className: ee.mE,
                children: [
                    j > 0 &&
                        (0, a.jsx)("ul", {
                            "aria-label": J.intl.string(J.t.lsU63N),
                            className: ee.xL,
                            children: t.map((e, t) =>
                                (0, a.jsx)(
                                    "li",
                                    {
                                        children: (0, a.jsx)(et, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: y,
                                            onDeleteRecentAvatar: v,
                                            avatarButtonRef: (e) => {
                                                A.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    N > 0 &&
                        (0, a.jsxs)("div", {
                            className: ee.wh,
                            tabIndex: -1,
                            ref: m,
                            children: [
                                (0, a.jsxs)(h.A, {
                                    children: [
                                        0 === j &&
                                            (0, a.jsxs)(a.Fragment, { children: [J.intl.string(J.t.x0DsRS), " "] }),
                                        J.intl.format(J.t["8W2HO3"], { numberOfEmptyAvatarSlots: N }),
                                    ],
                                }),
                                [...Array(N)].map((e, t) => (0, a.jsx)($, { className: ee.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function ea(e) {
    let { className: t, onComplete: n, returnRef: r } = e,
        {
            avatars: c,
            loading: o,
            error: d,
        } = (0, i.cf)([z], () => ({ avatars: z.getAvatars(), loading: z.isFetching, error: z.fetchError })),
        [h, A] = l.useState(null),
        m = h ?? d?.message;
    return (
        l.useEffect(() => {
            !(async function () {
                if (z.shouldFetch) {
                    k.h.dispatch({ type: "RECENT_AVATARS_FETCH_START" });
                    try {
                        let e = await U.Bo.get({ url: q.Rsh.RECENT_AVATARS, rejectWithError: !0 });
                        k.h.dispatch({
                            type: "RECENT_AVATARS_FETCH_SUCCESS",
                            avatars: e.body.avatars.map((e) => {
                                let { storage_hash: t, ...n } = e;
                                return { ...n, storageHash: t };
                            }),
                        });
                    } catch (e) {
                        k.h.dispatch({ type: "RECENT_AVATARS_FETCH_FAILURE", error: new P.LG(e) });
                    }
                }
            })();
        }, []),
        (0, a.jsxs)("div", {
            className: s()(ee.kL, t),
            children: [
                (0, a.jsxs)("div", {
                    className: ee.xk,
                    children: [
                        (0, a.jsx)(b.D, { variant: "body-md/medium", children: J.intl.string(J.t.Bnq9zK) }),
                        (0, a.jsx)(u.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: J.intl.format(J.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                        }),
                    ],
                }),
                o
                    ? (0, a.jsx)(S.y, { className: ee.u1 })
                    : (0, a.jsx)(en, { avatars: c, onComplete: n, setFetchError: A, returnRef: r }),
                null != m &&
                    (0, a.jsxs)("div", {
                        className: ee.gJ,
                        role: "alert",
                        children: [
                            (0, a.jsx)(L.E, { size: "xs", color: I.A.colors.TEXT_FEEDBACK_CRITICAL }),
                            (0, a.jsx)(u.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                children: m,
                            }),
                        ],
                    }),
            ],
        })
    );
}
var el = n(45837),
    er = n(71393),
    es = n(967198),
    ei = n(129230),
    ec = n(473145),
    eo = n(722178);
function eu(e, t) {
    let { isGIF: n } = t;
    if (e === Q.HL.GUILD_BANNER) return n ? q.GuildFeatures.ANIMATED_BANNER : q.GuildFeatures.BANNER;
}
var ed = n(2553),
    eh = n(693591),
    eA = n(925356);
let em = [
    { gif: n(203736), png: n(775788) },
    { gif: n(640237), png: n(689006) },
    { gif: n(964805), png: n(533798) },
    { gif: n(322821), png: n(891814) },
];
function ef(e) {
    let { shouldAnimate: t } = e;
    return (0, a.jsx)("div", {
        className: eA.p8,
        children: em.map((e) =>
            (0, a.jsx)("div", { className: eA.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function eE(e) {
    let {
            className: t,
            onClick: n,
            onMouseEnter: r,
            onMouseLeave: i,
            guildFeature: c,
            guild: A,
            icon: m,
            label: f,
            shouldShowPremiumIcon: E,
            children: g,
        } = e,
        x = l.useId(),
        p = (function (e) {
            let { guildFeature: t, guild: n } = e;
            if (null == t || null == n) return;
            let a = (0, ec.Ys)(t),
                l = n.features.has(t);
            if (null == a) return;
            let r = (0, ec.gb)(a);
            return l
                ? J.intl.formatToPlainString(J.t.u3L3TX, { levelName: r })
                : J.intl.formatToPlainString(J.t["r/v25U"], { levelName: r });
        })({ guildFeature: c, guild: A }),
        R = null != A && null != c;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(o.D, {
                className: t,
                onClick: n,
                onMouseEnter: r,
                onMouseLeave: i,
                "aria-describedby": null != p ? x : void 0,
                children: [
                    g,
                    (0, a.jsxs)("div", {
                        className: s()(eA.q3, { [eA.j5]: R }),
                        children: [
                            (0, a.jsxs)("div", {
                                className: eA.Mn,
                                children: [
                                    m,
                                    (0, a.jsxs)(u.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-strong",
                                        className: s()(eA.xo, { [eA.Fy]: E }),
                                        children: [
                                            E &&
                                                (0, a.jsx)(d.t, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: eA.T$,
                                                }),
                                            f,
                                        ],
                                    }),
                                    E && (0, a.jsx)(h.A, { children: `, ${J.intl.string(J.t["5AFxuK"])}` }),
                                ],
                            }),
                            R &&
                                (0, a.jsx)("div", {
                                    className: eA.x9,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(C.A, { guildFeature: c, guild: A, hideTooltip: !0 }),
                                }),
                        ],
                    }),
                ],
            }),
            null != p && (0, a.jsx)(h.A, { id: x, children: p }),
        ],
    });
}
function eg(e) {
    let {
            label: t,
            uploadType: n,
            guild: r,
            maxFileSizeBytes: i,
            filters: c,
            handleOpenImageEditingModal: o,
            handleFileSizeError: u,
        } = e,
        d = n === Q.HL.BANNER,
        h = eu(n, { isGIF: !1 }),
        m = l.useRef(null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: eA.ls,
                children: (0, a.jsx)(p.Ay, {
                    ref: m,
                    onChange: o,
                    maxFileSizeBytes: i,
                    onFileSizeError: u,
                    filters: c,
                    multiple: !1,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, a.jsx)(eE, {
                className: s()(eA.uK, eA.kU),
                onClick: function () {
                    m.current?.activateUploadDialogue();
                },
                guildFeature: h,
                guild: r,
                icon: (0, a.jsx)(A.X, { size: "md", color: "currentColor" }),
                label: t,
                shouldShowPremiumIcon: d,
            }),
        ],
    });
}
function ex(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: r, onMouseEnter: s, onMouseLeave: i } = (0, el.A)(),
        c = t === Q.HL.AVATAR || t === Q.HL.BANNER,
        o = eu(t, { isGIF: !0 });
    return (0, a.jsx)(eE, {
        className: eA.uK,
        onClick: l,
        onMouseEnter: s,
        onMouseLeave: i,
        guildFeature: o,
        guild: n,
        icon: (0, a.jsx)(m.O, { size: "md", color: "currentColor" }),
        label: J.intl.string(J.t["xsC+/y"]),
        shouldShowPremiumIcon: c,
        children: (0, a.jsx)(ef, { shouldAnimate: r }),
    });
}
function eC(e) {
    let {
            transitionState: t,
            onClose: r,
            onComplete: s,
            onFileSelected: o,
            uploadType: d,
            maxFileSizeBytes: h,
            showUpsellHeader: A,
            filters: m,
            analyticsLocation: C,
            analyticsLocations: p = [],
            imageSpecifications: y,
            modalTitle: v = J.intl.string(J.t.DToW4e),
            uploadOptionTitle: F = J.intl.string(J.t["MsUY/S"]),
            allowRecentAvatarsSelection: b = !0,
            returnRef: S,
        } = e,
        L = (0, i.bG)([M.default], () => M.default.getCurrentUser()),
        I = (0, i.bG)([es.A], () => es.A.getGuildId()),
        H = (0, i.bG)([er.A], () => er.A.getGuild(I)),
        U = (0, f.k)(),
        w = d === Q.HL.AVATAR || d === Q.HL.BANNER,
        k = !eo.Ay.canUseAnimatedAvatar(L) && d === Q.HL.AVATAR,
        D = (0, j.b)(!w),
        { analyticsLocations: P } = (0, x.Ay)(p, g.A.SELECT_IMAGE_MODAL),
        O = l.useCallback(
            (e) => {
                let {
                    assetOrigin: t = _.E.NEW_ASSET,
                    imageUri: n,
                    staticImageUri: a = n,
                    file: l,
                    originalAsset: i,
                    isFromTenor: c = !1,
                } = e;
                (r(), s({ assetOrigin: t, imageUri: n, staticImageUri: a, file: l, originalAsset: i, isFromTenor: c }));
            },
            [r, s],
        ),
        G = l.useCallback(
            (e, t) => {
                if ((o?.(t), t.type === eh.a.MP4)) return O({ imageUri: e, file: t });
                (0, E.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(144909),
                            n.e(985768),
                            n.e(329172),
                            n.e(196063),
                            n.e(392028),
                            n.e(124054),
                            n.e(237403),
                            n.e(655327),
                            n.e(67702),
                            n.e(1214),
                            n.e(424199),
                            n.e(188941),
                            n.e(543039),
                            n.e(827708),
                            n.e(266900),
                            n.e(948804),
                            n.e(314243),
                            n.e(417286),
                            n.e(721690),
                            n.e(35757),
                            n.e(832817),
                            n.e(893928),
                            n.e(165595),
                            n.e(416143),
                            n.e(791154),
                            n.e(92124),
                            n.e(988077),
                            n.e(232551),
                            n.e(561216),
                            n.e(692835),
                            n.e(588940),
                            n.e(21219),
                            n.e(829177),
                            n.e(106943),
                            n.e(348674),
                            n.e(14962),
                            n.e(786751),
                            n.e(858164),
                            n.e(422891),
                            n.e(977547),
                            n.e(894747),
                            n.e(444376),
                            n.e(924862),
                            n.e(571470),
                            n.e(50342),
                            n.e(507406),
                            n.e(836681),
                            n.e(455524),
                            n.e(324633),
                            n.e(574571),
                            n.e(777124),
                        ]).then(n.bind(n, 142630));
                        return (n) =>
                            (0, a.jsx)(l, {
                                imageUri: e,
                                file: t,
                                onCrop: O,
                                uploadType: d,
                                showUpsellHeader: A,
                                analyticsPage: C?.page,
                                returnRef: S,
                                ...n,
                            });
                    },
                    { contextKey: U },
                );
            },
            [C?.page, U, O, o, S, A, d],
        ),
        V = l.useCallback(() => {
            (0, ed.A)(h);
        }, [h]),
        B = l.useCallback(() => {
            (0, E.mM)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e(582012),
                        n.e(401317),
                        n.e(166336),
                        n.e(113658),
                        n.e(144909),
                        n.e(329172),
                        n.e(196063),
                        n.e(392028),
                        n.e(124054),
                        n.e(237403),
                        n.e(655327),
                        n.e(67702),
                        n.e(942030),
                        n.e(424199),
                        n.e(188941),
                        n.e(543039),
                        n.e(827708),
                        n.e(266900),
                        n.e(490028),
                        n.e(314243),
                        n.e(710911),
                        n.e(417286),
                        n.e(721690),
                        n.e(628439),
                        n.e(35757),
                        n.e(832817),
                        n.e(893928),
                        n.e(165595),
                        n.e(416143),
                        n.e(92124),
                        n.e(988077),
                        n.e(232551),
                        n.e(561216),
                        n.e(692835),
                        n.e(588940),
                        n.e(21219),
                        n.e(829177),
                        n.e(106943),
                        n.e(348674),
                        n.e(14962),
                        n.e(786751),
                        n.e(858164),
                        n.e(422891),
                        n.e(977547),
                        n.e(894747),
                        n.e(482815),
                        n.e(377766),
                        n.e(170653),
                        n.e(444376),
                        n.e(32781),
                        n.e(924862),
                        n.e(834386),
                        n.e(360781),
                        n.e(88160),
                        n.e(368111),
                        n.e(751202),
                        n.e(571470),
                        n.e(836681),
                        n.e(777124),
                        n.e(844094),
                    ]).then(n.bind(n, 491981));
                    return (t) =>
                        (0, a.jsx)(e, {
                            uploadType: d,
                            onComplete: (e) => {
                                let { imageUri: t, staticImageUri: n, file: a } = e;
                                return O({ imageUri: t, staticImageUri: n, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: A,
                            analyticsPage: C?.page,
                            returnRef: S,
                            ...t,
                        });
                },
                { contextKey: U },
            );
        }, [C?.page, U, O, S, A, d]);
    l.useEffect(() => {
        (k &&
            (ei.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: q.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: P,
            }),
            (0, R.sq)(q.U7l.PREMIUM_UPSELL_VIEWED, P, () => (0, T.uq)(q.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL))),
            ei.default.track(q.HAw.OPEN_MODAL, {
                type: q.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: C,
                location_stack: P,
                upload_type: d,
            }));
    }, [k, C, P, d]);
    let z = A && D,
        K = b && d === Q.HL.AVATAR;
    return (0, a.jsx)(c.a, {
        transitionState: t,
        onClose: r,
        size: "md",
        title: v,
        actions: [],
        returnRef: S,
        children: (0, a.jsxs)("div", {
            className: eA.jE,
            children: [
                (0, a.jsxs)("div", {
                    className: eA.pd,
                    children: [
                        (0, a.jsxs)("ul", {
                            className: eA.f9,
                            "aria-label": J.intl.string(J.t.iBnqtQ),
                            children: [
                                (0, a.jsx)("li", {
                                    children: (0, a.jsx)(eg, {
                                        label: F,
                                        uploadType: d,
                                        guild: H,
                                        handleOpenImageEditingModal: G,
                                        maxFileSizeBytes: h,
                                        filters: m,
                                        handleFileSizeError: V,
                                    }),
                                }),
                                (0, a.jsx)("li", {
                                    children: (0, a.jsx)(ex, { uploadType: d, guild: H, handleOpenGIFPickerModal: B }),
                                }),
                            ],
                        }),
                        null != y
                            ? (0, a.jsx)(u.E, {
                                  className: eA.KQ,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: y,
                              })
                            : null,
                    ],
                }),
                K && (0, a.jsx)(ea, { onComplete: O, returnRef: S }),
                z && (0, a.jsx)(N.A, { uploadType: d, showUpsell: !0, position: "inline", className: eA.Lu }),
            ],
        }),
    });
}
