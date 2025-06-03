n.d(t, { Z: () => a }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(237617),
    s = n(299570),
    o = n(960861);
function a(e, t) {
    let { lastPickerAction: n, lastPickerError: a } = (0, i.e7)([o.ZP], () => o.ZP.getPickerState()),
        [c, d] = r.useState(!1),
        u = (0, l.Z)(e),
        f = (0, l.Z)(t);
    return (
        (0, o.kE)(),
        r.useEffect(() => {
            c ? (n === o.Uc.Update ? u.current() : n === o.Uc.Cancel && ((0, s.t)(), f.current())) : (null == n || n === o.Uc.Present) && d(!0);
        }, [c, n, u, f]),
        {
            lastPickerAction: n,
            lastPickerError: a
        }
    );
}
