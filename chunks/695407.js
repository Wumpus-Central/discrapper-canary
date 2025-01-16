r.d(n, {
    n: function () {
        return m;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(1561),
    u = r(84735),
    c = r(922770),
    d = r(481060),
    f = r(388032),
    _ = r(496052);
let h = 18;
function p(e, n, r) {
    return n
        ? (0, i.jsx)('div', {
              className: _.iconContainer,
              children: (0, i.jsx)(c.$, {
                  type: c.$.Type.SPINNING_CIRCLE,
                  className: o()(_.icon)
              })
          })
        : e.length > 0
          ? (0, i.jsx)(l.P, {
                'aria-label': f.intl.string(f.t['78fJND']),
                className: o()(_.iconContainer, _.iconClickable),
                onClick: (e) => {
                    e.stopPropagation(), r('');
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
                children: (0, i.jsx)(d.XSmallIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: h,
                    height: h,
                    className: _.icon,
                    'aria-label': f.intl.string(f.t.cpT0Cg)
                })
            })
          : (0, i.jsx)('div', {
                className: _.iconContainer,
                children: (0, i.jsx)(d.MagnifyingGlassIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: h,
                    height: h,
                    className: _.icon,
                    'aria-label': f.intl.string(f.t['5h0QOD'])
                })
            });
}
let m = a.forwardRef(function (e, n) {
    let { query: r, onChange: s, loading: o = !1, disabled: l = !1, placeholder: c = f.intl.string(f.t['5h0QOD']), 'aria-label': d } = e,
        h = a.useRef(null),
        m = a.useRef(null);
    a.useImperativeHandle(
        n,
        () => ({
            focus: () => {
                var e;
                return null === (e = m.current) || void 0 === e ? void 0 : e.focus();
            },
            blur: () => {
                var e;
                return null === (e = m.current) || void 0 === e ? void 0 : e.blur();
            },
            activate: () => !1
        }),
        []
    );
    let g = p(r, o, s);
    return (0, i.jsx)(u.t, {
        focusTarget: m,
        ringTarget: h,
        offset: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 4
        },
        children: (0, i.jsxs)('div', {
            className: _.container,
            ref: h,
            children: [
                (0, i.jsx)('input', {
                    role: 'searchbox',
                    'aria-busy': o,
                    ref: m,
                    className: _.input,
                    value: r,
                    onChange: (e) => s(e.currentTarget.value),
                    'aria-label': d,
                    placeholder: c,
                    disabled: l
                }),
                g
            ]
        })
    });
});
