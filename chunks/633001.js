(n.d(t, { Z: () => J }), n(388685), n(583741), n(539854));
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(765250),
    u = n(13245),
    m = n(615287),
    x = n(593472),
    h = n(594190),
    p = n(306381),
    b = n(371651),
    f = n(829907),
    v = n(610394),
    j = n(352527),
    g = n(355863),
    _ = n(449224),
    y = n(808506),
    C = n(572004),
    O = n(70956),
    N = n(145597),
    T = n(246992),
    E = n(981631),
    S = n(757744),
    P = n(388032),
    w = n(931207),
    I = n(616257);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                ((a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a));
            }));
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = {
        [E.Odu.CLICK_ZONE_DEBUG]: (e) =>
            R(
                k(
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
                    g.Z.getWidgetDefaultSettings(E.Odu.CLICK_ZONE_DEBUG)
                ),
                { pinned: !0 }
            ),
        [E.Odu.PERFORMANCE_DEBUG]: (e) =>
            R(
                k(
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
                    g.Z.getWidgetDefaultSettings(E.Odu.PERFORMANCE_DEBUG)
                ),
                { pinned: !0 }
            )
    },
    Z = {},
    L = (e, t) => e.find((e) => e.type === t);
function D(e) {
    let { id: t } = e,
        [n, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                n &&
                    (e = setTimeout(() => {
                        l(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [n]),
        (0, a.jsxs)(c.zxk, {
            look: c.zxk.Looks.LINK,
            color: c.zxk.Colors.LINK,
            size: c.zxk.Sizes.MIN,
            onClick: function () {
                (0, C.JG)(t, () => l(!0));
            },
            className: w.copyId,
            children: ['Application Id: ', t, ' ', n ? P.intl.string(P.t['t5VZ8/']) : null]
        })
    );
}
let M = r.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, o.e7)([h.ZP], () => h.ZP.getGameForPID(t.pid)),
            r = (0, o.e7)([_.Z], () => _.Z.getGameForPID(t.pid));
        return (0, a.jsxs)('div', {
            className: w.panelGroup,
            children: [
                (0, a.jsx)(c.Text, {
                    variant: 'text-md/bold',
                    color: 'text-primary',
                    children: t.gameName
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/bold',
                    color: 'text-secondary',
                    children: t.pid
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: null == n ? void 0 : n.exeName
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['isLauncher: ', (null == n ? void 0 : n.isLauncher) ? 'Yes' : 'No']
                }),
                null != t.applicationId &&
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/bold',
                        color: 'text-primary',
                        children: (0, a.jsx)(D, { id: t.applicationId })
                    }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['fullscreenType: ', (0, f.sS)(t.fullscreenType)]
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['state: ', t.state]
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['successfullyShown: ', t.successfullyShown ? 'Yes' : 'No']
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['source: ', t.source]
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['legacyEnabled: ', t.legacyEnabled ? 'Yes' : 'No']
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['oopEnabled: ', t.oopEnabled ? 'Yes' : 'No']
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['overlayMethod: ', (0, f.P_)(t.overlayMethod)]
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['hidden: ', (null == n ? void 0 : n.hidden) ? 'Yes' : 'No']
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['hook: ', (null == r ? void 0 : r.hook) ? 'Yes' : 'No']
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['overlay: ', (null == r ? void 0 : r.overlay) ? 'Yes' : 'No']
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['overlayCompatibilityHook: ', (null == r ? void 0 : r.overlayCompatibilityHook) ? 'Yes' : 'No']
                }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: ['supportsOutOfProcessOverlay: ', (null == r ? void 0 : r.supportsOutOfProcessOverlay) ? 'Yes' : 'No']
                })
            ]
        });
    }),
    z = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, o.cj)([y.default], () => y.default.getOverlayPIDStatuses()),
            r = (0, o.cj)([b.default], () => b.default.getTrackedGames()),
            l = (0, o.e7)([y.default], () => y.default.isInputLocked(t), [t]),
            i = (0, o.e7)([y.default], () => y.default.DEV_isInputLockedV3(t), [t]),
            s = (0, o.e7)([y.default], () => y.default.DEV_isInputLocked(t), [t]),
            d = (0, o.e7)([y.default], () => y.default.isReady(t), [t]);
        return (0, a.jsxs)('div', {
            children: [
                (0, a.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-primary',
                    children: ''.concat(t)
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: 'Screen Type Resolution: '.concat(
                        ((e) => {
                            var t;
                            let n = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == n || null == n.screenTypeResolutionTimestamp) return '...';
                            let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
                            return ''.concat(a.toFixed(2), 'ms');
                        })(t)
                    )
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: 'Window Creation: '.concat(
                        ((e) => {
                            var t;
                            let n = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return '...';
                            let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
                            return ''.concat(a.toFixed(2), 'ms');
                        })(t)
                    )
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: 'Rendering: '.concat(
                        ((e) => {
                            var t;
                            let n = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp) return '...';
                            let a = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
                            return ''.concat(a.toFixed(2), 'ms');
                        })(t)
                    )
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: 'Bridge Status: '.concat(n.get(Number(t)))
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: 'isInputLocked: '.concat(l)
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: 'isInputLockedV3: '.concat(i)
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: 'isInputLockedV2: '.concat(s)
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-primary',
                    children: 'isReady: '.concat(d)
                })
            ]
        });
    });
function B(e) {
    let t = L(Object.values((0, o.Wu)([g.Z], () => g.Z.getWidgetsForLayout(S.$S))), e);
    return [
        t,
        () => {
            if (null != t) (0, d.E9)(t.id);
            else {
                let t = A[e];
                if (null == t) return;
                let n = t(S.$S);
                (0, d.A4)(n);
            }
        }
    ];
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? ''.concat(e.toFixed(2), 'ms') : new Date(e).toLocaleTimeString();
}
let U = r.memo(function (e) {
    var { pid: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) ((n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++) ((n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['pid']);
    let r = (0, o.e7)(
        [b.default],
        () => {
            var e, n;
            if (null == t) return 'Unknown';
            let a = null == (e = b.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
            return null != a ? ((Z[t] = a), a) : null != (n = Z[t]) ? n : 'Unknown';
        },
        [t]
    );
    return (0, a.jsx)(
        c.Text,
        R(k({}, n), {
            variant: 'text-md/semibold',
            color: 'text-primary',
            children: r
        })
    );
});
function G() {
    let e = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(p.G.TrackFocusPIDs)),
        t = (0, o.Wu)([b.default], () => b.default.getDevToolsFocusedPidsWithTimestamp(), []),
        n = () => {
            u.Z.setRenderDebugMode(!v.ZP.hasRenderDebugMode(p.G.TrackFocusPIDs), p.G.TrackFocusPIDs);
        };
    return (0, a.jsxs)('div', {
        className: w.panelGroup,
        children: [
            (0, a.jsxs)('div', {
                className: w.panelHeader,
                children: [
                    (0, a.jsx)(c.XZJ, {
                        value: e,
                        onChange: () => n(),
                        size: 18,
                        type: c.XZJ.Types.INVERTED,
                        shape: c.XZJ.Shapes.BOX,
                        children: (0, a.jsx)(c.Text, {
                            tag: 'span',
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: 'Track Focus Pids'
                        })
                    }),
                    (0, a.jsx)(c.P3F, {
                        className: w.panelButton,
                        onClick: () => u.Z.clearTrackedPids(),
                        children: (0, a.jsx)(c.XHJ, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, a.jsxs)(c.zJl, {
                className: i()(w.panelGroup, w.scroller),
                children: [
                    0 === t.length &&
                        (0, a.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: 'No recent focused pids'
                        }),
                    [...t].reverse().map((e) => {
                        var t;
                        let [n, r] = e;
                        return (0, a.jsx)(
                            'div',
                            {
                                children: (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-default',
                                    children: [
                                        (0, a.jsx)(U, {
                                            pid: r,
                                            tag: 'span'
                                        }),
                                        ' - ',
                                        null != (t = null == r ? void 0 : r.toString()) ? t : 'null',
                                        ' @ ',
                                        F(n, !0)
                                    ]
                                })
                            },
                            ''.concat(r, '-').concat(n)
                        );
                    })
                ]
            })
        ]
    });
}
let V = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, o.e7)(
                [b.default, h.ZP],
                () => {
                    var e, n, a;
                    if (null == t) return null;
                    let r = null == (e = b.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                    return null != r ? r : null != (a = null == (n = h.ZP.getGameForPID(t)) ? void 0 : n.fullscreenType) ? a : x.Jx.UNKNOWN;
                },
                [t]
            );
        return (0, a.jsxs)(c.Text, {
            variant: 'text-sm/normal',
            color: 'text-secondary',
            tag: 'span',
            children: ['Original Screen Type: ', null != n ? (0, f.sS)(n) : 'Unknown']
        });
    }),
    H = r.memo(function () {
        let e = (0, o.cj)([b.default], () => b.default.getTrackedGames()),
            [t, n] = r.useState({}),
            l = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = h.ZP.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, f.hj)(n.pid, 0).then((e) => [n.pid, e, a]));
                        let r = await Promise.all(t);
                        n((e) =>
                            r.reduce(
                                (e, t) => {
                                    var n, a;
                                    let [r, l, i] = t;
                                    if (null == l || null == r) return e;
                                    let s = null != (a = e[r]) ? a : [],
                                        o = null == (n = s[s.length - 1]) ? void 0 : n.screenType;
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
                    }, +O.Z.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                []
            ),
            (0, a.jsx)(c.ua7, {
                position: 'left',
                text: "The most recent screen types we've logged, indexed by pid",
                children: (n) =>
                    (0, a.jsx)(
                        'div',
                        R(k({}, n), {
                            children: (0, a.jsxs)(c.zJl, {
                                className: i()(w.panelGroup, w.scroller),
                                children: [
                                    0 === Object.keys(e).length &&
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-default',
                                            children: 'No recent screen types'
                                        }),
                                    Object.values(e).map((e) =>
                                        (0, a.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    (0, a.jsx)(U, {
                                                        tag: 'div',
                                                        pid: e.pid
                                                    }),
                                                    (0, a.jsx)(V, { pid: e.pid }),
                                                    null != t[e.pid] &&
                                                        [...t[e.pid]].reverse().map((t) => {
                                                            let { screenType: n, timestamp: r } = t;
                                                            return (0, a.jsx)(
                                                                c.Text,
                                                                {
                                                                    variant: 'text-xs/normal',
                                                                    color: 'text-default',
                                                                    children: ''
                                                                        .concat(n, ':')
                                                                        .concat((0, f.sS)(n), ' @ ')
                                                                        .concat(F(r))
                                                                },
                                                                ''.concat(e.pid, '-').concat(n, '-').concat(r)
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
        let n = (0, o.cj)([b.default], () => b.default.getTrackedGames()),
            r = (0, N.getPID)(),
            l = (0, o.e7)([b.default], () => b.default.isOverlayOOPEnabledForPid(r), [r]),
            [i, s] = (0, o.Wu)([j.Z], () => [j.Z.enabled, j.Z.keepOpen]),
            d = (0, o.e7)([y.default], () => y.default.getFocusedPID()),
            u = (0, o.e7)([y.default], () => y.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)('div', {
            className: w.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-default',
                        children: 'No tracked game times'
                    }),
                Object.values(n).map((e) => (0, a.jsx)(z, { pid: e.pid }, e.pid)),
                (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-primary',
                            children: ['focusedPID: ', null != (e = null == d ? void 0 : d.toString()) ? e : 'null']
                        }),
                        (0, a.jsxs)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: ['isFocusedPidOutOfProcess: ', u ? 'Yes' : 'No']
                        }),
                        (0, a.jsxs)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-primary',
                            children: ['processPid: ', null != (t = null == r ? void 0 : r.toString()) ? t : 'unknown']
                        }),
                        (0, a.jsxs)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: ['isOOPEnabledForPid: ', l ? 'Yes' : 'No']
                        }),
                        (0, a.jsxs)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: ['SoundboardOverlay.enabled: ', i ? 'Yes' : 'No']
                        }),
                        (0, a.jsxs)(c.Text, {
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
        let [e, t] = B(E.Odu.CLICK_ZONE_DEBUG),
            [n, r] = B(E.Odu.PERFORMANCE_DEBUG),
            l = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(p.G.ClickZones)),
            i = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(p.G.WidgetAreas)),
            s = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(p.G.DisabledGPUBoost)),
            d = (0, o.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(p.G.ForceGPUBoost)),
            m = (e) => {
                u.Z.setRenderDebugMode(!v.ZP.hasRenderDebugMode(e), e);
            },
            x = () => {
                m(p.G.ClickZones);
            },
            h = () => {
                m(p.G.WidgetAreas);
            },
            b = () => {
                m(p.G.DisabledGPUBoost);
            },
            f = () => {
                m(p.G.ForceGPUBoost);
            };
        return (0, a.jsxs)('div', {
            className: w.panelGroup,
            children: [
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Enables a red border around click zones to help with debugging.',
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            R(k({}, e), {
                                children: (0, a.jsx)(c.XZJ, {
                                    value: l,
                                    onChange: () => x(),
                                    size: 18,
                                    type: c.XZJ.Types.INVERTED,
                                    shape: c.XZJ.Shapes.BOX,
                                    children: (0, a.jsx)(c.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Enable Click Zone Debug Mode'
                                    })
                                })
                            })
                        )
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets',
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            R(k({}, e), {
                                children: (0, a.jsx)(c.XZJ, {
                                    value: i,
                                    onChange: () => h(),
                                    size: 18,
                                    type: c.XZJ.Types.INVERTED,
                                    shape: c.XZJ.Shapes.BOX,
                                    children: (0, a.jsx)(c.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Enable Render Debug Mode'
                                    })
                                })
                            })
                        )
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Disables GPU Boost, which can help with performance when games compete for GPU resources.',
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            R(k({}, e), {
                                children: (0, a.jsx)(c.XZJ, {
                                    value: s,
                                    onChange: () => b(),
                                    size: 18,
                                    type: c.XZJ.Types.INVERTED,
                                    shape: c.XZJ.Shapes.BOX,
                                    children: (0, a.jsx)(c.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Disable GPU Boost'
                                    })
                                })
                            })
                        )
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Forces GPU Boost, which can help with performance when games compete for GPU resources.',
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            R(k({}, e), {
                                children: (0, a.jsx)(c.XZJ, {
                                    value: d,
                                    onChange: () => f(),
                                    size: 18,
                                    disabled: s,
                                    type: c.XZJ.Types.INVERTED,
                                    shape: c.XZJ.Shapes.BOX,
                                    children: (0, a.jsx)(c.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Force GPU Boost'
                                    })
                                })
                            })
                        )
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.',
                    children: (n) =>
                        (0, a.jsx)(
                            'div',
                            R(k({}, n), {
                                children: (0, a.jsx)(c.XZJ, {
                                    value: null != e,
                                    onChange: () => t(),
                                    size: 18,
                                    type: c.XZJ.Types.INVERTED,
                                    shape: c.XZJ.Shapes.BOX,
                                    children: (0, a.jsx)(c.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: 'Click Zone Debug Widget'
                                    })
                                })
                            })
                        )
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: "Creates a widget that shows the overlay's window performance metrics.",
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            R(k({}, e), {
                                children: (0, a.jsx)(c.XZJ, {
                                    value: null != n,
                                    onChange: () => r(),
                                    size: 18,
                                    type: c.XZJ.Types.INVERTED,
                                    shape: c.XZJ.Shapes.BOX,
                                    children: (0, a.jsx)(c.Text, {
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
            t = (0, o.e7)([h.ZP], () => h.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                t.length > 0 &&
                    (0, a.jsx)(c.ua7, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, a.jsx)(
                                'div',
                                R(k({}, e), {
                                    children: (0, a.jsxs)('div', {
                                        className: w.panelGroup,
                                        children: [
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-md/bold',
                                                color: 'text-danger',
                                                children: 'Untracked Running Games'
                                            }),
                                            t.map((e) =>
                                                (0, a.jsxs)(
                                                    c.Text,
                                                    {
                                                        variant: 'text-sm/normal',
                                                        color: 'text-danger',
                                                        children: [''.concat(e.pid, ' - ').concat(e.name, ' (').concat(e.exeName, ')'), (0, a.jsx)(V, { pid: e.pid })]
                                                    },
                                                    e.pid
                                                )
                                            )
                                        ]
                                    })
                                })
                            )
                    }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'The current running games process information',
                    children: (t) =>
                        (0, a.jsx)(
                            'div',
                            R(k({}, t), {
                                children: (0, a.jsxs)('div', {
                                    className: w.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-default',
                                                children: 'No running games'
                                            }),
                                        Object.values(e).map((e) => (0, a.jsx)(M, { trackedGame: e }, e.pid))
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
            [t, n] = r.useState(e),
            l = (e) => {
                (n(e), u.Z.forceRenderMode(e));
            },
            i = [
                {
                    label: m.R5.UNSET,
                    value: m.R5.UNSET
                },
                {
                    label: m.R5.IN_PROCESS_V2,
                    value: m.R5.IN_PROCESS_V2
                },
                {
                    label: m.R5.OUT_OF_PROCESS_V3,
                    value: m.R5.OUT_OF_PROCESS_V3
                },
                {
                    label: m.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: m.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
                }
            ].map((t) => R(k({}, t), { label: ''.concat(t.label, ' ').concat(e === t.value ? '(current)' : '') }));
        return (0, a.jsx)(c.ua7, {
            position: 'left',
            text: 'Override the overlay render mode',
            children: (e) =>
                (0, a.jsx)(
                    'div',
                    R(k({}, e), {
                        className: w.panelGroup,
                        children: (0, a.jsx)(c.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: i,
                            select: l,
                            popoutLayerContext: T.O$
                        })
                    })
                )
        });
    });
function J() {
    return (0, a.jsx)(c.w0Z, {
        children: (0, a.jsxs)('div', {
            className: i()(I.panel, w.panel),
            children: [(0, a.jsx)(K, {}), (0, a.jsx)(Y, {}), (0, a.jsx)(X, {}), (0, a.jsx)(W, {}), (0, a.jsx)(G, {}), (0, a.jsx)(H, {})]
        })
    });
}
