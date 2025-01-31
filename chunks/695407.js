n.d(t, { n: () => h });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(84735),
    u = n(922770),
    c = n(481060),
    d = n(388032),
    f = n(496052);
let _ = 18;
function p(e, t, n) {
    return t
        ? (0, i.jsx)('div', {
              className: f.iconContainer,
              children: (0, i.jsx)(u.$, {
                  type: u.$.Type.SPINNING_CIRCLE,
                  className: s()(f.icon)
              })
          })
        : e.length > 0
          ? (0, i.jsx)(o.P, {
                'aria-label': d.intl.string(d.t['78fJND']),
                className: s()(f.iconContainer, f.iconClickable),
                onClick: (e) => {
                    e.stopPropagation(), n('');
                },
                onMouseDown: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                focusProps: {
                    offset: {
                        top: -3,
                        right: -3,
                        bottom: -3,
                        left: -3
                    }
                },
                children: (0, i.jsx)(c.Dio, {
                    size: 'custom',
                    color: 'currentColor',
                    width: _,
                    height: _,
                    className: f.icon,
                    'aria-label': d.intl.string(d.t.cpT0Cg)
                })
            })
          : (0, i.jsx)('div', {
                className: f.iconContainer,
                children: (0, i.jsx)(c._Ve, {
                    size: 'custom',
                    color: 'currentColor',
                    width: _,
                    height: _,
                    className: f.icon,
                    'aria-label': d.intl.string(d.t['5h0QOD'])
                })
            });
}
let h = r.forwardRef(function (e, t) {
    let { query: n, onChange: a, loading: s = !1, disabled: o = !1, placeholder: u = d.intl.string(d.t['5h0QOD']), 'aria-label': c } = e,
        _ = r.useRef(null),
        h = r.useRef(null);
    r.useImperativeHandle(
        t,
        () => ({
            focus: () => {
                var e;
                return null === (e = h.current) || void 0 === e ? void 0 : e.focus();
            },
            blur: () => {
                var e;
                return null === (e = h.current) || void 0 === e ? void 0 : e.blur();
            },
            activate: () => !1
        }),
        []
    );
    let m = p(n, s, a);
    return (0, i.jsx)(l.t, {
        focusTarget: h,
        ringTarget: _,
        offset: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 4
        },
        children: (0, i.jsxs)('div', {
            className: f.container,
            ref: _,
            children: [
                (0, i.jsx)('input', {
                    role: 'searchbox',
                    'aria-busy': s,
                    ref: h,
                    className: f.input,
                    value: n,
                    onChange: (e) => a(e.currentTarget.value),
                    'aria-label': c,
                    placeholder: u,
                    disabled: o
                }),
                m
            ]
        })
    });
});
