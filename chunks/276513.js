n.d(t, { Q: () => _ });
var i = n(200651),
    r = n(120356),
    a = n.n(r),
    s = n(257182),
    o = n(84735),
    l = n(766646),
    u = n(993365),
    c = n(760976),
    d = n(388032),
    f = n(449032);
function _(e) {
    let { role: t = 'button', variant: n = 'default', textVariant: r = 'text-sm/medium', lineClamp: _ = 1, text: p, icon: h, iconPosition: m = 'end', external: g, focusProps: E, ...v } = e;
    function y() {
        if (null == h) return;
        let e = 'text-lg/medium' === r ? 'md' : 'sm';
        return (0, i.jsx)(h, {
            color: 'currentColor',
            size: e
        });
    }
    return (
        g && (h = s.G),
        (0, i.jsx)(o.t, {
            ...E,
            children: (0, i.jsxs)('button', {
                role: t,
                className: a()(f.linkButton, f[n]),
                ...v,
                children: [
                    null != h && 'start' === m && (0, i.jsx)(y, {}),
                    (0, i.jsx)(u.x, {
                        tag: 'span',
                        variant: r,
                        color: 'none',
                        lineClamp: _,
                        className: f.text,
                        children: p
                    }),
                    null != h && 'end' === m && (0, i.jsx)(y, {}),
                    g && (0, i.jsx)(l.n, { children: d.intl.string(c.Z.cgdAs7) })
                ]
            })
        })
    );
}
