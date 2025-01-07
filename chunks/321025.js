n.d(t, {
    Z: function () {
        return i;
    }
});
var o = n(200651),
    r = n(192379),
    s = n(666912),
    a = n(613087);
function i(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: i, recalculateAnimationPositions: l, mountPoints: c } = r.useContext(a.B$);
    return (
        r.useEffect(() => {
            l();
        }, [l, n]),
        (0, o.jsx)('div', {
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
                let { id: n, collapsedLeft: r, expandedLeft: a, collapsedTop: i, expandedTop: l, width: d } = e,
                    u = c.get(n);
                return (0, o.jsx)(
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
                                        output: [r, a]
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
