n.d(t, { Z: () => i }), n(314940);
var l = n(278074),
    a = n(481060),
    r = n(695346);
function i() {
    let e = r.co.getSetting();
    return (0, l.EQ)(e)
        .with(a.Skl.IDLE, () => a.Skl.IDLE)
        .with(a.Skl.DND, () => a.Skl.DND)
        .with(a.Skl.INVISIBLE, () => a.Skl.INVISIBLE)
        .otherwise(() => a.Skl.ONLINE);
}
