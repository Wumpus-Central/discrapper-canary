t.d(e, { b: () => r });
var o = t(876230),
    i = t(931853),
    l = t(105292);
function r(n) {
    let { playerState: e, pauseReason: t } = n;
    return e === o.Q6.PAUSED && (t === o.KB.FOCUS || t === o.KB.PICTURE_IN_PICTURE)
        ? l.intl.string(l.t.w6PeBF)
        : (0, i.u)(n);
}
