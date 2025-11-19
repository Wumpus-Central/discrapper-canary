n.d(t, { Z: () => a }), n(388685);
var r = n(473749),
    i = n(872175),
    l = n(442837),
    s = n(299570),
    o = n(960861);
function a(e, t) {
    let { lastPickerAction: n, lastPickerError: a } = (0, l.e7)([o.ZP], () => o.ZP.getPickerState()),
        [c, d] = r.useState(!1),
        u = (0, i.Z)(e),
        f = (0, i.Z)(t);
    return (
        (0, o.kE)(),
        r.useEffect(() => {
            c
                ? n === o.Uc.Update
                    ? u.current()
                    : n === o.Uc.Cancel && ((0, s.t)(), f.current())
                : (null == n || n === o.Uc.Present) && d(!0);
        }, [c, n, u, f]),
        {
            lastPickerAction: n,
            lastPickerError: a,
        }
    );
}
