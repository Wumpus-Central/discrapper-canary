n.d(t, { Ol: () => h, f$: () => f, h4: () => I, mS: () => E, sR: () => A });
var i = n(179771),
    r = n(136722),
    a = n(747180),
    s = n(734057),
    l = n(576705),
    o = n(488926),
    d = n(636401),
    c = n(901092),
    u = n(722306),
    _ = n(652215);
function E(e, t) {
    if (!e.authorization.scopes.has(i.F.BOT)) return !1;
    let n = new Set(e.authorization.scopes);
    return (n.delete(i.F.BOT), !(0, u.A)(n, t));
}
function A(e, t) {
    let n = e.application.bot?.id;
    if (null == n) return !1;
    let i = o.cc({ user: n, context: t });
    return r.zy(i, _.xBc.VIEW_CHANNEL);
}
function h(e, t) {
    if (e.authorization.scopes.has(i.F.MESSAGES_READ)) return !0;
    let n = t.isThread() ? s.A.getChannel(t.parent_id) : t;
    return n?.type === _.rbe.GUILD_APP && null != n.application_id && n.application_id === e.application.id;
}
function f(e, t) {
    if (!(0, c.A)(e))
        throw new d.A(
            { errorCode: _.Lw6.INVALID_COMMAND },
            "Access to guild data via BotScope only available for embedded apps",
        );
    if (t !== (0, a.A)(e.context.surface))
        throw new d.A({ errorCode: _.Lw6.INVALID_PERMISSIONS }, "Guild not in embedded context");
}
function I(e, t) {
    let n = s.A.getChannel(t);
    if (null == n) throw new d.A({ errorCode: _.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
    let i = n.getGuildId();
    if (null == i)
        throw new d.A(
            { errorCode: _.Lw6.INVALID_CHANNEL },
            "Access to channel data via BotScope only available for guild channels in embedded apps",
        );
    if ((f(e, i), !l.A.can(_.xBc.VIEW_CHANNEL, n)))
        throw new d.A({ errorCode: _.Lw6.INVALID_PERMISSIONS }, "User cannot view channel");
    if (!A(e, n)) throw new d.A({ errorCode: _.Lw6.INVALID_PERMISSIONS }, "Bot cannot view channel");
}
