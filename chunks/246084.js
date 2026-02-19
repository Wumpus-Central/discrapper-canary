"use strict";
n.d(t, { Ay: () => l });
var i = n(405018),
    s = n(652215);
function l(e) {
    let { channel: t, locked: n, video: l, selected: r } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                { limit: r } = (0, i.A)(t),
                a = -1;
            return (t.userLimit > 0 && (a = t.userLimit),
            n && r > 0 && (a = a > 0 ? Math.min(a, r) : r),
            l && a === s.RCc)
                ? 0
                : a;
        })({ channel: t, video: l }) > 0 &&
        !n &&
        !r
    );
}
