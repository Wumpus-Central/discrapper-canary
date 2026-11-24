(l.r(i), l.d(i, { default: () => eB }));
var s = l(477900),
    n = l(582128),
    r = l(156150),
    o = l(855986),
    t = l(717421),
    a = l(477782),
    d = l(305866),
    u = l(140735),
    c = l(707554),
    p = l(80682),
    x = l(793574),
    f = l(688810),
    A = l(971217),
    I = l(577390),
    h = l(287727),
    j = l(31956),
    P = l(744808),
    m = l(915089),
    O = l(713517),
    g = l(645507),
    y = l(267102),
    N = l(397562),
    v = l(71393),
    T = l(562153),
    C = l(183555),
    E = l(741534),
    S = l(342053),
    _ = l(527212),
    k = l(679492),
    U = l(100663),
    b = l(718019),
    R = l(915614),
    F = l(439053),
    L = l(312381),
    w = l(946356),
    G = l(587168),
    M = l(193738),
    W = l(713608),
    V = l(474196),
    H = l(985925),
    z = l(727419),
    D = l(474397),
    B = l(378570),
    K = l(46653),
    q = l(309010),
    Y = l(993401),
    J = l(652215),
    X = l(746080),
    $ = l(486974),
    Q = l(792996);
function Z(e) {
    let { user: i, guildId: l, channelId: n, onClose: r, appContext: t } = e,
        { newestAnalyticsLocation: a } = (0, f.Ay)(),
        d = (0, y.aL)(),
        u = (0, o.bG)([K.default], () => K.default.getId() === i?.id),
        c = (0, H.q)(l ?? null),
        p = (0, o.bG)([q.Ay], () => n ?? q.Ay.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(Y.br, {
              action: "PRESS_MOD_VIEW",
              icon: W.ModerationIcon,
              tooltipText: Q.intl.string(Q.t.kj3tz2),
              onClick: () => {
                  (z.A.close(),
                      null != p && (0, B.iN)(p),
                      (0, D.A)(t),
                      d.dispatch(J.jej.POPOUT_CLOSE),
                      (0, V.z)(l, i.id, p ?? X.VV.MEMBER_SAFETY, { modViewPanel: $.g.INFO, sourceLocation: a }),
                      r?.());
              },
          });
}
var ee = l(666297),
    ei = l(804329),
    el = l(95362),
    es = l(695366),
    en = l(939249),
    er = l(289873),
    eo = l(366056),
    et = l(834730),
    ea = l(142617),
    ed = l(719718),
    eu = l(261336),
    ec = l(852717),
    ep = l(879184);
function ex(e) {
    let { onClose: i } = e,
        l = (0, ea.FX)("CheckpointUserProfilePopoutCard"),
        n = (0, o.bG)([ed.A], () => ed.A.isFetching);
    return l
        ? (0, s.jsx)(en.D, {
              className: ep.Nr,
              onClick: async function () {
                  (await (0, eu.D)("user_profile_popout"), i?.());
              },
              children: (0, s.jsxs)(w.A.Overlay, {
                  className: ep.vW,
                  children: [
                      (0, s.jsx)("div", {
                          className: ep.Kk,
                          children: n
                              ? (0, s.jsx)(er.y, {
                                    type: er.t.SPINNING_CIRCLE_SIMPLE,
                                    className: ep.u1,
                                    itemClassName: ep.$N,
                                })
                              : (0, s.jsx)(eo.ExperimentalCheckpointIcon, { size: "xs", color: "currentColor" }),
                      }),
                      (0, s.jsxs)("div", {
                          children: [
                              (0, s.jsx)(et.E, {
                                  variant: "body-sm/medium",
                                  color: "text-strong",
                                  children: Q.intl.string(ec.default["8hclXY"]),
                              }),
                              (0, s.jsx)(et.E, {
                                  variant: "body-xs/medium",
                                  color: "text-muted",
                                  children: Q.intl.string(ec.default.BFc4lY),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
var ef = l(922590),
    eA = l(433380),
    eI = l(994500),
    eh = l(351906),
    ej = l(448645),
    eP = l(56810),
    em = l(689233),
    eO = l(559506),
    eg = l(477534),
    ey = l(791556),
    eN = l(501193),
    ev = l(383448),
    eT = l(900179),
    eC = l(646986),
    eE = l(494213),
    eS = l(465829),
    e_ = l(243166),
    ek = l(442228),
    eU = l(192867),
    eb = l(403369),
    eR = l(329921),
    eF = l(695904),
    eL = l(573238),
    ew = l(518477),
    eG = l(482007);
function eM(e) {
    let { user: i, onOpenProfile: l } = e,
        { trackUserProfileAction: r } = (0, C.NJ)(),
        { hasNewWishlistItems: o, newWishlistItemCount: t, shouldLogExposure: a } = (0, eL.A)(i),
        d = null != l,
        u = d && o,
        c = n.useRef(!1);
    n.useEffect(() => {
        u && !c.current && ((c.current = !0), r({ action: "VIEW_NEW_CONTENT_NOTICE" }));
    }, [u, r]);
    let p = n.useCallback(() => {
        (r({ action: "PRESS_NEW_CONTENT_WISHLIST", section: ew.RP.WISHLIST }), l?.({ tabSection: ew.RP.WISHLIST }));
    }, [r, l]);
    return d
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  a && (0, s.jsx)(eF.kM, { location: "UserProfilePopout" }),
                  u &&
                      (0, s.jsx)(en.D, {
                          onClick: p,
                          "aria-label": Q.intl.formatToPlainString(Q.t.wKJfIg, { count: t }),
                          className: eG.S4,
                          children: (0, s.jsxs)(w.A.Overlay, {
                              className: eG.Uq,
                              children: [
                                  (0, s.jsx)(eR.N, { className: eG.Pf }),
                                  (0, s.jsx)(et.E, {
                                      variant: "body-xs/medium",
                                      children: Q.intl.format(Q.t.wKJfIg, { count: t }),
                                  }),
                              ],
                          }),
                      }),
              ],
          })
        : null;
}
var eW = l(996988),
    eV = l(47453);
function eH(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: n,
            guild: r,
            isHoveringOrFocusing: t,
            onOpenProfile: a,
            channelId: d,
            onClose: u,
        } = e,
        c = T.Ay.useName(r?.id, d, i),
        { relationshipType: p, originApplicationId: x } = (0, o.cf)([eI.A], () => ({
            relationshipType: eI.A.getRelationshipType(i.id),
            originApplicationId: eI.A.getOriginApplicationId(i.id),
        })),
        f = (0, ef.fi)(i.id),
        A = (0, o.bG)([eh.A], () => eh.A.hidePersonalInformation),
        I = i.id === l.id,
        h = n?.widgets != null && n.widgets.length > 0,
        j = (0, ej.TW)(l);
    return (0, s.jsxs)(el.Ip, {
        fade: !0,
        className: eV.rf,
        children: [
            (0, s.jsx)(eO.A, { userId: i.id }),
            (0, s.jsx)(eS.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: A ? null : (0, s.jsx)(e_.A, { userId: i.id, isVisible: t, onOpenProfile: a }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(r?.id) && (0, s.jsx)(eU.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(eP.A, { displayProfile: n, themeType: eW.d.POPOUT, onClose: u }),
            }),
            p === J.eA$.PENDING_INCOMING &&
                (0, s.jsx)(w.A.Overlay, {
                    children: (0, s.jsx)(eg.A, { user: i, guildId: r?.id, channelId: d, applicationId: x }),
                }),
            f.map((e) =>
                (0, s.jsx)(
                    w.A.Overlay,
                    {
                        children: (0, s.jsx)(eg.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: d,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(ev.A, { user: i }),
            !I && (0, s.jsx)(ey.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(w.A.Overlay, { children: (0, s.jsx)(eN.A, { username: c }) }),
            I && (0, s.jsx)(em.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(w.A.Overlay, {
                      className: eV.Nr,
                      children: (0, s.jsx)(eT.A, {
                          heading: Q.intl.string(Q.t.Iyka0U),
                          headingIcon: es.CircleErrorIcon,
                          headingColor: "text-strong",
                          children: (0, s.jsx)(eA.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(ek.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: A, onClose: u }),
            (0, s.jsx)(eM, { user: i, onOpenProfile: a }),
            h && (0, s.jsx)(eE.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: a }),
            (0, s.jsx)(eC.A, { user: i, currentUser: l, guildId: r?.id, onOpenUserProfileModal: a, onClose: u }),
            I && (0, s.jsx)(ex, { onClose: u }),
            null != r && (0, s.jsx)(eb.A, { userId: i.id, guild: r }),
        ],
    });
}
var ez = l(74525),
    eD = l(207634);
function eB(e) {
    let {
            user: i,
            currentUser: l,
            guildId: W,
            channelId: V,
            messageId: H,
            roleId: z,
            openedAt: D,
            closePopout: B,
            setPopoutRef: K,
            disableUserProfileLink: q = __OVERLAY__,
            newAnalyticsLocations: Y = [],
            appContext: X,
            disableAutoFocus: $ = !1,
            onClickContainer: el,
        } = e,
        { analyticsLocations: es } = (0, f.Ay)([...Y, x.A.USER_PROFILE_POPOUT]),
        en = (0, y.aL)(),
        er = (0, C.pb)({ layout: "POPOUT", userId: i.id, guildId: W, channelId: V, messageId: H, roleId: z }),
        eo = (0, o.bG)([v.A], () => (null != W ? v.A.getGuild(W) : null)),
        et = n.useMemo(() => (null != W ? { [W]: [i.id] } : {}), [W, i.id]);
    (0, p.Eq)(et, "UserProfilePopout");
    let ea = n.useRef(null),
        ed = (0, _.Ay)(i.id, W);
    (0, N.A)(es, ed, ew.R7.POPOUT);
    let { isHoveringOrFocusing: eu, isHovering: ec } = (0, O.A)(ea),
        ep = (0, k.fC)(),
        ex = (0, h.A)(ed?.profileFrame?.skuId),
        ef = (0, I.A)(ed?.profileFrame?.skuId);
    (0, j.A)({ skuId: ed?.profileFrame?.skuId, openedAt: D, context: er, analyticsLocations: es });
    let eA = (0, t.z)({ opacity: +(null != ep.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        K?.(ea?.current);
    }, [ea, K, ex?.skuId]);
    let eI = n.useRef(null),
        eh = i.id === l.id,
        ej = (0, S.g)("UserProfilePopout"),
        eP = n.useMemo(() => (0, g.A)(), []);
    function em(e) {
        (B?.(),
            en.dispatch(J.jej.POPOUT_CLOSE),
            (0, U.openUserProfileModal)({
                sourceAnalyticsLocations: es,
                hideRestrictedProfile: !0,
                customStatusPrompt: eP,
                ...er,
                ...e,
                appContext: X,
            }));
    }
    let eO = $ ? "div" : d.l,
        eg = (0, m.GV)(),
        ey = T.Ay.useName(eo?.id, V, i);
    return (0, s.jsx)(f.f5, {
        value: es,
        children: (0, s.jsx)(C.of, {
            value: er,
            openedAt: D,
            fetchStartedAt: ed?.fetchStartedAt,
            fetchEndedAt: ed?.fetchEndedAt,
            isLoaded: ed?.isLoaded,
            children: (0, s.jsx)(k.Hl, {
                value: ep,
                children: (0, s.jsxs)(eO, {
                    ref: ea,
                    "aria-labelledby": eg,
                    onClick: el,
                    children: [
                        (0, s.jsx)(u.A, {
                            children: (0, s.jsx)(c.H, { id: eg, children: Q.intl.format(Q.t.KRe1Fk, { name: ey }) }),
                        }),
                        (0, s.jsx)(c.F, {
                            children: (0, s.jsxs)(w.A, {
                                user: i,
                                displayProfile: ed,
                                themeType: eW.d.POPOUT,
                                className: eV.BK,
                                isPrivate: ed?.private === !0,
                                children: [
                                    ed?.private === !0 && (0, s.jsx)(L.A, {}),
                                    null != ep.interactionType &&
                                        (0, s.jsx)(r.animated.div, { style: eA, className: eV.tB }),
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
                                            (0, s.jsx)(M.A, { themeType: eW.d.POPOUT, user: i }),
                                            (!eh || ej) &&
                                                (0, s.jsx)(ee.yo, {
                                                    user: i,
                                                    guildId: W,
                                                    viewProfileItem: eh
                                                        ? void 0
                                                        : q
                                                          ? null
                                                          : (0, s.jsx)(a.Dr, {
                                                                id: "view-profile",
                                                                label: Q.intl.string(Q.t["+Xp3hq"]),
                                                                action: () => {
                                                                    (em(),
                                                                        (0, E.Wn)({
                                                                            action: "PRESS_VIEW_PROFILE",
                                                                            analyticsLocations: es,
                                                                            ...er,
                                                                        }));
                                                                },
                                                            }),
                                                    appContext: X,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eV.wx,
                                        children: [
                                            (0, s.jsx)(R.A, {
                                                user: i,
                                                displayProfile: ed,
                                                guildId: W,
                                                themeType: eW.d.POPOUT,
                                            }),
                                            (0, s.jsx)(F.A, { className: eV.oR }),
                                            (0, s.jsx)(b.A, {
                                                user: i,
                                                displayProfile: ed,
                                                guildId: W,
                                                channelId: V,
                                                avatarSize: eD.T[eW.d.POPOUT].avatarSize,
                                                onOpenProfile: q ? void 0 : em,
                                            }),
                                            (0, s.jsx)(ei.A, {
                                                ref: eI,
                                                user: i,
                                                guildId: W,
                                                channelId: V,
                                                themeType: eW.d.POPOUT,
                                                onCloseProfile: B,
                                                prompt: eP,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eH, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: ed,
                                        guild: eo,
                                        isHoveringOrFocusing: null == ep.interactionType && eu,
                                        onOpenProfile: q ? void 0 : em,
                                        channelId: V,
                                        onClose: B,
                                    }),
                                    (0, s.jsx)(ez.A, {
                                        user: i,
                                        guildId: W,
                                        channelId: V,
                                        onClose: B,
                                        appContext: X,
                                        disableAutoFocus: $,
                                    }),
                                    ed?.profileEffect != null &&
                                        (0, s.jsx)(A.A, { skuId: ed?.profileEffect?.skuId, isHovering: ec }),
                                    null != ex && (0, s.jsx)(P.A, { frame: ex, fadeIn: ef }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
