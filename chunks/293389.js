n.d(t, { Z: () => L }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(224706),
    u = n(225433),
    m = n(570928),
    g = n(594190),
    p = n(320724),
    h = n(297700),
    f = n(77498),
    b = n(283595),
    N = n(626135),
    x = n(251625),
    _ = n(358085),
    E = n(210887),
    j = n(981631),
    O = n(388032),
    C = n(443474),
    S = n(20795),
    v = n(893354),
    T = n(588866),
    I = n(20493);
function y(e) {
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
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = l.ZP.connectStores([E.Z], () => ({ theme: E.Z.theme }))(c.ubH),
    R = (0, _.isWindows)();
function D(e) {
    let { onClose: t } = e,
        n = (0, l.e7)([g.ZP], () => g.ZP.getCandidateGames()),
        [s, o] = i.useState(null),
        u = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, r.jsxs)(c.VqE, {
        className: a()(C.addGamePopout, S.elevationBorderHigh),
        'aria-label': O.NW.string(O.t.GTCx0t),
        children: [
            (0, r.jsx)(c.VcW, {
                placeholder: O.NW.string(O.t.XqMe3N),
                value: s,
                options: u,
                onChange: function (e) {
                    o(e);
                },
                renderOptionLabel: (e) =>
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        lineClamp: 1,
                        children: e.label
                    })
            }),
            (0, r.jsx)(c.$i$, { className: a()(I.marginTop8, I.marginBottom8) }),
            (0, r.jsxs)('div', {
                className: a()(C.actions, v.horizontal),
                children: [
                    (0, r.jsx)(c.zxk, {
                        className: C.cancelButton,
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: t,
                        children: O.NW.string(O.t['ETE/oK'])
                    }),
                    (0, r.jsx)(c.zxk, {
                        disabled: null == s,
                        onClick: function () {
                            null != s && (d.Z.addGame(s.pid, s.name), t());
                        },
                        children: O.NW.string(O.t.GTCx0t)
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    var t;
    let { rawGame: n, nowPlaying: s = !1, isOverride: p } = e,
        x = (0, l.cj)([g.ZP, f.Z, b.Z], () => (0, g.FZ)(n, [g.ZP, f.Z, b.Z])),
        [_, E] = i.useState(!1),
        [S, I] = i.useState(null != (t = x.name) ? t : '???'),
        P = a()(v.flexCenter, {
            [C.game]: !s,
            [C.activeGame]: s,
            [T.card]: !s,
            [C.nowPlaying]: null != x && s
        });
    function D() {
        d.Z.toggleDetection(x);
    }
    function Z() {
        if (_) return;
        let e = null != x.id ? f.Z.getDetectableGame(x.id) : null;
        N.default.track(j.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: x.name
        }),
            (0, c.showToast)((0, c.createToast)(O.NW.formatToPlainString(O.t['6klMOj'], { gameName: x.name }), c.ToastType.SUCCESS)),
            E(!0);
    }
    return (0, r.jsxs)('div', {
        className: P,
        children: [
            (0, r.jsxs)('div', {
                className: a()(C.gameNameLastPlayed, v.vertical),
                children: [
                    x.verified && !p
                        ? (0, r.jsxs)('div', {
                              className: C.detectedApplication,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: C.gameName,
                                      children: x.name
                                  }),
                                  (0, r.jsx)(c.ua7, {
                                      text: O.NW.string(O.t['4PJP5u']),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              h.Z,
                                              A(
                                                  y(
                                                      {
                                                          className: C.gameVerifiedIcon,
                                                          size: 18,
                                                          color: o.Z.unsafe_rawColors.BRAND_500.css
                                                      },
                                                      e
                                                  ),
                                                  {
                                                      children: (0, r.jsx)(c.kmB, {
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
                        : (0, r.jsx)('input', {
                              className: a()(C.gameName, C.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: S,
                              onBlur: function () {
                                  x.name !== S && d.Z.editName(x, S);
                              },
                              onKeyDown: function (e) {
                                  13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
                              },
                              onChange: (e) => I(e.target.value)
                          }),
                    (function () {
                        let e,
                            { played: t, exePath: n } = x;
                        return (
                            s ? (e = O.NW.string(O.t.VbV5dn)) : null != t && '' !== t && (e = O.NW.format(O.t.gGeOEx, { when: t })),
                            (0, r.jsx)('div', {
                                className: C.lastPlayed,
                                children: (0, r.jsx)(m.Z, {
                                    hoverText: null != n && '' !== n ? n.toUpperCase() : '',
                                    children: e
                                })
                            })
                        );
                    })()
                ]
            }),
            p || _
                ? null
                : (0, r.jsx)('div', {
                      className: a()(v.flexCenter, v.noWrap, v.justifyBetween, C.toggleContainer),
                      children: (0, r.jsx)(c.ua7, {
                          text: O.NW.string(O.t['y0B+lp']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, r.jsx)(c.P3F, {
                                  'aria-label': O.NW.string(O.t['y0B+lp']),
                                  className: C.toggleIcon,
                                  onClick: Z,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: (0, r.jsx)(c.U65, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: C.toggleIconOn,
                                      colorClass: C.fill
                                  })
                              });
                          }
                      })
                  }),
            (function () {
                let { detectable: e } = x,
                    t = e
                        ? (0, r.jsx)(c.tEF, {
                              size: 'md',
                              color: 'currentColor',
                              className: C.toggleIconOn,
                              colorClass: C.fill
                          })
                        : (0, r.jsx)(c.kZF, {
                              size: 'md',
                              color: 'currentColor',
                              className: C.toggleIconOff,
                              colorClass: C.fill
                          });
                return (0, r.jsx)('div', {
                    className: a()(v.flexCenter, v.noWrap, v.justifyBetween, C.toggleContainer),
                    children: (0, r.jsx)(c.ua7, {
                        text: O.NW.string(O.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: i } = e;
                            return (0, r.jsx)(c.P3F, {
                                'aria-label': O.NW.string(O.t.QmitzM),
                                className: C.toggleIcon,
                                onClick: D,
                                onMouseEnter: n,
                                onMouseLeave: i,
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
                        ? (0, r.jsx)(c.pzj, {
                              size: 'md',
                              color: 'currentColor',
                              className: C.toggleIconOn,
                              colorClass: C.fill
                          })
                        : (0, r.jsx)(c.o8v, {
                              size: 'md',
                              color: 'currentColor',
                              className: C.toggleIconOff,
                              colorClass: C.fill
                          }),
                    i = t
                        ? (0, r.jsx)(c.ua7, {
                              text: O.NW.string(O.t.Vfw2Ly),
                              children: (e) => (0, r.jsx)('i', y({ className: C.overlayWarningIcon }, e))
                          })
                        : null;
                return (0, r.jsxs)('div', {
                    className: a()(v.flexCenter, v.noWrap, v.justifyBetween, C.toggleContainer),
                    children: [
                        i,
                        (0, r.jsx)(c.ua7, {
                            text: O.NW.string(O.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: i, onMouseLeave: s } = t;
                                return (0, r.jsx)(c.P3F, {
                                    'aria-label': O.NW.string(O.t['1+O+Tk']),
                                    className: C.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return (t = !e), void d.Z.toggleOverlay(x, t, t);
                                    },
                                    onMouseEnter: i,
                                    onMouseLeave: s,
                                    children: n
                                });
                            }
                        })
                    ]
                });
            })(),
            !s || p
                ? (0, r.jsx)(u.Z, {
                      className: C.removeGame,
                      onClick: function () {
                          d.Z.deleteEntry(x);
                      }
                  })
                : null
        ]
    });
}
function w() {
    return (0, r.jsx)('div', {
        className: a()(v.flexCenter, C.notDetected, C.activeGame),
        children: (0, r.jsxs)('div', {
            className: a()(C.gameNameLastPlayed, v.vertical),
            children: [
                (0, r.jsx)('div', {
                    className: C.gameName,
                    children: O.NW.string(O.t['H68X9/'])
                }),
                (0, r.jsx)('div', {
                    className: C.lastPlayed,
                    children: O.NW.string(O.t.T5Ilm5)
                })
            ]
        })
    });
}
function k(e) {
    let { children: t } = e;
    return (0, r.jsxs)(P, {
        className: I.marginTop40,
        children: [
            (0, r.jsx)(c.oxh, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250
            }),
            t
        ]
    });
}
let W = (0, x.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    L = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            s = (0, l.Wu)([g.ZP], () => g.ZP.getGamesSeen(!0)),
            { runningGame: o, overrideExePaths: d } = (0, l.cj)([g.ZP], () => ({
                runningGame: g.ZP.getVisibleGame(),
                overrideExePaths: W(...g.ZP.getOverrides())
            }));
        return (
            i.useEffect(() => ((0, p.Ky)(), p.P7), []),
            (0, r.jsxs)(c.hjN, {
                tag: 'h1',
                title: n ? O.NW.string(O.t.AVDyEh) : null,
                className: t,
                children: [
                    null != o
                        ? (0, r.jsx)(
                              Z,
                              {
                                  rawGame: o,
                                  isOverride: d.has(o.exePath),
                                  nowPlaying: !0
                              },
                              (0, g.rH)(o)
                          )
                        : (0, r.jsx)(w, {}),
                    (0, r.jsxs)('div', {
                        className: a()(C.nowPlayingAdd, I.marginReset, I.marginTop8, I.marginBottom20),
                        children: [
                            (0, r.jsx)('span', { children: O.NW.string(O.t.xwhoqK) }),
                            (0, r.jsx)(c.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(D, { onClose: t });
                                },
                                align: 'center',
                                position: 'bottom',
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.zxk,
                                        A(y({}, e), {
                                            look: c.iLD.LINK,
                                            size: c.PhG.MIN,
                                            color: c.Ttl.LINK,
                                            children: O.NW.string(O.t.GjgdXV)
                                        })
                                    )
                            })
                        ]
                    }),
                    0 === s.length
                        ? (0, r.jsx)(k, { children: (0, r.jsx)(c.OZU, { children: O.NW.string(O.t['1yiJws']) }) })
                        : (0, r.jsxs)(c.hjN, {
                              className: I.marginTop40,
                              children: [
                                  (0, r.jsx)(c.vwX, {
                                      className: I.marginBottom4,
                                      children: O.NW.string(O.t.jCOdv7)
                                  }),
                                  (0, r.jsx)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: O.NW.format(O.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
                                  }),
                                  s.map((e) =>
                                      (0, r.jsx)(
                                          Z,
                                          {
                                              rawGame: e,
                                              isOverride: d.has(e.exePath)
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
