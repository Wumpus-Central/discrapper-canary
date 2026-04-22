n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(265872),
    r = n(366605),
    o = n(945830),
    d = n(323073),
    c = n(267102),
    u = n(222823),
    h = n(203982),
    A = n(58736),
    _ = n(652215),
    m = n(985018);
let g = function (e) {
    let { channel: t } = e,
        n = (0, d.ni)(t),
        [g, p] = l.useState(!1),
        f = (0, s.bG)([u.Ay], () => u.Ay.hasUnreadPins(t.id), [t]),
        E = (0, c.aL)(),
        x = l.useRef(null),
        I = l.useCallback(() => {
            n || p((e) => !e);
        }, [n]);
    function C(e) {
        e?.shiftKey || E.dispatch(_.jej.POPOUT_CLOSE);
    }
    return (
        l.useEffect(
            () => (
                h._.subscribe(_.jej.TOGGLE_CHANNEL_PINS, I),
                () => {
                    h._.unsubscribe(_.jej.TOGGLE_CHANNEL_PINS, I);
                }
            ),
            [I],
        ),
        (0, i.jsx)(a.Y, {
            targetElementRef: x,
            shouldShow: g,
            animation: a.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => p(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(o.A, { ...e, onJump: C, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, i.jsx)(A.In, {
                    ...e,
                    ref: x,
                    onClick: I,
                    tooltip: l ? null : m.intl.string(m.t["mp1N/2"]),
                    icon: r.t,
                    iconSize: 20,
                    "aria-label": m.intl.string(m.t["mp1N/2"]),
                    disabled: n,
                    showBadge: f,
                    selected: l,
                });
            },
        })
    );
};
