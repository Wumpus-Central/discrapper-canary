n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(224706),
    u = n(225433),
    m = n(570928),
    g = n(594190),
    h = n(320724),
    p = n(297700),
    x = n(77498),
    f = n(283595),
    _ = n(626135),
    E = n(251625),
    C = n(358085),
    T = n(210887),
    S = n(981631),
    b = n(388032),
    I = n(250063),
    N = n(517877),
    v = n(847854),
    A = n(134401),
    j = n(275477);
let O = l.ZP.connectStores([T.Z], () => ({ theme: T.Z.theme }))(c.EmptyState),
    R = (0, C.isWindows)();
function P(e) {
    let { onClose: t } = e,
        n = (0, l.e7)([g.ZP], () => g.ZP.getCandidateGames()),
        [s, o] = r.useState(null),
        u = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : ''
        }));
    return (0, i.jsxs)(c.Dialog, {
        className: a()(I.addGamePopout, N.elevationBorderHigh),
        'aria-label': b.intl.string(b.t.GTCx0t),
        children: [
            (0, i.jsx)(c.SearchableSelect, {
                placeholder: b.intl.string(b.t.XqMe3N),
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
            (0, i.jsx)(c.FormDivider, { className: a()(j.marginTop8, j.marginBottom8) }),
            (0, i.jsxs)('div', {
                className: a()(I.actions, v.horizontal),
                children: [
                    (0, i.jsx)(c.Button, {
                        className: I.cancelButton,
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: t,
                        children: b.intl.string(b.t['ETE/oK'])
                    }),
                    (0, i.jsx)(c.Button, {
                        disabled: null == s,
                        onClick: function () {
                            if (null != s) d.Z.addGame(s.pid, s.name), t();
                        },
                        children: b.intl.string(b.t.GTCx0t)
                    })
                ]
            })
        ]
    });
}
function y(e) {
    var t;
    let { rawGame: n, nowPlaying: s = !1, isOverride: h } = e,
        E = (0, l.cj)([x.Z, g.ZP, f.Z], () => (0, g.FZ)(n)),
        [C, T] = r.useState(!1),
        [N, j] = r.useState(null !== (t = E.name) && void 0 !== t ? t : '???'),
        O = a()(v.flexCenter, {
            [I.game]: !s,
            [I.activeGame]: s,
            [A.card]: !s,
            [I.nowPlaying]: null != E && s
        });
    function P() {
        d.Z.deleteEntry(E);
    }
    function y() {
        E.name !== N && d.Z.editName(E, N);
    }
    function B(e) {
        13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
    }
    function D() {
        d.Z.toggleDetection(E);
    }
    function Z() {
        if (C) return;
        let e = null != E.id ? x.Z.getDetectableGame(E.id) : null;
        _.default.track(S.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: E.name
        }),
            (0, c.showToast)((0, c.createToast)(b.intl.formatToPlainString(b.t['6klMOj'], { gameName: E.name }), c.ToastType.SUCCESS)),
            T(!0);
    }
    return (0, i.jsxs)('div', {
        className: O,
        children: [
            (0, i.jsxs)('div', {
                className: a()(I.gameNameLastPlayed, v.vertical),
                children: [
                    E.verified && !h
                        ? (0, i.jsxs)('div', {
                              className: I.detectedApplication,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: I.gameName,
                                      children: E.name
                                  }),
                                  (0, i.jsx)(c.Tooltip, {
                                      text: b.intl.string(b.t['4PJP5u']),
                                      children: (e) =>
                                          (0, i.jsx)(p.Z, {
                                              className: I.gameVerifiedIcon,
                                              size: 18,
                                              color: o.Z.unsafe_rawColors.BRAND_500.css,
                                              ...e,
                                              children: (0, i.jsx)(c.CheckmarkSmallIcon, {
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
                              className: a()(I.gameName, I.gameNameInput),
                              type: 'text',
                              maxLength: 128,
                              value: N,
                              onBlur: y,
                              onKeyDown: B,
                              onChange: (e) => j(e.target.value)
                          }),
                    (function () {
                        let e;
                        let { played: t, exePath: n } = E;
                        return (
                            s ? (e = b.intl.string(b.t.VbV5dn)) : null != t && '' !== t && (e = b.intl.format(b.t.gGeOEx, { when: t })),
                            (0, i.jsx)('div', {
                                className: I.lastPlayed,
                                children: (0, i.jsx)(m.Z, {
                                    hoverText: null != n && '' !== n ? n.toUpperCase() : '',
                                    children: e
                                })
                            })
                        );
                    })()
                ]
            }),
            h
                ? null
                : C
                  ? null
                  : (0, i.jsx)('div', {
                        className: a()(v.flexCenter, v.noWrap, v.justifyBetween, I.toggleContainer),
                        children: (0, i.jsx)(c.Tooltip, {
                            text: b.intl.string(b.t['y0B+lp']),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.Clickable, {
                                    'aria-label': b.intl.string(b.t['y0B+lp']),
                                    className: I.toggleIcon,
                                    onClick: Z,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    children: (0, i.jsx)(c.FlagIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: I.toggleIconOn,
                                        colorClass: I.fill
                                    })
                                });
                            }
                        })
                    }),
            (function () {
                let { detectable: e } = E,
                    t = e
                        ? (0, i.jsx)(c.EyeIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: I.toggleIconOn,
                              colorClass: I.fill
                          })
                        : (0, i.jsx)(c.EyeSlashIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: I.toggleIconOff,
                              colorClass: I.fill
                          });
                return (0, i.jsx)('div', {
                    className: a()(v.flexCenter, v.noWrap, v.justifyBetween, I.toggleContainer),
                    children: (0, i.jsx)(c.Tooltip, {
                        text: b.intl.string(b.t.QmitzM),
                        children: (e) => {
                            let { onMouseEnter: n, onMouseLeave: r } = e;
                            return (0, i.jsx)(c.Clickable, {
                                'aria-label': b.intl.string(b.t.QmitzM),
                                className: I.toggleIcon,
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
                let { overlay: e, overlayWarn: t } = E,
                    n = e
                        ? (0, i.jsx)(c.ScreenIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: I.toggleIconOn,
                              colorClass: I.fill
                          })
                        : (0, i.jsx)(c.ScreenSlashIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: I.toggleIconOff,
                              colorClass: I.fill
                          }),
                    r = t
                        ? (0, i.jsx)(c.Tooltip, {
                              text: b.intl.string(b.t.Vfw2Ly),
                              children: (e) =>
                                  (0, i.jsx)('i', {
                                      className: I.overlayWarningIcon,
                                      ...e
                                  })
                          })
                        : null;
                return (0, i.jsxs)('div', {
                    className: a()(v.flexCenter, v.noWrap, v.justifyBetween, I.toggleContainer),
                    children: [
                        r,
                        (0, i.jsx)(c.Tooltip, {
                            text: b.intl.string(b.t['1+O+Tk']),
                            children: (t) => {
                                let { onMouseEnter: r, onMouseLeave: s } = t;
                                return (0, i.jsx)(c.Clickable, {
                                    'aria-label': b.intl.string(b.t['1+O+Tk']),
                                    className: I.toggleIcon,
                                    onClick: () => {
                                        var t;
                                        return (t = !e), void d.Z.toggleOverlay(E, t);
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
            !s || h
                ? (0, i.jsx)(u.Z, {
                      className: I.removeGame,
                      onClick: P
                  })
                : null
        ]
    });
}
function B() {
    return (0, i.jsx)('div', {
        className: a()(v.flexCenter, I.notDetected, I.activeGame),
        children: (0, i.jsxs)('div', {
            className: a()(I.gameNameLastPlayed, v.vertical),
            children: [
                (0, i.jsx)('div', {
                    className: I.gameName,
                    children: b.intl.string(b.t['H68X9/'])
                }),
                (0, i.jsx)('div', {
                    className: I.lastPlayed,
                    children: b.intl.string(b.t.T5Ilm5)
                })
            ]
        })
    });
}
function D(e) {
    let { children: t } = e;
    return (0, i.jsxs)(O, {
        className: j.marginTop40,
        children: [
            (0, i.jsx)(c.EmptyStateImage, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250
            }),
            t
        ]
    });
}
let Z = (0, E.oH)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
t.Z = function (e) {
    let { className: t, showHeader: n = !0 } = e,
        s = (0, l.Wu)([g.ZP], () => g.ZP.getGamesSeen(!0)),
        { runningGame: o, overrideExePaths: d } = (0, l.cj)([g.ZP], () => ({
            runningGame: g.ZP.getVisibleGame(),
            overrideExePaths: Z(...g.ZP.getOverrides())
        }));
    return (
        r.useEffect(() => ((0, h.Ky)(), h.P7), []),
        (0, i.jsxs)(c.FormSection, {
            tag: 'h1',
            title: n ? b.intl.string(b.t.AVDyEh) : null,
            className: t,
            children: [
                null != o
                    ? (0, i.jsx)(
                          y,
                          {
                              rawGame: o,
                              isOverride: d.has(o.exePath),
                              nowPlaying: !0
                          },
                          (0, g.rH)(o)
                      )
                    : (0, i.jsx)(B, {}),
                (0, i.jsxs)('div', {
                    className: a()(I.nowPlayingAdd, j.marginReset, j.marginTop8, j.marginBottom20),
                    children: [
                        (0, i.jsx)('span', { children: b.intl.string(b.t.xwhoqK) }),
                        (0, i.jsx)(c.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, i.jsx)(P, { onClose: t });
                            },
                            align: 'center',
                            position: 'bottom',
                            children: (e) =>
                                (0, i.jsx)(c.Button, {
                                    ...e,
                                    look: c.ButtonLooks.LINK,
                                    size: c.ButtonSizes.MIN,
                                    color: c.ButtonColors.LINK,
                                    children: b.intl.string(b.t.GjgdXV)
                                })
                        })
                    ]
                }),
                0 === s.length
                    ? (0, i.jsx)(D, { children: (0, i.jsx)(c.EmptyStateText, { children: b.intl.string(b.t['1yiJws']) }) })
                    : (0, i.jsxs)(c.FormSection, {
                          className: j.marginTop40,
                          children: [
                              (0, i.jsx)(c.FormTitle, {
                                  className: j.marginBottom4,
                                  children: b.intl.string(b.t.jCOdv7)
                              }),
                              (0, i.jsx)(c.FormText, {
                                  type: c.FormTextTypes.DESCRIPTION,
                                  children: b.intl.format(b.t.KPA3m5, { igdbLink: 'https://www.igdb.com/about' })
                              }),
                              s.map((e) =>
                                  (0, i.jsx)(
                                      y,
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
