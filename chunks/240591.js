"use strict";
n.d(t, { Bh: () => m, MW: () => g, ud: () => I, wz: () => T });
var r = n(64700),
    i = n(136722),
    a = n(311907),
    s = n(155718),
    o = n(164956),
    l = n(264249),
    u = n(95701),
    c = n(961350),
    d = n(734057),
    _ = n(696451),
    f = n(576705),
    p = n(287809),
    h = n(652215);
function m(e, t) {
    let n,
        r = null != (n = e instanceof u.YB && e.isThread() ? (d.A.getChannel(e.parent_id) ?? e) : e) ? T(n) : void 0,
        i = (0, l.S9)(),
        a = c.default.getId(),
        s = p.default.getCurrentUser()?.nsfwAllowed ?? !1,
        f = null != r ? (_.Ay.getMember(r, a)?.roles ?? []) : [],
        h = o.A.isViewingRoles(r),
        {
            computedPermissions: m,
            hasBaseAccessPermissions: g,
            hasSendMessagesPermission: I,
        } = A(n, e instanceof u.YB && e.isThread());
    return {
        context: n,
        userId: a,
        roleIds: f,
        isImpersonating: h,
        commandTypes: t,
        computedPermissions: m,
        hasBaseAccessPermissions: g,
        hasSendMessagesPermission: I,
        allowNsfw: E(n, s, i),
    };
}
function g(e, t) {
    let n = r.useMemo(() => (e instanceof u.YB && e.isThread() ? (d.A.getChannel(e.parent_id) ?? e) : e), [e]),
        i = null != n ? T(n) : void 0,
        s = (0, l.hT)(),
        f = (0, a.bG)([c.default], () => c.default.getId()),
        h = (0, a.bG)([p.default], () => p.default.getCurrentUser()?.nsfwAllowed ?? !1),
        m = (0, a.yK)([_.Ay], () => (null != i ? (_.Ay.getMember(i, f)?.roles ?? []) : [])),
        g = (0, a.bG)([o.A], () => o.A.isViewingRoles(i));
    return r.useMemo(() => {
        let {
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
        } = A(n, e instanceof u.YB && e.isThread());
        return {
            context: n,
            userId: f,
            roleIds: m,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
            allowNsfw: E(n, h, s),
        };
    }, [t, n, g, m, f, h, s, e]);
}
function E(e, t, n) {
    return !!t && (!(e instanceof u.YB) || (null != e.guild_id ? e.nsfw : n));
}
function A(e, t) {
    let n, r;
    if ((e instanceof u.YB && e.isPrivate()) || null == e)
        return { computedPermissions: i.iu(0), hasBaseAccessPermissions: !0, hasSendMessagesPermission: !0 };
    let a = f.A.computePermissions(e);
    return (
        i.zy(a, h.xBc.ADMINISTRATOR)
            ? ((n = !0), (r = !0))
            : e instanceof u.YB
              ? ((n = i.zy(a, h.xBc.VIEW_CHANNEL) && i.zy(a, h.xBc.USE_APPLICATION_COMMANDS)),
                (r = t ? i.zy(a, h.xBc.SEND_MESSAGES_IN_THREADS) : i.zy(a, h.xBc.SEND_MESSAGES)))
              : ((n = i.zy(a, h.xBc.VIEW_CHANNEL)), (r = !0)),
        { computedPermissions: a, hasBaseAccessPermissions: n, hasSendMessagesPermission: r }
    );
}
function I(e, t) {
    return e instanceof u.YB && e?.guild_id == null
        ? e?.type === h.rbe.DM && e?.getRecipientId() === t
            ? s.OL.BOT_DM
            : s.OL.PRIVATE_CHANNEL
        : s.OL.GUILD;
}
function T(e) {
    return e instanceof u.YB ? e.guild_id : e.id;
}
