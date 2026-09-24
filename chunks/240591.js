n.d(t, { Bh: () => p, MW: () => T, ud: () => S, wz: () => N });
var i = n(582128),
    r = n(136722),
    a = n(17928),
    s = n(155718),
    l = n(164956),
    o = n(386171),
    d = n(95701),
    c = n(260509),
    u = n(280450),
    _ = n(734057),
    E = n(696451),
    A = n(71393),
    h = n(576705),
    I = n(287809),
    f = n(652215);
function p(e, t) {
    let n,
        i = null != (n = e instanceof d.YB && e.isThread() ? (_.A.getChannel(e.parent_id) ?? e) : e) ? N(n) : void 0,
        r = (0, o.S9)(),
        a = u.default.getId(),
        s = I.default.getCurrentUser()?.nsfwAllowed ?? !1,
        h = null != i ? (E.Ay.getMember(i, a)?.roles ?? []) : [],
        f = l.A.isViewingRoles(i),
        {
            computedPermissions: p,
            hasBaseAccessPermissions: T,
            hasSendMessagesPermission: S,
        } = g(n, e instanceof d.YB && e.isThread());
    return {
        context: n,
        userId: a,
        roleIds: h,
        isImpersonating: f,
        commandTypes: t,
        computedPermissions: p,
        hasBaseAccessPermissions: T,
        hasSendMessagesPermission: S,
        allowNsfw: m(n, s, r, (0, c.wh)(A.A.getGuild(i))),
    };
}
function T(e, t) {
    let n = i.useMemo(() => (e instanceof d.YB && e.isThread() ? (_.A.getChannel(e.parent_id) ?? e) : e), [e]),
        r = null != n ? N(n) : void 0,
        s = (0, o.hT)(),
        h = (0, a.bG)([u.default], () => u.default.getId()),
        f = (0, a.bG)([I.default], () => I.default.getCurrentUser()?.nsfwAllowed ?? !1),
        p = (0, a.yK)([E.Ay], () => (null != r ? (E.Ay.getMember(r, h)?.roles ?? []) : [])),
        T = (0, a.bG)([l.A], () => l.A.isViewingRoles(r)),
        S = m(
            n,
            f,
            s,
            (0, a.bG)([A.A], () => (0, c.wh)(A.A.getGuild(r)), [r]),
        );
    return i.useMemo(() => {
        let {
            computedPermissions: i,
            hasBaseAccessPermissions: r,
            hasSendMessagesPermission: a,
        } = g(n, e instanceof d.YB && e.isThread());
        return {
            context: n,
            userId: h,
            roleIds: p,
            commandTypes: t,
            isImpersonating: T,
            computedPermissions: i,
            hasBaseAccessPermissions: r,
            hasSendMessagesPermission: a,
            allowNsfw: S,
        };
    }, [t, n, T, p, h, S, e]);
}
function m(e, t, n, i) {
    return !!t && (!(e instanceof d.YB) || (null != e.guild_id ? e.isNSFW() || i : n));
}
function g(e, t) {
    let n, i;
    if ((e instanceof d.YB && e.isPrivate()) || null == e)
        return { computedPermissions: r.iu(0), hasBaseAccessPermissions: !0, hasSendMessagesPermission: !0 };
    let a = h.A.computePermissions(e);
    return (
        r.zy(a, f.xBc.ADMINISTRATOR)
            ? ((n = !0), (i = !0))
            : e instanceof d.YB
              ? ((n = r.zy(a, f.xBc.VIEW_CHANNEL) && r.zy(a, f.xBc.USE_APPLICATION_COMMANDS)),
                (i = t ? r.zy(a, f.xBc.SEND_MESSAGES_IN_THREADS) : r.zy(a, f.xBc.SEND_MESSAGES)))
              : ((n = r.zy(a, f.xBc.VIEW_CHANNEL)), (i = !0)),
        { computedPermissions: a, hasBaseAccessPermissions: n, hasSendMessagesPermission: i }
    );
}
function S(e, t) {
    return e instanceof d.YB && e?.guild_id == null
        ? e?.type === f.rbe.DM && e?.getRecipientId() === t
            ? s.OL.BOT_DM
            : s.OL.PRIVATE_CHANNEL
        : s.OL.GUILD;
}
function N(e) {
    return e instanceof d.YB ? e.guild_id : e.id;
}
