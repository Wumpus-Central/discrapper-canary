l.r(i), l.d(i, { default: () => eF });
var s = l(477900),
    n = l(582128),
    r = l(74445),
    o = l(17928),
    d = l(717421),
    t = l(477782),
    a = l(305866),
    u = l(140735),
    c = l(707554),
    p = l(80682),
    A = l(793574),
    f = l(688810),
    I = l(480335),
    x = l(577390),
    P = l(372320),
    j = l(31956),
    h = l(744808),
    O = l(915089),
    m = l(713517),
    g = l(645507),
    y = l(267102),
    T = l(397562),
    v = l(71393),
    E = l(562153),
    N = l(183555),
    C = l(47675),
    S = l(342053),
    U = l(999291),
    _ = l(679492),
    k = l(402860),
    R = l(718019),
    b = l(915614),
    L = l(439053),
    w = l(312381),
    F = l(946356),
    G = l(587168),
    M = l(193738),
    W = l(713608),
    V = l(901472),
    H = l(985925),
    q = l(468689),
    z = l(474397),
    B = l(378570),
    D = l(280450),
    K = l(309010),
    J = l(993401),
    Y = l(652215),
    X = l(746080),
    $ = l(486974),
    Q = l(375708);
function Z(e) {
    let { user: i, guildId: l, channelId: n, onClose: r, appContext: d } = e,
        { newestAnalyticsLocation: t } = (0, f.Ay)(),
        a = (0, y.aL)(),
        u = (0, o.bG)([D.default], () => D.default.getId() === i?.id),
        c = (0, H.q)(l ?? null),
        p = (0, o.bG)([K.Ay], () => n ?? K.Ay.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(J.br, {
              action: "PRESS_MOD_VIEW",
              icon: W.q,
              tooltipText: Q.intl.string(Q.t.kj3tz2),
              onClick: () => {
                  q.A.close(),
                      null != p && (0, B.iN)(p),
                      (0, z.A)(d),
                      a.dispatch(Y.jej.POPOUT_CLOSE),
                      (0, V.z)(l, i.id, p ?? X.VV.MEMBER_SAFETY, { modViewPanel: $.g.INFO, sourceLocation: t }),
                      r?.();
              },
          });
}
var ee = l(133385),
    ei = l(983495),
    el = l(364522),
    es = l(695366),
    en = l(922590),
    er = l(93246),
    eo = l(994500),
    ed = l(351906),
    et = l(158045),
    ea = l(461116),
    eu = l(744753),
    ec = l(559506),
    ep = l(931481),
    eA = l(791556),
    ef = l(501193),
    eI = l(383448),
    ex = l(900179),
    eP = l(646986),
    ej = l(657538),
    eh = l(465829),
    eO = l(243166),
    em = l(442228),
    eg = l(192867),
    ey = l(403369),
    eT = l(939249),
    ev = l(834730),
    eE = l(695904),
    eN = l(116331),
    eC = l(827258),
    eS = l(518477),
    eU = l(482007);
function e_(e) {
    let { user: i, onOpenProfile: l } = e,
        { trackUserProfileAction: r } = (0, N.NJ)(),
        { hasNewWishlistItems: o, newWishlistItemCount: d, shouldLogExposure: t } = (0, eN.A)(i),
        a = null != l,
        u = a && o,
        c = n.useRef(!1);
    n.useEffect(() => {
        u && !c.current && ((c.current = !0), r({ action: "VIEW_NEW_CONTENT_NOTICE" }));
    }, [u, r]);
    let p = n.useCallback(() => {
        r({ action: "PRESS_NEW_CONTENT_WISHLIST", section: eS.RP.WISHLIST }), l?.({ tabSection: eS.RP.WISHLIST });
    }, [r, l]);
    return a
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  t && (0, s.jsx)(eE.kM, { location: "UserProfilePopout" }),
                  u &&
                      (0, s.jsx)(eT.D, {
                          onClick: p,
                          "aria-label": Q.intl.formatToPlainString(Q.t.wKJfIg, { count: d }),
                          className: eU.S4,
                          children: (0, s.jsxs)(F.A.Overlay, {
                              className: eU.Uq,
                              children: [
                                  (0, s.jsx)(eC.A, { className: eU.Pf }),
                                  (0, s.jsx)(ev.E, {
                                      variant: "text-xs/medium",
                                      children: Q.intl.format(Q.t.wKJfIg, { count: d }),
                                  }),
                              ],
                          }),
                      }),
              ],
          })
        : null;
}
var ek = l(996988),
    eR = l(47453);
function eb(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: n,
            guild: r,
            isHoveringOrFocusing: d,
            onOpenProfile: t,
            channelId: a,
            onClose: u,
        } = e,
        c = E.Ay.useName(r?.id, a, i),
        { relationshipType: p, originApplicationId: A } = (0, o.cf)([eo.A], () => ({
            relationshipType: eo.A.getRelationshipType(i.id),
            originApplicationId: eo.A.getOriginApplicationId(i.id),
        })),
        f = (0, en.fi)(i.id),
        I = (0, o.bG)([ed.A], () => ed.A.hidePersonalInformation),
        x = i.id === l.id,
        P = n?.widgets != null && n.widgets.length > 0,
        j = (0, et.TW)(l);
    return (0, s.jsxs)(el.Ip, {
        fade: !0,
        className: eR.rf,
        children: [
            (0, s.jsx)(ec.A, { userId: i.id }),
            (0, s.jsx)(eh.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: t,
                displayNameTrailing: I ? null : (0, s.jsx)(eO.A, { userId: i.id, isVisible: d, onOpenProfile: t }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(r?.id) && (0, s.jsx)(eg.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(ea.A, { displayProfile: n, themeType: ek.d.POPOUT, onClose: u }),
            }),
            p === Y.eA$.PENDING_INCOMING &&
                (0, s.jsx)(F.A.Overlay, {
                    children: (0, s.jsx)(ep.A, { user: i, guildId: r?.id, channelId: a, applicationId: A }),
                }),
            f.map((e) =>
                (0, s.jsx)(
                    F.A.Overlay,
                    {
                        children: (0, s.jsx)(ep.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(eI.A, { user: i }),
            !x && (0, s.jsx)(eA.A, { user: i, onOpenProfile: (e) => t?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(F.A.Overlay, { children: (0, s.jsx)(ef.A, { username: c }) }),
            x && (0, s.jsx)(eu.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(F.A.Overlay, {
                      className: eR.Nr,
                      children: (0, s.jsx)(ex.A, {
                          heading: Q.intl.string(Q.t.Iyka0U),
                          headingIcon: es.E,
                          headingColor: "text-strong",
                          children: (0, s.jsx)(er.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(em.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: I, onClose: u }),
            (0, s.jsx)(e_, { user: i, onOpenProfile: t }),
            P && (0, s.jsx)(ej.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: t }),
            (0, s.jsx)(eP.A, { user: i, currentUser: l, guildId: r?.id, onOpenUserProfileModal: t, onClose: u }),
            null != r && (0, s.jsx)(ey.A, { userId: i.id, guild: r }),
        ],
    });
}
var eL = l(848674),
    ew = l(207634);
function eF(e) {
    let {
            user: i,
            currentUser: l,
            guildId: W,
            channelId: V,
            messageId: H,
            roleId: q,
            openedAt: z,
            closePopout: B,
            setPopoutRef: D,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: J = [],
            appContext: X,
            disableAutoFocus: $ = !1,
            onClickContainer: el,
        } = e,
        { analyticsLocations: es } = (0, f.Ay)([...J, A.A.USER_PROFILE_POPOUT]),
        en = (0, y.aL)(),
        er = (0, N.pb)({ layout: "POPOUT", userId: i.id, guildId: W, channelId: V, messageId: H, roleId: q }),
        eo = (0, o.bG)([v.A], () => (null != W ? v.A.getGuild(W) : null)),
        ed = n.useMemo(() => (null != W ? { [W]: [i.id] } : {}), [W, i.id]);
    (0, p.Eq)(ed, "UserProfilePopout");
    let et = n.useRef(null),
        ea = (0, U.Ay)(i.id, W);
    (0, T.A)(es, ea, eS.R7.POPOUT);
    let { isHoveringOrFocusing: eu, isHovering: ec } = (0, m.A)(et),
        ep = (0, _.fC)(),
        eA = (0, P.A)(ea?.profileFrame?.skuId, "UserProfilePopout"),
        ef = (0, x.A)(ea?.profileFrame?.skuId);
    (0, j.A)({ skuId: ea?.profileFrame?.skuId, openedAt: z, context: er, analyticsLocations: es });
    let eI = (0, d.z)({ opacity: +(null != ep.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        D?.(et?.current);
    }, [et, D, eA?.skuId]);
    let ex = n.useRef(null),
        eP = i.id === l.id,
        ej = (0, S.g)("UserProfilePopout"),
        eh = n.useMemo(() => (0, g.A)(), []);
    function eO(e) {
        B?.(),
            en.dispatch(Y.jej.POPOUT_CLOSE),
            (0, k.openUserProfileModal)({
                sourceAnalyticsLocations: es,
                hideRestrictedProfile: !0,
                customStatusPrompt: eh,
                ...er,
                ...e,
                appContext: X,
            });
    }
    let em = $ ? "div" : a.l,
        eg = (0, O.GV)(),
        ey = E.Ay.useName(eo?.id, V, i);
    return (0, s.jsx)(f.f5, {
        value: es,
        children: (0, s.jsx)(N.of, {
            value: er,
            openedAt: z,
            fetchStartedAt: ea?.fetchStartedAt,
            fetchEndedAt: ea?.fetchEndedAt,
            isLoaded: ea?.isLoaded,
            children: (0, s.jsx)(_.Hl, {
                value: ep,
                children: (0, s.jsxs)(em, {
                    ref: et,
                    "aria-labelledby": eg,
                    onClick: el,
                    children: [
                        (0, s.jsx)(u.A, {
                            children: (0, s.jsx)(c.H, { id: eg, children: Q.intl.format(Q.t.KRe1Fk, { name: ey }) }),
                        }),
                        (0, s.jsx)(c.F, {
                            children: (0, s.jsxs)(F.A, {
                                user: i,
                                displayProfile: ea,
                                themeType: ek.d.POPOUT,
                                className: eR.BK,
                                isPrivate: ea?.private === !0,
                                children: [
                                    ea?.private === !0 && (0, s.jsx)(w.A, {}),
                                    null != ep.interactionType &&
                                        (0, s.jsx)(r.animated.div, { style: eI, className: eR.tB }),
                                    (0, s.jsxs)(G.A, {
                                        children: [
                                            (0, s.jsx)(Z, {
                                                shouldShowTooltip: null === ep.interactionType,
                                                user: i,
                                                guildId: W,
                                                channelId: V,
                                                onClose: B,
                                                appContext: X,
                                            }),
                                            (0, s.jsx)(M.A, { themeType: ek.d.POPOUT, user: i }),
                                            (!eP || ej) &&
                                                (0, s.jsx)(ee.yo, {
                                                    user: i,
                                                    guildId: W,
                                                    viewProfileItem: eP
                                                        ? void 0
                                                        : K
                                                          ? null
                                                          : (0, s.jsx)(t.Dr, {
                                                                id: "view-profile",
                                                                label: Q.intl.string(Q.t["+Xp3hq"]),
                                                                action: () => {
                                                                    eO(),
                                                                        (0, C.Wn)({
                                                                            action: "PRESS_VIEW_PROFILE",
                                                                            analyticsLocations: es,
                                                                            ...er,
                                                                        });
                                                                },
                                                            }),
                                                    appContext: X,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eR.wx,
                                        children: [
                                            (0, s.jsx)(b.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: W,
                                                themeType: ek.d.POPOUT,
                                            }),
                                            (0, s.jsx)(L.A, { userId: i.id, className: eR.oR, onClose: B }),
                                            (0, s.jsx)(R.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: W,
                                                channelId: V,
                                                avatarSize: ew.T[ek.d.POPOUT].avatarSize,
                                                onOpenProfile: K ? void 0 : eO,
                                            }),
                                            (0, s.jsx)(ei.A, {
                                                ref: ex,
                                                user: i,
                                                guildId: W,
                                                channelId: V,
                                                themeType: ek.d.POPOUT,
                                                onCloseProfile: B,
                                                prompt: eh,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eb, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: ea,
                                        guild: eo,
                                        isHoveringOrFocusing: null == ep.interactionType && eu,
                                        onOpenProfile: K ? void 0 : eO,
                                        channelId: V,
                                        onClose: B,
                                    }),
                                    (0, s.jsx)(eL.A, {
                                        user: i,
                                        guildId: W,
                                        channelId: V,
                                        onClose: B,
                                        appContext: X,
                                        disableAutoFocus: $,
                                    }),
                                    ea?.profileEffect != null &&
                                        (0, s.jsx)(I.A, { skuId: ea?.profileEffect?.skuId, isHovering: ec }),
                                    null != eA && (0, s.jsx)(h.A, { frame: eA, fadeIn: ef }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
