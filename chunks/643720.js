n.d(t, { Z: () => a });
var r = n(200651),
    i = n(192379),
    l = n(390322),
    o = n(381871);
let a = (e) => {
    let { isHovered: t, closePopout: n, onMouseEnter: a, onMouseLeave: s, onFocus: c, channel: u } = e;
    return (
        i.useEffect(() => {
            t || n();
        }, [n, t]),
        (0, r.jsx)(l.Z, {
            children: (0, r.jsx)('div', {
                onMouseEnter: a,
                onMouseLeave: s,
                children: (0, r.jsx)(o.Z, {
                    channel: u,
                    closePopout: n,
                    onFocus: c
                })
            })
        })
    );
};
