var l = t(477900),
    i = t(582128),
    a = t(855986),
    s = t(265872),
    r = t(366605),
    o = t(945830),
    c = t(323073),
    u = t(267102),
    d = t(218461),
    h = t(188567),
    g = t(58736),
    A = t(652215),
    m = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channel: n } = e,
                t = (0, c.ni)(n),
                [p, j] = i.useState(!1),
                f = (0, u.aL)(),
                x = i.useRef(null),
                N = i.useCallback(() => {
                    t || j((e) => !e);
                }, [t]),
                b = (0, a.bG)([d.Ay], () => d.Ay.hasUnreadPins(n.id), [n]),
                C = i.useMemo(() => (b ? { type: "unread", position: "bottom" } : void 0), [b]);
            function E(e) {
                e?.shiftKey || f.dispatch(A.jej.POPOUT_CLOSE);
            }
            return (
                i.useEffect(
                    () => (
                        h._.subscribe(A.jej.TOGGLE_CHANNEL_PINS, N),
                        () => {
                            h._.unsubscribe(A.jej.TOGGLE_CHANNEL_PINS, N);
                        }
                    ),
                    [N],
                ),
                (0, l.jsx)(s.Y, {
                    targetElementRef: x,
                    shouldShow: p,
                    animation: s.Y.Animation.NONE,
                    position: "bottom",
                    align: "right",
                    autoInvert: !1,
                    ignoreModalClicks: !0,
                    onRequestClose: () => j(!1),
                    renderPopout: function (e) {
                        return (0, l.jsx)(o.A, { ...e, onJump: E, channel: n });
                    },
                    clickTrap: !0,
                    children: (e, n) => {
                        let { isShown: i } = n;
                        return (0, l.jsx)(g.In, {
                            ...e,
                            ref: x,
                            onClick: N,
                            tooltip: i ? null : m.intl.string(m.t["mp1N/2"]),
                            icon: r.t,
                            iconSize: 20,
                            "aria-label": m.intl.string(m.t["mp1N/2"]),
                            disabled: t,
                            badge: C,
                            selected: i,
                        });
                    },
                })
            );
        },
    },
);
