n.d(t, { A: () => s });
var i = n(17928),
    r = n(495544),
    a = n(969341),
    l = n(977997);
function s(e) {
    return (0, i.cf)(
        [l.A, a.Ay, r.default],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Ay,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    s = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
                return { selfDeaf: n.isSelfDeaf(), deaf: s?.deaf ?? !1 };
            })(e, l.A, a.Ay, r.default),
        [e],
    );
}
