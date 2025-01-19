n.d(t, {
    Z: function () {
        return k;
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
    _ = n(70956),
    C = n(246992),
    T = n(981631),
    N = n(501787),
    S = n(27731),
    y = n(941469);
let I = {
        [T.Odu.CLICK_ZONE_DEBUG]: (e) => ({
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
            },
            ...g.Z.getWidgetDefaultSettings(T.Odu.CLICK_ZONE_DEBUG),
            pinned: !0
        }),
        [T.Odu.PERFORMANCE_DEBUG]: (e) => ({
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
            },
            ...g.Z.getWidgetDefaultSettings(T.Odu.PERFORMANCE_DEBUG),
            pinned: !0
        })
    },
    E = (e, t) => e.find((e) => e.type === t);
function Z(e) {
    let { trackedGame: t } = e,
        n = (0, s.e7)([m.ZP], () => m.ZP.getGameForPID(t.pid)),
        r = (0, s.e7)([v.Z], () => v.Z.getGameForPID(t.pid));
    return (0, a.jsxs)('div', {
        className: S.panelGroup,
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
    let t = E(Object.values((0, s.Wu)([g.Z], () => g.Z.getWidgetsForLayout(N.OVERLAY_V3_LAYOUT_ID))), e);
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
function k() {
    let [e, t] = w(T.Odu.CLICK_ZONE_DEBUG),
        [n, l] = w(T.Odu.PERFORMANCE_DEBUG),
        o = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.ClickZones)),
        d = (0, s.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(x.G.WidgetAreas)),
        g = (0, s.e7)([f.Z], () => f.Z.getForcedRenderMode()),
        [v, N] = r.useState({}),
        [I, E] = r.useState(g),
        k = (e) => {
            E(e), u.Z.forceRenderMode(e);
        },
        O = [
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
            label: ''.concat(e.label, ' ').concat(g === e.value ? '(current)' : '')
        })),
        R = (0, s.cj)([f.Z], () => f.Z.getTrackedGames()),
        B = (0, s.e7)([m.ZP], () => m.ZP.getRunningGames());
    r.useEffect(() => {
        N((e) => {
            for (let t of Object.keys(R)) e[Number(t)] = R[Number(t)];
            return e;
        });
    }, [R]);
    let P = (0, s.cj)([j.Z], () => j.Z.getOverlayPIDStatuses()),
        [L, A] = r.useState({}),
        D = r.useRef();
    r.useEffect(
        () => (
            (D.current = setInterval(async () => {
                let e = m.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let a of e) t.push((0, p.hj)(a.pid, 0).then((e) => [a.pid, e, n]));
                let a = await Promise.all(t);
                A((e) =>
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
            }, 10 * _.Z.Millis.SECOND)),
            () => clearInterval(D.current)
        ),
        []
    );
    let F = (e) => {
            u.Z.setRenderDebugMode(!b.ZP.hasRenderDebugMode(e), e);
        },
        M = () => {
            F(x.G.ClickZones);
        },
        H = () => {
            F(x.G.WidgetAreas);
        },
        G = (e) => {
            var t, n;
            return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.gameName) && void 0 !== n ? n : 'Unknown';
        },
        U = (e) => {
            var t, n;
            return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.fullscreenType) && void 0 !== n ? n : 'Unknown';
        },
        z = (e) => {
            var t;
            let n = null === (t = R[e]) || void 0 === t ? void 0 : t.timer;
            if (null == n || null == n.screenTypeResolutionTimestamp) return '...';
            let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
            return ''.concat(a.toFixed(2), 'ms');
        },
        V = (e) => {
            var t;
            let n = null === (t = R[e]) || void 0 === t ? void 0 : t.timer;
            if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return '...';
            let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
            return ''.concat(a.toFixed(2), 'ms');
        },
        W = (e) => {
            var t;
            let n = null === (t = R[e]) || void 0 === t ? void 0 : t.timer;
            if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp) return '...';
            let a = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
            return ''.concat(a.toFixed(2), 'ms');
        },
        K = B.filter((e) => null == R[e.pid]);
    return (0, a.jsx)(c.ScrollerAuto, {
        children: (0, a.jsxs)('div', {
            className: i()(y.panel, S.panel),
            children: [
                (0, a.jsxs)('div', {
                    className: S.panelGroup,
                    children: [
                        (0, a.jsx)(c.Tooltip, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.Checkbox, {
                                        value: o,
                                        onChange: () => M(),
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
                                        value: d,
                                        onChange: () => H(),
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
                            children: (n) =>
                                (0, a.jsx)('div', {
                                    ...n,
                                    children: (0, a.jsx)(c.Checkbox, {
                                        value: null != e,
                                        onChange: () => t(),
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
                                        value: null != n,
                                        onChange: () => l(),
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
                            className: S.panelGroup,
                            children: (0, a.jsx)(c.Select, {
                                serialize: (e) => e,
                                isSelected: (e) => e === I,
                                options: O,
                                select: k,
                                popoutLayerContext: C.O$
                            })
                        })
                }),
                K.length > 0 &&
                    (0, a.jsx)(c.Tooltip, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, a.jsx)('div', {
                                ...e,
                                children: (0, a.jsxs)('div', {
                                    className: S.panelGroup,
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-md/bold',
                                            color: 'text-danger',
                                            children: 'Untracked Running Games'
                                        }),
                                        K.map((e) =>
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
                                className: S.panelGroup,
                                children: [
                                    0 === Object.keys(R).length &&
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No running games'
                                        }),
                                    Object.values(R).map((e) => (0, a.jsx)(Z, { trackedGame: e }, e.pid))
                                ]
                            })
                        })
                }),
                (0, a.jsxs)('div', {
                    className: S.panelGroup,
                    children: [
                        0 === Object.keys(R).length &&
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(R).map((e) =>
                            (0, a.jsxs)(
                                'div',
                                {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'text-primary',
                                            children: ''.concat(e.pid)
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            children: 'Screen Type Resolution: '.concat(z(e.pid))
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            children: 'Window Creation: '.concat(V(e.pid))
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            children: 'Rendering: '.concat(W(e.pid))
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'text-primary',
                                            children: 'Bridge Status: '.concat(P.get(Number(e.pid)))
                                        })
                                    ]
                                },
                                e.pid
                            )
                        )
                    ]
                }),
                (0, a.jsx)(c.Tooltip, {
                    position: 'left',
                    text: "The most recent screen types we've logged, indexed by pid",
                    children: (e) =>
                        (0, a.jsx)('div', {
                            ...e,
                            children: (0, a.jsxs)('div', {
                                className: S.panelGroup,
                                children: [
                                    0 === Object.keys(R).length &&
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No recent screen types'
                                        }),
                                    Object.values(R).map((e) => {
                                        var t;
                                        return (0, a.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    (0, a.jsx)(c.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'text-primary',
                                                        children: G(e.pid)
                                                    }),
                                                    (0, a.jsxs)(c.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-secondary',
                                                        children: ['Original Screen Type: ', U(e.pid)]
                                                    }),
                                                    null === (t = L[e.pid]) || void 0 === t
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
