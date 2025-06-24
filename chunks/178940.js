n.d(t, {
    F: () => T,
    X: () => v
}),
    n(583741),
    n(388685);
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(866442),
    d = n(692547),
    f = n(84735),
    _ = n(481060),
    p = n(981631),
    h = n(883658);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
var E = (function (e) {
        return (e.DEFAULT = 'default'), (e.INVERTED = 'inverted'), (e.GHOST = 'ghost'), (e.ROW = 'row'), e;
    })(E || {}),
    b = (function (e) {
        return (e.TOP = 'top'), (e.CENTER = 'center'), e;
    })(b || {});
let y = {
        BOX: h.box,
        ROUND: h.round,
        SMALL_BOX: h.smallBox
    },
    O = {
        top: h.alignTop,
        center: h.alignCenter
    };
class v extends (r = a.PureComponent) {
    render() {
        let { disabled: e, readOnly: t, value: n, align: r = 'center', className: a, innerClassName: o, children: l, size: c, reverse: u, displayOnly: d, type: _, onClick: m } = this.props,
            E =
                null != l
                    ? (0, i.jsx)('div', {
                          className: s()(h.label, e ? h.labelDisabled : h.labelClickable, u ? h.labelReversed : h.labelForward),
                          style: { lineHeight: ''.concat(c, 'px') },
                          children: l
                      })
                    : null,
            b = d ? 'span' : 'label',
            y = this.props.disabled ? h.inputDisabled : this.props.readOnly ? h.inputReadonly : h.inputDefault;
        return (0, i.jsxs)(b, {
            className: s()(e ? h.checkboxWrapperDisabled : h.checkboxWrapper, O[r], a, {
                [h.row]: 'row' === _,
                [h.checked]: n
            }),
            children: [
                u ? E : null,
                !d &&
                    (0, i.jsx)(f.t, {
                        children: (0, i.jsx)('input', {
                            className: s()(o, y),
                            type: 'checkbox',
                            onClick: m,
                            onChange: e || t ? p.dG4 : this.handleChange,
                            checked: n,
                            style: {
                                width: c,
                                height: c
                            }
                        })
                    }),
                (0, i.jsx)(T, g({}, this.props)),
                u ? null : E
            ]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e, e.currentTarget.checked);
            });
    }
}
function I(e) {
    var t;
    let { value: n, type: r, color: i } = e,
        a = null != (t = e.style) ? t : {};
    if (!1 === n) return a;
    if (((a = g({}, a)), null != i))
        switch (r) {
            case 'default':
                a.borderColor = i;
                break;
            case 'ghost':
                if (i.startsWith('var(--')) {
                    let e = ''.concat(i.slice(0, -1), '-hsl)');
                    (a.borderColor = 'rgba('.concat(e, ', 0.15)')), (a.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
                } else c()((0, u.FX)(i), 'Checkbox: '.concat(i, ' is not a valid hex color')), (a.borderColor = (0, u.wK)(i, 0.15)), (a.backgroundColor = (0, u.wK)(i, 0.15));
                break;
            case 'row':
            case 'inverted':
                (a.backgroundColor = i), (a.borderColor = i);
        }
    return a;
}
function T(e) {
    let { indicatorClassName: t, value: n, size: r, shape: o, checkboxColor: l, disabled: c } = e,
        u = I(e),
        f = a.useMemo(() => (n ? d.Z.colors.WHITE.css : d.Z.unsafe_rawColors.TRANSPARENT.css), [n]);
    return (0, i.jsx)('div', {
        className: s()(h.checkbox, o, t, {
            [h.checked]: n,
            [h.checkboxDisabled]: c
        }),
        style: g(
            {
                width: r,
                height: r,
                borderColor: l
            },
            u
        ),
        children: (0, i.jsx)(_.kSu, {
            size: 'sm',
            color: f,
            'aria-hidden': !0
        })
    });
}
m(v, 'Types', E),
    m(v, 'Shapes', y),
    m(v, 'Aligns', b),
    m(v, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        shape: y.BOX,
        align: 'center',
        onChange: p.dG4,
        reverse: !1
    });
