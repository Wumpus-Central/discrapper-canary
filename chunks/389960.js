var i = n(855986),
    r = n(46653),
    l = n(754712),
    s = n(977997);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Ay,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
        a = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
    return { selfDeaf: n.isSelfDeaf(), deaf: a?.deaf ?? !1 };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.cf)([s.A, l.Ay, r.default], () => a(e, s.A, l.Ay, r.default), [e]);
        },
        N: a,
    },
);
