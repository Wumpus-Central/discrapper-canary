t.d(r, { U: () => s });
var n = t(17928),
    i = t(918467),
    l = t(288106),
    a = t(202541);
function s() {
    let e = (0, n.bG)([i.A], () => i.A.getPromotionsForApplication(a.tv));
    return e?.find((e) => {
        var r;
        return (
            "1554541212982050847" === e.id && null != (r = e.rewardStatus) && (r === l.GM.EARNED || r === l.GM.CONSUMED)
        );
    });
}
