n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(481060),
    c = n(607070),
    d = n(617136),
    u = n(113434),
    p = n(569984),
    m = n(497505),
    x = n(918701),
    f = n(667105),
    g = n(341907),
    h = n(284851),
    C = n(46140),
    v = n(388032),
    j = n(382128);
let _ = [
    {
        value: C.cd.DESKTOP,
        get label() {
            return v.intl.string(v.t.QXc019);
        }
    },
    {
        value: C.cd.CONSOLE,
        get label() {
            return v.intl.string(v.t['8lAfuL']);
        }
    }
];
function b(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case C.cd.DESKTOP:
            (n = (0, o.jsx)(l.ScreenIcon, {})), (t = v.intl.string(v.t.QXc019));
            break;
        case C.cd.CONSOLE:
            (n = (0, o.jsx)(l.GameControllerIcon, {})), (t = v.intl.string(v.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, o.jsxs)('div', {
        className: j.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function E(e) {
    var t, n, s, E;
    let { quest: N, location: B, onReceiveErrorHints: T, contentPosition: S, rowIndex: y } = e,
        A = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        R = (0, f.g2)({ useReducedMotion: A }),
        w = (0, d.O5)(),
        I = (0, u._s)({ quest: N }),
        k = (0, u.z)(N),
        q = (0, u.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: P, isEnrolling: M } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id)
        })),
        O = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        W = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        L = W && (null === (s = N.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        Z = (0, x.iQ)(N),
        Q = !(0, x.zi)(N),
        D = (0, u._Q)(N),
        H = (0, x.Xv)(N.config),
        U = (0, x.q8)(N),
        V = (0, u.GU)(N),
        z = (0, u.Rf)(N),
        [F, G, K] = (0, u.me)(N, z),
        Y = Q && D === u.OH.ACCEPTED,
        X = Y && F === m.LI.SELECT,
        J = Y && !X && G.length > 1,
        $ = r.useCallback(
            (e) => {
                K(e), e === C.cd.DESKTOP && T([]);
            },
            [K, T]
        ),
        {
            text: ee,
            onClick: et,
            tooltipText: en
        } = (0, f.Ks)({
            progressState: D,
            quest: N,
            location: B,
            isCollectibleQuest: H,
            questContentPosition: S,
            questContentRowIndex: y,
            inGiftInventory: !0,
            isVideoQuest: U
        }),
        { startingConsoleQuest: eo, startConsoleQuest: er } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
                R.startAnimation(),
                    w({
                        questId: N.id,
                        questContent: B,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: S,
                        questContentRowIndex: y
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), T(e);
            }
        }),
        es = (null === (E = N.userStatus) || void 0 === E ? void 0 : E.claimedAt) != null,
        ea = null;
    return (Z && L
        ? (ea = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: P,
              onClick: null != et ? et : void 0,
              className: j.button,
              children: ee
          }))
        : W
          ? (ea = U
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, g.openVideoQuestModal)(N);
                              },
                              children: (0, o.jsxs)('div', {
                                  className: j.ctaInner,
                                  children: [
                                      (0, o.jsx)(l.RetryIcon, {
                                          color: l.tokens.colors.WHITE,
                                          className: j.videoQuestPlayIcon
                                      }),
                                      (0, o.jsx)('span', { children: v.intl.string(v.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.BRAND,
                              className: j.button,
                              onClick: null != et ? et : void 0,
                              children: ee
                          })
                      ]
                  })
                : (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      className: j.button,
                      onClick: null != et ? et : void 0,
                      children: ee
                  }))
          : Q
            ? V.length > 0
                ? (ea = (0, o.jsx)(
                      l.TooltipContainer,
                      {
                          text: en,
                          className: j.buttonTooltip,
                          children: (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              disabled: !0,
                              className: j.button,
                              children: ee
                          })
                      },
                      en
                  ))
                : Q && L
                  ? (ea = (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.BRAND,
                        submitting: P,
                        onClick: null != et ? et : void 0,
                        className: j.button,
                        children: ee
                    }))
                  : Q && O && !es
                    ? (ea = X
                          ? (0, o.jsx)(l.Select, {
                                className: j.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: _,
                                placeholder: v.intl.string(v.t.drVw4e),
                                renderOptionLabel: b,
                                select: $,
                                serialize: (e) => {
                                    switch (e) {
                                        case C.cd.DESKTOP:
                                            return v.intl.string(v.t.QXc019);
                                        case C.cd.CONSOLE:
                                            return v.intl.string(v.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, x.$J)(N) && !k && F !== m.LI.DESKTOP
                            ? I
                                ? (0, o.jsx)(l.Button, {
                                      color: l.ButtonColors.PRIMARY,
                                      className: j.button,
                                      onClick: null != et ? et : void 0,
                                      children: ee
                                  })
                                : (0, o.jsx)(l.Button, {
                                      color: l.ButtonColors.PRIMARY,
                                      onClick: er,
                                      disabled: eo,
                                      className: j.button,
                                      children: (0, o.jsxs)('div', {
                                          className: j.ctaInner,
                                          children: [R.render(), v.intl.string(v.t.nPThNT)]
                                      })
                                  })
                            : U
                              ? (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.BRAND,
                                    onClick: null != et ? et : void 0,
                                    className: j.button,
                                    children: ee
                                })
                              : (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    disabled: !0,
                                    className: j.button,
                                    children: v.intl.string(v.t['9KoPyM'])
                                }))
                    : Q &&
                      !O &&
                      (ea = (0, o.jsx)(l.Button, {
                          submitting: M,
                          color: l.ButtonColors.BRAND,
                          onClick: null != et ? et : void 0,
                          className: j.button,
                          children: ee
                      }))
            : (ea = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t['14o6QU'], { expiryDate: q })
              })),
    null == ea)
        ? null
        : (0, o.jsxs)('div', {
              className: j.container,
              children: [
                  ea,
                  J &&
                      (0, o.jsx)(h.U, {
                          onSelect: $,
                          quest: N,
                          questContent: m.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, o.jsx)(l.Button, {
                                  className: a()(j.button, j.platformSelectorSecondary),
                                  color: l.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, o.jsxs)('div', {
                                      className: j.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case m.LI.DESKTOP:
                                                      return (0, o.jsx)(l.ScreenIcon, { color: 'currentColor' });
                                                  case m.LI.CONSOLE:
                                                      return (0, o.jsx)(l.GameControllerIcon, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(F),
                                          (0, o.jsx)(l.ChevronSmallDownIcon, {
                                              className: j.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
