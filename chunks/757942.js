n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(735438),
    r = n.n(l),
    s = n(192308),
    o = n(310953),
    a = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    _ = n(645959),
    A = n(203982),
    E = n(265422),
    I = n(652215),
    h = n(790782);
function g(e, t) {
    return [
        { resourceId: e, type: h.P.GUILD_EVENT },
        ...(e === I.ME
            ? _.default.getPrivateChannelIds()
            : (0, o.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let C = r().throttle(function (e, t) {
    var l;
    let r,
        o,
        _,
        {
            channelPredicate: h = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: S = () => !1,
            withVoiceChannels: T = !1,
        } = t,
        N = a.A.getState().guildId ?? I.ME,
        b = a.A.getState().channelId,
        L =
            ((l = N),
            (o = (r = [I.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
                ? r.slice(o).concat(r.slice(0, o), l)
                : (r.splice(o, 0, l), r.slice(o + 1).concat(r.slice(0, o + 1)))),
        f = e > 0 ? 0 : L.length - 1,
        m = g(N, T),
        O = m.indexOf(b) + e;
    for (; null != N && "" !== N; ) {
        if (((_ = m[O]), C(N)))
            for (; null != _ && "" !== _; ) {
                if ("string" == typeof _) {
                    if (h(N, _)) return (0, E.i)(N, _, !1, S(N, _));
                } else if ("object" == typeof _ && p(_.resourceId, _.type))
                    return (
                        N !== c.A.getGuildId() && (0, E.i)(N, d.Ay.getDefaultChannel(N)?.id),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("51354"), n.e("7453"), n.e("19452")]).then(
                                n.bind(n, 926956),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, guildId: N });
                        })
                    );
                (O += e), (_ = m[O]);
            }
        if (((f += e), null == (N = L[f]) || "" === N)) break;
        (m = g(N, T)), (O = e < 0 ? m.length - 1 : 0);
    }
    A._.dispatch(I.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, I.ugG);
