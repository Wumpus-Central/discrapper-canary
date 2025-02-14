l.d(n, { q: () => s }), l(724458), l(653041);
var t = l(442837),
    i = l(146085),
    a = l(984933),
    r = l(496675);
function s(e) {
    var n;
    let l = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
    return (0, t.Wu)(
        [a.ZP, r.Z],
        () =>
            a.ZP.getChannels(l)[a.Zb].reduce((e, n) => {
                let l = n.channel;
                return (
                    l.isGuildStageVoice() &&
                        (function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                            return !!e.isGuildStageVoice() && n.can(i.yP, e);
                        })(n.channel, r.Z) &&
                        e.push(l),
                    e
                );
            }, []),
        [l]
    );
}
