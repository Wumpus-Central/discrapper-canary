n.d(t, {
    A: () => s,
});
var r = n(311907),
    i = n(961350),
    l = n(430452),
    a = n(977997);

function s(e) {
    return (0, r.cf)(
        [a.A, l.A, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    o = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null != (t = null == o ? void 0 : o.deaf) && t,
                };
            })(e, a.A, l.A, i.default),
        [e],
    );
}
