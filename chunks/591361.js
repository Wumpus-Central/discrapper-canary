r.d(n, {
    O: function () {
        return d;
    },
    a8: function () {
        return h;
    },
    u6: function () {
        return p;
    }
});
var i = r(192379),
    a = r(464170),
    o = r(969129),
    s = r(558883),
    l = r(661763),
    u = r(523603),
    c = r(491116);
function d(e, n, r) {
    let l = (0, o.Q3)({
            ...e,
            value: n.isSelected
        }),
        { isInvalid: u, validationErrors: c, validationDetails: d } = l.displayValidation,
        {
            labelProps: f,
            inputProps: p,
            isSelected: h,
            isPressed: _,
            isDisabled: m,
            isReadOnly: g
        } = (0, s.O)(
            {
                ...e,
                isInvalid: u
            },
            n,
            r
        );
    (0, a.Q)(e, l, r);
    let { isIndeterminate: E, isRequired: v, validationBehavior: y = 'aria' } = e;
    return (
        (0, i.useEffect)(() => {
            r.current && (r.current.indeterminate = !!E);
        }),
        {
            labelProps: f,
            inputProps: {
                ...p,
                checked: h,
                'aria-required': (v && 'aria' === y) || void 0,
                required: v && 'native' === y
            },
            isSelected: h,
            isPressed: _,
            isDisabled: m,
            isReadOnly: g,
            isInvalid: u,
            validationErrors: c,
            validationDetails: d
        }
    );
}
let f = new WeakMap();
function p(e, n) {
    let { isDisabled: r, name: i, validationBehavior: a = 'aria' } = e,
        { isInvalid: o, validationErrors: s, validationDetails: c } = n.displayValidation,
        {
            labelProps: d,
            fieldProps: p,
            descriptionProps: h,
            errorMessageProps: _
        } = (0, u.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: o,
            errorMessage: e.errorMessage || s
        });
    f.set(n, {
        name: i,
        descriptionId: h.id,
        errorMessageId: _.id,
        validationBehavior: a
    });
    let m = (0, l.zL)(e, { labelable: !0 });
    return {
        groupProps: (0, l.dG)(m, {
            role: 'group',
            'aria-disabled': r || void 0,
            ...p
        }),
        labelProps: d,
        descriptionProps: h,
        errorMessageProps: _,
        isInvalid: o,
        validationErrors: s,
        validationDetails: c
    };
}
function h(e, n, r) {
    var a, s;
    let l = (0, c.l)({
            isReadOnly: e.isReadOnly || n.isReadOnly,
            isSelected: n.isSelected(e.value),
            onChange(r) {
                r ? n.addValue(e.value) : n.removeValue(e.value), e.onChange && e.onChange(r);
            }
        }),
        { name: u, descriptionId: p, errorMessageId: h, validationBehavior: _ } = f.get(n);
    _ = null !== (a = e.validationBehavior) && void 0 !== a ? a : _;
    let { realtimeValidation: m } = (0, o.Q3)({
            ...e,
            value: l.isSelected,
            name: void 0,
            validationBehavior: 'aria'
        }),
        g = (0, i.useRef)(o.PS),
        E = () => {
            n.setInvalid(e.value, m.isInvalid ? m : g.current);
        };
    (0, i.useEffect)(E);
    let v = n.realtimeValidation.isInvalid ? n.realtimeValidation : m,
        y = 'native' === _ ? n.displayValidation : v,
        b = d(
            {
                ...e,
                isReadOnly: e.isReadOnly || n.isReadOnly,
                isDisabled: e.isDisabled || n.isDisabled,
                name: e.name || u,
                isRequired: null !== (s = e.isRequired) && void 0 !== s ? s : n.isRequired,
                validationBehavior: _,
                [o.tL]: {
                    realtimeValidation: v,
                    displayValidation: y,
                    resetValidation: n.resetValidation,
                    commitValidation: n.commitValidation,
                    updateValidation(e) {
                        (g.current = e), E();
                    }
                }
            },
            l,
            r
        );
    return {
        ...b,
        inputProps: {
            ...b.inputProps,
            'aria-describedby': [e['aria-describedby'], n.isInvalid ? h : null, p].filter(Boolean).join(' ') || void 0
        }
    };
}
