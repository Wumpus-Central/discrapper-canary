r.d(n, {
    O: function () {
        return s;
    }
});
var i = r(661763),
    a = r(662845),
    o = r(921336);
function s(e, n, r) {
    let { isDisabled: s = !1, isReadOnly: l = !1, value: u, name: c, children: d, 'aria-label': f, 'aria-labelledby': p, validationState: h = 'valid', isInvalid: _ } = e,
        m = (e) => {
            e.stopPropagation(), n.setSelected(e.target.checked);
        },
        g = null != f || null != p;
    !(null != d) && !g && console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    let { pressProps: E, isPressed: v } = (0, o.r7)({ isDisabled: s }),
        { pressProps: y, isPressed: b } = (0, o.r7)({
            isDisabled: s || l,
            onPress() {
                n.toggle();
            }
        }),
        { focusableProps: I } = (0, a.kc)(e, r),
        T = (0, i.dG)(E, I),
        S = (0, i.zL)(e, { labelable: !0 });
    return (
        (0, i.y$)(r, n.isSelected, n.setSelected),
        {
            labelProps: (0, i.dG)(y, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, i.dG)(S, {
                'aria-invalid': _ || 'invalid' === h || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-controls': e['aria-controls'],
                'aria-readonly': l || void 0,
                onChange: m,
                disabled: s,
                ...(null == u ? {} : { value: u }),
                name: c,
                type: 'checkbox',
                ...T
            }),
            isSelected: n.isSelected,
            isPressed: v || b,
            isDisabled: s,
            isReadOnly: l,
            isInvalid: _ || 'invalid' === h
        }
    );
}
