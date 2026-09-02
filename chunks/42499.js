l.d(t, { K: () => a });
var i = l(17928),
    n = l(960960);
function a(e, t) {
    let l = (0, i.bG)([n.A], () => n.A.getWidget(e, t.type)?.boost_price ?? null, [e, t.type]);
    return t.locked ? { boostPrice: l } : void 0;
}
