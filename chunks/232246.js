t.d(n, { A: () => l }), t(321073);
var i = t(17928),
    u = t(233993),
    c = t(808728),
    a = t(576705);
function l(e) {
    let n = e?.id ?? null;
    return (0, i.yK)(
        [c.Ay, a.A],
        () =>
            c.Ay.getChannels(n)[c.vM].reduce((e, n) => {
                let t = n.channel;
                return (
                    t.isGuildStageVoice() &&
                        (function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A;
                            return !!e.isGuildStageVoice() && n.can(u.QY, e);
                        })(n.channel, a.A) &&
                        e.push(t),
                    e
                );
            }, []),
        [n],
    );
}
