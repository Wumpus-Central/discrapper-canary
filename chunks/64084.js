n.d(t, { A: () => s });
var i = n(627968),
    a = n(64700),
    r = n(775135),
    l = n(156e3);
function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, i.jsx)("div", { className: l.k, ref: s, children: (0, i.jsx)(r.A, { guild: t }) })
    );
}
