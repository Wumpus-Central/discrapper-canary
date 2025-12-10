let r, i, a, o;
n.d(t, {
    Z: () => U,
    o: () => T,
}),
    n(388685),
    n(539854);
var s,
    l = n(348327),
    c = n.n(l),
    u = n(512722),
    d = n.n(u),
    f = n(392711),
    p = n.n(f),
    _ = n(442837),
    m = n(570140),
    h = n(594190),
    g = n(574176),
    E = n(54332),
    b = n(505905),
    y = n(981631);
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
function v(e) {
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
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 6,
    C = 7,
    A = N();
function N() {
    return {
        recentStatuses: b.ux,
        favoritedStatuses: [],
        currentDefaultStatus: null,
    };
}
function P() {
    A = N();
}
function R(e) {
    let { status: t, guildId: n, saveAsDefault: s } = e;
    if ((d()(t !== b.tN.CUSTOM, "Hang Status cannot be custom"), (r = t), (i = null), (o = null), null != t)) {
        let e = [...A.recentStatuses],
            n = e.findIndex((e) => (0, E.Z)(e) && e === t);
        n >= 0 ? e.splice(n, 1) : e.length === C && e.splice(C - 1, 1), (A.recentStatuses = [t, ...e]);
    }
    s &&
        (A.currentDefaultStatus = {
            status: t,
            customHangStatus: i,
            gameActivityHangStatus: o,
        });
    let { defaultStatusVariant: l } = (0, g.gx)({
        guildId: n,
        location: "UpdateHangStatus",
    });
    a = {
        type: y.IIU.HANG_STATUS,
        name: "Hang Status",
        state: "".concat(r, ":").concat(l),
    };
}
function D(e) {
    let { status: t, emoji: n, saveAsDefault: s } = e;
    (r = b.tN.CUSTOM),
        (o = null),
        (i = {
            status: t,
            emoji: n,
        });
    let l = [...A.recentStatuses],
        c = l.findIndex((e) => !(0, E.Z)(e) && e.status === t && p().isEqual(e.emoji, n));
    c >= 0 ? l.splice(c, 1) : l.length === C && l.splice(C - 1, 1),
        (A.recentStatuses = [i, ...l]),
        s &&
            (A.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                gameActivityHangStatus: o,
            }),
        (a = {
            type: y.IIU.HANG_STATUS,
            name: "Hang Status",
            state: r,
            details: t,
            emoji: n,
        });
}
function w(e) {
    let { applicationId: t, saveAsDefault: n } = e;
    (o = t),
        (r = null),
        (i = null),
        (a = null),
        n &&
            (A.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                gameActivityHangStatus: o,
            });
}
function x(e) {
    let { saveAsDefault: t } = e;
    (r = null),
        (i = null),
        (o = null),
        t &&
            (A.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                gameActivityHangStatus: null,
            }),
        (a = null);
}
function L(e) {
    let { status: t, emoji: n } = e,
        r = !1,
        i = [...A.favoritedStatuses],
        a = i.findIndex((e) => ((0, E.Z)(e) ? e === t : e.status === t && p().isEqual(e.emoji, n))),
        o =
            null == n
                ? t
                : {
                      status: t,
                      emoji: n,
                  };
    return (
        -1 === a && i.length < T ? (i.push(o), (r = !0)) : a >= 0 && (i.splice(a, 1), (r = !0)),
        !!r && ((A.favoritedStatuses = i), !0)
    );
}
function j() {
    if (null == o) return !1;
    if (!h.ZP.getRunningVerifiedApplicationIds().includes(o)) {
        var e;
        return (
            (o = null),
            (null == (e = A.currentDefaultStatus) ? void 0 : e.gameActivityHangStatus) != null &&
                (A.currentDefaultStatus.gameActivityHangStatus = null),
            !0
        );
    }
    return !1;
}
function M(e) {
    let { statuses: t } = e,
        n = [...A.recentStatuses],
        s = [...A.favoritedStatuses];
    t.forEach((e) => {
        let { status: t, emoji: l } = e,
            c = n.findIndex((e) => ((0, E.Z)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l))),
            u = s.findIndex((e) => ((0, E.Z)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l)));
        c >= 0 && n.splice(c, 1),
            u >= 0 && s.splice(u, 1),
            t === (null == i ? void 0 : i.status) &&
                p().isEqual(l, null == i ? void 0 : i.emoji) &&
                ((r = null), (i = null), (o = null), (A.currentDefaultStatus = null), (a = null));
    }),
        (A.recentStatuses = n),
        (A.favoritedStatuses = s);
}
class k extends (s = _.ZP.PersistedStore) {
    initialize(e) {
        (A = v({}, N(), null != e ? e : {})), this.waitFor(h.ZP), this.syncWith([h.ZP], j);
    }
    getState() {
        return A;
    }
    getCurrentHangStatus() {
        return r;
    }
    getCustomHangStatus() {
        return i;
    }
    getGameActivityHangStatus() {
        return o;
    }
    getRecentStatuses() {
        return A.recentStatuses;
    }
    getFavoritedStatuses() {
        return A.favoritedStatuses;
    }
    getCurrentDefaultStatus() {
        return A.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == r ? null : a;
    }
    isFavorited(e) {
        let t = (0, E.Z)(e);
        return A.favoritedStatuses.some(
            (n) =>
                ((0, E.Z)(n) && t && n === e) || (!(0, E.Z)(n) && !t && e.status === n.status && c()(e.emoji, n.emoji)),
        );
    }
}
O(k, "displayName", "HangStatusStore"),
    O(k, "persistKey", "HangStatusStore"),
    O(k, "migrations", [
        (e) => {
            if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
                let t = I(v({}, e.currentDefaultStatus), { gameActivityHangStatus: null });
                return I(v({}, e), { currentDefaultStatus: t });
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
let U = new k(m.Z, {
    LOGOUT: P,
    UPDATE_HANG_STATUS: R,
    UPDATE_HANG_STATUS_CUSTOM: D,
    UPDATE_HANG_STATUS_GAME_ACTIVITY: w,
    DELETE_INVALID_HANG_STATUSES: M,
    CLEAR_HANG_STATUS: x,
    UPDATE_FAVORITE_HANG_STATUS: L,
    RESET_HANG_STATUS_STATE: P,
});
