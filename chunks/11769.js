i.d(e, { k: () => s });
var n = i(70956),
    r = i(388032);
function s(t) {
    if (t >= n.Z.Seconds.HOUR) {
        let e = Math.floor(t / n.Z.Seconds.HOUR),
            i = Math.floor((t - e * n.Z.Seconds.HOUR) / n.Z.Seconds.MINUTE),
            s = t - e * n.Z.Seconds.HOUR - i * n.Z.Seconds.MINUTE;
        return r.intl.formatToPlainString(r.t['3hz51N'], {
            hours: e,
            minutes: i,
            seconds: s
        });
    }
    if (!(t >= 60)) return r.intl.formatToPlainString(r.t.IWntYm, { seconds: t });
    {
        let e = Math.floor(t / 60);
        return r.intl.formatToPlainString(r.t.sY3wlJ, {
            minutes: e,
            seconds: t - 60 * e
        });
    }
}
