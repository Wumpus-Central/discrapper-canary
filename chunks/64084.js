n.d(t, { A: () => s });
var i = n(627968),
    a = n(64700),
    l = n(775135),
    r = n(935318);
function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, i.jsx)("div", { className: r.k, ref: s, children: (0, i.jsx)(l.A, { guild: t }) })
    );
}
