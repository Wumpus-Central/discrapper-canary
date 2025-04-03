n.d(t, { ZP: () => u }), n(653041);
var r = n(131704),
    i = n(699516),
    o = n(594174);
n(51144);
var a = n(933557),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t)
        if (n) return l.NW.string(l.t['oj+HOj']);
        else return l.NW.string(l.t.xI3TQU);
}
function u(e) {
    let t,
        { channel: n, unread: u = !1, mentionCount: d = 0, userCount: f, embeddedActivitiesCount: _, isSubscriptionGated: p, needSubscriptionToAccess: h } = e,
        m = (0, a.F6)(n, o.default, i.Z);
    switch (n.type) {
        case s.d4z.DM:
            t = u ? l.t.F2MZsr : l.t.fYqXVV;
            break;
        case s.d4z.GROUP_DM:
            t = u ? l.t.fxxUo6 : l.t.lts3LS;
            break;
        case s.d4z.GUILD_STORE:
            t = l.t.Bo4msr;
            break;
        case s.d4z.GUILD_DIRECTORY:
            t = l.t['92EAFx'];
            break;
        case s.d4z.GUILD_ANNOUNCEMENT:
            t = d > 0 ? l.t.sDKIpq : u ? l.t.VM7z8f : l.t.WJ3MPj;
            break;
        case s.d4z.GUILD_VOICE:
            let g = [l.NW.formatToPlainString(l.t.bkpadH, { channelName: n.name })];
            if ((d > 0 && g.push(l.NW.formatToPlainString(l.t['3l1GOz'], { mentionCount: d })), u && g.push(l.NW.string(l.t.x5zAGR)), null != f)) {
                let e = n.userLimit;
                null != e && e > 0
                    ? g.push(
                          l.NW.formatToPlainString(l.t['6qgTOD'], {
                              userCount: f,
                              limit: e
                          })
                      )
                    : g.push(l.NW.formatToPlainString(l.t.GNIiAA, { userCount: f }));
            }
            null != _ && _ > 0 && g.push(l.NW.formatToPlainString(l.t.O6PLYW, { activitiesCount: _ }));
            let E = c({
                isSubscriptionGated: p,
                needSubscriptionToAccess: h
            });
            return null != E && g.push(E), g.join(', ');
        case s.d4z.GUILD_STAGE_VOICE:
            t = l.t.TPPk2d;
            break;
        default:
            t = r.Ec.has(n.type) ? (d > 0 ? l.t['ZL7+Iy'] : u ? l.t.YlVvmZ : l.t['0nZpiI']) : d > 0 ? l.t.g8ONMz : u ? l.t.smf1CQ : l.t.s0JADg;
    }
    let b = [
            l.NW.formatToPlainString(t, {
                channelName: m,
                mentionCount: d
            })
        ],
        y = c({
            isSubscriptionGated: p,
            needSubscriptionToAccess: h
        });
    return null != y && b.push(y), b.join(', ');
}
