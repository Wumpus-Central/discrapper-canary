n.d(t, { Z: () => i }), n(627341);
var r = n(278074),
    a = n(481060),
    l = n(695346);
function i() {
    let e = l.co.getSetting();
    return (0, r.EQ)(e)
        .with(a.Skl.IDLE, () => a.Skl.IDLE)
        .with(a.Skl.DND, () => a.Skl.DND)
        .with(a.Skl.INVISIBLE, () => a.Skl.INVISIBLE)
        .otherwise(() => a.Skl.ONLINE);
}
