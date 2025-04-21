n.d(t, {
    EO: () => S,
    Fc: () => I,
    Ft: () => N,
    W5: () => A,
    ZP: () => C,
    _T: () => E,
    oY: () => g,
    u5: () => v
}),
    n(415506);
var r = n(442837),
    i = n(246946),
    a = n(594174),
    o = n(981631),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = 86400000,
    d = '???',
    f = (e) => ''.concat(e[0], '...'),
    _ = (e) => '@'.concat(e),
    p = {
        mode: 'full',
        decoration: 'never',
        identifiable: 'auto',
        forcePomelo: !1
    };
function h(e) {
    return !!(null != e && e.length > 0);
}
function m(e) {
    return h(e.global_name) ? e.global_name : h(e.globalName) ? e.globalName : h(e.username) ? e.username : d;
}
function g(e) {
    var t;
    if (null == e) return;
    let n = i.Z.hidePersonalInformation,
        r = m(e);
    return n && r.toLocaleLowerCase() === (null == (t = e.username) ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (r = f(r)), r;
}
function E(e) {
    var t;
    let n = (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation);
    if (null == e) return;
    let a = m(e);
    return n && a.toLocaleLowerCase() === (null == (t = e.username) ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (a = f(a)), a;
}
function b(e) {
    if (null != e)
        if (h(e.globalName)) return e.globalName;
        else if (h(e.global_name)) return e.global_name;
        else return;
}
function y(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return d;
    let r = b(e),
        i = n ? A(e) : null != (t = e.username) ? t : d;
    return r === i ? r : null != r ? ''.concat(r, ' (').concat(i, ')') : i;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case o.Skl.ONLINE:
            return t ? s.intl.string(s.t['9hghLC']) : s.intl.string(s.t.WbGtnJ);
        case o.Skl.OFFLINE:
            return s.intl.string(s.t.Vv0abG);
        case o.Skl.IDLE:
            return s.intl.string(s.t.qWbtVV);
        case o.Skl.DND:
            return s.intl.string(s.t.jaNpQE);
        case o.Skl.INVISIBLE:
            return s.intl.string(s.t.bg24HB);
        case o.Skl.STREAMING:
            return s.intl.string(s.t.XKYej4);
        case o.Skl.UNKNOWN:
        default:
            return null;
    }
}
function O(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime(),
        a = null == n || i <= u * n,
        o = i >= u * r;
    return !!a && !!o;
}
function I(e) {
    return !O(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function S(e) {
    return O(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function T(e, t, n) {
    if (null == e) return s.intl.string(s.t.sKdZ6e);
    if (!h(e.username)) return d;
    let r = n;
    if (('always' === t.identifiable ? (r = !1) : 'never' === t.identifiable && (r = !0), '0' !== e.discriminator && e.discriminator !== o.fo$ && !t.forcePomelo)) return 'username' === t.mode || r ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let i = r ? f(e.username) : e.username;
    return 'never' !== t.decoration ? _(i) : i;
}
function A(e, t) {
    let n = c({}, p, t),
        r = 'auto' !== n.identifiable || i.Z.hidePersonalInformation;
    return T(e, n, r);
}
function N(e) {
    return (0, r.e7)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
let C = {
    getName: g,
    useName: E,
    isNameConcealed: (e) => 4 === e.length && e.endsWith('...'),
    getUserTag: A,
    useUserTag: function (e, t) {
        return T(
            e,
            c({}, p, t),
            (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation)
        );
    },
    getFormattedName: y,
    getGlobalName: b,
    humanizeStatus: v,
    useDirectMessageRecipient: N
};
