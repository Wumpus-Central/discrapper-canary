"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(311907),
    u = n(697744),
    c = n(795816),
    d = n(211401),
    _ = n(989837),
    f = n(500049),
    p = n(598071),
    h = n(60809),
    E = n(985018),
    m = n(224840);
let g = i.forwardRef(function (e, t) {
        let { type: n, channelId: s } = e,
            g = (0, l.bG)(
                [_.A],
                () => _.A.shouldShowPopup() && _.A.activeViewType() === n && _.A.activeChannelId() === s,
            ),
            { Component: A, events: I, play: T } = (0, u.c)(),
            S = i.useContext(p.Ay);
        i.useEffect(() => {
            let e = () => {
                I.onMouseEnter();
            };
            return (
                S.on("command-sentinel-typed", e),
                () => {
                    S.off("command-sentinel-typed", e);
                }
            );
        }, [S, I]);
        let y = i.useCallback(() => {
                g ? d.k(f.Se.DISMISSED) : (d.R(f.s4.TEXT, n, void 0, s), c.LK()), T();
            }, [g, n, s, T]),
            N = (0, r.jsx)(A, { size: "refresh_sm", color: "currentColor" });
        return (0, r.jsx)("div", {
            className: a()(m.UD, h.KG),
            ref: t,
            children: (0, r.jsx)(o.D, {
                tabIndex: 0,
                className: a()(m.x6, { [m.rK]: g }),
                onClick: y,
                "aria-label": E.intl.string(E.t.erHFxI),
                "aria-expanded": g,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...I,
                children: N,
            }),
        });
    }),
    A = i.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, r.jsx)(g, { type: t, channelId: n });
    });
