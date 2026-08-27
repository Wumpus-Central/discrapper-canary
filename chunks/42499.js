i.d(e, { K: () => a });
var n = i(17928),
    l = i(960960);
function a(t, e) {
    let i = (0, n.bG)([l.A], () => l.A.getWidget(t, e.type)?.boost_price ?? null, [t, e.type]);
    return e.locked ? { boostPrice: i } : void 0;
}
