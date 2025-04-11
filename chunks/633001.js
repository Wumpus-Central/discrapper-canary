n.d(t, { Z: () => B }), n(388685), n(539854), n(583741);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(772848),
    s = n(442837),
    c = n(481060),
    d = n(765250),
    u = n(13245),
    m = n(615287),
    x = n(594190),
    h = n(306381),
    p = n(371651),
    b = n(829907),
    f = n(610394),
    _ = n(352527),
    g = n(355863),
    v = n(449224),
    j = n(808506),
    y = n(572004),
    C = n(70956),
    O = n(145597),
    S = n(246992),
    N = n(981631),
    T = n(757744),
    E = n(388032),
    k = n(931207),
    P = n(616257);
function w(e) {
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
function I(e, t) {
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
let R = {
        [N.Odu.CLICK_ZONE_DEBUG]: (e) =>
            I(
                w(
                    {
                        type: N.Odu.CLICK_ZONE_DEBUG,
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
                    g.Z.getWidgetDefaultSettings(N.Odu.CLICK_ZONE_DEBUG)
                ),
                { pinned: !0 }
            ),
        [N.Odu.PERFORMANCE_DEBUG]: (e) =>
            I(
                w(
                    {
                        type: N.Odu.PERFORMANCE_DEBUG,
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
                    g.Z.getWidgetDefaultSettings(N.Odu.PERFORMANCE_DEBUG)
                ),
                { pinned: !0 }
            )
    },
    Z = (e, t) => e.find((e) => e.type === t);
function L(e) {
    let { id: t } = e,
        [n, l] = a.useState(!1);
    return (
        a.useEffect(() => {
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
        (0, r.jsxs)(c.zxk, {
            look: c.zxk.Looks.LINK,
            color: c.zxk.Colors.LINK,
            size: c.zxk.Sizes.MIN,
            onClick: function () {
                (0, y.JG)(t), l(!0);
            },
            className: k.copyId,
            children: ['Application Id: ', t, ' ', n ? E.NW.string(E.t['t5VZ8/']) : null]
        })
    );
}
function A(e) {
    let { trackedGame: t } = e,
        n = (0, s.e7)([x.ZP], () => x.ZP.getGameForPID(t.pid)),
        a = (0, s.e7)([v.Z], () => v.Z.getGameForPID(t.pid));
    return (0, r.jsxs)('div', {
        className: k.panelGroup,
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
            null != t.applicationId &&
                (0, r.jsx)(c.Text, {
                    variant: 'text-md/bold',
                    color: 'text-primary',
                    children: (0, r.jsx)(L, { id: t.applicationId })
                }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['fullscreenType: ', (0, b.sS)(t.fullscreenType)]
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
                children: ['overlayMethod: ', (0, b.P_)(t.overlayMethod)]
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
function D(e) {
    let { pid: t } = e,
        n = (0, s.cj)([j.default], () => j.default.getOverlayPIDStatuses()),
        a = (0, s.cj)([p.default], () => p.default.getTrackedGames()),
        l = (0, s.e7)([j.default], () => j.default.isInputLocked(t), [t]),
        i = (0, s.e7)([j.default], () => j.default.DEV_isInputLockedV3(t), [t]),
        o = (0, s.e7)([j.default], () => j.default.DEV_isInputLocked(t), [t]),
        d = (0, s.e7)([j.default], () => j.default.isReady(t), [t]);
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
                        let n = null == (t = a[e]) ? void 0 : t.timer;
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
                        let n = null == (t = a[e]) ? void 0 : t.timer;
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
                        let n = null == (t = a[e]) ? void 0 : t.timer;
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
                children: 'isInputLocked: '.concat(l)
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-primary',
                children: 'isInputLockedV3: '.concat(i)
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
function z(e) {
    let t = Z(Object.values((0, s.Wu)([g.Z], () => g.Z.getWidgetsForLayout(T.$))), e);
    return [
        t,
        () => {
            if (null != t) (0, d.E9)(t.id);
            else {
                let t = R[e];
                if (null == t) return;
                let n = t(T.$);
                (0, d.A4)(n);
            }
        }
    ];
}
function B() {
    var e, t;
    let [n, l] = z(N.Odu.CLICK_ZONE_DEBUG),
        [o, d] = z(N.Odu.PERFORMANCE_DEBUG),
        g = (0, s.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.ClickZones)),
        v = (0, s.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.WidgetAreas)),
        y = (0, s.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.DisabledGPUBoost)),
        T = (0, s.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.ForceGPUBoost)),
        E = (0, s.e7)([p.default], () => p.default.getForcedRenderMode()),
        [R, Z] = a.useState({}),
        [L, B] = a.useState(E),
        M = (e) => {
            B(e), u.Z.forceRenderMode(e);
        },
        U = [
            {
                label: m.R5.UNSET,
                value: m.R5.UNSET
            },
            {
                label: m.R5.IN_PROCESS_V2,
                value: m.R5.IN_PROCESS_V2
            },
            {
                label: m.R5.OUT_OF_PROCESS_V2,
                value: m.R5.OUT_OF_PROCESS_V2
            },
            {
                label: m.R5.OUT_OF_PROCESS_V3,
                value: m.R5.OUT_OF_PROCESS_V3
            },
            {
                label: m.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                value: m.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
            }
        ].map((e) => I(w({}, e), { label: ''.concat(e.label, ' ').concat(E === e.value ? '(current)' : '') })),
        G = (0, s.cj)([p.default], () => p.default.getTrackedGames()),
        F = (0, s.e7)([j.default], () => j.default.getFocusedPID()),
        W = (0, s.e7)([j.default], () => j.default.isFocusedPidOutOfProcess()),
        H = (0, O.getPID)(),
        V = (0, s.e7)([p.default], () => p.default.isOverlayOOPEnabledForPid(H), [H]),
        [X, K] = (0, s.Wu)([_.Z], () => [_.Z.enabled, _.Z.keepOpen]),
        Y = (0, s.e7)([x.ZP], () => x.ZP.getRunningGames());
    a.useEffect(() => {
        Z((e) => {
            for (let t of Object.keys(G)) e[Number(t)] = G[Number(t)];
            return e;
        });
    }, [G]);
    let [J, q] = a.useState({}),
        $ = a.useRef(null);
    a.useEffect(
        () => (
            ($.current = setInterval(async () => {
                let e = x.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let r of e) t.push((0, b.hj)(r.pid, 0).then((e) => [r.pid, e, n]));
                let r = await Promise.all(t);
                q((e) =>
                    r.reduce(
                        (e, t) => {
                            var n;
                            let [r, a, l] = t;
                            if (null == a || null == r) return e;
                            let i = null != (n = e[r]) ? n : [];
                            return (
                                (0 === i.length || i[i.length - 1].screenType !== a) &&
                                    (e[r] = [
                                        ...i,
                                        {
                                            pid: r,
                                            screenType: a,
                                            timestamp: l
                                        }
                                    ]),
                                e
                            );
                        },
                        w({}, e)
                    )
                );
            }, 10 * C.Z.Millis.SECOND)),
            () => clearInterval($.current)
        ),
        []
    );
    let Q = (e) => {
            u.Z.setRenderDebugMode(!f.ZP.hasRenderDebugMode(e), e);
        },
        ee = () => {
            Q(h.G.ClickZones);
        },
        et = () => {
            Q(h.G.WidgetAreas);
        },
        en = () => {
            Q(h.G.DisabledGPUBoost);
        },
        er = () => {
            Q(h.G.ForceGPUBoost);
        },
        ea = (e) => {
            var t, n;
            return null != (n = null == (t = R[e]) ? void 0 : t.gameName) ? n : 'Unknown';
        },
        el = (e) => {
            var t, n;
            return null != (n = null == (t = R[e]) ? void 0 : t.fullscreenType) ? n : 'Unknown';
        },
        ei = Y.filter((e) => null == G[e.pid]);
    return (0, r.jsx)(c.w0Z, {
        children: (0, r.jsxs)('div', {
            className: i()(P.panel, k.panel),
            children: [
                (0, r.jsxs)('div', {
                    className: k.panelGroup,
                    children: [
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    I(w({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: g,
                                            onChange: () => ee(),
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
                                    I(w({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: v,
                                            onChange: () => et(),
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
                                    I(w({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: y,
                                            onChange: () => en(),
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
                                    I(w({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: T,
                                            onChange: () => er(),
                                            size: 18,
                                            disabled: y,
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
                                    I(w({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: null != n,
                                            onChange: () => l(),
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
                                    I(w({}, e), {
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
                            I(w({}, e), {
                                className: k.panelGroup,
                                children: (0, r.jsx)(c.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === L,
                                    options: U,
                                    select: M,
                                    popoutLayerContext: S.O$
                                })
                            })
                        )
                }),
                ei.length > 0 &&
                    (0, r.jsx)(c.ua7, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, r.jsx)(
                                'div',
                                I(w({}, e), {
                                    children: (0, r.jsxs)('div', {
                                        className: k.panelGroup,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/bold',
                                                color: 'text-danger',
                                                children: 'Untracked Running Games'
                                            }),
                                            ei.map((e) =>
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
                            I(w({}, e), {
                                children: (0, r.jsxs)('div', {
                                    className: k.panelGroup,
                                    children: [
                                        0 === Object.keys(G).length &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No running games'
                                            }),
                                        Object.values(G).map((e) => (0, r.jsx)(A, { trackedGame: e }, e.pid))
                                    ]
                                })
                            })
                        )
                }),
                (0, r.jsxs)('div', {
                    className: k.panelGroup,
                    children: [
                        0 === Object.keys(G).length &&
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(G).map((e) => (0, r.jsx)(D, { pid: e.pid }, e.pid)),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['focusedPID: ', null != (e = null == F ? void 0 : F.toString()) ? e : 'null']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isFocusedPidOutOfProcess: ', W ? 'Yes' : 'No']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['processPid: ', null != (t = null == H ? void 0 : H.toString()) ? t : 'unknown']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isOOPEnabledForPid: ', V ? 'Yes' : 'No']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['SoundboardOverlay.enabled: ', X ? 'Yes' : 'No']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['SoundboardOverlay.keepOpen: ', K ? 'Yes' : 'No']
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
                            I(w({}, e), {
                                children: (0, r.jsxs)('div', {
                                    className: k.panelGroup,
                                    children: [
                                        0 === Object.keys(G).length &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No recent screen types'
                                            }),
                                        Object.values(G).map((e) => {
                                            var t;
                                            return (0, r.jsxs)(
                                                'div',
                                                {
                                                    children: [
                                                        (0, r.jsx)(c.Text, {
                                                            variant: 'text-md/semibold',
                                                            color: 'text-primary',
                                                            children: ea(e.pid)
                                                        }),
                                                        (0, r.jsxs)(c.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'text-secondary',
                                                            children: ['Original Screen Type: ', el(e.pid)]
                                                        }),
                                                        null == (t = J[e.pid])
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
                                                                              .concat((0, b.sS)(n), ' @ ')
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
