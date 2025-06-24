n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(442837),
    l = n(481060),
    c = n(607070),
    d = n(617136),
    u = n(113434),
    p = n(569984),
    m = n(497505),
    f = n(918701),
    g = n(667105),
    x = n(341907),
    h = n(284851),
    b = n(46140),
    j = n(388032),
    v = n(142468);
let _ = [
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
        { value: s } = e;
    switch (s) {
        case b.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = j.intl.string(j.t.QXc019));
            break;
        case b.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = j.intl.string(j.t['8lAfuL']));
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
    let { quest: C, location: w, onReceiveErrorHints: S, contentPosition: P, rowIndex: E } = e,
        T = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        N = (0, g.g2)({ useReducedMotion: T }),
        A = (0, d.O5)(),
        k = (0, u._s)({ quest: C }),
        R = (0, u.z)(C),
        B = (0, u.B6)(C.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        {
            isClaiming: q,
            isEnrolling: I,
            isQuestEnrollmentBlocked: D
        } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(C.id) || p.Z.isFetchingRewardCode(C.id),
            isEnrolling: p.Z.isEnrolling(C.id),
            isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil
        })),
        L = (null == (t = C.userStatus) ? void 0 : t.enrolledAt) != null,
        M = (null == (n = C.userStatus) ? void 0 : n.completedAt) != null,
        V = M && (null == (o = C.userStatus) ? void 0 : o.claimedAt) == null,
        W = (0, f.iQ)(C),
        Z = !(0, f.zi)(C),
        Q = (0, u._Q)(C),
        H = (0, f.Xv)(C.config),
        U = (0, f.PB)(C),
        z = (0, f.HJ)(C),
        F = (0, f.Vl)(C),
        X = s.useRef(null),
        K = (0, u.Rf)(C),
        [Y, G, J] = (0, u.me)(C, K),
        $ = Z && Q === u.OH.ACCEPTED,
        ee = $ && Y === m.LI.SELECT,
        et = $ && !ee && G.length > 1,
        en = s.useCallback(
            (e) => {
                J(e), e === b.cd.DESKTOP && S([]);
            },
            [J, S]
        ),
        { text: er, onClick: es } = (0, g.Ks)({
            progressState: Q,
            quest: C,
            location: w,
            isCollectibleQuest: H,
            questContentPosition: P,
            questContentRowIndex: E,
            inGiftInventory: !0,
            isVideoQuest: U,
            inGameQuest: F
        }),
        { startingConsoleQuest: eo, startConsoleQuest: ea } = (0, u.GI)({
            questId: C.id,
            beforeRequest: () => {
                N.startAnimation(),
                    A({
                        questId: C.id,
                        questContent: w,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: P,
                        questContentRowIndex: E
                    });
            },
            afterRequest: (e) => {
                N.stopAnimation(), S(e);
            }
        }),
        ei = (null == (O = C.userStatus) ? void 0 : O.claimedAt) != null,
        el = null;
    return (W && V
        ? (el = (0, r.jsx)(l.zxk, {
              color: l.Ttl.BRAND,
              submitting: q,
              onClick: null != es ? es : void 0,
              className: v.button,
              children: er
          }))
        : M
          ? (el = U
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              className: v.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, x.openVideoQuestModal)(C);
                              },
                              children: (0, r.jsxs)('div', {
                                  className: v.ctaInner,
                                  children: [(0, r.jsx)(l.Oe7, { className: v.videoQuestPlayIcon }), (0, r.jsx)('span', { children: j.intl.string(j.t.YsCuyM) })]
                              })
                          }),
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.BRAND,
                              className: v.button,
                              onClick: null != es ? es : void 0,
                              children: er
                          })
                      ]
                  })
                : (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      className: v.button,
                      onClick: null != es ? es : void 0,
                      children: er
                  }))
          : Z
            ? Z && V
                ? (el = (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      submitting: q,
                      onClick: null != es ? es : void 0,
                      className: v.button,
                      children: er
                  }))
                : z
                  ? (el = (0, r.jsx)(l.zxk, {
                        color: l.Ttl.PRIMARY,
                        disabled: !0,
                        className: v.button,
                        children: j.intl.string(j.t.BkZhUF)
                    }))
                  : Z && L && !ei
                    ? (el = ee
                          ? (0, r.jsx)(l.PhF, {
                                className: v.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: _,
                                placeholder: j.intl.string(j.t.drVw4e),
                                renderOptionLabel: y,
                                select: en,
                                serialize: (e) => {
                                    switch (e) {
                                        case b.cd.DESKTOP:
                                            return j.intl.string(j.t.QXc019);
                                        case b.cd.CONSOLE:
                                            return j.intl.string(j.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, f.$J)(C) && !R && Y !== m.LI.DESKTOP
                            ? k
                                ? (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      className: v.button,
                                      onClick: null != es ? es : void 0,
                                      children: er
                                  })
                                : (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      onClick: ea,
                                      disabled: eo,
                                      className: v.button,
                                      children: (0, r.jsxs)('div', {
                                          className: v.ctaInner,
                                          children: [N.render(), j.intl.string(j.t.nPThNT)]
                                      })
                                  })
                            : U || (F && C.config.features.includes(b.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.BRAND,
                                    onClick: null != es ? es : void 0,
                                    className: v.button,
                                    children: er
                                })
                              : (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.PRIMARY,
                                    disabled: !0,
                                    className: v.button,
                                    children: j.intl.string(j.t['9KoPyM'])
                                }))
                    : Z &&
                      !L &&
                      (el = D
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.zxk, {
                                        color: l.Ttl.PRIMARY,
                                        className: v.button,
                                        disabled: !0,
                                        children: j.intl.string(j.t.V293qq)
                                    }),
                                    (0, r.jsx)(l.zxk, {
                                        color: l.Ttl.BRAND,
                                        className: v.button,
                                        onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(C, w),
                                        children: j.intl.string(j.t.vY9GgI)
                                    })
                                ]
                            })
                          : (0, r.jsx)(l.zxk, {
                                submitting: I,
                                color: l.Ttl.BRAND,
                                onClick: null != es ? es : void 0,
                                className: v.button,
                                children: er
                            }))
            : (el = (0, r.jsx)(l.zxk, {
                  color: l.Ttl.PRIMARY,
                  disabled: !0,
                  className: v.button,
                  children: j.intl.format(j.t['14o6QU'], { expiryDate: B })
              })),
    null == el)
        ? null
        : (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  el,
                  et &&
                      (0, r.jsx)(h.U, {
                          popoutTargetRef: X,
                          onSelect: en,
                          quest: C,
                          questContent: m.jn.ACTIVITY_PANEL,
                          children: (e) => {
                              var t, n;
                              return (0, r.jsx)(
                                  l.zxk,
                                  ((t = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              r = Object.keys(n);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (r = r.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              r.forEach(function (t) {
                                                  var r;
                                                  (r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = r);
                                              });
                                      }
                                      return e;
                                  })(
                                      {
                                          buttonRef: X,
                                          className: a()(v.button, v.platformSelectorSecondary),
                                          color: l.Ttl.PRIMARY
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
                                                          case m.LI.DESKTOP:
                                                              return (0, r.jsx)(l.pzj, { color: 'currentColor' });
                                                          case m.LI.CONSOLE:
                                                              return (0, r.jsx)(l.iWm, { color: 'currentColor' });
                                                          default:
                                                              return null;
                                                      }
                                                  })(Y),
                                                  (0, r.jsx)(l.CJ0, {
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
