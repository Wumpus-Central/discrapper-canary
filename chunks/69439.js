(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(617136),
    d = n(113434),
    p = n(569984),
    m = n(497505),
    f = n(918701),
    g = n(667105),
    x = n(341907),
    h = n(284851),
    b = n(46140),
    j = n(388032),
    _ = n(142468);
let v = [
    {
        value: b.cd.DESKTOP,
        get label() {
            return j.intl.string(j.t.QXc019);
        }
    },
    {
        value: b.cd.CONSOLE,
        get label() {
            return j.intl.string(j.t['8lAfuL']);
        }
    }
];
function y(e) {
    let t,
        n,
        { value: o } = e;
    switch (o) {
        case b.cd.DESKTOP:
            ((n = (0, r.jsx)(l.pzj, {})), (t = j.intl.string(j.t.QXc019)));
            break;
        case b.cd.CONSOLE:
            ((n = (0, r.jsx)(l.iWm, {})), (t = j.intl.string(j.t['8lAfuL'])));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)('div', {
        className: _.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function C(e) {
    var t, n, s, C;
    let { quest: O, questContent: E, onReceiveErrorHints: S, contentPosition: w, rowIndex: P, sourceQuestContent: T } = e,
        N = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        A = (0, g.g2)({ useReducedMotion: N }),
        R = (0, u.O5)(),
        k = (0, d._s)({ quest: O }),
        B = (0, d.z)(O),
        I = (0, d.B6)(O.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        {
            isClaiming: q,
            isEnrolling: D,
            isQuestEnrollmentBlocked: Q
        } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(O.id) || p.Z.isFetchingRewardCode(O.id),
            isEnrolling: p.Z.isEnrolling(O.id),
            isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil
        })),
        V = (null == (t = O.userStatus) ? void 0 : t.enrolledAt) != null,
        L = (null == (n = O.userStatus) ? void 0 : n.completedAt) != null,
        M = L && (null == (s = O.userStatus) ? void 0 : s.claimedAt) == null,
        W = (0, f.iQ)(O),
        Z = !(0, f.zi)(O),
        U = (0, d._Q)(O),
        H = (0, f.Xv)(O.config),
        z = (0, f.PB)(O),
        F = (0, f.HJ)(O),
        X = (0, f.Vl)(O),
        K = o.useRef(null),
        Y = (0, d.Rf)(O),
        [G, J, $] = (0, d.me)(O, Y),
        ee = Z && U === d.OH.ACCEPTED,
        et = ee && G === m.LI.SELECT,
        en = ee && !et && J.length > 1,
        er = o.useCallback(
            (e) => {
                ($(e), e === b.cd.DESKTOP && S([]));
            },
            [$, S]
        ),
        { text: eo, onClick: es } = (0, g.Ks)({
            progressState: U,
            quest: O,
            questContent: E,
            isCollectibleQuest: H,
            questContentPosition: w,
            questContentRowIndex: P,
            inGiftInventory: !0,
            isVideoQuest: z,
            inGameQuest: X,
            sourceQuestContent: T
        }),
        { startingConsoleQuest: ea, startConsoleQuest: ei } = (0, d.GI)({
            questId: O.id,
            beforeRequest: () => {
                (A.startAnimation(),
                    R({
                        questId: O.id,
                        questContent: E,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: w,
                        questContentRowIndex: P,
                        sourceQuestContent: T
                    }));
            },
            afterRequest: (e) => {
                (A.stopAnimation(), S(e));
            }
        }),
        el = (null == (C = O.userStatus) ? void 0 : C.claimedAt) != null,
        ec = null;
    return (W && M
        ? (ec = (0, r.jsx)(l.zxk, {
              color: l.Ttl.BRAND,
              submitting: q,
              onClick: null != es ? es : void 0,
              className: _.button,
              children: eo
          }))
        : L
          ? (ec = z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              className: _.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, x.openVideoQuestModal)({
                                      quest: O,
                                      sourceQuestContent: T
                                  });
                              },
                              children: (0, r.jsxs)('div', {
                                  className: _.ctaInner,
                                  children: [(0, r.jsx)(l.Oe7, { className: _.videoQuestPlayIcon }), (0, r.jsx)('span', { children: j.intl.string(j.t.YsCuyM) })]
                              })
                          }),
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.BRAND,
                              className: _.button,
                              onClick: null != es ? es : void 0,
                              children: eo
                          })
                      ]
                  })
                : (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      className: _.button,
                      onClick: null != es ? es : void 0,
                      children: eo
                  }))
          : Z
            ? Z && M
                ? (ec = (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      submitting: q,
                      onClick: null != es ? es : void 0,
                      className: _.button,
                      children: eo
                  }))
                : F
                  ? (ec = (0, r.jsx)(l.zxk, {
                        color: l.Ttl.PRIMARY,
                        disabled: !0,
                        className: _.button,
                        children: j.intl.string(j.t.BkZhUF)
                    }))
                  : Z && V && !el
                    ? (ec = et
                          ? (0, r.jsx)(l.PhF, {
                                className: _.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: v,
                                placeholder: j.intl.string(j.t.drVw4e),
                                renderOptionLabel: y,
                                select: er,
                                serialize: (e) => {
                                    switch (e) {
                                        case b.cd.DESKTOP:
                                            return j.intl.string(j.t.QXc019);
                                        case b.cd.CONSOLE:
                                            return j.intl.string(j.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, f.$J)(O) && !B && G !== m.LI.DESKTOP
                            ? k
                                ? (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      className: _.button,
                                      onClick: null != es ? es : void 0,
                                      children: eo
                                  })
                                : (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      onClick: ei,
                                      disabled: ea,
                                      className: _.button,
                                      children: (0, r.jsxs)('div', {
                                          className: _.ctaInner,
                                          children: [A.render(), j.intl.string(j.t.nPThNT)]
                                      })
                                  })
                            : z || (X && O.config.features.includes(b.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.BRAND,
                                    onClick: null != es ? es : void 0,
                                    className: _.button,
                                    children: eo
                                })
                              : (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.PRIMARY,
                                    disabled: !0,
                                    className: _.button,
                                    children: j.intl.string(j.t['9KoPyM'])
                                }))
                    : Z &&
                      !V &&
                      (ec = Q
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.zxk, {
                                        color: l.Ttl.PRIMARY,
                                        className: _.button,
                                        disabled: !0,
                                        children: j.intl.string(j.t.V293qq)
                                    }),
                                    (0, r.jsx)(l.zxk, {
                                        color: l.Ttl.BRAND,
                                        className: _.button,
                                        onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(O, E, T),
                                        children: j.intl.string(j.t.vY9GgI)
                                    })
                                ]
                            })
                          : (0, r.jsx)(l.zxk, {
                                submitting: D,
                                color: l.Ttl.BRAND,
                                onClick: null != es ? es : void 0,
                                className: _.button,
                                children: eo
                            }))
            : (ec = (0, r.jsx)(l.zxk, {
                  color: l.Ttl.PRIMARY,
                  disabled: !0,
                  className: _.button,
                  children: j.intl.format(j.t['14o6QU'], { expiryDate: I })
              })),
    null == ec)
        ? null
        : (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  ec,
                  en &&
                      (0, r.jsx)(h.U, {
                          popoutTargetRef: K,
                          onSelect: er,
                          quest: O,
                          questContent: m.jn.ACTIVITY_PANEL,
                          children: (e) => {
                              var t, n;
                              return (0, r.jsx)(
                                  l.zxk,
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
                                          buttonRef: K,
                                          className: a()(_.button, _.platformSelectorSecondary),
                                          color: l.Ttl.PRIMARY
                                      },
                                      e
                                  )),
                                  (n = n =
                                      {
                                          children: (0, r.jsxs)('div', {
                                              className: _.platformSelectorSecondaryContent,
                                              children: [
                                                  (function (e) {
                                                      switch (e) {
                                                          case m.LI.DESKTOP:
                                                              return (0, r.jsx)(l.pzj, { color: 'currentColor' });
                                                          case m.LI.CONSOLE:
                                                              return (0, r.jsx)(l.iWm, { color: 'currentColor' });
                                                          default:
                                                              return null;
                                                      }
                                                  })(G),
                                                  (0, r.jsx)(l.CJ0, {
                                                      className: _.platformSelectorSecondaryChevron,
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
