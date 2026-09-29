(l.r(i), l.d(i, { default: () => eF }));
var s = l(477900),
    n = l(582128),
    r = l(202091),
    d = l(17928),
    o = l(717421),
    t = l(477782),
    a = l(305866),
    u = l(140735),
    c = l(707554),
    p = l(80682),
    f = l(793574),
    A = l(688810),
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
    k = l(679492),
    _ = l(402860),
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
    let { user: i, guildId: l, channelId: n, onClose: r, appContext: o } = e,
        { newestAnalyticsLocation: t } = (0, A.Ay)(),
        a = (0, y.aL)(),
        u = (0, d.bG)([D.default], () => D.default.getId() === i?.id),
        c = (0, H.q)(l ?? null),
        p = (0, d.bG)([K.Ay], () => n ?? K.Ay.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(J.br, {
              action: "PRESS_MOD_VIEW",
              icon: W.q,
              tooltipText: Q.intl.string(Q.t.kj3tz2),
              onClick: () => {
                  (q.default.close(),
                      null != p && (0, B.iN)(p),
                      (0, z.A)(o),
                      a.dispatch(Y.jej.POPOUT_CLOSE),
                      (0, V.z)(l, i.id, p ?? X.VV.MEMBER_SAFETY, { modViewPanel: $.g.INFO, sourceLocation: t }),
                      r?.());
              },
          });
}
var ee = l(133385),
    ei = l(983495),
    el = l(364522),
    es = l(695366),
    en = l(922590),
    er = l(93246),
    ed = l(994500),
    eo = l(351906),
    et = l(158045),
    ea = l(365607),
    eu = l(744753),
    ec = l(559506),
    ep = l(931481),
    ef = l(791556),
    eA = l(501193),
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
function ek(e) {
    let { user: i, onOpenProfile: l } = e,
        { trackUserProfileAction: r } = (0, N.NJ)(),
        { hasNewWishlistItems: d, newWishlistItemCount: o, shouldLogExposure: t } = (0, eN.A)(i),
        a = null != l,
        u = a && d,
        c = n.useRef(!1);
    n.useEffect(() => {
        u && !c.current && ((c.current = !0), r({ action: "VIEW_NEW_CONTENT_NOTICE" }));
    }, [u, r]);
    let p = n.useCallback(() => {
        (r({ action: "PRESS_NEW_CONTENT_WISHLIST", section: eS.RP.WISHLIST }), l?.({ tabSection: eS.RP.WISHLIST }));
    }, [r, l]);
    return a
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  t && (0, s.jsx)(eE.kM, { location: "UserProfilePopout" }),
                  u &&
                      (0, s.jsx)(eT.D, {
                          onClick: p,
                          "aria-label": Q.intl.formatToPlainString(Q.t.wKJfIg, { count: o }),
                          className: eU.S4,
                          children: (0, s.jsxs)(F.A.Overlay, {
                              className: eU.Uq,
                              children: [
                                  (0, s.jsx)(eC.A, { className: eU.Pf }),
                                  (0, s.jsx)(ev.E, {
                                      variant: "text-xs/medium",
                                      children: Q.intl.format(Q.t.wKJfIg, { count: o }),
                                  }),
                              ],
                          }),
                      }),
              ],
          })
        : null;
}
var e_ = l(996988),
    eR = l(47453);
function eb(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: n,
            guild: r,
            isHoveringOrFocusing: o,
            onOpenProfile: t,
            channelId: a,
            onClose: u,
        } = e,
        c = E.Ay.useName(r?.id, a, i),
        { relationshipType: p, originApplicationId: f } = (0, d.cf)([ed.A], () => ({
            relationshipType: ed.A.getRelationshipType(i.id),
            originApplicationId: ed.A.getOriginApplicationId(i.id),
        })),
        A = (0, en.fi)(i.id),
        I = (0, d.bG)([eo.A], () => eo.A.hidePersonalInformation),
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
                displayNameTrailing: I ? null : (0, s.jsx)(eO.A, { userId: i.id, isVisible: o, onOpenProfile: t }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(r?.id) && (0, s.jsx)(eg.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(ea.A, { displayProfile: n, themeType: e_.d.POPOUT, onClose: u }),
            }),
            p === Y.eA$.PENDING_INCOMING &&
                (0, s.jsx)(F.A.Overlay, {
                    children: (0, s.jsx)(ep.A, { user: i, guildId: r?.id, channelId: a, applicationId: f }),
                }),
            A.map((e) =>
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
            !x && (0, s.jsx)(ef.A, { user: i, onOpenProfile: (e) => t?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(F.A.Overlay, { children: (0, s.jsx)(eA.A, { username: c }) }),
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
            (0, s.jsx)(ek, { user: i, onOpenProfile: t }),
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
            updatePosition: K,
            disableUserProfileLink: J = __OVERLAY__,
            newAnalyticsLocations: X = [],
            appContext: $,
            disableAutoFocus: el = !1,
            onClickContainer: es,
        } = e,
        { analyticsLocations: en } = (0, A.Ay)([...X, f.A.USER_PROFILE_POPOUT]),
        er = (0, y.aL)(),
        ed = (0, N.pb)({ layout: "POPOUT", userId: i.id, guildId: W, channelId: V, messageId: H, roleId: q }),
        eo = (0, d.bG)([v.A], () => (null != W ? v.A.getGuild(W) : null)),
        et = n.useMemo(() => (null != W ? { [W]: [i.id] } : {}), [W, i.id]);
    (0, p.Eq)(et, "UserProfilePopout");
    let ea = n.useRef(null),
        eu = (0, U.Ay)(i.id, W);
    (0, T.A)(en, eu, eS.R7.POPOUT);
    let { isHoveringOrFocusing: ec, isHovering: ep } = (0, m.A)(ea),
        ef = (0, k.fC)(),
        eA = (0, P.A)(eu?.profileFrame?.skuId),
        eI = (0, x.A)(eu?.profileFrame?.skuId);
    (0, j.A)({ skuId: eu?.profileFrame?.skuId, openedAt: z, context: ed, analyticsLocations: en });
    let ex = (0, o.z)({ opacity: +(null != ef.interactionType), config: { duration: 150 } });
    (n.useEffect(() => {
        D?.(ea?.current);
    }, [ea, D, eA?.skuId]),
        n.useLayoutEffect(() => {
            K?.();
        }, [eA?.skuId, K]));
    let eP = n.useRef(null),
        ej = i.id === l.id,
        eh = (0, S.g)("UserProfilePopout"),
        eO = n.useMemo(() => (0, g.A)(), []);
    function em(e) {
        (B?.(),
            er.dispatch(Y.jej.POPOUT_CLOSE),
            (0, _.openUserProfileModal)({
                sourceAnalyticsLocations: en,
                hideRestrictedProfile: !0,
                customStatusPrompt: eO,
                ...ed,
                ...e,
                appContext: $,
            }));
    }
    let eg = el ? "div" : a.l,
        ey = (0, O.GV)(),
        eT = E.Ay.useName(eo?.id, V, i);
    return (0, s.jsx)(A.f5, {
        value: en,
        children: (0, s.jsx)(N.of, {
            value: ed,
            openedAt: z,
            fetchStartedAt: eu?.fetchStartedAt,
            fetchEndedAt: eu?.fetchEndedAt,
            isLoaded: eu?.isLoaded,
            children: (0, s.jsx)(k.Hl, {
                value: ef,
                children: (0, s.jsxs)(eg, {
                    ref: ea,
                    "aria-labelledby": ey,
                    onClick: es,
                    children: [
                        (0, s.jsx)(u.A, {
                            children: (0, s.jsx)(c.H, { id: ey, children: Q.intl.format(Q.t.KRe1Fk, { name: eT }) }),
                        }),
                        (0, s.jsx)(c.F, {
                            children: (0, s.jsxs)(F.A, {
                                user: i,
                                displayProfile: eu,
                                themeType: e_.d.POPOUT,
                                className: eR.BK,
                                isPrivate: eu?.private === !0,
                                children: [
                                    eu?.private === !0 && (0, s.jsx)(w.A, {}),
                                    null != ef.interactionType &&
                                        (0, s.jsx)(r.animated.div, { style: ex, className: eR.tB }),
                                    (0, s.jsxs)(G.A, {
                                        children: [
                                            (0, s.jsx)(Z, {
                                                shouldShowTooltip: null === ef.interactionType,
                                                user: i,
                                                guildId: W,
                                                channelId: V,
                                                onClose: B,
                                                appContext: $,
                                            }),
                                            (0, s.jsx)(M.A, { themeType: e_.d.POPOUT, user: i }),
                                            (!ej || eh) &&
                                                (0, s.jsx)(ee.yo, {
                                                    user: i,
                                                    guildId: W,
                                                    viewProfileItem: ej
                                                        ? void 0
                                                        : J
                                                          ? null
                                                          : (0, s.jsx)(t.Dr, {
                                                                id: "view-profile",
                                                                label: Q.intl.string(Q.t["+Xp3hq"]),
                                                                action: () => {
                                                                    (em(),
                                                                        (0, C.Wn)({
                                                                            action: "PRESS_VIEW_PROFILE",
                                                                            analyticsLocations: en,
                                                                            ...ed,
                                                                        }));
                                                                },
                                                            }),
                                                    appContext: $,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eR.wx,
                                        children: [
                                            (0, s.jsx)(b.A, {
                                                user: i,
                                                displayProfile: eu,
                                                guildId: W,
                                                themeType: e_.d.POPOUT,
                                            }),
                                            (0, s.jsx)(L.A, { userId: i.id, className: eR.oR, onClose: B }),
                                            (0, s.jsx)(R.A, {
                                                user: i,
                                                displayProfile: eu,
                                                guildId: W,
                                                channelId: V,
                                                avatarSize: ew.T[e_.d.POPOUT].avatarSize,
                                                onOpenProfile: J ? void 0 : em,
                                            }),
                                            (0, s.jsx)(ei.A, {
                                                ref: eP,
                                                user: i,
                                                guildId: W,
                                                channelId: V,
                                                themeType: e_.d.POPOUT,
                                                onCloseProfile: B,
                                                prompt: eO,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eb, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: eu,
                                        guild: eo,
                                        isHoveringOrFocusing: null == ef.interactionType && ec,
                                        onOpenProfile: J ? void 0 : em,
                                        channelId: V,
                                        onClose: B,
                                    }),
                                    (0, s.jsx)(eL.A, {
                                        user: i,
                                        guildId: W,
                                        channelId: V,
                                        onClose: B,
                                        appContext: $,
                                        disableAutoFocus: el,
                                    }),
                                    eu?.profileEffect != null &&
                                        (0, s.jsx)(I.A, { skuId: eu?.profileEffect?.skuId, isHovering: ep }),
                                    null != eA && (0, s.jsx)(h.A, { frame: eA, fadeIn: eI }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
