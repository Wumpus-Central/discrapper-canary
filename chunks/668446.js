n.d(t, {
    Sk: () => y,
    lF: () => O,
}),
    n(896048);
var r = n(64700),
    l = n(735438),
    i = n.n(l),
    a = n(311907),
    s = n(855687),
    o = n(143413),
    c = n(961350),
    u = n(734057),
    d = n(808728),
    f = n(498642),
    p = n(71393),
    h = n(186111),
    b = n(320501),
    g = n(576705),
    m = n(661191),
    A = n(652215);

function y(e, t) {
    return (0, a.cf)(
        [g.A],
        () => ({
            canInvite: (0, s.K)(g.A, t, e),
            canManageGuild: null != t && g.A.can(A.xBc.MANAGE_GUILD, t),
            canMessage: null != e && g.A.can(A.xBc.SEND_MESSAGES, e),
            canCreateChannel: null != t && g.A.can(A.xBc.MANAGE_CHANNELS, t),
        }),
        [t, e],
    );
}

function O(e) {
    var t;
    let n, l, s, g, y, O;
    return {
        guildPopulated:
            ((n = (0, a.bG)([u.A], () => u.A.getChannel(null == e ? void 0 : e.systemChannelId))),
            (l = (0, a.yK)([b.A], () => (null != n ? b.A.getMessages(n.id).toArray() : []))),
            (0, a.bG)([f.A], () => {
                var t;
                let n = null != (t = f.A.getMemberCount(null == e ? void 0 : e.id)) ? t : 0,
                    r = l.some((e) => e.type === A.lAJ.USER_JOIN);
                return n > 1 || r;
            }, [e, l])),
        guildMessaged:
            ((s = (0, a.bG)([u.A], () => (null != e ? u.A.getMutableBasicGuildChannelsForGuild(e.id) : null))),
            (t = r.useMemo(() => (null == s ? [] : i().values(s)), [s])),
            (g = (0, a.bG)([c.default], () => c.default.getId())),
            (0, a.bG)([b.A], () =>
                i().some(t, (e) => {
                    let t = b.A.getMessages(e.id).toArray();
                    return i().some(t, (e) => e.author.id === g && !(0, o.A)(e));
                }),
            )),
        guildPersonalized:
            ((y = (0, a.bG)([h.A], () => h.A.hasLayers())),
            (null == (O = (0, a.bG)([p.A], () => p.A.getGuild(null == e ? void 0 : e.id))) ? void 0 : O.icon) != null &&
                !y),
        guildChannelCreated: (0, a.bG)([d.Ay], () => {
            let t = d.Ay.getChannels(null == e ? void 0 : e.id),
                n = t[d.vM];

            function r(t) {
                return null != e && m.default.extractTimestamp(t.channel.id) - m.default.extractTimestamp(e.id) > 500;
            }
            return t[d.I6].some(r) || n.some(r);
        }, [e]),
    };
}
