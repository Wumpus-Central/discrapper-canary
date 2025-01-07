r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(846519),
    o = r(211266);
function l(e, n) {
    let [r, i] = (0, a.useState)(e),
        l = (0, o.Z)(() => new s.V7());
    return (
        (0, a.useEffect)(() => () => l.stop(), [l]),
        [
            r,
            (0, a.useCallback)(
                (r) => {
                    i(r), r !== e && l.start(n, () => i(e));
                },
                [n, e, l]
            )
        ]
    );
}
