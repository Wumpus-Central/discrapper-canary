n.d(t, { Z: () => s });
var i = n(200651),
    l = n(192379),
    a = n(390322),
    r = n(381871);
let s = (e) => {
    let { isHovered: t, closePopout: n, onMouseEnter: s, onMouseLeave: o, onFocus: c, channel: d } = e;
    return (
        l.useEffect(() => {
            t || n();
        }, [n, t]),
        (0, i.jsx)(a.Z, {
            children: (0, i.jsx)('div', {
                onMouseEnter: s,
                onMouseLeave: o,
                children: (0, i.jsx)(r.Z, {
                    channel: d,
                    closePopout: n,
                    onFocus: c
                })
            })
        })
    );
};
