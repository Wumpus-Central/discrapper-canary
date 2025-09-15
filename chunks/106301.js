let r, i, a, o;
n.d(t, { Z: () => L }), n(388685);
var s,
    l = n(512722),
    c = n.n(l),
    u = n(392711),
    d = n.n(u),
    f = n(442837),
    _ = n(570140),
    p = n(594190),
    h = n(574176),
    m = n(505905),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = 7,
    I = 28800000,
    T = S();
function S() {
    return {
        recentStatuses: m.ux,
        currentDefaultStatus: null,
    };
}
function A() {
    T = S();
}
function C(e) {
    let { status: t, guildId: n, saveAsDefault: s } = e;
    if ((c()(t !== m.tN.CUSTOM, "Hang Status cannot be custom"), (r = t), (i = null), (o = null), null != t)) {
        let e = [...T.recentStatuses],
            n = e.findIndex((e) => "string" == typeof e && e === t);
        n >= 0 ? e.splice(n, 1) : e.length === v && e.splice(v - 1, 1), (T.recentStatuses = [t, ...e]);
    }
    s &&
        (T.currentDefaultStatus = {
            status: t,
            customHangStatus: i,
            gameActivityHangStatus: o,
            expiresAt: Date.now() + I,
        });
    let { defaultStatusVariant: l } = h.n.getCurrentConfig({
        guildId: n,
        location: "UpdateHangStatus",
    });
    a = {
        type: g.IIU.HANG_STATUS,
        name: "Hang Status",
        state: "".concat(r, ":").concat(l),
    };
}
function N(e) {
    let { status: t, emoji: n, saveAsDefault: s } = e;
    (r = m.tN.CUSTOM),
        (o = null),
        (i = {
            status: t,
            emoji: n,
        });
    let l = [...T.recentStatuses],
        c = l.findIndex((e) => "string" != typeof e && e.status === t && d().isEqual(e.emoji, n));
    c >= 0 ? l.splice(c, 1) : l.length === v && l.splice(v - 1, 1),
        (T.recentStatuses = [i, ...l]),
        s &&
            (T.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                gameActivityHangStatus: o,
                expiresAt: Date.now() + I,
            }),
        (a = {
            type: g.IIU.HANG_STATUS,
            name: "Hang Status",
            state: r,
            details: t,
            emoji: n,
        });
}
function R(e) {
    let { applicationId: t, saveAsDefault: n } = e;
    (o = t),
        (r = null),
        (i = null),
        (a = null),
        n &&
            (T.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                gameActivityHangStatus: o,
                expiresAt: Date.now() + I,
            });
}
function P(e) {
    let { saveAsDefault: t } = e;
    (r = null),
        (i = null),
        (o = null),
        t &&
            (T.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                gameActivityHangStatus: null,
                expiresAt: Date.now() + I,
            }),
        (a = null);
}
function w() {
    if (null == o) return !1;
    if (!p.ZP.getRunningVerifiedApplicationIds().includes(o)) {
        var e;
        return (
            (o = null),
            (null == (e = T.currentDefaultStatus) ? void 0 : e.gameActivityHangStatus) != null &&
                (T.currentDefaultStatus.gameActivityHangStatus = null),
            !0
        );
    }
    return !1;
}
function D(e) {
    let { statuses: t } = e,
        n = [...T.recentStatuses];
    t.forEach((e) => {
        let { status: t, emoji: s } = e,
            l = n.findIndex((e) => "string" != typeof e && e.status === t && d().isEqual(e.emoji, s));
        l >= 0 && n.splice(l, 1),
            t === (null == i ? void 0 : i.status) &&
                d().isEqual(s, null == i ? void 0 : i.emoji) &&
                ((r = null), (i = null), (o = null), (T.currentDefaultStatus = null), (a = null));
    }),
        (T.recentStatuses = n);
}
class x extends (s = f.ZP.PersistedStore) {
    initialize(e) {
        (T = b({}, S(), null != e ? e : {})), this.waitFor(p.ZP), this.syncWith([p.ZP], w);
    }
    getState() {
        return T;
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
        return T.recentStatuses;
    }
    getCurrentDefaultStatus() {
        return T.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == r ? null : a;
    }
}
E(x, "displayName", "HangStatusStore"),
    E(x, "persistKey", "HangStatusStore"),
    E(x, "migrations", [
        (e) => {
            if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
                let t = O(b({}, e.currentDefaultStatus), { gameActivityHangStatus: null });
                return O(b({}, e), { currentDefaultStatus: t });
            }
            return e;
        },
        (e) => ("recentCustomStatuses" in e && delete e.recentCustomStatuses, e),
    ]);
let L = new x(_.Z, {
    LOGOUT: A,
    UPDATE_HANG_STATUS: C,
    UPDATE_HANG_STATUS_CUSTOM: N,
    UPDATE_HANG_STATUS_GAME_ACTIVITY: R,
    DELETE_INVALID_HANG_STATUSES: D,
    CLEAR_HANG_STATUS: P,
});
