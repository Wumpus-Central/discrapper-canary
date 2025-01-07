n.d(e, {
    ZP: function () {
        return c;
    }
}),
    n(653041);
var i = n(131704),
    r = n(699516),
    l = n(594174),
    o = n(933557),
    u = n(981631),
    a = n(388032);
function s(t) {
    let { isSubscriptionGated: e, needSubscriptionToAccess: n } = t;
    if (e) return n ? a.intl.string(a.t['oj+HOj']) : a.intl.string(a.t.xI3TQU);
}
function c(t) {
    let e,
        { channel: n, unread: c = !1, mentionCount: d = 0, userCount: f, embeddedActivitiesCount: _, isSubscriptionGated: E, needSubscriptionToAccess: p } = t,
        g = (0, o.F6)(n, l.default, r.Z);
    switch (n.type) {
        case u.d4z.DM:
            e = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
        case u.d4z.GROUP_DM:
            e = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
        case u.d4z.GUILD_STORE:
            e = a.t.Bo4msr;
            break;
        case u.d4z.GUILD_DIRECTORY:
            e = a.t['92EAFx'];
            break;
        case u.d4z.GUILD_ANNOUNCEMENT:
            e = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
        case u.d4z.GUILD_VOICE:
            let S = [a.intl.formatToPlainString(a.t.bkpadH, { channelName: n.name })];
            if ((d > 0 && S.push(a.intl.formatToPlainString(a.t['3l1GOz'], { mentionCount: d })), c && S.push(a.intl.string(a.t.x5zAGR)), null != f)) {
                let t = n.userLimit;
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
        case u.d4z.GUILD_STAGE_VOICE:
            e = a.t.TPPk2d;
            break;
        default:
            e = i.Ec.has(n.type) ? (d > 0 ? a.t['ZL7+Iy'] : c ? a.t.YlVvmZ : a.t['0nZpiI']) : d > 0 ? a.t.g8ONMz : c ? a.t.smf1CQ : a.t.s0JADg;
    }
    let I = [
            a.intl.formatToPlainString(e, {
                channelName: g,
                mentionCount: d
            })
        ],
        h = s({
            isSubscriptionGated: E,
            needSubscriptionToAccess: p
        });
    return null != h && I.push(h), I.join(', ');
}
