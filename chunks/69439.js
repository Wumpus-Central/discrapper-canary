(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(617136),
    p = n(113434),
    m = n(569984),
    f = n(497505),
    g = n(918701),
    x = n(667105),
    h = n(341907),
    b = n(284851),
    j = n(46140),
    _ = n(388032),
    v = n(142468);
let y = [
    {
        value: j.cd.DESKTOP,
        get label() {
            return _.intl.string(_.t.QXc019);
        }
    },
    {
        value: j.cd.CONSOLE,
        get label() {
            return _.intl.string(_.t['8lAfuL']);
        }
    }
];
function C(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case j.cd.DESKTOP:
            ((n = (0, r.jsx)(c.pzj, {})), (t = _.intl.string(_.t.QXc019)));
            break;
        case j.cd.CONSOLE:
            ((n = (0, r.jsx)(c.iWm, {})), (t = _.intl.string(_.t['8lAfuL'])));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)('div', {
        className: v.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function O(e) {
    var t, n, o, O;
    let { quest: E, questContent: S, onReceiveErrorHints: w, contentPosition: P, rowIndex: T, sourceQuestContent: N } = e,
        A = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        R = (0, x.g2)({ useReducedMotion: A }),
        B = (0, d.O5)(),
        k = (0, p._s)({ quest: E }),
        q = (0, p.z)(E),
        I = (0, p.B6)(E.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        {
            isClaiming: D,
            isEnrolling: Q,
            isQuestEnrollmentBlocked: V
        } = (0, i.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(E.id) || m.Z.isFetchingRewardCode(E.id),
            isEnrolling: m.Z.isEnrolling(E.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil
        })),
        L = (null == (t = E.userStatus) ? void 0 : t.enrolledAt) != null,
        M = (null == (n = E.userStatus) ? void 0 : n.completedAt) != null,
        W = M && (null == (o = E.userStatus) ? void 0 : o.claimedAt) == null,
        Z = (0, g.iQ)(E),
        U = !(0, g.zi)(E),
        H = (0, p._Q)(E),
        z = (0, g.Xv)(E.config),
        F = (0, g.PB)(E),
        X = (0, g.HJ)(E),
        K = (0, g.Vl)(E),
        Y = s.useRef(null),
        G = (0, p.Rf)(E),
        [J, $, ee] = (0, p.me)(E, G),
        et = U && H === p.OH.ACCEPTED,
        en = et && J === f.LI.SELECT,
        er = et && !en && $.length > 1,
        es = s.useCallback(
            (e) => {
                (ee(e), e === j.cd.DESKTOP && w([]));
            },
            [ee, w]
        ),
        { text: eo, onClick: ea } = (0, x.Ks)({
            progressState: H,
            quest: E,
            questContent: S,
            isCollectibleQuest: z,
            questContentPosition: P,
            questContentRowIndex: T,
            inGiftInventory: !0,
            isVideoQuest: F,
            inGameQuest: K,
            sourceQuestContent: N
        }),
        { startingConsoleQuest: ei, startConsoleQuest: el } = (0, p.GI)({
            questId: E.id,
            beforeRequest: () => {
                (R.startAnimation(),
                    B({
                        questId: E.id,
                        questContent: S,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: P,
                        questContentRowIndex: T,
                        sourceQuestContent: N
                    }));
            },
            afterRequest: (e) => {
                (R.stopAnimation(), w(e));
            }
        }),
        ec = (null == (O = E.userStatus) ? void 0 : O.claimedAt) != null,
        eu = null;
    return (Z && W
        ? (eu = (0, r.jsx)(l.zx, {
              color: l.Tt.BRAND,
              submitting: D,
              onClick: null != ea ? ea : void 0,
              className: v.button,
              children: eo
          }))
        : M
          ? (eu = F
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.zx, {
                              color: l.Tt.PRIMARY,
                              className: v.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, h.openVideoQuestModal)({
                                      quest: E,
                                      sourceQuestContent: N
                                  });
                              },
                              children: (0, r.jsxs)('div', {
                                  className: v.ctaInner,
                                  children: [(0, r.jsx)(c.Oe7, { className: v.videoQuestPlayIcon }), (0, r.jsx)('span', { children: _.intl.string(_.t.YsCuyM) })]
                              })
                          }),
                          (0, r.jsx)(l.zx, {
                              color: l.Tt.BRAND,
                              className: v.button,
                              onClick: null != ea ? ea : void 0,
                              children: eo
                          })
                      ]
                  })
                : (0, r.jsx)(l.zx, {
                      color: l.Tt.BRAND,
                      className: v.button,
                      onClick: null != ea ? ea : void 0,
                      children: eo
                  }))
          : U
            ? U && W
                ? (eu = (0, r.jsx)(l.zx, {
                      color: l.Tt.BRAND,
                      submitting: D,
                      onClick: null != ea ? ea : void 0,
                      className: v.button,
                      children: eo
                  }))
                : X
                  ? (eu = (0, r.jsx)(l.zx, {
                        color: l.Tt.PRIMARY,
                        disabled: !0,
                        className: v.button,
                        children: _.intl.string(_.t.BkZhUF)
                    }))
                  : U && L && !ec
                    ? (eu = en
                          ? (0, r.jsx)(c.PhF, {
                                className: v.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: y,
                                placeholder: _.intl.string(_.t.drVw4e),
                                renderOptionLabel: C,
                                select: es,
                                serialize: (e) => {
                                    switch (e) {
                                        case j.cd.DESKTOP:
                                            return _.intl.string(_.t.QXc019);
                                        case j.cd.CONSOLE:
                                            return _.intl.string(_.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, g.$J)(E) && !q && J !== f.LI.DESKTOP
                            ? k
                                ? (0, r.jsx)(l.zx, {
                                      color: l.Tt.PRIMARY,
                                      className: v.button,
                                      onClick: null != ea ? ea : void 0,
                                      children: eo
                                  })
                                : (0, r.jsx)(l.zx, {
                                      color: l.Tt.PRIMARY,
                                      onClick: el,
                                      disabled: ei,
                                      className: v.button,
                                      children: (0, r.jsxs)('div', {
                                          className: v.ctaInner,
                                          children: [R.render(), _.intl.string(_.t.nPThNT)]
                                      })
                                  })
                            : F || (K && E.config.features.includes(j.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(l.zx, {
                                    color: l.Tt.BRAND,
                                    onClick: null != ea ? ea : void 0,
                                    className: v.button,
                                    children: eo
                                })
                              : (0, r.jsx)(l.zx, {
                                    color: l.Tt.PRIMARY,
                                    disabled: !0,
                                    className: v.button,
                                    children: _.intl.string(_.t['9KoPyM'])
                                }))
                    : U &&
                      !L &&
                      (eu = V
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.zx, {
                                        color: l.Tt.PRIMARY,
                                        className: v.button,
                                        disabled: !0,
                                        children: _.intl.string(_.t.V293qq)
                                    }),
                                    (0, r.jsx)(l.zx, {
                                        color: l.Tt.BRAND,
                                        className: v.button,
                                        onClick: () => (0, h.openQuestMinorEnrollmentBlockModal)(E, S, N),
                                        children: _.intl.string(_.t.vY9GgI)
                                    })
                                ]
                            })
                          : (0, r.jsx)(l.zx, {
                                submitting: Q,
                                color: l.Tt.BRAND,
                                onClick: null != ea ? ea : void 0,
                                className: v.button,
                                children: eo
                            }))
            : (eu = (0, r.jsx)(l.zx, {
                  color: l.Tt.PRIMARY,
                  disabled: !0,
                  className: v.button,
                  children: _.intl.format(_.t['14o6QU'], { expiryDate: I })
              })),
    null == eu)
        ? null
        : (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  eu,
                  er &&
                      (0, r.jsx)(b.U, {
                          popoutTargetRef: Y,
                          onSelect: es,
                          quest: E,
                          questContent: f.jn.ACTIVITY_PANEL,
                          children: (e) => {
                              var t, n;
                              return (0, r.jsx)(
                                  l.zx,
                                  ((t = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              r = Object.keys(n);
                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                              (r = r.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              r.forEach(function (t) {
                                                  var r;
                                                  ((r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = r));
                                              }));
                                      }
                                      return e;
                                  })(
                                      {
                                          buttonRef: Y,
                                          className: a()(v.button, v.platformSelectorSecondary),
                                          color: l.Tt.PRIMARY
                                      },
                                      e
                                  )),
                                  (n = n =
                                      {
                                          children: (0, r.jsxs)('div', {
                                              className: v.platformSelectorSecondaryContent,
                                              children: [
                                                  (function (e) {
                                                      switch (e) {
                                                          case f.LI.DESKTOP:
                                                              return (0, r.jsx)(c.pzj, { color: 'currentColor' });
                                                          case f.LI.CONSOLE:
                                                              return (0, r.jsx)(c.iWm, { color: 'currentColor' });
                                                          default:
                                                              return null;
                                                      }
                                                  })(J),
                                                  (0, r.jsx)(c.CJ0, {
                                                      className: v.platformSelectorSecondaryChevron,
                                                      color: 'currentColor'
                                                  })
                                              ]
                                          })
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(n)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                        }),
                                  t)
                              );
                          }
                      })
              ]
          });
}
