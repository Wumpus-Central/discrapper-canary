n.d(t, { u: () => v });
var l = n(582128),
    i = n(855986),
    a = n(308368),
    r = n(627363),
    s = n(616356),
    o = n(46653),
    u = n(486350),
    c = n(208284),
    d = n(435558),
    m = n.n(d),
    A = n(734057),
    p = n(696451),
    h = n(317525),
    f = n(576705),
    g = n(488926),
    x = n(652215),
    I = n(25528);
function v(e, t) {
    var n;
    let { enabled: d } = c.A.useConfig({ guildId: t?.guild_id ?? "", location: "useRequestToStreamData" }),
        v = (0, i.bG)([o.default], () => o.default.getId()),
        T = (0, I.Ay)(e, t?.guild_id)[0],
        S = (0, i.bG)([s.A], () => null != s.A.getStreamForUser(e, t?.getGuildId())),
        y = (0, r.YY)(T?.application_id).data,
        N =
            ((n = t?.id),
            (0, i.bG)([f.A, A.A, p.Ay, h.A], () => {
                if (null == n) return !1;
                let t = A.A.getChannel(n);
                if (null == t || t.isGuildStageVoice()) return !1;
                let l = f.A.can(x.xBc.SEND_MESSAGES, t),
                    i = p.Ay.getMember(t.guild_id, e),
                    a = m().keyBy(h.A.getManyRoles(t.guild_id, i?.roles ?? []), "id"),
                    r = g.$3({ permission: x.xBc.STREAM, user: e, context: t, roles: a });
                return l && r;
            })),
        E = l.useCallback(
            (n) => {
                let { analyticsLocation: l } = n;
                null != t &&
                    (a.A.sendActivityInvite({
                        type: x.xL.STREAM_REQUEST,
                        channelId: t.id,
                        activity: T,
                        content: `<@${e}>`,
                        location: l,
                        targetUserId: e,
                    }),
                    (0, u.p)(e));
            },
            [t, T, e],
        ),
        C = v !== e && (null != T || d) && (null != y || d) && N && !S;
    return l.useMemo(() => (C ? { playingApplication: y, handleRequestToStream: E } : null), [C, y, E]);
}
