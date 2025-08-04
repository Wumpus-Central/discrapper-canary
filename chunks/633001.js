(a.d(t, { Z: () => J }), a(388685), a(583741), a(539854));
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
    x = a(593472),
    p = a(594190),
    h = a(837268),
    b = a(371651),
    f = a(829907),
    v = a(610394),
    g = a(352527),
    j = a(355863),
    _ = a(449224),
    y = a(808506),
    C = a(572004),
    O = a(70956),
    T = a(145597),
    N = a(246992),
    E = a(981631),
    S = a(757744),
    P = a(388032),
    I = a(931207),
    w = a(616257);
function R(e) {
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
function k(e, t) {
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
let A = {
        [E.Odu.CLICK_ZONE_DEBUG]: (e) =>
            k(
                R(
                    {
                        type: E.Odu.CLICK_ZONE_DEBUG,
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
                    j.Z.getWidgetDefaultSettings(E.Odu.CLICK_ZONE_DEBUG)
                ),
                { pinned: !0 }
            ),
        [E.Odu.PERFORMANCE_DEBUG]: (e) =>
            k(
                R(
                    {
                        type: E.Odu.PERFORMANCE_DEBUG,
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
                    j.Z.getWidgetDefaultSettings(E.Odu.PERFORMANCE_DEBUG)
                ),
                { pinned: !0 }
            )
    },
    Z = {},
    D = (e, t) => e.find((e) => e.type === t);
function L(e) {
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
                (0, C.JG)(t, () => l(!0));
            },
            className: I.copyId,
            children: ['Application Id: ', t, ' ', a ? P.intl.string(P.t['t5VZ8/']) : null]
        })
    );
}
let M = r.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, o.e7)([p.ZP], () => p.ZP.getGameForPID(t.pid)),
            r = (0, o.e7)([_.Z], () => _.Z.getGameForPID(t.pid)),
            l = (0, o.e7)([p.ZP], () => (null == a ? null : p.ZP.getGameOverlayStatus(a)));
        return (0, n.jsxs)('div', {
            className: I.panelGroup,
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
                        children: (0, n.jsx)(L, { id: t.applicationId })
                    }),
                (0, n.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['fullscreenType: ', (0, f.sS)(t.fullscreenType)]
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
                    className: I.panelGroup,
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
                            children: ['overlayMethod: ', (0, f.P_)(t.overlayMethod)]
                        })
                    ]
                }),
                null != l &&
                    (0, n.jsxs)('div', {
                        className: I.panelGroup,
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
                                children: ['raw overlayMethod: ', (0, f.P_)(l.overlayMethod)]
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
    U = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, o.cj)([y.default], () => y.default.getOverlayPIDStatuses()),
            r = (0, o.cj)([b.default], () => b.default.getTrackedGames()),
            l = (0, o.e7)([y.default], () => y.default.isInputLocked(t), [t]),
            i = (0, o.e7)([y.default], () => y.default.DEV_isInputLockedV3(t), [t]),
            s = (0, o.e7)([y.default], () => y.default.DEV_isInputLocked(t), [t]),
            c = (0, o.e7)([y.default], () => y.default.isReady(t), [t]);
        return (0, n.jsxs)('div', {
            className: I.panelGroup,
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
function F(e) {
    let t = D(Object.values((0, o.Wu)([j.Z], () => j.Z.getWidgetsForLayout(S.$S))), e);
    return [
        t,
        () => {
            if (null != t) (0, u.E9)(t.id);
            else {
                let t = A[e];
                if (null == t) return;
                let a = t(S.$S);
                (0, u.A4)(a);
            }
        }
    ];
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? ''.concat(e.toFixed(2), 'ms') : new Date(e).toLocaleTimeString();
}
let z = r.memo(function (e) {
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
        [b.default],
        () => {
            var e, a;
            if (null == t) return 'Unknown';
            let n = null == (e = b.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
            return null != n ? ((Z[t] = n), n) : null != (a = Z[t]) ? a : 'Unknown';
        },
        [t]
    );
    return (0, n.jsx)(
        d.Text,
        k(R({}, a), {
            variant: 'text-md/semibold',
            color: 'text-primary',
            children: r
        })
    );
});
function G() {
    let e = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(h.GO.TrackFocusPIDs)),
        t = (0, o.Wu)([b.default], () => b.default.getDevToolsFocusedPidsWithTimestamp(), []),
        a = () => {
            m.Z.setRenderDebugMode(!v.ZP.hasRenderDebugMode(h.GO.TrackFocusPIDs), h.GO.TrackFocusPIDs);
        };
    return (0, n.jsxs)('div', {
        className: I.panelGroup,
        children: [
            (0, n.jsxs)('div', {
                className: I.panelHeader,
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
                        className: I.panelButton,
                        onClick: () => m.Z.clearTrackedPids(),
                        children: (0, n.jsx)(d.XHJ, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, n.jsxs)(d.zJl, {
                className: i()(I.panelGroup, I.scroller),
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
                                    text: l === h.d5.TRACK_FOCUS ? 'Tracked Focus Event' : 'Clear Focus Event',
                                    children: (e) => {
                                        var r;
                                        return (0, n.jsx)(
                                            'div',
                                            k(R({}, e), {
                                                children: (0, n.jsxs)(d.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: l === h.d5.TRACK_FOCUS ? 'text-default' : 'text-danger',
                                                    children: [
                                                        (0, n.jsx)(z, {
                                                            pid: a,
                                                            tag: 'span'
                                                        }),
                                                        ' - ',
                                                        null != (r = null == a ? void 0 : a.toString()) ? r : 'null',
                                                        ' @ ',
                                                        B(t, !0)
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
let V = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, o.e7)(
                [b.default, p.ZP],
                () => {
                    var e, a, n;
                    if (null == t) return null;
                    let r = null == (e = b.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                    return null != r ? r : null != (n = null == (a = p.ZP.getGameForPID(t)) ? void 0 : a.fullscreenType) ? n : x.Jx.UNKNOWN;
                },
                [t]
            );
        return (0, n.jsxs)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-secondary',
            tag: 'span',
            children: ['Original Screen Type: ', null != a ? (0, f.sS)(a) : 'Unknown']
        });
    }),
    H = r.memo(function () {
        let e = (0, o.cj)([b.default], () => b.default.getTrackedGames()),
            [t, a] = r.useState({}),
            l = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = p.ZP.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, f.hj)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                                R({}, e)
                            )
                        );
                    }, +O.Z.Millis.SECOND)),
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
                        k(R({}, a), {
                            children: (0, n.jsxs)(d.zJl, {
                                className: i()(I.panelGroup, I.scroller),
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
                                                    (0, n.jsx)(z, {
                                                        tag: 'div',
                                                        pid: e.pid
                                                    }),
                                                    (0, n.jsx)(V, { pid: e.pid }),
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
                                                                        .concat((0, f.sS)(a), ' @ ')
                                                                        .concat(B(r))
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
    W = r.memo(function () {
        var e, t;
        let a = (0, o.cj)([b.default], () => b.default.getTrackedGames()),
            r = (0, T.getPID)(),
            l = (0, o.e7)([b.default], () => b.default.isOverlayOOPEnabledForPid(r), [r]),
            [i, s] = (0, o.Wu)([g.Z], () => [g.Z.enabled, g.Z.keepOpen]),
            c = (0, o.e7)([y.default], () => y.default.getFocusedPID()),
            u = (0, o.e7)([y.default], () => y.default.isFocusedPidOutOfProcess());
        return (0, n.jsxs)('div', {
            className: I.panelGroup,
            children: [
                0 === Object.keys(a).length &&
                    (0, n.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-default',
                        children: 'No tracked game times'
                    }),
                Object.values(a).map((e) => (0, n.jsx)(U, { pid: e.pid }, e.pid)),
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
    K = r.memo(function () {
        let [e, t] = F(E.Odu.CLICK_ZONE_DEBUG),
            [a, r] = F(E.Odu.PERFORMANCE_DEBUG),
            l = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(h.GO.ClickZones)),
            i = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(h.GO.WidgetAreas)),
            s = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(h.GO.DisabledGPUBoost)),
            c = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(h.GO.ForceGPUBoost)),
            u = (e) => {
                m.Z.setRenderDebugMode(!v.ZP.hasRenderDebugMode(e), e);
            },
            x = () => {
                u(h.GO.ClickZones);
            },
            p = () => {
                u(h.GO.WidgetAreas);
            },
            b = () => {
                u(h.GO.DisabledGPUBoost);
            },
            f = () => {
                u(h.GO.ForceGPUBoost);
            };
        return (0, n.jsxs)('div', {
            className: I.panelGroup,
            children: [
                (0, n.jsx)(d.ua7, {
                    position: 'left',
                    text: 'Enables a red border around click zones to help with debugging.',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            k(R({}, e), {
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
                            k(R({}, e), {
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
                            k(R({}, e), {
                                children: (0, n.jsx)(d.XZJ, {
                                    value: s,
                                    onChange: () => b(),
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
                            k(R({}, e), {
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
                            k(R({}, a), {
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
                            k(R({}, e), {
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
    X = r.memo(function () {
        let e = (0, o.cj)([b.default], () => b.default.getTrackedGames()),
            t = (0, o.e7)([p.ZP], () => p.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                t.length > 0 &&
                    (0, n.jsx)(d.ua7, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, n.jsx)(
                                'div',
                                k(R({}, e), {
                                    children: (0, n.jsxs)('div', {
                                        className: I.panelGroup,
                                        children: [
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-md/bold',
                                                color: 'text-danger',
                                                children: 'Untracked Running Games'
                                            }),
                                            t.map((e) =>
                                                (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        (0, n.jsx)(
                                                            d.Text,
                                                            {
                                                                variant: 'text-sm/normal',
                                                                color: 'text-danger',
                                                                children: ''.concat(e.pid, ' - ').concat(e.name, ' (').concat(e.exeName, ')')
                                                            },
                                                            e.pid
                                                        ),
                                                        (0, n.jsx)(V, { pid: e.pid })
                                                    ]
                                                })
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
                            k(R({}, t), {
                                children: (0, n.jsxs)('div', {
                                    className: I.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-default',
                                                children: 'No running games'
                                            }),
                                        Object.values(e).map((e) => (0, n.jsx)(M, { trackedGame: e }, e.pid))
                                    ]
                                })
                            })
                        )
                })
            ]
        });
    }),
    Y = r.memo(function () {
        let e = (0, o.e7)([b.default], () => b.default.getForcedRenderMode()),
            [t, a] = r.useState(e),
            l = (e) => {
                (a(e), m.Z.forceRenderMode(e));
            },
            i = [
                {
                    label: h.R5.UNSET,
                    value: h.R5.UNSET
                },
                {
                    label: h.R5.IN_PROCESS_V2,
                    value: h.R5.IN_PROCESS_V2
                },
                {
                    label: h.R5.OUT_OF_PROCESS_V3,
                    value: h.R5.OUT_OF_PROCESS_V3
                },
                {
                    label: h.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: h.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
                }
            ].map((t) => k(R({}, t), { label: ''.concat(t.label, ' ').concat(e === t.value ? '(current)' : '') }));
        return (0, n.jsx)(d.ua7, {
            position: 'left',
            text: 'Override the overlay render mode',
            children: (e) =>
                (0, n.jsx)(
                    'div',
                    k(R({}, e), {
                        className: I.panelGroup,
                        children: (0, n.jsx)(d.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: i,
                            select: l,
                            popoutLayerContext: N.O$
                        })
                    })
                )
        });
    });
function J() {
    return (0, n.jsx)(d.w0Z, {
        children: (0, n.jsxs)('div', {
            className: i()(w.panel, I.panel),
            children: [(0, n.jsx)(K, {}), (0, n.jsx)(Y, {}), (0, n.jsx)(X, {}), (0, n.jsx)(W, {}), (0, n.jsx)(G, {}), (0, n.jsx)(H, {})]
        })
    });
}
