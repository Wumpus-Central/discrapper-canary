t.d(r, { U: () => s });
var n = t(17928),
    l = t(918467),
    i = t(288106),
    a = t(202541);
function s() {
    let e = (0, n.bG)([l.A], () => l.A.getPromotionsForApplication(a.tv));
    return e?.find((e) => {
        var r;
        return (
            "1554541212982050847" === e.id && null != (r = e.rewardStatus) && (r === i.GM.EARNED || r === i.GM.CONSUMED)
        );
    });
}
