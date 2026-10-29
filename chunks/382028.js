i.d(t, { u: () => h });
var l = i(582128),
    n = i(17928),
    u = i(308368),
    d = i(627363),
    a = i(616356),
    r = i(280450),
    s = i(486350),
    o = i(208284),
    A = i(435558),
    c = i.n(A),
    g = i(734057),
    p = i(696451),
    y = i(317525),
    b = i(576705),
    f = i(488926),
    S = i(652215),
    _ = i(25528);
function h(e, t) {
    var i;
    let { enabled: A } = o.A.useConfig({ guildId: t?.guild_id ?? "", location: "useRequestToStreamData" }),
        h = (0, n.bG)([r.default], () => r.default.getId()),
        G = (0, _.Ay)(e, t?.guild_id)[0],
        R = (0, n.bG)([a.A], () => null != a.A.getStreamForUser(e, t?.getGuildId())),
        C = (0, d.YY)(G?.application_id).data,
        E =
            ((i = t?.id),
            (0, n.bG)([b.A, g.A, p.Ay, y.A], () => {
                if (null == i) return !1;
                let t = g.A.getChannel(i);
                if (null == t || t.isGuildStageVoice()) return !1;
                let l = b.A.can(S.xBc.SEND_MESSAGES, t),
                    n = p.Ay.getMember(t.guild_id, e),
                    u = c().keyBy(y.A.getManyRoles(t.guild_id, n?.roles ?? []), "id"),
                    d = f.$3({ permission: S.xBc.STREAM, user: e, context: t, roles: u });
                return l && d;
            })),
        I = l.useCallback(
            (i) => {
                let { analyticsLocation: l } = i;
                null != t &&
                    (u.A.sendActivityInvite({
                        type: S.xL.STREAM_REQUEST,
                        channelId: t.id,
                        activity: G,
                        content: `<@${e}>`,
                        location: l,
                        targetUserId: e,
                    }),
                    (0, s.p)(e));
            },
            [t, G, e],
        ),
        k = h !== e && (null != G || A) && (null != C || A) && E && !R;
    return l.useMemo(() => (k ? { playingApplication: C, handleRequestToStream: I } : null), [k, C, I]);
}
