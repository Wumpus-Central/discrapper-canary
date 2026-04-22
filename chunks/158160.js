"use strict";
n.d(t, { Ay: () => I, oE: () => m });
var r = n(439372),
    i = n(734057),
    s = n(383501),
    a = n(994500),
    o = n(927813),
    l = n(549022);
n(741812);
var u = n(522419),
    d = n(227724);
n(100544);
let c = 3 * o.A.Millis.DAY,
    _ = 2 * o.A.Millis.DAY,
    f = +o.A.Millis.HOUR;
function E(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.A.getChannel(t);
    if (null != n && n.isGroupDM()) {
        var r;
        let e = n.recipients.filter((e) => a.A.isBlocked(e)),
            i = n.recipients.filter((e) => a.A.isIgnored(e));
        (e.length > 0 || i.length > 0) &&
            !n.blockedUserWarningDismissed &&
            ((r = t), !(((0, l.Oz)(r) ?? 0) > Date.now() - c)) &&
            (0, u.y)({ channelId: t, blockedUserIds: e, ignoredUserIds: i });
    }
}
function h(e) {
    let { state: t } = e;
}
function p() {
    return ((0, l.Iz)() ?? 0) > Date.now() - f;
}
function m(e) {
    return p() || Array.from(e).every((e) => g(e, !0));
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!t && p()) || ((0, l.kP)(e) ?? 0) > Date.now() - _;
}
class A extends r.A {
    actions = { CHANNEL_SELECT: E, APP_STATE_UPDATE: h };
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let n = s.A.getChannelId();
        e !== n || (null != i.A.getChannel(e) && (g(t) || (0, d.k)(n, t)));
    }
}
let I = new A();
