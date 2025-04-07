n.d(t, { Z: () => o }), n(314940);
var r = n(278074),
    a = n(481060),
    i = n(695346);
function o() {
    let e = i.co.getSetting();
    return (0, r.EQ)(e)
        .with(a.Skl.IDLE, () => a.Skl.IDLE)
        .with(a.Skl.DND, () => a.Skl.DND)
        .with(a.Skl.INVISIBLE, () => a.Skl.INVISIBLE)
        .otherwise(() => a.Skl.ONLINE);
}
