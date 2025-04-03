n.d(t, {
    EO: () => T,
    Fc: () => S,
    Ft: () => C,
    W5: () => A,
    ZP: () => R,
    _T: () => b,
    oY: () => E,
    u5: () => O
}),
    n(411104);
var r = n(442837),
    i = n(440051),
    o = n(246946),
    a = n(594174),
    s = n(981631),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = 86400000,
    f = '???',
    _ = (e) => ''.concat(e[0], '...'),
    p = (e) => '@'.concat(e),
    h = {
        mode: 'full',
        decoration: 'never',
        identifiable: 'auto',
        forcePomelo: !1
    };
function m(e) {
    return !!(null != e && e.length > 0);
}
function g(e) {
    return m(e.global_name) ? e.global_name : m(e.globalName) ? e.globalName : m(e.username) ? e.username : f;
}
function E(e) {
    var t;
    if (null == e) return;
    let n = o.Z.hidePersonalInformation,
        r = g(e);
    return n && r.toLocaleLowerCase() === (null == (t = e.username) ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (r = _(r)), r;
}
function b(e) {
    var t;
    let n = (0, r.e7)([o.Z], () => o.Z.hidePersonalInformation);
    if (null == e) return;
    let i = g(e);
    return n && i.toLocaleLowerCase() === (null == (t = e.username) ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (i = _(i)), i;
}
function y(e) {
    if (null != e)
        if (m(e.globalName)) return e.globalName;
        else if (m(e.global_name)) return e.global_name;
        else return;
}
function v(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return f;
    let r = y(e),
        i = n ? A(e) : null != (t = e.username) ? t : f;
    return r === i ? r : null != r ? ''.concat(r, ' (').concat(i, ')') : i;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { hasNewStrings: n } = i.Y.getCurrentConfig({ location: 'humanizeStatus' }, { autoTrackExposure: !1 });
    switch (e) {
        case s.Skl.ONLINE:
            return t ? l.NW.string(l.t['9hghLC']) : l.NW.string(l.t.WbGtnJ);
        case s.Skl.OFFLINE:
            return l.NW.string(l.t.Vv0abG);
        case s.Skl.IDLE:
            return n ? l.NW.string(l.t['m/e1Cg']) : l.NW.string(l.t.qWbtVV);
        case s.Skl.DND:
            return l.NW.string(l.t.jaNpQE);
        case s.Skl.INVISIBLE:
            return l.NW.string(l.t.bg24HB);
        case s.Skl.STREAMING:
            return l.NW.string(l.t.XKYej4);
        case s.Skl.UNKNOWN:
        default:
            return null;
    }
}
function I(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime(),
        o = null == n || i <= d * n,
        a = i >= d * r;
    return !!o && !!a;
}
function S(e) {
    return !I(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function T(e) {
    return I(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function N(e, t, n) {
    if (null == e) return l.NW.string(l.t.sKdZ6e);
    if (!m(e.username)) return f;
    let r = n;
    if (('always' === t.identifiable ? (r = !1) : 'never' === t.identifiable && (r = !0), '0' !== e.discriminator && e.discriminator !== s.fo$ && !t.forcePomelo)) return 'username' === t.mode || r ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let i = r ? _(e.username) : e.username;
    return 'never' !== t.decoration ? p(i) : i;
}
function A(e, t) {
    let n = u({}, h, t),
        r = 'auto' !== n.identifiable || o.Z.hidePersonalInformation;
    return N(e, n, r);
}
function C(e) {
    return (0, r.e7)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
let R = {
    getName: E,
    useName: b,
    isNameConcealed: (e) => 4 === e.length && e.endsWith('...'),
    getUserTag: A,
    useUserTag: function (e, t) {
        return N(
            e,
            u({}, h, t),
            (0, r.e7)([o.Z], () => o.Z.hidePersonalInformation)
        );
    },
    getFormattedName: v,
    getGlobalName: y,
    humanizeStatus: O,
    useDirectMessageRecipient: C
};
