"use strict";
n.d(t, { Bh: () => E, MW: () => m, ud: () => I, wz: () => T });
var r = n(64700),
    i = n(136722),
    s = n(311907),
    a = n(155718),
    o = n(164956),
    l = n(264249),
    u = n(95701),
    c = n(961350),
    d = n(734057),
    _ = n(696451),
    f = n(576705),
    p = n(287809),
    h = n(652215);
function E(e, t) {
    let n,
        r = null != (n = e instanceof u.YB && e.isThread() ? (d.A.getChannel(e.parent_id) ?? e) : e) ? T(n) : void 0,
        i = (0, l.S9)(),
        s = c.default.getId(),
        a = p.default.getCurrentUser()?.nsfwAllowed ?? !1,
        f = null != r ? (_.Ay.getMember(r, s)?.roles ?? []) : [],
        h = o.A.isViewingRoles(r),
        {
            computedPermissions: E,
            hasBaseAccessPermissions: m,
            hasSendMessagesPermission: I,
        } = A(n, e instanceof u.YB && e.isThread());
    return {
        context: n,
        userId: s,
        roleIds: f,
        isImpersonating: h,
        commandTypes: t,
        computedPermissions: E,
        hasBaseAccessPermissions: m,
        hasSendMessagesPermission: I,
        allowNsfw: g(n, a, i),
    };
}
function m(e, t) {
    let n = r.useMemo(() => (e instanceof u.YB && e.isThread() ? (d.A.getChannel(e.parent_id) ?? e) : e), [e]),
        i = null != n ? T(n) : void 0,
        a = (0, l.hT)(),
        f = (0, s.bG)([c.default], () => c.default.getId()),
        h = (0, s.bG)([p.default], () => p.default.getCurrentUser()?.nsfwAllowed ?? !1),
        E = (0, s.yK)([_.Ay], () => (null != i ? (_.Ay.getMember(i, f)?.roles ?? []) : [])),
        m = (0, s.bG)([o.A], () => o.A.isViewingRoles(i));
    return r.useMemo(() => {
        let {
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: s,
        } = A(n, e instanceof u.YB && e.isThread());
        return {
            context: n,
            userId: f,
            roleIds: E,
            commandTypes: t,
            isImpersonating: m,
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: s,
            allowNsfw: g(n, h, a),
        };
    }, [t, n, m, E, f, h, a, e]);
}
function g(e, t, n) {
    return !!t && (!(e instanceof u.YB) || (null != e.guild_id ? e.nsfw : n));
}
function A(e, t) {
    let n, r;
    if ((e instanceof u.YB && e.isPrivate()) || null == e)
        return { computedPermissions: i.iu(0), hasBaseAccessPermissions: !0, hasSendMessagesPermission: !0 };
    let s = f.A.computePermissions(e);
    return (
        i.zy(s, h.xBc.ADMINISTRATOR)
            ? ((n = !0), (r = !0))
            : e instanceof u.YB
              ? ((n = i.zy(s, h.xBc.VIEW_CHANNEL) && i.zy(s, h.xBc.USE_APPLICATION_COMMANDS)),
                (r = t ? i.zy(s, h.xBc.SEND_MESSAGES_IN_THREADS) : i.zy(s, h.xBc.SEND_MESSAGES)))
              : ((n = i.zy(s, h.xBc.VIEW_CHANNEL)), (r = !0)),
        { computedPermissions: s, hasBaseAccessPermissions: n, hasSendMessagesPermission: r }
    );
}
function I(e, t) {
    return e instanceof u.YB && e?.guild_id == null
        ? e?.type === h.rbe.DM && e?.getRecipientId() === t
            ? a.OL.BOT_DM
            : a.OL.PRIVATE_CHANNEL
        : a.OL.GUILD;
}
function T(e) {
    return e instanceof u.YB ? e.guild_id : e.id;
}
