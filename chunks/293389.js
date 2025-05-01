n.d(t, { Z: () => M }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(224706),
    u = n(225433),
    m = n(570928),
    p = n(594190),
    g = n(320724),
    h = n(297700),
    f = n(77498),
    b = n(283595),
    _ = n(626135),
    x = n(251625),
    E = n(358085),
    j = n(210887),
    C = n(981631),
    O = n(388032),
    S = n(443474),
    v = n(20795),
    T = n(893354),
    I = n(588866),
    N = n(20493);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function A(e, t) {
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
let P = a.ZP.connectStores([j.Z], () => ({ theme: j.Z.theme }))(c.ubH),
    R = (0, E.isWindows)();
function D(e) {
    let { onClose: t } = e,
        n = (0, a.e7)([p.ZP], () => p.ZP.getCandidateGames()),
        [s, o] = r.useState(null),
        u = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, i.jsxs)(c.VqE, {
        className: l()(S.addGamePopout, v.elevationBorderHigh),
        'aria-label': O.intl.string(O.t.GTCx0t),
        children: [
            (0, i.jsx)(c.VcW, {
                placeholder: O.intl.string(O.t.XqMe3N),
                value: s,
                options: u,
                onChange: function (e) {
                    o(e);
                },
                renderOptionLabel: (e) =>
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        lineClamp: 1,
                        children: e.label
                    })
            }),
            (0, i.jsx)(c.$i$, { className: l()(N.marginTop8, N.marginBottom8) }),
            (0, i.jsxs)('div', {
                className: l()(S.actions, T.horizontal),
                children: [
                    (0, i.jsx)(c.zxk, {
                        className: S.cancelButton,
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: t,
                        children: O.intl.string(O.t['ETE/oK'])
                    }),
                    (0, i.jsx)(c.zxk, {
                        disabled: null == s,
                        onClick: function () {
                            null != s && (d.Z.addGame(s.pid, s.name), t());
                        },
                        children: O.intl.string(O.t.GTCx0t)
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    var t;
    let { rawGame: n, nowPlaying: s = !1, isOverride: g } = e,
        x = (0, a.cj)([p.ZP, f.Z, b.Z], () => (0, p.FZ)(n, [p.ZP, f.Z, b.Z])),
        [E, j] = r.useState(!1),
        [v, N] = r.useState(null != (t = x.name) ? t : '???'),
        P = l()(T.flexCenter, {
            [S.game]: !s,
            [S.activeGame]: s,
            [I.card]: !s,
            [S.nowPlaying]: null != x && s
        });
    function D() {
        d.Z.toggleDetection(x);
    }
    function Z() {
        if (E) return;
        let e = null != x.id ? f.Z.getDetectableGame(x.id) : null;
        _.default.track(C.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: x.name
        }),
            (0, c.showToast)((0, c.createToast)(O.intl.formatToPlainString(O.t['6klMOj'], { gameName: x.name }), c.ToastType.SUCCESS)),
            j(!0);
    }
    return (0, i.jsxs)('div', {
        className: P,
        children: [
            (0, i.jsxs)('div', {
                className: l()(S.gameNameLastPlayed, T.vertical),
                children: [
                    x.verified && !g
                        ? (0, i.jsxs)('div', {
                              className: S.detectedApplication,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: S.gameName,
                                      children: x.name
                                  }),
                                  (0, i.jsx)(c.ua7, {
                                      text: O.intl.string(O.t['4PJP5u']),
                                      children: (e) =>
                                          (0, i.jsx)(
                                              h.Z,
                                              A(
                                                  y(
                                                      {
                                                          className: S.gameVerifiedIcon,
                                                          size: 18,
                                                          color: o.Z.unsafe_rawColors.BRAND_500.css
                                                      },
                                                      e
                                                  ),
                                                  {
                                                      children: (0, i.jsx)(c.kmB, {
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
                              className: l()(S.gameName, S.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: v,
                              onBlur: function () {
                                  x.name !== v && d.Z.editName(x, v);
                              },
                              onKeyDown: function (e) {
                                  13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
                              },
                              onChange: (e) => N(e.target.value)
                          }),
                    (function () {
                        let e,
                            { played: t, exePath: n } = x;
                        return (
                            s ? (e = O.intl.string(O.t.VbV5dn)) : null != t && '' !== t && (e = O.intl.format(O.t.gGeOEx, { when: t })),
                            (0, i.jsx)('div', {
                                className: S.lastPlayed,
                                children: (0, i.jsx)(m.Z, {
                                    hoverText: null != n && '' !== n ? n.toUpperCase() : '',
                                    children: e
                                })
                            })
                        );
                    })()
                ]
            }),
            g || E
                ? null
                : (0, i.jsx)('div', {
                      className: l()(T.flexCenter, T.noWrap, T.justifyBetween, S.toggleContainer),
                      children: (0, i.jsx)(c.ua7, {
                          text: O.intl.string(O.t['y0B+lp']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, i.jsx)(c.P3F, {
                                  'aria-label': O.intl.string(O.t['y0B+lp']),
                                  className: S.toggleIcon,
                                  onClick: Z,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: (0, i.jsx)(c.U65, {
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
                let { detectable: e } = x,
                    t = e
                        ? (0, i.jsx)(c.tEF, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOn,
                              colorClass: S.fill
                          })
                        : (0, i.jsx)(c.kZF, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOff,
                              colorClass: S.fill
                          });
                return (0, i.jsx)('div', {
                    className: l()(T.flexCenter, T.noWrap, T.justifyBetween, S.toggleContainer),
                    children: (0, i.jsx)(c.ua7, {
                        text: O.intl.string(O.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: r } = e;
                            return (0, i.jsx)(c.P3F, {
                                'aria-label': O.intl.string(O.t.QmitzM),
                                className: S.toggleIcon,
                                onClick: D,
                                onMouseEnter: n,
                                onMouseLeave: r,
                                children: t
                            });
                        }
                    })
                });
            })(),
            (function () {
                if (!R) return null;
                let { overlay: e, overlayWarn: t } = x,
                    n = e
                        ? (0, i.jsx)(c.pzj, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOn,
                              colorClass: S.fill
                          })
                        : (0, i.jsx)(c.o8v, {
                              size: 'md',
                              color: 'currentColor',
                              className: S.toggleIconOff,
                              colorClass: S.fill
                          }),
                    r = t
                        ? (0, i.jsx)(c.ua7, {
                              text: O.intl.string(O.t.Vfw2Ly),
                              children: (e) => (0, i.jsx)('i', y({ className: S.overlayWarningIcon }, e))
                          })
                        : null;
                return (0, i.jsxs)('div', {
                    className: l()(T.flexCenter, T.noWrap, T.justifyBetween, S.toggleContainer),
                    children: [
                        r,
                        (0, i.jsx)(c.ua7, {
                            text: O.intl.string(O.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: r, onMouseLeave: s } = t;
                                return (0, i.jsx)(c.P3F, {
                                    'aria-label': O.intl.string(O.t['1+O+Tk']),
                                    className: S.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return (t = !e), void d.Z.toggleOverlay(x, t, t);
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
            !s || g
                ? (0, i.jsx)(u.Z, {
                      className: S.removeGame,
                      onClick: function () {
                          d.Z.deleteEntry(x);
                      }
                  })
                : null
        ]
    });
}
function w() {
    return (0, i.jsx)('div', {
        className: l()(T.flexCenter, S.notDetected, S.activeGame),
        children: (0, i.jsxs)('div', {
            className: l()(S.gameNameLastPlayed, T.vertical),
            children: [
                (0, i.jsx)('div', {
                    className: S.gameName,
                    children: O.intl.string(O.t['H68X9/'])
                }),
                (0, i.jsx)('div', {
                    className: S.lastPlayed,
                    children: O.intl.string(O.t.T5Ilm5)
                })
            ]
        })
    });
}
function k(e) {
    let { children: t } = e;
    return (0, i.jsxs)(P, {
        className: N.marginTop40,
        children: [
            (0, i.jsx)(c.oxh, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250
            }),
            t
        ]
    });
}
let L = (0, x.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    M = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            s = (0, a.Wu)([p.ZP], () => p.ZP.getGamesSeen(!0)),
            { runningGame: o, overrideExePaths: d } = (0, a.cj)([p.ZP], () => ({
                runningGame: p.ZP.getVisibleGame(),
                overrideExePaths: L(...p.ZP.getOverrides())
            }));
        return (
            r.useEffect(() => ((0, g.Ky)(), g.P7), []),
            (0, i.jsxs)(c.hjN, {
                tag: 'h1',
                title: n ? O.intl.string(O.t.AVDyEh) : null,
                className: t,
                children: [
                    null != o
                        ? (0, i.jsx)(
                              Z,
                              {
                                  rawGame: o,
                                  isOverride: d.has(o.exePath),
                                  nowPlaying: !0
                              },
                              (0, p.rH)(o)
                          )
                        : (0, i.jsx)(w, {}),
                    (0, i.jsxs)('div', {
                        className: l()(S.nowPlayingAdd, N.marginReset, N.marginTop8, N.marginBottom20),
                        children: [
                            (0, i.jsx)('span', { children: O.intl.string(O.t.xwhoqK) }),
                            (0, i.jsx)(c.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(D, { onClose: t });
                                },
                                align: 'center',
                                position: 'bottom',
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zxk,
                                        A(y({}, e), {
                                            look: c.iLD.LINK,
                                            size: c.PhG.MIN,
                                            color: c.Ttl.LINK,
                                            children: O.intl.string(O.t.GjgdXV)
                                        })
                                    )
                            })
                        ]
                    }),
                    0 === s.length
                        ? (0, i.jsx)(k, { children: (0, i.jsx)(c.OZU, { children: O.intl.string(O.t['1yiJws']) }) })
                        : (0, i.jsxs)(c.hjN, {
                              className: N.marginTop40,
                              children: [
                                  (0, i.jsx)(c.vwX, {
                                      className: N.marginBottom4,
                                      children: O.intl.string(O.t.jCOdv7)
                                  }),
                                  (0, i.jsx)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: O.intl.format(O.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
                                  }),
                                  s.map((e) =>
                                      (0, i.jsx)(
                                          Z,
                                          {
                                              rawGame: e,
                                              isOverride: d.has(e.exePath)
                                          },
                                          (0, p.rH)(e)
                                      )
                                  )
                              ]
                          })
                ]
            })
        );
    };
