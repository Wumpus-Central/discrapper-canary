var i = n(582128),
    r = n(136722),
    a = n(855986),
    s = n(155718),
    l = n(164956),
    o = n(386171),
    d = n(95701),
    c = n(260509),
    u = n(46653),
    _ = n(734057),
    E = n(696451),
    A = n(71393),
    h = n(576705),
    f = n(287809),
    I = n(652215);
function p(e, t, n, i) {
    return !!t && (!(e instanceof d.YB) || (null != e.guild_id ? e.isNSFW() || i : n));
}
function m(e, t) {
    let n, i;
    if ((e instanceof d.YB && e.isPrivate()) || null == e)
        return { computedPermissions: r.iu(0), hasBaseAccessPermissions: !0, hasSendMessagesPermission: !0 };
    let a = h.A.computePermissions(e);
    return (
        r.zy(a, I.xBc.ADMINISTRATOR)
            ? ((n = !0), (i = !0))
            : e instanceof d.YB
              ? ((n = r.zy(a, I.xBc.VIEW_CHANNEL) && r.zy(a, I.xBc.USE_APPLICATION_COMMANDS)),
                (i = t ? r.zy(a, I.xBc.SEND_MESSAGES_IN_THREADS) : r.zy(a, I.xBc.SEND_MESSAGES)))
              : ((n = r.zy(a, I.xBc.VIEW_CHANNEL)), (i = !0)),
        { computedPermissions: a, hasBaseAccessPermissions: n, hasSendMessagesPermission: i }
    );
}
function T(e) {
    return e instanceof d.YB ? e.guild_id : e.id;
}
n.d(
    t,
    {},
    {
        Bh: function (e, t) {
            let n,
                i =
                    null != (n = e instanceof d.YB && e.isThread() ? (_.A.getChannel(e.parent_id) ?? e) : e)
                        ? T(n)
                        : void 0,
                r = (0, o.S9)(),
                a = u.default.getId(),
                s = f.default.getCurrentUser()?.nsfwAllowed ?? !1,
                h = null != i ? (E.Ay.getMember(i, a)?.roles ?? []) : [],
                I = l.A.isViewingRoles(i),
                {
                    computedPermissions: g,
                    hasBaseAccessPermissions: S,
                    hasSendMessagesPermission: N,
                } = m(n, e instanceof d.YB && e.isThread());
            return {
                context: n,
                userId: a,
                roleIds: h,
                isImpersonating: I,
                commandTypes: t,
                computedPermissions: g,
                hasBaseAccessPermissions: S,
                hasSendMessagesPermission: N,
                allowNsfw: p(n, s, r, (0, c.wh)(A.A.getGuild(i))),
            };
        },
        MW: function (e, t) {
            let n = i.useMemo(() => (e instanceof d.YB && e.isThread() ? (_.A.getChannel(e.parent_id) ?? e) : e), [e]),
                r = null != n ? T(n) : void 0,
                s = (0, o.hT)(),
                h = (0, a.bG)([u.default], () => u.default.getId()),
                I = (0, a.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed ?? !1),
                g = (0, a.yK)([E.Ay], () => (null != r ? (E.Ay.getMember(r, h)?.roles ?? []) : [])),
                S = (0, a.bG)([l.A], () => l.A.isViewingRoles(r)),
                N = p(
                    n,
                    I,
                    s,
                    (0, a.bG)([A.A], () => (0, c.wh)(A.A.getGuild(r)), [r]),
                );
            return i.useMemo(() => {
                let {
                    computedPermissions: i,
                    hasBaseAccessPermissions: r,
                    hasSendMessagesPermission: a,
                } = m(n, e instanceof d.YB && e.isThread());
                return {
                    context: n,
                    userId: h,
                    roleIds: g,
                    commandTypes: t,
                    isImpersonating: S,
                    computedPermissions: i,
                    hasBaseAccessPermissions: r,
                    hasSendMessagesPermission: a,
                    allowNsfw: N,
                };
            }, [t, n, S, g, h, N, e]);
        },
        ud: function (e, t) {
            return e instanceof d.YB && e?.guild_id == null
                ? e?.type === I.rbe.DM && e?.getRecipientId() === t
                    ? s.OL.BOT_DM
                    : s.OL.PRIVATE_CHANNEL
                : s.OL.GUILD;
        },
        wz: T,
    },
);
