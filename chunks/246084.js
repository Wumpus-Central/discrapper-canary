n.d(t, { Ay: () => s });
var i = n(405018),
    l = n(652215);
function s(e) {
    let { channel: t, locked: n, video: s, selected: a } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: s = !0 } = e,
                { limit: a } = (0, i.A)(t),
                r = -1;
            return (t.userLimit > 0 && (r = t.userLimit),
            n && a > 0 && (r = r > 0 ? Math.min(r, a) : a),
            s && r === l.RCc)
                ? 0
                : r;
        })({ channel: t, video: s }) > 0 &&
        !n &&
        !a
    );
}
