n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(945830),
    o = n(323073),
    c = n(267102),
    d = n(222823),
    u = n(203982),
    h = n(58736),
    A = n(652215),
    _ = n(985018);
let m = function (e) {
    let { channel: t } = e,
        n = (0, o.vL)(t),
        [m, g] = l.useState(!1),
        p = (0, s.bG)([d.Ay], () => d.Ay.hasUnreadPins(t.id), [t]),
        f = (0, c.aL)(),
        x = l.useRef(null),
        E = l.useCallback(() => {
            n || g((e) => !e);
        }, [n]);
    function I(e) {
        e?.shiftKey || f.dispatch(A.jej.POPOUT_CLOSE);
    }
    return (
        l.useEffect(
            () => (
                u._.subscribe(A.jej.TOGGLE_CHANNEL_PINS, E),
                () => {
                    u._.unsubscribe(A.jej.TOGGLE_CHANNEL_PINS, E);
                }
            ),
            [E],
        ),
        (0, i.jsx)(a.YNO, {
            targetElementRef: x,
            shouldShow: m,
            animation: a.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => g(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(r.A, { ...e, onJump: I, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, i.jsx)(h.In, {
                    ...e,
                    ref: x,
                    onClick: E,
                    tooltip: l ? null : _.intl.string(_.t["mp1N/2"]),
                    icon: a.tsw,
                    iconSize: 20,
                    "aria-label": _.intl.string(_.t["mp1N/2"]),
                    disabled: n,
                    showBadge: p,
                    selected: l,
                });
            },
        })
    );
};
