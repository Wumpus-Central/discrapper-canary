let r, i, a, o;
n.d(t, {
    Z: () => U,
    o: () => S,
}),
    n(388685),
    n(539854);
var s,
    l = n(348327),
    c = n.n(l),
    u = n(512722),
    d = n.n(u),
    f = n(392711),
    _ = n.n(f),
    p = n(442837),
    h = n(570140),
    m = n(594190),
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 6,
    A = 7,
    C = N();
function N() {
    return {
        recentStatuses: b.ux,
        favoritedStatuses: [],
        currentDefaultStatus: null,
    };
}
function R() {
    C = N();
}
function P(e) {
    let { status: t, guildId: n, saveAsDefault: s } = e;
    if ((d()(t !== b.tN.CUSTOM, "Hang Status cannot be custom"), (r = t), (i = null), (o = null), null != t)) {
        let e = [...C.recentStatuses],
            n = e.findIndex((e) => (0, E.Z)(e) && e === t);
        n >= 0 ? e.splice(n, 1) : e.length === A && e.splice(A - 1, 1), (C.recentStatuses = [t, ...e]);
    }
    s &&
        (C.currentDefaultStatus = {
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
    let l = [...C.recentStatuses],
        c = l.findIndex((e) => !(0, E.Z)(e) && e.status === t && _().isEqual(e.emoji, n));
    c >= 0 ? l.splice(c, 1) : l.length === A && l.splice(A - 1, 1),
        (C.recentStatuses = [i, ...l]),
        s &&
            (C.currentDefaultStatus = {
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
            (C.currentDefaultStatus = {
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
        a = i.findIndex((e) => ((0, E.Z)(e) ? e === t : e.status === t && _().isEqual(e.emoji, n))),
        o =
            null == n
                ? t
                : {
                      status: t,
                      emoji: n,
                  };
    return (
        -1 === a && i.length < S ? (i.push(o), (r = !0)) : a >= 0 && (i.splice(a, 1), (r = !0)),
        !!r && ((C.favoritedStatuses = i), !0)
    );
}
function M() {
    if (null == o) return !1;
    if (!m.ZP.getRunningVerifiedApplicationIds().includes(o)) {
        var e;
        return (
            (o = null),
            (null == (e = C.currentDefaultStatus) ? void 0 : e.gameActivityHangStatus) != null &&
                (C.currentDefaultStatus.gameActivityHangStatus = null),
            !0
        );
    }
    return !1;
}
function j(e) {
    let { statuses: t } = e,
        n = [...C.recentStatuses],
        s = [...C.favoritedStatuses];
    t.forEach((e) => {
        let { status: t, emoji: l } = e,
            c = n.findIndex((e) => ((0, E.Z)(e) ? e === t : e.status === t && _().isEqual(e.emoji, l))),
            u = s.findIndex((e) => ((0, E.Z)(e) ? e === t : e.status === t && _().isEqual(e.emoji, l)));
        c >= 0 && n.splice(c, 1),
            u >= 0 && s.splice(u, 1),
            t === (null == i ? void 0 : i.status) &&
                _().isEqual(l, null == i ? void 0 : i.emoji) &&
                ((r = null), (i = null), (o = null), (C.currentDefaultStatus = null), (a = null));
    }),
        (C.recentStatuses = n),
        (C.favoritedStatuses = s);
}
class k extends (s = p.ZP.PersistedStore) {
    initialize(e) {
        (C = v({}, N(), null != e ? e : {})), this.waitFor(m.ZP), this.syncWith([m.ZP], M);
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
        return o;
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
        let t = (0, E.Z)(e);
        return C.favoritedStatuses.some(
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
                let t = T(v({}, e.currentDefaultStatus), { gameActivityHangStatus: null });
                return T(v({}, e), { currentDefaultStatus: t });
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
let U = new k(h.Z, {
    LOGOUT: R,
    UPDATE_HANG_STATUS: P,
    UPDATE_HANG_STATUS_CUSTOM: D,
    UPDATE_HANG_STATUS_GAME_ACTIVITY: w,
    DELETE_INVALID_HANG_STATUSES: j,
    CLEAR_HANG_STATUS: x,
    UPDATE_FAVORITE_HANG_STATUS: L,
    RESET_HANG_STATUS_STATE: R,
});
