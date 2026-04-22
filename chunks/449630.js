n.d(t, { A: () => em });
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
    b = n(351966),
    j = n(361628),
    I = n(744808),
    R = n(282389),
    N = n(713517),
    y = n(645507),
    O = n(970931),
    M = n(258836),
    U = n(206835),
    k = n(183555),
    P = n(950191),
    w = n(657331),
    L = n(718019),
    D = n(31432),
    F = n(915614),
    B = n(223330),
    G = n(559506),
    V = n(646986),
    W = n(379654),
    Q = n(946356),
    H = n(810396),
    q = n(376285),
    z = n(159218),
    K = n(442228),
    $ = n(253932),
    Y = n(290863),
    X = n(351906),
    Z = n(957565),
    J = n(562153),
    ee = n(927578),
    et = n(832248),
    en = n(962303),
    ei = n(163233),
    es = n(95551),
    el = n(693684),
    ea = n(740142),
    er = n(33042),
    eo = n(347853),
    ed = n(652215),
    ec = n(996988),
    eu = n(985018),
    ep = n(748405),
    eh = n(282868);
function em(e) {
    let { currentUser: t, onClose: n, setPopoutRef: l, highlightBadge: em, openedAt: e_, className: eA } = e,
        ef = __OVERLAY__,
        eg = (0, P.Ay)(t.id, void 0),
        { analyticsLocations: ex } = (0, v.Ay)(T.A.USER_PROFILE_ACCOUNT_POPOUT),
        eE = (0, k.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: eC, height: eT } = (0, C.Ay)(),
        { isHoveringOrFocusing: ev, isHovering: eS } = (0, N.A)(eC);
    s.useEffect(() => {
        l?.(eC.current);
    }, [eC, l]),
        s.useEffect(() => (et.A.setState({ isOpen: !0 }), () => et.A.setState({ isOpen: !1 })), []);
    let eb = (0, u.bG)([Y.A], () => Y.A.getStatus(t.id)),
        ej = $.CY.useSetting(),
        eI = (0, er.Q)(ej),
        eR = (0, u.bG)([X.A], () => X.A.hidePersonalInformation),
        eN = (0, O.kB)(),
        ey = $.Q_.useSetting(),
        eO = (0, er.T)(eb),
        eM = (0, en.j)(n),
        eU = (0, U.A)({ analyticsLocations: ex }),
        ek = (0, ee.TW)(t),
        eP = s.useRef(null),
        ew = s.useRef(null),
        eL = (0, j.A)(eg?.profileFrame?.skuId, "UserProfileAccountPopout"),
        eD = (0, R.A)(eg?.profileFrame?.skuId),
        eF = s.useRef((0, et.A)((e) => e.shouldRenderTenureLevelUp)),
        eB = s.useMemo(() => (0, y.A)(), []),
        [eG, eV] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            eV(!1);
        }, 500);
    }, []);
    let eW = (e) => {
            n?.(), (0, w.openUserProfileModal)({ customStatusPrompt: eB, sourceAnalyticsLocations: ex, ...eE, ...e });
        },
        eQ = eg?.widgets != null && eg.widgets.length > 0,
        eH = s.useCallback(() => {
            n();
        }, [n]),
        eq = s.useCallback(() => {
            eU(), eH();
        }, [eU, eH]),
        ez = (0, S.QR)({ location: "UserProfileAccountPopout" }),
        eK = (0, S.zd)({ location: "UserProfileAccountPopout" }),
        e$ = s.useId();
    return (0, i.jsx)(v.f5, {
        value: ex,
        children: (0, i.jsx)(k.of, {
            value: eE,
            openedAt: e_,
            fetchStartedAt: eg?.fetchStartedAt,
            fetchEndedAt: eg?.fetchEndedAt,
            isLoaded: eg?.isLoaded,
            children: (0, i.jsxs)(p.l, {
                ref: eC,
                "aria-labelledby": e$,
                className: a()(ep.jC, eD, eA),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(o.A, {
                        children: (0, i.jsx)(d.H, { id: e$, children: eu.intl.string(eu.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(d.F, {
                        children: [
                            (0, i.jsx)(ea.A, { displayProfile: eg, handleOpenUserProfileModal: eW, height: eT }),
                            (0, i.jsxs)(Q.A, {
                                className: ep.BK,
                                user: t,
                                displayProfile: eg,
                                themeType: ec.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: eh.wx,
                                        children: [
                                            (0, i.jsx)(F.A, { user: t, displayProfile: eg, themeType: ec.d.POPOUT }),
                                            (0, i.jsx)(L.A, {
                                                user: t,
                                                displayProfile: eg,
                                                themeType: ec.d.POPOUT,
                                                onOpenProfile: ef ? void 0 : eW,
                                            }),
                                            (0, i.jsx)(z.A, {
                                                ref: eP,
                                                user: t,
                                                themeType: ec.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: eB,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(h.Ip, {
                                        className: ep.rf,
                                        style: { pointerEvents: eG ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(G.A, { userId: t.id }),
                                            (0, i.jsx)(H.A, {
                                                user: t,
                                                className: ep.Xh,
                                                nickname: J.Ay.getName(void 0, null, t),
                                                onOpenProfile: ef ? void 0 : eW,
                                                pronouns: eg?.pronouns,
                                                tags: (0, i.jsx)(D.A, {
                                                    displayProfile: eg,
                                                    themeType: ec.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != em ? (e) => e === em : void 0,
                                                    shouldGlowTenureBadge: eF.current,
                                                }),
                                                nicknameIcons: (0, i.jsx)(q.A, { user: t, isVisible: ev }),
                                            }),
                                            (0, i.jsx)(B.A, { isPremiumUser: ek, onInteraction: n }),
                                            (0, i.jsx)(K.A, {
                                                user: t,
                                                bio: eg?.bio,
                                                hidePersonalInformation: eR,
                                                onClose: n,
                                            }),
                                            eQ &&
                                                (0, i.jsx)(W.A, {
                                                    user: t,
                                                    widgets: eg?.widgets,
                                                    onOpenUserProfileModal: eW,
                                                }),
                                            (0, i.jsx)(V.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: eW,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ep.T_,
                                                children: [
                                                    (0, i.jsx)(Q.A.Overlay, {
                                                        className: ep.g0,
                                                        children: (0, i.jsxs)(es.Gs, {
                                                            children: [
                                                                (0, i.jsx)(es.N3, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eu.intl.string(eu.t.s5vZlQ),
                                                                    icon: m.R,
                                                                    onClick: eq,
                                                                    ref: ew,
                                                                }),
                                                                (0, i.jsx)(es.N3, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(el.A, {}),
                                                                    sublabel: null != eI && eI,
                                                                    icon: () =>
                                                                        (0, i.jsx)(_.nW, { status: eb, size: 12 }),
                                                                    trailing:
                                                                        (eN || eb === ed.clD.DND) &&
                                                                        (0, i.jsx)(A.a, { size: "xxs" }),
                                                                    renderSubmenu: r.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(es.eE, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ep.hQ,
                                                                                  "aria-label": eu.intl.string(
                                                                                      eu.t.E13trI,
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
                                                                                                              eu.intl.string(
                                                                                                                  eu.t[
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
                                                                                                                  eu.intl.string(
                                                                                                                      eu
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
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(Q.A.Overlay, {
                                                        className: ep.g0,
                                                        children: (0, i.jsxs)(es.Gs, {
                                                            children: [
                                                                (0, i.jsx)(es.N3, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: x.r,
                                                                    label: eu.intl.string(eu.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, eo.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(es.eE, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eu.intl.string(eu.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: eM,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    Z.p5 &&
                                                                    ey &&
                                                                    (0, i.jsx)(es.N3, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: E.L,
                                                                        label: eu.intl.string(eu.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, Z.C)(t.id), n();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    null != eL && (0, i.jsx)(I.A, { frame: eL, layout: "ACCOUNT_POPOUT" }),
                                    eg?.profileEffect != null &&
                                        !eF.current &&
                                        (0, i.jsx)(b.A, { skuId: eg.profileEffect.skuId, isHovering: eS }),
                                ],
                            }),
                            ez && eK ? (0, i.jsx)(ei.A, { targetElementRef: ew, onClose: n }) : null,
                            (0, i.jsx)(M.A, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
