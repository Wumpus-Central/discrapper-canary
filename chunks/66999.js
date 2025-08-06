n.d(t, {
    $: () => u,
    Z: () => c
});
var r = n(442837),
    i = n(430198),
    o = n(592125),
    a = n(496675),
    s = n(981631);
let l = {
    needSubscriptionToAccess: !1,
    isSubscriptionGated: !1
};
function c(e) {
    return (0, r.cj)([o.Z, i.Z, a.Z], () => u(e, o.Z, i.Z, a.Z), [e]);
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Z,
        c = t.getChannel(e);
    return (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel())
        ? {
              isSubscriptionGated: !0,
              needSubscriptionToAccess: !0
          }
        : null != c && n.isChannelGated(c.guild_id, c.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: c.isGuildVocal() ? !r.can(s.Plq.CONNECT, c) : !r.can(s.Plq.VIEW_CHANNEL, c)
            }
          : l;
}
