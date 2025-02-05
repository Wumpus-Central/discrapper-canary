n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(224706),
    u = n(225433),
    m = n(570928),
    h = n(594190),
    g = n(320724),
    _ = n(297700),
    x = n(77498),
    p = n(283595),
    E = n(626135),
    C = n(251625),
    f = n(358085),
    T = n(210887),
    N = n(981631),
    I = n(388032),
    S = n(621360),
    b = n(616926),
    v = n(652849),
    j = n(684309),
    A = n(232186);
let O = a.ZP.connectStores([T.Z], () => ({ theme: T.Z.theme }))(c.ubH),
    R = (0, f.isWindows)();
function P(e) {
    let { onClose: t } = e,
        n = (0, a.e7)([h.ZP], () => h.ZP.getCandidateGames()),
        [r, o] = s.useState(null),
        u = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, i.jsxs)(c.VqE, {
        className: l()(S.addGamePopout, b.elevationBorderHigh),
        'aria-label': I.intl.string(I.t.GTCx0t),
        children: [
            (0, i.jsx)(c.VcW, {
                placeholder: I.intl.string(I.t.XqMe3N),
                value: r,
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
            (0, i.jsx)(c.$i$, { className: l()(A.marginTop8, A.marginBottom8) }),
            (0, i.jsxs)('div', {
                className: l()(S.actions, v.horizontal),
                children: [
                    (0, i.jsx)(c.zxk, {
                        className: S.cancelButton,
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: t,
                        children: I.intl.string(I.t['ETE/oK'])
                    }),
                    (0, i.jsx)(c.zxk, {
                        disabled: null == r,
                        onClick: function () {
                            null != r && (d.Z.addGame(r.pid, r.name), t());
                        },
                        children: I.intl.string(I.t.GTCx0t)
                    })
                ]
            })
        ]
    });
}
function D(e) {
    var t;
    let { rawGame: n, nowPlaying: r = !1, isOverride: g } = e,
        C = (0, a.cj)([h.ZP, x.Z, p.Z], () => (0, h.FZ)(n, [h.ZP, x.Z, p.Z])),
        [f, T] = s.useState(!1),
        [b, A] = s.useState(null !== (t = C.name) && void 0 !== t ? t : '???'),
        O = l()(v.flexCenter, {
            [S.game]: !r,
            [S.activeGame]: r,
            [j.card]: !r,
            [S.nowPlaying]: null != C && r
        });
    function P() {
        d.Z.toggleDetection(C);
    }
    function D() {
        if (f) return;
        let e = null != C.id ? x.Z.getDetectableGame(C.id) : null;
        E.default.track(N.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: C.name
        }),
            (0, c.showToast)((0, c.createToast)(I.intl.formatToPlainString(I.t['6klMOj'], { gameName: C.name }), c.ToastType.SUCCESS)),
            T(!0);
    }
    return (0, i.jsxs)('div', {
        className: O,
        children: [
            (0, i.jsxs)('div', {
                className: l()(S.gameNameLastPlayed, v.vertical),
                children: [
                    C.verified && !g
                        ? (0, i.jsxs)('div', {
                              className: S.detectedApplication,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: S.gameName,
                                      children: C.name
                                  }),
                                  (0, i.jsx)(c.ua7, {
                                      text: I.intl.string(I.t['4PJP5u']),
                                      children: (e) =>
                                          (0, i.jsx)(_.Z, {
                                              className: S.gameVerifiedIcon,
                                              size: 18,
                                              color: o.Z.unsafe_rawColors.BRAND_500.css,
                                              ...e,
                                              children: (0, i.jsx)(c.kmB, {
                                                  size: 'custom',
                                                  width: 18,
                                                  height: 18,
                                                  color: o.Z.unsafe_rawColors.WHITE_500.css
                                              })
                                          })
                                  })
                              ]
                          })
                        : (0, i.jsx)('input', {
                              className: l()(S.gameName, S.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: b,
                              onBlur: function () {
                                  C.name !== b && d.Z.editName(C, b);
                              },
                              onKeyDown: function (e) {
                                  13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
                              },
                              onChange: (e) => A(e.target.value)
                          }),
                    (function () {
                        let e;
                        let { played: t, exePath: n } = C;
                        return (
                            r ? (e = I.intl.string(I.t.VbV5dn)) : null != t && '' !== t && (e = I.intl.format(I.t.gGeOEx, { when: t })),
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
            g
                ? null
                : f
                  ? null
                  : (0, i.jsx)('div', {
                        className: l()(v.flexCenter, v.noWrap, v.justifyBetween, S.toggleContainer),
                        children: (0, i.jsx)(c.ua7, {
                            text: I.intl.string(I.t['y0B+lp']),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.P3F, {
                                    'aria-label': I.intl.string(I.t['y0B+lp']),
                                    className: S.toggleIcon,
                                    onClick: D,
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
                let { detectable: e } = C,
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
                    className: l()(v.flexCenter, v.noWrap, v.justifyBetween, S.toggleContainer),
                    children: (0, i.jsx)(c.ua7, {
                        text: I.intl.string(I.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: s } = e;
                            return (0, i.jsx)(c.P3F, {
                                'aria-label': I.intl.string(I.t.QmitzM),
                                className: S.toggleIcon,
                                onClick: P,
                                onMouseEnter: n,
                                onMouseLeave: s,
                                children: t
                            });
                        }
                    })
                });
            })(),
            (function () {
                if (!R) return null;
                let { overlay: e, overlayWarn: t } = C,
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
                    s = t
                        ? (0, i.jsx)(c.ua7, {
                              text: I.intl.string(I.t.Vfw2Ly),
                              children: (e) =>
                                  (0, i.jsx)('i', {
                                      className: S.overlayWarningIcon,
                                      ...e
                                  })
                          })
                        : null;
                return (0, i.jsxs)('div', {
                    className: l()(v.flexCenter, v.noWrap, v.justifyBetween, S.toggleContainer),
                    children: [
                        s,
                        (0, i.jsx)(c.ua7, {
                            text: I.intl.string(I.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: s, onMouseLeave: r } = t;
                                return (0, i.jsx)(c.P3F, {
                                    'aria-label': I.intl.string(I.t['1+O+Tk']),
                                    className: S.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return (t = !e), void d.Z.toggleOverlay(C, t, t);
                                    },
                                    onMouseEnter: s,
                                    onMouseLeave: r,
                                    children: n
                                });
                            }
                        })
                    ]
                });
            })(),
            !r || g
                ? (0, i.jsx)(u.Z, {
                      className: S.removeGame,
                      onClick: function () {
                          d.Z.deleteEntry(C);
                      }
                  })
                : null
        ]
    });
}
function y() {
    return (0, i.jsx)('div', {
        className: l()(v.flexCenter, S.notDetected, S.activeGame),
        children: (0, i.jsxs)('div', {
            className: l()(S.gameNameLastPlayed, v.vertical),
            children: [
                (0, i.jsx)('div', {
                    className: S.gameName,
                    children: I.intl.string(I.t['H68X9/'])
                }),
                (0, i.jsx)('div', {
                    className: S.lastPlayed,
                    children: I.intl.string(I.t.T5Ilm5)
                })
            ]
        })
    });
}
function Z(e) {
    let { children: t } = e;
    return (0, i.jsxs)(O, {
        className: A.marginTop40,
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
let k = (0, C.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    L = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            r = (0, a.Wu)([h.ZP], () => h.ZP.getGamesSeen(!0)),
            { runningGame: o, overrideExePaths: d } = (0, a.cj)([h.ZP], () => ({
                runningGame: h.ZP.getVisibleGame(),
                overrideExePaths: k(...h.ZP.getOverrides())
            }));
        return (
            s.useEffect(() => ((0, g.Ky)(), g.P7), []),
            (0, i.jsxs)(c.hjN, {
                tag: 'h1',
                title: n ? I.intl.string(I.t.AVDyEh) : null,
                className: t,
                children: [
                    null != o
                        ? (0, i.jsx)(
                              D,
                              {
                                  rawGame: o,
                                  isOverride: d.has(o.exePath),
                                  nowPlaying: !0
                              },
                              (0, h.rH)(o)
                          )
                        : (0, i.jsx)(y, {}),
                    (0, i.jsxs)('div', {
                        className: l()(S.nowPlayingAdd, A.marginReset, A.marginTop8, A.marginBottom20),
                        children: [
                            (0, i.jsx)('span', { children: I.intl.string(I.t.xwhoqK) }),
                            (0, i.jsx)(c.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(P, { onClose: t });
                                },
                                align: 'center',
                                position: 'bottom',
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        look: c.iLD.LINK,
                                        size: c.PhG.MIN,
                                        color: c.Ttl.LINK,
                                        children: I.intl.string(I.t.GjgdXV)
                                    })
                            })
                        ]
                    }),
                    0 === r.length
                        ? (0, i.jsx)(Z, { children: (0, i.jsx)(c.OZU, { children: I.intl.string(I.t['1yiJws']) }) })
                        : (0, i.jsxs)(c.hjN, {
                              className: A.marginTop40,
                              children: [
                                  (0, i.jsx)(c.vwX, {
                                      className: A.marginBottom4,
                                      children: I.intl.string(I.t.jCOdv7)
                                  }),
                                  (0, i.jsx)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: I.intl.format(I.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
                                  }),
                                  r.map((e) =>
                                      (0, i.jsx)(
                                          D,
                                          {
                                              rawGame: e,
                                              isOverride: d.has(e.exePath)
                                          },
                                          (0, h.rH)(e)
                                      )
                                  )
                              ]
                          })
                ]
            })
        );
    };
