r.d(n, {
    Q: function () {
        return s;
    }
});
var i = r(192379),
    a = r(921336),
    o = r(661763);
function s(e, n, r) {
    let { validationBehavior: s, focus: l } = e;
    (0, o.bt)(() => {
        if ('native' === s && (null == r ? void 0 : r.current)) {
            let e = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            r.current.setCustomValidity(e), !r.current.hasAttribute('title') && (r.current.title = ''), !n.realtimeValidation.isInvalid && n.updateValidation(u(r.current));
        }
    });
    let d = (0, o.iW)(() => {
            n.resetValidation();
        }),
        f = (0, o.iW)((e) => {
            var i, o;
            !n.displayValidation.isInvalid && n.commitValidation();
            let s = null == r ? void 0 : null === (i = r.current) || void 0 === i ? void 0 : i.form;
            !e.defaultPrevented && r && s && c(s) === r.current && (l ? l() : null === (o = r.current) || void 0 === o || o.focus(), (0, a._w)('keyboard')), e.preventDefault();
        }),
        p = (0, o.iW)(() => {
            n.commitValidation();
        });
    (0, i.useEffect)(() => {
        let e = null == r ? void 0 : r.current;
        if (!e) return;
        let n = e.form;
        return (
            e.addEventListener('invalid', f),
            e.addEventListener('change', p),
            null == n || n.addEventListener('reset', d),
            () => {
                e.removeEventListener('invalid', f), e.removeEventListener('change', p), null == n || n.removeEventListener('reset', d);
            }
        );
    }, [r, f, p, d, s]);
}
function l(e) {
    let n = e.validity;
    return {
        badInput: n.badInput,
        customError: n.customError,
        patternMismatch: n.patternMismatch,
        rangeOverflow: n.rangeOverflow,
        rangeUnderflow: n.rangeUnderflow,
        stepMismatch: n.stepMismatch,
        tooLong: n.tooLong,
        tooShort: n.tooShort,
        typeMismatch: n.typeMismatch,
        valueMissing: n.valueMissing,
        valid: n.valid
    };
}
function u(e) {
    return {
        isInvalid: !e.validity.valid,
        validationDetails: l(e),
        validationErrors: e.validationMessage ? [e.validationMessage] : []
    };
}
function c(e) {
    for (let n = 0; n < e.elements.length; n++) {
        let r = e.elements[n];
        if (!r.validity.valid) return r;
    }
    return null;
}
