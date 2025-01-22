r.d(n, {
    V: function () {
        return o;
    }
});
var i = r(200651),
    a = r(192379);
let o = a.forwardRef(function (e, n) {
    let { className: r, children: o } = e,
        s = a.useRef(null),
        l = a.useRef(null);
    return (
        a.useImperativeHandle(
            n,
            () => ({
                focus: () => {
                    var e;
                    let n = s.current;
                    null != n && (null == l.current && (l.current = n.querySelector('[tabindex="0"]')), null === (e = l.current) || void 0 === e || e.focus());
                },
                blur: () => {
                    var e;
                    return null === (e = l.current) || void 0 === e ? void 0 : e.blur();
                },
                activate: () => !1
            }),
            []
        ),
        a.useLayoutEffect(() => {
            let e = s.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    () => {
                        e.removeEventListener('focusin', n);
                    }
                );
            function n(e) {
                l.current = e.target;
            }
        }, []),
        (0, i.jsx)('div', {
            ref: s,
            className: r,
            style: { position: 'relative' },
            children: o
        })
    );
});
