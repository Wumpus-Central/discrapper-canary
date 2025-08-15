n.d(t, { Z: () => o });
var r = n(951288),
    i = n(647438),
    l = n(122611),
    a = n(619224);
function o(e) {
    let { guild: t, setHasSubheader: n } = e,
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = o.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, r.jsx)("div", {
            className: a.container,
            ref: o,
            children: (0, r.jsx)(l.Z, { guild: t }),
        })
    );
}
