n.d(t, {
    Z: function () {
        return S;
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
    d = n(540059),
    u = n(617136),
    p = n(113434),
    m = n(569984),
    x = n(497505),
    g = n(918701),
    h = n(667105),
    f = n(341907),
    v = n(284851),
    C = n(46140),
    j = n(388032),
    _ = n(382128);
let T = [
    {
        value: C.cd.DESKTOP,
        get label() {
            return j.intl.string(j.t.QXc019);
        }
    },
    {
        value: C.cd.CONSOLE,
        get label() {
            return j.intl.string(j.t['8lAfuL']);
        }
    }
];
function E(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case C.cd.DESKTOP:
            (n = (0, o.jsx)(l.ScreenIcon, {})), (t = j.intl.string(j.t.QXc019));
            break;
        case C.cd.CONSOLE:
            (n = (0, o.jsx)(l.GameControllerIcon, {})), (t = j.intl.string(j.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, o.jsxs)('div', {
        className: _.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function S(e) {
    var t, n, s, S;
    let { quest: b, location: N, onReceiveErrorHints: B, contentPosition: y, rowIndex: A } = e,
        w = (0, d.Q3)('QuestTileCta'),
        R = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        I = (0, h.g2)({ useReducedMotion: R }),
        P = (0, u.O5)(),
        k = (0, p._s)({ quest: b }),
        O = (0, p.z)(b),
        q = (0, p.B6)(b.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: M, isEnrolling: L } = (0, i.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(b.id) || m.Z.isFetchingRewardCode(b.id),
            isEnrolling: m.Z.isEnrolling(b.id)
        })),
        D = (null === (t = b.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        Z = (null === (n = b.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        V = Z && (null === (s = b.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        W = (0, g.iQ)(b),
        H = !(0, g.zi)(b),
        Q = (0, p._Q)(b),
        U = (0, g.Xv)(b.config),
        F = (0, g.q8)(b),
        K = (0, p.GU)(b),
        z = (0, p.Rf)(b),
        [Y, G, X] = (0, p.me)(b, z),
        J = H && Q === p.OH.ACCEPTED,
        $ = J && Y === x.LI.SELECT,
        ee = J && !$ && G.length > 1,
        et = r.useCallback(
            (e) => {
                X(e), e === C.cd.DESKTOP && B([]);
            },
            [X, B]
        ),
        {
            text: en,
            onClick: eo,
            tooltipText: er
        } = (0, h.Ks)({
            progressState: Q,
            quest: b,
            location: N,
            isCollectibleQuest: U,
            questContentPosition: y,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: F
        }),
        { startingConsoleQuest: es, startConsoleQuest: ea } = (0, p.GI)({
            questId: b.id,
            beforeRequest: () => {
                I.startAnimation(),
                    P({
                        questId: b.id,
                        questContent: N,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: y,
                        questContentRowIndex: A
                    });
            },
            afterRequest: (e) => {
                I.stopAnimation(), B(e);
            }
        }),
        ei = (null === (S = b.userStatus) || void 0 === S ? void 0 : S.claimedAt) != null,
        el = null;
    return (W && V
        ? (el = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: M,
              onClick: null != eo ? eo : void 0,
              className: _.button,
              children: en
          }))
        : Z
          ? (el = F
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              className: _.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, f.openVideoQuestModal)(b);
                              },
                              children: (0, o.jsxs)('div', {
                                  className: _.ctaInner,
                                  children: [
                                      (0, o.jsx)(l.RetryIcon, {
                                          color: w ? void 0 : l.tokens.colors.WHITE,
                                          className: _.videoQuestPlayIcon
                                      }),
                                      (0, o.jsx)('span', { children: j.intl.string(j.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.BRAND,
                              className: _.button,
                              onClick: null != eo ? eo : void 0,
                              children: en
                          })
                      ]
                  })
                : (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      className: _.button,
                      onClick: null != eo ? eo : void 0,
                      children: en
                  }))
          : H
            ? K.length > 0
                ? (el = (0, o.jsx)(
                      l.TooltipContainer,
                      {
                          text: er,
                          className: _.buttonTooltip,
                          children: (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              disabled: !0,
                              className: _.button,
                              children: en
                          })
                      },
                      er
                  ))
                : H && V
                  ? (el = (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.BRAND,
                        submitting: M,
                        onClick: null != eo ? eo : void 0,
                        className: _.button,
                        children: en
                    }))
                  : H && D && !ei
                    ? (el = $
                          ? (0, o.jsx)(l.Select, {
                                className: _.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: T,
                                placeholder: j.intl.string(j.t.drVw4e),
                                renderOptionLabel: E,
                                select: et,
                                serialize: (e) => {
                                    switch (e) {
                                        case C.cd.DESKTOP:
                                            return j.intl.string(j.t.QXc019);
                                        case C.cd.CONSOLE:
                                            return j.intl.string(j.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, g.$J)(b) && !O && Y !== x.LI.DESKTOP
                            ? k
                                ? (0, o.jsx)(l.Button, {
                                      color: l.ButtonColors.PRIMARY,
                                      className: _.button,
                                      onClick: null != eo ? eo : void 0,
                                      children: en
                                  })
                                : (0, o.jsx)(l.Button, {
                                      color: l.ButtonColors.PRIMARY,
                                      onClick: ea,
                                      disabled: es,
                                      className: _.button,
                                      children: (0, o.jsxs)('div', {
                                          className: _.ctaInner,
                                          children: [I.render(), j.intl.string(j.t.nPThNT)]
                                      })
                                  })
                            : F
                              ? (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.BRAND,
                                    onClick: null != eo ? eo : void 0,
                                    className: _.button,
                                    children: en
                                })
                              : (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    disabled: !0,
                                    className: _.button,
                                    children: j.intl.string(j.t['9KoPyM'])
                                }))
                    : H &&
                      !D &&
                      (el = (0, o.jsx)(l.Button, {
                          submitting: L,
                          color: l.ButtonColors.BRAND,
                          onClick: null != eo ? eo : void 0,
                          className: _.button,
                          children: en
                      }))
            : (el = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: _.button,
                  children: j.intl.format(j.t['14o6QU'], { expiryDate: q })
              })),
    null == el)
        ? null
        : (0, o.jsxs)('div', {
              className: _.container,
              children: [
                  el,
                  ee &&
                      (0, o.jsx)(v.U, {
                          onSelect: et,
                          quest: b,
                          questContent: x.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, o.jsx)(l.Button, {
                                  className: a()(_.button, _.platformSelectorSecondary),
                                  color: l.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, o.jsxs)('div', {
                                      className: _.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case x.LI.DESKTOP:
                                                      return (0, o.jsx)(l.ScreenIcon, { color: 'currentColor' });
                                                  case x.LI.CONSOLE:
                                                      return (0, o.jsx)(l.GameControllerIcon, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(Y),
                                          (0, o.jsx)(l.ChevronSmallDownIcon, {
                                              className: _.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
