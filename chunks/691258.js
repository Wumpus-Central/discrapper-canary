n.d(e, { Z: () => s }), n(627341);
var a = n(278074),
    l = n(481060),
    i = n(695346);
function s() {
    let t = i.co.getSetting();
    return (0, a.EQ)(t)
        .with(l.Skl.IDLE, () => l.Skl.IDLE)
        .with(l.Skl.DND, () => l.Skl.DND)
        .with(l.Skl.INVISIBLE, () => l.Skl.INVISIBLE)
        .otherwise(() => l.Skl.ONLINE);
}
