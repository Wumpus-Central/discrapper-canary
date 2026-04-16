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
    et = n(337637),
    en = n(886308);
function ea(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: ea, openedAt: ei, className: es } = e,
        el = __OVERLAY__,
        er = (0, y.Ay)(t.id, void 0),
        eo = (0, g.A)(er?.profileFrame?.skuId, "UserProfileAccountPopout"),
        { analyticsLocations: ed } = (0, h.Ay)(m.A.USER_PROFILE_ACCOUNT_POPOUT),
        ec = (0, C.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: eu, height: em } = (0, u.Ay)(),
        { isHoveringOrFocusing: eh, isHovering: ex } = (0, v.A)(eu);
    i.useEffect(() => {
        s?.(eu.current);
    }, [eu, s]),
        i.useEffect(() => (H.A.setState({ isOpen: !0 }), () => H.A.setState({ isOpen: !1 })), []);
    let ep = (0, d.bG)([B.A], () => B.A.getStatus(t.id)),
        eg = U.CY.useSetting(),
        ef = (0, Y.Q)(eg),
        ev = (0, d.bG)([G.A], () => G.A.hidePersonalInformation),
        e_ = (0, b.kB)(),
        eb = U.Q_.useSetting(),
        ej = (0, Y.T)(ep),
        eA = (0, K.j)(n),
        eC = (0, A.A)({ analyticsLocations: ed }),
        ey = (0, W.TW)(t),
        eS = i.useRef(null),
        eE = i.useRef(null),
        eT = i.useRef((0, H.A)((e) => e.shouldRenderTenureLevelUp)),
        eN = i.useMemo(() => (0, _.A)(), []),
        [eI, ek] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            ek(!1);
        }, 500);
    }, []);
    let eO = (e) => {
            n?.(), (0, S.openUserProfileModal)({ customStatusPrompt: eN, sourceAnalyticsLocations: ed, ...ec, ...e });
        },
        eR = er?.widgets != null && er.widgets.length > 0,
        ew = i.useCallback(() => {
            n();
        }, [n]),
        eD = i.useCallback(() => {
            eC(), ew();
        }, [eC, ew]),
        eM = (0, x.QR)({ location: "UserProfileAccountPopout" }),
        eP = (0, x.zd)({ location: "UserProfileAccountPopout" }),
        eL = i.useId();
    return (0, a.jsx)(h.f5, {
        value: ed,
        children: (0, a.jsx)(C.of, {
            value: ec,
            openedAt: ei,
            fetchStartedAt: er?.fetchStartedAt,
            fetchEndedAt: er?.fetchEndedAt,
            isLoaded: er?.isLoaded,
            children: (0, a.jsxs)(c.lGe, {
                ref: eu,
                "aria-labelledby": eL,
                className: l()(et.jC, es, {
                    [et.lO]: er?.profileFrame != null,
                    [et.q$]: eo?.layers.some((e) => {
                        let { type: t, anchor: n } = e;
                        return "staple" === t && "bottom" === n;
                    }),
                }),
                "data-layer": "base",
                children: [
                    (0, a.jsx)(o.AC4, {
                        children: (0, a.jsx)(o.H, { id: eL, children: ee.intl.string(ee.t["5fWB8U"]) }),
                    }),
                    (0, a.jsxs)(c.Fmo, {
                        children: [
                            (0, a.jsx)(Q.A, { displayProfile: er, handleOpenUserProfileModal: eO, height: em }),
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
                                                onOpenProfile: el ? void 0 : eO,
                                            }),
                                            (0, a.jsx)(P.A, {
                                                ref: eS,
                                                user: t,
                                                themeType: Z.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: eN,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.HOs, {
                                        className: et.rf,
                                        style: { pointerEvents: eI ? "none" : void 0 },
                                        children: [
                                            (0, a.jsx)(k.A, { userId: t.id }),
                                            (0, a.jsx)(D.A, {
                                                user: t,
                                                className: et.Xh,
                                                nickname: V.Ay.getName(void 0, null, t),
                                                onOpenProfile: el ? void 0 : eO,
                                                pronouns: er?.pronouns,
                                                tags: (0, a.jsx)(T.A, {
                                                    displayProfile: er,
                                                    themeType: Z.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != ea ? (e) => e === ea : void 0,
                                                    shouldGlowTenureBadge: eT.current,
                                                }),
                                                nicknameIcons: (0, a.jsx)(M.A, { user: t, isVisible: eh }),
                                            }),
                                            (0, a.jsx)(I.A, { isPremiumUser: ey, onInteraction: n }),
                                            (0, a.jsx)(L.A, {
                                                user: t,
                                                bio: er?.bio,
                                                hidePersonalInformation: ev,
                                                onClose: n,
                                            }),
                                            eR &&
                                                (0, a.jsx)(R.A, {
                                                    user: t,
                                                    widgets: er?.widgets,
                                                    onOpenUserProfileModal: eO,
                                                }),
                                            (0, a.jsx)(O.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: eO,
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
                                                                    onClick: eD,
                                                                    ref: eE,
                                                                }),
                                                                (0, a.jsx)($.N3, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, a.jsx)(q.A, {}),
                                                                    sublabel: null != ef && ef,
                                                                    icon: () =>
                                                                        (0, a.jsx)(c.nW6, { status: ep, size: 12 }),
                                                                    trailing:
                                                                        (e_ || ep === X.clD.DND) &&
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
                                                                                  children: ej,
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
                                                                                                                      ej,
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
                                                                            children: eA,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    F.p5 &&
                                                                    eb &&
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
                                    null != eo && (0, a.jsx)(f.A, { frame: eo, layout: "ACCOUNT_POPOUT" }),
                                    er?.profileEffect != null &&
                                        !eT.current &&
                                        (0, a.jsx)(p.A, { skuId: er.profileEffect.skuId, isHovering: ex }),
                                ],
                            }),
                            eM && eP ? (0, a.jsx)(z.A, { targetElementRef: eE, onClose: n }) : null,
                            (0, a.jsx)(j.A, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
