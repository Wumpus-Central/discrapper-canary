(n.d(t, { Z: () => B }), n(388685));
var i = n(255367),
    r = n(73800),
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
    x = n(626135),
    _ = n(251625),
    E = n(358085),
    j = n(210887),
    O = n(981631),
    C = n(388032),
    S = n(443474),
    v = n(20795),
    T = n(893354),
    N = n(588866),
    I = n(20493);
function y(e) {
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
        'aria-label': C.intl.string(C.t.GTCx0t),
        children: [
            (0, i.jsx)(c.VcW, {
                placeholder: C.intl.string(C.t.XqMe3N),
                value: s,
                options: u,
                onChange: function (e) {
                    o(e);
                },
                renderOptionLabel: (e) =>
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-default',
                        lineClamp: 1,
                        children: e.label
                    })
            }),
            (0, i.jsx)(c.$i$, { className: l()(I.marginTop8, I.marginBottom8) }),
            (0, i.jsxs)('div', {
                className: l()(S.actions, T.horizontal),
                children: [
                    (0, i.jsx)(c.zxk, {
                        className: S.cancelButton,
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: t,
                        children: C.intl.string(C.t['ETE/oK'])
                    }),
                    (0, i.jsx)(c.zxk, {
                        disabled: null == s,
                        onClick: function () {
                            null != s && (d.Z.addGame(s.pid, s.name), t());
                        },
                        children: C.intl.string(C.t.GTCx0t)
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    var t;
    let { rawGame: n, nowPlaying: s = !1, isOverride: g } = e,
        _ = (0, a.cj)([p.ZP, f.Z, b.Z], () => (0, p.FZ)(n, [p.ZP, f.Z, b.Z])),
        [E, j] = r.useState(!1),
        [v, I] = r.useState(null != (t = _.name) ? t : '???'),
        P = l()(T.flexCenter, {
            [S.game]: !s,
            [S.activeGame]: s,
            [N.card]: !s,
            [S.nowPlaying]: null != _ && s
        });
    function D() {
        d.Z.toggleDetection(_);
    }
    function Z() {
        if (E) return;
        let e = null != _.id ? f.Z.getDetectableGame(_.id) : null;
        (x.default.track(O.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: _.name
        }),
            (0, c.showToast)((0, c.createToast)(C.intl.formatToPlainString(C.t['6klMOj'], { gameName: _.name }), c.ToastType.SUCCESS)),
            j(!0));
    }
    return (0, i.jsxs)('div', {
        className: P,
        children: [
            (0, i.jsxs)('div', {
                className: l()(S.gameNameLastPlayed, T.vertical),
                children: [
                    _.verified && !g
                        ? (0, i.jsxs)('div', {
                              className: S.detectedApplication,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: S.gameName,
                                      children: _.name
                                  }),
                                  (0, i.jsx)(c.ua7, {
                                      text: C.intl.string(C.t['4PJP5u']),
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
                                  _.name !== v && d.Z.editName(_, v);
                              },
                              onKeyDown: function (e) {
                                  13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
                              },
                              onChange: (e) => I(e.target.value)
                          }),
                    (function () {
                        let e,
                            { played: t, exePath: n } = _;
                        return (
                            s ? (e = C.intl.string(C.t.VbV5dn)) : null != t && '' !== t && (e = C.intl.format(C.t.gGeOEx, { when: t })),
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
                          text: C.intl.string(C.t['y0B+lp']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, i.jsx)(c.P3F, {
                                  'aria-label': C.intl.string(C.t['y0B+lp']),
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
                let { detectable: e } = _,
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
                        text: C.intl.string(C.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: r } = e;
                            return (0, i.jsx)(c.P3F, {
                                'aria-label': C.intl.string(C.t.QmitzM),
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
                let { overlay: e, overlayWarn: t } = _,
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
                              text: C.intl.string(C.t.Vfw2Ly),
                              children: (e) => (0, i.jsx)('i', y({ className: S.overlayWarningIcon }, e))
                          })
                        : null;
                return (0, i.jsxs)('div', {
                    className: l()(T.flexCenter, T.noWrap, T.justifyBetween, S.toggleContainer),
                    children: [
                        r,
                        (0, i.jsx)(c.ua7, {
                            text: C.intl.string(C.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: r, onMouseLeave: s } = t;
                                return (0, i.jsx)(c.P3F, {
                                    'aria-label': C.intl.string(C.t['1+O+Tk']),
                                    className: S.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return ((t = !e), void d.Z.toggleOverlay(_, t, t));
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
                          d.Z.deleteEntry(_);
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
                    children: C.intl.string(C.t['H68X9/'])
                }),
                (0, i.jsx)('div', {
                    className: S.lastPlayed,
                    children: C.intl.string(C.t.T5Ilm5)
                })
            ]
        })
    });
}
function k(e) {
    let { children: t } = e;
    return (0, i.jsxs)(P, {
        className: I.marginTop40,
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
let L = (0, _.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    B = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            s = (0, a.Wu)([p.ZP], () => p.ZP.getGamesSeen(!0)),
            { runningGame: o, overrideExePaths: d } = (0, a.cj)([p.ZP], () => ({
                runningGame: p.ZP.getVisibleGame(),
                overrideExePaths: L(...p.ZP.getOverrides())
            })),
            u = r.useRef(null);
        return (
            r.useEffect(() => ((0, g.Ky)(), g.P7), []),
            (0, i.jsxs)(c.hjN, {
                tag: 'h1',
                title: n ? C.intl.string(C.t.AVDyEh) : null,
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
                        className: l()(S.nowPlayingAdd, I.marginReset, I.marginTop8, I.marginBottom20),
                        children: [
                            (0, i.jsx)('span', { children: C.intl.string(C.t.xwhoqK) }),
                            (0, i.jsx)(c.yRy, {
                                targetElementRef: u,
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
                                            buttonRef: u,
                                            children: C.intl.string(C.t.GjgdXV)
                                        })
                                    )
                            })
                        ]
                    }),
                    0 === s.length
                        ? (0, i.jsx)(k, { children: (0, i.jsx)(c.OZU, { children: C.intl.string(C.t['1yiJws']) }) })
                        : (0, i.jsxs)(c.hjN, {
                              className: I.marginTop40,
                              children: [
                                  (0, i.jsx)(c.vwX, {
                                      className: I.marginBottom4,
                                      children: C.intl.string(C.t.jCOdv7)
                                  }),
                                  (0, i.jsx)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: C.intl.format(C.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
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
