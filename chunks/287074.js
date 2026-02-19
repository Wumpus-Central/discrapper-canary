"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(945830),
    o = n(323073),
    c = n(267102),
    d = n(222823),
    u = n(203982),
    h = n(58736),
    A = n(652215),
    p = n(985018);
let g = function (e) {
    let { channel: t } = e,
        n = (0, o.vL)(t),
        [g, m] = s.useState(!1),
        _ = (0, l.bG)([d.Ay], () => d.Ay.hasUnreadPins(t.id), [t]),
        f = (0, c.aL)(),
        x = s.useRef(null),
        C = s.useCallback(() => {
            n || m((e) => !e);
        }, [n]);
    function E(e) {
        e?.shiftKey || f.dispatch(A.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                u._.subscribe(A.jej.TOGGLE_CHANNEL_PINS, C),
                () => {
                    u._.unsubscribe(A.jej.TOGGLE_CHANNEL_PINS, C);
                }
            ),
            [C],
        ),
        (0, i.jsx)(r.YNO, {
            targetElementRef: x,
            shouldShow: g,
            animation: r.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => m(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(a.A, { ...e, onJump: E, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: s } = t;
                return (0, i.jsx)(h.In, {
                    ...e,
                    ref: x,
                    onClick: C,
                    tooltip: s ? null : p.intl.string(p.t["mp1N/2"]),
                    icon: r.tsw,
                    iconSize: 20,
                    "aria-label": p.intl.string(p.t["mp1N/2"]),
                    disabled: n,
                    showBadge: _,
                    selected: s,
                });
            },
        })
    );
};
