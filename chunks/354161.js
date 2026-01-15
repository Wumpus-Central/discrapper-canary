n.d(t, { k: () => o });
var r = n(288783),
    i = n(929767),
    a = n(158821);
function o(e, t, n) {
    let { isSelected: o } = t,
        { isPressed: s, buttonProps: l } = (0, r.U)(
            {
                ...e,
                onPress: (0, i.t)(t.toggle, e.onPress),
            },
            n,
        );
    return {
        isPressed: s,
        isSelected: o,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, a.d)(l, { "aria-pressed": o }),
    };
}
