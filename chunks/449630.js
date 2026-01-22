n.d(t, { A: () => ei }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(607399),
    r = n(158954),
    s = n(311907),
    o = n(554146),
    c = n(397927),
    d = n(765671),
    u = n(793574),
    m = n(688810),
    p = n(395332),
    h = n(713517),
    f = n(576241),
    x = n(645507),
    b = n(379848),
    g = n(970931),
    v = n(258836),
    j = n(206835),
    y = n(182592),
    _ = n(183555),
    A = n(950191),
    C = n(657331),
    S = n(718019),
    O = n(31432),
    E = n(915614),
    N = n(223330),
    T = n(559506),
    I = n(646986),
    w = n(379654),
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
    H = n(832248),
    W = n(115660),
    K = n(962303),
    z = n(163233),
    q = n(95551),
    Q = n(471303),
    Y = n(740142),
    J = n(33042),
    X = n(347853),
    $ = n(652215),
    Z = n(49999),
    ee = n(996988),
    et = n(985018),
    en = n(423648),
    ea = n(183959);
function el(e) {
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
function ei(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: ei,
            highlightBadge: er,
            openedAt: es,
            guildId: eo,
            guildProfileEnabled: ec,
        } = e,
        ed = __OVERLAY__,
        eu = (0, A.Ay)(t.id, eo),
        { analyticsLocations: em } = (0, m.Ay)(u.A.USER_PROFILE_ACCOUNT_POPOUT),
        ep = (0, _.pb)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: eo,
        }),
        { ref: eh, height: ef } = (0, d.Ay)(),
        { isHoveringOrFocusing: ex, isHovering: eb } = (0, h.A)(eh);
    l.useEffect(() => {
        null == ei || ei(eh.current);
    }, [eh, ei]),
        l.useEffect(() => (H.A.setState({ isOpen: !0 }), () => H.A.setState({ isOpen: !1 })), []);
    let eg = (0, s.bG)([U.A], () => U.A.getStatus(t.id)),
        ev = L.CY.useSetting(),
        ej = (0, J.Q)(ev),
        ey = (0, s.bG)([B.A], () => B.A.hidePersonalInformation),
        e_ = (0, g.kB)(),
        eA = L.Q_.useSetting(),
        eC = (0, J.T)(eg),
        eS = (0, K.j)(n),
        eO = (0, j.A)({ analyticsLocations: em }),
        eE = (0, V.TW)(t),
        eN = (0, f.h)({ location: "UserProfileAccountPopout" }),
        eT = l.useRef(null),
        eI = l.useRef(null),
        ew = l.useRef((0, H.A)((e) => e.shouldRenderTenureLevelUp)),
        ek = l.useMemo(() => (0, x.A)(), []),
        [eP, eR] = l.useState(!0);
    l.useEffect(() => {
        setTimeout(() => {
            eR(!1);
        }, 500);
    }, []);
    let eD = (e) => {
            null == n || n(),
                (0, C.openUserProfileModal)(
                    el(
                        {
                            customStatusPrompt: ek,
                            sourceAnalyticsLocations: em,
                        },
                        ep,
                        e,
                    ),
                );
        },
        eM = (null == eu ? void 0 : eu.widgets) != null && eu.widgets.length > 0,
        eL = eM ? [] : [o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eU, eB] = (0, b.kn)(eL),
        eG = eU === o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eF = l.useCallback(() => {
            eB(Z.i.USER_DISMISS), n();
        }, [eB, n]),
        eV = l.useCallback(() => {
            (ec && null != eo) || (eO(), eF());
        }, [eO, eF, ec, eo]),
        eH = ec && null != eo,
        eW = (0, W.g)(eo, em, eG, n, eF),
        eK = (0, p.JY)({ location: "UserProfileAccountPopout" }),
        ez = (0, p.on)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.f5, {
        value: em,
        children: (0, a.jsx)(_.of, {
            value: ep,
            openedAt: es,
            fetchStartedAt: null == eu ? void 0 : eu.fetchStartedAt,
            fetchEndedAt: null == eu ? void 0 : eu.fetchEndedAt,
            isLoaded: null == eu ? void 0 : eu.isLoaded,
            children: (0, a.jsxs)(c.lGe, {
                ref: eh,
                "aria-label": t.username,
                className: en.jC,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Y.A, {
                        displayProfile: eu,
                        handleOpenUserProfileModal: eD,
                        height: ef,
                    }),
                    (0, a.jsxs)(k.A, {
                        className: en.BK,
                        user: t,
                        displayProfile: eu,
                        themeType: ee.d.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.wx,
                                children: [
                                    (0, a.jsx)(E.A, {
                                        user: t,
                                        displayProfile: eu,
                                        themeType: ee.d.POPOUT,
                                    }),
                                    (0, a.jsx)(S.A, {
                                        user: t,
                                        displayProfile: eu,
                                        themeType: ee.d.POPOUT,
                                        onOpenProfile: ed ? void 0 : eD,
                                    }),
                                    (0, a.jsx)(D.A, {
                                        ref: eT,
                                        user: t,
                                        themeType: ee.d.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eN ? ek : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.HOs, {
                                className: en.rf,
                                style: { pointerEvents: eP ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(T.A, { userId: t.id }),
                                    (0, a.jsx)(P.A, {
                                        user: t,
                                        className: en.Xh,
                                        nickname: F.Ay.getName(eo, null, t),
                                        onOpenProfile: ed ? void 0 : eD,
                                        pronouns: null == eu ? void 0 : eu.pronouns,
                                        tags: (0, a.jsx)(O.A, {
                                            displayProfile: eu,
                                            themeType: ee.d.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != er ? (e) => e === er : void 0,
                                            shouldGlowTenureBadge: ew.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(R.A, {
                                            user: t,
                                            isVisible: ex,
                                        }),
                                    }),
                                    (0, a.jsx)(M.A, {
                                        user: t,
                                        bio: null == eu ? void 0 : eu.bio,
                                        hidePersonalInformation: ey,
                                        onClose: n,
                                    }),
                                    eM &&
                                        (0, a.jsx)(w.A, {
                                            user: t,
                                            widgets: null == eu ? void 0 : eu.widgets,
                                            onOpenUserProfileModal: eD,
                                        }),
                                    (0, a.jsx)(N.A, {
                                        isPremiumUser: eE,
                                        onInteraction: n,
                                    }),
                                    (0, a.jsx)(I.A, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: eD,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: en.T_,
                                        children: [
                                            (0, a.jsx)(k.A.Overlay, {
                                                className: en.g0,
                                                children: (0, a.jsxs)(q.Gs, {
                                                    children: [
                                                        (0, a.jsx)(q.N3, {
                                                            action: "EDIT_PROFILE",
                                                            label: ec
                                                                ? et.intl.string(et.t.Ip9nBS)
                                                                : et.intl.string(et.t.s5vZlQ),
                                                            icon: c.R2l,
                                                            onClick: eV,
                                                            renderSubmenu: eH
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(q.eE, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": et.intl.string(et.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eW,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eG
                                                                ? (0, a.jsx)(c.LpS, {
                                                                      text: et.intl.string(et.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eI,
                                                        }),
                                                        (0, a.jsx)(q.N3, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Q.A, {}),
                                                            sublabel: null != ej && ej,
                                                            icon: () =>
                                                                (0, a.jsx)(c.nW6, {
                                                                    status: eg,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (e_ || eg === $.clD.DND) &&
                                                                (0, a.jsx)(c.a_I, { size: "xxs" }),
                                                            renderSubmenu: i.Fr
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(q.eE, {
                                                                          navId: "set-status-submenu",
                                                                          className: en.hQ,
                                                                          "aria-label": et.intl.string(et.t.E13trI),
                                                                          onClose: t,
                                                                          children: eC,
                                                                      });
                                                                  },
                                                            onClick: i.Fr
                                                                ? () => {
                                                                      n(),
                                                                          (0, c.mMO)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          var t, n;
                                                                                          let { onClose: l } = e,
                                                                                              i = (function (e, t) {
                                                                                                  if (null == e)
                                                                                                      return {};
                                                                                                  var n,
                                                                                                      a,
                                                                                                      l,
                                                                                                      i = {};
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
                                                                                                                  (i[
                                                                                                                      a
                                                                                                                  ] =
                                                                                                                      e[
                                                                                                                          a
                                                                                                                      ]);
                                                                                                      return i;
                                                                                                  }
                                                                                                  if (
                                                                                                      ((i = (function (
                                                                                                          e,
                                                                                                          t,
                                                                                                      ) {
                                                                                                          if (null == e)
                                                                                                              return {};
                                                                                                          var n,
                                                                                                              a,
                                                                                                              l = {},
                                                                                                              i =
                                                                                                                  Object.getOwnPropertyNames(
                                                                                                                      e,
                                                                                                                  );
                                                                                                          for (
                                                                                                              a = 0;
                                                                                                              a <
                                                                                                              i.length;
                                                                                                              a++
                                                                                                          )
                                                                                                              (n =
                                                                                                                  i[a]),
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
                                                                                                                  (i[
                                                                                                                      a
                                                                                                                  ] =
                                                                                                                      e[
                                                                                                                          a
                                                                                                                      ]);
                                                                                                  return i;
                                                                                              })(e, ["onClose"]);
                                                                                          return (0, a.jsx)(
                                                                                              r.dWK,
                                                                                              ((t = el(
                                                                                                  { onClose: l },
                                                                                                  i,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          et.intl.string(
                                                                                                              et.t[
                                                                                                                  "3Uj+2p"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.W1t, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              et.intl.string(
                                                                                                                  et.t
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              en.YS,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: l,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eC,
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
                                                className: en.g0,
                                                children: (0, a.jsxs)(q.Gs, {
                                                    children: [
                                                        (0, a.jsx)(q.N3, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.rMq,
                                                            label: et.intl.string(et.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, X.A)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(q.eE, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": et.intl.string(et.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eS,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            G.p5 &&
                                                            eA &&
                                                            (0, a.jsx)(q.N3, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.L9S,
                                                                label: et.intl.string(et.t["/AXYnE"]),
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
                            (null == eu ? void 0 : eu.profileEffect) != null &&
                                !ew.current &&
                                (0, a.jsx)(y.A, {
                                    skuId: eu.profileEffect.skuId,
                                    isHovering: eb,
                                }),
                        ],
                    }),
                    !eH && eK && ez
                        ? (0, a.jsx)(z.A, {
                              targetElementRef: eI,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(v.A, {}),
                ],
            }),
        }),
    });
}
