n.d(t, { Z: () => E }), n(47120);
var i = n(200651);
n(192379);
var s = n(392711),
    r = n.n(s),
    l = n(481060),
    a = n(358230),
    o = n(905423),
    c = n(984933),
    d = n(914010),
    u = n(771845),
    m = n(55589),
    h = n(585483),
    g = n(475468),
    _ = n(981631),
    x = n(490897);
function p(e, t) {
    return [
        {
            resourceId: e,
            type: x.W.GUILD_EVENT
        },
        ...(e === _.ME
            ? m.Z.getPrivateChannelIds()
            : (0, a.Z)(e, {
                  withVoiceChannels: t,
                  withCurrentVoiceChannel: !0
              }).map((e) => e.id))
    ];
}
let E = r().throttle(function (e, t) {
    var s, r;
    let a,
        { channelPredicate: m = () => !0, guildPredicate: x = () => !0, guildFeaturePredicate: E = () => !1, ensureChatIsVisible: C = () => !1, withVoiceChannels: f = !1 } = t,
        T = null !== (s = o.Z.getState().guildId) && void 0 !== s ? s : _.ME,
        N = o.Z.getState().channelId,
        S = (function (e, t) {
            let n = [_.ME, ...u.ZP.getFlattenedGuildIds()],
                i = n.indexOf(e);
            return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
        })(T, e),
        I = e > 0 ? 0 : S.length - 1,
        b = p(T, f),
        v = b.indexOf(N) + e;
    for (; null != T && '' !== T; ) {
        if (((a = b[v]), x(T)))
            for (; null != a && '' !== a; ) {
                if ('string' == typeof a) {
                    if (m(T, a)) return (0, g.K)(T, a, !1, C(T, a));
                } else if ('object' == typeof a && E(a.resourceId, a.type))
                    return (
                        T !== d.Z.getGuildId() && (0, g.K)(T, null === (r = c.ZP.getDefaultChannel(T)) || void 0 === r ? void 0 : r.id),
                        (0, l.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('22347'), n.e('56236'), n.e('50260')]).then(n.bind(n, 17671));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    guildId: T
                                });
                        })
                    );
                (v += e), (a = b[v]);
            }
        if (((I += e), null == (T = S[I]) || '' === T)) break;
        (b = p(T, f)), (v = e < 0 ? b.length - 1 : 0);
    }
    h.S.dispatch(_.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, _.aZC);
