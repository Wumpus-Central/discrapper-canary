l.d(t, { Z: () => a }), l(47120);
var r = l(192379),
    i = l(442837),
    s = l(299570),
    n = l(960861);
function a(e, t) {
    let { lastPickerAction: l, lastPickerError: a } = (0, i.e7)([n.ZP], () => n.ZP.getPickerState()),
        [c, o] = r.useState(!1);
    return (
        (0, n.kE)(),
        r.useEffect(() => {
            c ? (l === n.Uc.Update ? e() : l === n.Uc.Cancel && ((0, s.t)(), t())) : (null == l || l === n.Uc.Present) && o(!0);
        }, [c, l, e, t]),
        {
            lastPickerAction: l,
            lastPickerError: a
        }
    );
}
