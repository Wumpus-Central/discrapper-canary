r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(259105);
function s(e) {
    return a.forwardRef(function (n, r) {
        let s = a.useRef();
        return (
            a.useImperativeHandle(r, () => ({
                triggerResize: () => {
                    var e;
                    null === (e = s.current) || void 0 === e || e.onResize();
                }
            })),
            (0, i.jsx)(o.default, {
                ref: s,
                children: (r) => {
                    let { width: a, height: o } = r;
                    return (0, i.jsx)(e, {
                        ...n,
                        width: a,
                        height: o
                    });
                }
            })
        );
    });
}
