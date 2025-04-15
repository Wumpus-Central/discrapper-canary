n.d(t, { Z: () => M }), n(388685), n(539854), n(583741);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(765250),
    u = n(13245),
    m = n(615287),
    x = n(594190),
    h = n(306381),
    p = n(371651),
    b = n(829907),
    f = n(610394),
    v = n(352527),
    j = n(355863),
    g = n(449224),
    _ = n(808506),
    y = n(572004),
    C = n(70956),
    O = n(145597),
    N = n(246992),
    E = n(981631),
    T = n(757744),
    S = n(388032),
    P = n(931207),
    w = n(616257);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
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
let R = {
        [E.Odu.CLICK_ZONE_DEBUG]: (e) =>
            I(
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
                    j.Z.getWidgetDefaultSettings(E.Odu.CLICK_ZONE_DEBUG)
                ),
                { pinned: !0 }
            ),
        [E.Odu.PERFORMANCE_DEBUG]: (e) =>
            I(
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
                    j.Z.getWidgetDefaultSettings(E.Odu.PERFORMANCE_DEBUG)
                ),
                { pinned: !0 }
            )
    },
    Z = (e, t) => e.find((e) => e.type === t);
function L(e) {
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
                (0, y.JG)(t, () => l(!0));
            },
            className: P.copyId,
            children: ['Application Id: ', t, ' ', n ? S.NW.string(S.t['t5VZ8/']) : null]
        })
    );
}
function A(e) {
    let { trackedGame: t } = e,
        n = (0, o.e7)([x.ZP], () => x.ZP.getGameForPID(t.pid)),
        r = (0, o.e7)([g.Z], () => g.Z.getGameForPID(t.pid));
    return (0, a.jsxs)('div', {
        className: P.panelGroup,
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
                color: 'text-normal',
                children: ['isLauncher: ', (null == n ? void 0 : n.isLauncher) ? 'Yes' : 'No']
            }),
            null != t.applicationId &&
                (0, a.jsx)(c.Text, {
                    variant: 'text-md/bold',
                    color: 'text-primary',
                    children: (0, a.jsx)(L, { id: t.applicationId })
                }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['fullscreenType: ', (0, b.sS)(t.fullscreenType)]
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['state: ', t.state]
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['source: ', t.source]
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['legacyEnabled: ', t.legacyEnabled ? 'Yes' : 'No']
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['oopEnabled: ', t.oopEnabled ? 'Yes' : 'No']
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['overlayMethod: ', (0, b.P_)(t.overlayMethod)]
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['hidden: ', (null == n ? void 0 : n.hidden) ? 'Yes' : 'No']
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['hook: ', (null == r ? void 0 : r.hook) ? 'Yes' : 'No']
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['overlay: ', (null == r ? void 0 : r.overlay) ? 'Yes' : 'No']
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['overlayCompatibilityHook: ', (null == r ? void 0 : r.overlayCompatibilityHook) ? 'Yes' : 'No']
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['supportsOutOfProcessOverlay: ', (null == r ? void 0 : r.supportsOutOfProcessOverlay) ? 'Yes' : 'No']
            })
        ]
    });
}
function D(e) {
    let { pid: t } = e,
        n = (0, o.cj)([_.default], () => _.default.getOverlayPIDStatuses()),
        r = (0, o.cj)([p.default], () => p.default.getTrackedGames()),
        l = (0, o.e7)([_.default], () => _.default.isInputLocked(t), [t]),
        i = (0, o.e7)([_.default], () => _.default.DEV_isInputLockedV3(t), [t]),
        s = (0, o.e7)([_.default], () => _.default.DEV_isInputLocked(t), [t]),
        d = (0, o.e7)([_.default], () => _.default.isReady(t), [t]);
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
}
function z(e) {
    let t = Z(Object.values((0, o.Wu)([j.Z], () => j.Z.getWidgetsForLayout(T.$))), e);
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
function M() {
    var e, t;
    let [n, l] = z(E.Odu.CLICK_ZONE_DEBUG),
        [s, d] = z(E.Odu.PERFORMANCE_DEBUG),
        j = (0, o.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.ClickZones)),
        g = (0, o.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.WidgetAreas)),
        y = (0, o.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.DisabledGPUBoost)),
        T = (0, o.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(h.G.ForceGPUBoost)),
        S = (0, o.e7)([p.default], () => p.default.getForcedRenderMode()),
        [R, Z] = r.useState({}),
        [L, M] = r.useState(S),
        U = (e) => {
            M(e), u.Z.forceRenderMode(e);
        },
        B = [
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
        ].map((e) => I(k({}, e), { label: ''.concat(e.label, ' ').concat(S === e.value ? '(current)' : '') })),
        F = (0, o.cj)([p.default], () => p.default.getTrackedGames()),
        G = (0, o.e7)([_.default], () => _.default.getFocusedPID()),
        V = (0, o.e7)([_.default], () => _.default.isFocusedPidOutOfProcess()),
        H = (0, O.getPID)(),
        W = (0, o.e7)([p.default], () => p.default.isOverlayOOPEnabledForPid(H), [H]),
        [X, K] = (0, o.Wu)([v.Z], () => [v.Z.enabled, v.Z.keepOpen]),
        Y = (0, o.e7)([x.ZP], () => x.ZP.getRunningGames());
    r.useEffect(() => {
        Z((e) => {
            for (let t of Object.keys(F)) e[Number(t)] = F[Number(t)];
            return e;
        });
    }, [F]);
    let [q, J] = r.useState({}),
        $ = r.useRef(null);
    r.useEffect(
        () => (
            ($.current = setInterval(async () => {
                let e = x.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let a of e) t.push((0, b.hj)(a.pid, 0).then((e) => [a.pid, e, n]));
                let a = await Promise.all(t);
                J((e) =>
                    a.reduce(
                        (e, t) => {
                            var n;
                            let [a, r, l] = t;
                            if (null == r || null == a) return e;
                            let i = null != (n = e[a]) ? n : [];
                            return (
                                (0 === i.length || i[i.length - 1].screenType !== r) &&
                                    (e[a] = [
                                        ...i,
                                        {
                                            pid: a,
                                            screenType: r,
                                            timestamp: l
                                        }
                                    ]),
                                e
                            );
                        },
                        k({}, e)
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
        ea = () => {
            Q(h.G.ForceGPUBoost);
        },
        er = (e) => {
            var t, n;
            return null != (n = null == (t = R[e]) ? void 0 : t.gameName) ? n : 'Unknown';
        },
        el = (e) => {
            var t, n;
            return null != (n = null == (t = R[e]) ? void 0 : t.fullscreenType) ? n : 'Unknown';
        },
        ei = Y.filter((e) => null == F[e.pid]);
    return (0, a.jsx)(c.w0Z, {
        children: (0, a.jsxs)('div', {
            className: i()(w.panel, P.panel),
            children: [
                (0, a.jsxs)('div', {
                    className: P.panelGroup,
                    children: [
                        (0, a.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, a.jsx)(
                                    'div',
                                    I(k({}, e), {
                                        children: (0, a.jsx)(c.XZJ, {
                                            value: j,
                                            onChange: () => ee(),
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
                                    I(k({}, e), {
                                        children: (0, a.jsx)(c.XZJ, {
                                            value: g,
                                            onChange: () => et(),
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
                                    I(k({}, e), {
                                        children: (0, a.jsx)(c.XZJ, {
                                            value: y,
                                            onChange: () => en(),
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
                                    I(k({}, e), {
                                        children: (0, a.jsx)(c.XZJ, {
                                            value: T,
                                            onChange: () => ea(),
                                            size: 18,
                                            disabled: y,
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
                            children: (e) =>
                                (0, a.jsx)(
                                    'div',
                                    I(k({}, e), {
                                        children: (0, a.jsx)(c.XZJ, {
                                            value: null != n,
                                            onChange: () => l(),
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
                                    I(k({}, e), {
                                        children: (0, a.jsx)(c.XZJ, {
                                            value: null != s,
                                            onChange: () => d(),
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
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Override the overlay render mode',
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            I(k({}, e), {
                                className: P.panelGroup,
                                children: (0, a.jsx)(c.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === L,
                                    options: B,
                                    select: U,
                                    popoutLayerContext: N.O$
                                })
                            })
                        )
                }),
                ei.length > 0 &&
                    (0, a.jsx)(c.ua7, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, a.jsx)(
                                'div',
                                I(k({}, e), {
                                    children: (0, a.jsxs)('div', {
                                        className: P.panelGroup,
                                        children: [
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-md/bold',
                                                color: 'text-danger',
                                                children: 'Untracked Running Games'
                                            }),
                                            ei.map((e) =>
                                                (0, a.jsx)(
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
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'The current running games process information',
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            I(k({}, e), {
                                children: (0, a.jsxs)('div', {
                                    className: P.panelGroup,
                                    children: [
                                        0 === Object.keys(F).length &&
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No running games'
                                            }),
                                        Object.values(F).map((e) => (0, a.jsx)(A, { trackedGame: e }, e.pid))
                                    ]
                                })
                            })
                        )
                }),
                (0, a.jsxs)('div', {
                    className: P.panelGroup,
                    children: [
                        0 === Object.keys(F).length &&
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(F).map((e) => (0, a.jsx)(D, { pid: e.pid }, e.pid)),
                        (0, a.jsxs)('div', {
                            children: [
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['focusedPID: ', null != (e = null == G ? void 0 : G.toString()) ? e : 'null']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isFocusedPidOutOfProcess: ', V ? 'Yes' : 'No']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['processPid: ', null != (t = null == H ? void 0 : H.toString()) ? t : 'unknown']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isOOPEnabledForPid: ', W ? 'Yes' : 'No']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['SoundboardOverlay.enabled: ', X ? 'Yes' : 'No']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['SoundboardOverlay.keepOpen: ', K ? 'Yes' : 'No']
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: "The most recent screen types we've logged, indexed by pid",
                    children: (e) =>
                        (0, a.jsx)(
                            'div',
                            I(k({}, e), {
                                children: (0, a.jsxs)('div', {
                                    className: P.panelGroup,
                                    children: [
                                        0 === Object.keys(F).length &&
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No recent screen types'
                                            }),
                                        Object.values(F).map((e) => {
                                            var t;
                                            return (0, a.jsxs)(
                                                'div',
                                                {
                                                    children: [
                                                        (0, a.jsx)(c.Text, {
                                                            variant: 'text-md/semibold',
                                                            color: 'text-primary',
                                                            children: er(e.pid)
                                                        }),
                                                        (0, a.jsxs)(c.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'text-secondary',
                                                            children: ['Original Screen Type: ', el(e.pid)]
                                                        }),
                                                        null == (t = q[e.pid])
                                                            ? void 0
                                                            : t.reverse().map((t) => {
                                                                  let { screenType: n, timestamp: r } = t;
                                                                  return (0, a.jsx)(
                                                                      c.Text,
                                                                      {
                                                                          variant: 'text-xs/normal',
                                                                          color: 'text-normal',
                                                                          children: ''
                                                                              .concat(n, ':')
                                                                              .concat((0, b.sS)(n), ' @ ')
                                                                              .concat(r)
                                                                      },
                                                                      ''.concat(e.pid, '-').concat(n, '-').concat(r)
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
