n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(653041),
    n(724458);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(772848),
    s = n(442837),
    c = n(481060),
    d = n(765250),
    u = n(13245),
    h = n(615287),
    m = n(594190),
    x = n(306381),
    f = n(371651),
    p = n(829907),
    b = n(610394),
    g = n(355863),
    v = n(449224),
    j = n(808506),
    C = n(70956),
    _ = n(145597),
    T = n(246992),
    S = n(981631),
    N = n(501787),
    y = n(27731),
    I = n(941469);
let E = {
        [S.Odu.CLICK_ZONE_DEBUG]: (e) => ({
            type: S.Odu.CLICK_ZONE_DEBUG,
            id: (0, o.Z)(),
            layoutId: e,
            anchor: {
                top: 0.35,
                right: 0.35
            },
            size: {
                width: 100,
                height: 100
            },
            ...g.Z.getWidgetDefaultSettings(S.Odu.CLICK_ZONE_DEBUG),
            pinned: !0
        }),
        [S.Odu.PERFORMANCE_DEBUG]: (e) => ({
            type: S.Odu.PERFORMANCE_DEBUG,
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
            },
            ...g.Z.getWidgetDefaultSettings(S.Odu.PERFORMANCE_DEBUG),
            pinned: !0
        })
    },
    Z = (e, t) => e.find((e) => e.type === t);
function k(e) {
    let { trackedGame: t } = e,
        n = (0, s.e7)([m.ZP], () => m.ZP.getGameForPID(t.pid)),
        r = (0, s.e7)([v.Z], () => v.Z.getGameForPID(t.pid));
    return (0, a.jsxs)('div', {
        className: y.panelGroup,
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
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['fullscreenType: ', (0, p.sS)(t.fullscreenType)]
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
                children: ['enabled: ', t.enabled ? 'Yes' : 'No']
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: ['overlayMethod: ', (0, p.P_)(t.overlayMethod)]
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
function w(e) {
    let { pid: t } = e,
        n = (0, s.cj)([j.Z], () => j.Z.getOverlayPIDStatuses()),
        r = (0, s.cj)([f.Z], () => f.Z.getTrackedGames()),
        l = (0, s.e7)([j.Z], () => j.Z.isInputLocked(t), [t]),
        i = (0, s.e7)([j.Z], () => j.Z.DEV_isInputLockedV3(t), [t]),
        o = (0, s.e7)([j.Z], () => j.Z.DEV_isInputLocked(t), [t]),
        d = (0, s.e7)([j.Z], () => j.Z.isReady(t), [t]);
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
                        let n = null === (t = r[e]) || void 0 === t ? void 0 : t.timer;
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
                        let n = null === (t = r[e]) || void 0 === t ? void 0 : t.timer;
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
                        let n = null === (t = r[e]) || void 0 === t ? void 0 : t.timer;
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
                children: 'isInputLockedV2: '.concat(o)
            }),
            (0, a.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-primary',
                children: 'isReady: '.concat(d)
            })
        ]
    });
}
function O(e) {
    let t = Z(Object.values((0, s.Wu)([g.Z], () => g.Z.getWidgetsForLayout(N.OVERLAY_V3_LAYOUT_ID))), e);
    return [
        t,
        () => {
            if (null != t) (0, d.E9)(t.id);
            else {
                let t = E[e];
                if (null == t) return;
                let n = t(N.OVERLAY_V3_LAYOUT_ID);
                (0, d.A4)(n);
            }
        }
    ];
}
function R() {
    var e, t;
    let [n, l] = O(S.Odu.CLICK_ZONE_DEBUG),
        [o, d] = O(S.Odu.PERFORMANCE_DEBUG),
        g = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.ClickZones)),
        v = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.WidgetAreas)),
        N = (0, s.e7)([f.Z], () => f.Z.getForcedRenderMode()),
        [E, Z] = r.useState({}),
        [R, B] = r.useState(N),
        P = (e) => {
            B(e), u.Z.forceRenderMode(e);
        },
        L = [
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
            }
        ].map((e) => ({
            ...e,
            label: ''.concat(e.label, ' ').concat(N === e.value ? '(current)' : '')
        })),
        A = (0, s.cj)([f.Z], () => f.Z.getTrackedGames()),
        F = (0, s.e7)([j.Z], () => j.Z.getFocusedPID()),
        D = (0, s.e7)([j.Z], () => j.Z.isFocusedPidOutOfProcess()),
        M = (0, _.QF)(),
        H = (0, s.e7)([f.Z], () => f.Z.isOverlayOOPEnabledForPid(M), [M]),
        G = (0, s.e7)([m.ZP], () => m.ZP.getRunningGames());
    r.useEffect(() => {
        Z((e) => {
            for (let t of Object.keys(A)) e[Number(t)] = A[Number(t)];
            return e;
        });
    }, [A]);
    let [U, z] = r.useState({}),
        V = r.useRef();
    r.useEffect(
        () => (
            (V.current = setInterval(async () => {
                let e = m.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let a of e) t.push((0, p.hj)(a.pid, 0).then((e) => [a.pid, e, n]));
                let a = await Promise.all(t);
                z((e) =>
                    a.reduce(
                        (e, t) => {
                            var n;
                            let [a, r, l] = t;
                            if (null == r || null == a) return e;
                            let i = null !== (n = e[a]) && void 0 !== n ? n : [];
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
                        { ...e }
                    )
                );
            }, 10 * C.Z.Millis.SECOND)),
            () => clearInterval(V.current)
        ),
        []
    );
    let W = (e) => {
            u.Z.setRenderDebugMode(!b.ZP.hasRenderDebugMode(e), e);
        },
        K = () => {
            W(x.G.ClickZones);
        },
        Y = () => {
            W(x.G.WidgetAreas);
        },
        X = (e) => {
            var t, n;
            return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.gameName) && void 0 !== n ? n : 'Unknown';
        },
        $ = (e) => {
            var t, n;
            return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.fullscreenType) && void 0 !== n ? n : 'Unknown';
        },
        q = G.filter((e) => null == A[e.pid]);
    return (0, a.jsx)(c.ScrollerAuto, {
        children: (0, a.jsxs)('div', {
            className: i()(I.panel, y.panel),
            children: [
                (0, a.jsxs)('div', {
                    className: y.panelGroup,
                    children: [
                        (0, a.jsx)(c.Tooltip, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.Checkbox, {
                                        value: g,
                                        onChange: () => K(),
                                        size: 18,
                                        type: c.Checkbox.Types.INVERTED,
                                        shape: c.Checkbox.Shapes.BOX,
                                        children: (0, a.jsx)(c.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            children: 'Enable Click Zone Debug Mode'
                                        })
                                    })
                                })
                        }),
                        (0, a.jsx)(c.Tooltip, {
                            position: 'left',
                            text: 'Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets',
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.Checkbox, {
                                        value: v,
                                        onChange: () => Y(),
                                        size: 18,
                                        type: c.Checkbox.Types.INVERTED,
                                        shape: c.Checkbox.Shapes.BOX,
                                        children: (0, a.jsx)(c.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            children: 'Enable Render Debug Mode'
                                        })
                                    })
                                })
                        }),
                        (0, a.jsx)(c.Tooltip, {
                            position: 'left',
                            text: 'Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.',
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.Checkbox, {
                                        value: null != n,
                                        onChange: () => l(),
                                        size: 18,
                                        type: c.Checkbox.Types.INVERTED,
                                        shape: c.Checkbox.Shapes.BOX,
                                        children: (0, a.jsx)(c.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            children: 'Click Zone Debug Widget'
                                        })
                                    })
                                })
                        }),
                        (0, a.jsx)(c.Tooltip, {
                            position: 'left',
                            text: "Creates a widget that shows the overlay's window performance metrics.",
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.Checkbox, {
                                        value: null != o,
                                        onChange: () => d(),
                                        size: 18,
                                        type: c.Checkbox.Types.INVERTED,
                                        shape: c.Checkbox.Shapes.BOX,
                                        children: (0, a.jsx)(c.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            children: 'Overlay Performance Debug Widget'
                                        })
                                    })
                                })
                        })
                    ]
                }),
                (0, a.jsx)(c.Tooltip, {
                    position: 'left',
                    text: 'Override the overlay render mode',
                    children: (e) =>
                        (0, a.jsx)('div', {
                            ...e,
                            className: y.panelGroup,
                            children: (0, a.jsx)(c.Select, {
                                serialize: (e) => e,
                                isSelected: (e) => e === R,
                                options: L,
                                select: P,
                                popoutLayerContext: T.O$
                            })
                        })
                }),
                q.length > 0 &&
                    (0, a.jsx)(c.Tooltip, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, a.jsx)('div', {
                                ...e,
                                children: (0, a.jsxs)('div', {
                                    className: y.panelGroup,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-md/bold',
                                            color: 'text-danger',
                                            children: 'Untracked Running Games'
                                        }),
                                        q.map((e) =>
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
                    }),
                (0, a.jsx)(c.Tooltip, {
                    position: 'left',
                    text: 'The current running games process information',
                    children: (e) =>
                        (0, a.jsx)('div', {
                            ...e,
                            children: (0, a.jsxs)('div', {
                                className: y.panelGroup,
                                children: [
                                    0 === Object.keys(A).length &&
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No running games'
                                        }),
                                    Object.values(A).map((e) => (0, a.jsx)(k, { trackedGame: e }, e.pid))
                                ]
                            })
                        })
                }),
                (0, a.jsxs)('div', {
                    className: y.panelGroup,
                    children: [
                        0 === Object.keys(A).length &&
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(A).map((e) => (0, a.jsx)(w, { pid: e.pid }, e.pid)),
                        (0, a.jsxs)('div', {
                            children: [
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['focusedPID: ', null !== (e = null == F ? void 0 : F.toString()) && void 0 !== e ? e : 'null']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isFocusedPidOutOfProcess: ', D ? 'Yes' : 'No']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['processPid: ', null !== (t = null == M ? void 0 : M.toString()) && void 0 !== t ? t : 'unknown']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isOOPEnabledForPid: ', H ? 'Yes' : 'No']
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsx)(c.Tooltip, {
                    position: 'left',
                    text: "The most recent screen types we've logged, indexed by pid",
                    children: (e) =>
                        (0, a.jsx)('div', {
                            ...e,
                            children: (0, a.jsxs)('div', {
                                className: y.panelGroup,
                                children: [
                                    0 === Object.keys(A).length &&
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No recent screen types'
                                        }),
                                    Object.values(A).map((e) => {
                                        var t;
                                        return (0, a.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    (0, a.jsx)(c.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'text-primary',
                                                        children: X(e.pid)
                                                    }),
                                                    (0, a.jsxs)(c.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-secondary',
                                                        children: ['Original Screen Type: ', $(e.pid)]
                                                    }),
                                                    null === (t = U[e.pid]) || void 0 === t
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
                                                                          .concat((0, p.sS)(n), ' @ ')
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
                })
            ]
        })
    });
}
