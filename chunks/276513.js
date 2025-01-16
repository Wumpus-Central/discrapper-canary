r.d(n, {
    Q: function () {
        return h;
    }
});
var i = r(200651),
    a = r(120356),
    s = r.n(a),
    o = r(257182),
    l = r(84735),
    u = r(766646),
    c = r(993365),
    d = r(883848),
    f = r(388032),
    _ = r(620797);
function h(e) {
    let { role: n = 'button', variant: r = 'default', textVariant: a = 'text-sm/medium', lineClamp: h = 1, text: p, icon: m, iconPosition: g = 'end', external: E, focusProps: v, ...I } = e;
    function T() {
        if (null == m) return;
        let e = 'text-lg/medium' === a ? 'md' : 'sm';
        return (0, i.jsx)(m, {
            color: 'currentColor',
            size: e
        });
    }
    return (
        E && (m = o.G),
        (0, i.jsx)(l.t, {
            ...v,
            children: (0, i.jsxs)('button', {
                role: n,
                className: s()(_.linkButton, _[r]),
                ...I,
                children: [
                    null != m && 'start' === g && (0, i.jsx)(T, {}),
                    (0, i.jsx)(c.x, {
                        tag: 'span',
                        variant: a,
                        color: 'none',
                        lineClamp: h,
                        className: _.text,
                        children: p
                    }),
                    null != m && 'end' === g && (0, i.jsx)(T, {}),
                    E && (0, i.jsx)(u.n, { children: f.intl.string(d.Z.cgdAs7) })
                ]
            })
        })
    );
}
