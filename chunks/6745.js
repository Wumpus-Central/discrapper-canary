r.d(n, {
    D: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(507274),
    u = r(838331),
    c = r(431989);
function d(e) {
    let { children: n, placeholder: r, value: o, onChange: d, onClose: f, showScrollbar: p, className: h, multiSelect: _, ...m } = e,
        g = a.useCallback(
            (e) => {
                d(e), !_ && (null == f || f());
            },
            [d, f, _]
        );
    return (0, i.jsx)(l.V, {
        className: s()(c.container, h, { [c.scroller]: p }),
        children: (0, i.jsx)(u.hQ, {
            ...m,
            showScrollbar: p,
            value: o,
            multiSelect: _,
            onChange: g,
            placeholder: r,
            children: n,
            listClassName: c.list
        })
    });
}
