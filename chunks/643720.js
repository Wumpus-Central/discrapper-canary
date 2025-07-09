n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800),
    l = n(390322),
    a = n(381871);
let o = (e) => {
    let { isHovered: t, closePopout: n, onMouseEnter: o, onMouseLeave: s, onFocus: c, channel: u } = e;
    return (
        i.useEffect(() => {
            t || n();
        }, [n, t]),
        (0, r.jsx)(l.Z, {
            children: (0, r.jsx)('div', {
                onMouseEnter: o,
                onMouseLeave: s,
                children: (0, r.jsx)(a.Z, {
                    channel: u,
                    closePopout: n,
                    onFocus: c
                })
            })
        })
    );
};
