n.d(t, {
    ZP: function () {
        return d;
    }
}),
    n(653041);
var i = n(131704),
    r = n(699516),
    l = n(594174),
    o = n(933557),
    s = n(981631),
    a = n(388032);
function u(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t) return n ? a.intl.string(a.t['oj+HOj']) : a.intl.string(a.t.xI3TQU);
}
function d(e) {
    let t,
        { channel: n, unread: d = !1, mentionCount: c = 0, userCount: h, embeddedActivitiesCount: f, isSubscriptionGated: g, needSubscriptionToAccess: C } = e,
        p = (0, o.F6)(n, l.default, r.Z);
    switch (n.type) {
        case s.d4z.DM:
            t = d ? a.t.F2MZsr : a.t.fYqXVV;
            break;
        case s.d4z.GROUP_DM:
            t = d ? a.t.fxxUo6 : a.t.lts3LS;
            break;
        case s.d4z.GUILD_STORE:
            t = a.t.Bo4msr;
            break;
        case s.d4z.GUILD_DIRECTORY:
            t = a.t['92EAFx'];
            break;
        case s.d4z.GUILD_ANNOUNCEMENT:
            t = c > 0 ? a.t.sDKIpq : d ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
        case s.d4z.GUILD_VOICE:
            let E = [a.intl.formatToPlainString(a.t.bkpadH, { channelName: n.name })];
            if ((c > 0 && E.push(a.intl.formatToPlainString(a.t['3l1GOz'], { mentionCount: c })), d && E.push(a.intl.string(a.t.x5zAGR)), null != h)) {
                let e = n.userLimit;
                null != e && e > 0
                    ? E.push(
                          a.intl.formatToPlainString(a.t['6qgTOD'], {
                              userCount: h,
                              limit: e
                          })
                      )
                    : E.push(a.intl.formatToPlainString(a.t.GNIiAA, { userCount: h }));
            }
            null != f && f > 0 && E.push(a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: f }));
            let _ = u({
                isSubscriptionGated: g,
                needSubscriptionToAccess: C
            });
            return null != _ && E.push(_), E.join(', ');
        case s.d4z.GUILD_STAGE_VOICE:
            t = a.t.TPPk2d;
            break;
        default:
            t = i.Ec.has(n.type) ? (c > 0 ? a.t['ZL7+Iy'] : d ? a.t.YlVvmZ : a.t['0nZpiI']) : c > 0 ? a.t.g8ONMz : d ? a.t.smf1CQ : a.t.s0JADg;
    }
    let I = [
            a.intl.formatToPlainString(t, {
                channelName: p,
                mentionCount: c
            })
        ],
        S = u({
            isSubscriptionGated: g,
            needSubscriptionToAccess: C
        });
    return null != S && I.push(S), I.join(', ');
}
