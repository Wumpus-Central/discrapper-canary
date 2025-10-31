n.d(t, { Z: () => a }), n(388685);
var r = n(647438),
    i = n(872175),
    l = n(442837),
    o = n(299570),
    s = n(960861);
function a(e, t) {
    let { lastPickerAction: n, lastPickerError: a } = (0, l.e7)([s.ZP], () => s.ZP.getPickerState()),
        [c, d] = r.useState(!1),
        u = (0, i.Z)(e),
        f = (0, i.Z)(t);
    return (
        (0, s.kE)(),
        r.useEffect(() => {
            c
                ? n === s.Uc.Update
                    ? u.current()
                    : n === s.Uc.Cancel && ((0, o.t)(), f.current())
                : (null == n || n === s.Uc.Present) && d(!0);
        }, [c, n, u, f]),
        {
            lastPickerAction: n,
            lastPickerError: a,
        }
    );
}
