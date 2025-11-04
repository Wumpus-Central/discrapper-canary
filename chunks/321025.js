n.d(t, { Z: () => i });
var r = n(951288),
    s = n(647438),
    a = n(358458),
    o = n(613087);
function i(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: i, recalculateAnimationPositions: l, mountPoints: c } = s.useContext(o.B$);
    return (
        s.useEffect(() => {
            l();
        }, [l, n]),
        (0, r.jsx)("div", {
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
            children: i.map((e) => {
                let { id: n, collapsedLeft: s, expandedLeft: o, collapsedTop: i, expandedTop: l, width: d } = e,
                    u = c.get(n);
                return (0, r.jsx)(
                    a.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: d,
                            transform: (0, a.to)(
                                [
                                    t.to({
                                        range: [0, 1],
                                        output: [s, o],
                                    }),
                                    t.to({
                                        range: [0, 1],
                                        output: [i, l],
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
