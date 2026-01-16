n.d(t, { Z: () => o });
var a = n(54381),
    r = n(473749),
    i = n(81239),
    l = n(444134),
    s = n(526188);
function o() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: o,
        } = r.useContext(l.xo),
        { isExpanded: c } = r.useContext(s.A);
    return (
        r.useEffect(() => {
            n();
        }, [n, c]),
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
            children: t.map((t) => {
                let { id: n, collapsedLeft: r, expandedLeft: l, collapsedTop: s, expandedTop: c, width: d } = t,
                    u = o.get(n);
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
                                    e.to({
                                        range: [0, 1],
                                        output: [r, l],
                                    }),
                                    e.to({
                                        range: [0, 1],
                                        output: [s, c],
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
