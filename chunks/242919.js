"use strict";
let r, i, a, s;
n.d(t, { A: () => x, x: () => I }), n(321073);
var o = n(812729),
    l = n.n(o),
    u = n(284009),
    c = n.n(u),
    d = n(735438),
    _ = n.n(d),
    f = n(311907),
    p = n(73153),
    h = n(15285),
    m = n(140547),
    g = n(60821),
    E = n(708455),
    A = n(652215);
let I = 6,
    T = 7,
    y = S();
function S() {
    return { recentStatuses: E.UO, favoritedStatuses: [], currentDefaultStatus: null };
}
function v() {
    y = S();
}
function C(e) {
    let { status: t, guildId: n, saveAsDefault: o } = e;
    if ((c()(t !== E.Kk.CUSTOM, "Hang Status cannot be custom"), (r = t), (i = null), (s = null), null != t)) {
        let e = [...y.recentStatuses],
            n = e.findIndex((e) => (0, g.A)(e) && e === t);
        n >= 0 ? e.splice(n, 1) : e.length === T && e.splice(T - 1, 1), (y.recentStatuses = [t, ...e]);
    }
    o && (y.currentDefaultStatus = { status: t, customHangStatus: i, gameActivityHangStatus: s });
    let { defaultStatusVariant: l } = (0, m.ko)({ guildId: n, location: "UpdateHangStatus" });
    a = { type: A.$pd.HANG_STATUS, name: "Hang Status", state: `${r}:${l}` };
}
function b(e) {
    let { status: t, emoji: n, saveAsDefault: o } = e;
    (r = E.Kk.CUSTOM), (s = null), (i = { status: t, emoji: n });
    let l = [...y.recentStatuses],
        u = l.findIndex((e) => !(0, g.A)(e) && e.status === t && _().isEqual(e.emoji, n));
    u >= 0 ? l.splice(u, 1) : l.length === T && l.splice(T - 1, 1),
        (y.recentStatuses = [i, ...l]),
        o && (y.currentDefaultStatus = { status: r, customHangStatus: i, gameActivityHangStatus: s }),
        (a = { type: A.$pd.HANG_STATUS, name: "Hang Status", state: r, details: t, emoji: n });
}
function N(e) {
    let { applicationId: t, saveAsDefault: n } = e;
    (s = t),
        (r = null),
        (i = null),
        (a = null),
        n && (y.currentDefaultStatus = { status: r, customHangStatus: i, gameActivityHangStatus: s });
}
function R(e) {
    let { saveAsDefault: t } = e;
    (r = null),
        (i = null),
        (s = null),
        t && (y.currentDefaultStatus = { status: null, customHangStatus: null, gameActivityHangStatus: null }),
        (a = null);
}
function O(e) {
    let { status: t, emoji: n } = e,
        r = !1,
        i = [...y.favoritedStatuses],
        a = i.findIndex((e) => ((0, g.A)(e) ? e === t : e.status === t && _().isEqual(e.emoji, n))),
        s = null == n ? t : { status: t, emoji: n };
    return (
        -1 === a && i.length < I ? (i.push(s), (r = !0)) : a >= 0 && (i.splice(a, 1), (r = !0)),
        !!r && ((y.favoritedStatuses = i), !0)
    );
}
function D() {
    return (
        null != s &&
        !h.Ay.getRunningVerifiedApplicationIds().includes(s) &&
        ((s = null),
        y.currentDefaultStatus?.gameActivityHangStatus != null &&
            (y.currentDefaultStatus.gameActivityHangStatus = null),
        !0)
    );
}
function L(e) {
    let { statuses: t } = e,
        n = [...y.recentStatuses],
        o = [...y.favoritedStatuses];
    t.forEach((e) => {
        let { status: t, emoji: l } = e,
            u = n.findIndex((e) => ((0, g.A)(e) ? e === t : e.status === t && _().isEqual(e.emoji, l))),
            c = o.findIndex((e) => ((0, g.A)(e) ? e === t : e.status === t && _().isEqual(e.emoji, l)));
        u >= 0 && n.splice(u, 1),
            c >= 0 && o.splice(c, 1),
            t === i?.status &&
                _().isEqual(l, i?.emoji) &&
                ((r = null), (i = null), (s = null), (y.currentDefaultStatus = null), (a = null));
    }),
        (y.recentStatuses = n),
        (y.favoritedStatuses = o);
}
class w extends f.Ay.PersistedStore {
    static displayName = "HangStatusStore";
    static persistKey = "HangStatusStore";
    static migrations = [
        (e) => {
            if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
                let t = { ...e.currentDefaultStatus, gameActivityHangStatus: null };
                return { ...e, currentDefaultStatus: t };
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
    ];
    initialize(e) {
        (y = { ...S(), ...(e ?? {}) }), this.waitFor(h.Ay), this.syncWith([h.Ay], D);
    }
    getState() {
        return y;
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
        return y.recentStatuses;
    }
    getFavoritedStatuses() {
        return y.favoritedStatuses;
    }
    getCurrentDefaultStatus() {
        return y.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == r ? null : a;
    }
    isFavorited(e) {
        let t = (0, g.A)(e);
        return y.favoritedStatuses.some(
            (n) =>
                ((0, g.A)(n) && t && n === e) || (!(0, g.A)(n) && !t && e.status === n.status && l()(e.emoji, n.emoji)),
        );
    }
}
let x = new w(p.h, {
    LOGOUT: v,
    UPDATE_HANG_STATUS: C,
    UPDATE_HANG_STATUS_CUSTOM: b,
    UPDATE_HANG_STATUS_GAME_ACTIVITY: N,
    DELETE_INVALID_HANG_STATUSES: L,
    CLEAR_HANG_STATUS: R,
    UPDATE_FAVORITE_HANG_STATUS: O,
    RESET_HANG_STATUS_STATE: v,
});
