s.d(t, { A: () => o });
var r = s(64700),
    i = s(66455),
    n = s(311907),
    l = s(997630),
    a = s(571044);
function o(e, t) {
    let { lastPickerAction: s, lastPickerError: o } = (0, n.bG)([a.Ay], () => a.Ay.getPickerState()),
        [c, d] = r.useState(!1),
        u = (0, i.A)(e),
        f = (0, i.A)(t);
    return (
        (0, a.XA)(),
        r.useEffect(() => {
            c
                ? s === a.JA.Update
                    ? u.current()
                    : s === a.JA.Cancel && ((0, l.E)(), f.current())
                : (null == s || s === a.JA.Present) && d(!0);
        }, [c, s, u, f]),
        { lastPickerAction: s, lastPickerError: o }
    );
}
