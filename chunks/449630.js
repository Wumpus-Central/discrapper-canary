n.d(t, { A: () => ea });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(607399),
    o = n(158954),
    d = n(311907),
    c = n(397927),
    u = n(765671),
    m = n(793574),
    h = n(688810),
    x = n(395332),
    p = n(351966),
    g = n(361628),
    f = n(744808),
    v = n(713517),
    _ = n(645507),
    b = n(970931),
    j = n(258836),
    A = n(206835),
    C = n(183555),
    y = n(950191),
    S = n(657331),
    E = n(718019),
    T = n(31432),
    N = n(915614),
    I = n(223330),
    k = n(559506),
    O = n(646986),
    R = n(379654),
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
    Z = n(996988),
    ee = n(985018),
    et = n(447349),
    en = n(656884);
function ea(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: ea, openedAt: ei, className: es } = e,
        el = __OVERLAY__,
        er = (0, y.Ay)(t.id, void 0),
        { analyticsLocations: eo } = (0, h.Ay)(m.A.USER_PROFILE_ACCOUNT_POPOUT),
        ed = (0, C.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: ec, height: eu } = (0, u.Ay)(),
        { isHoveringOrFocusing: em, isHovering: eh } = (0, v.A)(ec);
    i.useEffect(() => {
        s?.(ec.current);
    }, [ec, s]),
        i.useEffect(() => (H.A.setState({ isOpen: !0 }), () => H.A.setState({ isOpen: !1 })), []);
    let ex = (0, d.bG)([B.A], () => B.A.getStatus(t.id)),
        ep = U.CY.useSetting(),
        eg = (0, Y.Q)(ep),
        ef = (0, d.bG)([G.A], () => G.A.hidePersonalInformation),
        ev = (0, b.kB)(),
        e_ = U.Q_.useSetting(),
        eb = (0, Y.T)(ex),
        ej = (0, K.j)(n),
        eA = (0, A.A)({ analyticsLocations: eo }),
        eC = (0, W.TW)(t),
        ey = i.useRef(null),
        eS = i.useRef(null),
        eE = (0, g.A)(er?.profileFrame?.skuId, "UserProfileAccountPopout"),
        eT = {
            "profile-frame": er?.profileFrame != null,
            "profile-frame-bottom": eE?.layers.some((e) => {
                let { type: t, anchor: n } = e;
                return "staple" === t && "bottom" === n;
            }),
        },
        eN = i.useRef((0, H.A)((e) => e.shouldRenderTenureLevelUp)),
        eI = i.useMemo(() => (0, _.A)(), []),
        [ek, eO] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eO(!1);
        }, 500);
    }, []);
    let eR = (e) => {
            n?.(), (0, S.openUserProfileModal)({ customStatusPrompt: eI, sourceAnalyticsLocations: eo, ...ed, ...e });
        },
        ew = er?.widgets != null && er.widgets.length > 0,
        eD = i.useCallback(() => {
            n();
        }, [n]),
        eM = i.useCallback(() => {
            eA(), eD();
        }, [eA, eD]),
        eP = (0, x.QR)({ location: "UserProfileAccountPopout" }),
        eL = (0, x.zd)({ location: "UserProfileAccountPopout" }),
        eU = i.useId();
    return (0, a.jsx)(h.f5, {
        value: eo,
        children: (0, a.jsx)(C.of, {
            value: ed,
            openedAt: ei,
            fetchStartedAt: er?.fetchStartedAt,
            fetchEndedAt: er?.fetchEndedAt,
            isLoaded: er?.isLoaded,
            children: (0, a.jsxs)(c.lGe, {
                ref: ec,
                "aria-labelledby": eU,
                className: l()(et.jC, eT, es),
                "data-layer": "base",
                children: [
                    (0, a.jsx)(o.AC4, {
                        children: (0, a.jsx)(o.H, { id: eU, children: ee.intl.string(ee.t["5fWB8U"]) }),
                    }),
                    (0, a.jsxs)(c.Fmo, {
                        children: [
                            (0, a.jsx)(Q.A, { displayProfile: er, handleOpenUserProfileModal: eR, height: eu }),
                            (0, a.jsxs)(w.A, {
                                className: et.BK,
                                user: t,
                                displayProfile: er,
                                themeType: Z.d.POPOUT,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: en.wx,
                                        children: [
                                            (0, a.jsx)(N.A, { user: t, displayProfile: er, themeType: Z.d.POPOUT }),
                                            (0, a.jsx)(E.A, {
                                                user: t,
                                                displayProfile: er,
                                                themeType: Z.d.POPOUT,
                                                onOpenProfile: el ? void 0 : eR,
                                            }),
                                            (0, a.jsx)(P.A, {
                                                ref: ey,
                                                user: t,
                                                themeType: Z.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: eI,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.HOs, {
                                        className: et.rf,
                                        style: { pointerEvents: ek ? "none" : void 0 },
                                        children: [
                                            (0, a.jsx)(k.A, { userId: t.id }),
                                            (0, a.jsx)(D.A, {
                                                user: t,
                                                className: et.Xh,
                                                nickname: V.Ay.getName(void 0, null, t),
                                                onOpenProfile: el ? void 0 : eR,
                                                pronouns: er?.pronouns,
                                                tags: (0, a.jsx)(T.A, {
                                                    displayProfile: er,
                                                    themeType: Z.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != ea ? (e) => e === ea : void 0,
                                                    shouldGlowTenureBadge: eN.current,
                                                }),
                                                nicknameIcons: (0, a.jsx)(M.A, { user: t, isVisible: em }),
                                            }),
                                            (0, a.jsx)(I.A, { isPremiumUser: eC, onInteraction: n }),
                                            (0, a.jsx)(L.A, {
                                                user: t,
                                                bio: er?.bio,
                                                hidePersonalInformation: ef,
                                                onClose: n,
                                            }),
                                            ew &&
                                                (0, a.jsx)(R.A, {
                                                    user: t,
                                                    widgets: er?.widgets,
                                                    onOpenUserProfileModal: eR,
                                                }),
                                            (0, a.jsx)(O.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: eR,
                                                onClose: n,
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: et.T_,
                                                children: [
                                                    (0, a.jsx)(w.A.Overlay, {
                                                        className: et.g0,
                                                        children: (0, a.jsxs)($.Gs, {
                                                            children: [
                                                                (0, a.jsx)($.N3, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ee.intl.string(ee.t.s5vZlQ),
                                                                    icon: c.R2l,
                                                                    onClick: eM,
                                                                    ref: eS,
                                                                }),
                                                                (0, a.jsx)($.N3, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, a.jsx)(q.A, {}),
                                                                    sublabel: null != eg && eg,
                                                                    icon: () =>
                                                                        (0, a.jsx)(c.nW6, { status: ex, size: 12 }),
                                                                    trailing:
                                                                        (ev || ex === X.clD.DND) &&
                                                                        (0, a.jsx)(c.a_I, { size: "xxs" }),
                                                                    renderSubmenu: r.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, a.jsx)($.eE, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: et.hQ,
                                                                                  "aria-label": ee.intl.string(
                                                                                      ee.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: eb,
                                                                              });
                                                                          },
                                                                    onClick: r.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, c.mMO)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, a.jsx)(
                                                                                                      o.dWK,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              ee.intl.string(
                                                                                                                  ee.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          a.jsx)(
                                                                                                              c.W1t,
                                                                                                              {
                                                                                                                  "data-menu-migrated":
                                                                                                                      !0,
                                                                                                                  navId: "set-status-submenu-mobile-web",
                                                                                                                  variant:
                                                                                                                      "fixed",
                                                                                                                  "aria-label":
                                                                                                                      ee.intl.string(
                                                                                                                          ee
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
                                                                                                                      eb,
                                                                                                              },
                                                                                                          ),
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
                                                    (0, a.jsx)(w.A.Overlay, {
                                                        className: et.g0,
                                                        children: (0, a.jsxs)($.Gs, {
                                                            children: [
                                                                (0, a.jsx)($.N3, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: c.rMq,
                                                                    label: ee.intl.string(ee.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, J.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, a.jsx)($.eE, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ee.intl.string(ee.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: ej,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    F.p5 &&
                                                                    e_ &&
                                                                    (0, a.jsx)($.N3, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: c.L9S,
                                                                        label: ee.intl.string(ee.t["/AXYnE"]),
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
                                    null != eE && (0, a.jsx)(f.A, { frame: eE, layout: "ACCOUNT_POPOUT" }),
                                    er?.profileEffect != null &&
                                        !eN.current &&
                                        (0, a.jsx)(p.A, { skuId: er.profileEffect.skuId, isHovering: eh }),
                                ],
                            }),
                            eP && eL ? (0, a.jsx)(z.A, { targetElementRef: eS, onClose: n }) : null,
                            (0, a.jsx)(j.A, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
