"use strict";
n.d(t, { Bh: () => f, MW: () => g, ud: () => I, wz: () => T });
var i = n(64700),
    r = n(136722),
    s = n(17928),
    a = n(155718),
    o = n(164956),
    l = n(264249),
    d = n(95701),
    _ = n(495544),
    u = n(734057),
    c = n(696451),
    E = n(576705),
    h = n(287809),
    m = n(652215);
function f(e, t) {
    let n,
        i = null != (n = e instanceof d.YB && e.isThread() ? (u.A.getChannel(e.parent_id) ?? e) : e) ? T(n) : void 0,
        r = (0, l.S9)(),
        s = _.default.getId(),
        a = h.default.getCurrentUser()?.nsfwAllowed ?? !1,
        E = null != i ? (c.Ay.getMember(i, s)?.roles ?? []) : [],
        m = o.A.isViewingRoles(i),
        {
            computedPermissions: f,
            hasBaseAccessPermissions: g,
            hasSendMessagesPermission: I,
        } = A(n, e instanceof d.YB && e.isThread());
    return {
        context: n,
        userId: s,
        roleIds: E,
        isImpersonating: m,
        commandTypes: t,
        computedPermissions: f,
        hasBaseAccessPermissions: g,
        hasSendMessagesPermission: I,
        allowNsfw: p(n, a, r),
    };
}
function g(e, t) {
    let n = i.useMemo(() => (e instanceof d.YB && e.isThread() ? (u.A.getChannel(e.parent_id) ?? e) : e), [e]),
        r = null != n ? T(n) : void 0,
        a = (0, l.hT)(),
        E = (0, s.bG)([_.default], () => _.default.getId()),
        m = (0, s.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed ?? !1),
        f = (0, s.yK)([c.Ay], () => (null != r ? (c.Ay.getMember(r, E)?.roles ?? []) : [])),
        g = (0, s.bG)([o.A], () => o.A.isViewingRoles(r));
    return i.useMemo(() => {
        let {
            computedPermissions: i,
            hasBaseAccessPermissions: r,
            hasSendMessagesPermission: s,
        } = A(n, e instanceof d.YB && e.isThread());
        return {
            context: n,
            userId: E,
            roleIds: f,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: i,
            hasBaseAccessPermissions: r,
            hasSendMessagesPermission: s,
            allowNsfw: p(n, m, a),
        };
    }, [t, n, g, f, E, m, a, e]);
}
function p(e, t, n) {
    return !!t && (!(e instanceof d.YB) || (null != e.guild_id ? e.nsfw : n));
}
function A(e, t) {
    let n, i;
    if ((e instanceof d.YB && e.isPrivate()) || null == e)
        return { computedPermissions: r.iu(0), hasBaseAccessPermissions: !0, hasSendMessagesPermission: !0 };
    let s = E.A.computePermissions(e);
    return (
        r.zy(s, m.xBc.ADMINISTRATOR)
            ? ((n = !0), (i = !0))
            : e instanceof d.YB
              ? ((n = r.zy(s, m.xBc.VIEW_CHANNEL) && r.zy(s, m.xBc.USE_APPLICATION_COMMANDS)),
                (i = t ? r.zy(s, m.xBc.SEND_MESSAGES_IN_THREADS) : r.zy(s, m.xBc.SEND_MESSAGES)))
              : ((n = r.zy(s, m.xBc.VIEW_CHANNEL)), (i = !0)),
        { computedPermissions: s, hasBaseAccessPermissions: n, hasSendMessagesPermission: i }
    );
}
function I(e, t) {
    return e instanceof d.YB && e?.guild_id == null
        ? e?.type === m.rbe.DM && e?.getRecipientId() === t
            ? a.OL.BOT_DM
            : a.OL.PRIVATE_CHANNEL
        : a.OL.GUILD;
}
function T(e) {
    return e instanceof d.YB ? e.guild_id : e.id;
}
