var i = n(855986),
    r = n(717125),
    a = n(734057),
    s = n(576705),
    l = n(652215);
let o = { needSubscriptionToAccess: !1, isSubscriptionGated: !1 };
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
        d = t.getChannel(e);
    return d?.isRoleSubscriptionTemplatePreviewChannel()
        ? { isSubscriptionGated: !0, needSubscriptionToAccess: !0 }
        : null != d && n.isChannelGated(d.guild_id, d.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: d.isGuildVocal() ? !i.can(l.xBc.CONNECT, d) : !i.can(l.xBc.VIEW_CHANNEL, d),
            }
          : o;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.cf)([a.A, r.A, s.A], () => d(e, a.A, r.A, s.A), [e]);
        },
        p: d,
    },
);
