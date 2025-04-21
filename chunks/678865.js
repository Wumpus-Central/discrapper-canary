n.d(t, { Z: () => i }), n(314940);
var l = n(278074),
    r = n(481060),
    a = n(695346);
function i() {
    let e = a.co.getSetting();
    return (0, l.EQ)(e)
        .with(r.Skl.IDLE, () => r.Skl.IDLE)
        .with(r.Skl.DND, () => r.Skl.DND)
        .with(r.Skl.INVISIBLE, () => r.Skl.INVISIBLE)
        .otherwise(() => r.Skl.ONLINE);
}
