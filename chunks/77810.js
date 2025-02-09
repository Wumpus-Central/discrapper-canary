t.d(n, { q: () => a }), t(724458), t(653041);
var l = t(442837),
    i = t(146085),
    r = t(984933),
    s = t(496675);
function a(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
    return (0, l.Wu)(
        [r.ZP, s.Z],
        () =>
            r.ZP.getChannels(t)[r.Zb].reduce((e, n) => {
                let t = n.channel;
                return (
                    t.isGuildStageVoice() &&
                        (function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z;
                            return !!e.isGuildStageVoice() && n.can(i.yP, e);
                        })(n.channel, s.Z) &&
                        e.push(t),
                    e
                );
            }, []),
        [t]
    );
}
