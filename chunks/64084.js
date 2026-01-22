n.d(t, {
    A: () => s,
});
var r = n(627968),
    i = n(64700),
    l = n(775135),
    a = n(935318);

function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, r.jsx)("div", {
            className: a.k,
            ref: s,
            children: (0, r.jsx)(l.A, {
                guild: t,
            }),
        })
    );
}
