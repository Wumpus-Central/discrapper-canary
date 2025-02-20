n.d(t, { Z: () => a });
var r = n(200651),
    i = n(192379),
    l = n(122611),
    o = n(221461);
function a(e) {
    let { guild: t, setHasSubheader: n } = e,
        a = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = a.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, r.jsx)('div', {
            className: o.container,
            ref: a,
            children: (0, r.jsx)(l.Z, { guild: t })
        })
    );
}
