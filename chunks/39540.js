n.d(t, { Z: () => o }), n(47120);
var r = n(192379),
    l = n(442837),
    i = n(299570),
    s = n(960861);
function o(e, t) {
    let { lastPickerAction: n, lastPickerError: o } = (0, l.e7)([s.ZP], () => s.ZP.getPickerState()),
        [a, c] = r.useState(!1);
    return (
        (0, s.kE)(),
        r.useEffect(() => {
            a ? (n === s.Uc.Update ? e() : n === s.Uc.Cancel && ((0, i.t)(), t())) : (null == n || n === s.Uc.Present) && c(!0);
        }, [a, n, e, t]),
        {
            lastPickerAction: n,
            lastPickerError: o
        }
    );
}
