n.d(t, { Z: () => w }), n(47120), n(653041), n(724458);
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
    _ = n(371651),
    p = n(829907),
    f = n(610394),
    b = n(355863),
    g = n(449224),
    v = n(808506),
    j = n(70956),
    C = n(145597),
    N = n(246992),
    T = n(981631),
    E = n(501787),
    y = n(27731),
    S = n(941469);
let k = {
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
            ...b.Z.getWidgetDefaultSettings(T.Odu.CLICK_ZONE_DEBUG),
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
            ...b.Z.getWidgetDefaultSettings(T.Odu.PERFORMANCE_DEBUG),
            pinned: !0
        })
    },
    R = (e, t) => e.find((e) => e.type === t);
function I(e) {
    let { trackedGame: t } = e,
        n = (0, s.e7)([m.ZP], () => m.ZP.getGameForPID(t.pid)),
        r = (0, s.e7)([g.Z], () => g.Z.getGameForPID(t.pid));
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
function O(e) {
    let { pid: t } = e,
        n = (0, s.cj)([v.Z], () => v.Z.getOverlayPIDStatuses()),
        r = (0, s.cj)([_.Z], () => _.Z.getTrackedGames()),
        l = (0, s.e7)([v.Z], () => v.Z.isInputLocked(t), [t]),
        i = (0, s.e7)([v.Z], () => v.Z.DEV_isInputLockedV3(t), [t]),
        o = (0, s.e7)([v.Z], () => v.Z.DEV_isInputLocked(t), [t]),
        d = (0, s.e7)([v.Z], () => v.Z.isReady(t), [t]);
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
function Z(e) {
    let t = R(Object.values((0, s.Wu)([b.Z], () => b.Z.getWidgetsForLayout(E.OVERLAY_V3_LAYOUT_ID))), e);
    return [
        t,
        () => {
            if (null != t) (0, d.E9)(t.id);
            else {
                let t = k[e];
                if (null == t) return;
                let n = t(E.OVERLAY_V3_LAYOUT_ID);
                (0, d.A4)(n);
            }
        }
    ];
}
function w() {
    var e, t;
    let [n, l] = Z(T.Odu.CLICK_ZONE_DEBUG),
        [o, d] = Z(T.Odu.PERFORMANCE_DEBUG),
        b = (0, s.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(x.G.ClickZones)),
        g = (0, s.e7)([f.ZP], () => f.ZP.hasRenderDebugMode(x.G.WidgetAreas)),
        E = (0, s.e7)([_.Z], () => _.Z.getForcedRenderMode()),
        [k, R] = r.useState({}),
        [w, A] = r.useState(E),
        L = (e) => {
            A(e), u.Z.forceRenderMode(e);
        },
        P = [
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
        ].map((e) => ({
            ...e,
            label: ''.concat(e.label, ' ').concat(E === e.value ? '(current)' : '')
        })),
        D = (0, s.cj)([_.Z], () => _.Z.getTrackedGames()),
        B = (0, s.e7)([v.Z], () => v.Z.getFocusedPID()),
        F = (0, s.e7)([v.Z], () => v.Z.isFocusedPidOutOfProcess()),
        M = (0, C.QF)(),
        z = (0, s.e7)([_.Z], () => _.Z.isOverlayOOPEnabledForPid(M), [M]),
        U = (0, s.e7)([m.ZP], () => m.ZP.getRunningGames());
    r.useEffect(() => {
        R((e) => {
            for (let t of Object.keys(D)) e[Number(t)] = D[Number(t)];
            return e;
        });
    }, [D]);
    let [G, H] = r.useState({}),
        V = r.useRef();
    r.useEffect(
        () => (
            (V.current = setInterval(async () => {
                let e = m.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let a of e) t.push((0, p.hj)(a.pid, 0).then((e) => [a.pid, e, n]));
                let a = await Promise.all(t);
                H((e) =>
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
            }, 10 * j.Z.Millis.SECOND)),
            () => clearInterval(V.current)
        ),
        []
    );
    let W = (e) => {
            u.Z.setRenderDebugMode(!f.ZP.hasRenderDebugMode(e), e);
        },
        Y = () => {
            W(x.G.ClickZones);
        },
        X = () => {
            W(x.G.WidgetAreas);
        },
        K = (e) => {
            var t, n;
            return null !== (n = null === (t = k[e]) || void 0 === t ? void 0 : t.gameName) && void 0 !== n ? n : 'Unknown';
        },
        J = (e) => {
            var t, n;
            return null !== (n = null === (t = k[e]) || void 0 === t ? void 0 : t.fullscreenType) && void 0 !== n ? n : 'Unknown';
        },
        q = U.filter((e) => null == D[e.pid]);
    return (0, a.jsx)(c.w0Z, {
        children: (0, a.jsxs)('div', {
            className: i()(S.panel, y.panel),
            children: [
                (0, a.jsxs)('div', {
                    className: y.panelGroup,
                    children: [
                        (0, a.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.XZJ, {
                                        value: b,
                                        onChange: () => Y(),
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
                        }),
                        (0, a.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets',
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.XZJ, {
                                        value: g,
                                        onChange: () => X(),
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
                        }),
                        (0, a.jsx)(c.ua7, {
                            position: 'left',
                            text: 'Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.',
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
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
                        }),
                        (0, a.jsx)(c.ua7, {
                            position: 'left',
                            text: "Creates a widget that shows the overlay's window performance metrics.",
                            children: (e) =>
                                (0, a.jsx)('div', {
                                    ...e,
                                    children: (0, a.jsx)(c.XZJ, {
                                        value: null != o,
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
                        })
                    ]
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'Override the overlay render mode',
                    children: (e) =>
                        (0, a.jsx)('div', {
                            ...e,
                            className: y.panelGroup,
                            children: (0, a.jsx)(c.PhF, {
                                serialize: (e) => e,
                                isSelected: (e) => e === w,
                                options: P,
                                select: L,
                                popoutLayerContext: N.O$
                            })
                        })
                }),
                q.length > 0 &&
                    (0, a.jsx)(c.ua7, {
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
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: 'The current running games process information',
                    children: (e) =>
                        (0, a.jsx)('div', {
                            ...e,
                            children: (0, a.jsxs)('div', {
                                className: y.panelGroup,
                                children: [
                                    0 === Object.keys(D).length &&
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No running games'
                                        }),
                                    Object.values(D).map((e) => (0, a.jsx)(I, { trackedGame: e }, e.pid))
                                ]
                            })
                        })
                }),
                (0, a.jsxs)('div', {
                    className: y.panelGroup,
                    children: [
                        0 === Object.keys(D).length &&
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(D).map((e) => (0, a.jsx)(O, { pid: e.pid }, e.pid)),
                        (0, a.jsxs)('div', {
                            children: [
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['focusedPID: ', null !== (e = null == B ? void 0 : B.toString()) && void 0 !== e ? e : 'null']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isFocusedPidOutOfProcess: ', F ? 'Yes' : 'No']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-primary',
                                    children: ['processPid: ', null !== (t = null == M ? void 0 : M.toString()) && void 0 !== t ? t : 'unknown']
                                }),
                                (0, a.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: ['isOOPEnabledForPid: ', z ? 'Yes' : 'No']
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsx)(c.ua7, {
                    position: 'left',
                    text: "The most recent screen types we've logged, indexed by pid",
                    children: (e) =>
                        (0, a.jsx)('div', {
                            ...e,
                            children: (0, a.jsxs)('div', {
                                className: y.panelGroup,
                                children: [
                                    0 === Object.keys(D).length &&
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No recent screen types'
                                        }),
                                    Object.values(D).map((e) => {
                                        var t;
                                        return (0, a.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    (0, a.jsx)(c.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'text-primary',
                                                        children: K(e.pid)
                                                    }),
                                                    (0, a.jsxs)(c.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-secondary',
                                                        children: ['Original Screen Type: ', J(e.pid)]
                                                    }),
                                                    null === (t = G[e.pid]) || void 0 === t
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
