n.d(t, { A: () => eh });
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
    R = n(713517),
    N = n(645507),
    y = n(970931),
    O = n(258836),
    M = n(206835),
    U = n(183555),
    k = n(950191),
    P = n(657331),
    w = n(718019),
    L = n(31432),
    D = n(915614),
    F = n(223330),
    B = n(559506),
    G = n(646986),
    V = n(379654),
    W = n(946356),
    Q = n(810396),
    H = n(376285),
    q = n(159218),
    z = n(442228),
    K = n(253932),
    $ = n(290863),
    Y = n(351906),
    X = n(957565),
    Z = n(562153),
    J = n(927578),
    ee = n(832248),
    et = n(962303),
    en = n(163233),
    ei = n(95551),
    es = n(693684),
    el = n(740142),
    ea = n(33042),
    er = n(347853),
    eo = n(652215),
    ed = n(996988),
    ec = n(985018),
    eu = n(447349),
    ep = n(656884);
function eh(e) {
    let { currentUser: t, onClose: n, setPopoutRef: l, highlightBadge: eh, openedAt: em, className: e_ } = e,
        eA = __OVERLAY__,
        ef = (0, k.Ay)(t.id, void 0),
        { analyticsLocations: eg } = (0, v.Ay)(T.A.USER_PROFILE_ACCOUNT_POPOUT),
        ex = (0, U.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: eE, height: eC } = (0, C.Ay)(),
        { isHoveringOrFocusing: eT, isHovering: ev } = (0, R.A)(eE);
    s.useEffect(() => {
        l?.(eE.current);
    }, [eE, l]),
        s.useEffect(() => (ee.A.setState({ isOpen: !0 }), () => ee.A.setState({ isOpen: !1 })), []);
    let eS = (0, u.bG)([$.A], () => $.A.getStatus(t.id)),
        eb = K.CY.useSetting(),
        ej = (0, ea.Q)(eb),
        eI = (0, u.bG)([Y.A], () => Y.A.hidePersonalInformation),
        eR = (0, y.kB)(),
        eN = K.Q_.useSetting(),
        ey = (0, ea.T)(eS),
        eO = (0, et.j)(n),
        eM = (0, M.A)({ analyticsLocations: eg }),
        eU = (0, J.TW)(t),
        ek = s.useRef(null),
        eP = s.useRef(null),
        ew = (0, j.A)(ef?.profileFrame?.skuId, "UserProfileAccountPopout"),
        eL = {
            "profile-frame": ef?.profileFrame != null,
            "profile-frame-bottom": ew?.layers.some((e) => {
                let { type: t, anchor: n } = e;
                return "staple" === t && "bottom" === n;
            }),
        },
        eD = s.useRef((0, ee.A)((e) => e.shouldRenderTenureLevelUp)),
        eF = s.useMemo(() => (0, N.A)(), []),
        [eB, eG] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            eG(!1);
        }, 500);
    }, []);
    let eV = (e) => {
            n?.(), (0, P.openUserProfileModal)({ customStatusPrompt: eF, sourceAnalyticsLocations: eg, ...ex, ...e });
        },
        eW = ef?.widgets != null && ef.widgets.length > 0,
        eQ = s.useCallback(() => {
            n();
        }, [n]),
        eH = s.useCallback(() => {
            eM(), eQ();
        }, [eM, eQ]),
        eq = (0, S.QR)({ location: "UserProfileAccountPopout" }),
        ez = (0, S.zd)({ location: "UserProfileAccountPopout" }),
        eK = s.useId();
    return (0, i.jsx)(v.f5, {
        value: eg,
        children: (0, i.jsx)(U.of, {
            value: ex,
            openedAt: em,
            fetchStartedAt: ef?.fetchStartedAt,
            fetchEndedAt: ef?.fetchEndedAt,
            isLoaded: ef?.isLoaded,
            children: (0, i.jsxs)(p.l, {
                ref: eE,
                "aria-labelledby": eK,
                className: a()(eu.jC, eL, e_),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(o.A, {
                        children: (0, i.jsx)(d.H, { id: eK, children: ec.intl.string(ec.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(d.F, {
                        children: [
                            (0, i.jsx)(el.A, { displayProfile: ef, handleOpenUserProfileModal: eV, height: eC }),
                            (0, i.jsxs)(W.A, {
                                className: eu.BK,
                                user: t,
                                displayProfile: ef,
                                themeType: ed.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: ep.wx,
                                        children: [
                                            (0, i.jsx)(D.A, { user: t, displayProfile: ef, themeType: ed.d.POPOUT }),
                                            (0, i.jsx)(w.A, {
                                                user: t,
                                                displayProfile: ef,
                                                themeType: ed.d.POPOUT,
                                                onOpenProfile: eA ? void 0 : eV,
                                            }),
                                            (0, i.jsx)(q.A, {
                                                ref: ek,
                                                user: t,
                                                themeType: ed.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: eF,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(h.Ip, {
                                        className: eu.rf,
                                        style: { pointerEvents: eB ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(B.A, { userId: t.id }),
                                            (0, i.jsx)(Q.A, {
                                                user: t,
                                                className: eu.Xh,
                                                nickname: Z.Ay.getName(void 0, null, t),
                                                onOpenProfile: eA ? void 0 : eV,
                                                pronouns: ef?.pronouns,
                                                tags: (0, i.jsx)(L.A, {
                                                    displayProfile: ef,
                                                    themeType: ed.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != eh ? (e) => e === eh : void 0,
                                                    shouldGlowTenureBadge: eD.current,
                                                }),
                                                nicknameIcons: (0, i.jsx)(H.A, { user: t, isVisible: eT }),
                                            }),
                                            (0, i.jsx)(F.A, { isPremiumUser: eU, onInteraction: n }),
                                            (0, i.jsx)(z.A, {
                                                user: t,
                                                bio: ef?.bio,
                                                hidePersonalInformation: eI,
                                                onClose: n,
                                            }),
                                            eW &&
                                                (0, i.jsx)(V.A, {
                                                    user: t,
                                                    widgets: ef?.widgets,
                                                    onOpenUserProfileModal: eV,
                                                }),
                                            (0, i.jsx)(G.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: eV,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eu.T_,
                                                children: [
                                                    (0, i.jsx)(W.A.Overlay, {
                                                        className: eu.g0,
                                                        children: (0, i.jsxs)(ei.Gs, {
                                                            children: [
                                                                (0, i.jsx)(ei.N3, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ec.intl.string(ec.t.s5vZlQ),
                                                                    icon: m.R,
                                                                    onClick: eH,
                                                                    ref: eP,
                                                                }),
                                                                (0, i.jsx)(ei.N3, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(es.A, {}),
                                                                    sublabel: null != ej && ej,
                                                                    icon: () =>
                                                                        (0, i.jsx)(_.nW, { status: eS, size: 12 }),
                                                                    trailing:
                                                                        (eR || eS === eo.clD.DND) &&
                                                                        (0, i.jsx)(A.a, { size: "xxs" }),
                                                                    renderSubmenu: r.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ei.eE, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eu.hQ,
                                                                                  "aria-label": ec.intl.string(
                                                                                      ec.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: ey,
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
                                                                                                              ec.intl.string(
                                                                                                                  ec.t[
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
                                                                                                                  ec.intl.string(
                                                                                                                      ec
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
                                                                                                                  ey,
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
                                                    (0, i.jsx)(W.A.Overlay, {
                                                        className: eu.g0,
                                                        children: (0, i.jsxs)(ei.Gs, {
                                                            children: [
                                                                (0, i.jsx)(ei.N3, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: x.r,
                                                                    label: ec.intl.string(ec.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, er.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ei.eE, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ec.intl.string(ec.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: eO,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    X.p5 &&
                                                                    eN &&
                                                                    (0, i.jsx)(ei.N3, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: E.L,
                                                                        label: ec.intl.string(ec.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, X.C)(t.id), n();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    null != ew && (0, i.jsx)(I.A, { frame: ew, layout: "ACCOUNT_POPOUT" }),
                                    ef?.profileEffect != null &&
                                        !eD.current &&
                                        (0, i.jsx)(b.A, { skuId: ef.profileEffect.skuId, isHovering: ev }),
                                ],
                            }),
                            eq && ez ? (0, i.jsx)(en.A, { targetElementRef: eP, onClose: n }) : null,
                            (0, i.jsx)(O.A, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
