n.d(t, { n: () => h });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(1561),
    l = n(84735),
    c = n(922770),
    u = n(481060),
    d = n(388032),
    f = n(650710);
let p = 18;
function _(e, t, n) {
    return t
        ? (0, r.jsx)('div', {
              className: f.iconContainer,
              children: (0, r.jsx)(c.$, {
                  type: c.$.Type.SPINNING_CIRCLE,
                  className: a()(f.icon)
              })
          })
        : e.length > 0
          ? (0, r.jsx)(s.P, {
                'aria-label': d.NW.string(d.t['78fJND']),
                className: a()(f.iconContainer, f.iconClickable),
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
                children: (0, r.jsx)(u.Dio, {
                    size: 'custom',
                    color: 'currentColor',
                    width: p,
                    height: p,
                    className: f.icon,
                    'aria-label': d.NW.string(d.t.cpT0Cg)
                })
            })
          : (0, r.jsx)('div', {
                className: f.iconContainer,
                children: (0, r.jsx)(u._Ve, {
                    size: 'custom',
                    color: 'currentColor',
                    width: p,
                    height: p,
                    className: f.icon,
                    'aria-label': d.NW.string(d.t['5h0QOD'])
                })
            });
}
let h = i.forwardRef(function (e, t) {
    let { query: n, onChange: o, loading: a = !1, disabled: s = !1, placeholder: c = d.NW.string(d.t['5h0QOD']), 'aria-label': u } = e,
        p = i.useRef(null),
        h = i.useRef(null);
    i.useImperativeHandle(
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
    let m = _(n, a, o);
    return (0, r.jsx)(l.t, {
        focusTarget: h,
        ringTarget: p,
        offset: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: f.container,
            ref: p,
            children: [
                (0, r.jsx)('input', {
                    role: 'searchbox',
                    'aria-busy': a,
                    ref: h,
                    className: f.input,
                    value: n,
                    onChange: (e) => o(e.currentTarget.value),
                    'aria-label': u,
                    placeholder: c,
                    disabled: s
                }),
                m
            ]
        })
    });
});
