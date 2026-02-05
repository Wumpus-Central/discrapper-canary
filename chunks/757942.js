n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(735438),
    r = n.n(s),
    a = n(397927),
    l = n(310953),
    o = n(366811),
    c = n(808728),
    d = n(967198),
    u = n(711014),
    _ = n(645959),
    m = n(203982),
    A = n(265422),
    g = n(652215),
    E = n(790782);
function h(e, t) {
    return [
        { resourceId: e, type: E.P.GUILD_EVENT },
        ...(e === g.ME
            ? _.default.getPrivateChannelIds()
            : (0, l.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
}
let p = r().throttle(function (e, t) {
    var s;
    let r,
        l,
        _,
        {
            channelPredicate: E = () => !0,
            guildPredicate: p = () => !0,
            guildFeaturePredicate: C = () => !1,
            ensureChatIsVisible: x = () => !1,
            withVoiceChannels: T = !1,
        } = t,
        I = o.A.getState().guildId ?? g.ME,
        S = o.A.getState().channelId,
        f =
            ((s = I),
            (l = (r = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(s)),
            e > 0
                ? r.slice(l).concat(r.slice(0, l), s)
                : (r.splice(l, 0, s), r.slice(l + 1).concat(r.slice(0, l + 1)))),
        N = e > 0 ? 0 : f.length - 1,
        b = h(I, T),
        R = b.indexOf(S) + e;
    for (; null != I && "" !== I; ) {
        if (((_ = b[R]), p(I)))
            for (; null != _ && "" !== _; ) {
                if ("string" == typeof _) {
                    if (E(I, _)) return (0, A.i)(I, _, !1, x(I, _));
                } else if ("object" == typeof _ && C(_.resourceId, _.type))
                    return (
                        I !== d.A.getGuildId() && (0, A.i)(I, c.Ay.getDefaultChannel(I)?.id),
                        (0, a.mMO)(async () => {
                            let { default: e } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(
                                n.bind(n, 926956),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, guildId: I });
                        })
                    );
                (R += e), (_ = b[R]);
            }
        if (((N += e), null == (I = f[N]) || "" === I)) break;
        (b = h(I, T)), (R = e < 0 ? b.length - 1 : 0);
    }
    m._.dispatch(g.jej.SHAKE_APP, { duration: 200, intensity: 2 });
}, g.ugG);
