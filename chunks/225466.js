n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(854062),
    o = n(442837),
    s = n(481060),
    l = n(515970),
    c = n(324060),
    u = n(5888),
    d = n(267374),
    f = n(691446),
    p = n(417788);
let _ = 1000;
function m() {
    let e = (0, i.useContext)(c.Q),
        t = (0, s.dQu)(e.primaryColor).hex(),
        n = (0, i.useRef)(null),
        { volume: m, isMuted: h } = (0, o.cj)([u.Z], () => ({
            volume: u.Z.volume,
            isMuted: u.Z.isMuted,
        })),
        [g, E] = (0, i.useState)(!1),
        [b, y] = (0, i.useState)(!1),
        O = (0, i.useRef)(-1),
        v = h ? 0 : 100 * m,
        S = g || b,
        I = (e) => {
            (0, l.jA)(e / 100),
                y(!0),
                clearTimeout(O.current),
                (O.current = setTimeout(() => {
                    y(!1);
                }, _));
        };
    (0, i.useEffect)(() => {
        null != n.current && (n.current.volume = m);
    }, [m]);
    let T = h ? s.OyP : v > 90 ? s.gj8 : s.X2j;
    return (0, r.jsxs)("div", {
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        className: d.container,
        children: [
            (0, r.jsx)(s.P3F, {
                onClick: l.$t,
                className: f.closeButton,
                style: {
                    color: t,
                    borderLeft: S ? 0 : void 0,
                },
                children: (0, r.jsx)(T, {
                    colorClass: p.iconColor,
                    color: t,
                }),
            }),
            S
                ? (0, r.jsx)("div", {
                      className: d.sliderContainer,
                      style: { borderColor: t },
                      children: (0, r.jsx)(s.iRW, {
                          initialValue: v,
                          minValue: 0,
                          maxValue: 100,
                          asValueChanges: I,
                          grabberClassName: d.grabber,
                          fillStyles: {
                              backgroundColor: t,
                              transition: "background-color 0.5s ease",
                          },
                      }),
                  })
                : null,
            (0, r.jsx)("audio", {
                ref: n,
                autoPlay: !0,
                loop: !0,
                muted: h,
                children: (0, r.jsx)("source", { src: a.Z }),
            }),
        ],
    });
}
