n.d(t, { Z: () => s }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(810097);
function s(e) {
    let { children: t, className: n, onShowToolbar: s, ...o } = e,
        l = r.useRef(null),
        [u, c] = r.useState(!1),
        d = () => {
            null == s || s(), c(!0);
        },
        f = () => {
            c(!1);
        };
    return (0, i.jsxs)('div', {
        className: n,
        onMouseEnter: d,
        onMouseLeave: f,
        onFocus: d,
        onBlur: (e) => {
            var t;
            (null === (t = l.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || f();
        },
        ref: l,
        children: [
            t,
            (0, i.jsx)(a.ZP, {
                isVisible: u,
                isExpandable: !1,
                ...o
            })
        ]
    });
}
