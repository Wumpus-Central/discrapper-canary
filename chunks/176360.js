"use strict";
let i, r;
n.d(t, { A: () => R });
var s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(506774),
    u = n(228366),
    c = n(488926),
    d = n(863036),
    _ = n(734057),
    f = n(652215),
    h = n(719366);
let p = new Set(),
    E = f.XlH.CLOSED,
    m = !1,
    g = null,
    A = null,
    I = null,
    T = null,
    S = null,
    N = null,
    y = l.w.get(h.t0) || !1;
function C(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = c.xT(t)), n;
}
function v() {
    if (((I = d.A.getChannel()), (T = d.A.getCategory()), null == I)) return !1;
    let e = I.getGuildId();
    (A = g = C(I)),
        null == g[S] && (S = e),
        (r = null != T),
        (i = c.r(I, T)),
        (N = null),
        (m = !1),
        (E = f.XlH.CLOSED),
        p.clear();
}
class O extends o.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(d.A, _.A);
    }
    hasChanges() {
        return m;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return g?.[e];
    }
    get editedPermissionIds() {
        return Array.from(p);
    }
    get permissionOverwrites() {
        return g;
    }
    get selectedOverwriteId() {
        return S;
    }
    get formState() {
        return E;
    }
    get isLockable() {
        return r;
    }
    get locked() {
        return i;
    }
    get channel() {
        return I;
    }
    get category() {
        return T;
    }
    get advancedMode() {
        return y;
    }
}
let R = new O(u.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != I || t !== f.p_A.PERMISSIONS) return !1;
        v();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: v,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: r } = e,
            s = g?.[t];
        if (null == s || null == I) return !1;
        (s = { ...s, allow: n, deny: r }),
            (g = { ...g, [t]: s }),
            p.add(t),
            (E = f.XlH.OPEN),
            (m = !a().isEqual(g, A)),
            (i = c.r(I, T));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != g && null != g[t]) S = t;
        else {
            if (null == I) return !1;
            N = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        d.A.getSection() === f.p_A.PERMISSIONS && v();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (E = f.XlH.CLOSED), (g = null), (A = null), (I = null), (T = null), (m = !1), p.clear(), (S = null), (N = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == I) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == I || I.id !== e || null == (I = _.A.getChannel(e))) return !1;
                    T = d.A.getCategory();
                    let t = I.getGuildId();
                    if (null == t) return !1;
                    A = C(I);
                    let n = {};
                    return (
                        p.forEach((e) => {
                            null != g && (n[e] = g[e]);
                        }),
                        null == n[t] && null == I.permissionOverwrites[t] && (n[t] = c.xT(t)),
                        null == (g = { ...I.permissionOverwrites, ...n })[S]
                            ? (S = t)
                            : null != N && null != g[N] && ((S = N), (N = null)),
                        (i = c.r(I, T)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        E = f.XlH.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (E = f.XlH.OPEN) : ((E = f.XlH.CLOSED), v());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (y = t), l.w.set(h.t0, t);
    },
});
