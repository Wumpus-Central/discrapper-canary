n.d(t, { k: () => o });
var r = n(70956),
    i = n(388032);
function o(e) {
    if (e >= r.Z.Seconds.HOUR) {
        let t = Math.floor(e / r.Z.Seconds.HOUR),
            n = Math.floor((e - t * r.Z.Seconds.HOUR) / r.Z.Seconds.MINUTE),
            o = e - t * r.Z.Seconds.HOUR - n * r.Z.Seconds.MINUTE;
        return i.NW.formatToPlainString(i.t['3hz51N'], {
            hours: t,
            minutes: n,
            seconds: o
        });
    }
    if (!(e >= 60)) return i.NW.formatToPlainString(i.t.IWntYm, { seconds: e });
    {
        let t = Math.floor(e / 60),
            n = e - 60 * t;
        return i.NW.formatToPlainString(i.t.sY3wlJ, {
            minutes: t,
            seconds: n
        });
    }
}
