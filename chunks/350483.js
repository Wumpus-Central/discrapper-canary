t.d(n, { Z: () => A }), t(47120);
var i = t(200651);
t(192379);
var r = t(392711),
    s = t.n(r),
    l = t(481060),
    o = t(358230),
    a = t(905423),
    d = t(984933),
    c = t(914010),
    u = t(771845),
    E = t(55589),
    p = t(585483),
    b = t(475468),
    C = t(981631),
    h = t(490897);
function g(e, n) {
    return [
        {
            resourceId: e,
            type: h.W.GUILD_EVENT
        },
        ...(e === C.ME
            ? E.Z.getPrivateChannelIds()
            : (0, o.Z)(e, {
                  withVoiceChannels: n,
                  withCurrentVoiceChannel: !0
              }).map((e) => e.id))
    ];
}
let A = s().throttle(function (e, n) {
    var r, s;
    let o,
        { channelPredicate: E = () => !0, guildPredicate: h = () => !0, guildFeaturePredicate: A = () => !1, ensureChatIsVisible: S = () => !1, withVoiceChannels: _ = !1 } = n,
        m = null !== (r = a.Z.getState().guildId) && void 0 !== r ? r : C.ME,
        I = a.Z.getState().channelId,
        f = (function (e, n) {
            let t = [C.ME, ...u.ZP.getFlattenedGuildIds()],
                i = t.indexOf(e);
            return n > 0 ? t.slice(i).concat(t.slice(0, i), e) : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)));
        })(m, e),
        L = e > 0 ? 0 : f.length - 1,
        O = g(m, _),
        N = O.indexOf(I) + e;
    for (; null != m && '' !== m; ) {
        if (((o = O[N]), h(m)))
            for (; null != o && '' !== o; ) {
                if ('string' == typeof o) {
                    if (E(m, o)) return (0, b.K)(m, o, !1, S(m, o));
                } else if ('object' == typeof o && A(o.resourceId, o.type))
                    return (
                        m !== c.Z.getGuildId() && (0, b.K)(m, null === (s = d.ZP.getDefaultChannel(m)) || void 0 === s ? void 0 : s.id),
                        (0, l.ZDy)(async () => {
                            let { default: e } = await Promise.all([t.e('22347'), t.e('56236'), t.e('14509')]).then(t.bind(t, 17671));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: m
                                });
                        })
                    );
                (N += e), (o = O[N]);
            }
        if (((L += e), null == (m = f[L]) || '' === m)) break;
        (O = g(m, _)), (N = e < 0 ? O.length - 1 : 0);
    }
    p.S.dispatch(C.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, C.aZC);
