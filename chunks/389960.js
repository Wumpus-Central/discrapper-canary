var i = n(855986),
    l = n(46653),
    r = n(718197),
    s = n(977997);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Ay,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.default,
        a = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
    return { selfDeaf: n.isSelfDeaf(), deaf: a?.deaf ?? !1 };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.cf)([s.A, r.Ay, l.default], () => a(e, s.A, r.Ay, l.default), [e]);
        },
        N: a,
    },
);
