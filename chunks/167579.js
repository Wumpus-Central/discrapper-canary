n.d(t, { A: () => i });
var r = n(17928),
    a = n(495544),
    l = n(969341),
    u = n(977997);
function i(e) {
    return (0, r.cf)(
        [u.A, l.Ay, a.default],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Ay,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
                    i = null != e ? t.getVoiceState(e.getGuildId(), r.getId()) : null;
                return { selfDeaf: n.isSelfDeaf(), deaf: i?.deaf ?? !1 };
            })(e, u.A, l.Ay, a.default),
        [e],
    );
}
