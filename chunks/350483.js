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
    g = n(585483),
    h = n(475468),
    x = n(981631),
    _ = n(490897);
function p(e, t) {
    return [
        {
            resourceId: e,
            type: _.W.GUILD_EVENT
        },
        ...(e === x.ME
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
        { channelPredicate: m = () => !0, guildPredicate: _ = () => !0, guildFeaturePredicate: E = () => !1, ensureChatIsVisible: C = () => !1, withVoiceChannels: f = !1 } = t,
        T = null !== (s = o.Z.getState().guildId) && void 0 !== s ? s : x.ME,
        N = o.Z.getState().channelId,
        S = (function (e, t) {
            let n = [x.ME, ...u.ZP.getFlattenedGuildIds()],
                i = n.indexOf(e);
            return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
        })(T, e),
        I = e > 0 ? 0 : S.length - 1,
        b = p(T, f),
        v = b.indexOf(N) + e;
    for (; null != T && '' !== T; ) {
        if (((a = b[v]), _(T)))
            for (; null != a && '' !== a; ) {
                if ('string' == typeof a) {
                    if (m(T, a)) return (0, h.K)(T, a, !1, C(T, a));
                } else if ('object' == typeof a && E(a.resourceId, a.type))
                    return (
                        T !== d.Z.getGuildId() && (0, h.K)(T, null === (r = c.ZP.getDefaultChannel(T)) || void 0 === r ? void 0 : r.id),
                        (0, l.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('22347'), n.e('56236'), n.e('892')]).then(n.bind(n, 17671));
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
    g.S.dispatch(x.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, x.aZC);
