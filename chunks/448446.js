r.d(n, {
    U: function () {
        return s;
    },
    k: function () {
        return l;
    }
});
var i = r(661763),
    a = r(662845),
    o = r(921336);
function s(e, n) {
    let r,
        { elementType: s = 'button', isDisabled: l, onPress: u, onPressStart: c, onPressEnd: d, onPressUp: f, onPressChange: p, preventFocusOnPress: h, allowFocusWhenDisabled: _, onClick: m, href: g, target: E, rel: v, type: y = 'button' } = e;
    r =
        'button' === s
            ? {
                  type: y,
                  disabled: l
              }
            : {
                  role: 'button',
                  tabIndex: l ? void 0 : 0,
                  href: 'a' === s && l ? void 0 : g,
                  target: 'a' === s ? E : void 0,
                  type: 'input' === s ? y : void 0,
                  disabled: 'input' === s ? l : void 0,
                  'aria-disabled': l && 'input' !== s ? l : void 0,
                  rel: 'a' === s ? v : void 0
              };
    let { pressProps: b, isPressed: I } = (0, o.r7)({
            onPressStart: c,
            onPressEnd: d,
            onPressChange: p,
            onPress: u,
            onPressUp: f,
            isDisabled: l,
            preventFocusOnPress: h,
            ref: n
        }),
        { focusableProps: T } = (0, a.kc)(e, n);
    _ && (T.tabIndex = l ? -1 : T.tabIndex);
    let S = (0, i.dG)(T, b, (0, i.zL)(e, { labelable: !0 }));
    return {
        isPressed: I,
        buttonProps: (0, i.dG)(r, S, {
            'aria-haspopup': e['aria-haspopup'],
            'aria-expanded': e['aria-expanded'],
            'aria-controls': e['aria-controls'],
            'aria-pressed': e['aria-pressed'],
            onClick: (e) => {
                m && (m(e), console.warn('onClick is deprecated, please use onPress'));
            }
        })
    };
}
function l(e, n, r) {
    let { isSelected: a } = n,
        { isPressed: o, buttonProps: l } = s(
            {
                ...e,
                onPress: (0, i.tS)(n.toggle, e.onPress)
            },
            r
        );
    return {
        isPressed: o,
        buttonProps: (0, i.dG)(l, { 'aria-pressed': a })
    };
}
