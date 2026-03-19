n.d(t, { A: () => et });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(607399),
    o = n(158954),
    d = n(311907),
    c = n(397927),
    u = n(765671),
    m = n(793574),
    h = n(688810),
    x = n(395332),
    p = n(713517),
    g = n(645507),
    _ = n(970931),
    f = n(258836),
    v = n(206835),
    b = n(182592),
    j = n(183555),
    A = n(950191),
    C = n(657331),
    y = n(718019),
    T = n(31432),
    S = n(915614),
    E = n(223330),
    N = n(559506),
    I = n(646986),
    k = n(379654),
    R = n(946356),
    O = n(810396),
    w = n(376285),
    D = n(159218),
    M = n(442228),
    P = n(253932),
    U = n(290863),
    L = n(351906),
    B = n(957565),
    G = n(562153),
    F = n(927578),
    V = n(832248),
    W = n(962303),
    H = n(163233),
    K = n(95551),
    z = n(471303),
    $ = n(740142),
    q = n(33042),
    Q = n(347853),
    Y = n(652215),
    J = n(996988),
    X = n(985018),
    Z = n(423648),
    ee = n(183959);
function et(e) {
    let { currentUser: t, onClose: n, setPopoutRef: l, highlightBadge: et, className: en } = e,
        ea = __OVERLAY__,
        ei = (0, A.Ay)(t.id, void 0),
        { analyticsLocations: el } = (0, h.Ay)(m.A.USER_PROFILE_ACCOUNT_POPOUT),
        es = (0, j.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: er, height: eo } = (0, u.Ay)(),
        { isHoveringOrFocusing: ed, isHovering: ec } = (0, p.A)(er);
    i.useEffect(() => {
        l?.(er.current);
    }, [er, l]),
        i.useEffect(() => (V.A.setState({ isOpen: !0 }), () => V.A.setState({ isOpen: !1 })), []);
    let eu = (0, d.bG)([U.A], () => U.A.getStatus(t.id)),
        em = P.CY.useSetting(),
        eh = (0, q.Q)(em),
        ex = (0, d.bG)([L.A], () => L.A.hidePersonalInformation),
        ep = (0, _.kB)(),
        eg = P.Q_.useSetting(),
        e_ = (0, q.T)(eu),
        ef = (0, W.j)(n),
        ev = (0, v.A)({ analyticsLocations: el }),
        eb = (0, F.TW)(t),
        ej = i.useRef(null),
        eA = i.useRef(null),
        eC = i.useRef((0, V.A)((e) => e.shouldRenderTenureLevelUp)),
        ey = i.useMemo(() => (0, g.A)(), []),
        [eT, eS] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eS(!1);
        }, 500);
    }, []);
    let eE = (e) => {
            n?.(), (0, C.openUserProfileModal)({ customStatusPrompt: ey, sourceAnalyticsLocations: el, ...es, ...e });
        },
        eN = ei?.widgets != null && ei.widgets.length > 0,
        eI = i.useCallback(() => {
            n();
        }, [n]),
        ek = i.useCallback(() => {
            ev(), eI();
        }, [ev, eI]),
        eR = (0, x.JY)({ location: "UserProfileAccountPopout" }),
        eO = (0, x.on)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(h.f5, {
        value: el,
        children: (0, a.jsx)(j.of, {
            value: es,
            isLoaded: ei?.isLoaded,
            children: (0, a.jsxs)(c.lGe, {
                ref: er,
                "aria-label": X.intl.string(X.t["5fWB8U"]),
                className: s()(Z.jC, en),
                "data-layer": "base",
                children: [
                    (0, a.jsx)($.A, { displayProfile: ei, handleOpenUserProfileModal: eE, height: eo }),
                    (0, a.jsxs)(R.A, {
                        className: Z.BK,
                        user: t,
                        displayProfile: ei,
                        themeType: J.d.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ee.wx,
                                children: [
                                    (0, a.jsx)(S.A, { user: t, displayProfile: ei, themeType: J.d.POPOUT }),
                                    (0, a.jsx)(y.A, {
                                        user: t,
                                        displayProfile: ei,
                                        themeType: J.d.POPOUT,
                                        onOpenProfile: ea ? void 0 : eE,
                                    }),
                                    (0, a.jsx)(D.A, {
                                        ref: ej,
                                        user: t,
                                        themeType: J.d.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ey,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.HOs, {
                                className: Z.rf,
                                style: { pointerEvents: eT ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(N.A, { userId: t.id }),
                                    (0, a.jsx)(O.A, {
                                        user: t,
                                        className: Z.Xh,
                                        nickname: G.Ay.getName(void 0, null, t),
                                        onOpenProfile: ea ? void 0 : eE,
                                        pronouns: ei?.pronouns,
                                        tags: (0, a.jsx)(T.A, {
                                            displayProfile: ei,
                                            themeType: J.d.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != et ? (e) => e === et : void 0,
                                            shouldGlowTenureBadge: eC.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(w.A, { user: t, isVisible: ed }),
                                    }),
                                    (0, a.jsx)(M.A, { user: t, bio: ei?.bio, hidePersonalInformation: ex, onClose: n }),
                                    eN &&
                                        (0, a.jsx)(k.A, { user: t, widgets: ei?.widgets, onOpenUserProfileModal: eE }),
                                    (0, a.jsx)(E.A, { isPremiumUser: eb, onInteraction: n }),
                                    (0, a.jsx)(I.A, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: eE,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: Z.T_,
                                        children: [
                                            (0, a.jsx)(R.A.Overlay, {
                                                className: Z.g0,
                                                children: (0, a.jsxs)(K.Gs, {
                                                    children: [
                                                        (0, a.jsx)(K.N3, {
                                                            action: "EDIT_PROFILE",
                                                            label: X.intl.string(X.t.s5vZlQ),
                                                            icon: c.R2l,
                                                            onClick: ek,
                                                            ref: eA,
                                                        }),
                                                        (0, a.jsx)(K.N3, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(z.A, {}),
                                                            sublabel: null != eh && eh,
                                                            icon: () => (0, a.jsx)(c.nW6, { status: eu, size: 12 }),
                                                            trailing:
                                                                (ep || eu === Y.clD.DND) &&
                                                                (0, a.jsx)(c.a_I, { size: "xxs" }),
                                                            renderSubmenu: r.Fr
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(K.eE, {
                                                                          navId: "set-status-submenu",
                                                                          className: Z.hQ,
                                                                          "aria-label": X.intl.string(X.t.E13trI),
                                                                          onClose: t,
                                                                          children: e_,
                                                                      });
                                                                  },
                                                            onClick: r.Fr
                                                                ? () => {
                                                                      n(),
                                                                          (0, c.mMO)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          let { onClose: t, ...n } = e;
                                                                                          return (0, a.jsx)(o.dWK, {
                                                                                              onClose: t,
                                                                                              ...n,
                                                                                              size: "sm",
                                                                                              "aria-label":
                                                                                                  X.intl.string(
                                                                                                      X.t["3Uj+2p"],
                                                                                                  ),
                                                                                              children: (0, a.jsx)(
                                                                                                  c.W1t,
                                                                                                  {
                                                                                                      "data-menu-migrated":
                                                                                                          !0,
                                                                                                      navId: "set-status-submenu-mobile-web",
                                                                                                      variant: "fixed",
                                                                                                      "aria-label":
                                                                                                          X.intl.string(
                                                                                                              X.t
                                                                                                                  .E13trI,
                                                                                                          ),
                                                                                                      hideScroller: !0,
                                                                                                      onClose: t,
                                                                                                      onSelect: void 0,
                                                                                                      children: e_,
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
                                            (0, a.jsx)(R.A.Overlay, {
                                                className: Z.g0,
                                                children: (0, a.jsxs)(K.Gs, {
                                                    children: [
                                                        (0, a.jsx)(K.N3, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.rMq,
                                                            label: X.intl.string(X.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, Q.A)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(K.eE, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": X.intl.string(X.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: ef,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            B.p5 &&
                                                            eg &&
                                                            (0, a.jsx)(K.N3, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.L9S,
                                                                label: X.intl.string(X.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, B.C)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            ei?.profileEffect != null &&
                                !eC.current &&
                                (0, a.jsx)(b.A, { skuId: ei.profileEffect.skuId, isHovering: ec }),
                        ],
                    }),
                    eR && eO ? (0, a.jsx)(H.A, { targetElementRef: eA, onClose: n }) : null,
                    (0, a.jsx)(f.A, {}),
                ],
            }),
        }),
    });
}
