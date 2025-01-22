let i, a, o;
r.d(n, {
    At: function () {
        return A;
    },
    DB: function () {
        return O;
    },
    DR: function () {
        return C;
    },
    Wf: function () {
        return R;
    },
    XU: function () {
        return b;
    },
    dL: function () {
        return T;
    },
    eH: function () {
        return x;
    },
    m1: function () {
        return N;
    },
    op: function () {
        return D;
    },
    s1: function () {
        return S;
    },
    uL: function () {
        return y;
    },
    uv: function () {
        return I;
    }
});
var s = r(653041);
var l = r(757143);
var u = r(539528),
    c = r(710845),
    d = r(585483),
    f = r(143816),
    p = r(981631);
let h = new c.Z('Routing/Utils'),
    _ = [p.E07.DEVELOPER_PORTAL];
i = __OVERLAY__ ? (0, u.PP)() : (0, u.lX)();
let m = !1,
    g = i.listen((e, n) => {
        'REPLACE' !== n && ((m = !0), g());
    });
function E() {
    return !d.S.hasSubscribers(p.CkL.MODAL_CLOSE) && (r(574254).Z.close(), !0);
}
function v(e, n) {
    return !!('string' == typeof e && _.some((n) => e.startsWith(n))) && (h.log(''.concat(n, ' - route to external path ').concat(e)), window.dispatchEvent(new Event('beforeunload')), window.location[n](e), !0);
}
function y(e, n) {
    if (v(e, 'assign')) return;
    h.log('transitionTo - Transitioning to '.concat(e));
    let r = null == n ? void 0 : n.source;
    null == n || delete n.source;
    let s = null == n ? void 0 : n.sourceLocationStack;
    null == n || delete n.sourceLocationStack,
        null == n
            ? i.push(e)
            : i.push({
                  pathname: e,
                  ...n
              }),
        (a = r),
        (o = s);
}
function b(e, n, r, i) {
    h.log(
        'transitionToGuild - Transitioning to '.concat(
            JSON.stringify({
                guildId: e,
                channelId: n,
                messageId: r
            })
        )
    ),
        y(p.Z5c.CHANNEL(e, n, r), i);
}
function I() {
    return null != a && f.H.has(a);
}
function T(e, n, r) {
    !v(e, 'replace') && (h.log('Replacing route with '.concat(e)), 'string' == typeof e ? i.replace(e, n) : i.replace(e), (a = r));
}
function S() {
    return i;
}
function A() {
    return a;
}
function C() {
    return o;
}
function N(e) {
    if (null == e) {
        var n;
        e = null !== (n = i.location.pathname) && void 0 !== n ? n : '';
    }
    return !e.startsWith(p.Z5c.HANDOFF) && !0;
}
function R(e) {
    if (null == e) {
        var n;
        e = null !== (n = i.location.pathname) && void 0 !== n ? n : '';
    }
    if (e.startsWith(p.Z5c.LOGIN)) return p.Usc.LOGIN;
    if (e.startsWith(p.Z5c.REGISTER)) return p.Usc.REGISTER;
    if (e.startsWith(p.Z5c.INVITE(''))) return p.Usc.INVITE;
    else if (e.startsWith(p.Z5c.VERIFY)) return p.Usc.VERIFY;
    else if (e.startsWith(p.Z5c.DISABLE_EMAIL_NOTIFICATIONS)) return p.Usc.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(p.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return p.Usc.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(p.Z5c.REJECT_IP)) return p.Usc.REJECT_IP;
    else if (e.startsWith(p.Z5c.REJECT_MFA)) return p.Usc.REJECT_MFA;
    else if (e.startsWith(p.Z5c.AUTHORIZE_IP)) return p.Usc.AUTHORIZE_IP;
    else if (e.startsWith(p.Z5c.AUTHORIZE_PAYMENT)) return p.Usc.AUTHORIZE_PAYMENT;
    else if (e.startsWith(p.Z5c.RESET)) return p.Usc.RESET;
    else if (e.startsWith(p.Z5c.REPORT)) return p.Usc.REPORT;
    else if (e.startsWith(p.Z5c.REPORT_SECOND_LOOK)) return p.Usc.REPORT_SECOND_LOOK;
    else if (e.startsWith(p.Z5c.ACCOUNT_REVERT(''))) return p.Usc.ACCOUNT_REVERT;
    return e;
}
function O() {
    return m;
}
function D() {
    E() && ((a = null), i.goBack());
}
function x() {
    E() && ((a = null), i.goForward());
}
