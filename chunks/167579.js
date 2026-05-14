"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(495544),
    s = n(235058),
    a = n(977997);
function o(e) {
    return (0, i.cf)(
        [a.A, s.Ay, r.default],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    o = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
                return { selfDeaf: n.isSelfDeaf(), deaf: o?.deaf ?? !1 };
            })(e, a.A, s.Ay, r.default),
        [e],
    );
}
