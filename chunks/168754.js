n.d(t, { A: () => r });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(709562);
function r(e) {
    let { isActivityActive: t, ...n } = e,
        r = l.useRef(null);
    return (0, i.jsx)(a.l, {
        ref: r,
        isTrayButton: !0,
        isActive: t,
        color: t ? "green" : void 0,
        iconComponent: (0, i.jsx)(s.lmr, {
            autoPause: !0,
            eventTargetRef: r,
            dataBinding: { fill: "currentColor" },
            className: s.d5l.refresh_sm,
        }),
        ...n,
    });
}
