r.d(n, {
    D: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(507274),
    u = r(838331),
    c = r(431989);
function d(e) {
    let { children: n, placeholder: r, value: s, onChange: d, onClose: f, showScrollbar: _, className: h, multiSelect: p, ...m } = e,
        g = a.useCallback(
            (e) => {
                d(e), !p && (null == f || f());
            },
            [d, f, p]
        );
    return (0, i.jsx)(l.V, {
        className: o()(c.container, h, { [c.scroller]: _ }),
        children: (0, i.jsx)(u.hQ, {
            ...m,
            showScrollbar: _,
            value: s,
            multiSelect: p,
            onChange: g,
            placeholder: r,
            children: n,
            listClassName: c.list
        })
    });
}
