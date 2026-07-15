"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(280450),
    a = n(186295),
    s = n(977997);
function l(e) {
    return (0, i.cf)(
        [s.A, a.Ay, r.default],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Ay,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    l = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
                return { selfDeaf: n.isSelfDeaf(), deaf: l?.deaf ?? !1 };
            })(e, s.A, a.Ay, r.default),
        [e],
    );
}
