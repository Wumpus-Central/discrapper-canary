n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(299570),
    s = n(960861);
function o(e, t) {
    let { lastPickerAction: n, lastPickerError: o } = (0, i.e7)([s.ZP], () => s.ZP.getPickerState()),
        [a, c] = r.useState(!1);
    return (
        (0, s.kE)(),
        r.useEffect(() => {
            a ? (n === s.Uc.Update ? e() : n === s.Uc.Cancel && ((0, l.t)(), t())) : (null == n || n === s.Uc.Present) && c(!0);
        }, [a, n, e, t]),
        {
            lastPickerAction: n,
            lastPickerError: o
        }
    );
}
