n.d(t, { Z: () => a }), n(388685);
var r = n(192379),
    i = n(442837),
    l = n(299570),
    s = n(960861);
function a(e, t) {
    let { lastPickerAction: n, lastPickerError: a } = (0, i.e7)([s.ZP], () => s.ZP.getPickerState()),
        [o, c] = r.useState(!1);
    return (
        (0, s.kE)(),
        r.useEffect(() => {
            o ? (n === s.Uc.Update ? e() : n === s.Uc.Cancel && ((0, l.t)(), t())) : (null == n || n === s.Uc.Present) && c(!0);
        }, [o, n, e, t]),
        {
            lastPickerAction: n,
            lastPickerError: a
        }
    );
}
