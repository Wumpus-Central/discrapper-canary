n.d(t, {
    B: () => g,
    Z: () => y
}),
    n(47120);
var i = n(147913),
    r = n(592125),
    a = n(19780),
    s = n(699516),
    o = n(70956),
    l = n(33194);
n(452369);
var u = n(807031),
    c = n(189275),
    d = n(451092);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n(334431);
let _ = 1 * o.Z.Millis.HOUR,
    p = 3 * o.Z.Millis.DAY;
function h(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = r.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => s.Z.isBlocked(e)),
            i = n.recipients.filter((e) => s.Z.isIgnored(e));
        (e.length > 0 || i.length > 0) &&
            !n.blockedUserWarningDismissed &&
            !E(t) &&
            (0, c.O)({
                channelId: t,
                blockedUserIds: e,
                ignoredUserIds: i
            });
    }
}
function m(e) {
    let { state: t } = e;
}
function g(e) {
    return (0, l.Iu)(e) > Date.now() - _;
}
function E(e) {
    return (0, l.Iu)(e) > Date.now() - p;
}
class v extends i.Z {
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let n = a.Z.getChannelId();
        e === n && null != r.Z.getChannel(e) && (0, u.wC)({ location: 'warning_manager' }) && !g(e) && (0, d.H)(n, t);
    }
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                CHANNEL_SELECT: h,
                APP_STATE_UPDATE: m
            });
    }
}
let y = new v();
