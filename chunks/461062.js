r.d(t, { H: () => o });
var n = r(500243),
    i = r(582128);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { isReadOnly: t } = e,
        [r, o] = (0, n.P)(e.isSelected, e.defaultSelected || !1, e.onChange),
        [a] = (0, i.useState)(r);
    return {
        isSelected: r,
        defaultSelected: e.defaultSelected ?? a,
        setSelected: function (e) {
            t || o(e);
        },
        toggle: function () {
            t || o(!r);
        },
    };
}
