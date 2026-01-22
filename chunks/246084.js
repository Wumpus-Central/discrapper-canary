n.d(t, { Ay: () => i });
var r = n(405018),
    l = n(652215);
function i(e) {
    let { channel: t, locked: n, video: i, selected: a } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                { limit: a } = (0, r.A)(t),
                s = -1;
            return (t.userLimit > 0 && (s = t.userLimit),
            n && a > 0 && (s = s > 0 ? Math.min(s, a) : a),
            i && s === l.RCc)
                ? 0
                : s;
        })({
            channel: t,
            video: i,
        }) > 0 &&
        !n &&
        !a
    );
}
