t.d(n, { q: () => s }), t(724458), t(653041);
var l = t(442837),
    i = t(146085),
    a = t(984933),
    r = t(496675);
function s(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
    return (0, l.Wu)(
        [a.ZP, r.Z],
        () =>
            a.ZP.getChannels(t)[a.Zb].reduce((e, n) => {
                let t = n.channel;
                return (
                    t.isGuildStageVoice() &&
                        (function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                            return !!e.isGuildStageVoice() && n.can(i.yP, e);
                        })(n.channel, r.Z) &&
                        e.push(t),
                    e
                );
            }, []),
        [t]
    );
}
