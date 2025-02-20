n.d(t, { ZP: () => l });
var r = n(829750),
    i = n(981631);
function l(e) {
    let { channel: t, locked: n, video: l, selected: o } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                { limit: o } = (0, r.Z)(t),
                a = -1;
            return (t.userLimit > 0 && (a = t.userLimit), n && o > 0 && (a = a > 0 ? Math.min(a, o) : o), l && a === i.xGv) ? 0 : a;
        })({
            channel: t,
            video: l
        }) > 0 &&
        !n &&
        !o
    );
}
