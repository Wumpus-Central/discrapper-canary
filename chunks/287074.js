n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(945830),
    o = n(323073),
    d = n(267102),
    c = n(222823),
    u = n(203982),
    h = n(58736),
    A = n(652215),
    g = n(985018);
let m = function (e) {
    let { channel: t } = e,
        n = (0, o.vL)(t),
        [m, p] = l.useState(!1),
        _ = (0, s.bG)([c.Ay], () => c.Ay.hasUnreadPins(t.id), [t]),
        x = (0, d.aL)(),
        f = l.useRef(null),
        E = l.useCallback(() => {
            n || p((e) => !e);
        }, [n]);
    function C(e) {
        e?.shiftKey || x.dispatch(A.jej.POPOUT_CLOSE);
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
            targetElementRef: f,
            shouldShow: m,
            animation: a.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => p(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(r.A, { ...e, onJump: C, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, i.jsx)(h.In, {
                    ...e,
                    ref: f,
                    onClick: E,
                    tooltip: l ? null : g.intl.string(g.t["mp1N/2"]),
                    icon: a.tsw,
                    iconSize: 20,
                    "aria-label": g.intl.string(g.t["mp1N/2"]),
                    disabled: n,
                    showBadge: _,
                    selected: l,
                });
            },
        })
    );
};
