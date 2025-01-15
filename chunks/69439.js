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
    g = n(667105),
    h = n(341907),
    f = n(284851),
    v = n(46140),
    C = n(388032),
    j = n(984730);
let _ = [
    {
        value: v.cd.DESKTOP,
        get label() {
            return C.intl.string(C.t.QXc019);
        }
    },
    {
        value: v.cd.CONSOLE,
        get label() {
            return C.intl.string(C.t['8lAfuL']);
        }
    }
];
function T(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case v.cd.DESKTOP:
            (n = (0, o.jsx)(l.ScreenIcon, {})), (t = C.intl.string(C.t.QXc019));
            break;
        case v.cd.CONSOLE:
            (n = (0, o.jsx)(l.GameControllerIcon, {})), (t = C.intl.string(C.t['8lAfuL']));
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
    let { quest: S, location: b, onReceiveErrorHints: N, contentPosition: B, rowIndex: y } = e,
        A = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        w = (0, g.g2)({ useReducedMotion: A }),
        R = (0, d.O5)(),
        I = (0, u._s)({ quest: S }),
        P = (0, u.z)(S),
        k = (0, u.B6)(S.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: O, isEnrolling: q } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(S.id) || p.Z.isFetchingRewardCode(S.id),
            isEnrolling: p.Z.isEnrolling(S.id)
        })),
        M = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        L = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        D = L && (null === (s = S.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        Z = (0, x.iQ)(S),
        V = !(0, x.zi)(S),
        W = (0, u._Q)(S),
        H = (0, x.Xv)(S.config),
        Q = (0, x.q8)(S),
        U = (0, u.GU)(S),
        F = (0, u.Rf)(S),
        [K, z, Y] = (0, u.me)(S, F),
        G = V && W === u.OH.ACCEPTED,
        X = G && K === m.LI.SELECT,
        J = G && !X && z.length > 1,
        $ = r.useCallback(
            (e) => {
                Y(e), e === v.cd.DESKTOP && N([]);
            },
            [Y, N]
        ),
        {
            text: ee,
            onClick: et,
            tooltipText: en
        } = (0, g.Ks)({
            progressState: W,
            quest: S,
            location: b,
            isCollectibleQuest: H,
            questContentPosition: B,
            questContentRowIndex: y,
            inGiftInventory: !0,
            isVideoQuest: Q
        }),
        { startingConsoleQuest: eo, startConsoleQuest: er } = (0, u.GI)({
            questId: S.id,
            beforeRequest: () => {
                w.startAnimation(),
                    R({
                        questId: S.id,
                        questContent: b,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: B,
                        questContentRowIndex: y
                    });
            },
            afterRequest: (e) => {
                w.stopAnimation(), N(e);
            }
        }),
        es = (null === (E = S.userStatus) || void 0 === E ? void 0 : E.claimedAt) != null,
        ea = null;
    return (Z && D
        ? (ea = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: O,
              onClick: null != et ? et : void 0,
              className: j.button,
              children: ee
          }))
        : L
          ? (ea = Q
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, h.openVideoQuestModal)(S);
                              },
                              children: (0, o.jsxs)('div', {
                                  className: j.ctaInner,
                                  children: [
                                      (0, o.jsx)(l.RetryIcon, {
                                          color: l.tokens.colors.WHITE,
                                          className: j.videoQuestPlayIcon
                                      }),
                                      (0, o.jsx)('span', { children: C.intl.string(C.t.YsCuyM) })
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
          : V
            ? U.length > 0
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
                : V && D
                  ? (ea = (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.BRAND,
                        submitting: O,
                        onClick: null != et ? et : void 0,
                        className: j.button,
                        children: ee
                    }))
                  : V && M && !es
                    ? (ea = X
                          ? (0, o.jsx)(l.Select, {
                                className: j.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: _,
                                placeholder: C.intl.string(C.t.drVw4e),
                                renderOptionLabel: T,
                                select: $,
                                serialize: (e) => {
                                    switch (e) {
                                        case v.cd.DESKTOP:
                                            return C.intl.string(C.t.QXc019);
                                        case v.cd.CONSOLE:
                                            return C.intl.string(C.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, x.$J)(S) && !P && K !== m.LI.DESKTOP
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
                                          children: [w.render(), C.intl.string(C.t.nPThNT)]
                                      })
                                  })
                            : Q
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
                                    children: C.intl.string(C.t['9KoPyM'])
                                }))
                    : V &&
                      !M &&
                      (ea = (0, o.jsx)(l.Button, {
                          submitting: q,
                          color: l.ButtonColors.BRAND,
                          onClick: null != et ? et : void 0,
                          className: j.button,
                          children: ee
                      }))
            : (ea = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: C.intl.format(C.t['14o6QU'], { expiryDate: k })
              })),
    null == ea)
        ? null
        : (0, o.jsxs)('div', {
              className: j.container,
              children: [
                  ea,
                  J &&
                      (0, o.jsx)(f.U, {
                          onSelect: $,
                          quest: S,
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
                                          })(K),
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
