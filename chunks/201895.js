e.d(n, {
    ZP: function () {
        return c;
    }
}),
    e(653041);
var i = e(131704),
    r = e(699516),
    l = e(594174),
    u = e(933557),
    o = e(981631),
    a = e(388032);
function s(t) {
    let { isSubscriptionGated: n, needSubscriptionToAccess: e } = t;
    if (n) return e ? a.intl.string(a.t['oj+HOj']) : a.intl.string(a.t.xI3TQU);
}
function c(t) {
    let n,
        { channel: e, unread: c = !1, mentionCount: d = 0, userCount: f, embeddedActivitiesCount: _, isSubscriptionGated: E, needSubscriptionToAccess: p } = t,
        g = (0, u.F6)(e, l.default, r.Z);
    switch (e.type) {
        case o.d4z.DM:
            n = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
        case o.d4z.GROUP_DM:
            n = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
        case o.d4z.GUILD_STORE:
            n = a.t.Bo4msr;
            break;
        case o.d4z.GUILD_DIRECTORY:
            n = a.t['92EAFx'];
            break;
        case o.d4z.GUILD_ANNOUNCEMENT:
            n = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
        case o.d4z.GUILD_VOICE:
            let S = [a.intl.formatToPlainString(a.t.bkpadH, { channelName: e.name })];
            if ((d > 0 && S.push(a.intl.formatToPlainString(a.t['3l1GOz'], { mentionCount: d })), c && S.push(a.intl.string(a.t.x5zAGR)), null != f)) {
                let t = e.userLimit;
                null != t && t > 0
                    ? S.push(
                          a.intl.formatToPlainString(a.t['6qgTOD'], {
                              userCount: f,
                              limit: t
                          })
                      )
                    : S.push(a.intl.formatToPlainString(a.t.GNIiAA, { userCount: f }));
            }
            null != _ && _ > 0 && S.push(a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: _ }));
            let m = s({
                isSubscriptionGated: E,
                needSubscriptionToAccess: p
            });
            return null != m && S.push(m), S.join(', ');
        case o.d4z.GUILD_STAGE_VOICE:
            n = a.t.TPPk2d;
            break;
        default:
            n = i.Ec.has(e.type) ? (d > 0 ? a.t['ZL7+Iy'] : c ? a.t.YlVvmZ : a.t['0nZpiI']) : d > 0 ? a.t.g8ONMz : c ? a.t.smf1CQ : a.t.s0JADg;
    }
    let C = [
            a.intl.formatToPlainString(n, {
                channelName: g,
                mentionCount: d
            })
        ],
        I = s({
            isSubscriptionGated: E,
            needSubscriptionToAccess: p
        });
    return null != I && C.push(I), C.join(', ');
}
