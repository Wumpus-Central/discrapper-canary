n.d(t, { ZP: () => u }), n(653041);
var i = n(131704),
    l = n(699516),
    r = n(594174),
    s = n(933557),
    a = n(981631),
    o = n(388032);
function d(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t) return n ? o.intl.string(o.t['oj+HOj']) : o.intl.string(o.t.xI3TQU);
}
function u(e) {
    let t,
        { channel: n, unread: u = !1, mentionCount: c = 0, userCount: h, embeddedActivitiesCount: g, isSubscriptionGated: f, needSubscriptionToAccess: C } = e,
        p = (0, s.F6)(n, r.default, l.Z);
    switch (n.type) {
        case a.d4z.DM:
            t = u ? o.t.F2MZsr : o.t.fYqXVV;
            break;
        case a.d4z.GROUP_DM:
            t = u ? o.t.fxxUo6 : o.t.lts3LS;
            break;
        case a.d4z.GUILD_STORE:
            t = o.t.Bo4msr;
            break;
        case a.d4z.GUILD_DIRECTORY:
            t = o.t['92EAFx'];
            break;
        case a.d4z.GUILD_ANNOUNCEMENT:
            t = c > 0 ? o.t.sDKIpq : u ? o.t.VM7z8f : o.t.WJ3MPj;
            break;
        case a.d4z.GUILD_VOICE:
            let v = [o.intl.formatToPlainString(o.t.bkpadH, { channelName: n.name })];
            if ((c > 0 && v.push(o.intl.formatToPlainString(o.t['3l1GOz'], { mentionCount: c })), u && v.push(o.intl.string(o.t.x5zAGR)), null != h)) {
                let e = n.userLimit;
                null != e && e > 0
                    ? v.push(
                          o.intl.formatToPlainString(o.t['6qgTOD'], {
                              userCount: h,
                              limit: e
                          })
                      )
                    : v.push(o.intl.formatToPlainString(o.t.GNIiAA, { userCount: h }));
            }
            null != g && g > 0 && v.push(o.intl.formatToPlainString(o.t.O6PLYW, { activitiesCount: g }));
            let E = d({
                isSubscriptionGated: f,
                needSubscriptionToAccess: C
            });
            return null != E && v.push(E), v.join(', ');
        case a.d4z.GUILD_STAGE_VOICE:
            t = o.t.TPPk2d;
            break;
        default:
            t = i.Ec.has(n.type) ? (c > 0 ? o.t['ZL7+Iy'] : u ? o.t.YlVvmZ : o.t['0nZpiI']) : c > 0 ? o.t.g8ONMz : u ? o.t.smf1CQ : o.t.s0JADg;
    }
    let _ = [
            o.intl.formatToPlainString(t, {
                channelName: p,
                mentionCount: c
            })
        ],
        m = d({
            isSubscriptionGated: f,
            needSubscriptionToAccess: C
        });
    return null != m && _.push(m), _.join(', ');
}
