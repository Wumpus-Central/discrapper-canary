n.d(t, { A: () => s });
var i = n(627968),
    r = n(64700),
    l = n(775135),
    a = n(156e3);
function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, i.jsx)("div", { className: a.k, ref: s, children: (0, i.jsx)(l.A, { guild: t }) })
    );
}
