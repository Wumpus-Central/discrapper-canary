n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800),
    l = n(122611),
    a = n(302000);
function o(e) {
    let { guild: t, setHasSubheader: n } = e,
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = o.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, r.jsx)('div', {
            className: a.container,
            ref: o,
            children: (0, r.jsx)(l.Z, { guild: t })
        })
    );
}
