n.d(t, {
    Bh: () => m,
    MW: () => g,
    ud: () => y,
    wz: () => O,
});
var r = n(64700),
    i = n(136722),
    a = n(311907),
    s = n(155718),
    o = n(164956),
    l = n(264249),
    c = n(95701),
    u = n(961350),
    d = n(734057),
    f = n(696451),
    p = n(576705),
    _ = n(287809),
    h = n(652215);
function m(e, t) {
    var n, r, i, a, s;
    let p,
        h =
            null != (p = e instanceof c.YB && e.isThread() && null != (s = d.A.getChannel(e.parent_id)) ? s : e)
                ? O(p)
                : void 0,
        m = (0, l.S9)(),
        g = u.default.getId(),
        y = null != (n = null == (i = _.default.getCurrentUser()) ? void 0 : i.nsfwAllowed) && n,
        A = null != h && null != (r = null == (a = f.Ay.getMember(h, g)) ? void 0 : a.roles) ? r : [],
        v = o.A.isViewingRoles(h),
        {
            computedPermissions: S,
            hasBaseAccessPermissions: I,
            hasSendMessagesPermission: T,
        } = b(p, e instanceof c.YB && e.isThread());
    return {
        context: p,
        userId: g,
        roleIds: A,
        isImpersonating: v,
        commandTypes: t,
        computedPermissions: S,
        hasBaseAccessPermissions: I,
        hasSendMessagesPermission: T,
        allowNsfw: E(p, y, m),
    };
}
function g(e, t) {
    let n = r.useMemo(() => {
            if (e instanceof c.YB && e.isThread()) {
                var t;
                return null != (t = d.A.getChannel(e.parent_id)) ? t : e;
            }
            return e;
        }, [e]),
        i = null != n ? O(n) : void 0,
        s = (0, l.hT)(),
        p = (0, a.bG)([u.default], () => u.default.getId()),
        h = (0, a.bG)([_.default], () => {
            var e, t;
            return null != (e = null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) && e;
        }),
        m = (0, a.yK)([f.Ay], () => {
            var e, t;
            return null != i && null != (e = null == (t = f.Ay.getMember(i, p)) ? void 0 : t.roles) ? e : [];
        }),
        g = (0, a.bG)([o.A], () => o.A.isViewingRoles(i));
    return r.useMemo(() => {
        let {
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
        } = b(n, e instanceof c.YB && e.isThread());
        return {
            context: n,
            userId: p,
            roleIds: m,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
            allowNsfw: E(n, h, s),
        };
    }, [t, n, g, m, p, h, s, e]);
}
function E(e, t, n) {
    return !!t && (!(e instanceof c.YB) || (null != e.guild_id ? e.nsfw : n));
}
function b(e, t) {
    let n, r;
    if ((e instanceof c.YB && e.isPrivate()) || null == e)
        return {
            computedPermissions: i.iu(0),
            hasBaseAccessPermissions: !0,
            hasSendMessagesPermission: !0,
        };
    let a = p.A.computePermissions(e);
    return (
        i.zy(a, h.xBc.ADMINISTRATOR)
            ? ((n = !0), (r = !0))
            : e instanceof c.YB
              ? ((n = i.zy(a, h.xBc.VIEW_CHANNEL) && i.zy(a, h.xBc.USE_APPLICATION_COMMANDS)),
                (r = t ? i.zy(a, h.xBc.SEND_MESSAGES_IN_THREADS) : i.zy(a, h.xBc.SEND_MESSAGES)))
              : ((n = i.zy(a, h.xBc.VIEW_CHANNEL)), (r = !0)),
        {
            computedPermissions: a,
            hasBaseAccessPermissions: n,
            hasSendMessagesPermission: r,
        }
    );
}
function y(e, t) {
    return e instanceof c.YB && (null == e ? void 0 : e.guild_id) == null
        ? (null == e ? void 0 : e.type) === h.rbe.DM && (null == e ? void 0 : e.getRecipientId()) === t
            ? s.OL.BOT_DM
            : s.OL.PRIVATE_CHANNEL
        : s.OL.GUILD;
}
function O(e) {
    return e instanceof c.YB ? e.guild_id : e.id;
}
