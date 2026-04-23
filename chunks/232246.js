l.d(t, { A: () => r }), l(321073);
var n = l(17928),
    i = l(233993),
    s = l(808728),
    a = l(576705);
function r(e) {
    let t = e?.id ?? null;
    return (0, n.yK)(
        [s.Ay, a.A],
        () =>
            s.Ay.getChannels(t)[s.vM].reduce((e, t) => {
                let l = t.channel;
                return (
                    l.isGuildStageVoice() &&
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A;
                            return !!e.isGuildStageVoice() && t.can(i.QY, e);
                        })(t.channel, a.A) &&
                        e.push(l),
                    e
                );
            }, []),
        [t],
    );
}
