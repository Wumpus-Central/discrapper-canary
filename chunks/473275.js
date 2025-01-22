r.d(n, {
    n: function () {
        return s;
    }
});
var i = r(661763),
    a = r(662845),
    o = r(921336);
function s(e, n) {
    let { elementType: r = 'a', onPress: s, onPressStart: l, onPressEnd: u, onClick: c, isDisabled: d, ...f } = e,
        p = {};
    'a' !== r &&
        (p = {
            role: 'link',
            tabIndex: d ? void 0 : 0
        });
    let { focusableProps: h } = (0, a.kc)(e, n),
        { pressProps: _, isPressed: m } = (0, o.r7)({
            onPress: s,
            onPressStart: l,
            onPressEnd: u,
            isDisabled: d,
            ref: n
        }),
        g = (0, i.zL)(f, {
            labelable: !0,
            isLink: 'a' === r
        }),
        E = (0, i.dG)(h, _),
        v = (0, i.tv)();
    return {
        isPressed: m,
        linkProps: (0, i.dG)(g, {
            ...E,
            ...p,
            'aria-disabled': d || void 0,
            'aria-current': e['aria-current'],
            onClick: (e) => {
                var n;
                null === (n = _.onClick) || void 0 === n || n.call(_, e), c && (c(e), console.warn('onClick is deprecated, please use onPress')), !v.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0, i.b0)(e.currentTarget, e) && (e.preventDefault(), v.open(e.currentTarget, e));
            }
        })
    };
}
