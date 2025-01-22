r.d(n, {
    B: function () {
        return v;
    }
});
var i = r(47120);
var a = r(147913),
    o = r(592125),
    s = r(19780),
    l = r(699516),
    u = r(70956),
    c = r(33194);
r(452369);
var d = r(807031),
    f = r(189275),
    p = r(451092);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r(334431);
let _ = 1 * u.Z.Millis.HOUR,
    m = 3 * u.Z.Millis.DAY;
function g(e) {
    let { channelId: n } = e;
    if (null == n) return;
    let r = o.Z.getChannel(n);
    if (null != r && r.isGroupDM()) {
        let e = r.recipients.filter((e) => l.Z.isBlocked(e)),
            i = r.recipients.filter((e) => l.Z.isIgnored(e));
        (e.length > 0 || i.length > 0) &&
            !r.blockedUserWarningDismissed &&
            !y(n) &&
            (0, f.O)({
                channelId: n,
                blockedUserIds: e,
                ignoredUserIds: i
            });
    }
}
function E(e) {
    let { state: n } = e;
}
function v(e) {
    return (0, c.Iu)(e) > Date.now() - _;
}
function y(e) {
    return (0, c.Iu)(e) > Date.now() - m;
}
class b extends a.Z {
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, n) {
        let r = s.Z.getChannelId();
        if (e === r && null != o.Z.getChannel(e)) (0, d.wC)({ location: 'warning_manager' }) && !v(e) && (0, p.H)(r, n);
    }
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                CHANNEL_SELECT: g,
                APP_STATE_UPDATE: E
            });
    }
}
n.Z = new b();
