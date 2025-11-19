n.d(t, { Z: () => s });
var r = n(54381),
    i = n(473749),
    l = n(122611),
    a = n(184528);
function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, r.jsx)("div", {
            className: a.container,
            ref: s,
            children: (0, r.jsx)(l.Z, { guild: t }),
        })
    );
}
