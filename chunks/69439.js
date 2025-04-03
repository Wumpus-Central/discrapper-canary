n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
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
            return v.NW.string(v.t.QXc019);
        }
    },
    {
        value: j.cd.CONSOLE,
        get label() {
            return v.NW.string(v.t['8lAfuL']);
        }
    }
];
function C(e) {
    let t,
        n,
        { value: o } = e;
    switch (o) {
        case j.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = v.NW.string(v.t.QXc019));
            break;
        case j.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = v.NW.string(v.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)('div', {
        className: y.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function O(e) {
    var t, n, s, O;
    let { quest: w, location: S, onReceiveErrorHints: P, contentPosition: N, rowIndex: E } = e,
        T = (0, d.Q3)('QuestTileCta'),
        A = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        B = (0, x.g2)({ useReducedMotion: A }),
        R = (0, u.O5)(),
        k = (0, p._s)({ quest: w }),
        q = (0, p.z)(w),
        D = (0, p.B6)(w.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: I, isEnrolling: W } = (0, i.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(w.id) || m.Z.isFetchingRewardCode(w.id),
            isEnrolling: m.Z.isEnrolling(w.id)
        })),
        M = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        L = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        Z = L && (null == (s = w.userStatus) ? void 0 : s.claimedAt) == null,
        V = (0, g.iQ)(w),
        Q = !(0, g.zi)(w),
        U = (0, p._Q)(w),
        H = (0, g.Xv)(w.config),
        z = (0, g.q8)(w),
        F = (0, g.Vl)(w),
        X = (0, p.Rf)(w),
        [K, Y, G] = (0, p.me)(w, X),
        J = Q && U === p.OH.ACCEPTED,
        $ = J && K === f.LI.SELECT,
        ee = J && !$ && Y.length > 1,
        et = o.useCallback(
            (e) => {
                G(e), e === j.cd.DESKTOP && P([]);
            },
            [G, P]
        ),
        { text: en, onClick: er } = (0, x.Ks)({
            progressState: U,
            quest: w,
            location: S,
            isCollectibleQuest: H,
            questContentPosition: N,
            questContentRowIndex: E,
            inGiftInventory: !0,
            isVideoQuest: z,
            inGameQuest: F
        }),
        { startingConsoleQuest: eo, startConsoleQuest: es } = (0, p.GI)({
            questId: w.id,
            beforeRequest: () => {
                B.startAnimation(),
                    R({
                        questId: w.id,
                        questContent: S,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: N,
                        questContentRowIndex: E
                    });
            },
            afterRequest: (e) => {
                B.stopAnimation(), P(e);
            }
        }),
        ea = (null == (O = w.userStatus) ? void 0 : O.claimedAt) != null,
        ei = null;
    return (V && Z
        ? (ei = (0, r.jsx)(l.zxk, {
              color: l.Ttl.BRAND,
              submitting: I,
              onClick: null != er ? er : void 0,
              className: y.button,
              children: en
          }))
        : L
          ? (ei = z
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
                                          color: T ? void 0 : l.TVs.colors.WHITE,
                                          className: y.videoQuestPlayIcon
                                      }),
                                      (0, r.jsx)('span', { children: v.NW.string(v.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.BRAND,
                              className: y.button,
                              onClick: null != er ? er : void 0,
                              children: en
                          })
                      ]
                  })
                : (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      className: y.button,
                      onClick: null != er ? er : void 0,
                      children: en
                  }))
          : Q
            ? Q && Z
                ? (ei = (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      submitting: I,
                      onClick: null != er ? er : void 0,
                      className: y.button,
                      children: en
                  }))
                : Q && M && !ea
                  ? (ei = $
                        ? (0, r.jsx)(l.PhF, {
                              className: y.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: _,
                              placeholder: v.NW.string(v.t.drVw4e),
                              renderOptionLabel: C,
                              select: et,
                              serialize: (e) => {
                                  switch (e) {
                                      case j.cd.DESKTOP:
                                          return v.NW.string(v.t.QXc019);
                                      case j.cd.CONSOLE:
                                          return v.NW.string(v.t['8lAfuL']);
                                  }
                              }
                          })
                        : (0, g.$J)(w) && !q && K !== f.LI.DESKTOP
                          ? k
                              ? (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.PRIMARY,
                                    className: y.button,
                                    onClick: null != er ? er : void 0,
                                    children: en
                                })
                              : (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.PRIMARY,
                                    onClick: es,
                                    disabled: eo,
                                    className: y.button,
                                    children: (0, r.jsxs)('div', {
                                        className: y.ctaInner,
                                        children: [B.render(), v.NW.string(v.t.nPThNT)]
                                    })
                                })
                          : z
                            ? (0, r.jsx)(l.zxk, {
                                  color: l.Ttl.BRAND,
                                  onClick: null != er ? er : void 0,
                                  className: y.button,
                                  children: en
                              })
                            : (0, r.jsx)(l.zxk, {
                                  color: l.Ttl.PRIMARY,
                                  disabled: !0,
                                  className: y.button,
                                  children: v.NW.string(v.t['9KoPyM'])
                              }))
                  : Q &&
                    !M &&
                    (ei = (0, r.jsx)(l.zxk, {
                        submitting: W,
                        color: l.Ttl.BRAND,
                        onClick: null != er ? er : void 0,
                        className: y.button,
                        children: en
                    }))
            : (ei = (0, r.jsx)(l.zxk, {
                  color: l.Ttl.PRIMARY,
                  disabled: !0,
                  className: y.button,
                  children: v.NW.format(v.t['14o6QU'], { expiryDate: D })
              })),
    null == ei)
        ? null
        : (0, r.jsxs)('div', {
              className: y.container,
              children: [
                  ei,
                  ee &&
                      (0, r.jsx)(b.U, {
                          onSelect: et,
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
                                                  })(K),
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
