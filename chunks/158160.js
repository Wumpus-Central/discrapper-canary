n.d(t, {
    Ay: () => A,
    oE: () => E,
}),
    n(896048);
var r = n(439372),
    i = n(734057),
    a = n(383501),
    s = n(994500),
    o = n(927813),
    l = n(549022);
n(741812);
var c = n(522419),
    u = n(227724);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n(100544);
let f = 3 * o.A.Millis.DAY,
    p = 2 * o.A.Millis.DAY,
    _ = +o.A.Millis.HOUR;

function h(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.A.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => s.A.isBlocked(e)),
            r = n.recipients.filter((e) => s.A.isIgnored(e));
        (e.length > 0 || r.length > 0) &&
            !n.blockedUserWarningDismissed &&
            !y(t) &&
            (0, c.y)({
                channelId: t,
                blockedUserIds: e,
                ignoredUserIds: r,
            });
    }
}

function m(e) {
    let { state: t } = e;
}

function g() {
    var e;
    return (null != (e = (0, l.Iz)()) ? e : 0) > Date.now() - _;
}

function E(e) {
    return g() || Array.from(e).every((e) => b(e, !0));
}

function b(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!(!n && g()) || (null != (t = (0, l.kP)(e)) ? t : 0) > Date.now() - p;
}

function y(e) {
    var t;
    return (null != (t = (0, l.Oz)(e)) ? t : 0) > Date.now() - f;
}
class O extends r.A {
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
        let n = a.A.getChannelId();
        e !== n || (null != i.A.getChannel(e) && (b(t) || (0, u.k)(n, t)));
    }
    constructor(...e) {
        super(...e),
            d(this, "actions", {
                CHANNEL_SELECT: h,
                APP_STATE_UPDATE: m,
            });
    }
}
let A = new O();
