(n.d(t, {
    Fd: () => E,
    ZP: () => v
}),
    n(388685));
var r = n(147913),
    i = n(592125),
    a = n(19780),
    o = n(699516),
    s = n(70956),
    l = n(33194);
n(452369);
var c = n(189275),
    u = n(451092);
function d(e, t, n) {
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
let f = 3 * s.Z.Millis.DAY,
    _ = 2 * s.Z.Millis.DAY,
    p = +s.Z.Millis.HOUR;
function h(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => o.Z.isBlocked(e)),
            r = n.recipients.filter((e) => o.Z.isIgnored(e));
        (e.length > 0 || r.length > 0) &&
            !n.blockedUserWarningDismissed &&
            !y(t) &&
            (0, c.O)({
                channelId: t,
                blockedUserIds: e,
                ignoredUserIds: r
            });
    }
}
function m(e) {
    let { state: t } = e;
}
function g() {
    var e;
    return (null != (e = (0, l.km)()) ? e : 0) > Date.now() - p;
}
function E(e) {
    return g() || Array.from(e).every((e) => b(e, !0));
}
function b(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!n && g()) || (null != (t = (0, l._$)(e)) ? t : 0) > Date.now() - _;
}
function y(e) {
    var t;
    return (null != (t = (0, l.YF)(e)) ? t : 0) > Date.now() - f;
}
class O extends r.Z {
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let n = a.Z.getChannelId();
        e === n && null != i.Z.getChannel(e) && (b(t) || (0, u.H)(n, t));
    }
    constructor(...e) {
        (super(...e),
            d(this, 'actions', {
                CHANNEL_SELECT: h,
                APP_STATE_UPDATE: m
            }));
    }
}
let v = new O();
