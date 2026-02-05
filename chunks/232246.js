n.d(t, { A: () => r }), n(321073);
var l = n(311907),
    i = n(233993),
    s = n(808728),
    a = n(576705);
function r(e) {
    let t = e?.id ?? null;
    return (0, l.yK)(
        [s.Ay, a.A],
        () =>
            s.Ay.getChannels(t)[s.vM].reduce((e, t) => {
                let n = t.channel;
                return (
                    n.isGuildStageVoice() &&
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A;
                            return !!e.isGuildStageVoice() && t.can(i.QY, e);
                        })(t.channel, a.A) &&
                        e.push(n),
                    e
                );
            }, []),
        [t],
    );
}
