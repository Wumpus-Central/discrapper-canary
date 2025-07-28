(a.d(t, { Z: () => q }), a(388685), a(583741), a(539854));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(772848),
    o = a(442837),
    c = a(755721),
    d = a(481060),
    u = a(765250),
    m = a(13245),
    x = a(615287),
    p = a(593472),
    h = a(594190),
    b = a(306381),
    f = a(371651),
    v = a(829907),
    j = a(610394),
    g = a(352527),
    _ = a(355863),
    y = a(449224),
    C = a(808506),
    O = a(572004),
    N = a(70956),
    T = a(145597),
    E = a(246992),
    S = a(981631),
    P = a(757744),
    I = a(388032),
    w = a(931207),
    R = a(616257);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
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
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let Z = {
        [S.Odu.CLICK_ZONE_DEBUG]: (e) =>
            A(
                k(
                    {
                        type: S.Odu.CLICK_ZONE_DEBUG,
                        id: (0, s.Z)(),
                        layoutId: e,
                        anchor: {
                            top: 0.35,
                            right: 0.35
                        },
                        size: {
                            width: 100,
                            height: 100
                        }
                    },
                    _.Z.getWidgetDefaultSettings(S.Odu.CLICK_ZONE_DEBUG)
                ),
                { pinned: !0 }
            ),
        [S.Odu.PERFORMANCE_DEBUG]: (e) =>
            A(
                k(
                    {
                        type: S.Odu.PERFORMANCE_DEBUG,
                        id: (0, s.Z)(),
                        layoutId: e,
                        anchor: {
                            top: 0.1,
                            right: 0.1
                        },
                        size: {
                            fixed: !1,
                            width: 'auto',
                            height: 'auto'
                        }
                    },
                    _.Z.getWidgetDefaultSettings(S.Odu.PERFORMANCE_DEBUG)
                ),
                { pinned: !0 }
            )
    },
    D = {},
    L = (e, t) => e.find((e) => e.type === t);
function M(e) {
    let { id: t } = e,
        [a, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                a &&
                    (e = setTimeout(() => {
                        l(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [a]),
        (0, n.jsxs)(c.zx, {
            look: c.zx.Looks.LINK,
            color: c.zx.Colors.LINK,
            size: c.zx.Sizes.MIN,
            onClick: function () {
                (0, O.JG)(t, () => l(!0));
            },
            className: w.copyId,
            children: ['Application Id: ', t, ' ', a ? I.intl.string(I.t['t5VZ8/']) : null]
        })
    );
}
let U = r.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, o.e7)([h.ZP], () => h.ZP.getGameForPID(t.pid)),
            r = (0, o.e7)([y.Z], () => y.Z.getGameForPID(t.pid)),
            l = (0, o.e7)([h.ZP], () => (null == a ? null : h.ZP.getGameOverlayStatus(a)));
        return (0, n.jsxs)('div', {
            className: w.panelGroup,
            children: [
                (0, n.jsx)(d.Text, {
                    variant: 'text-md/bold',
                    color: 'text-primary',
                    children: t.gameName
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/bold',
                    color: 'text-secondary',
                    children: t.pid
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: null == a ? void 0 : a.exeName
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['isLauncher: ', (null == a ? void 0 : a.isLauncher) ? 'Yes' : 'No']
                }),
                null != t.applicationId &&
                    (0, n.jsx)(d.Text, {
                        variant: 'text-md/bold',
                        color: 'text-primary',
                        children: (0, n.jsx)(M, { id: t.applicationId })
                    }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['fullscreenType: ', (0, v.sS)(t.fullscreenType)]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['state: ', t.state]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['successfullyShown: ', t.successfullyShown ? 'Yes' : 'No']
                }),
                (0, n.jsxs)('div', {
                    className: w.panelGroup,
                    children: [
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: ['source: ', t.source]
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: ['legacyEnabled: ', t.legacyEnabled ? 'Yes' : 'No']
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: ['oopEnabled: ', t.oopEnabled ? 'Yes' : 'No']
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: ['overlayMethod: ', (0, v.P_)(t.overlayMethod)]
                        })
                    ]
                }),
                null != l &&
                    (0, n.jsxs)('div', {
                        className: w.panelGroup,
                        children: [
                            (0, n.jsxs)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
                                children: ['raw source: ', l.source]
                            }),
                            (0, n.jsxs)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
                                children: ['raw enabledLegacy: ', l.enabledLegacy ? 'Yes' : 'No']
                            }),
                            (0, n.jsxs)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
                                children: ['raw enabledOOP: ', l.enabledOOP ? 'Yes' : 'No']
                            }),
                            (0, n.jsxs)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
                                children: ['raw overlayMethod: ', (0, v.P_)(l.overlayMethod)]
                            })
                        ]
                    }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['hidden: ', (null == a ? void 0 : a.hidden) ? 'Yes' : 'No']
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['hook: ', (null == r ? void 0 : r.hook) ? 'Yes' : 'No']
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['overlay: ', (null == r ? void 0 : r.overlay) ? 'Yes' : 'No']
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['overlayCompatibilityHook: ', (null == r ? void 0 : r.overlayCompatibilityHook) ? 'Yes' : 'No']
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['supportsOutOfProcessOverlay: ', (null == r ? void 0 : r.supportsOutOfProcessOverlay) ? 'Yes' : 'No']
                })
            ]
        });
    }),
    F = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, o.cj)([C.default], () => C.default.getOverlayPIDStatuses()),
            r = (0, o.cj)([f.default], () => f.default.getTrackedGames()),
            l = (0, o.e7)([C.default], () => C.default.isInputLocked(t), [t]),
            i = (0, o.e7)([C.default], () => C.default.DEV_isInputLockedV3(t), [t]),
            s = (0, o.e7)([C.default], () => C.default.DEV_isInputLocked(t), [t]),
            c = (0, o.e7)([C.default], () => C.default.isReady(t), [t]);
        return (0, n.jsxs)('div', {
            className: w.panelGroup,
            children: [
                (0, n.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-primary',
                    children: ''.concat(t)
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: [
                        'Screen Type Resolution: ',
                        ((e) => {
                            var t;
                            let a = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == a || null == a.screenTypeResolutionTimestamp) return '...';
                            let n = a.screenTypeResolutionTimestamp - a.startTrackingTimestamp;
                            return ''.concat(n.toFixed(2), 'ms');
                        })(t)
                    ]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: [
                        'Window Creation: ',
                        ((e) => {
                            var t;
                            let a = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == a || null == a.moduleTrackingTimestamp || null == a.screenTypeResolutionTimestamp) return '...';
                            let n = a.moduleTrackingTimestamp - a.screenTypeResolutionTimestamp;
                            return ''.concat(n.toFixed(2), 'ms');
                        })(t)
                    ]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: [
                        'Rendering: ',
                        ((e) => {
                            var t;
                            let a = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == a || null == a.overlayRenderingTimestamp || null == a.moduleTrackingTimestamp) return '...';
                            let n = a.overlayRenderingTimestamp - a.moduleTrackingTimestamp;
                            return ''.concat(n.toFixed(2), 'ms');
                        })(t)
                    ]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: ['Bridge Status: ', a.get(Number(t))]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: ['isInputLocked: ', l]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: ['isInputLockedV3: ', i]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: ['isInputLockedV2: ', s]
                }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: ['isReady: ', c]
                })
            ]
        });
    });
function B(e) {
    let t = L(Object.values((0, o.Wu)([_.Z], () => _.Z.getWidgetsForLayout(P.$S))), e);
    return [
        t,
        () => {
            if (null != t) (0, u.E9)(t.id);
            else {
                let t = Z[e];
                if (null == t) return;
                let a = t(P.$S);
                (0, u.A4)(a);
            }
        }
    ];
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? ''.concat(e.toFixed(2), 'ms') : new Date(e).toLocaleTimeString();
}
let G = r.memo(function (e) {
    var { pid: t } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        r = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) ((a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) ((a = l[n]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
            }
            return r;
        })(e, ['pid']);
    let r = (0, o.e7)(
        [f.default],
        () => {
            var e, a;
            if (null == t) return 'Unknown';
            let n = null == (e = f.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
            return null != n ? ((D[t] = n), n) : null != (a = D[t]) ? a : 'Unknown';
        },
        [t]
    );
    return (0, n.jsx)(
        d.Text,
        A(k({}, a), {
            variant: 'text-md/semibold',
            color: 'text-primary',
            children: r
        })
    );
});
function V() {
    let e = (0, o.e7)([j.ZP], () => j.ZP.hasRenderDebugMode(b.G.TrackFocusPIDs)),
        t = (0, o.Wu)([f.default], () => f.default.getDevToolsFocusedPidsWithTimestamp(), []),
        a = () => {
            m.Z.setRenderDebugMode(!j.ZP.hasRenderDebugMode(b.G.TrackFocusPIDs), b.G.TrackFocusPIDs);
        };
    return (0, n.jsxs)('div', {
        className: w.panelGroup,
        children: [
            (0, n.jsxs)('div', {
                className: w.panelHeader,
                children: [
                    (0, n.jsx)(d.XZJ, {
                        value: e,
                        onChange: () => a(),
                        size: 18,
                        type: d.XZJ.Types.INVERTED,
                        shape: d.XZJ.Shapes.BOX,
                        children: (0, n.jsx)(d.Text, {
                            tag: 'span',
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: 'Track Focus Pids'
                        })
                    }),
                    (0, n.jsx)(d.P3F, {
                        className: w.panelButton,
                        onClick: () => m.Z.clearTrackedPids(),
                        children: (0, n.jsx)(d.XHJ, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, n.jsxs)(d.zJl, {
                className: i()(w.panelGroup, w.scroller),
                children: [
                    0 === t.length &&
                        (0, n.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: 'No recent focused pids'
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, l] = e;
                        return (0, n.jsx)(
                            r.Fragment,
                            {
                                children: (0, n.jsx)(d.ua7, {
                                    position: 'left',
                                    text: l === x.d5.TRACK_FOCUS ? 'Tracked Focus Event' : 'Clear Focus Event',
                                    children: (e) => {
                                        var r;
                                        return (0, n.jsx)(
                                            'div',
                                            A(k({}, e), {
                                                children: (0, n.jsxs)(d.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: l === x.d5.TRACK_FOCUS ? 'text-default' : 'text-danger',
                                                    children: [
                                                        (0, n.jsx)(G, {
                                                            pid: a,
                                                            tag: 'span'
                                                        }),
                                                        ' - ',
                                                        null != (r = null == a ? void 0 : a.toString()) ? r : 'null',
                                                        ' @ ',
                                                        z(t, !0)
                                                    ]
                                                })
                                            })
                                        );
                                    }
                                })
                            },
                            ''.concat(a, '-').concat(t)
                        );
                    })
                ]
            })
        ]
    });
}
let H = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, o.e7)(
                [f.default, h.ZP],
                () => {
                    var e, a, n;
                    if (null == t) return null;
                    let r = null == (e = f.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                    return null != r ? r : null != (n = null == (a = h.ZP.getGameForPID(t)) ? void 0 : a.fullscreenType) ? n : p.Jx.UNKNOWN;
                },
                [t]
            );
        return (0, n.jsxs)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-secondary',
            tag: 'span',
            children: ['Original Screen Type: ', null != a ? (0, v.sS)(a) : 'Unknown']
        });
    }),
    W = r.memo(function () {
        let e = (0, o.cj)([f.default], () => f.default.getTrackedGames()),
            [t, a] = r.useState({}),
            l = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = h.ZP.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, v.hj)(a.pid, 0).then((e) => [a.pid, e, n]));
                        let r = await Promise.all(t);
                        a((e) =>
                            r.reduce(
                                (e, t) => {
                                    var a, n;
                                    let [r, l, i] = t;
                                    if (null == l || null == r) return e;
                                    let s = null != (n = e[r]) ? n : [],
                                        o = null == (a = s[s.length - 1]) ? void 0 : a.screenType;
                                    return (
                                        (0 === s.length || o !== l) &&
                                            (e[r] = [
                                                ...s,
                                                {
                                                    pid: r,
                                                    screenType: l,
                                                    timestamp: i
                                                }
                                            ]),
                                        e
                                    );
                                },
                                k({}, e)
                            )
                        );
                    }, +N.Z.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                []
            ),
            (0, n.jsx)(d.ua7, {
                position: 'left',
                text: "The most recent screen types we've logged, indexed by pid",
                children: (a) =>
                    (0, n.jsx)(
                        'div',
                        A(k({}, a), {
                            children: (0, n.jsxs)(d.zJl, {
                                className: i()(w.panelGroup, w.scroller),
                                children: [
                                    0 === Object.keys(e).length &&
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-default',
                                            children: 'No recent screen types'
                                        }),
                                    Object.values(e).map((e) =>
                                        (0, n.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    (0, n.jsx)(G, {
                                                        tag: 'div',
                                                        pid: e.pid
                                                    }),
                                                    (0, n.jsx)(H, { pid: e.pid }),
                                                    null != t[e.pid] &&
                                                        [...t[e.pid]].reverse().map((t) => {
                                                            let { screenType: a, timestamp: r } = t;
                                                            return (0, n.jsx)(
                                                                d.Text,
                                                                {
                                                                    variant: 'text-xs/normal',
                                                                    color: 'text-default',
                                                                    children: ''
                                                                        .concat(a, ':')
                                                                        .concat((0, v.sS)(a), ' @ ')
                                                                        .concat(z(r))
                                                                },
                                                                ''.concat(e.pid, '-').concat(a, '-').concat(r)
                                                            );
                                                        })
                                                ]
                                            },
                                            e.pid
                                        )
                                    )
                                ]
                            })
                        })
                    )
            })
        );
    }),
    K = r.memo(function () {
        var e, t;
        let a = (0, o.cj)([f.default], () => f.default.getTrackedGames()),
            r = (0, T.getPID)(),
            l = (0, o.e7)([f.default], () => f.default.isOverlayOOPEnabledForPid(r), [r]),
            [i, s] = (0, o.Wu)([g.Z], () => [g.Z.enabled, g.Z.keepOpen]),
            c = (0, o.e7)([C.default], () => C.default.getFocusedPID()),
            u = (0, o.e7)([C.default], () => C.default.isFocusedPidOutOfProcess());
        return (0, n.jsxs)('div', {
            className: w.panelGroup,
            children: [
                0 === Object.keys(a).length &&
                    (0, n.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-default',
                        children: 'No tracked game times'
                    }),
                Object.values(a).map((e) => (0, n.jsx)(F, { pid: e.pid }, e.pid)),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-primary',
                            children: ['focusedPID: ', null != (e = null == c ? void 0 : c.toString()) ? e : 'null']
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: ['isFocusedPidOutOfProcess: ', u ? 'Yes' : 'No']
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-primary',
                            children: ['processPid: ', null != (t = null == r ? void 0 : r.toString()) ? t : 'unknown']
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: ['isOOPEnabledForPid: ', l ? 'Yes' : 'No']
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: ['SoundboardOverlay.enabled: ', i ? 'Yes' : 'No']
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: ['SoundboardOverlay.keepOpen: ', s ? 'Yes' : 'No']
                        })
                    ]
                })
            ]
        });
    }),
    X = r.memo(function () {
        let [e, t] = B(S.Odu.CLICK_ZONE_DEBUG),
            [a, r] = B(S.Odu.PERFORMANCE_DEBUG),
            l = (0, o.e7)([j.ZP], () => j.ZP.hasRenderDebugMode(b.G.ClickZones)),
            i = (0, o.e7)([j.ZP], () => j.ZP.hasRenderDebugMode(b.G.WidgetAreas)),
            s = (0, o.e7)([j.ZP], () => j.ZP.hasRenderDebugMode(b.G.DisabledGPUBoost)),
            c = (0, o.e7)([j.ZP], () => j.ZP.hasRenderDebugMode(b.G.ForceGPUBoost)),
            u = (e) => {
                m.Z.setRenderDebugMode(!j.ZP.hasRenderDebugMode(e), e);
            },
            x = () => {
                u(b.G.ClickZones);
            },
            p = () => {
                u(b.G.WidgetAreas);
            },
            h = () => {
                u(b.G.DisabledGPUBoost);
            },
            f = () => {
                u(b.G.ForceGPUBoost);
            };
        return (0, n.jsxs)('div', {
            className: w.panelGroup,
            children: [
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: 'Enables a red border around click zones to help with debugging.',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            A(k({}, e), {
                                children: (0, n.jsx)(d.XZJ, {
                                    value: l,
                                    onChange: () => x(),
                                    size: 18,
                                    type: d.XZJ.Types.INVERTED,
                                    shape: d.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(d.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Enable Click Zone Debug Mode'
                                    })
                                })
                            })
                        )
                }),
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: 'Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            A(k({}, e), {
                                children: (0, n.jsx)(d.XZJ, {
                                    value: i,
                                    onChange: () => p(),
                                    size: 18,
                                    type: d.XZJ.Types.INVERTED,
                                    shape: d.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(d.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Enable Render Debug Mode'
                                    })
                                })
                            })
                        )
                }),
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: 'Disables GPU Boost, which can help with performance when games compete for GPU resources.',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            A(k({}, e), {
                                children: (0, n.jsx)(d.XZJ, {
                                    value: s,
                                    onChange: () => h(),
                                    size: 18,
                                    type: d.XZJ.Types.INVERTED,
                                    shape: d.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(d.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Disable GPU Boost'
                                    })
                                })
                            })
                        )
                }),
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: 'Forces GPU Boost, which can help with performance when games compete for GPU resources.',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            A(k({}, e), {
                                children: (0, n.jsx)(d.XZJ, {
                                    value: c,
                                    onChange: () => f(),
                                    size: 18,
                                    disabled: s,
                                    type: d.XZJ.Types.INVERTED,
                                    shape: d.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(d.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Force GPU Boost'
                                    })
                                })
                            })
                        )
                }),
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: 'Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.',
                    children: (a) =>
                        (0, n.jsx)(
                            'div',
                            A(k({}, a), {
                                children: (0, n.jsx)(d.XZJ, {
                                    value: null != e,
                                    onChange: () => t(),
                                    size: 18,
                                    type: d.XZJ.Types.INVERTED,
                                    shape: d.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(d.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Click Zone Debug Widget'
                                    })
                                })
                            })
                        )
                }),
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: "Creates a widget that shows the overlay's window performance metrics.",
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            A(k({}, e), {
                                children: (0, n.jsx)(d.XZJ, {
                                    value: null != a,
                                    onChange: () => r(),
                                    size: 18,
                                    type: d.XZJ.Types.INVERTED,
                                    shape: d.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(d.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Overlay Performance Debug Widget'
                                    })
                                })
                            })
                        )
                })
            ]
        });
    }),
    Y = r.memo(function () {
        let e = (0, o.cj)([f.default], () => f.default.getTrackedGames()),
            t = (0, o.e7)([h.ZP], () => h.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                t.length > 0 &&
                    (0, n.jsx)(d.ua7, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, n.jsx)(
                                'div',
                                A(k({}, e), {
                                    children: (0, n.jsxs)('div', {
                                        className: w.panelGroup,
                                        children: [
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-md/bold',
                                                color: 'text-danger',
                                                children: 'Untracked Running Games'
                                            }),
                                            t.map((e) =>
                                                (0, n.jsxs)(
                                                    d.Text,
                                                    {
                                                        variant: 'text-sm/normal',
                                                        color: 'text-danger',
                                                        children: [''.concat(e.pid, ' - ').concat(e.name, ' (').concat(e.exeName, ')'), (0, n.jsx)(H, { pid: e.pid })]
                                                    },
                                                    e.pid
                                                )
                                            )
                                        ]
                                    })
                                })
                            )
                    }),
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: 'The current running games process information',
                    children: (t) =>
                        (0, n.jsx)(
                            'div',
                            A(k({}, t), {
                                children: (0, n.jsxs)('div', {
                                    className: w.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-default',
                                                children: 'No running games'
                                            }),
                                        Object.values(e).map((e) => (0, n.jsx)(U, { trackedGame: e }, e.pid))
                                    ]
                                })
                            })
                        )
                })
            ]
        });
    }),
    J = r.memo(function () {
        let e = (0, o.e7)([f.default], () => f.default.getForcedRenderMode()),
            [t, a] = r.useState(e),
            l = (e) => {
                (a(e), m.Z.forceRenderMode(e));
            },
            i = [
                {
                    label: x.R5.UNSET,
                    value: x.R5.UNSET
                },
                {
                    label: x.R5.IN_PROCESS_V2,
                    value: x.R5.IN_PROCESS_V2
                },
                {
                    label: x.R5.OUT_OF_PROCESS_V3,
                    value: x.R5.OUT_OF_PROCESS_V3
                },
                {
                    label: x.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: x.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
                }
            ].map((t) => A(k({}, t), { label: ''.concat(t.label, ' ').concat(e === t.value ? '(current)' : '') }));
        return (0, n.jsx)(d.ua7, {
            position: 'left',
            text: 'Override the overlay render mode',
            children: (e) =>
                (0, n.jsx)(
                    'div',
                    A(k({}, e), {
                        className: w.panelGroup,
                        children: (0, n.jsx)(d.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: i,
                            select: l,
                            popoutLayerContext: E.O$
                        })
                    })
                )
        });
    });
function q() {
    return (0, n.jsx)(d.w0Z, {
        children: (0, n.jsxs)('div', {
            className: i()(R.panel, w.panel),
            children: [(0, n.jsx)(X, {}), (0, n.jsx)(J, {}), (0, n.jsx)(Y, {}), (0, n.jsx)(K, {}), (0, n.jsx)(V, {}), (0, n.jsx)(W, {})]
        })
    });
}
