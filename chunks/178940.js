r.d(n, {
    F: function () {
        return N;
    },
    X: function () {
        return S;
    }
});
var i,
    a,
    s,
    o = r(47120);
var l = r(200651),
    u = r(192379),
    c = r(120356),
    d = r.n(c),
    f = r(512722),
    _ = r.n(f),
    h = r(866442),
    p = r(692547),
    m = r(84735),
    g = r(481060),
    E = r(540059),
    v = r(981631),
    I = r(592901);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.DEFAULT = 'default'), (e.INVERTED = 'inverted'), (e.GHOST = 'ghost'), (e.ROW = 'row');
})(i || (i = {})),
    !(function (e) {
        (e.TOP = 'top'), (e.CENTER = 'center');
    })(a || (a = {}));
let b = {
        BOX: I.box,
        ROUND: I.round,
        SMALL_BOX: I.smallBox
    },
    y = {
        top: I.alignTop,
        center: I.alignCenter
    };
class S extends (s = u.PureComponent) {
    render() {
        let { disabled: e, readOnly: n, value: r, align: i = 'center', className: a, innerClassName: s, children: o, size: u, reverse: c, displayOnly: f, type: _, onClick: h } = this.props,
            p =
                null != o
                    ? (0, l.jsx)('div', {
                          className: d()(I.label, e ? I.labelDisabled : I.labelClickable, c ? I.labelReversed : I.labelForward),
                          style: { lineHeight: ''.concat(u, 'px') },
                          children: o
                      })
                    : null,
            g = f ? 'span' : 'label',
            E = this.props.disabled ? I.inputDisabled : this.props.readOnly ? I.inputReadonly : I.inputDefault;
        return (0, l.jsxs)(g, {
            className: d()(e ? I.checkboxWrapperDisabled : I.checkboxWrapper, y[i], a, {
                [I.row]: 'row' === _,
                [I.checked]: r
            }),
            children: [
                c ? p : null,
                !f &&
                    (0, l.jsx)(m.t, {
                        children: (0, l.jsx)('input', {
                            className: d()(s, E),
                            type: 'checkbox',
                            onClick: h,
                            onChange: e || n ? v.dG4 : this.handleChange,
                            checked: r,
                            style: {
                                width: u,
                                height: u
                            }
                        })
                    }),
                (0, l.jsx)(N, { ...this.props }),
                c ? null : p
            ]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'handleChange', (e) => {
                let { onChange: n } = this.props;
                null == n || n(e, e.currentTarget.checked);
            });
    }
}
function A(e, n) {
    var r;
    let { value: i, type: a, color: s } = e,
        o = null !== (r = e.style) && void 0 !== r ? r : {};
    if (!1 === i) return o;
    if (((o = { ...o }), null == s)) {
        if (!n)
            switch (a) {
                case 'default':
                    o.borderColor = 'var(--control-brand-foreground)';
                    break;
                case 'ghost':
                    (o.borderColor = 'var(--brand-15a)'), (o.backgroundColor = 'var(--brand-15a)');
                    break;
                case 'row':
                case 'inverted':
                    (o.borderColor = 'var(--brand-400)'), (o.backgroundColor = 'var(--brand-500)');
            }
    } else
        switch (a) {
            case 'default':
                o.borderColor = s;
                break;
            case 'ghost':
                if (s.startsWith('var(--')) {
                    let e = ''.concat(s.slice(0, -1), '-hsl)');
                    (o.borderColor = 'rgba('.concat(e, ', 0.15)')), (o.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
                } else _()((0, h.FX)(s), 'Checkbox: '.concat(s, ' is not a valid hex color')), (o.borderColor = (0, h.wK)(s, 0.15)), (o.backgroundColor = (0, h.wK)(s, 0.15));
                break;
            case 'row':
            case 'inverted':
                (o.backgroundColor = s), (o.borderColor = s);
        }
    return o;
}
function N(e) {
    let n = (0, E.Q3)('Checkbox'),
        { indicatorClassName: r, value: i, size: a, shape: s, checkboxColor: o, type: c, color: f, disabled: _ } = e,
        h = A(e, n),
        m = u.useMemo(() => (i ? (n ? p.Z.colors.WHITE.css : 'inverted' === c || 'row' === c ? p.Z.colors.WHITE.css : null != f ? f : p.Z.unsafe_rawColors.BRAND_500.css) : p.Z.unsafe_rawColors.TRANSPARENT.css), [i, c, f, n]);
    return (0, l.jsx)('div', {
        className: d()(I.checkbox, s, r, {
            [I.checked]: i,
            [I.checkboxDisabled]: _
        }),
        style: {
            width: a,
            height: a,
            borderColor: o,
            ...h
        },
        children: (0, l.jsx)(C, {
            isVisualRefreshEnabled: n,
            size: 'sm',
            color: m,
            'aria-hidden': !0
        })
    });
}
function C(e) {
    let { isVisualRefreshEnabled: n, ...r } = e;
    return n ? (0, l.jsx)(g.CheckmarkSmallBoldIcon, { ...r }) : (0, l.jsx)(g.CheckmarkLargeIcon, { ...r });
}
T(S, 'Types', i),
    T(S, 'Shapes', b),
    T(S, 'Aligns', a),
    T(S, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        shape: b.BOX,
        align: 'center',
        onChange: v.dG4,
        reverse: !1
    });
