let r, i, a, s;
n.d(t, {
    A: () => U,
    x: () => I,
}),
    n(896048),
    n(321073);
var o,
    l = n(812729),
    c = n.n(l),
    u = n(284009),
    d = n.n(u),
    f = n(735438),
    p = n.n(f),
    _ = n(311907),
    h = n(73153),
    m = n(15285),
    g = n(140547),
    E = n(60821),
    b = n(708455),
    y = n(652215);
function O(e, t, n) {
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 6,
    T = 7,
    C = N();
function N() {
    return {
        recentStatuses: b.UO,
        favoritedStatuses: [],
        currentDefaultStatus: null,
    };
}
function R() {
    C = N();
}
function w(e) {
    let { status: t, guildId: n, saveAsDefault: o } = e;
    if ((d()(t !== b.Kk.CUSTOM, "Hang Status cannot be custom"), (r = t), (i = null), (s = null), null != t)) {
        let e = [...C.recentStatuses],
            n = e.findIndex((e) => (0, E.A)(e) && e === t);
        n >= 0 ? e.splice(n, 1) : e.length === T && e.splice(T - 1, 1), (C.recentStatuses = [t, ...e]);
    }
    o &&
        (C.currentDefaultStatus = {
            status: t,
            customHangStatus: i,
            gameActivityHangStatus: s,
        });
    let { defaultStatusVariant: l } = (0, g.ko)({
        guildId: n,
        location: "UpdateHangStatus",
    });
    a = {
        type: y.$pd.HANG_STATUS,
        name: "Hang Status",
        state: "".concat(r, ":").concat(l),
    };
}
function P(e) {
    let { status: t, emoji: n, saveAsDefault: o } = e;
    (r = b.Kk.CUSTOM),
        (s = null),
        (i = {
            status: t,
            emoji: n,
        });
    let l = [...C.recentStatuses],
        c = l.findIndex((e) => !(0, E.A)(e) && e.status === t && p().isEqual(e.emoji, n));
    c >= 0 ? l.splice(c, 1) : l.length === T && l.splice(T - 1, 1),
        (C.recentStatuses = [i, ...l]),
        o &&
            (C.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                gameActivityHangStatus: s,
            }),
        (a = {
            type: y.$pd.HANG_STATUS,
            name: "Hang Status",
            state: r,
            details: t,
            emoji: n,
        });
}
function D(e) {
    let { applicationId: t, saveAsDefault: n } = e;
    (s = t),
        (r = null),
        (i = null),
        (a = null),
        n &&
            (C.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                gameActivityHangStatus: s,
            });
}
function x(e) {
    let { saveAsDefault: t } = e;
    (r = null),
        (i = null),
        (s = null),
        t &&
            (C.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                gameActivityHangStatus: null,
            }),
        (a = null);
}
function L(e) {
    let { status: t, emoji: n } = e,
        r = !1,
        i = [...C.favoritedStatuses],
        a = i.findIndex((e) => ((0, E.A)(e) ? e === t : e.status === t && p().isEqual(e.emoji, n))),
        s =
            null == n
                ? t
                : {
                      status: t,
                      emoji: n,
                  };
    return (
        -1 === a && i.length < I ? (i.push(s), (r = !0)) : a >= 0 && (i.splice(a, 1), (r = !0)),
        !!r && ((C.favoritedStatuses = i), !0)
    );
}
function j() {
    if (null == s) return !1;
    if (!m.Ay.getRunningVerifiedApplicationIds().includes(s)) {
        var e;
        return (
            (s = null),
            (null == (e = C.currentDefaultStatus) ? void 0 : e.gameActivityHangStatus) != null &&
                (C.currentDefaultStatus.gameActivityHangStatus = null),
            !0
        );
    }
    return !1;
}
function M(e) {
    let { statuses: t } = e,
        n = [...C.recentStatuses],
        o = [...C.favoritedStatuses];
    t.forEach((e) => {
        let { status: t, emoji: l } = e,
            c = n.findIndex((e) => ((0, E.A)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l))),
            u = o.findIndex((e) => ((0, E.A)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l)));
        c >= 0 && n.splice(c, 1),
            u >= 0 && o.splice(u, 1),
            t === (null == i ? void 0 : i.status) &&
                p().isEqual(l, null == i ? void 0 : i.emoji) &&
                ((r = null), (i = null), (s = null), (C.currentDefaultStatus = null), (a = null));
    }),
        (C.recentStatuses = n),
        (C.favoritedStatuses = o);
}
class k extends (o = _.Ay.PersistedStore) {
    initialize(e) {
        (C = A({}, N(), null != e ? e : {})), this.waitFor(m.Ay), this.syncWith([m.Ay], j);
    }
    getState() {
        return C;
    }
    getCurrentHangStatus() {
        return r;
    }
    getCustomHangStatus() {
        return i;
    }
    getGameActivityHangStatus() {
        return s;
    }
    getRecentStatuses() {
        return C.recentStatuses;
    }
    getFavoritedStatuses() {
        return C.favoritedStatuses;
    }
    getCurrentDefaultStatus() {
        return C.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == r ? null : a;
    }
    isFavorited(e) {
        let t = (0, E.A)(e);
        return C.favoritedStatuses.some(
            (n) =>
                ((0, E.A)(n) && t && n === e) || (!(0, E.A)(n) && !t && e.status === n.status && c()(e.emoji, n.emoji)),
        );
    }
}
O(k, "displayName", "HangStatusStore"),
    O(k, "persistKey", "HangStatusStore"),
    O(k, "migrations", [
        (e) => {
            if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
                let t = S(A({}, e.currentDefaultStatus), { gameActivityHangStatus: null });
                return S(A({}, e), { currentDefaultStatus: t });
            }
            return e;
        },
        (e) => ("recentCustomStatuses" in e && delete e.recentCustomStatuses, e),
        (e) => (
            null != e.currentDefaultStatus &&
                "expiresAt" in e.currentDefaultStatus &&
                delete e.currentDefaultStatus.expiresAt,
            e
        ),
    ]);
let U = new k(h.h, {
    LOGOUT: R,
    UPDATE_HANG_STATUS: w,
    UPDATE_HANG_STATUS_CUSTOM: P,
    UPDATE_HANG_STATUS_GAME_ACTIVITY: D,
    DELETE_INVALID_HANG_STATUSES: M,
    CLEAR_HANG_STATUS: x,
    UPDATE_FAVORITE_HANG_STATUS: L,
    RESET_HANG_STATUS_STATE: R,
});
