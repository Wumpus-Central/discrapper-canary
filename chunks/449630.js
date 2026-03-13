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
    p = n(688810),
    x = n(395332),
    g = n(713517),
    _ = n(645507),
    f = n(932001),
    v = n(970931),
    b = n(258836),
    j = n(206835),
    A = n(182592),
    C = n(183555),
    T = n(950191),
    y = n(657331),
    S = n(718019),
    E = n(31432),
    N = n(915614),
    I = n(223330),
    R = n(559506),
    k = n(646986),
    O = n(379654),
    w = n(946356),
    D = n(810396),
    M = n(376285),
    P = n(159218),
    U = n(442228),
    L = n(253932),
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
    en = n(161774),
    ea = n(435953);
function ei(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: ei, className: es } = e,
        el = __OVERLAY__,
        er = (0, T.Ay)(t.id, void 0),
        { analyticsLocations: eo } = (0, p.Ay)(h.A.USER_PROFILE_ACCOUNT_POPOUT),
        ed = (0, C.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: ec, height: eu } = (0, m.Ay)(),
        { isHoveringOrFocusing: em, isHovering: eh } = (0, g.A)(ec);
    i.useEffect(() => {
        s?.(ec.current);
    }, [ec, s]),
        i.useEffect(() => (H.A.setState({ isOpen: !0 }), () => H.A.setState({ isOpen: !1 })), []);
    let ep = (0, d.bG)([B.A], () => B.A.getStatus(t.id)),
        ex = L.CY.useSetting(),
        eg = (0, Y.Q)(ex),
        e_ = (0, d.bG)([G.A], () => G.A.hidePersonalInformation),
        ef = (0, v.kB)(),
        ev = L.Q_.useSetting(),
        eb = (0, Y.T)(ep),
        ej = (0, K.j)(n),
        eA = (0, j.A)({ analyticsLocations: eo }),
        eC = (0, W.TW)(t),
        eT = i.useRef(null),
        ey = i.useRef(null),
        eS = i.useRef((0, H.A)((e) => e.shouldRenderTenureLevelUp)),
        eE = i.useMemo(() => (0, _.A)(), []),
        [eN, eI] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eI(!1);
        }, 500);
    }, []);
    let eR = (e) => {
            n?.(), (0, y.openUserProfileModal)({ customStatusPrompt: eE, sourceAnalyticsLocations: eo, ...ed, ...e });
        },
        ek = er?.widgets != null && er.widgets.length > 0,
        eO = ek ? [] : [c.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [ew, eD] = (0, f.kn)(eO),
        eM = ew === c.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eP = i.useCallback(() => {
            eD(Z.i.USER_DISMISS), n();
        }, [eD, n]),
        eU = i.useCallback(() => {
            eA(), eP();
        }, [eA, eP]),
        eL = (0, x.JY)({ location: "UserProfileAccountPopout" }),
        eB = (0, x.on)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(p.f5, {
        value: eo,
        children: (0, a.jsx)(C.of, {
            value: ed,
            isLoaded: er?.isLoaded,
            children: (0, a.jsxs)(u.lGe, {
                ref: ec,
                "aria-label": et.intl.string(et.t["5fWB8U"]),
                className: l()(en.jC, es),
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.A, { displayProfile: er, handleOpenUserProfileModal: eR, height: eu }),
                    (0, a.jsxs)(w.A, {
                        className: en.BK,
                        user: t,
                        displayProfile: er,
                        themeType: ee.d.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.wx,
                                children: [
                                    (0, a.jsx)(N.A, { user: t, displayProfile: er, themeType: ee.d.POPOUT }),
                                    (0, a.jsx)(S.A, {
                                        user: t,
                                        displayProfile: er,
                                        themeType: ee.d.POPOUT,
                                        onOpenProfile: el ? void 0 : eR,
                                    }),
                                    (0, a.jsx)(P.A, {
                                        ref: eT,
                                        user: t,
                                        themeType: ee.d.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eE,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(u.HOs, {
                                className: en.rf,
                                style: { pointerEvents: eN ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(R.A, { userId: t.id }),
                                    (0, a.jsx)(D.A, {
                                        user: t,
                                        className: en.Xh,
                                        nickname: V.Ay.getName(void 0, null, t),
                                        onOpenProfile: el ? void 0 : eR,
                                        pronouns: er?.pronouns,
                                        tags: (0, a.jsx)(E.A, {
                                            displayProfile: er,
                                            themeType: ee.d.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ei ? (e) => e === ei : void 0,
                                            shouldGlowTenureBadge: eS.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(M.A, { user: t, isVisible: em }),
                                    }),
                                    (0, a.jsx)(U.A, { user: t, bio: er?.bio, hidePersonalInformation: e_, onClose: n }),
                                    ek &&
                                        (0, a.jsx)(O.A, { user: t, widgets: er?.widgets, onOpenUserProfileModal: eR }),
                                    (0, a.jsx)(I.A, { isPremiumUser: eC, onInteraction: n }),
                                    (0, a.jsx)(k.A, {
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
                                                            trailing: eM
                                                                ? (0, a.jsx)(u.LpS, {
                                                                      text: et.intl.string(et.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: ey,
                                                        }),
                                                        (0, a.jsx)($.N3, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(q.A, {}),
                                                            sublabel: null != eg && eg,
                                                            icon: () => (0, a.jsx)(u.nW6, { status: ep, size: 12 }),
                                                            trailing:
                                                                (ef || ep === X.clD.DND) &&
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
                                                                          children: eb,
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
                                                                                                      children: eb,
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
                                                                    children: ej,
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
                            er?.profileEffect != null &&
                                !eS.current &&
                                (0, a.jsx)(A.A, { skuId: er.profileEffect.skuId, isHovering: eh }),
                        ],
                    }),
                    eL && eB ? (0, a.jsx)(z.A, { targetElementRef: ey, onClose: n }) : null,
                    (0, a.jsx)(b.A, {}),
                ],
            }),
        }),
    });
}
