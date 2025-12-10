n.d(t, { Z: () => s });
var a = n(54381),
    r = n(473749),
    i = n(467721),
    l = n(444134);
function s(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: s, recalculateAnimationPositions: o, mountPoints: c } = r.useContext(l.xo);
    return (
        r.useEffect(() => {
            o();
        }, [o, n]),
        (0, a.jsx)("div", {
            style: {
                overflow: "hidden",
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 5,
            },
            children: s.map((e) => {
                let { id: n, collapsedLeft: r, expandedLeft: l, collapsedTop: s, expandedTop: o, width: d } = e,
                    u = c.get(n);
                return (0, a.jsx)(
                    i.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: d,
                            transform: (0, i.to)(
                                [
                                    t.to({
                                        range: [0, 1],
                                        output: [r, l],
                                    }),
                                    t.to({
                                        range: [0, 1],
                                        output: [s, o],
                                    }),
                                ],
                                (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                            ),
                        },
                    },
                    n,
                );
            }),
        })
    );
}
