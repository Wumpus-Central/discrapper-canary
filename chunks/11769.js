r.d(n, {
    k: function () {
        return o;
    }
});
var i = r(70956),
    a = r(388032);
function o(e) {
    if (e >= i.Z.Seconds.HOUR) {
        let n = Math.floor(e / i.Z.Seconds.HOUR),
            r = Math.floor((e - n * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
            o = e - n * i.Z.Seconds.HOUR - r * i.Z.Seconds.MINUTE;
        return a.intl.formatToPlainString(a.t['3hz51N'], {
            hours: n,
            minutes: r,
            seconds: o
        });
    }
    if (!(e >= 60)) return a.intl.formatToPlainString(a.t.IWntYm, { seconds: e });
    {
        let n = Math.floor(e / 60),
            r = e - 60 * n;
        return a.intl.formatToPlainString(a.t.sY3wlJ, {
            minutes: n,
            seconds: r
        });
    }
}
