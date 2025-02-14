n.d(t, { Z: () => i });
var s = n(200651),
    r = n(192379),
    a = n(642128),
    o = n(613087);
function i(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: i, recalculateAnimationPositions: l, mountPoints: c } = r.useContext(o.B$);
    return (
        r.useEffect(() => {
            l();
        }, [l, n]),
        (0, s.jsx)('div', {
            style: {
                overflow: 'hidden',
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 5
            },
            children: i.map((e) => {
                let { id: n, collapsedLeft: r, expandedLeft: o, collapsedTop: i, expandedTop: l, width: d } = e,
                    u = c.get(n);
                return (0, s.jsx)(
                    a.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: d,
                            transform: (0, a.to)(
                                [
                                    t.to({
                                        range: [0, 1],
                                        output: [r, o]
                                    }),
                                    t.to({
                                        range: [0, 1],
                                        output: [i, l]
                                    })
                                ],
                                (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                            )
                        }
                    },
                    n
                );
            })
        })
    );
}
