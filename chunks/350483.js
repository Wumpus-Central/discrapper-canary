e(47120);
var i = e(200651);
e(192379);
var o = e(392711),
    r = e.n(o),
    l = e(481060),
    d = e(358230),
    s = e(905423),
    u = e(984933),
    a = e(914010),
    c = e(771845),
    E = e(55589),
    C = e(585483),
    b = e(475468),
    A = e(981631),
    S = e(490897);
function p(n, t) {
    var e, i;
    return [
        {
            resourceId: n,
            type: S.W.GUILD_EVENT
        },
        ...((e = n),
        (i = t),
        e === A.ME
            ? E.Z.getPrivateChannelIds()
            : (0, d.Z)(e, {
                  withVoiceChannels: i,
                  withCurrentVoiceChannel: !0
              }).map((n) => n.id))
    ];
}
t.Z = r().throttle(function (n, t) {
    var o, r;
    let d,
        { channelPredicate: E = () => !0, guildPredicate: S = () => !0, guildFeaturePredicate: g = () => !1, ensureChatIsVisible: f = () => !1, withVoiceChannels: _ = !1 } = t,
        L = null !== (o = s.Z.getState().guildId) && void 0 !== o ? o : A.ME,
        O = s.Z.getState().channelId,
        I = (function (n, t) {
            let e = [A.ME, ...c.ZP.getFlattenedGuildIds()],
                i = e.indexOf(n);
            return t > 0 ? e.slice(i).concat(e.slice(0, i), n) : (e.splice(i, 0, n), e.slice(i + 1).concat(e.slice(0, i + 1)));
        })(L, n),
        T = n > 0 ? 0 : I.length - 1,
        h = p(L, _),
        N = h.indexOf(O) + n;
    for (; null != L && '' !== L; ) {
        if (((d = h[N]), S(L)))
            for (; null != d && '' !== d; ) {
                if ('string' == typeof d) {
                    if (E(L, d)) return (0, b.K)(L, d, !1, f(L, d));
                } else if ('object' == typeof d && g(d.resourceId, d.type))
                    return (
                        L !== a.Z.getGuildId() && (0, b.K)(L, null === (r = u.ZP.getDefaultChannel(L)) || void 0 === r ? void 0 : r.id),
                        (0, l.openModalLazy)(async () => {
                            let { default: n } = await Promise.all([e.e('18543'), e.e('22347'), e.e('56236'), e.e('98515')]).then(e.bind(e, 17671));
                            return (t) =>
                                (0, i.jsx)(n, {
                                    ...t,
                                    guildId: L
                                });
                        })
                    );
                (N += n), (d = h[N]);
            }
        if (((T += n), null == (L = I[T]) || '' === L)) break;
        (h = p(L, _)), (N = n < 0 ? h.length - 1 : 0);
    }
    C.S.dispatch(A.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, A.aZC);
