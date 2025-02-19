n.d(t, {
    EO: () => I,
    Fc: () => S,
    Ft: () => A,
    W5: () => N,
    ZP: () => C,
    _T: () => E,
    oY: () => g,
    u5: () => y
}),
    n(411104);
var r = n(442837),
    i = n(246946),
    o = n(594174),
    a = n(981631),
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
    p = (e) => '@'.concat(e),
    _ = {
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
    return n && r.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (r = f(r)), r;
}
function E(e) {
    var t;
    let n = (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation);
    if (null == e) return;
    let o = m(e);
    return n && o.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (o = f(o)), o;
}
function v(e) {
    if (null != e) return h(e.globalName) ? e.globalName : h(e.global_name) ? e.global_name : void 0;
}
function b(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return d;
    let r = v(e),
        i = n ? N(e) : null !== (t = e.username) && void 0 !== t ? t : d;
    return r === i ? r : null != r ? ''.concat(r, ' (').concat(i, ')') : i;
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case a.Skl.ONLINE:
            return t ? s.NW.string(s.t['9hghLC']) : s.NW.string(s.t.WbGtnJ);
        case a.Skl.OFFLINE:
            return s.NW.string(s.t.Vv0abG);
        case a.Skl.IDLE:
            return s.NW.string(s.t.qWbtVV);
        case a.Skl.DND:
            return s.NW.string(s.t.jaNpQE);
        case a.Skl.INVISIBLE:
            return s.NW.string(s.t.bg24HB);
        case a.Skl.STREAMING:
            return s.NW.string(s.t.XKYej4);
        case a.Skl.UNKNOWN:
        default:
            return null;
    }
}
function O(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime(),
        o = null == n || i <= u * n,
        a = i >= u * r;
    return !!o && !!a;
}
function S(e) {
    return !O(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function I(e) {
    return O(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function T(e, t, n) {
    if (null == e) return s.NW.string(s.t.sKdZ6e);
    if (!h(e.username)) return d;
    let r = n;
    if (('always' === t.identifiable ? (r = !1) : 'never' === t.identifiable && (r = !0), '0' !== e.discriminator && e.discriminator !== a.fo$ && !t.forcePomelo)) return 'username' === t.mode ? e.username : r ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let i = r ? f(e.username) : e.username;
    return 'never' !== t.decoration ? p(i) : i;
}
function N(e, t) {
    let n = c({}, _, t),
        r = 'auto' !== n.identifiable || i.Z.hidePersonalInformation;
    return T(e, n, r);
}
function A(e) {
    return (0, r.e7)([o.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? o.default.getUser(e.getRecipientId()) : null;
    });
}
let C = {
    getName: g,
    useName: E,
    isNameConcealed: (e) => 4 === e.length && e.endsWith('...'),
    getUserTag: N,
    useUserTag: function (e, t) {
        return T(
            e,
            c({}, _, t),
            (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation)
        );
    },
    getFormattedName: b,
    getGlobalName: v,
    humanizeStatus: y,
    useDirectMessageRecipient: A
};
