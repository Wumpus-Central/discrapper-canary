"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(311907),
    c = n(697744),
    u = n(795816),
    d = n(211401),
    h = n(989837),
    m = n(500049),
    p = n(598071),
    f = n(60809),
    g = n(985018),
    _ = n(224840);
let x = l.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            x = (0, o.bG)(
                [h.A],
                () => h.A.shouldShowPopup() && h.A.activeViewType() === n && h.A.activeChannelId() === s,
            ),
            { Component: A, events: C, play: E } = (0, c.c)(),
            I = l.useContext(p.Ay);
        l.useEffect(() => {
            let e = () => {
                C.onMouseEnter();
            };
            return (
                I.on("command-sentinel-typed", e),
                () => {
                    I.off("command-sentinel-typed", e);
                }
            );
        }, [I, C]);
        let v = l.useCallback(() => {
                x ? d.k(m.Se.DISMISSED) : (d.R(m.s4.TEXT, n, void 0, s), u.LK()), E();
            }, [x, n, s, E]),
            y = (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor" });
        return (0, i.jsx)("div", {
            className: r()(_.UD, f.KG),
            ref: t,
            children: (0, i.jsx)(a.D, {
                tabIndex: 0,
                className: r()(_.x6, { [_.rK]: x }),
                onClick: v,
                "aria-label": g.intl.string(g.t.erHFxI),
                "aria-expanded": x,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...C,
                children: y,
            }),
        });
    }),
    A = l.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, i.jsx)(x, { type: t, channelId: n });
    });
