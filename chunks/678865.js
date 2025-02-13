n.d(t, { Z: () => s }), n(627341);
var l = n(278074),
    a = n(481060),
    i = n(695346);
function s() {
    let e = i.co.getSetting();
    return (0, l.EQ)(e)
        .with(a.Skl.IDLE, () => a.Skl.IDLE)
        .with(a.Skl.DND, () => a.Skl.DND)
        .with(a.Skl.INVISIBLE, () => a.Skl.INVISIBLE)
        .otherwise(() => a.Skl.ONLINE);
}
