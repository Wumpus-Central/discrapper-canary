n.d(t, { A: () => s });
var i = n(627968),
    r = n(64700),
    a = n(775135),
    l = n(532233);
function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, i.jsx)("div", { className: l.k, ref: s, children: (0, i.jsx)(a.A, { guild: t }) })
    );
}
