"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(311907),
    u = n(795816),
    c = n(211401),
    d = n(989837),
    _ = n(500049),
    f = n(598071),
    p = n(60809),
    h = n(985018),
    m = n(816695);
let E = i.forwardRef(function (e, t) {
    let { type: n, channelId: s } = e,
        E = (0, l.bG)([d.A], () => d.A.shouldShowPopup() && d.A.activeViewType() === n && d.A.activeChannelId() === s),
        [g, A] = i.useState(0),
        I = i.useContext(f.Ay);
    i.useEffect(() => {
        let e = () => {
            A((e) => e + 1);
        };
        return (
            I.on("command-sentinel-typed", e),
            () => {
                I.off("command-sentinel-typed", e);
            }
        );
    }, [I]);
    let T = i.useCallback(() => {
        E ? c.k(_.Se.DISMISSED) : (c.R(_.s4.TEXT, n, void 0, s), u.LK());
    }, [E, n, s]);
    return (0, r.jsx)("div", {
        className: a()(m.UD, p.KG),
        ref: t,
        children: (0, r.jsx)(o.DUT, {
            tabIndex: 0,
            className: a()(m.x6, { [m.rK]: E }),
            onClick: T,
            "aria-label": h.intl.string(h.t.erHFxI),
            "aria-expanded": E,
            "aria-haspopup": "dialog",
            focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
            children: (0, r.jsx)(o.lmr, {
                eventTargetRef: t,
                dataBinding: { fill: "currentColor", triggerHover: g },
                className: o.d5l.refresh_sm,
            }),
        }),
    });
});
function g(e) {
    let { type: t, channelId: n } = e;
    return (0, r.jsx)(E, { type: t, channelId: n });
}
let A = i.memo(g);
