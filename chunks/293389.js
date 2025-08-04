(n.d(t, { Z: () => M }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(692547),
    c = n(755721),
    d = n(481060),
    u = n(224706),
    m = n(225433),
    p = n(570928),
    g = n(594190),
    h = n(320724),
    f = n(297700),
    b = n(77498),
    x = n(283595),
    _ = n(626135),
    j = n(251625),
    C = n(358085),
    E = n(210887),
    O = n(981631),
    v = n(388032),
    S = n(443474),
    T = n(20795),
    N = n(893354),
    I = n(588866),
    y = n(20493);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = l.ZP.connectStores([E.Z], () => ({ theme: E.Z.theme }))(d.ubH),
    D = (0, C.isWindows)();
function Z(e) {
    let { onClose: t } = e,
        n = (0, l.e7)([g.ZP], () => g.ZP.getCandidateGames()),
        [s, o] = r.useState(null),
        m = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, i.jsxs)(d.VqE, {
        className: a()(S.addGamePopout, T.elevationBorderHigh),
        'aria-label': v.intl.string(v.t.GTCx0t),
        children: [
            (0, i.jsx)(d.VcW, {
                placeholder: v.intl.string(v.t.XqMe3N),
                value: s,
                options: m,
                onChange: function (e) {
                    o(e);
                },
                renderOptionLabel: (e) =>
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'text-default',
                        lineClamp: 1,
                        children: e.label
                    })
            }),
            (0, i.jsx)(d.$i$, { className: a()(y.marginTop8, y.marginBottom8) }),
            (0, i.jsxs)('div', {
                className: a()(S.actions, N.horizontal),
                children: [
                    (0, i.jsx)(c.zx, {
                        className: S.cancelButton,
                        look: c.iL.LINK,
                        color: c.Tt.PRIMARY,
                        onClick: t,
                        children: v.intl.string(v.t['ETE/oK'])
                    }),
                    (0, i.jsx)(d.zxk, {
                        variant: 'primary',
                        text: v.intl.string(v.t.GTCx0t),
                        disabled: null == s,
                        onClick: function () {
                            null != s && (u.Z.addGame(s.pid, s.name), t());
                        }
                    })
                ]
            })
        ]
    });
}
function w(e) {
    var t;
    let { rawGame: n, nowPlaying: s = !1, isOverride: c } = e,
        h = (0, l.cj)([g.ZP, b.Z, x.Z], () => (0, g.FZ)(n, g.ZP, b.Z, x.Z)),
        [j, C] = r.useState(!1),
        [E, T] = r.useState(null != (t = h.name) ? t : '???'),
        y = a()(N.flexCenter, {
            [S.game]: !s,
            [S.activeGame]: s,
            [I.card]: !s,
            [S.nowPlaying]: null != h && s
        });
    function R() {
        u.Z.toggleDetection(h);
    }
    function Z() {
        if (j) return;
        let e = null != h.id ? b.Z.getDetectableGame(h.id) : null;
        (_.default.track(O.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: h.name
        }),
            (0, d.showToast)((0, d.createToast)(v.intl.formatToPlainString(v.t['6klMOj'], { gameName: h.name }), d.ToastType.SUCCESS)),
            C(!0));
    }
    return (0, i.jsxs)('div', {
        className: y,
        children: [
            (0, i.jsxs)('div', {
                className: a()(S.gameNameLastPlayed, N.vertical),
                children: [
                    h.verified && !c
                        ? (0, i.jsxs)('div', {
                              className: S.detectedApplication,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: S.gameName,
                                      children: h.name
                                  }),
                                  (0, i.jsx)(d.ua7, {
                                      text: v.intl.string(v.t['4PJP5u']),
                                      children: (e) =>
                                          (0, i.jsx)(
                                              f.Z,
                                              P(
                                                  A(
                                                      {
                                                          className: S.gameVerifiedIcon,
                                                          size: 18,
                                                          color: o.Z.unsafe_rawColors.BRAND_500.css
                                                      },
                                                      e
                                                  ),
                                                  {
                                                      children: (0, i.jsx)(d.kmB, {
                                                          size: 'custom',
                                                          width: 18,
                                                          height: 18,
                                                          color: o.Z.unsafe_rawColors.WHITE_500.css
                                                      })
                                                  }
                                              )
                                          )
                                  })
                              ]
                          })
                        : (0, i.jsx)('input', {
                              className: a()(S.gameName, S.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: E,
                              onBlur: function () {
                                  h.name !== E && u.Z.editName(h, E);
                              },
                              onKeyDown: function (e) {
                                  13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
                              },
                              onChange: (e) => T(e.target.value)
                          }),
                    (function () {
                        let e,
                            { played: t, exePath: n } = h;
                        return (
                            s ? (e = v.intl.string(v.t.VbV5dn)) : null != t && '' !== t && (e = v.intl.format(v.t.gGeOEx, { when: t })),
                            (0, i.jsx)('div', {
                                className: S.lastPlayed,
                                children: (0, i.jsx)(p.Z, {
                                    hoverText: null != n && '' !== n ? n.toUpperCase() : '',
                                    children: e
                                })
                            })
                        );
                    })()
                ]
            }),
            c || j
                ? null
                : (0, i.jsx)('div', {
                      className: a()(N.flexCenter, N.noWrap, N.justifyBetween, S.toggleContainer),
                      children: (0, i.jsx)(d.ua7, {
                          text: v.intl.string(v.t['y0B+lp']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, i.jsx)(d.P3F, {
                                  'aria-label': v.intl.string(v.t['y0B+lp']),
                                  className: S.toggleIcon,
                                  onClick: Z,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: (0, i.jsx)(d.U65, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.toggleIconOn,
                                      colorClass: S.fill
                                  })
                              });
                          }
                      })
                  }),
            (function () {
                let { detectable: e } = h,
                    t = e
                        ? (0, i.jsx)(d.tEF, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOn,
                              colorClass: S.fill
                          })
                        : (0, i.jsx)(d.kZF, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOff,
                              colorClass: S.fill
                          });
                return (0, i.jsx)('div', {
                    className: a()(N.flexCenter, N.noWrap, N.justifyBetween, S.toggleContainer),
                    children: (0, i.jsx)(d.ua7, {
                        text: v.intl.string(v.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: r } = e;
                            return (0, i.jsx)(d.P3F, {
                                'aria-label': v.intl.string(v.t.QmitzM),
                                className: S.toggleIcon,
                                onClick: R,
                                onMouseEnter: n,
                                onMouseLeave: r,
                                children: t
                            });
                        }
                    })
                });
            })(),
            (function () {
                if (!D) return null;
                let { overlay: e, overlayWarn: t } = h,
                    n = e
                        ? (0, i.jsx)(d.pzj, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOn,
                              colorClass: S.fill
                          })
                        : (0, i.jsx)(d.o8v, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOff,
                              colorClass: S.fill
                          }),
                    r = t
                        ? (0, i.jsx)(d.ua7, {
                              text: v.intl.string(v.t.Vfw2Ly),
                              children: (e) => (0, i.jsx)('i', A({ className: S.overlayWarningIcon }, e))
                          })
                        : null;
                return (0, i.jsxs)('div', {
                    className: a()(N.flexCenter, N.noWrap, N.justifyBetween, S.toggleContainer),
                    children: [
                        r,
                        (0, i.jsx)(d.ua7, {
                            text: v.intl.string(v.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: r, onMouseLeave: s } = t;
                                return (0, i.jsx)(d.P3F, {
                                    'aria-label': v.intl.string(v.t['1+O+Tk']),
                                    className: S.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return ((t = !e), void u.Z.toggleOverlay(h, t, t));
                                    },
                                    onMouseEnter: r,
                                    onMouseLeave: s,
                                    children: n
                                });
                            }
                        })
                    ]
                });
            })(),
            !s || c
                ? (0, i.jsx)(m.Z, {
                      className: S.removeGame,
                      onClick: function () {
                          u.Z.deleteEntry(h);
                      }
                  })
                : null
        ]
    });
}
function k() {
    return (0, i.jsx)('div', {
        className: a()(N.flexCenter, S.notDetected, S.activeGame),
        children: (0, i.jsxs)('div', {
            className: a()(S.gameNameLastPlayed, N.vertical),
            children: [
                (0, i.jsx)('div', {
                    className: S.gameName,
                    children: v.intl.string(v.t['H68X9/'])
                }),
                (0, i.jsx)('div', {
                    className: S.lastPlayed,
                    children: v.intl.string(v.t.T5Ilm5)
                })
            ]
        })
    });
}
function L(e) {
    let { children: t } = e;
    return (0, i.jsxs)(R, {
        className: y.marginTop40,
        children: [
            (0, i.jsx)(d.oxh, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250
            }),
            t
        ]
    });
}
let B = (0, j.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    M = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            s = (0, l.Wu)([g.ZP], () => g.ZP.getGamesSeen(!0)),
            { runningGame: o, overrideExePaths: u } = (0, l.cj)([g.ZP], () => ({
                runningGame: g.ZP.getVisibleGame(),
                overrideExePaths: B(...g.ZP.getOverrides())
            })),
            m = r.useRef(null);
        return (
            r.useEffect(() => ((0, h.Ky)(), h.P7), []),
            (0, i.jsxs)(d.hjN, {
                tag: 'h1',
                title: n ? v.intl.string(v.t.AVDyEh) : null,
                className: t,
                children: [
                    null != o
                        ? (0, i.jsx)(
                              w,
                              {
                                  rawGame: o,
                                  isOverride: u.has(o.exePath),
                                  nowPlaying: !0
                              },
                              (0, g.rH)(o)
                          )
                        : (0, i.jsx)(k, {}),
                    (0, i.jsxs)('div', {
                        className: a()(S.nowPlayingAdd, y.marginReset, y.marginTop8, y.marginBottom20),
                        children: [
                            (0, i.jsx)('span', { children: v.intl.string(v.t.xwhoqK) }),
                            (0, i.jsx)(d.yRy, {
                                targetElementRef: m,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(Z, { onClose: t });
                                },
                                align: 'center',
                                position: 'bottom',
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zx,
                                        P(A({}, e), {
                                            look: c.iL.LINK,
                                            size: c.Ph.MIN,
                                            color: c.Tt.LINK,
                                            buttonRef: m,
                                            children: v.intl.string(v.t.GjgdXV)
                                        })
                                    )
                            })
                        ]
                    }),
                    0 === s.length
                        ? (0, i.jsx)(L, { children: (0, i.jsx)(d.OZU, { children: v.intl.string(v.t['1yiJws']) }) })
                        : (0, i.jsxs)(d.hjN, {
                              className: y.marginTop40,
                              children: [
                                  (0, i.jsx)(d.vwX, {
                                      className: y.marginBottom4,
                                      children: v.intl.string(v.t.jCOdv7)
                                  }),
                                  (0, i.jsx)(d.R94, {
                                      type: d.geA.DESCRIPTION,
                                      children: v.intl.format(v.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
                                  }),
                                  s.map((e) =>
                                      (0, i.jsx)(
                                          w,
                                          {
                                              rawGame: e,
                                              isOverride: u.has(e.exePath)
                                          },
                                          (0, g.rH)(e)
                                      )
                                  )
                              ]
                          })
                ]
            })
        );
    };
