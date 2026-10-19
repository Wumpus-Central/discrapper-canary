t.d(n, { b: () => r });
var i = t(876230),
    a = t(931853),
    o = t(105292);
function r(e) {
    let { playerState: n, pauseReason: t } = e;
    return n === i.Q6.PAUSED && (t === i.KB.FOCUS || t === i.KB.PICTURE_IN_PICTURE)
        ? o.intl.string(o.t.w6PeBF)
        : (0, a.u)(e);
}
