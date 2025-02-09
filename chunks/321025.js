n.d(t, { Z: () => i });
var r = n(200651),
    o = n(192379),
    s = n(642128),
    a = n(613087);
function i(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: i, recalculateAnimationPositions: l, mountPoints: c } = o.useContext(a.B$);
    return (
        o.useEffect(() => {
            l();
        }, [l, n]),
        (0, r.jsx)('div', {
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
                let { id: n, collapsedLeft: o, expandedLeft: a, collapsedTop: i, expandedTop: l, width: d } = e,
                    u = c.get(n);
                return (0, r.jsx)(
                    s.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: d,
                            transform: (0, s.to)(
                                [
                                    t.to({
                                        range: [0, 1],
                                        output: [o, a]
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
