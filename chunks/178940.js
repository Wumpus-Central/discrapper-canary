n.d(t, {
    F: () => S,
    X: () => b
}),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(512722),
    u = n.n(l),
    c = n(866442),
    d = n(692547),
    f = n(84735),
    _ = n(481060),
    p = n(540059),
    h = n(981631),
    m = n(592901);
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
var E = (function (e) {
        return (e.DEFAULT = 'default'), (e.INVERTED = 'inverted'), (e.GHOST = 'ghost'), (e.ROW = 'row'), e;
    })(E || {}),
    v = (function (e) {
        return (e.TOP = 'top'), (e.CENTER = 'center'), e;
    })(v || {});
let y = {
        BOX: m.box,
        ROUND: m.round,
        SMALL_BOX: m.smallBox
    },
    I = {
        top: m.alignTop,
        center: m.alignCenter
    };
class b extends (i = a.PureComponent) {
    render() {
        let { disabled: e, readOnly: t, value: n, align: i = 'center', className: a, innerClassName: s, children: l, size: u, reverse: c, displayOnly: d, type: _, onClick: p } = this.props,
            g =
                null != l
                    ? (0, r.jsx)('div', {
                          className: o()(m.label, e ? m.labelDisabled : m.labelClickable, c ? m.labelReversed : m.labelForward),
                          style: { lineHeight: ''.concat(u, 'px') },
                          children: l
                      })
                    : null,
            E = d ? 'span' : 'label',
            v = this.props.disabled ? m.inputDisabled : this.props.readOnly ? m.inputReadonly : m.inputDefault;
        return (0, r.jsxs)(E, {
            className: o()(e ? m.checkboxWrapperDisabled : m.checkboxWrapper, I[i], a, {
                [m.row]: 'row' === _,
                [m.checked]: n
            }),
            children: [
                c ? g : null,
                !d &&
                    (0, r.jsx)(f.t, {
                        children: (0, r.jsx)('input', {
                            className: o()(s, v),
                            type: 'checkbox',
                            onClick: p,
                            onChange: e || t ? h.dG4 : this.handleChange,
                            checked: n,
                            style: {
                                width: u,
                                height: u
                            }
                        })
                    }),
                (0, r.jsx)(S, { ...this.props }),
                c ? null : g
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
function T(e, t) {
    var n;
    let { value: i, type: r, color: a } = e,
        s = null !== (n = e.style) && void 0 !== n ? n : {};
    if (!1 === i) return s;
    if (((s = { ...s }), null == a)) {
        if (!t)
            switch (r) {
                case 'default':
                    s.borderColor = 'var(--control-brand-foreground)';
                    break;
                case 'ghost':
                    (s.borderColor = 'var(--brand-15a)'), (s.backgroundColor = 'var(--brand-15a)');
                    break;
                case 'row':
                case 'inverted':
                    (s.borderColor = 'var(--brand-400)'), (s.backgroundColor = 'var(--brand-500)');
            }
    } else
        switch (r) {
            case 'default':
                s.borderColor = a;
                break;
            case 'ghost':
                if (a.startsWith('var(--')) {
                    let e = ''.concat(a.slice(0, -1), '-hsl)');
                    (s.borderColor = 'rgba('.concat(e, ', 0.15)')), (s.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
                } else u()((0, c.FX)(a), 'Checkbox: '.concat(a, ' is not a valid hex color')), (s.borderColor = (0, c.wK)(a, 0.15)), (s.backgroundColor = (0, c.wK)(a, 0.15));
                break;
            case 'row':
            case 'inverted':
                (s.backgroundColor = a), (s.borderColor = a);
        }
    return s;
}
function S(e) {
    let t = (0, p.Q3)('Checkbox'),
        { indicatorClassName: n, value: i, size: s, shape: l, checkboxColor: u, type: c, color: f, disabled: _ } = e,
        h = T(e, t),
        g = a.useMemo(() => (i ? (t ? d.Z.colors.WHITE.css : 'inverted' === c || 'row' === c ? d.Z.colors.WHITE.css : null != f ? f : d.Z.unsafe_rawColors.BRAND_500.css) : d.Z.unsafe_rawColors.TRANSPARENT.css), [i, c, f, t]);
    return (0, r.jsx)('div', {
        className: o()(m.checkbox, l, n, {
            [m.checked]: i,
            [m.checkboxDisabled]: _
        }),
        style: {
            width: s,
            height: s,
            borderColor: u,
            ...h
        },
        children: (0, r.jsx)(A, {
            isVisualRefreshEnabled: t,
            size: 'sm',
            color: g,
            'aria-hidden': !0
        })
    });
}
function A(e) {
    let { isVisualRefreshEnabled: t, ...n } = e;
    return t ? (0, r.jsx)(_.kSu, { ...n }) : (0, r.jsx)(_.dz2, { ...n });
}
g(b, 'Types', E),
    g(b, 'Shapes', y),
    g(b, 'Aligns', v),
    g(b, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        shape: y.BOX,
        align: 'center',
        onChange: h.dG4,
        reverse: !1
    });
