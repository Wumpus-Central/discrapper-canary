n.d(t, { Z: () => i });
var r = n(255367),
    s = n(73800),
    o = n(626415),
    a = n(613087);
function i(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: i, recalculateAnimationPositions: l, mountPoints: c } = s.useContext(a.B$);
    return (
        s.useEffect(() => {
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
                let { id: n, collapsedLeft: s, expandedLeft: a, collapsedTop: i, expandedTop: l, width: u } = e,
                    d = c.get(n);
                return (0, r.jsx)(
                    o.animated.div,
                    {
                        ref: d,
                        style: {
                            zIndex: 2,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: u,
                            transform: (0, o.to)(
                                [
                                    t.to({
                                        range: [0, 1],
                                        output: [s, a]
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
