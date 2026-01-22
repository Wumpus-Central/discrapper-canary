n.d(t, { A: () => a }), n(321073);
var l = n(311907),
    r = n(233993),
    i = n(808728),
    s = n(576705);
function a(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : null;
    return (0, l.yK)(
        [i.Ay, s.A],
        () =>
            i.Ay.getChannels(n)[i.vM].reduce((e, t) => {
                let n = t.channel;
                return (
                    n.isGuildStageVoice() &&
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A;
                            return !!e.isGuildStageVoice() && t.can(r.QY, e);
                        })(t.channel, s.A) &&
                        e.push(n),
                    e
                );
            }, []),
        [n],
    );
}
