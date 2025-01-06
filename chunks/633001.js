n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(653041),
    n(724458);
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
    h = n(594190),
    x = n(371651),
    f = n(829907),
    p = n(610394),
    b = n(355863),
    g = n(449224),
    v = n(808506),
    j = n(70956),
    C = n(246992),
    _ = n(981631),
    T = n(501787),
    S = n(27731),
    N = n(941469);
let y = (e) => ({
        type: _.Odu.CLICK_ZONE_DEBUG,
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
        ...b.Z.getWidgetDefaultSettings(_.Odu.CLICK_ZONE_DEBUG),
        pinned: !0
    }),
    k = (e, t) => e.find((e) => e.type === t);
function I(e) {
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
                children: ['enabled: ', t.enabled ? 'Yes' : 'No']
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
function E() {
    let e = (0, s.Wu)([b.Z], () => b.Z.getWidgetsForLayout(T.OVERLAY_V3_LAYOUT_ID)),
        t = (0, s.e7)([p.Z], () => p.Z.clickZoneDebugMode),
        n = (0, s.e7)([p.Z], () => p.Z.renderDebugMode),
        l = (0, s.e7)([x.Z], () => x.Z.getForcedRenderMode()),
        [o, g] = a.useState({}),
        [E, w] = a.useState(l),
        Z = (e) => {
            w(e), u.Z.forceRenderMode(e);
        },
        R = [
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
            }
        ].map((e) => ({
            ...e,
            label: ''.concat(e.label, ' ').concat(l === e.value ? '(current)' : '')
        })),
        O = (0, s.cj)([x.Z], () => x.Z.getTrackedGames()),
        B = (0, s.e7)([h.ZP], () => h.ZP.getRunningGames());
    a.useEffect(() => {
        g((e) => {
            for (let t of Object.keys(O)) e[Number(t)] = O[Number(t)];
            return e;
        });
    }, [O]);
    let P = (0, s.cj)([v.Z], () => v.Z.getOverlayPIDStatuses()),
        [A, L] = a.useState({}),
        D = a.useRef();
    a.useEffect(
        () => (
            (D.current = setInterval(async () => {
                let e = h.ZP.getRunningGames(),
                    t = [],
                    n = Date.now();
                for (let r of e) t.push((0, f.hj)(r.pid, 0).then((e) => [r.pid, e, n]));
                let r = await Promise.all(t);
                L((e) =>
                    r.reduce(
                        (e, t) => {
                            var n;
                            let [r, a, l] = t;
                            if (null == a || null == r) return e;
                            let i = null !== (n = e[r]) && void 0 !== n ? n : [];
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
                        { ...e }
                    )
                );
            }, 10 * j.Z.Millis.SECOND)),
            () => clearInterval(D.current)
        ),
        []
    );
    let F = () => {
            u.Z.setClickZoneDebugMode(!p.Z.clickZoneDebugMode);
        },
        M = () => {
            u.Z.setRenderDebugMode(!p.Z.renderDebugMode);
        },
        H = k(Object.values(e), _.Odu.CLICK_ZONE_DEBUG),
        G = () => {
            if (null != H) (0, d.E9)(H.id);
            else {
                let e = y(T.OVERLAY_V3_LAYOUT_ID);
                (0, d.A4)(e);
            }
        },
        U = (e) => {
            var t, n;
            return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.gameName) && void 0 !== n ? n : 'Unknown';
        },
        z = (e) => {
            var t, n;
            return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.fullscreenType) && void 0 !== n ? n : 'Unknown';
        },
        V = (e) => {
            var t;
            let n = null === (t = O[e]) || void 0 === t ? void 0 : t.timer;
            if (null == n || null == n.screenTypeResolutionTimestamp) return '...';
            let r = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
            return ''.concat(r.toFixed(2), 'ms');
        },
        W = (e) => {
            var t;
            let n = null === (t = O[e]) || void 0 === t ? void 0 : t.timer;
            if (null == n || null == n.moduleTrackingTimestamp || null == n.screenTypeResolutionTimestamp) return '...';
            let r = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
            return ''.concat(r.toFixed(2), 'ms');
        },
        K = (e) => {
            var t;
            let n = null === (t = O[e]) || void 0 === t ? void 0 : t.timer;
            if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp) return '...';
            let r = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
            return ''.concat(r.toFixed(2), 'ms');
        },
        Y = B.filter((e) => null == O[e.pid]);
    return (0, r.jsx)(c.ScrollerAuto, {
        children: (0, r.jsxs)('div', {
            className: i()(N.panel, S.panel),
            children: [
                (0, r.jsxs)('div', {
                    className: S.panelGroup,
                    children: [
                        (0, r.jsx)(c.Tooltip, {
                            position: 'left',
                            text: 'Enables a red border around click zones to help with debugging.',
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    ...e,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        value: t,
                                        onChange: () => F(),
                                        size: 18,
                                        type: c.Checkbox.Types.INVERTED,
                                        shape: c.Checkbox.Shapes.BOX,
                                        children: (0, r.jsx)(c.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            children: 'Enable Click Zone Debug Mode'
                                        })
                                    })
                                })
                        }),
                        (0, r.jsx)(c.Tooltip, {
                            position: 'left',
                            text: 'Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets',
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    ...e,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        value: n,
                                        onChange: () => M(),
                                        size: 18,
                                        type: c.Checkbox.Types.INVERTED,
                                        shape: c.Checkbox.Shapes.BOX,
                                        children: (0, r.jsx)(c.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            children: 'Enable Render Debug Mode'
                                        })
                                    })
                                })
                        }),
                        (0, r.jsx)(c.Tooltip, {
                            position: 'left',
                            text: 'Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.',
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    ...e,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        value: null != H,
                                        onChange: () => G(),
                                        size: 18,
                                        type: c.Checkbox.Types.INVERTED,
                                        shape: c.Checkbox.Shapes.BOX,
                                        children: (0, r.jsx)(c.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            children: 'Click Zone Debug Widget'
                                        })
                                    })
                                })
                        })
                    ]
                }),
                (0, r.jsx)(c.Tooltip, {
                    position: 'left',
                    text: 'Override the overlay render mode',
                    children: (e) =>
                        (0, r.jsx)('div', {
                            ...e,
                            className: S.panelGroup,
                            children: (0, r.jsx)(c.Select, {
                                serialize: (e) => e,
                                isSelected: (e) => e === E,
                                options: R,
                                select: Z,
                                popoutLayerContext: C.O$
                            })
                        })
                }),
                Y.length > 0 &&
                    (0, r.jsx)(c.Tooltip, {
                        position: 'left',
                        text: 'Games that are running but not tracked by the overlay',
                        children: (e) =>
                            (0, r.jsx)('div', {
                                ...e,
                                children: (0, r.jsxs)('div', {
                                    className: S.panelGroup,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/bold',
                                            color: 'text-danger',
                                            children: 'Untracked Running Games'
                                        }),
                                        Y.map((e) =>
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
                    }),
                (0, r.jsx)(c.Tooltip, {
                    position: 'left',
                    text: 'The current running games process information',
                    children: (e) =>
                        (0, r.jsx)('div', {
                            ...e,
                            children: (0, r.jsxs)('div', {
                                className: S.panelGroup,
                                children: [
                                    0 === Object.keys(O).length &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No running games'
                                        }),
                                    Object.values(O).map((e) => (0, r.jsx)(I, { trackedGame: e }, e.pid))
                                ]
                            })
                        })
                }),
                (0, r.jsxs)('div', {
                    className: S.panelGroup,
                    children: [
                        0 === Object.keys(O).length &&
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: 'No tracked game times'
                            }),
                        Object.values(O).map((e) =>
                            (0, r.jsxs)(
                                'div',
                                {
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'text-primary',
                                            children: ''.concat(e.pid)
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            children: 'Screen Type Resolution: '.concat(V(e.pid))
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            children: 'Window Creation: '.concat(W(e.pid))
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            children: 'Rendering: '.concat(K(e.pid))
                                        }),
                                        (0, r.jsx)(c.Text, {
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
                (0, r.jsx)(c.Tooltip, {
                    position: 'left',
                    text: "The most recent screen types we've logged, indexed by pid",
                    children: (e) =>
                        (0, r.jsx)('div', {
                            ...e,
                            children: (0, r.jsxs)('div', {
                                className: S.panelGroup,
                                children: [
                                    0 === Object.keys(O).length &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            children: 'No recent screen types'
                                        }),
                                    Object.values(O).map((e) => {
                                        var t;
                                        return (0, r.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    (0, r.jsx)(c.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'text-primary',
                                                        children: U(e.pid)
                                                    }),
                                                    (0, r.jsxs)(c.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-secondary',
                                                        children: ['Original Screen Type: ', z(e.pid)]
                                                    }),
                                                    null === (t = A[e.pid]) || void 0 === t
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
                })
            ]
        })
    });
}
