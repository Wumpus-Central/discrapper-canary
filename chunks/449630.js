n.d(t, { A: () => ei });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
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
    _ = n(576241),
    f = n(645507),
    v = n(379848),
    b = n(970931),
    j = n(258836),
    A = n(206835),
    C = n(182592),
    S = n(183555),
    T = n(950191),
    y = n(657331),
    N = n(718019),
    E = n(31432),
    I = n(915614),
    k = n(223330),
    R = n(559506),
    O = n(646986),
    w = n(379654),
    D = n(946356),
    M = n(810396),
    P = n(376285),
    L = n(159218),
    U = n(442228),
    B = n(253932),
    G = n(290863),
    F = n(351906),
    V = n(957565),
    W = n(562153),
    H = n(927578),
    K = n(832248),
    z = n(962303),
    $ = n(163233),
    q = n(95551),
    Q = n(471303),
    Y = n(740142),
    J = n(33042),
    X = n(347853),
    Z = n(652215),
    ee = n(49999),
    et = n(996988),
    en = n(985018),
    ea = n(423648),
    es = n(183959);
function ei(e) {
    let { currentUser: t, onClose: n, setPopoutRef: i, highlightBadge: ei, openedAt: el, className: er } = e,
        eo = __OVERLAY__,
        ed = (0, T.Ay)(t.id, void 0),
        { analyticsLocations: ec } = (0, x.Ay)(h.A.USER_PROFILE_ACCOUNT_POPOUT),
        eu = (0, S.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: em, height: eh } = (0, m.Ay)(),
        { isHoveringOrFocusing: ex, isHovering: ep } = (0, g.A)(em);
    s.useEffect(() => {
        i?.(em.current);
    }, [em, i]),
        s.useEffect(() => (K.A.setState({ isOpen: !0 }), () => K.A.setState({ isOpen: !1 })), []);
    let eg = (0, d.bG)([G.A], () => G.A.getStatus(t.id)),
        e_ = B.CY.useSetting(),
        ef = (0, J.Q)(e_),
        ev = (0, d.bG)([F.A], () => F.A.hidePersonalInformation),
        eb = (0, b.kB)(),
        ej = B.Q_.useSetting(),
        eA = (0, J.T)(eg),
        eC = (0, z.j)(n),
        eS = (0, A.A)({ analyticsLocations: ec }),
        eT = (0, H.TW)(t),
        ey = (0, _.h)({ location: "UserProfileAccountPopout" }),
        eN = s.useRef(null),
        eE = s.useRef(null),
        eI = s.useRef((0, K.A)((e) => e.shouldRenderTenureLevelUp)),
        ek = s.useMemo(() => (0, f.A)(), []),
        [eR, eO] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            eO(!1);
        }, 500);
    }, []);
    let ew = (e) => {
            n?.(), (0, y.openUserProfileModal)({ customStatusPrompt: ek, sourceAnalyticsLocations: ec, ...eu, ...e });
        },
        eD = ed?.widgets != null && ed.widgets.length > 0,
        eM = eD ? [] : [c.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eP, eL] = (0, v.kn)(eM),
        eU = eP === c.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eB = s.useCallback(() => {
            eL(ee.i.USER_DISMISS), n();
        }, [eL, n]),
        eG = s.useCallback(() => {
            eS(), eB();
        }, [eS, eB]),
        eF = (0, p.JY)({ location: "UserProfileAccountPopout" }),
        eV = (0, p.on)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(x.f5, {
        value: ec,
        children: (0, a.jsx)(S.of, {
            value: eu,
            openedAt: el,
            fetchStartedAt: ed?.fetchStartedAt,
            fetchEndedAt: ed?.fetchEndedAt,
            isLoaded: ed?.isLoaded,
            children: (0, a.jsxs)(u.lGe, {
                ref: em,
                "aria-label": en.intl.string(en.t["5fWB8U"]),
                className: l()(ea.jC, er),
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Y.A, { displayProfile: ed, handleOpenUserProfileModal: ew, height: eh }),
                    (0, a.jsxs)(D.A, {
                        className: ea.BK,
                        user: t,
                        displayProfile: ed,
                        themeType: et.d.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: es.wx,
                                children: [
                                    (0, a.jsx)(I.A, { user: t, displayProfile: ed, themeType: et.d.POPOUT }),
                                    (0, a.jsx)(N.A, {
                                        user: t,
                                        displayProfile: ed,
                                        themeType: et.d.POPOUT,
                                        onOpenProfile: eo ? void 0 : ew,
                                    }),
                                    (0, a.jsx)(L.A, {
                                        ref: eN,
                                        user: t,
                                        themeType: et.d.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ey ? ek : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(u.HOs, {
                                className: ea.rf,
                                style: { pointerEvents: eR ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(R.A, { userId: t.id }),
                                    (0, a.jsx)(M.A, {
                                        user: t,
                                        className: ea.Xh,
                                        nickname: W.Ay.getName(void 0, null, t),
                                        onOpenProfile: eo ? void 0 : ew,
                                        pronouns: ed?.pronouns,
                                        tags: (0, a.jsx)(E.A, {
                                            displayProfile: ed,
                                            themeType: et.d.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ei ? (e) => e === ei : void 0,
                                            shouldGlowTenureBadge: eI.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(P.A, { user: t, isVisible: ex }),
                                    }),
                                    (0, a.jsx)(U.A, { user: t, bio: ed?.bio, hidePersonalInformation: ev, onClose: n }),
                                    eD &&
                                        (0, a.jsx)(w.A, { user: t, widgets: ed?.widgets, onOpenUserProfileModal: ew }),
                                    (0, a.jsx)(k.A, { isPremiumUser: eT, onInteraction: n }),
                                    (0, a.jsx)(O.A, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: ew,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: ea.T_,
                                        children: [
                                            (0, a.jsx)(D.A.Overlay, {
                                                className: ea.g0,
                                                children: (0, a.jsxs)(q.Gs, {
                                                    children: [
                                                        (0, a.jsx)(q.N3, {
                                                            action: "EDIT_PROFILE",
                                                            label: en.intl.string(en.t.s5vZlQ),
                                                            icon: u.R2l,
                                                            onClick: eG,
                                                            trailing: eU
                                                                ? (0, a.jsx)(u.LpS, {
                                                                      text: en.intl.string(en.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eE,
                                                        }),
                                                        (0, a.jsx)(q.N3, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Q.A, {}),
                                                            sublabel: null != ef && ef,
                                                            icon: () => (0, a.jsx)(u.nW6, { status: eg, size: 12 }),
                                                            trailing:
                                                                (eb || eg === Z.clD.DND) &&
                                                                (0, a.jsx)(u.a_I, { size: "xxs" }),
                                                            renderSubmenu: r.Fr
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(q.eE, {
                                                                          navId: "set-status-submenu",
                                                                          className: ea.hQ,
                                                                          "aria-label": en.intl.string(en.t.E13trI),
                                                                          onClose: t,
                                                                          children: eA,
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
                                                                                                  en.intl.string(
                                                                                                      en.t["3Uj+2p"],
                                                                                                  ),
                                                                                              children: (0, a.jsx)(
                                                                                                  u.W1t,
                                                                                                  {
                                                                                                      "data-menu-migrated":
                                                                                                          !0,
                                                                                                      navId: "set-status-submenu-mobile-web",
                                                                                                      variant: "fixed",
                                                                                                      "aria-label":
                                                                                                          en.intl.string(
                                                                                                              en.t
                                                                                                                  .E13trI,
                                                                                                          ),
                                                                                                      hideScroller: !0,
                                                                                                      onClose: t,
                                                                                                      onSelect: void 0,
                                                                                                      children: eA,
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
                                            (0, a.jsx)(D.A.Overlay, {
                                                className: ea.g0,
                                                children: (0, a.jsxs)(q.Gs, {
                                                    children: [
                                                        (0, a.jsx)(q.N3, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: u.rMq,
                                                            label: en.intl.string(en.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, X.A)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(q.eE, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": en.intl.string(en.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eC,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            V.p5 &&
                                                            ej &&
                                                            (0, a.jsx)(q.N3, {
                                                                action: "COPY_USER_ID",
                                                                icon: u.L9S,
                                                                label: en.intl.string(en.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, V.C)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            ed?.profileEffect != null &&
                                !eI.current &&
                                (0, a.jsx)(C.A, { skuId: ed.profileEffect.skuId, isHovering: ep }),
                        ],
                    }),
                    eF && eV ? (0, a.jsx)($.A, { targetElementRef: eE, onClose: n }) : null,
                    (0, a.jsx)(j.A, {}),
                ],
            }),
        }),
    });
}
