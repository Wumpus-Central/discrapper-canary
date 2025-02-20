n.d(t, { Z: () => A }), n(47120), n(653041), n(978209);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(772848),
    s = n(442837),
    c = n(481060),
    d = n(765250),
    u = n(13245),
    h = n(615287),
    m = n(594190),
    x = n(306381),
    p = n(371651),
    f = n(829907),
    b = n(610394),
    _ = n(355863),
    g = n(449224),
    v = n(808506),
    j = n(70956),
    C = n(145597),
    y = n(246992),
    O = n(981631),
    N = n(501787),
    T = n(333307),
    E = n(841699);
function S(e) {
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
function k(e, t) {
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
let I = {
        [O.Odu.CLICK_ZONE_DEBUG]: (e) =>
            k(
                S(
                    {
                        type: O.Odu.CLICK_ZONE_DEBUG,
                        id: (0, o.Z)(),
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
                    _.Z.getWidgetDefaultSettings(O.Odu.CLICK_ZONE_DEBUG)
                ),
                { pinned: !0 }
            ),
        [O.Odu.PERFORMANCE_DEBUG]: (e) =>
            k(
                S(
                    {
                        type: O.Odu.PERFORMANCE_DEBUG,
                        id: (0, o.Z)(),
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
                    _.Z.getWidgetDefaultSettings(O.Odu.PERFORMANCE_DEBUG)
                ),
                { pinned: !0 }
            )
    },
    w = (e, t) => e.find((e) => e.type === t);
function R(e) {
    let { trackedGame: t } = e,
        n = (0, s.e7)([m.ZP], () => m.ZP.getGameForPID(t.pid)),
        a = (0, s.e7)([g.Z], () => g.Z.getGameForPID(t.pid));
    return (0, r.jsxs)('div', {
        className: T.panelGroup,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/bold',
                color: 'text-primary',
                children: t.gameName
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/bold',
                color: 'text-secondary',
                children: t.pid
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: null == n ? void 0 : n.exeName
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['isLauncher: ', (null == n ? void 0 : n.isLauncher) ? 'Yes' : 'No']
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['fullscreenType: ', (0, f.sS)(t.fullscreenType)]
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['state: ', t.state]
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['source: ', t.source]
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['legacyEnabled: ', t.legacyEnabled ? 'Yes' : 'No']
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['oopEnabled: ', t.oopEnabled ? 'Yes' : 'No']
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['overlayMethod: ', (0, f.P_)(t.overlayMethod)]
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['hidden: ', (null == n ? void 0 : n.hidden) ? 'Yes' : 'No']
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['hook: ', (null == a ? void 0 : a.hook) ? 'Yes' : 'No']
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['overlay: ', (null == a ? void 0 : a.overlay) ? 'Yes' : 'No']
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['overlayCompatibilityHook: ', (null == a ? void 0 : a.overlayCompatibilityHook) ? 'Yes' : 'No']
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['supportsOutOfProcessOverlay: ', (null == a ? void 0 : a.supportsOutOfProcessOverlay) ? 'Yes' : 'No']
            })
        ]
    });
}
function Z(e) {
    let { pid: t } = e,
        n = (0, s.cj)([v.Z], () => v.Z.getOverlayPIDStatuses()),
        a = (0, s.cj)([p.default], () => p.default.getTrackedGames()),
        i = (0, s.e7)([v.Z], () => v.Z.isInputLocked(t), [t]),
        l = (0, s.e7)([v.Z], () => v.Z.DEV_isInputLockedV3(t), [t]),
        o = (0, s.e7)([v.Z], () => v.Z.DEV_isInputLocked(t), [t]),
        d = (0, s.e7)([v.Z], () => v.Z.isReady(t), [t]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/semibold',
                color: 'text-primary',
                children: ''.concat(t)
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: 'Screen Type Resolution: '.concat(
                    ((e) => {
                        var t;
                        let n = null === (t = a[e]) || void 0 === t ? void 0 : t.timer;
                        if (null == n || null == n.screenTypeResolutionTimestamp) return '...';
                        let r = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
                        return ''.concat(r.toFixed(2), 'ms');
                    })(t)
                )
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: 'Window Creation: '.concat(
                    ((e) => {
                        var t;
                        let n = null === (t = a[e]) || void 0 === t ? void 0 : t.timer;
                        if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return '...';
                        let r = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
                        return ''.concat(r.toFixed(2), 'ms');
                    })(t)
                )
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: 'Rendering: '.concat(
                    ((e) => {
                        var t;
                        let n = null === (t = a[e]) || void 0 === t ? void 0 : t.timer;
                        if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp) return '...';
                        let r = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
                        return ''.concat(r.toFixed(2), 'ms');
                    })(t)
                )
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-primary',
                children: 'Bridge Status: '.concat(n.get(Number(t)))
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-primary',
                children: 'isInputLocked: '.concat(i)
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-primary',
                children: 'isInputLockedV3: '.concat(l)
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-primary',
                children: 'isInputLockedV2: '.concat(o)
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-primary',
                children: 'isReady: '.concat(d)
            })
        ]
    });
}
function P(e) {
    let t = w(Object.values((0, s.Wu)([_.Z], () => _.Z.getWidgetsForLayout(N.OVERLAY_V3_LAYOUT_ID))), e);
    return [
        t,
        () => {
            if (null != t) (0, d.E9)(t.id);
            else {
                let t = I[e];
                if (null == t) return;
                let n = t(N.OVERLAY_V3_LAYOUT_ID);
                (0, d.A4)(n);
            }
        }
    ];
}
function A() {
    var e, t;
    let [n, i] = P(O.Odu.CLICK_ZONE_DEBUG),
        [o, d] = P(O.Odu.PERFORMANCE_DEBUG),
        _ = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.ClickZones)),
        g = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.WidgetAreas)),
        N = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.DisabledGPUBoost)),
        I = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.ForceGPUBoost)),
        w = (0, s.e7)([p.default], () => p.default.getForcedRenderMode()),
        [A, L] = a.useState({}),
        [D, B] = a.useState(w),
        M = (e) => {
            B(e), u.Z.forceRenderMode(e);
        },
        F = [
            {
                label: h.R5.UNSET,
                value: h.R5.UNSET
            },
            {
                label: h.R5.IN_PROCESS_V2,
                value: h.R5.IN_PROCESS_V2
            },
            {
                label: h.R5.OUT_OF_PROCESS_V2,
                value: h.R5.OUT_OF_PROCESS_V2
            },
            {
                label: h.R5.OUT_OF_PROCESS_V3,
                value: h.R5.OUT_OF_PROCESS_V3
            },
            {
                label: h.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                value: h.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
            }
        ].map((e) => k(S({}, e), { label: ''.concat(e.label, ' ').concat(w === e.value ? '(current)' : '') })),
        U = (0, s.cj)([p.default], () => p.default.getTrackedGames()),
        z = (0, s.e7)([v.Z], () => v.Z.getFocusedPID()),
        G = (0, s.e7)([v.Z], () => v.Z.isFocusedPidOutOfProcess()),
        W = (0, C.QF)(),
        H = (0, s.e7)([p.default], () => p.default.isOverlayOOPEnabledForPid(W), [W]),
        V = (0, s.e7)([m.ZP], () => m.ZP.getRunningGames());
    a.useEffect(() => {
        L((e) => {
            for (let t of Object.keys(U)) e[Number(t)] = U[Number(t)];
            return e;
        });
    }, [U]);
    let [Y, X] = a.useState({}),
        K = a.useRef();
    a.useEffect(
        () => (
            (K.current = setInterval(async () => {
                let e = m.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let r of e) t.push((0, f.hj)(r.pid, 0).then((e) => [r.pid, e, n]));
                let r = await Promise.all(t);
                X((e) =>
                    r.reduce(
                        (e, t) => {
                            var n;
                            let [r, a, i] = t;
                            if (null == a || null == r) return e;
                            let l = null !== (n = e[r]) && void 0 !== n ? n : [];
                            return (
                                (0 === l.length || l[l.length - 1].screenType !== a) &&
                                    (e[r] = [
                                        ...l,
                                        {
                                            pid: r,
                                            screenType: a,
                                            timestamp: i
                                        }
                                    ]),
                                e
                            );
                        },
                        S({}, e)
                    )
                );
            }, 10 * j.Z.Millis.SECOND)),
            () => clearInterval(K.current)
        ),
        []
    );
    let J = (e) => {
            u.Z.setRenderDebugMode(!b.ZP.hasRenderDebugMode(e), e);
        },
        q = () => {
            J(x.G.ClickZones);
        },
        $ = () => {
            J(x.G.WidgetAreas);
        },
        Q = () => {
            J(x.G.DisabledGPUBoost);
        },
        ee = () => {
            J(x.G.ForceGPUBoost);
        },
        et = (e) => {
            var t, n;
            return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.gameName) && void 0 !== n ? n : 'Unknown';
        },
        en = (e) => {
            var t, n;
            return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.fullscreenType) && void 0 !== n ? n : 'Unknown';
        },
        er = V.filter((e) => null == U[e.pid]);
    return (0, r.jsx)(c.w0Z, {
        children: (0, r.jsxs)('div', {
            className: l()(E.panel, T.panel),
            children: [
                (0, r.jsxs)('div', {
                    className: T.panelGroup,
                    children: [
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    k(S({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: _,
                                            onChange: () => q(),
                                            size: 18,
                                            type: c.XZJ.Types.INVERTED,
                                            shape: c.XZJ.Shapes.BOX,
                                            children: (0, r.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                children: 'Enable Click Zone Debug Mode'
                                            })
                                        })
                                    })
                                )
                        }),
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets',
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    k(S({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: g,
                                            onChange: () => $(),
                                            size: 18,
                                            type: c.XZJ.Types.INVERTED,
                                            shape: c.XZJ.Shapes.BOX,
                                            children: (0, r.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                children: 'Enable Render Debug Mode'
                                            })
                                        })
                                    })
                                )
                        }),
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Disables GPU Boost, which can help with performance when games compete for GPU resources.',
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    k(S({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: N,
                                            onChange: () => Q(),
                                            size: 18,
                                            type: c.XZJ.Types.INVERTED,
                                            shape: c.XZJ.Shapes.BOX,
                                            children: (0, r.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                children: 'Disable GPU Boost'
                                            })
                                        })
                                    })
                                )
                        }),
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Forces GPU Boost, which can help with performance when games compete for GPU resources.',
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    k(S({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: I,
                                            onChange: () => ee(),
                                            size: 18,
                                            disabled: N,
                                            type: c.XZJ.Types.INVERTED,
                                            shape: c.XZJ.Shapes.BOX,
                                            children: (0, r.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                children: 'Force GPU Boost'
                                            })
                                        })
                                    })
                                )
                        }),
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.',
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    k(S({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: null != n,
                                            onChange: () => i(),
                                            size: 18,
                                            type: c.XZJ.Types.INVERTED,
                                            shape: c.XZJ.Shapes.BOX,
                                            children: (0, r.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                children: 'Click Zone Debug Widget'
                                            })
                                        })
                                    })
                                )
                        }),
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: "Creates a widget that shows the overlay's window performance metrics.",
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    k(S({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: null != o,
                                            onChange: () => d(),
                                            size: 18,
                                            type: c.XZJ.Types.INVERTED,
                                            shape: c.XZJ.Shapes.BOX,
                                            children: (0, r.jsx)(c.Text, {
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
                }),
                (0, r.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Override the overlay render mode',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            k(S({}, e), {
                                className: T.panelGroup,
                                children: (0, r.jsx)(c.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === D,
                                    options: F,
                                    select: M,
                                    popoutLayerContext: y.O$
                                })
                            })
                        )
                }),
                er.length > 0 &&
                    (0, r.jsx)(c.ua7, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, r.jsx)(
                                'div',
                                k(S({}, e), {
                                    children: (0, r.jsxs)('div', {
                                        className: T.panelGroup,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/bold',
                                                color: 'text-danger',
                                                children: 'Untracked Running Games'
                                            }),
                                            er.map((e) =>
                                                (0, r.jsx)(
                                                    c.Text,
                                                    {
                                                        variant: 'text-sm/normal',
                                                        color: 'text-danger',
                                                        children: ''.concat(e.pid, ':').concat(e.name, ' (').concat(e.exeName, ')')
                                                    },
                                                    e.pid
                                                )
                                            )
                                        ]
                                    })
                                })
                            )
                    }),
                (0, r.jsx)(c.ua7, {
                    position: 'left',
                    text: 'The current running games process information',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            k(S({}, e), {
                                children: (0, r.jsxs)('div', {
                                    className: T.panelGroup,
                                    children: [
                                        0 === Object.keys(U).length &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No running games'
                                            }),
                                        Object.values(U).map((e) => (0, r.jsx)(R, { trackedGame: e }, e.pid))
                                    ]
                                })
                            })
                        )
                }),
                (0, r.jsxs)('div', {
                    className: T.panelGroup,
                    children: [
                        0 === Object.keys(U).length &&
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(U).map((e) => (0, r.jsx)(Z, { pid: e.pid }, e.pid)),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['focusedPID: ', null !== (e = null == z ? void 0 : z.toString()) && void 0 !== e ? e : 'null']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isFocusedPidOutOfProcess: ', G ? 'Yes' : 'No']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['processPid: ', null !== (t = null == W ? void 0 : W.toString()) && void 0 !== t ? t : 'unknown']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isOOPEnabledForPid: ', H ? 'Yes' : 'No']
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(c.ua7, {
                    position: 'left',
                    text: "The most recent screen types we've logged, indexed by pid",
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            k(S({}, e), {
                                children: (0, r.jsxs)('div', {
                                    className: T.panelGroup,
                                    children: [
                                        0 === Object.keys(U).length &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No recent screen types'
                                            }),
                                        Object.values(U).map((e) => {
                                            var t;
                                            return (0, r.jsxs)(
                                                'div',
                                                {
                                                    children: [
                                                        (0, r.jsx)(c.Text, {
                                                            variant: 'text-md/semibold',
                                                            color: 'text-primary',
                                                            children: et(e.pid)
                                                        }),
                                                        (0, r.jsxs)(c.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'text-secondary',
                                                            children: ['Original Screen Type: ', en(e.pid)]
                                                        }),
                                                        null === (t = Y[e.pid]) || void 0 === t
                                                            ? void 0
                                                            : t.reverse().map((t) => {
                                                                  let { screenType: n, timestamp: a } = t;
                                                                  return (0, r.jsx)(
                                                                      c.Text,
                                                                      {
                                                                          variant: 'text-xs/normal',
                                                                          color: 'text-normal',
                                                                          children: ''
                                                                              .concat(n, ':')
                                                                              .concat((0, f.sS)(n), ' @ ')
                                                                              .concat(a)
                                                                      },
                                                                      ''.concat(e.pid, '-').concat(n, '-').concat(a)
                                                                  );
                                                              })
                                                    ]
                                                },
                                                e.pid
                                            );
                                        })
                                    ]
                                })
                            })
                        )
                })
            ]
        })
    });
}
