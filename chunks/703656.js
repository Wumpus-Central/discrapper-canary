let i, r, a;
n.d(t, {
    At: () => T,
    DB: () => N,
    DR: () => b,
    Wf: () => A,
    XU: () => E,
    dL: () => y,
    eH: () => R,
    m1: () => S,
    op: () => C,
    s1: () => I,
    uL: () => g,
    uv: () => v
}),
    n(653041),
    n(757143);
var s = n(539528),
    o = n(710845),
    l = n(585483),
    u = n(143816),
    c = n(981631);
let d = new o.Z('Routing/Utils'),
    f = [c.E07.DEVELOPER_PORTAL];
i = __OVERLAY__ ? (0, s.PP)() : (0, s.lX)();
let _ = !1,
    p = i.listen((e, t) => {
        'REPLACE' !== t && ((_ = !0), p());
    });
function h() {
    return !l.S.hasSubscribers(c.CkL.MODAL_CLOSE) && (n(574254).Z.close(), !0);
}
function m(e, t) {
    return !!('string' == typeof e && f.some((t) => e.startsWith(t))) && (d.log(''.concat(t, ' - route to external path ').concat(e)), window.dispatchEvent(new Event('beforeunload')), window.location[t](e), !0);
}
function g(e, t) {
    if (m(e, 'assign')) return;
    d.log('transitionTo - Transitioning to '.concat(e));
    let n = null == t ? void 0 : t.source;
    null == t || delete t.source;
    let s = null == t ? void 0 : t.sourceLocationStack;
    null == t || delete t.sourceLocationStack,
        null == t
            ? i.push(e)
            : i.push({
                  pathname: e,
                  ...t
              }),
        (r = n),
        (a = s);
}
function E(e, t, n, i) {
    d.log(
        'transitionToGuild - Transitioning to '.concat(
            JSON.stringify({
                guildId: e,
                channelId: t,
                messageId: n
            })
        )
    ),
        g(c.Z5c.CHANNEL(e, t, n), i);
}
function v() {
    return null != r && u.H.has(r);
}
function y(e, t, n) {
    m(e, 'replace') || (d.log('Replacing route with '.concat(e)), 'string' == typeof e ? i.replace(e, t) : i.replace(e), (r = n));
}
function I() {
    return i;
}
function T() {
    return r;
}
function b() {
    return a;
}
function S(e) {
    if (null == e) {
        var t;
        e = null !== (t = i.location.pathname) && void 0 !== t ? t : '';
    }
    return !e.startsWith(c.Z5c.HANDOFF);
}
function A(e) {
    if (null == e) {
        var t;
        e = null !== (t = i.location.pathname) && void 0 !== t ? t : '';
    }
    if (e.startsWith(c.Z5c.LOGIN)) return c.Usc.LOGIN;
    if (e.startsWith(c.Z5c.REGISTER)) return c.Usc.REGISTER;
    if (e.startsWith(c.Z5c.INVITE(''))) return c.Usc.INVITE;
    if (e.startsWith(c.Z5c.VERIFY)) return c.Usc.VERIFY;
    if (e.startsWith(c.Z5c.DISABLE_EMAIL_NOTIFICATIONS)) return c.Usc.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(c.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return c.Usc.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(c.Z5c.REJECT_IP)) return c.Usc.REJECT_IP;
    else if (e.startsWith(c.Z5c.REJECT_MFA)) return c.Usc.REJECT_MFA;
    else if (e.startsWith(c.Z5c.AUTHORIZE_IP)) return c.Usc.AUTHORIZE_IP;
    else if (e.startsWith(c.Z5c.AUTHORIZE_PAYMENT)) return c.Usc.AUTHORIZE_PAYMENT;
    else if (e.startsWith(c.Z5c.RESET)) return c.Usc.RESET;
    else if (e.startsWith(c.Z5c.REPORT)) return c.Usc.REPORT;
    else if (e.startsWith(c.Z5c.REPORT_SECOND_LOOK)) return c.Usc.REPORT_SECOND_LOOK;
    else if (e.startsWith(c.Z5c.ACCOUNT_REVERT(''))) return c.Usc.ACCOUNT_REVERT;
    return e;
}
function N() {
    return _;
}
function C() {
    h() && ((r = null), i.goBack());
}
function R() {
    h() && ((r = null), i.goForward());
}
