n.d(t, {
    A: () => c,
    p: () => u,
});
var r = n(311907),
    i = n(717125),
    a = n(734057),
    s = n(576705),
    o = n(652215);
let l = {
    needSubscriptionToAccess: !1,
    isSubscriptionGated: !1,
};
function c(e) {
    return (0, r.cf)([a.A, i.A, s.A], () => u(e, a.A, i.A, s.A), [e]);
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
        c = t.getChannel(e);
    return (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel())
        ? {
              isSubscriptionGated: !0,
              needSubscriptionToAccess: !0,
          }
        : null != c && n.isChannelGated(c.guild_id, c.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: c.isGuildVocal() ? !r.can(o.xBc.CONNECT, c) : !r.can(o.xBc.VIEW_CHANNEL, c),
            }
          : l;
}
