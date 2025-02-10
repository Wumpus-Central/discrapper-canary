n.d(t, {
    B: () => m,
    Z: () => v
}),
    n(47120);
var i = n(147913),
    r = n(592125),
    a = n(19780),
    s = n(699516),
    o = n(70956),
    l = n(33194);
n(452369);
var u = n(189275),
    c = n(451092);
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
let f = 1 * o.Z.Millis.HOUR,
    _ = 3 * o.Z.Millis.DAY;
function p(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = r.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => s.Z.isBlocked(e)),
            i = n.recipients.filter((e) => s.Z.isIgnored(e));
        (e.length > 0 || i.length > 0) &&
            !n.blockedUserWarningDismissed &&
            !g(t) &&
            (0, u.O)({
                channelId: t,
                blockedUserIds: e,
                ignoredUserIds: i
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
    return (0, l.Iu)(e) > Date.now() - _;
}
class E extends i.Z {
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let n = a.Z.getChannelId();
        e === n && null != r.Z.getChannel(e) && (m(e) || (0, c.H)(n, t));
    }
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                CHANNEL_SELECT: p,
                APP_STATE_UPDATE: h
            });
    }
}
let v = new E();
