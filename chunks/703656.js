let r, i, o;
n.d(t, {
    At: () => S,
    DB: () => C,
    DR: () => T,
    Wf: () => A,
    XU: () => y,
    dL: () => O,
    eH: () => P,
    m1: () => N,
    op: () => R,
    s1: () => I,
    uL: () => b,
    uv: () => v
}),
    n(539854),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282),
    n(49124),
    n(704826);
var a = n(539528),
    s = n(710845),
    l = n(585483),
    c = n(143816),
    u = n(981631);
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = new s.Z('Routing/Utils'),
    p = [u.E07.DEVELOPER_PORTAL];
r = __OVERLAY__ ? (0, a.PP)() : (0, a.lX)();
let h = !1,
    m = r.listen((e, t) => {
        'REPLACE' !== t && ((h = !0), m());
    });
function g() {
    return !l.S.hasSubscribers(u.CkL.MODAL_CLOSE) && (n(574254).Z.close(), !0);
}
function E(e, t) {
    return !!('string' == typeof e && p.some((t) => e.startsWith(t))) && (_.log(''.concat(t, ' - route to external path ').concat(e)), window.dispatchEvent(new Event('beforeunload')), window.location[t](e), !0);
}
function b(e, t) {
    if (E(e, 'assign')) return;
    _.log('transitionTo - Transitioning to '.concat(e));
    let n = null == t ? void 0 : t.source;
    null == t || delete t.source;
    let a = null == t ? void 0 : t.sourceLocationStack;
    if ((null == t || delete t.sourceLocationStack, null == t)) r.push(e);
    else {
        let n = new URL(e, 'https:'.concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT));
        r.push(
            f(
                {
                    pathname: n.pathname,
                    search: n.search,
                    hash: n.hash
                },
                t
            )
        );
    }
    (i = n), (o = a);
}
function y(e, t, n, r) {
    _.log(
        'transitionToGuild - Transitioning to '.concat(
            JSON.stringify({
                guildId: e,
                channelId: t,
                messageId: n
            })
        )
    ),
        b(u.Z5c.CHANNEL(e, t, n), r);
}
function v() {
    return null != i && c.H.has(i);
}
function O(e, t, n) {
    E(e, 'replace') || (_.log('Replacing route with '.concat(e)), 'string' == typeof e ? r.replace(e, t) : r.replace(e), (i = n));
}
function I() {
    return r;
}
function S() {
    return i;
}
function T() {
    return o;
}
function N(e) {
    if (null == e) {
        var t;
        e = null != (t = r.location.pathname) ? t : '';
    }
    return !e.startsWith(u.Z5c.HANDOFF);
}
function A(e) {
    if (null == e) {
        var t;
        e = null != (t = r.location.pathname) ? t : '';
    }
    if (e.startsWith(u.Z5c.LOGIN)) return u.Usc.LOGIN;
    if (e.startsWith(u.Z5c.REGISTER)) return u.Usc.REGISTER;
    if (e.startsWith(u.Z5c.INVITE(''))) return u.Usc.INVITE;
    if (e.startsWith(u.Z5c.VERIFY)) return u.Usc.VERIFY;
    if (e.startsWith(u.Z5c.DISABLE_EMAIL_NOTIFICATIONS)) return u.Usc.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(u.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return u.Usc.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(u.Z5c.REJECT_IP)) return u.Usc.REJECT_IP;
    else if (e.startsWith(u.Z5c.REJECT_MFA)) return u.Usc.REJECT_MFA;
    else if (e.startsWith(u.Z5c.AUTHORIZE_IP)) return u.Usc.AUTHORIZE_IP;
    else if (e.startsWith(u.Z5c.AUTHORIZE_PAYMENT)) return u.Usc.AUTHORIZE_PAYMENT;
    else if (e.startsWith(u.Z5c.RESET)) return u.Usc.RESET;
    else if (e.startsWith(u.Z5c.REPORT)) return u.Usc.REPORT;
    else if (e.startsWith(u.Z5c.REPORT_SECOND_LOOK)) return u.Usc.REPORT_SECOND_LOOK;
    else if (e.startsWith(u.Z5c.ACCOUNT_REVERT(''))) return u.Usc.ACCOUNT_REVERT;
    return e;
}
function C() {
    return h;
}
function R() {
    g() && ((i = null), r.goBack());
}
function P() {
    g() && ((i = null), r.goForward());
}
