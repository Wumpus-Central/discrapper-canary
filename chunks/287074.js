t.d(n, { A: () => p });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(265872),
    r = t(366605),
    c = t(945830),
    o = t(323073),
    u = t(267102),
    d = t(573163),
    h = t(625494),
    g = t(58736),
    A = t(652215),
    m = t(105292);
let p = function (e) {
    let { channel: n } = e,
        t = (0, o.ni)(n),
        [p, j] = i.useState(!1),
        f = (0, u.aL)(),
        x = i.useRef(null),
        N = i.useCallback(() => {
            t || j((e) => !e);
        }, [t]),
        C = (0, a.bG)([d.Ay], () => d.Ay.hasUnreadPins(n.id), [n]),
        b = i.useMemo(() => (C ? { type: "unread", position: "bottom" } : void 0), [C]);
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
                return (0, l.jsx)(c.A, { ...e, onJump: E, channel: n });
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
                    badge: b,
                    selected: i,
                });
            },
        })
    );
};
