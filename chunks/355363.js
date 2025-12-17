n.d(t, { ZP: () => l });
var r = n(829750),
    i = n(981631);
function l(e) {
    let { channel: t, locked: n, video: l, selected: a } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                { limit: a } = (0, r.Z)(t),
                o = -1;
            return (t.userLimit > 0 && (o = t.userLimit),
            n && a > 0 && (o = o > 0 ? Math.min(o, a) : a),
            l && o === i.xGv)
                ? 0
                : o;
        })({
            channel: t,
            video: l,
        }) > 0 &&
        !n &&
        !a
    );
}
