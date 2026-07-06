s.d(t, { q: () => o });
var i = s(284054),
    l = s(260431),
    r = s(318473);
function o(e, t, s) {
    let { isSelected: o } = t,
        { isPressed: a, buttonProps: d } = (0, i.s)({ ...e, onPress: (0, l.c)(t.toggle, e.onPress) }, s);
    return {
        isPressed: a,
        isSelected: o,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, r.v)(d, { "aria-pressed": o }),
    };
}
