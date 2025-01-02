n.d(t, {
    Z: function () {
        return N;
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
    g = n(667105),
    f = n(341907),
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
function N(e) {
    var t, n, s, N;
    let { quest: E, location: B, onReceiveErrorHints: T, contentPosition: S, rowIndex: A } = e,
        y = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        R = (0, g.g2)({ useReducedMotion: y }),
        w = (0, u._s)({ quest: E }),
        I = (0, u.z)(E),
        k = (0, u.B6)(E.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: q, isEnrolling: P } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(E.id) || p.Z.isFetchingRewardCode(E.id),
            isEnrolling: p.Z.isEnrolling(E.id)
        })),
        M = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        O = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        W = O && (null === (s = E.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        L = (0, x.iQ)(E),
        Z = !(0, x.zi)(E),
        Q = (0, u._Q)(E),
        D = (0, x.Xv)(E.config),
        H = (0, x.q8)(E),
        V = (0, u.GU)(E),
        U = (0, u.Rf)(E),
        [z, F, G] = (0, u.me)(E, U),
        Y = Z && Q === u.OH.ACCEPTED,
        K = Y && z === m.LI.SELECT,
        X = Y && !K && F.length > 1,
        J = r.useCallback(
            (e) => {
                G(e), e === C.cd.DESKTOP && T([]);
            },
            [G, T]
        ),
        {
            text: $,
            onClick: ee,
            tooltipText: et
        } = (0, g.Ks)({
            progressState: Q,
            quest: E,
            location: B,
            isCollectibleQuest: D,
            questContentPosition: S,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: H
        }),
        { startingConsoleQuest: en, startConsoleQuest: eo } = (0, u.GI)({
            questId: E.id,
            beforeRequest: () => {
                R.startAnimation(),
                    (0, d._3)({
                        questId: E.id,
                        questContent: B,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: S,
                        questContentRowIndex: A
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), T(e);
            }
        }),
        er = (null === (N = E.userStatus) || void 0 === N ? void 0 : N.claimedAt) != null,
        es = null;
    return (L && W
        ? (es = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: q,
              onClick: null != ee ? ee : void 0,
              className: j.button,
              children: $
          }))
        : O
          ? (es = H
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, f.openVideoQuestModal)(E);
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
                              onClick: null != ee ? ee : void 0,
                              children: $
                          })
                      ]
                  })
                : (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      className: j.button,
                      onClick: null != ee ? ee : void 0,
                      children: $
                  }))
          : Z
            ? V.length > 0
                ? (es = (0, o.jsx)(
                      l.TooltipContainer,
                      {
                          text: et,
                          className: j.buttonTooltip,
                          children: (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              disabled: !0,
                              className: j.button,
                              children: $
                          })
                      },
                      et
                  ))
                : Z && W
                  ? (es = (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.BRAND,
                        submitting: q,
                        onClick: null != ee ? ee : void 0,
                        className: j.button,
                        children: $
                    }))
                  : Z && M && !er
                    ? (es = K
                          ? (0, o.jsx)(l.Select, {
                                className: j.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: _,
                                placeholder: v.intl.string(v.t.drVw4e),
                                renderOptionLabel: b,
                                select: J,
                                serialize: (e) => {
                                    switch (e) {
                                        case C.cd.DESKTOP:
                                            return v.intl.string(v.t.QXc019);
                                        case C.cd.CONSOLE:
                                            return v.intl.string(v.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, x.$J)(E) && !I && z !== m.LI.DESKTOP
                            ? w
                                ? (0, o.jsx)(l.Button, {
                                      color: l.ButtonColors.PRIMARY,
                                      className: j.button,
                                      onClick: null != ee ? ee : void 0,
                                      children: $
                                  })
                                : (0, o.jsx)(l.Button, {
                                      color: l.ButtonColors.PRIMARY,
                                      onClick: eo,
                                      disabled: en,
                                      className: j.button,
                                      children: (0, o.jsxs)('div', {
                                          className: j.ctaInner,
                                          children: [R.render(), v.intl.string(v.t.nPThNT)]
                                      })
                                  })
                            : H
                              ? (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.BRAND,
                                    onClick: null != ee ? ee : void 0,
                                    className: j.button,
                                    children: $
                                })
                              : (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    disabled: !0,
                                    className: j.button,
                                    children: v.intl.string(v.t['9KoPyM'])
                                }))
                    : Z &&
                      !M &&
                      (es = (0, o.jsx)(l.Button, {
                          submitting: P,
                          color: l.ButtonColors.BRAND,
                          onClick: null != ee ? ee : void 0,
                          className: j.button,
                          children: $
                      }))
            : (es = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t['14o6QU'], { expiryDate: k })
              })),
    null == es)
        ? null
        : (0, o.jsxs)('div', {
              className: j.container,
              children: [
                  es,
                  X &&
                      (0, o.jsx)(h.U, {
                          onSelect: J,
                          quest: E,
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
                                          })(z),
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
