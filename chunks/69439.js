n.d(t, { Z: () => E }), n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(442837),
    l = n(481060),
    c = n(607070),
    d = n(540059),
    u = n(617136),
    p = n(113434),
    m = n(569984),
    x = n(497505),
    h = n(918701),
    g = n(667105),
    f = n(341907),
    v = n(284851),
    _ = n(46140),
    C = n(388032),
    j = n(382128);
let b = [
    {
        value: _.cd.DESKTOP,
        get label() {
            return C.intl.string(C.t.QXc019);
        }
    },
    {
        value: _.cd.CONSOLE,
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
        case _.cd.DESKTOP:
            (n = (0, s.jsx)(l.pzj, {})), (t = C.intl.string(C.t.QXc019));
            break;
        case _.cd.CONSOLE:
            (n = (0, s.jsx)(l.iWm, {})), (t = C.intl.string(C.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)('div', {
        className: j.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function E(e) {
    var t, n, a, E;
    let { quest: S, location: N, onReceiveErrorHints: y, contentPosition: w, rowIndex: A } = e,
        B = (0, d.Q3)('QuestTileCta'),
        R = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        P = (0, g.g2)({ useReducedMotion: R }),
        k = (0, u.O5)(),
        q = (0, p._s)({ quest: S }),
        I = (0, p.z)(S),
        O = (0, p.B6)(S.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: M, isEnrolling: D } = (0, i.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(S.id) || m.Z.isFetchingRewardCode(S.id),
            isEnrolling: m.Z.isEnrolling(S.id)
        })),
        L = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        Z = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        W = Z && (null === (a = S.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null,
        V = (0, h.iQ)(S),
        Q = !(0, h.zi)(S),
        U = (0, p._Q)(S),
        H = (0, h.Xv)(S.config),
        z = (0, h.q8)(S),
        F = (0, p.GU)(S),
        X = (0, p.Rf)(S),
        [K, Y, G] = (0, p.me)(S, X),
        J = Q && U === p.OH.ACCEPTED,
        $ = J && K === x.LI.SELECT,
        ee = J && !$ && Y.length > 1,
        et = r.useCallback(
            (e) => {
                G(e), e === _.cd.DESKTOP && y([]);
            },
            [G, y]
        ),
        {
            text: en,
            onClick: es,
            tooltipText: er
        } = (0, g.Ks)({
            progressState: U,
            quest: S,
            location: N,
            isCollectibleQuest: H,
            questContentPosition: w,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: z
        }),
        { startingConsoleQuest: ea, startConsoleQuest: eo } = (0, p.GI)({
            questId: S.id,
            beforeRequest: () => {
                P.startAnimation(),
                    k({
                        questId: S.id,
                        questContent: N,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: w,
                        questContentRowIndex: A
                    });
            },
            afterRequest: (e) => {
                P.stopAnimation(), y(e);
            }
        }),
        ei = (null === (E = S.userStatus) || void 0 === E ? void 0 : E.claimedAt) != null,
        el = null;
    return (V && W
        ? (el = (0, s.jsx)(l.zxk, {
              color: l.Ttl.BRAND,
              submitting: M,
              onClick: null != es ? es : void 0,
              className: j.button,
              children: en
          }))
        : Z
          ? (el = z
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, f.openVideoQuestModal)(S);
                              },
                              children: (0, s.jsxs)('div', {
                                  className: j.ctaInner,
                                  children: [
                                      (0, s.jsx)(l.Oe7, {
                                          color: B ? void 0 : l.TVs.colors.WHITE,
                                          className: j.videoQuestPlayIcon
                                      }),
                                      (0, s.jsx)('span', { children: C.intl.string(C.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, s.jsx)(l.zxk, {
                              color: l.Ttl.BRAND,
                              className: j.button,
                              onClick: null != es ? es : void 0,
                              children: en
                          })
                      ]
                  })
                : (0, s.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      className: j.button,
                      onClick: null != es ? es : void 0,
                      children: en
                  }))
          : Q
            ? F.length > 0
                ? (el = (0, s.jsx)(
                      l.DY3,
                      {
                          text: er,
                          className: j.buttonTooltip,
                          children: (0, s.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              disabled: !0,
                              className: j.button,
                              children: en
                          })
                      },
                      er
                  ))
                : Q && W
                  ? (el = (0, s.jsx)(l.zxk, {
                        color: l.Ttl.BRAND,
                        submitting: M,
                        onClick: null != es ? es : void 0,
                        className: j.button,
                        children: en
                    }))
                  : Q && L && !ei
                    ? (el = $
                          ? (0, s.jsx)(l.PhF, {
                                className: j.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: b,
                                placeholder: C.intl.string(C.t.drVw4e),
                                renderOptionLabel: T,
                                select: et,
                                serialize: (e) => {
                                    switch (e) {
                                        case _.cd.DESKTOP:
                                            return C.intl.string(C.t.QXc019);
                                        case _.cd.CONSOLE:
                                            return C.intl.string(C.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, h.$J)(S) && !I && K !== x.LI.DESKTOP
                            ? q
                                ? (0, s.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      className: j.button,
                                      onClick: null != es ? es : void 0,
                                      children: en
                                  })
                                : (0, s.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      onClick: eo,
                                      disabled: ea,
                                      className: j.button,
                                      children: (0, s.jsxs)('div', {
                                          className: j.ctaInner,
                                          children: [P.render(), C.intl.string(C.t.nPThNT)]
                                      })
                                  })
                            : z
                              ? (0, s.jsx)(l.zxk, {
                                    color: l.Ttl.BRAND,
                                    onClick: null != es ? es : void 0,
                                    className: j.button,
                                    children: en
                                })
                              : (0, s.jsx)(l.zxk, {
                                    color: l.Ttl.PRIMARY,
                                    disabled: !0,
                                    className: j.button,
                                    children: C.intl.string(C.t['9KoPyM'])
                                }))
                    : Q &&
                      !L &&
                      (el = (0, s.jsx)(l.zxk, {
                          submitting: D,
                          color: l.Ttl.BRAND,
                          onClick: null != es ? es : void 0,
                          className: j.button,
                          children: en
                      }))
            : (el = (0, s.jsx)(l.zxk, {
                  color: l.Ttl.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: C.intl.format(C.t['14o6QU'], { expiryDate: O })
              })),
    null == el)
        ? null
        : (0, s.jsxs)('div', {
              className: j.container,
              children: [
                  el,
                  ee &&
                      (0, s.jsx)(v.U, {
                          onSelect: et,
                          quest: S,
                          questContent: x.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, s.jsx)(l.zxk, {
                                  className: o()(j.button, j.platformSelectorSecondary),
                                  color: l.Ttl.PRIMARY,
                                  ...e,
                                  children: (0, s.jsxs)('div', {
                                      className: j.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case x.LI.DESKTOP:
                                                      return (0, s.jsx)(l.pzj, { color: 'currentColor' });
                                                  case x.LI.CONSOLE:
                                                      return (0, s.jsx)(l.iWm, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(K),
                                          (0, s.jsx)(l.CJ0, {
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
