(l.r(i), l.d(i, { default: () => eF }));
var n = l(477900),
    s = l(582128),
    r = l(120692),
    o = l(855986),
    d = l(717421),
    a = l(477782),
    t = l(305866),
    u = l(140735),
    c = l(707554),
    p = l(80682),
    A = l(793574),
    f = l(688810),
    I = l(971217),
    x = l(577390),
    P = l(287727),
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
    C = l(741534),
    S = l(342053),
    U = l(527212),
    _ = l(679492),
    k = l(702476),
    R = l(718019),
    b = l(915614),
    L = l(439053),
    w = l(312381),
    F = l(946356),
    M = l(587168),
    G = l(193738),
    W = l(713608),
    V = l(474196),
    H = l(985925),
    z = l(727419),
    q = l(474397),
    B = l(378570),
    D = l(46653),
    K = l(309010),
    J = l(993401),
    Y = l(652215),
    X = l(746080),
    $ = l(486974),
    Q = l(792996);
function Z(e) {
    let { user: i, guildId: l, channelId: s, onClose: r, appContext: d } = e,
        { newestAnalyticsLocation: a } = (0, f.Ay)(),
        t = (0, y.aL)(),
        u = (0, o.bG)([D.default], () => D.default.getId() === i?.id),
        c = (0, H.q)(l ?? null),
        p = (0, o.bG)([K.Ay], () => s ?? K.Ay.getChannelId(l, !0), [s, l]);
    return null == l || !c || u
        ? null
        : (0, n.jsx)(J.br, {
              action: "PRESS_MOD_VIEW",
              icon: W.ModerationIcon,
              tooltipText: Q.intl.string(Q.t.kj3tz2),
              onClick: () => {
                  (z.A.close(),
                      null != p && (0, B.iN)(p),
                      (0, q.A)(d),
                      t.dispatch(Y.jej.POPOUT_CLOSE),
                      (0, V.z)(l, i.id, p ?? X.VV.MEMBER_SAFETY, { modViewPanel: $.g.INFO, sourceLocation: a }),
                      r?.());
              },
          });
}
var ee = l(987307),
    ei = l(680581),
    el = l(95362),
    en = l(695366),
    es = l(922590),
    er = l(433380),
    eo = l(994500),
    ed = l(351906),
    ea = l(448645),
    et = l(567556),
    eu = l(560296),
    ec = l(559506),
    ep = l(477534),
    eA = l(791556),
    ef = l(501193),
    eI = l(383448),
    ex = l(900179),
    eP = l(646986),
    ej = l(312294),
    eh = l(465829),
    eO = l(243166),
    em = l(442228),
    eg = l(192867),
    ey = l(403369),
    eT = l(939249),
    ev = l(329921),
    eE = l(834730),
    eN = l(695904),
    eC = l(573238),
    eS = l(518477),
    eU = l(482007);
function e_(e) {
    let { user: i, onOpenProfile: l } = e,
        { trackUserProfileAction: r } = (0, N.NJ)(),
        { hasNewWishlistItems: o, newWishlistItemCount: d, shouldLogExposure: a } = (0, eC.A)(i),
        t = null != l,
        u = t && o,
        c = s.useRef(!1);
    s.useEffect(() => {
        u && !c.current && ((c.current = !0), r({ action: "VIEW_NEW_CONTENT_NOTICE" }));
    }, [u, r]);
    let p = s.useCallback(() => {
        (r({ action: "PRESS_NEW_CONTENT_WISHLIST", section: eS.RP.WISHLIST }), l?.({ tabSection: eS.RP.WISHLIST }));
    }, [r, l]);
    return t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  a && (0, n.jsx)(eN.kM, { location: "UserProfilePopout" }),
                  u &&
                      (0, n.jsx)(eT.D, {
                          onClick: p,
                          "aria-label": Q.intl.formatToPlainString(Q.t.wKJfIg, { count: d }),
                          className: eU.S4,
                          children: (0, n.jsxs)(F.A.Overlay, {
                              className: eU.Uq,
                              children: [
                                  (0, n.jsx)(ev.N, { className: eU.Pf }),
                                  (0, n.jsx)(eE.E, {
                                      variant: "body-xs/medium",
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
            displayProfile: s,
            guild: r,
            isHoveringOrFocusing: d,
            onOpenProfile: a,
            channelId: t,
            onClose: u,
        } = e,
        c = E.Ay.useName(r?.id, t, i),
        { relationshipType: p, originApplicationId: A } = (0, o.cf)([eo.A], () => ({
            relationshipType: eo.A.getRelationshipType(i.id),
            originApplicationId: eo.A.getOriginApplicationId(i.id),
        })),
        f = (0, es.fi)(i.id),
        I = (0, o.bG)([ed.A], () => ed.A.hidePersonalInformation),
        x = i.id === l.id,
        P = s?.widgets != null && s.widgets.length > 0,
        j = (0, ea.TW)(l);
    return (0, n.jsxs)(el.Ip, {
        fade: !0,
        className: eR.rf,
        children: [
            (0, n.jsx)(ec.A, { userId: i.id }),
            (0, n.jsx)(eh.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: I ? null : (0, n.jsx)(eO.A, { userId: i.id, isVisible: d, onOpenProfile: a }),
                pronouns: s?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(r?.id) && (0, n.jsx)(eg.A, { user: i, nickname: c }),
                trailing: (0, n.jsx)(et.A, { displayProfile: s, themeType: ek.d.POPOUT, onClose: u }),
            }),
            p === Y.eA$.PENDING_INCOMING &&
                (0, n.jsx)(F.A.Overlay, {
                    children: (0, n.jsx)(ep.A, { user: i, guildId: r?.id, channelId: t, applicationId: A }),
                }),
            f.map((e) =>
                (0, n.jsx)(
                    F.A.Overlay,
                    {
                        children: (0, n.jsx)(ep.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: t,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, n.jsx)(eI.A, { user: i }),
            !x && (0, n.jsx)(eA.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            s?.private && (0, n.jsx)(F.A.Overlay, { children: (0, n.jsx)(ef.A, { username: c }) }),
            x && (0, n.jsx)(eu.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, n.jsx)(F.A.Overlay, {
                      className: eR.Nr,
                      children: (0, n.jsx)(ex.A, {
                          heading: Q.intl.string(Q.t.Iyka0U),
                          headingIcon: en.CircleErrorIcon,
                          headingColor: "text-strong",
                          children: (0, n.jsx)(er.T, { userId: i.id }),
                      }),
                  })
                : (0, n.jsx)(em.A, { userId: i.id, userBio: s?.bio, hidePersonalInformation: I, onClose: u }),
            (0, n.jsx)(e_, { user: i, onOpenProfile: a }),
            P && (0, n.jsx)(ej.A, { user: i, widgets: s?.widgets, onOpenUserProfileModal: a }),
            (0, n.jsx)(eP.A, { user: i, currentUser: l, guildId: r?.id, onOpenUserProfileModal: a, onClose: u }),
            null != r && (0, n.jsx)(ey.A, { userId: i.id, guild: r }),
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
            roleId: z,
            openedAt: q,
            closePopout: B,
            setPopoutRef: D,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: J = [],
            appContext: X,
            disableAutoFocus: $ = !1,
            onClickContainer: el,
        } = e,
        { analyticsLocations: en } = (0, f.Ay)([...J, A.A.USER_PROFILE_POPOUT]),
        es = (0, y.aL)(),
        er = (0, N.pb)({ layout: "POPOUT", userId: i.id, guildId: W, channelId: V, messageId: H, roleId: z }),
        eo = (0, o.bG)([v.A], () => (null != W ? v.A.getGuild(W) : null)),
        ed = s.useMemo(() => (null != W ? { [W]: [i.id] } : {}), [W, i.id]);
    (0, p.Eq)(ed, "UserProfilePopout");
    let ea = s.useRef(null),
        et = (0, U.Ay)(i.id, W);
    (0, T.A)(en, et, eS.R7.POPOUT);
    let { isHoveringOrFocusing: eu, isHovering: ec } = (0, m.A)(ea),
        ep = (0, _.fC)(),
        eA = (0, P.A)(et?.profileFrame?.skuId),
        ef = (0, x.A)(et?.profileFrame?.skuId);
    (0, j.A)({ skuId: et?.profileFrame?.skuId, openedAt: q, context: er, analyticsLocations: en });
    let eI = (0, d.z)({ opacity: +(null != ep.interactionType), config: { duration: 150 } });
    s.useEffect(() => {
        D?.(ea?.current);
    }, [ea, D, eA?.skuId]);
    let ex = s.useRef(null),
        eP = i.id === l.id,
        ej = (0, S.g)("UserProfilePopout"),
        eh = s.useMemo(() => (0, g.A)(), []);
    function eO(e) {
        (B?.(),
            es.dispatch(Y.jej.POPOUT_CLOSE),
            (0, k.openUserProfileModal)({
                sourceAnalyticsLocations: en,
                hideRestrictedProfile: !0,
                customStatusPrompt: eh,
                ...er,
                ...e,
                appContext: X,
            }));
    }
    let em = $ ? "div" : t.l,
        eg = (0, O.GV)(),
        ey = E.Ay.useName(eo?.id, V, i);
    return (0, n.jsx)(f.f5, {
        value: en,
        children: (0, n.jsx)(N.of, {
            value: er,
            openedAt: q,
            fetchStartedAt: et?.fetchStartedAt,
            fetchEndedAt: et?.fetchEndedAt,
            isLoaded: et?.isLoaded,
            children: (0, n.jsx)(_.Hl, {
                value: ep,
                children: (0, n.jsxs)(em, {
                    ref: ea,
                    "aria-labelledby": eg,
                    onClick: el,
                    children: [
                        (0, n.jsx)(u.A, {
                            children: (0, n.jsx)(c.H, { id: eg, children: Q.intl.format(Q.t.KRe1Fk, { name: ey }) }),
                        }),
                        (0, n.jsx)(c.F, {
                            children: (0, n.jsxs)(F.A, {
                                user: i,
                                displayProfile: et,
                                themeType: ek.d.POPOUT,
                                className: eR.BK,
                                isPrivate: et?.private === !0,
                                children: [
                                    et?.private === !0 && (0, n.jsx)(w.A, {}),
                                    null != ep.interactionType &&
                                        (0, n.jsx)(r.animated.div, { style: eI, className: eR.tB }),
                                    (0, n.jsxs)(M.A, {
                                        children: [
                                            (0, n.jsx)(Z, {
                                                shouldShowTooltip: null === ep.interactionType,
                                                user: i,
                                                guildId: W,
                                                channelId: V,
                                                onClose: B,
                                                appContext: X,
                                            }),
                                            (0, n.jsx)(G.A, { themeType: ek.d.POPOUT, user: i }),
                                            (!eP || ej) &&
                                                (0, n.jsx)(ee.yo, {
                                                    user: i,
                                                    guildId: W,
                                                    viewProfileItem: eP
                                                        ? void 0
                                                        : K
                                                          ? null
                                                          : (0, n.jsx)(a.Dr, {
                                                                id: "view-profile",
                                                                label: Q.intl.string(Q.t["+Xp3hq"]),
                                                                action: () => {
                                                                    (eO(),
                                                                        (0, C.Wn)({
                                                                            action: "PRESS_VIEW_PROFILE",
                                                                            analyticsLocations: en,
                                                                            ...er,
                                                                        }));
                                                                },
                                                            }),
                                                    appContext: X,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: eR.wx,
                                        children: [
                                            (0, n.jsx)(b.A, {
                                                user: i,
                                                displayProfile: et,
                                                guildId: W,
                                                themeType: ek.d.POPOUT,
                                            }),
                                            (0, n.jsx)(L.A, { className: eR.oR }),
                                            (0, n.jsx)(R.A, {
                                                user: i,
                                                displayProfile: et,
                                                guildId: W,
                                                channelId: V,
                                                avatarSize: ew.T[ek.d.POPOUT].avatarSize,
                                                onOpenProfile: K ? void 0 : eO,
                                            }),
                                            (0, n.jsx)(ei.A, {
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
                                    (0, n.jsx)(eb, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: et,
                                        guild: eo,
                                        isHoveringOrFocusing: null == ep.interactionType && eu,
                                        onOpenProfile: K ? void 0 : eO,
                                        channelId: V,
                                        onClose: B,
                                    }),
                                    (0, n.jsx)(eL.A, {
                                        user: i,
                                        guildId: W,
                                        channelId: V,
                                        onClose: B,
                                        appContext: X,
                                        disableAutoFocus: $,
                                    }),
                                    et?.profileEffect != null &&
                                        (0, n.jsx)(I.A, { skuId: et?.profileEffect?.skuId, isHovering: ec }),
                                    null != eA && (0, n.jsx)(h.A, { frame: eA, fadeIn: ef }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
