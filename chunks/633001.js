n.d(t, { Z: () => B }), n(47120), n(653041), n(978209);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(772848),
    s = n(442837),
    c = n(481060),
    d = n(765250),
    u = n(13245),
    m = n(615287),
    h = n(594190),
    x = n(306381),
    f = n(371651),
    p = n(829907),
    b = n(610394),
    _ = n(355863),
    g = n(449224),
    v = n(808506),
    j = n(572004),
    y = n(70956),
    C = n(145597),
    N = n(246992),
    T = n(981631),
    O = n(501787),
    E = n(388032),
    S = n(333307),
    I = n(841699);
function k(e) {
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
function w(e, t) {
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
let Z = {
        [T.Odu.CLICK_ZONE_DEBUG]: (e) =>
            w(
                k(
                    {
                        type: T.Odu.CLICK_ZONE_DEBUG,
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
                    _.Z.getWidgetDefaultSettings(T.Odu.CLICK_ZONE_DEBUG)
                ),
                { pinned: !0 }
            ),
        [T.Odu.PERFORMANCE_DEBUG]: (e) =>
            w(
                k(
                    {
                        type: T.Odu.PERFORMANCE_DEBUG,
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
                    _.Z.getWidgetDefaultSettings(T.Odu.PERFORMANCE_DEBUG)
                ),
                { pinned: !0 }
            )
    },
    P = (e, t) => e.find((e) => e.type === t);
function R(e) {
    let { id: t } = e,
        [n, i] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e;
            return (
                n &&
                    (e = setTimeout(() => {
                        i(!1);
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
                (0, j.JG)(t), i(!0);
            },
            className: S.copyId,
            children: ['Application Id: ', t, ' ', n ? E.NW.string(E.t['t5VZ8/']) : null]
        })
    );
}
function L(e) {
    let { trackedGame: t } = e,
        n = (0, s.e7)([h.ZP], () => h.ZP.getGameForPID(t.pid)),
        a = (0, s.e7)([g.Z], () => g.Z.getGameForPID(t.pid));
    return (0, r.jsxs)('div', {
        className: S.panelGroup,
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
                    children: (0, r.jsx)(R, { id: t.applicationId })
                }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['fullscreenType: ', (0, p.sS)(t.fullscreenType)]
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
                children: ['overlayMethod: ', (0, p.P_)(t.overlayMethod)]
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
function A(e) {
    let { pid: t } = e,
        n = (0, s.cj)([v.default], () => v.default.getOverlayPIDStatuses()),
        a = (0, s.cj)([f.default], () => f.default.getTrackedGames()),
        i = (0, s.e7)([v.default], () => v.default.isInputLocked(t), [t]),
        l = (0, s.e7)([v.default], () => v.default.DEV_isInputLockedV3(t), [t]),
        o = (0, s.e7)([v.default], () => v.default.DEV_isInputLocked(t), [t]),
        d = (0, s.e7)([v.default], () => v.default.isReady(t), [t]);
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
function D(e) {
    let t = P(Object.values((0, s.Wu)([_.Z], () => _.Z.getWidgetsForLayout(O.OVERLAY_V3_LAYOUT_ID))), e);
    return [
        t,
        () => {
            if (null != t) (0, d.E9)(t.id);
            else {
                let t = Z[e];
                if (null == t) return;
                let n = t(O.OVERLAY_V3_LAYOUT_ID);
                (0, d.A4)(n);
            }
        }
    ];
}
function B() {
    var e, t;
    let [n, i] = D(T.Odu.CLICK_ZONE_DEBUG),
        [o, d] = D(T.Odu.PERFORMANCE_DEBUG),
        _ = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.ClickZones)),
        g = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.WidgetAreas)),
        j = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.DisabledGPUBoost)),
        O = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.ForceGPUBoost)),
        E = (0, s.e7)([f.default], () => f.default.getForcedRenderMode()),
        [Z, P] = a.useState({}),
        [R, B] = a.useState(E),
        M = (e) => {
            B(e), u.Z.forceRenderMode(e);
        },
        F = [
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
        ].map((e) => w(k({}, e), { label: ''.concat(e.label, ' ').concat(E === e.value ? '(current)' : '') })),
        z = (0, s.cj)([f.default], () => f.default.getTrackedGames()),
        G = (0, s.e7)([v.default], () => v.default.getFocusedPID()),
        W = (0, s.e7)([v.default], () => v.default.isFocusedPidOutOfProcess()),
        U = (0, C.getPID)(),
        H = (0, s.e7)([f.default], () => f.default.isOverlayOOPEnabledForPid(U), [U]),
        V = (0, s.e7)([h.ZP], () => h.ZP.getRunningGames());
    a.useEffect(() => {
        P((e) => {
            for (let t of Object.keys(z)) e[Number(t)] = z[Number(t)];
            return e;
        });
    }, [z]);
    let [X, Y] = a.useState({}),
        K = a.useRef();
    a.useEffect(
        () => (
            (K.current = setInterval(async () => {
                let e = h.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let r of e) t.push((0, p.hj)(r.pid, 0).then((e) => [r.pid, e, n]));
                let r = await Promise.all(t);
                Y((e) =>
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
                        k({}, e)
                    )
                );
            }, 10 * y.Z.Millis.SECOND)),
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
            return null !== (n = null === (t = Z[e]) || void 0 === t ? void 0 : t.gameName) && void 0 !== n ? n : 'Unknown';
        },
        en = (e) => {
            var t, n;
            return null !== (n = null === (t = Z[e]) || void 0 === t ? void 0 : t.fullscreenType) && void 0 !== n ? n : 'Unknown';
        },
        er = V.filter((e) => null == z[e.pid]);
    return (0, r.jsx)(c.w0Z, {
        children: (0, r.jsxs)('div', {
            className: l()(I.panel, S.panel),
            children: [
                (0, r.jsxs)('div', {
                    className: S.panelGroup,
                    children: [
                        (0, r.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    w(k({}, e), {
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
                                    w(k({}, e), {
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
                                    w(k({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: j,
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
                                    w(k({}, e), {
                                        children: (0, r.jsx)(c.XZJ, {
                                            value: O,
                                            onChange: () => ee(),
                                            size: 18,
                                            disabled: j,
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
                                    w(k({}, e), {
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
                                    w(k({}, e), {
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
                            w(k({}, e), {
                                className: S.panelGroup,
                                children: (0, r.jsx)(c.PhF, {
                                    serialize: (e) => e,
                                    isSelected: (e) => e === R,
                                    options: F,
                                    select: M,
                                    popoutLayerContext: N.O$
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
                                w(k({}, e), {
                                    children: (0, r.jsxs)('div', {
                                        className: S.panelGroup,
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
                            w(k({}, e), {
                                children: (0, r.jsxs)('div', {
                                    className: S.panelGroup,
                                    children: [
                                        0 === Object.keys(z).length &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No running games'
                                            }),
                                        Object.values(z).map((e) => (0, r.jsx)(L, { trackedGame: e }, e.pid))
                                    ]
                                })
                            })
                        )
                }),
                (0, r.jsxs)('div', {
                    className: S.panelGroup,
                    children: [
                        0 === Object.keys(z).length &&
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(z).map((e) => (0, r.jsx)(A, { pid: e.pid }, e.pid)),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['focusedPID: ', null !== (e = null == G ? void 0 : G.toString()) && void 0 !== e ? e : 'null']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isFocusedPidOutOfProcess: ', W ? 'Yes' : 'No']
                                }),
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['processPid: ', null !== (t = null == U ? void 0 : U.toString()) && void 0 !== t ? t : 'unknown']
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
                            w(k({}, e), {
                                children: (0, r.jsxs)('div', {
                                    className: S.panelGroup,
                                    children: [
                                        0 === Object.keys(z).length &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                children: 'No recent screen types'
                                            }),
                                        Object.values(z).map((e) => {
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
                                                        null === (t = X[e.pid]) || void 0 === t
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
                                                                              .concat((0, p.sS)(n), ' @ ')
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
