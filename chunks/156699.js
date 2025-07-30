(e.d(n, {
    C: () => u,
    u: () => g
}),
    e(388685));
var i = e(149765),
    l = e(668781),
    r = e(434404),
    a = e(430824),
    d = e(745752),
    s = e(45966),
    _ = e(637853),
    o = e(290511),
    p = e(981631),
    E = e(388032);
async function u(t, n) {
    return (
        null == t ||
        (await I(t, n, {
            removingView: !0,
            removingChat: !0
        }))
    );
}
async function I(t, n, e) {
    var i;
    let l = a.Z.getGuild(t);
    if (null == l) return !0;
    let r = null != l && (null == (i = l.features) ? void 0 : i.has(p.oNc.GUILD_ONBOARDING));
    if (!r) return !0;
    r && s.Z.shouldFetchPrompts(t) && (await (0, d.eM)(t));
    let E = s.Z.getDefaultChannelIds(t),
        [u, I] = (0, _.d9)(t, E);
    if (!E.includes(n)) return !0;
    let g = e.removingView && I.length - 1 < o.md,
        m = (e.removingChat || e.removingView) && u.length - 1 < o.X;
    return !g && !m;
}
async function g(t, n, e) {
    let a = t.getGuildId();
    if (null == a) return !0;
    null != e && (n = i.hX(n, i.U_(e)));
    let d = t.permissionOverwrites[a],
        s = null != d ? i.hX(d.deny, i.U_(d.allow)) : i.vB(0),
        _ = {
            removingView: i.e$(n, p.Plq.VIEW_CHANNEL) && !i.e$(s, p.Plq.VIEW_CHANNEL),
            removingChat: !1
        };
    return (
        t.isForumLikeChannel() ? (_.removingChat = i.e$(n, p.Plq.SEND_MESSAGES_IN_THREADS) && !i.e$(s, p.Plq.SEND_MESSAGES_IN_THREADS)) : (_.removingChat = i.e$(n, p.Plq.SEND_MESSAGES) && !i.e$(s, p.Plq.SEND_MESSAGES)),
        (!_.removingChat && !_.removingView) ||
            !!(await I(a, t.id, _)) ||
            (l.Z.show({
                title: E.intl.string(E.t.ut7sq6),
                body: E.intl.format(E.t['Zaz+ur'], {
                    onClick: () => {
                        (l.Z.close(), r.Z.open(a, p.pNK.ONBOARDING));
                    }
                })
            }),
            !1)
    );
}
