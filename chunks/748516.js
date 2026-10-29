t.d(s, { q: () => o });
var i = t(477692),
    d = t(685485),
    l = t(519837);
function o(e, s, t) {
    let { isSelected: o } = s,
        { isPressed: a, buttonProps: r } = (0, i.s)({ ...e, onPress: (0, d.c)(s.toggle, e.onPress) }, t);
    return {
        isPressed: a,
        isSelected: o,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, l.v)(r, { "aria-pressed": o }),
    };
}
