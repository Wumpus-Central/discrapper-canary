r.d(n, {
    Q: function () {
        return h;
    }
});
var i = r(200651),
    a = r(120356),
    o = r.n(a),
    s = r(257182),
    l = r(84735),
    u = r(766646),
    c = r(993365),
    d = r(883848),
    f = r(388032),
    p = r(620797);
function h(e) {
    let { role: n = 'button', variant: r = 'default', textVariant: a = 'text-sm/medium', lineClamp: h = 1, text: _, icon: m, iconPosition: g = 'end', external: E, focusProps: v, ...y } = e;
    function b() {
        if (null == m) return;
        let e = 'text-lg/medium' === a ? 'md' : 'sm';
        return (0, i.jsx)(m, {
            color: 'currentColor',
            size: e
        });
    }
    return (
        E && (m = s.G),
        (0, i.jsx)(l.t, {
            ...v,
            children: (0, i.jsxs)('button', {
                role: n,
                className: o()(p.linkButton, p[r]),
                ...y,
                children: [
                    null != m && 'start' === g && (0, i.jsx)(b, {}),
                    (0, i.jsx)(c.x, {
                        tag: 'span',
                        variant: a,
                        color: 'none',
                        lineClamp: h,
                        className: p.text,
                        children: _
                    }),
                    null != m && 'end' === g && (0, i.jsx)(b, {}),
                    E && (0, i.jsx)(u.n, { children: f.intl.string(d.Z.cgdAs7) })
                ]
            })
        })
    );
}
