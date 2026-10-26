n.d(t, { u: () => h });
var l = n(582128),
    i = n(17928),
    u = n(308368),
    d = n(627363),
    a = n(616356),
    r = n(280450),
    s = n(486350),
    o = n(208284),
    A = n(435558),
    c = n.n(A),
    g = n(734057),
    p = n(696451),
    y = n(317525),
    b = n(576705),
    f = n(488926),
    S = n(652215),
    _ = n(25528);
function h(e, t) {
    var n;
    let { enabled: A } = o.A.useConfig({ guildId: t?.guild_id ?? "", location: "useRequestToStreamData" }),
        h = (0, i.bG)([r.default], () => r.default.getId()),
        R = (0, _.Ay)(e, t?.guild_id)[0],
        C = (0, i.bG)([a.A], () => null != a.A.getStreamForUser(e, t?.getGuildId())),
        E = (0, d.YY)(R?.application_id).data,
        G =
            ((n = t?.id),
            (0, i.bG)([b.A, g.A, p.Ay, y.A], () => {
                if (null == n) return !1;
                let t = g.A.getChannel(n);
                if (null == t) return !1;
                let l = b.A.can(S.xBc.SEND_MESSAGES, t),
                    i = p.Ay.getMember(t.guild_id, e),
                    u = c().keyBy(y.A.getManyRoles(t.guild_id, i?.roles ?? []), "id"),
                    d = f.$3({ permission: S.xBc.STREAM, user: e, context: t, roles: u });
                return l && d;
            })),
        I = l.useCallback(
            (n) => {
                let { analyticsLocation: l } = n;
                null != t &&
                    (u.A.sendActivityInvite({
                        type: S.xL.STREAM_REQUEST,
                        channelId: t.id,
                        activity: R,
                        content: `<@${e}>`,
                        location: l,
                        targetUserId: e,
                    }),
                    (0, s.p)(e));
            },
            [t, R, e],
        ),
        k = h !== e && (null != R || A) && (null != E || A) && G && !C;
    return l.useMemo(() => (k ? { playingApplication: E, handleRequestToStream: I } : null), [k, E, I]);
}
