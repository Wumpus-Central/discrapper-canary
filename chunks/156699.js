e.d(n, {
    C: () => p,
    u: () => T,
}),
    e(388685);
var i = e(149765),
    l = e(668781),
    d = e(434404),
    r = e(430824),
    a = e(745752),
    s = e(45966),
    _ = e(637853),
    E = e(290511),
    o = e(981631),
    u = e(388032);
async function p(t, n) {
    return (
        null == t ||
        (await I(t, n, {
            removingView: !0,
            removingChat: !0,
        }))
    );
}
async function I(t, n, e) {
    var i;
    let l = r.Z.getGuild(t);
    if (null == l) return !0;
    let d = null != l && (null == (i = l.features) ? void 0 : i.has(o.oNc.GUILD_ONBOARDING));
    if (!d) return !0;
    d && s.Z.shouldFetchPrompts(t) && (await (0, a.eM)(t));
    let u = s.Z.getDefaultChannelIds(t),
        [p, I] = (0, _.d9)(t, u);
    if (!u.includes(n)) return !0;
    let T = e.removingView && I.length - 1 < E.md,
        g = (e.removingChat || e.removingView) && p.length - 1 < E.X;
    return !T && !g;
}
async function T(t, n, e) {
    let r = t.getGuildId();
    if (null == r) return !0;
    null != e && (n = i.hX(n, i.U_(e)));
    let a = t.permissionOverwrites[r],
        s = null != a ? i.hX(a.deny, i.U_(a.allow)) : i.vB(0),
        _ = {
            removingView: i.e$(n, o.Plq.VIEW_CHANNEL) && !i.e$(s, o.Plq.VIEW_CHANNEL),
            removingChat: !1,
        };
    return (
        t.isForumLikeChannel()
            ? (_.removingChat = i.e$(n, o.Plq.SEND_MESSAGES_IN_THREADS) && !i.e$(s, o.Plq.SEND_MESSAGES_IN_THREADS))
            : (_.removingChat = i.e$(n, o.Plq.SEND_MESSAGES) && !i.e$(s, o.Plq.SEND_MESSAGES)),
        (!_.removingChat && !_.removingView) ||
            !!(await I(r, t.id, _)) ||
            (l.Z.show({
                title: u.intl.string(u.t.ut7sq6),
                body: u.intl.format(u.t["Zaz+ur"], {
                    onClick: () => {
                        l.Z.close(), d.Z.open(r, o.pNK.ONBOARDING);
                    },
                }),
            }),
            !1)
    );
}
