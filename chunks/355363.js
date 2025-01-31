n.d(t, { ZP: () => r });
var i = n(829750),
    l = n(981631);
function r(e) {
    let { channel: t, locked: n, video: r, selected: a } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: r = !0 } = e,
                { limit: a } = (0, i.Z)(t),
                o = -1;
            return (t.userLimit > 0 && (o = t.userLimit), n && a > 0 && (o = o > 0 ? Math.min(o, a) : a), r && o === l.xGv) ? 0 : o;
        })({
            channel: t,
            video: r
        }) > 0 &&
        !n &&
        !a
    );
}
