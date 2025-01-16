n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(122611),
    a = n(692013);
function s(e) {
    let { guild: t, setHasSubheader: n } = e,
        s = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = s.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, i.jsx)('div', {
            className: a.container,
            ref: s,
            children: (0, i.jsx)(l.Z, { guild: t })
        })
    );
}
