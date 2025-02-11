n.d(t, { ZP: () => c }), n(653041);
var i = n(131704),
    r = n(699516),
    a = n(594174),
    s = n(933557),
    o = n(981631),
    l = n(388032);
function u(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t) return n ? l.intl.string(l.t['oj+HOj']) : l.intl.string(l.t.xI3TQU);
}
function c(e) {
    let t,
        { channel: n, unread: c = !1, mentionCount: d = 0, userCount: f, embeddedActivitiesCount: _, isSubscriptionGated: p, needSubscriptionToAccess: h } = e,
        m = (0, s.F6)(n, a.default, r.Z);
    switch (n.type) {
        case o.d4z.DM:
            t = c ? l.t.F2MZsr : l.t.fYqXVV;
            break;
        case o.d4z.GROUP_DM:
            t = c ? l.t.fxxUo6 : l.t.lts3LS;
            break;
        case o.d4z.GUILD_STORE:
            t = l.t.Bo4msr;
            break;
        case o.d4z.GUILD_DIRECTORY:
            t = l.t['92EAFx'];
            break;
        case o.d4z.GUILD_ANNOUNCEMENT:
            t = d > 0 ? l.t.sDKIpq : c ? l.t.VM7z8f : l.t.WJ3MPj;
            break;
        case o.d4z.GUILD_VOICE:
            let g = [l.intl.formatToPlainString(l.t.bkpadH, { channelName: n.name })];
            if ((d > 0 && g.push(l.intl.formatToPlainString(l.t['3l1GOz'], { mentionCount: d })), c && g.push(l.intl.string(l.t.x5zAGR)), null != f)) {
                let e = n.userLimit;
                null != e && e > 0
                    ? g.push(
                          l.intl.formatToPlainString(l.t['6qgTOD'], {
                              userCount: f,
                              limit: e
                          })
                      )
                    : g.push(l.intl.formatToPlainString(l.t.GNIiAA, { userCount: f }));
            }
            null != _ && _ > 0 && g.push(l.intl.formatToPlainString(l.t.O6PLYW, { activitiesCount: _ }));
            let E = u({
                isSubscriptionGated: p,
                needSubscriptionToAccess: h
            });
            return null != E && g.push(E), g.join(', ');
        case o.d4z.GUILD_STAGE_VOICE:
            t = l.t.TPPk2d;
            break;
        default:
            t = i.Ec.has(n.type) ? (d > 0 ? l.t['ZL7+Iy'] : c ? l.t.YlVvmZ : l.t['0nZpiI']) : d > 0 ? l.t.g8ONMz : c ? l.t.smf1CQ : l.t.s0JADg;
    }
    let v = [
            l.intl.formatToPlainString(t, {
                channelName: m,
                mentionCount: d
            })
        ],
        y = u({
            isSubscriptionGated: p,
            needSubscriptionToAccess: h
        });
    return null != y && v.push(y), v.join(', ');
}
