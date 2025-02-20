n.d(t, { n: () => m });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(1561),
    l = n(84735),
    c = n(670596),
    u = n(922770),
    d = n(481060),
    f = n(388032),
    p = n(650710);
let _ = 18;
function h(e, t, n) {
    return t
        ? (0, r.jsx)('div', {
              className: p.iconContainer,
              children: (0, r.jsx)(u.$, {
                  type: u.$.Type.SPINNING_CIRCLE,
                  className: a()(p.icon)
              })
          })
        : e.length > 0
          ? (0, r.jsx)(s.P, {
                'aria-label': f.NW.string(f.t['78fJND']),
                className: a()(p.iconContainer, p.iconClickable),
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
                children: (0, r.jsx)(d.Dio, {
                    size: 'custom',
                    color: 'currentColor',
                    width: _,
                    height: _,
                    className: p.icon,
                    'aria-label': f.NW.string(f.t.cpT0Cg)
                })
            })
          : (0, r.jsx)('div', {
                className: p.iconContainer,
                children: (0, r.jsx)(d._Ve, {
                    size: 'custom',
                    color: 'currentColor',
                    width: _,
                    height: _,
                    className: p.icon,
                    'aria-label': f.NW.string(f.t['5h0QOD'])
                })
            });
}
let m = i.forwardRef(function (e, t) {
    let { query: n, onChange: o, loading: a = !1, disabled: s = !1, placeholder: u = f.NW.string(f.t['5h0QOD']), 'aria-label': d, onInteraction: _ } = e,
        m = i.useRef(null),
        g = i.useRef(null);
    i.useImperativeHandle(
        t,
        () => ({
            focus: () => {
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
            },
            blur: () => {
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.blur();
            },
            activate: () => !1
        }),
        []
    );
    let E = h(n, a, o),
        v = (e) => {
            o(e.currentTarget.value), null == _ || _(c.U.SEARCH);
        };
    return (0, r.jsx)(l.t, {
        focusTarget: g,
        ringTarget: m,
        offset: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: p.container,
            ref: m,
            children: [
                (0, r.jsx)('input', {
                    role: 'searchbox',
                    'aria-busy': a,
                    ref: g,
                    className: p.input,
                    value: n,
                    onChange: v,
                    'aria-label': d,
                    placeholder: u,
                    disabled: s
                }),
                E
            ]
        })
    });
});
