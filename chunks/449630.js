n.d(t, {
    A: () => el,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(607399),
    i = n(158954),
    s = n(311907),
    o = n(554146),
    c = n(397927),
    d = n(765671),
    u = n(793574),
    m = n(688810),
    p = n(395332),
    h = n(713517),
    x = n(576241),
    g = n(645507),
    f = n(379848),
    b = n(970931),
    v = n(258836),
    j = n(206835),
    _ = n(182592),
    y = n(183555),
    A = n(950191),
    C = n(657331),
    S = n(718019),
    O = n(31432),
    E = n(915614),
    T = n(223330),
    N = n(559506),
    w = n(646986),
    I = n(379654),
    k = n(946356),
    P = n(810396),
    R = n(376285),
    D = n(159218),
    M = n(442228),
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
    q = n(471303),
    Q = n(740142),
    Y = n(33042),
    J = n(347853),
    X = n(652215),
    Z = n(49999),
    $ = n(996988),
    ee = n(985018),
    et = n(423648),
    en = n(183959);

function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}

function el(e) {
    let { currentUser: t, onClose: n, setPopoutRef: el, highlightBadge: er, openedAt: ei } = e,
        es = __OVERLAY__,
        eo = (0, A.Ay)(t.id, void 0),
        { analyticsLocations: ec } = (0, m.Ay)(u.A.USER_PROFILE_ACCOUNT_POPOUT),
        ed = (0, y.pb)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: void 0,
        }),
        { ref: eu, height: em } = (0, d.Ay)(),
        { isHoveringOrFocusing: ep, isHovering: eh } = (0, h.A)(eu);
    l.useEffect(() => {
        null == el || el(eu.current);
    }, [eu, el]),
        l.useEffect(
            () => (
                W.A.setState({
                    isOpen: !0,
                }),
                () =>
                    W.A.setState({
                        isOpen: !1,
                    })
            ),
            [],
        );
    let ex = (0, s.bG)([U.A], () => U.A.getStatus(t.id)),
        eg = L.CY.useSetting(),
        ef = (0, Y.Q)(eg),
        eb = (0, s.bG)([B.A], () => B.A.hidePersonalInformation),
        ev = (0, b.kB)(),
        ej = L.Q_.useSetting(),
        e_ = (0, Y.T)(ex),
        ey = (0, H.j)(n),
        eA = (0, j.A)({
            analyticsLocations: ec,
        }),
        eC = (0, V.TW)(t),
        eS = (0, x.h)({
            location: "UserProfileAccountPopout",
        }),
        eO = l.useRef(null),
        eE = l.useRef(null),
        eT = l.useRef((0, W.A)((e) => e.shouldRenderTenureLevelUp)),
        eN = l.useMemo(() => (0, g.A)(), []),
        [ew, eI] = l.useState(!0);
    l.useEffect(() => {
        setTimeout(() => {
            eI(!1);
        }, 500);
    }, []);
    let ek = (e) => {
            null == n || n(),
                (0, C.openUserProfileModal)(
                    ea(
                        {
                            customStatusPrompt: eN,
                            sourceAnalyticsLocations: ec,
                        },
                        ed,
                        e,
                    ),
                );
        },
        eP = (null == eo ? void 0 : eo.widgets) != null && eo.widgets.length > 0,
        eR = eP ? [] : [o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eD, eM] = (0, f.kn)(eR),
        eL = eD === o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eU = l.useCallback(() => {
            eM(Z.i.USER_DISMISS), n();
        }, [eM, n]),
        eB = l.useCallback(() => {
            eA(), eU();
        }, [eA, eU]),
        eG = (0, p.JY)({
            location: "UserProfileAccountPopout",
        }),
        eF = (0, p.on)({
            location: "UserProfileAccountPopout",
        });
    return (0, a.jsx)(m.f5, {
        value: ec,
        children: (0, a.jsx)(y.of, {
            value: ed,
            openedAt: ei,
            fetchStartedAt: null == eo ? void 0 : eo.fetchStartedAt,
            fetchEndedAt: null == eo ? void 0 : eo.fetchEndedAt,
            isLoaded: null == eo ? void 0 : eo.isLoaded,
            children: (0, a.jsxs)(c.lGe, {
                ref: eu,
                "aria-label": t.username,
                className: et.jC,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.A, {
                        displayProfile: eo,
                        handleOpenUserProfileModal: ek,
                        height: em,
                    }),
                    (0, a.jsxs)(k.A, {
                        className: et.BK,
                        user: t,
                        displayProfile: eo,
                        themeType: $.d.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.wx,
                                children: [
                                    (0, a.jsx)(E.A, {
                                        user: t,
                                        displayProfile: eo,
                                        themeType: $.d.POPOUT,
                                    }),
                                    (0, a.jsx)(S.A, {
                                        user: t,
                                        displayProfile: eo,
                                        themeType: $.d.POPOUT,
                                        onOpenProfile: es ? void 0 : ek,
                                    }),
                                    (0, a.jsx)(D.A, {
                                        ref: eO,
                                        user: t,
                                        themeType: $.d.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eS ? eN : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.HOs, {
                                className: et.rf,
                                style: {
                                    pointerEvents: ew ? "none" : void 0,
                                },
                                children: [
                                    (0, a.jsx)(N.A, {
                                        userId: t.id,
                                    }),
                                    (0, a.jsx)(P.A, {
                                        user: t,
                                        className: et.Xh,
                                        nickname: F.Ay.getName(void 0, null, t),
                                        onOpenProfile: es ? void 0 : ek,
                                        pronouns: null == eo ? void 0 : eo.pronouns,
                                        tags: (0, a.jsx)(O.A, {
                                            displayProfile: eo,
                                            themeType: $.d.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != er ? (e) => e === er : void 0,
                                            shouldGlowTenureBadge: eT.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(R.A, {
                                            user: t,
                                            isVisible: ep,
                                        }),
                                    }),
                                    (0, a.jsx)(M.A, {
                                        user: t,
                                        bio: null == eo ? void 0 : eo.bio,
                                        hidePersonalInformation: eb,
                                        onClose: n,
                                    }),
                                    eP &&
                                        (0, a.jsx)(I.A, {
                                            user: t,
                                            widgets: null == eo ? void 0 : eo.widgets,
                                            onOpenUserProfileModal: ek,
                                        }),
                                    (0, a.jsx)(T.A, {
                                        isPremiumUser: eC,
                                        onInteraction: n,
                                    }),
                                    (0, a.jsx)(w.A, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: ek,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: et.T_,
                                        children: [
                                            (0, a.jsx)(k.A.Overlay, {
                                                className: et.g0,
                                                children: (0, a.jsxs)(z.Gs, {
                                                    children: [
                                                        (0, a.jsx)(z.N3, {
                                                            action: "EDIT_PROFILE",
                                                            label: ee.intl.string(ee.t.s5vZlQ),
                                                            icon: c.R2l,
                                                            onClick: eB,
                                                            trailing: eL
                                                                ? (0, a.jsx)(c.LpS, {
                                                                      text: ee.intl.string(ee.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eE,
                                                        }),
                                                        (0, a.jsx)(z.N3, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(q.A, {}),
                                                            sublabel: null != ef && ef,
                                                            icon: () =>
                                                                (0, a.jsx)(c.nW6, {
                                                                    status: ex,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (ev || ex === X.clD.DND) &&
                                                                (0, a.jsx)(c.a_I, {
                                                                    size: "xxs",
                                                                }),
                                                            renderSubmenu: r.Fr
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(z.eE, {
                                                                          navId: "set-status-submenu",
                                                                          className: et.hQ,
                                                                          "aria-label": ee.intl.string(ee.t.E13trI),
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
                                                                                          var t, n;
                                                                                          let { onClose: l } = e,
                                                                                              r = (function (e, t) {
                                                                                                  if (null == e)
                                                                                                      return {};
                                                                                                  var n,
                                                                                                      a,
                                                                                                      l,
                                                                                                      r = {};
                                                                                                  if (
                                                                                                      "u" >
                                                                                                          typeof Reflect &&
                                                                                                      Reflect.ownKeys
                                                                                                  ) {
                                                                                                      for (
                                                                                                          l = 0,
                                                                                                              n =
                                                                                                                  Reflect.ownKeys(
                                                                                                                      e,
                                                                                                                  );
                                                                                                          l < n.length;
                                                                                                          l++
                                                                                                      )
                                                                                                          (a = n[l]),
                                                                                                              !(
                                                                                                                  t.indexOf(
                                                                                                                      a,
                                                                                                                  ) >= 0
                                                                                                              ) &&
                                                                                                                  Object.prototype.propertyIsEnumerable.call(
                                                                                                                      e,
                                                                                                                      a,
                                                                                                                  ) &&
                                                                                                                  (r[
                                                                                                                      a
                                                                                                                  ] =
                                                                                                                      e[
                                                                                                                          a
                                                                                                                      ]);
                                                                                                      return r;
                                                                                                  }
                                                                                                  if (
                                                                                                      ((r = (function (
                                                                                                          e,
                                                                                                          t,
                                                                                                      ) {
                                                                                                          if (null == e)
                                                                                                              return {};
                                                                                                          var n,
                                                                                                              a,
                                                                                                              l = {},
                                                                                                              r =
                                                                                                                  Object.getOwnPropertyNames(
                                                                                                                      e,
                                                                                                                  );
                                                                                                          for (
                                                                                                              a = 0;
                                                                                                              a <
                                                                                                              r.length;
                                                                                                              a++
                                                                                                          )
                                                                                                              (n =
                                                                                                                  r[a]),
                                                                                                                  !(
                                                                                                                      t.indexOf(
                                                                                                                          n,
                                                                                                                      ) >=
                                                                                                                      0
                                                                                                                  ) &&
                                                                                                                      Object.prototype.propertyIsEnumerable.call(
                                                                                                                          e,
                                                                                                                          n,
                                                                                                                      ) &&
                                                                                                                      (l[
                                                                                                                          n
                                                                                                                      ] =
                                                                                                                          e[
                                                                                                                              n
                                                                                                                          ]);
                                                                                                          return l;
                                                                                                      })(e, t)),
                                                                                                      Object.getOwnPropertySymbols)
                                                                                                  )
                                                                                                      for (
                                                                                                          l = 0,
                                                                                                              n =
                                                                                                                  Object.getOwnPropertySymbols(
                                                                                                                      e,
                                                                                                                  );
                                                                                                          l < n.length;
                                                                                                          l++
                                                                                                      )
                                                                                                          (a = n[l]),
                                                                                                              !(
                                                                                                                  t.indexOf(
                                                                                                                      a,
                                                                                                                  ) >= 0
                                                                                                              ) &&
                                                                                                                  Object.prototype.propertyIsEnumerable.call(
                                                                                                                      e,
                                                                                                                      a,
                                                                                                                  ) &&
                                                                                                                  (r[
                                                                                                                      a
                                                                                                                  ] =
                                                                                                                      e[
                                                                                                                          a
                                                                                                                      ]);
                                                                                                  return r;
                                                                                              })(e, ["onClose"]);
                                                                                          return (0, a.jsx)(
                                                                                              i.dWK,
                                                                                              ((t = ea(
                                                                                                  {
                                                                                                      onClose: l,
                                                                                                  },
                                                                                                  r,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          ee.intl.string(
                                                                                                              ee.t[
                                                                                                                  "3Uj+2p"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.W1t, {
                                                                                                          "data-menu-migration-ready":
                                                                                                              !0,
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              ee.intl.string(
                                                                                                                  ee.t
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              et.YS,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: l,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: e_,
                                                                                                      }),
                                                                                                  }),
                                                                                              Object.getOwnPropertyDescriptors
                                                                                                  ? Object.defineProperties(
                                                                                                        t,
                                                                                                        Object.getOwnPropertyDescriptors(
                                                                                                            n,
                                                                                                        ),
                                                                                                    )
                                                                                                  : (function (e, t) {
                                                                                                        var n =
                                                                                                            Object.keys(
                                                                                                                e,
                                                                                                            );
                                                                                                        if (
                                                                                                            Object.getOwnPropertySymbols
                                                                                                        ) {
                                                                                                            var a =
                                                                                                                Object.getOwnPropertySymbols(
                                                                                                                    e,
                                                                                                                );
                                                                                                            n.push.apply(
                                                                                                                n,
                                                                                                                a,
                                                                                                            );
                                                                                                        }
                                                                                                        return n;
                                                                                                    })(
                                                                                                        Object(n),
                                                                                                    ).forEach(
                                                                                                        function (e) {
                                                                                                            Object.defineProperty(
                                                                                                                t,
                                                                                                                e,
                                                                                                                Object.getOwnPropertyDescriptor(
                                                                                                                    n,
                                                                                                                    e,
                                                                                                                ),
                                                                                                            );
                                                                                                        },
                                                                                                    ),
                                                                                              t),
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
                                            (0, a.jsx)(k.A.Overlay, {
                                                className: et.g0,
                                                children: (0, a.jsxs)(z.Gs, {
                                                    children: [
                                                        (0, a.jsx)(z.N3, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.rMq,
                                                            label: ee.intl.string(ee.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, J.A)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(z.eE, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ee.intl.string(ee.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: ey,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            G.p5 &&
                                                            ej &&
                                                            (0, a.jsx)(z.N3, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.L9S,
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
                            (null == eo ? void 0 : eo.profileEffect) != null &&
                                !eT.current &&
                                (0, a.jsx)(_.A, {
                                    skuId: eo.profileEffect.skuId,
                                    isHovering: eh,
                                }),
                        ],
                    }),
                    eG && eF
                        ? (0, a.jsx)(K.A, {
                              targetElementRef: eE,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(v.A, {}),
                ],
            }),
        }),
    });
}
