"use strict";
n.d(t, { Ay: () => T, oE: () => g });
var r = n(439372),
    i = n(734057),
    a = n(383501),
    s = n(994500),
    o = n(927813),
    l = n(549022);
n(741812);
var u = n(522419),
    c = n(227724);
n(100544);
let d = 3 * o.A.Millis.DAY,
    _ = 2 * o.A.Millis.DAY,
    f = +o.A.Millis.HOUR;
function p(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.A.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => s.A.isBlocked(e)),
            r = n.recipients.filter((e) => s.A.isIgnored(e));
        (e.length > 0 || r.length > 0) &&
            !n.blockedUserWarningDismissed &&
            !A(t) &&
            (0, u.y)({ channelId: t, blockedUserIds: e, ignoredUserIds: r });
    }
}
function h(e) {
    let { state: t } = e;
}
function m() {
    return ((0, l.Iz)() ?? 0) > Date.now() - f;
}
function g(e) {
    return m() || Array.from(e).every((e) => E(e, !0));
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!t && m()) || ((0, l.kP)(e) ?? 0) > Date.now() - _;
}
function A(e) {
    return ((0, l.Oz)(e) ?? 0) > Date.now() - d;
}
class I extends r.A {
    actions = { CHANNEL_SELECT: p, APP_STATE_UPDATE: h };
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let n = a.A.getChannelId();
        e !== n || (null != i.A.getChannel(e) && (E(t) || (0, c.k)(n, t)));
    }
}
let T = new I();
