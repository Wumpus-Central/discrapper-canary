n.d(t, {
    F: () => A,
    X: () => T
}),
    n(978209),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    c = n.n(l),
    u = n(866442),
    d = n(692547),
    f = n(84735),
    _ = n(481060),
    p = n(540059),
    h = n(981631),
    m = n(883658);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var v = (function (e) {
        return (e.DEFAULT = 'default'), (e.INVERTED = 'inverted'), (e.GHOST = 'ghost'), (e.ROW = 'row'), e;
    })(v || {}),
    O = (function (e) {
        return (e.TOP = 'top'), (e.CENTER = 'center'), e;
    })(O || {});
let I = {
        BOX: m.box,
        ROUND: m.round,
        SMALL_BOX: m.smallBox
    },
    S = {
        top: m.alignTop,
        center: m.alignCenter
    };
class T extends (r = o.PureComponent) {
    render() {
        let { disabled: e, readOnly: t, value: n, align: r = 'center', className: o, innerClassName: a, children: l, size: c, reverse: u, displayOnly: d, type: _, onClick: p } = this.props,
            g =
                null != l
                    ? (0, i.jsx)('div', {
                          className: s()(m.label, e ? m.labelDisabled : m.labelClickable, u ? m.labelReversed : m.labelForward),
                          style: { lineHeight: ''.concat(c, 'px') },
                          children: l
                      })
                    : null,
            b = d ? 'span' : 'label',
            y = this.props.disabled ? m.inputDisabled : this.props.readOnly ? m.inputReadonly : m.inputDefault;
        return (0, i.jsxs)(b, {
            className: s()(e ? m.checkboxWrapperDisabled : m.checkboxWrapper, S[r], o, {
                [m.row]: 'row' === _,
                [m.checked]: n
            }),
            children: [
                u ? g : null,
                !d &&
                    (0, i.jsx)(f.t, {
                        children: (0, i.jsx)('input', {
                            className: s()(a, y),
                            type: 'checkbox',
                            onClick: p,
                            onChange: e || t ? h.dG4 : this.handleChange,
                            checked: n,
                            style: {
                                width: c,
                                height: c
                            }
                        })
                    }),
                (0, i.jsx)(A, E({}, this.props)),
                u ? null : g
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e, e.currentTarget.checked);
            });
    }
}
function N(e, t) {
    var n;
    let { value: r, type: i, color: o } = e,
        a = null != (n = e.style) ? n : {};
    if (!1 === r) return a;
    if (((a = E({}, a)), null == o)) {
        if (!t)
            switch (i) {
                case 'default':
                    a.borderColor = 'var(--control-brand-foreground)';
                    break;
                case 'ghost':
                    (a.borderColor = 'var(--brand-15a)'), (a.backgroundColor = 'var(--brand-15a)');
                    break;
                case 'row':
                case 'inverted':
                    (a.borderColor = 'var(--brand-400)'), (a.backgroundColor = 'var(--brand-500)');
            }
    } else
        switch (i) {
            case 'default':
                a.borderColor = o;
                break;
            case 'ghost':
                if (o.startsWith('var(--')) {
                    let e = ''.concat(o.slice(0, -1), '-hsl)');
                    (a.borderColor = 'rgba('.concat(e, ', 0.15)')), (a.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
                } else c()((0, u.FX)(o), 'Checkbox: '.concat(o, ' is not a valid hex color')), (a.borderColor = (0, u.wK)(o, 0.15)), (a.backgroundColor = (0, u.wK)(o, 0.15));
                break;
            case 'row':
            case 'inverted':
                (a.backgroundColor = o), (a.borderColor = o);
        }
    return a;
}
function A(e) {
    let t = (0, p.Q3)('Checkbox'),
        { indicatorClassName: n, value: r, size: a, shape: l, checkboxColor: c, type: u, color: f, disabled: _ } = e,
        h = N(e, t),
        g = o.useMemo(() => (r ? (t || 'inverted' === u || 'row' === u ? d.Z.colors.WHITE.css : null != f ? f : d.Z.unsafe_rawColors.BRAND_500.css) : d.Z.unsafe_rawColors.TRANSPARENT.css), [r, u, f, t]);
    return (0, i.jsx)('div', {
        className: s()(m.checkbox, l, n, {
            [m.checked]: r,
            [m.checkboxDisabled]: _
        }),
        style: E(
            {
                width: a,
                height: a,
                borderColor: c
            },
            h
        ),
        children: (0, i.jsx)(C, {
            isVisualRefreshEnabled: t,
            size: 'sm',
            color: g,
            'aria-hidden': !0
        })
    });
}
function C(e) {
    var { isVisualRefreshEnabled: t } = e,
        n = b(e, ['isVisualRefreshEnabled']);
    return t ? (0, i.jsx)(_.kSu, E({}, n)) : (0, i.jsx)(_.dz2, E({}, n));
}
g(T, 'Types', v),
    g(T, 'Shapes', I),
    g(T, 'Aligns', O),
    g(T, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        shape: I.BOX,
        align: 'center',
        onChange: h.dG4,
        reverse: !1
    });
