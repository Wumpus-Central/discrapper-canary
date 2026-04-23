n.d(t, { Sk: () => E, lF: () => C });
var i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(311907),
    r = n(855687),
    o = n(143413),
    c = n(961350),
    d = n(734057),
    u = n(808728),
    h = n(498642),
    m = n(71393),
    A = n(186111),
    g = n(320501),
    _ = n(576705),
    p = n(661191),
    f = n(652215);
function E(e, t) {
    return (0, s.cf)(
        [_.A],
        () => ({
            canInvite: (0, r.K)(_.A, t, e),
            canManageGuild: null != t && _.A.can(f.xBc.MANAGE_GUILD, t),
            canMessage: null != e && _.A.can(f.xBc.SEND_MESSAGES, e),
            canCreateChannel: null != t && _.A.can(f.xBc.MANAGE_CHANNELS, t),
        }),
        [t, e],
    );
}
function C(e) {
    var t;
    let n, l, r, _, E, C;
    return {
        guildPopulated:
            ((n = (0, s.bG)([d.A], () => d.A.getChannel(e?.systemChannelId))),
            (l = (0, s.yK)([g.A], () => (null != n ? g.A.getMessages(n.id).toArray() : []))),
            (0, s.bG)([h.A], () => {
                let t = h.A.getMemberCount(e?.id) ?? 0,
                    n = l.some((e) => e.type === f.lAJ.USER_JOIN);
                return t > 1 || n;
            }, [e, l])),
        guildMessaged:
            ((r = (0, s.bG)([d.A], () => (null != e ? d.A.getMutableBasicGuildChannelsForGuild(e.id) : null))),
            (t = i.useMemo(() => (null == r ? [] : a().values(r)), [r])),
            (_ = (0, s.bG)([c.default], () => c.default.getId())),
            (0, s.bG)([g.A], () =>
                a().some(t, (e) => {
                    let t = g.A.getMessages(e.id).toArray();
                    return a().some(t, (e) => e.author.id === _ && !(0, o.A)(e));
                }),
            )),
        guildPersonalized:
            ((E = (0, s.bG)([A.A], () => A.A.hasLayers())),
            (C = (0, s.bG)([m.A], () => m.A.getGuild(e?.id))),
            C?.icon != null && !E),
        guildChannelCreated: (0, s.bG)([u.Ay], () => {
            let t = u.Ay.getChannels(e?.id),
                n = t[u.vM];
            function i(t) {
                return null != e && p.default.extractTimestamp(t.channel.id) - p.default.extractTimestamp(e.id) > 500;
            }
            return t[u.I6].some(i) || n.some(i);
        }, [e]),
    };
}
