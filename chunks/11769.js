n.d(t, { k: () => a });
var i = n(70956),
    r = n(388032);
function a(e) {
    if (e >= i.Z.Seconds.HOUR) {
        let t = Math.floor(e / i.Z.Seconds.HOUR),
            n = Math.floor((e - t * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
            a = e - t * i.Z.Seconds.HOUR - n * i.Z.Seconds.MINUTE;
        return r.intl.formatToPlainString(r.t['3hz51N'], {
            hours: t,
            minutes: n,
            seconds: a
        });
    }
    if (!(e >= 60)) return r.intl.formatToPlainString(r.t.IWntYm, { seconds: e });
    {
        let t = Math.floor(e / 60),
            n = e - 60 * t;
        return r.intl.formatToPlainString(r.t.sY3wlJ, {
            minutes: t,
            seconds: n
        });
    }
}
