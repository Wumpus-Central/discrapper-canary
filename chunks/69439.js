(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(617136),
    p = n(509212),
    m = n(113434),
    f = n(569984),
    g = n(497505),
    x = n(110560),
    h = n(667105),
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
        { value: o } = e;
    switch (o) {
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
    var t, n, s, O;
    let { quest: E, questContent: w, onReceiveErrorHints: S, contentPosition: T, rowIndex: P, sourceQuestContent: A } = e,
        N = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        R = (0, h.g2)({ useReducedMotion: N }),
        B = (0, d.O5)(),
        k = (0, m._s)({ quest: E }),
        I = (0, m.z)(E),
        q = (0, m.B6)(E.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        {
            isClaiming: D,
            isEnrolling: Q,
            isQuestEnrollmentBlocked: V
        } = (0, i.cj)([f.Z], () => ({
            isClaiming: f.Z.isClaimingReward(E.id) || f.Z.isFetchingRewardCode(E.id),
            isEnrolling: f.Z.isEnrolling(E.id),
            isQuestEnrollmentBlocked: null != f.Z.questEnrollmentBlockedUntil
        })),
        L = (null == (t = E.userStatus) ? void 0 : t.enrolledAt) != null,
        M = (null == (n = E.userStatus) ? void 0 : n.completedAt) != null,
        W = M && (null == (s = E.userStatus) ? void 0 : s.claimedAt) == null,
        Z = (0, p.iQ)(E),
        U = !(0, p.zi)(E),
        H = (0, m._Q)(E),
        z = (0, p.Xv)(E.config),
        F = (0, p.PB)(E),
        X = (0, p.HJ)(E),
        K = (0, p.Vl)(E),
        Y = o.useRef(null),
        G = (0, m.Rf)(E),
        [J, $, ee] = (0, m.me)(E, G),
        et = U && H === m.OH.ACCEPTED,
        en = et && J === g.LI.SELECT,
        er = et && !en && $.length > 1,
        eo = o.useCallback(
            (e) => {
                (ee(e), e === j.cd.DESKTOP && S([]));
            },
            [ee, S]
        ),
        { text: es, onClick: ea } = (0, h.Ks)({
            progressState: H,
            quest: E,
            questContent: w,
            isCollectibleQuest: z,
            questContentPosition: T,
            questContentRowIndex: P,
            inGiftInventory: !0,
            isVideoQuest: F,
            inGameQuest: K,
            sourceQuestContent: A
        }),
        { startingConsoleQuest: ei, startConsoleQuest: el } = (0, m.GI)({
            questId: E.id,
            beforeRequest: () => {
                (R.startAnimation(),
                    B({
                        questId: E.id,
                        questContent: w,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: T,
                        questContentRowIndex: P,
                        sourceQuestContent: A
                    }));
            },
            afterRequest: (e) => {
                (R.stopAnimation(), S(e));
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
              children: es
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
                                  (0, x.openVideoQuestModal)({
                                      quest: E,
                                      questContent: w,
                                      sourceQuestContent: A,
                                      sourceQuestContentCTA: d.jZ.WATCH_VIDEO,
                                      skipEnrollmentCheck: !0
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
                              children: es
                          })
                      ]
                  })
                : (0, r.jsx)(l.zx, {
                      color: l.Tt.BRAND,
                      className: v.button,
                      onClick: null != ea ? ea : void 0,
                      children: es
                  }))
          : U
            ? U && W
                ? (eu = (0, r.jsx)(l.zx, {
                      color: l.Tt.BRAND,
                      submitting: D,
                      onClick: null != ea ? ea : void 0,
                      className: v.button,
                      children: es
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
                                select: eo,
                                serialize: (e) => {
                                    switch (e) {
                                        case j.cd.DESKTOP:
                                            return _.intl.string(_.t.QXc019);
                                        case j.cd.CONSOLE:
                                            return _.intl.string(_.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, p.$J)(E) && !I && J !== g.LI.DESKTOP
                            ? k
                                ? (0, r.jsx)(l.zx, {
                                      color: l.Tt.PRIMARY,
                                      className: v.button,
                                      onClick: null != ea ? ea : void 0,
                                      children: es
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
                                    children: es
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
                                        onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(E, w, A),
                                        children: _.intl.string(_.t.vY9GgI)
                                    })
                                ]
                            })
                          : (0, r.jsx)(l.zx, {
                                submitting: Q,
                                color: l.Tt.BRAND,
                                onClick: null != ea ? ea : void 0,
                                className: v.button,
                                children: es
                            }))
            : (eu = (0, r.jsx)(l.zx, {
                  color: l.Tt.PRIMARY,
                  disabled: !0,
                  className: v.button,
                  children: _.intl.format(_.t['14o6QU'], { expiryDate: q })
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
                          onSelect: eo,
                          quest: E,
                          questContent: g.jn.ACTIVITY_PANEL,
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
                                                          case g.LI.DESKTOP:
                                                              return (0, r.jsx)(c.pzj, { color: 'currentColor' });
                                                          case g.LI.CONSOLE:
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
