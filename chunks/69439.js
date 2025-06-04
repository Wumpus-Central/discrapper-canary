n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(442837),
    l = n(481060),
    c = n(607070),
    d = n(540059),
    u = n(617136),
    p = n(113434),
    m = n(569984),
    f = n(497505),
    g = n(918701),
    x = n(667105),
    h = n(341907),
    b = n(284851),
    j = n(46140),
    v = n(388032),
    y = n(142468);
let _ = [
    {
        value: j.cd.DESKTOP,
        get label() {
            return v.intl.string(v.t.QXc019);
        }
    },
    {
        value: j.cd.CONSOLE,
        get label() {
            return v.intl.string(v.t['8lAfuL']);
        }
    }
];
function O(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case j.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = v.intl.string(v.t.QXc019));
            break;
        case j.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = v.intl.string(v.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)('div', {
        className: y.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function C(e) {
    var t, n, o, C;
    let { quest: w, location: S, onReceiveErrorHints: P, contentPosition: E, rowIndex: T } = e,
        N = (0, d.Q3)('QuestTileCta'),
        A = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        R = (0, x.g2)({ useReducedMotion: A }),
        k = (0, u.O5)(),
        B = (0, p._s)({ quest: w }),
        q = (0, p.z)(w),
        I = (0, p.B6)(w.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        {
            isClaiming: D,
            isEnrolling: M,
            isQuestEnrollmentBlocked: L
        } = (0, i.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(w.id) || m.Z.isFetchingRewardCode(w.id),
            isEnrolling: m.Z.isEnrolling(w.id),
            isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil
        })),
        V = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        W = Z && (null == (o = w.userStatus) ? void 0 : o.claimedAt) == null,
        Q = (0, g.iQ)(w),
        H = !(0, g.zi)(w),
        U = (0, p._Q)(w),
        z = (0, g.Xv)(w.config),
        F = (0, g.PB)(w),
        K = (0, g.HJ)(w),
        X = (0, g.Vl)(w),
        Y = s.useRef(null),
        G = (0, p.Rf)(w),
        [J, $, ee] = (0, p.me)(w, G),
        et = H && U === p.OH.ACCEPTED,
        en = et && J === f.LI.SELECT,
        er = et && !en && $.length > 1,
        es = s.useCallback(
            (e) => {
                ee(e), e === j.cd.DESKTOP && P([]);
            },
            [ee, P]
        ),
        { text: eo, onClick: ea } = (0, x.Ks)({
            progressState: U,
            quest: w,
            location: S,
            isCollectibleQuest: z,
            questContentPosition: E,
            questContentRowIndex: T,
            inGiftInventory: !0,
            isVideoQuest: F,
            inGameQuest: X
        }),
        { startingConsoleQuest: ei, startConsoleQuest: el } = (0, p.GI)({
            questId: w.id,
            beforeRequest: () => {
                R.startAnimation(),
                    k({
                        questId: w.id,
                        questContent: S,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: E,
                        questContentRowIndex: T
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), P(e);
            }
        }),
        ec = (null == (C = w.userStatus) ? void 0 : C.claimedAt) != null,
        ed = null;
    return (Q && W
        ? (ed = (0, r.jsx)(l.zxk, {
              color: l.Ttl.BRAND,
              submitting: D,
              onClick: null != ea ? ea : void 0,
              className: y.button,
              children: eo
          }))
        : Z
          ? (ed = F
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              className: y.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, h.openVideoQuestModal)(w);
                              },
                              children: (0, r.jsxs)('div', {
                                  className: y.ctaInner,
                                  children: [
                                      (0, r.jsx)(l.Oe7, {
                                          color: N ? void 0 : l.TVs.colors.WHITE,
                                          className: y.videoQuestPlayIcon
                                      }),
                                      (0, r.jsx)('span', { children: v.intl.string(v.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.BRAND,
                              className: y.button,
                              onClick: null != ea ? ea : void 0,
                              children: eo
                          })
                      ]
                  })
                : (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      className: y.button,
                      onClick: null != ea ? ea : void 0,
                      children: eo
                  }))
          : H
            ? H && W
                ? (ed = (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      submitting: D,
                      onClick: null != ea ? ea : void 0,
                      className: y.button,
                      children: eo
                  }))
                : K
                  ? (ed = (0, r.jsx)(l.zxk, {
                        color: l.Ttl.PRIMARY,
                        disabled: !0,
                        className: y.button,
                        children: v.intl.string(v.t.BkZhUF)
                    }))
                  : H && V && !ec
                    ? (ed = en
                          ? (0, r.jsx)(l.PhF, {
                                className: y.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: _,
                                placeholder: v.intl.string(v.t.drVw4e),
                                renderOptionLabel: O,
                                select: es,
                                serialize: (e) => {
                                    switch (e) {
                                        case j.cd.DESKTOP:
                                            return v.intl.string(v.t.QXc019);
                                        case j.cd.CONSOLE:
                                            return v.intl.string(v.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, g.$J)(w) && !q && J !== f.LI.DESKTOP
                            ? B
                                ? (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      className: y.button,
                                      onClick: null != ea ? ea : void 0,
                                      children: eo
                                  })
                                : (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      onClick: el,
                                      disabled: ei,
                                      className: y.button,
                                      children: (0, r.jsxs)('div', {
                                          className: y.ctaInner,
                                          children: [R.render(), v.intl.string(v.t.nPThNT)]
                                      })
                                  })
                            : F || (X && w.config.features.includes(j.S7.START_QUEST_CTA))
                              ? (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.BRAND,
                                    onClick: null != ea ? ea : void 0,
                                    className: y.button,
                                    children: eo
                                })
                              : (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.PRIMARY,
                                    disabled: !0,
                                    className: y.button,
                                    children: v.intl.string(v.t['9KoPyM'])
                                }))
                    : H &&
                      !V &&
                      (ed = L
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.zxk, {
                                        color: l.Ttl.PRIMARY,
                                        className: y.button,
                                        disabled: !0,
                                        children: v.intl.string(v.t.V293qq)
                                    }),
                                    (0, r.jsx)(l.zxk, {
                                        color: l.Ttl.BRAND,
                                        className: y.button,
                                        onClick: () => (0, h.openQuestMinorEnrollmentBlockModal)(w, S),
                                        children: v.intl.string(v.t.vY9GgI)
                                    })
                                ]
                            })
                          : (0, r.jsx)(l.zxk, {
                                submitting: M,
                                color: l.Ttl.BRAND,
                                onClick: null != ea ? ea : void 0,
                                className: y.button,
                                children: eo
                            }))
            : (ed = (0, r.jsx)(l.zxk, {
                  color: l.Ttl.PRIMARY,
                  disabled: !0,
                  className: y.button,
                  children: v.intl.format(v.t['14o6QU'], { expiryDate: I })
              })),
    null == ed)
        ? null
        : (0, r.jsxs)('div', {
              className: y.container,
              children: [
                  ed,
                  er &&
                      (0, r.jsx)(b.U, {
                          popoutTargetRef: Y,
                          onSelect: es,
                          quest: w,
                          questContent: f.jn.ACTIVITY_PANEL,
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
                                          buttonRef: Y,
                                          className: a()(y.button, y.platformSelectorSecondary),
                                          color: l.Ttl.PRIMARY
                                      },
                                      e
                                  )),
                                  (n = n =
                                      {
                                          children: (0, r.jsxs)('div', {
                                              className: y.platformSelectorSecondaryContent,
                                              children: [
                                                  (function (e) {
                                                      switch (e) {
                                                          case f.LI.DESKTOP:
                                                              return (0, r.jsx)(l.pzj, { color: 'currentColor' });
                                                          case f.LI.CONSOLE:
                                                              return (0, r.jsx)(l.iWm, { color: 'currentColor' });
                                                          default:
                                                              return null;
                                                      }
                                                  })(J),
                                                  (0, r.jsx)(l.CJ0, {
                                                      className: y.platformSelectorSecondaryChevron,
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
