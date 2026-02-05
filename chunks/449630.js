n.d(t, { A: () => ea });
var a = n(627968),
    s = n(64700),
    i = n(607399),
    l = n(158954),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(765671),
    u = n(793574),
    m = n(688810),
    h = n(395332),
    x = n(713517),
    p = n(576241),
    g = n(645507),
    _ = n(379848),
    f = n(970931),
    v = n(258836),
    b = n(206835),
    j = n(182592),
    A = n(183555),
    C = n(950191),
    S = n(657331),
    T = n(718019),
    y = n(31432),
    N = n(915614),
    E = n(223330),
    I = n(559506),
    k = n(646986),
    R = n(379654),
    O = n(946356),
    w = n(810396),
    D = n(376285),
    M = n(159218),
    P = n(442228),
    L = n(253932),
    U = n(290863),
    B = n(351906),
    G = n(957565),
    F = n(562153),
    V = n(927578),
    W = n(832248),
    H = n(962303),
    K = n(163233),
    z = n(95551),
    $ = n(471303),
    q = n(740142),
    Q = n(33042),
    Y = n(347853),
    J = n(652215),
    X = n(49999),
    Z = n(996988),
    ee = n(985018),
    et = n(423648),
    en = n(183959);
function ea(e) {
    let { currentUser: t, onClose: n, setPopoutRef: ea, highlightBadge: es, openedAt: ei } = e,
        el = __OVERLAY__,
        er = (0, C.Ay)(t.id, void 0),
        { analyticsLocations: eo } = (0, m.Ay)(u.A.USER_PROFILE_ACCOUNT_POPOUT),
        ed = (0, A.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: ec, height: eu } = (0, c.Ay)(),
        { isHoveringOrFocusing: em, isHovering: eh } = (0, x.A)(ec);
    s.useEffect(() => {
        ea?.(ec.current);
    }, [ec, ea]),
        s.useEffect(() => (W.A.setState({ isOpen: !0 }), () => W.A.setState({ isOpen: !1 })), []);
    let ex = (0, r.bG)([U.A], () => U.A.getStatus(t.id)),
        ep = L.CY.useSetting(),
        eg = (0, Q.Q)(ep),
        e_ = (0, r.bG)([B.A], () => B.A.hidePersonalInformation),
        ef = (0, f.kB)(),
        ev = L.Q_.useSetting(),
        eb = (0, Q.T)(ex),
        ej = (0, H.j)(n),
        eA = (0, b.A)({ analyticsLocations: eo }),
        eC = (0, V.TW)(t),
        eS = (0, p.h)({ location: "UserProfileAccountPopout" }),
        eT = s.useRef(null),
        ey = s.useRef(null),
        eN = s.useRef((0, W.A)((e) => e.shouldRenderTenureLevelUp)),
        eE = s.useMemo(() => (0, g.A)(), []),
        [eI, ek] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            ek(!1);
        }, 500);
    }, []);
    let eR = (e) => {
            n?.(), (0, S.openUserProfileModal)({ customStatusPrompt: eE, sourceAnalyticsLocations: eo, ...ed, ...e });
        },
        eO = er?.widgets != null && er.widgets.length > 0,
        ew = eO ? [] : [o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eD, eM] = (0, _.kn)(ew),
        eP = eD === o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eL = s.useCallback(() => {
            eM(X.i.USER_DISMISS), n();
        }, [eM, n]),
        eU = s.useCallback(() => {
            eA(), eL();
        }, [eA, eL]),
        eB = (0, h.JY)({ location: "UserProfileAccountPopout" }),
        eG = (0, h.on)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.f5, {
        value: eo,
        children: (0, a.jsx)(A.of, {
            value: ed,
            openedAt: ei,
            fetchStartedAt: er?.fetchStartedAt,
            fetchEndedAt: er?.fetchEndedAt,
            isLoaded: er?.isLoaded,
            children: (0, a.jsxs)(d.lGe, {
                ref: ec,
                "aria-label": t.username,
                className: et.jC,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(q.A, { displayProfile: er, handleOpenUserProfileModal: eR, height: eu }),
                    (0, a.jsxs)(O.A, {
                        className: et.BK,
                        user: t,
                        displayProfile: er,
                        themeType: Z.d.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.wx,
                                children: [
                                    (0, a.jsx)(N.A, { user: t, displayProfile: er, themeType: Z.d.POPOUT }),
                                    (0, a.jsx)(T.A, {
                                        user: t,
                                        displayProfile: er,
                                        themeType: Z.d.POPOUT,
                                        onOpenProfile: el ? void 0 : eR,
                                    }),
                                    (0, a.jsx)(M.A, {
                                        ref: eT,
                                        user: t,
                                        themeType: Z.d.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eS ? eE : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(d.HOs, {
                                className: et.rf,
                                style: { pointerEvents: eI ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(I.A, { userId: t.id }),
                                    (0, a.jsx)(w.A, {
                                        user: t,
                                        className: et.Xh,
                                        nickname: F.Ay.getName(void 0, null, t),
                                        onOpenProfile: el ? void 0 : eR,
                                        pronouns: er?.pronouns,
                                        tags: (0, a.jsx)(y.A, {
                                            displayProfile: er,
                                            themeType: Z.d.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != es ? (e) => e === es : void 0,
                                            shouldGlowTenureBadge: eN.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(D.A, { user: t, isVisible: em }),
                                    }),
                                    (0, a.jsx)(P.A, { user: t, bio: er?.bio, hidePersonalInformation: e_, onClose: n }),
                                    eO &&
                                        (0, a.jsx)(R.A, { user: t, widgets: er?.widgets, onOpenUserProfileModal: eR }),
                                    (0, a.jsx)(E.A, { isPremiumUser: eC, onInteraction: n }),
                                    (0, a.jsx)(k.A, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: eR,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: et.T_,
                                        children: [
                                            (0, a.jsx)(O.A.Overlay, {
                                                className: et.g0,
                                                children: (0, a.jsxs)(z.Gs, {
                                                    children: [
                                                        (0, a.jsx)(z.N3, {
                                                            action: "EDIT_PROFILE",
                                                            label: ee.intl.string(ee.t.s5vZlQ),
                                                            icon: d.R2l,
                                                            onClick: eU,
                                                            trailing: eP
                                                                ? (0, a.jsx)(d.LpS, {
                                                                      text: ee.intl.string(ee.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: ey,
                                                        }),
                                                        (0, a.jsx)(z.N3, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)($.A, {}),
                                                            sublabel: null != eg && eg,
                                                            icon: () => (0, a.jsx)(d.nW6, { status: ex, size: 12 }),
                                                            trailing:
                                                                (ef || ex === J.clD.DND) &&
                                                                (0, a.jsx)(d.a_I, { size: "xxs" }),
                                                            renderSubmenu: i.Fr
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(z.eE, {
                                                                          navId: "set-status-submenu",
                                                                          className: et.hQ,
                                                                          "aria-label": ee.intl.string(ee.t.E13trI),
                                                                          onClose: t,
                                                                          children: eb,
                                                                      });
                                                                  },
                                                            onClick: i.Fr
                                                                ? () => {
                                                                      n(),
                                                                          (0, d.mMO)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          let { onClose: t, ...n } = e;
                                                                                          return (0, a.jsx)(l.dWK, {
                                                                                              onClose: t,
                                                                                              ...n,
                                                                                              size: "sm",
                                                                                              "aria-label":
                                                                                                  ee.intl.string(
                                                                                                      ee.t["3Uj+2p"],
                                                                                                  ),
                                                                                              children: (0, a.jsx)(
                                                                                                  d.W1t,
                                                                                                  {
                                                                                                      "data-menu-migrated":
                                                                                                          !0,
                                                                                                      navId: "set-status-submenu-mobile-web",
                                                                                                      variant: "fixed",
                                                                                                      "aria-label":
                                                                                                          ee.intl.string(
                                                                                                              ee.t
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
                                            (0, a.jsx)(O.A.Overlay, {
                                                className: et.g0,
                                                children: (0, a.jsxs)(z.Gs, {
                                                    children: [
                                                        (0, a.jsx)(z.N3, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: d.rMq,
                                                            label: ee.intl.string(ee.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, Y.A)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(z.eE, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ee.intl.string(ee.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: ej,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            G.p5 &&
                                                            ev &&
                                                            (0, a.jsx)(z.N3, {
                                                                action: "COPY_USER_ID",
                                                                icon: d.L9S,
                                                                label: ee.intl.string(ee.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, G.C)(t.id), n();
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
                                !eN.current &&
                                (0, a.jsx)(j.A, { skuId: er.profileEffect.skuId, isHovering: eh }),
                        ],
                    }),
                    eB && eG ? (0, a.jsx)(K.A, { targetElementRef: ey, onClose: n }) : null,
                    (0, a.jsx)(v.A, {}),
                ],
            }),
        }),
    });
}
