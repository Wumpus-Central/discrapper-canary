n.d(t, { Z: () => s });
var i = n(200651),
    l = n(192379),
    r = n(122611),
    a = n(896441);
function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, i.jsx)('div', {
            className: a.container,
            ref: s,
            children: (0, i.jsx)(r.Z, { guild: t })
        })
    );
}
