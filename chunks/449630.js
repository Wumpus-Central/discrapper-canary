n.d(t, { A: () => e_ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(607399),
    o = n(140735),
    d = n(707554),
    c = n(224640),
    u = n(311907),
    p = n(305866),
    h = n(573613),
    m = n(22231),
    _ = n(935154),
    A = n(780338),
    f = n(192308),
    g = n(861672),
    x = n(26137),
    E = n(473935),
    C = n(765671),
    T = n(793574),
    v = n(688810),
    S = n(395332),
    b = n(800579),
    j = n(351966),
    I = n(361628),
    R = n(744808),
    N = n(282389),
    y = n(713517),
    M = n(645507),
    O = n(970931),
    U = n(258836),
    k = n(206835),
    P = n(183555),
    w = n(950191),
    L = n(657331),
    D = n(718019),
    F = n(31432),
    B = n(915614),
    G = n(223330),
    V = n(559506),
    W = n(646986),
    Q = n(379654),
    H = n(946356),
    q = n(810396),
    z = n(376285),
    K = n(159218),
    $ = n(442228),
    Y = n(253932),
    X = n(290863),
    Z = n(351906),
    J = n(957565),
    ee = n(562153),
    et = n(927578),
    en = n(832248),
    ei = n(962303),
    es = n(163233),
    el = n(95551),
    ea = n(693684),
    er = n(740142),
    eo = n(33042),
    ed = n(347853),
    ec = n(652215),
    eu = n(996988),
    ep = n(985018),
    eh = n(748405),
    em = n(282868);
function e_(e) {
    let { currentUser: t, onClose: n, setPopoutRef: l, highlightBadge: e_, openedAt: eA, className: ef } = e,
        eg = __OVERLAY__,
        ex = (0, w.Ay)(t.id, void 0),
        { analyticsLocations: eE } = (0, v.Ay)(T.A.USER_PROFILE_ACCOUNT_POPOUT),
        eC = (0, P.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: eT, height: ev } = (0, C.Ay)(),
        { isHoveringOrFocusing: eS, isHovering: eb } = (0, y.A)(eT);
    s.useEffect(() => {
        l?.(eT.current);
    }, [eT, l]),
        s.useEffect(() => (en.A.setState({ isOpen: !0 }), () => en.A.setState({ isOpen: !1 })), []);
    let ej = (0, u.bG)([X.A], () => X.A.getStatus(t.id)),
        eI = Y.CY.useSetting(),
        eR = (0, eo.Q)(eI),
        eN = (0, u.bG)([Z.A], () => Z.A.hidePersonalInformation),
        ey = (0, O.kB)(),
        eM = Y.Q_.useSetting(),
        eO = (0, eo.T)(ej),
        eU = (0, ei.j)(n),
        ek = (0, k.A)({ analyticsLocations: eE }),
        eP = (0, et.TW)(t),
        ew = s.useRef(null),
        eL = s.useRef(null),
        eD = (0, I.A)(ex?.profileFrame?.skuId, "UserProfileAccountPopout"),
        eF = (0, N.A)(ex?.profileFrame?.skuId),
        eB = s.useRef((0, en.A)((e) => e.shouldRenderTenureLevelUp)),
        eG = s.useMemo(() => (0, M.A)(), []),
        [eV, eW] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            eW(!1);
        }, 500);
    }, []);
    let eQ = (e) => {
            n?.(), (0, L.openUserProfileModal)({ customStatusPrompt: eG, sourceAnalyticsLocations: eE, ...eC, ...e });
        },
        eH = ex?.widgets != null && ex.widgets.length > 0,
        eq = s.useCallback(() => {
            n();
        }, [n]),
        ez = s.useCallback(() => {
            ek(), eq();
        }, [ek, eq]),
        eK = (0, S.QR)({ location: "UserProfileAccountPopout" }),
        e$ = (0, S.zd)({ location: "UserProfileAccountPopout" }),
        eY = s.useId();
    return (0, i.jsx)(v.f5, {
        value: eE,
        children: (0, i.jsx)(P.of, {
            value: eC,
            openedAt: eA,
            fetchStartedAt: ex?.fetchStartedAt,
            fetchEndedAt: ex?.fetchEndedAt,
            isLoaded: ex?.isLoaded,
            children: (0, i.jsxs)(p.l, {
                ref: eT,
                "aria-labelledby": eY,
                className: a()(eh.jC, eF, ef),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(o.A, {
                        children: (0, i.jsx)(d.H, { id: eY, children: ep.intl.string(ep.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(d.F, {
                        children: [
                            (0, i.jsx)(er.A, { displayProfile: ex, handleOpenUserProfileModal: eQ, height: ev }),
                            (0, i.jsxs)(H.A, {
                                className: eh.BK,
                                user: t,
                                displayProfile: ex,
                                themeType: eu.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: em.wx,
                                        children: [
                                            (0, i.jsx)(B.A, { user: t, displayProfile: ex, themeType: eu.d.POPOUT }),
                                            (0, i.jsx)(D.A, {
                                                user: t,
                                                displayProfile: ex,
                                                themeType: eu.d.POPOUT,
                                                onOpenProfile: eg ? void 0 : eQ,
                                            }),
                                            (0, i.jsx)(K.A, {
                                                ref: ew,
                                                user: t,
                                                themeType: eu.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: eG,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(h.Ip, {
                                        className: eh.rf,
                                        style: { pointerEvents: eV ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(V.A, { userId: t.id }),
                                            (0, i.jsx)(q.A, {
                                                user: t,
                                                className: eh.Xh,
                                                nickname: ee.Ay.getName(void 0, null, t),
                                                onOpenProfile: eg ? void 0 : eQ,
                                                pronouns: ex?.pronouns,
                                                tags: (0, i.jsx)(F.A, {
                                                    displayProfile: ex,
                                                    themeType: eu.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != e_ ? (e) => e === e_ : void 0,
                                                    shouldGlowTenureBadge: eB.current,
                                                }),
                                                nicknameIcons: (0, i.jsx)(z.A, { user: t, isVisible: eS }),
                                            }),
                                            (0, i.jsx)(G.A, { isPremiumUser: eP, onInteraction: n }),
                                            (0, i.jsx)($.A, {
                                                user: t,
                                                bio: ex?.bio,
                                                hidePersonalInformation: eN,
                                                onClose: n,
                                            }),
                                            eH &&
                                                (0, i.jsx)(Q.A, {
                                                    user: t,
                                                    widgets: ex?.widgets,
                                                    onOpenUserProfileModal: eQ,
                                                }),
                                            (0, i.jsx)(W.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: eQ,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eh.T_,
                                                children: [
                                                    (0, i.jsx)(H.A.Overlay, {
                                                        className: eh.g0,
                                                        children: (0, i.jsxs)(el.Gs, {
                                                            children: [
                                                                (0, i.jsx)(el.N3, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ep.intl.string(ep.t.s5vZlQ),
                                                                    icon: m.R,
                                                                    onClick: ez,
                                                                    ref: eL,
                                                                }),
                                                                (0, i.jsx)(el.N3, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(ea.A, {}),
                                                                    sublabel: null != eR && eR,
                                                                    icon: () =>
                                                                        (0, i.jsx)(_.nW, { status: ej, size: 12 }),
                                                                    trailing:
                                                                        (ey || ej === ec.clD.DND) &&
                                                                        (0, i.jsx)(A.a, { size: "xxs" }),
                                                                    renderSubmenu: r.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(el.eE, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eh.hQ,
                                                                                  "aria-label": ep.intl.string(
                                                                                      ep.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: eO,
                                                                              });
                                                                          },
                                                                    onClick: r.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, f.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      c.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              ep.intl.string(
                                                                                                                  ep.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(g.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  ep.intl.string(
                                                                                                                      ep
                                                                                                                          .t
                                                                                                                          .E13trI,
                                                                                                                  ),
                                                                                                              hideScroller:
                                                                                                                  !0,
                                                                                                              onClose:
                                                                                                                  t,
                                                                                                              onSelect:
                                                                                                                  void 0,
                                                                                                              children:
                                                                                                                  eO,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(b.A, { onClose: n }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(H.A.Overlay, {
                                                        className: eh.g0,
                                                        children: (0, i.jsxs)(el.Gs, {
                                                            children: [
                                                                (0, i.jsx)(el.N3, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: x.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, ed.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(el.eE, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ep.intl.string(ep.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: eU,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    J.p5 &&
                                                                    eM &&
                                                                    (0, i.jsx)(el.N3, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: E.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, J.C)(t.id), n();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    null != eD && (0, i.jsx)(R.A, { frame: eD, layout: "ACCOUNT_POPOUT" }),
                                    ex?.profileEffect != null &&
                                        !eB.current &&
                                        (0, i.jsx)(j.A, { skuId: ex.profileEffect.skuId, isHovering: eb }),
                                ],
                            }),
                            eK && e$ ? (0, i.jsx)(es.A, { targetElementRef: eL, onClose: n }) : null,
                            (0, i.jsx)(U.A, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
