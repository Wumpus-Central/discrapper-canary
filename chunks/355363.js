n.d(t, { ZP: () => r });
var i = n(829750),
    l = n(981631);
function r(e) {
    let { channel: t, locked: n, video: r, selected: o } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: r = !0 } = e,
                { limit: o } = (0, i.Z)(t),
                a = -1;
            return (t.userLimit > 0 && (a = t.userLimit), n && o > 0 && (a = a > 0 ? Math.min(a, o) : o), r && a === l.xGv) ? 0 : a;
        })({
            channel: t,
            video: r
        }) > 0 &&
        !n &&
        !o
    );
}
