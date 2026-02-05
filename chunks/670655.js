"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    u = n(697744),
    c = n(795816),
    d = n(211401),
    _ = n(989837),
    f = n(500049),
    p = n(598071),
    h = n(60809),
    m = n(985018),
    g = n(816695);
let E = i.forwardRef(function (e, t) {
    let { type: n, channelId: a } = e,
        E = (0, l.bG)([_.A], () => _.A.shouldShowPopup() && _.A.activeViewType() === n && _.A.activeChannelId() === a),
        { Component: A, events: I, play: T } = (0, u.c)(),
        y = i.useContext(p.Ay);
    i.useEffect(() => {
        let e = () => {
            I.onMouseEnter();
        };
        return (
            y.on("command-sentinel-typed", e),
            () => {
                y.off("command-sentinel-typed", e);
            }
        );
    }, [y, I]);
    let S = i.useCallback(() => {
            E ? d.k(f.Se.DISMISSED) : (d.R(f.s4.TEXT, n, void 0, a), c.LK()), T();
        }, [E, n, a, T]),
        v = (0, r.jsx)(A, { size: "refresh_sm", color: "currentColor" });
    return (0, r.jsx)("div", {
        className: s()(g.UD, h.KG),
        ref: t,
        children: (0, r.jsx)(o.DUT, {
            tabIndex: 0,
            className: s()(g.x6, { [g.rK]: E }),
            onClick: S,
            "aria-label": m.intl.string(m.t.erHFxI),
            "aria-expanded": E,
            "aria-haspopup": "dialog",
            focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
            ...I,
            children: v,
        }),
    });
});
function A(e) {
    let { type: t, channelId: n } = e;
    return (0, r.jsx)(E, { type: t, channelId: n });
}
let I = i.memo(A);
