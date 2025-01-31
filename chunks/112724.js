n.d(t, { Z: () => s });
var i = n(200651),
    r = n(192379),
    a = n(259105);
function s(e) {
    return r.forwardRef(function (t, n) {
        let s = r.useRef();
        return (
            r.useImperativeHandle(n, () => ({
                triggerResize: () => {
                    var e;
                    null === (e = s.current) || void 0 === e || e.onResize();
                }
            })),
            (0, i.jsx)(a.default, {
                ref: s,
                children: (n) => {
                    let { width: r, height: a } = n;
                    return (0, i.jsx)(e, {
                        ...t,
                        width: r,
                        height: a
                    });
                }
            })
        );
    });
}
