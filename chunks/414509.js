n.d(t, {
    B: () => m,
    Z: () => v
}),
    n(47120);
var r = n(147913),
    i = n(592125),
    o = n(19780),
    a = n(699516),
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
let f = +s.Z.Millis.HOUR,
    p = 3 * s.Z.Millis.DAY;
function _(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => a.Z.isBlocked(e)),
            r = n.recipients.filter((e) => a.Z.isIgnored(e));
        (e.length > 0 || r.length > 0) &&
            !n.blockedUserWarningDismissed &&
            !g(t) &&
            (0, c.O)({
                channelId: t,
                blockedUserIds: e,
                ignoredUserIds: r
            });
    }
}
function h(e) {
    let { state: t } = e;
}
function m(e) {
    return (0, l.Iu)(e) > Date.now() - f;
}
function g(e) {
    return (0, l.Iu)(e) > Date.now() - p;
}
class E extends r.Z {
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let n = o.Z.getChannelId();
        e === n && null != i.Z.getChannel(e) && (m(e) || (0, u.H)(n, t));
    }
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                CHANNEL_SELECT: _,
                APP_STATE_UPDATE: h
            });
    }
}
let v = new E();
