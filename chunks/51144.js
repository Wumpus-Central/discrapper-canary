r.d(n, {
    EO: function () {
        return A;
    },
    Fc: function () {
        return S;
    },
    Ft: function () {
        return O;
    },
    W5: function () {
        return N;
    },
    _T: function () {
        return v;
    },
    oY: function () {
        return E;
    },
    u5: function () {
        return I;
    }
});
var i = r(411104);
var a = r(442837),
    o = r(246946),
    s = r(594174),
    l = r(981631),
    u = r(388032);
let c = 86400000,
    d = '???',
    f = (e) => ''.concat(e[0], '...'),
    p = (e) => '@'.concat(e),
    h = (e) => 4 === e.length && e.endsWith('...'),
    _ = {
        mode: 'full',
        decoration: 'never',
        identifiable: 'auto',
        forcePomelo: !1
    };
function m(e) {
    return !!(null != e && e.length > 0);
}
function g(e) {
    if (m(e.global_name)) return e.global_name;
    if (m(e.globalName)) return e.globalName;
    if (m(e.username)) return e.username;
    else return d;
}
function E(e) {
    var n;
    if (null == e) return;
    let r = o.Z.hidePersonalInformation,
        i = g(e);
    return r && i.toLocaleLowerCase() === (null === (n = e.username) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && '0' === e.discriminator && (i = f(i)), i;
}
function v(e) {
    var n;
    let r = (0, a.e7)([o.Z], () => o.Z.hidePersonalInformation);
    if (null == e) return;
    let i = g(e);
    return r && i.toLocaleLowerCase() === (null === (n = e.username) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && '0' === e.discriminator && (i = f(i)), i;
}
function y(e) {
    if (null != e) {
        if (m(e.globalName)) return e.globalName;
        else if (m(e.global_name)) return e.global_name;
        else return;
    }
}
function b(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return d;
    let i = y(e),
        a = r ? N(e) : null !== (n = e.username) && void 0 !== n ? n : d;
    return i === a ? i : null != i ? ''.concat(i, ' (').concat(a, ')') : a;
}
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case l.Skl.ONLINE:
            return n ? u.intl.string(u.t['9hghLC']) : u.intl.string(u.t.WbGtnJ);
        case l.Skl.OFFLINE:
            return u.intl.string(u.t.Vv0abG);
        case l.Skl.IDLE:
            return u.intl.string(u.t.qWbtVV);
        case l.Skl.DND:
            return u.intl.string(u.t.jaNpQE);
        case l.Skl.INVISIBLE:
            return u.intl.string(u.t.bg24HB);
        case l.Skl.STREAMING:
            return u.intl.string(u.t.XKYej4);
        case l.Skl.UNKNOWN:
        default:
            return null;
    }
}
function T(e, n) {
    let { maxDaysOld: r, minDaysOld: i = 0 } = n;
    if (null == e) return !1;
    let a = Date.now() - e.createdAt.getTime(),
        o = null == r || a <= c * r,
        s = a >= c * i;
    return (!!o && !!s) || !1;
}
function S(e) {
    return !T(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function A(e) {
    return T(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function C(e, n, r) {
    if (null == e) return u.intl.string(u.t.sKdZ6e);
    if (!m(e.username)) return d;
    let i = r;
    if (('always' === n.identifiable ? (i = !1) : 'never' === n.identifiable && (i = !0), '0' !== e.discriminator && e.discriminator !== l.fo$ && !n.forcePomelo)) return 'username' === n.mode ? e.username : i ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let a = i ? f(e.username) : e.username;
    return 'never' !== n.decoration ? p(a) : a;
}
function N(e, n) {
    let r = {
            ..._,
            ...n
        },
        i = 'auto' !== r.identifiable || o.Z.hidePersonalInformation;
    return C(e, r, i);
}
function R(e, n) {
    let r = {
        ..._,
        ...n
    };
    return C(
        e,
        r,
        (0, a.e7)([o.Z], () => o.Z.hidePersonalInformation)
    );
}
function O(e) {
    return (0, a.e7)([s.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? s.default.getUser(e.getRecipientId()) : null;
    });
}
n.ZP = {
    getName: E,
    useName: v,
    isNameConcealed: h,
    getUserTag: N,
    useUserTag: R,
    getFormattedName: b,
    getGlobalName: y,
    humanizeStatus: I,
    useDirectMessageRecipient: O
};
