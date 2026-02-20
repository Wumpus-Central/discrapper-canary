n.d(t, { A: () => ei });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(607399),
    o = n(158954),
    d = n(311907),
    c = n(554146),
    u = n(397927),
    m = n(765671),
    h = n(793574),
    x = n(688810),
    p = n(395332),
    g = n(713517),
    _ = n(645507),
    f = n(379848),
    b = n(970931),
    v = n(258836),
    j = n(206835),
    C = n(182592),
    A = n(183555),
    T = n(950191),
    y = n(657331),
    S = n(718019),
    E = n(31432),
    N = n(915614),
    I = n(223330),
    k = n(559506),
    R = n(646986),
    O = n(379654),
    w = n(946356),
    D = n(810396),
    M = n(376285),
    P = n(159218),
    L = n(442228),
    U = n(253932),
    B = n(290863),
    G = n(351906),
    F = n(957565),
    V = n(562153),
    W = n(927578),
    H = n(832248),
    K = n(962303),
    z = n(163233),
    $ = n(95551),
    q = n(471303),
    Q = n(740142),
    Y = n(33042),
    J = n(347853),
    X = n(652215),
    Z = n(49999),
    ee = n(996988),
    et = n(985018),
    en = n(423648),
    ea = n(183959);
function ei(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: ei, openedAt: es, className: el } = e,
        er = __OVERLAY__,
        eo = (0, T.Ay)(t.id, void 0),
        { analyticsLocations: ed } = (0, x.Ay)(h.A.USER_PROFILE_ACCOUNT_POPOUT),
        ec = (0, A.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: eu, height: em } = (0, m.Ay)(),
        { isHoveringOrFocusing: eh, isHovering: ex } = (0, g.A)(eu);
    i.useEffect(() => {
        s?.(eu.current);
    }, [eu, s]),
        i.useEffect(() => (H.A.setState({ isOpen: !0 }), () => H.A.setState({ isOpen: !1 })), []);
    let ep = (0, d.bG)([B.A], () => B.A.getStatus(t.id)),
        eg = U.CY.useSetting(),
        e_ = (0, Y.Q)(eg),
        ef = (0, d.bG)([G.A], () => G.A.hidePersonalInformation),
        eb = (0, b.kB)(),
        ev = U.Q_.useSetting(),
        ej = (0, Y.T)(ep),
        eC = (0, K.j)(n),
        eA = (0, j.A)({ analyticsLocations: ed }),
        eT = (0, W.TW)(t),
        ey = i.useRef(null),
        eS = i.useRef(null),
        eE = i.useRef((0, H.A)((e) => e.shouldRenderTenureLevelUp)),
        eN = i.useMemo(() => (0, _.A)(), []),
        [eI, ek] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            ek(!1);
        }, 500);
    }, []);
    let eR = (e) => {
            n?.(), (0, y.openUserProfileModal)({ customStatusPrompt: eN, sourceAnalyticsLocations: ed, ...ec, ...e });
        },
        eO = eo?.widgets != null && eo.widgets.length > 0,
        ew = eO ? [] : [c.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eD, eM] = (0, f.kn)(ew),
        eP = eD === c.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eL = i.useCallback(() => {
            eM(Z.i.USER_DISMISS), n();
        }, [eM, n]),
        eU = i.useCallback(() => {
            eA(), eL();
        }, [eA, eL]),
        eB = (0, p.JY)({ location: "UserProfileAccountPopout" }),
        eG = (0, p.on)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(x.f5, {
        value: ed,
        children: (0, a.jsx)(A.of, {
            value: ec,
            openedAt: es,
            fetchStartedAt: eo?.fetchStartedAt,
            fetchEndedAt: eo?.fetchEndedAt,
            isLoaded: eo?.isLoaded,
            children: (0, a.jsxs)(u.lGe, {
                ref: eu,
                "aria-label": et.intl.string(et.t["5fWB8U"]),
                className: l()(en.jC, el),
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.A, { displayProfile: eo, handleOpenUserProfileModal: eR, height: em }),
                    (0, a.jsxs)(w.A, {
                        className: en.BK,
                        user: t,
                        displayProfile: eo,
                        themeType: ee.d.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.wx,
                                children: [
                                    (0, a.jsx)(N.A, { user: t, displayProfile: eo, themeType: ee.d.POPOUT }),
                                    (0, a.jsx)(S.A, {
                                        user: t,
                                        displayProfile: eo,
                                        themeType: ee.d.POPOUT,
                                        onOpenProfile: er ? void 0 : eR,
                                    }),
                                    (0, a.jsx)(P.A, {
                                        ref: ey,
                                        user: t,
                                        themeType: ee.d.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eN,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(u.HOs, {
                                className: en.rf,
                                style: { pointerEvents: eI ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(k.A, { userId: t.id }),
                                    (0, a.jsx)(D.A, {
                                        user: t,
                                        className: en.Xh,
                                        nickname: V.Ay.getName(void 0, null, t),
                                        onOpenProfile: er ? void 0 : eR,
                                        pronouns: eo?.pronouns,
                                        tags: (0, a.jsx)(E.A, {
                                            displayProfile: eo,
                                            themeType: ee.d.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ei ? (e) => e === ei : void 0,
                                            shouldGlowTenureBadge: eE.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(M.A, { user: t, isVisible: eh }),
                                    }),
                                    (0, a.jsx)(L.A, { user: t, bio: eo?.bio, hidePersonalInformation: ef, onClose: n }),
                                    eO &&
                                        (0, a.jsx)(O.A, { user: t, widgets: eo?.widgets, onOpenUserProfileModal: eR }),
                                    (0, a.jsx)(I.A, { isPremiumUser: eT, onInteraction: n }),
                                    (0, a.jsx)(R.A, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: eR,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: en.T_,
                                        children: [
                                            (0, a.jsx)(w.A.Overlay, {
                                                className: en.g0,
                                                children: (0, a.jsxs)($.Gs, {
                                                    children: [
                                                        (0, a.jsx)($.N3, {
                                                            action: "EDIT_PROFILE",
                                                            label: et.intl.string(et.t.s5vZlQ),
                                                            icon: u.R2l,
                                                            onClick: eU,
                                                            trailing: eP
                                                                ? (0, a.jsx)(u.LpS, {
                                                                      text: et.intl.string(et.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eS,
                                                        }),
                                                        (0, a.jsx)($.N3, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(q.A, {}),
                                                            sublabel: null != e_ && e_,
                                                            icon: () => (0, a.jsx)(u.nW6, { status: ep, size: 12 }),
                                                            trailing:
                                                                (eb || ep === X.clD.DND) &&
                                                                (0, a.jsx)(u.a_I, { size: "xxs" }),
                                                            renderSubmenu: r.Fr
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)($.eE, {
                                                                          navId: "set-status-submenu",
                                                                          className: en.hQ,
                                                                          "aria-label": et.intl.string(et.t.E13trI),
                                                                          onClose: t,
                                                                          children: ej,
                                                                      });
                                                                  },
                                                            onClick: r.Fr
                                                                ? () => {
                                                                      n(),
                                                                          (0, u.mMO)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          let { onClose: t, ...n } = e;
                                                                                          return (0, a.jsx)(o.dWK, {
                                                                                              onClose: t,
                                                                                              ...n,
                                                                                              size: "sm",
                                                                                              "aria-label":
                                                                                                  et.intl.string(
                                                                                                      et.t["3Uj+2p"],
                                                                                                  ),
                                                                                              children: (0, a.jsx)(
                                                                                                  u.W1t,
                                                                                                  {
                                                                                                      "data-menu-migrated":
                                                                                                          !0,
                                                                                                      navId: "set-status-submenu-mobile-web",
                                                                                                      variant: "fixed",
                                                                                                      "aria-label":
                                                                                                          et.intl.string(
                                                                                                              et.t
                                                                                                                  .E13trI,
                                                                                                          ),
                                                                                                      hideScroller: !0,
                                                                                                      onClose: t,
                                                                                                      onSelect: void 0,
                                                                                                      children: ej,
                                                                                                  },
                                                                                              ),
                                                                                          });
                                                                                      }),
                                                                                  ),
                                                                          );
                                                                  }
                                                                : void 0,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)(w.A.Overlay, {
                                                className: en.g0,
                                                children: (0, a.jsxs)($.Gs, {
                                                    children: [
                                                        (0, a.jsx)($.N3, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: u.rMq,
                                                            label: et.intl.string(et.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, J.A)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)($.eE, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": et.intl.string(et.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eC,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            F.p5 &&
                                                            ev &&
                                                            (0, a.jsx)($.N3, {
                                                                action: "COPY_USER_ID",
                                                                icon: u.L9S,
                                                                label: et.intl.string(et.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, F.C)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            eo?.profileEffect != null &&
                                !eE.current &&
                                (0, a.jsx)(C.A, { skuId: eo.profileEffect.skuId, isHovering: ex }),
                        ],
                    }),
                    eB && eG ? (0, a.jsx)(z.A, { targetElementRef: eS, onClose: n }) : null,
                    (0, a.jsx)(v.A, {}),
                ],
            }),
        }),
    });
}
