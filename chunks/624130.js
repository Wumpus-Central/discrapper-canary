r.d(t, { A: () => c }), r(896048);
var n = r(64700),
    l = r(66455),
    s = r(311907),
    i = r(997630),
    a = r(571044);
function c(e, t) {
    let { lastPickerAction: r, lastPickerError: c } = (0, s.bG)([a.Ay], () => a.Ay.getPickerState()),
        [o, d] = n.useState(!1),
        f = (0, l.A)(e),
        u = (0, l.A)(t);
    return (
        (0, a.XA)(),
        n.useEffect(() => {
            o
                ? r === a.JA.Update
                    ? f.current()
                    : r === a.JA.Cancel && ((0, i.E)(), u.current())
                : (null == r || r === a.JA.Present) && d(!0);
        }, [o, r, f, u]),
        {
            lastPickerAction: r,
            lastPickerError: c,
        }
    );
}
