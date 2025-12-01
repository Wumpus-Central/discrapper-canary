n.d(t, {
    Yb: () => p,
    ZP: () => d,
}),
    n(539854);
var r = n(131704),
    i = n(699516),
    a = n(594174),
    o = n(51144),
    s = n(933557),
    l = n(981631),
    c = n(388032);
function u(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t)
        if (n) return c.intl.string(c.t["oj+HOs"]);
        else return c.intl.string(c.t.xI3TQQ);
}
function d(e) {
    let t,
        {
            channel: n,
            unread: o = !1,
            mentionCount: d = 0,
            userCount: f,
            embeddedActivitiesCount: p,
            isSubscriptionGated: _,
            needSubscriptionToAccess: m,
        } = e,
        h = (0, s.F6)(n, a.default, i.Z);
    switch (n.type) {
        case l.d4z.DM:
            t = o ? c.t.F2MZsu : c.t.fYqXVY;
            break;
        case l.d4z.GROUP_DM:
            t = o ? c.t["fxxUo/"] : c.t.lts3Ld;
            break;
        case l.d4z.GUILD_STORE:
            t = c.t.Bo4msg;
            break;
        case l.d4z.GUILD_DIRECTORY:
            t = c.t["92EAF2"];
            break;
        case l.d4z.GUILD_ANNOUNCEMENT:
            t = d > 0 ? c.t.sDKIpm : o ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
        case l.d4z.GUILD_VOICE:
            let g = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: n.name })];
            if (
                (d > 0 && g.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: d })),
                o && g.push(c.intl.string(c.t.x5zAGZ)),
                null != f)
            ) {
                let e = n.userLimit;
                null != e && e > 0
                    ? g.push(
                          c.intl.formatToPlainString(c.t["6qgTOF"], {
                              userCount: f,
                              limit: e,
                          }),
                      )
                    : g.push(c.intl.formatToPlainString(c.t.GNIiAA, { userCount: f }));
            }
            null != p && p > 0 && g.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: p }));
            let E = u({
                isSubscriptionGated: _,
                needSubscriptionToAccess: m,
            });
            return null != E && g.push(E), g.join(", ");
        case l.d4z.GUILD_STAGE_VOICE:
            t = c.t.TPPk2T;
            break;
        default:
            t = r.Ec.has(n.type)
                ? d > 0
                    ? c.t["ZL7+I6"]
                    : o
                      ? c.t.YlVvmc
                      : c.t["0nZpiF"]
                : d > 0
                  ? c.t.g8ONM0
                  : o
                    ? c.t.smf1CZ
                    : c.t.s0JADj;
    }
    let b = [
            c.intl.formatToPlainString(t, {
                channelName: h,
                mentionCount: d,
            }),
        ],
        y = u({
            isSubscriptionGated: _,
            needSubscriptionToAccess: m,
        });
    return null != y && b.push(y), b.join(", ");
}
function f(e) {
    switch (e) {
        case l.Skl.ONLINE:
            return (0, o.u5)(l.Skl.ONLINE);
        case l.Skl.IDLE:
            return (0, o.u5)(l.Skl.IDLE);
        case l.Skl.DND:
            return (0, o.u5)(l.Skl.DND);
        case l.Skl.INVISIBLE:
            return (0, o.u5)(l.Skl.INVISIBLE);
        default:
            return "";
    }
}
function p(e) {
    let { channel: t, muted: n, userStatus: r } = e;
    if (!0 === n) return c.intl.string(c.t.C4zCMb);
    let i = [];
    return t.type === l.d4z.DM && null != r && i.push(f(r)), i.length > 0 ? i.join(", ") : void 0;
}
