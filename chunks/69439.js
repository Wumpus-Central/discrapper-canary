n.d(t, { Z: () => E }), n(47120);
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
    x = n(497505),
    h = n(918701),
    g = n(667105),
    f = n(341907),
    _ = n(284851),
    C = n(46140),
    v = n(388032),
    j = n(300469);
let b = [
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
function T(e) {
    let t,
        n,
        { value: o } = e;
    switch (o) {
        case C.cd.DESKTOP:
            (n = (0, r.jsx)(l.pzj, {})), (t = v.intl.string(v.t.QXc019));
            break;
        case C.cd.CONSOLE:
            (n = (0, r.jsx)(l.iWm, {})), (t = v.intl.string(v.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, r.jsxs)('div', {
        className: j.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function E(e) {
    var t, n, s, E;
    let { quest: N, location: S, onReceiveErrorHints: y, contentPosition: A, rowIndex: B } = e,
        R = (0, d.Q3)('QuestTileCta'),
        w = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        q = (0, g.g2)({ useReducedMotion: w }),
        k = (0, u.O5)(),
        P = (0, p._s)({ quest: N }),
        I = (0, p.z)(N),
        M = (0, p.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: O, isEnrolling: W } = (0, i.cj)([m.Z], () => ({
            isClaiming: m.Z.isClaimingReward(N.id) || m.Z.isFetchingRewardCode(N.id),
            isEnrolling: m.Z.isEnrolling(N.id)
        })),
        L = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        D = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        Q = D && (null === (s = N.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        Z = (0, h.iQ)(N),
        U = !(0, h.zi)(N),
        V = (0, p._Q)(N),
        H = (0, h.Xv)(N.config),
        z = (0, h.q8)(N),
        F = (0, p.GU)(N),
        G = (0, p.Rf)(N),
        [K, Y, X] = (0, p.me)(N, G),
        J = U && V === p.OH.ACCEPTED,
        $ = J && K === x.LI.SELECT,
        ee = J && !$ && Y.length > 1,
        et = o.useCallback(
            (e) => {
                X(e), e === C.cd.DESKTOP && y([]);
            },
            [X, y]
        ),
        {
            text: en,
            onClick: er,
            tooltipText: eo
        } = (0, g.Ks)({
            progressState: V,
            quest: N,
            location: S,
            isCollectibleQuest: H,
            questContentPosition: A,
            questContentRowIndex: B,
            inGiftInventory: !0,
            isVideoQuest: z
        }),
        { startingConsoleQuest: es, startConsoleQuest: ea } = (0, p.GI)({
            questId: N.id,
            beforeRequest: () => {
                q.startAnimation(),
                    k({
                        questId: N.id,
                        questContent: S,
                        questContentCTA: u.jZ.DEFIBRILLATOR,
                        questContentPosition: A,
                        questContentRowIndex: B
                    });
            },
            afterRequest: (e) => {
                q.stopAnimation(), y(e);
            }
        }),
        ei = (null === (E = N.userStatus) || void 0 === E ? void 0 : E.claimedAt) != null,
        el = null;
    return (Z && Q
        ? (el = (0, r.jsx)(l.zxk, {
              color: l.Ttl.BRAND,
              submitting: O,
              onClick: null != er ? er : void 0,
              className: j.button,
              children: en
          }))
        : D
          ? (el = z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, f.openVideoQuestModal)(N);
                              },
                              children: (0, r.jsxs)('div', {
                                  className: j.ctaInner,
                                  children: [
                                      (0, r.jsx)(l.Oe7, {
                                          color: R ? void 0 : l.TVs.colors.WHITE,
                                          className: j.videoQuestPlayIcon
                                      }),
                                      (0, r.jsx)('span', { children: v.intl.string(v.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, r.jsx)(l.zxk, {
                              color: l.Ttl.BRAND,
                              className: j.button,
                              onClick: null != er ? er : void 0,
                              children: en
                          })
                      ]
                  })
                : (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      className: j.button,
                      onClick: null != er ? er : void 0,
                      children: en
                  }))
          : U
            ? F.length > 0
                ? (el = (0, r.jsx)(
                      l.DY3,
                      {
                          text: eo,
                          className: j.buttonTooltip,
                          children: (0, r.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              disabled: !0,
                              className: j.button,
                              children: en
                          })
                      },
                      eo
                  ))
                : U && Q
                  ? (el = (0, r.jsx)(l.zxk, {
                        color: l.Ttl.BRAND,
                        submitting: O,
                        onClick: null != er ? er : void 0,
                        className: j.button,
                        children: en
                    }))
                  : U && L && !ei
                    ? (el = $
                          ? (0, r.jsx)(l.PhF, {
                                className: j.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: b,
                                placeholder: v.intl.string(v.t.drVw4e),
                                renderOptionLabel: T,
                                select: et,
                                serialize: (e) => {
                                    switch (e) {
                                        case C.cd.DESKTOP:
                                            return v.intl.string(v.t.QXc019);
                                        case C.cd.CONSOLE:
                                            return v.intl.string(v.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, h.$J)(N) && !I && K !== x.LI.DESKTOP
                            ? P
                                ? (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      className: j.button,
                                      onClick: null != er ? er : void 0,
                                      children: en
                                  })
                                : (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      onClick: ea,
                                      disabled: es,
                                      className: j.button,
                                      children: (0, r.jsxs)('div', {
                                          className: j.ctaInner,
                                          children: [q.render(), v.intl.string(v.t.nPThNT)]
                                      })
                                  })
                            : z
                              ? (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.BRAND,
                                    onClick: null != er ? er : void 0,
                                    className: j.button,
                                    children: en
                                })
                              : (0, r.jsx)(l.zxk, {
                                    color: l.Ttl.PRIMARY,
                                    disabled: !0,
                                    className: j.button,
                                    children: v.intl.string(v.t['9KoPyM'])
                                }))
                    : U &&
                      !L &&
                      (el = (0, r.jsx)(l.zxk, {
                          submitting: W,
                          color: l.Ttl.BRAND,
                          onClick: null != er ? er : void 0,
                          className: j.button,
                          children: en
                      }))
            : (el = (0, r.jsx)(l.zxk, {
                  color: l.Ttl.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t['14o6QU'], { expiryDate: M })
              })),
    null == el)
        ? null
        : (0, r.jsxs)('div', {
              className: j.container,
              children: [
                  el,
                  ee &&
                      (0, r.jsx)(_.U, {
                          onSelect: et,
                          quest: N,
                          questContent: x.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, r.jsx)(l.zxk, {
                                  className: a()(j.button, j.platformSelectorSecondary),
                                  color: l.Ttl.PRIMARY,
                                  ...e,
                                  children: (0, r.jsxs)('div', {
                                      className: j.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case x.LI.DESKTOP:
                                                      return (0, r.jsx)(l.pzj, { color: 'currentColor' });
                                                  case x.LI.CONSOLE:
                                                      return (0, r.jsx)(l.iWm, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(K),
                                          (0, r.jsx)(l.CJ0, {
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
