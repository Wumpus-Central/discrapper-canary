n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    s = n.n(r),
    a = n(481060),
    l = n(358230),
    o = n(905423),
    c = n(984933),
    d = n(914010),
    u = n(771845),
    m = n(55589),
    g = n(585483),
    h = n(475468),
    p = n(981631),
    x = n(490897);
function f(e, t) {
    var n, i;
    return [
        {
            resourceId: e,
            type: x.W.GUILD_EVENT
        },
        ...((n = e),
        (i = t),
        n === p.ME
            ? m.Z.getPrivateChannelIds()
            : (0, l.Z)(n, {
                  withVoiceChannels: i,
                  withCurrentVoiceChannel: !0
              }).map((e) => e.id))
    ];
}
t.Z = s().throttle(function (e, t) {
    var r, s;
    let l,
        { channelPredicate: m = () => !0, guildPredicate: x = () => !0, guildFeaturePredicate: E = () => !1, ensureChatIsVisible: _ = () => !1, withVoiceChannels: C = !1 } = t,
        T = null !== (r = o.Z.getState().guildId) && void 0 !== r ? r : p.ME,
        S = o.Z.getState().channelId,
        b = (function (e, t) {
            let n = [p.ME, ...u.ZP.getFlattenedGuildIds()],
                i = n.indexOf(e);
            return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
        })(T, e),
        I = e > 0 ? 0 : b.length - 1,
        N = f(T, C),
        v = N.indexOf(S) + e;
    for (; null != T && '' !== T; ) {
        if (((l = N[v]), x(T)))
            for (; null != l && '' !== l; ) {
                if ('string' == typeof l) {
                    if (m(T, l)) return (0, h.K)(T, l, !1, _(T, l));
                } else if ('object' == typeof l && E(l.resourceId, l.type))
                    return (
                        T !== d.Z.getGuildId() && (0, h.K)(T, null === (s = c.ZP.getDefaultChannel(T)) || void 0 === s ? void 0 : s.id),
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('22347'), n.e('56236'), n.e('50260')]).then(n.bind(n, 17671));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    guildId: T
                                });
                        })
                    );
                (v += e), (l = N[v]);
            }
        if (((I += e), null == (T = b[I]) || '' === T)) break;
        (N = f(T, C)), (v = e < 0 ? N.length - 1 : 0);
    }
    g.S.dispatch(p.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, p.aZC);
