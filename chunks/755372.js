t.d(e, { b: () => r });
var i = t(876230),
    l = t(931853),
    o = t(105292);
function r(n) {
    let { playerState: e, pauseReason: t } = n;
    return e === i.Q6.PAUSED && (t === i.KB.FOCUS || t === i.KB.PICTURE_IN_PICTURE)
        ? o.intl.string(o.t.w6PeBF)
        : (0, l.u)(n);
}
