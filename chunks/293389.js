n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(224706),
    u = n(225433),
    h = n(570928),
    m = n(594190),
    g = n(320724),
    x = n(297700),
    _ = n(77498),
    p = n(283595),
    E = n(626135),
    C = n(251625),
    f = n(358085),
    N = n(210887),
    I = n(981631),
    T = n(388032),
    S = n(841168),
    j = n(60412),
    v = n(801194),
    b = n(937551),
    A = n(814632);
let O = a.ZP.connectStores([N.Z], () => ({ theme: N.Z.theme }))(c.ubH),
    R = (0, f.isWindows)();
function D(e) {
    let { onClose: t } = e,
        n = (0, a.e7)([m.ZP], () => m.ZP.getCandidateGames()),
        [l, o] = s.useState(null),
        u = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, i.jsxs)(c.VqE, {
        className: r()(S.addGamePopout, j.elevationBorderHigh),
        'aria-label': T.intl.string(T.t.GTCx0t),
        children: [
            (0, i.jsx)(c.VcW, {
                placeholder: T.intl.string(T.t.XqMe3N),
                value: l,
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
            (0, i.jsx)(c.$i$, { className: r()(A.marginTop8, A.marginBottom8) }),
            (0, i.jsxs)('div', {
                className: r()(S.actions, v.horizontal),
                children: [
                    (0, i.jsx)(c.zxk, {
                        className: S.cancelButton,
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: t,
                        children: T.intl.string(T.t['ETE/oK'])
                    }),
                    (0, i.jsx)(c.zxk, {
                        disabled: null == l,
                        onClick: function () {
                            null != l && (d.Z.addGame(l.pid, l.name), t());
                        },
                        children: T.intl.string(T.t.GTCx0t)
                    })
                ]
            })
        ]
    });
}
function P(e) {
    var t;
    let { rawGame: n, nowPlaying: l = !1, isOverride: g } = e,
        C = (0, a.cj)([m.ZP, _.Z, p.Z], () => (0, m.FZ)(n, [m.ZP, _.Z, p.Z])),
        [f, N] = s.useState(!1),
        [j, A] = s.useState(null !== (t = C.name) && void 0 !== t ? t : '???'),
        O = r()(v.flexCenter, {
            [S.game]: !l,
            [S.activeGame]: l,
            [b.card]: !l,
            [S.nowPlaying]: null != C && l
        });
    function D() {
        d.Z.toggleDetection(C);
    }
    function P() {
        if (f) return;
        let e = null != C.id ? _.Z.getDetectableGame(C.id) : null;
        E.default.track(I.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: C.name
        }),
            (0, c.showToast)((0, c.createToast)(T.intl.formatToPlainString(T.t['6klMOj'], { gameName: C.name }), c.ToastType.SUCCESS)),
            N(!0);
    }
    return (0, i.jsxs)('div', {
        className: O,
        children: [
            (0, i.jsxs)('div', {
                className: r()(S.gameNameLastPlayed, v.vertical),
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
                                      text: T.intl.string(T.t['4PJP5u']),
                                      children: (e) =>
                                          (0, i.jsx)(x.Z, {
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
                              className: r()(S.gameName, S.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: j,
                              onBlur: function () {
                                  C.name !== j && d.Z.editName(C, j);
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
                            l ? (e = T.intl.string(T.t.VbV5dn)) : null != t && '' !== t && (e = T.intl.format(T.t.gGeOEx, { when: t })),
                            (0, i.jsx)('div', {
                                className: S.lastPlayed,
                                children: (0, i.jsx)(h.Z, {
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
                        className: r()(v.flexCenter, v.noWrap, v.justifyBetween, S.toggleContainer),
                        children: (0, i.jsx)(c.ua7, {
                            text: T.intl.string(T.t['y0B+lp']),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.P3F, {
                                    'aria-label': T.intl.string(T.t['y0B+lp']),
                                    className: S.toggleIcon,
                                    onClick: P,
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
                    className: r()(v.flexCenter, v.noWrap, v.justifyBetween, S.toggleContainer),
                    children: (0, i.jsx)(c.ua7, {
                        text: T.intl.string(T.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: s } = e;
                            return (0, i.jsx)(c.P3F, {
                                'aria-label': T.intl.string(T.t.QmitzM),
                                className: S.toggleIcon,
                                onClick: D,
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
                              text: T.intl.string(T.t.Vfw2Ly),
                              children: (e) =>
                                  (0, i.jsx)('i', {
                                      className: S.overlayWarningIcon,
                                      ...e
                                  })
                          })
                        : null;
                return (0, i.jsxs)('div', {
                    className: r()(v.flexCenter, v.noWrap, v.justifyBetween, S.toggleContainer),
                    children: [
                        s,
                        (0, i.jsx)(c.ua7, {
                            text: T.intl.string(T.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: s, onMouseLeave: l } = t;
                                return (0, i.jsx)(c.P3F, {
                                    'aria-label': T.intl.string(T.t['1+O+Tk']),
                                    className: S.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return (t = !e), void d.Z.toggleOverlay(C, t, t);
                                    },
                                    onMouseEnter: s,
                                    onMouseLeave: l,
                                    children: n
                                });
                            }
                        })
                    ]
                });
            })(),
            !l || g
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
        className: r()(v.flexCenter, S.notDetected, S.activeGame),
        children: (0, i.jsxs)('div', {
            className: r()(S.gameNameLastPlayed, v.vertical),
            children: [
                (0, i.jsx)('div', {
                    className: S.gameName,
                    children: T.intl.string(T.t['H68X9/'])
                }),
                (0, i.jsx)('div', {
                    className: S.lastPlayed,
                    children: T.intl.string(T.t.T5Ilm5)
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
let L = (0, C.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    k = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            l = (0, a.Wu)([m.ZP], () => m.ZP.getGamesSeen(!0)),
            { runningGame: o, overrideExePaths: d } = (0, a.cj)([m.ZP], () => ({
                runningGame: m.ZP.getVisibleGame(),
                overrideExePaths: L(...m.ZP.getOverrides())
            }));
        return (
            s.useEffect(() => ((0, g.Ky)(), g.P7), []),
            (0, i.jsxs)(c.hjN, {
                tag: 'h1',
                title: n ? T.intl.string(T.t.AVDyEh) : null,
                className: t,
                children: [
                    null != o
                        ? (0, i.jsx)(
                              P,
                              {
                                  rawGame: o,
                                  isOverride: d.has(o.exePath),
                                  nowPlaying: !0
                              },
                              (0, m.rH)(o)
                          )
                        : (0, i.jsx)(y, {}),
                    (0, i.jsxs)('div', {
                        className: r()(S.nowPlayingAdd, A.marginReset, A.marginTop8, A.marginBottom20),
                        children: [
                            (0, i.jsx)('span', { children: T.intl.string(T.t.xwhoqK) }),
                            (0, i.jsx)(c.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(D, { onClose: t });
                                },
                                align: 'center',
                                position: 'bottom',
                                children: (e) =>
                                    (0, i.jsx)(c.zxk, {
                                        ...e,
                                        look: c.iLD.LINK,
                                        size: c.PhG.MIN,
                                        color: c.Ttl.LINK,
                                        children: T.intl.string(T.t.GjgdXV)
                                    })
                            })
                        ]
                    }),
                    0 === l.length
                        ? (0, i.jsx)(Z, { children: (0, i.jsx)(c.OZU, { children: T.intl.string(T.t['1yiJws']) }) })
                        : (0, i.jsxs)(c.hjN, {
                              className: A.marginTop40,
                              children: [
                                  (0, i.jsx)(c.vwX, {
                                      className: A.marginBottom4,
                                      children: T.intl.string(T.t.jCOdv7)
                                  }),
                                  (0, i.jsx)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: T.intl.format(T.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
                                  }),
                                  l.map((e) =>
                                      (0, i.jsx)(
                                          P,
                                          {
                                              rawGame: e,
                                              isOverride: d.has(e.exePath)
                                          },
                                          (0, m.rH)(e)
                                      )
                                  )
                              ]
                          })
                ]
            })
        );
    };
