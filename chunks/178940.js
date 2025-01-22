r.d(n, {
    F: function () {
        return C;
    },
    X: function () {
        return S;
    }
});
var i,
    a,
    o,
    s = r(47120);
var l = r(200651),
    u = r(192379),
    c = r(120356),
    d = r.n(c),
    f = r(512722),
    p = r.n(f),
    h = r(866442),
    _ = r(692547),
    m = r(84735),
    g = r(481060),
    E = r(540059),
    v = r(981631),
    y = r(592901);
function b(e, n, r) {
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
let I = {
        BOX: y.box,
        ROUND: y.round,
        SMALL_BOX: y.smallBox
    },
    T = {
        top: y.alignTop,
        center: y.alignCenter
    };
class S extends (o = u.PureComponent) {
    render() {
        let { disabled: e, readOnly: n, value: r, align: i = 'center', className: a, innerClassName: o, children: s, size: u, reverse: c, displayOnly: f, type: p, onClick: h } = this.props,
            _ =
                null != s
                    ? (0, l.jsx)('div', {
                          className: d()(y.label, e ? y.labelDisabled : y.labelClickable, c ? y.labelReversed : y.labelForward),
                          style: { lineHeight: ''.concat(u, 'px') },
                          children: s
                      })
                    : null,
            g = f ? 'span' : 'label',
            E = this.props.disabled ? y.inputDisabled : this.props.readOnly ? y.inputReadonly : y.inputDefault;
        return (0, l.jsxs)(g, {
            className: d()(e ? y.checkboxWrapperDisabled : y.checkboxWrapper, T[i], a, {
                [y.row]: 'row' === p,
                [y.checked]: r
            }),
            children: [
                c ? _ : null,
                !f &&
                    (0, l.jsx)(m.t, {
                        children: (0, l.jsx)('input', {
                            className: d()(o, E),
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
                (0, l.jsx)(C, { ...this.props }),
                c ? null : _
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleChange', (e) => {
                let { onChange: n } = this.props;
                null == n || n(e, e.currentTarget.checked);
            });
    }
}
function A(e, n) {
    var r;
    let { value: i, type: a, color: o } = e,
        s = null !== (r = e.style) && void 0 !== r ? r : {};
    if (!1 === i) return s;
    if (((s = { ...s }), null == o)) {
        if (!n)
            switch (a) {
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
        switch (a) {
            case 'default':
                s.borderColor = o;
                break;
            case 'ghost':
                if (o.startsWith('var(--')) {
                    let e = ''.concat(o.slice(0, -1), '-hsl)');
                    (s.borderColor = 'rgba('.concat(e, ', 0.15)')), (s.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
                } else p()((0, h.FX)(o), 'Checkbox: '.concat(o, ' is not a valid hex color')), (s.borderColor = (0, h.wK)(o, 0.15)), (s.backgroundColor = (0, h.wK)(o, 0.15));
                break;
            case 'row':
            case 'inverted':
                (s.backgroundColor = o), (s.borderColor = o);
        }
    return s;
}
function C(e) {
    let n = (0, E.Q3)('Checkbox'),
        { indicatorClassName: r, value: i, size: a, shape: o, checkboxColor: s, type: c, color: f, disabled: p } = e,
        h = A(e, n),
        m = u.useMemo(() => (i ? (n ? _.Z.colors.WHITE.css : 'inverted' === c || 'row' === c ? _.Z.colors.WHITE.css : null != f ? f : _.Z.unsafe_rawColors.BRAND_500.css) : _.Z.unsafe_rawColors.TRANSPARENT.css), [i, c, f, n]);
    return (0, l.jsx)('div', {
        className: d()(y.checkbox, o, r, {
            [y.checked]: i,
            [y.checkboxDisabled]: p
        }),
        style: {
            width: a,
            height: a,
            borderColor: s,
            ...h
        },
        children: (0, l.jsx)(N, {
            isVisualRefreshEnabled: n,
            size: 'sm',
            color: m,
            'aria-hidden': !0
        })
    });
}
function N(e) {
    let { isVisualRefreshEnabled: n, ...r } = e;
    return n ? (0, l.jsx)(g.CheckmarkSmallBoldIcon, { ...r }) : (0, l.jsx)(g.CheckmarkLargeIcon, { ...r });
}
b(S, 'Types', i),
    b(S, 'Shapes', I),
    b(S, 'Aligns', a),
    b(S, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        shape: I.BOX,
        align: 'center',
        onChange: v.dG4,
        reverse: !1
    });
