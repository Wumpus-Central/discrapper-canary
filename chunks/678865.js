n.d(t, { Z: () => i }), n(627341);
var r = n(278074),
    l = n(481060),
    a = n(695346);
function i() {
    let e = a.co.getSetting();
    return (0, r.EQ)(e)
        .with(l.Skl.IDLE, () => l.Skl.IDLE)
        .with(l.Skl.DND, () => l.Skl.DND)
        .with(l.Skl.INVISIBLE, () => l.Skl.INVISIBLE)
        .otherwise(() => l.Skl.ONLINE);
}
