"use strict";
let i, r;
n.d(t, { A: () => y });
var a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(506774),
    d = n(228366),
    c = n(488926),
    u = n(863036),
    _ = n(734057),
    E = n(652215),
    A = n(719366);
let h = new Set(),
    I = E.XlH.CLOSED,
    f = !1,
    p = null,
    T = null,
    m = null,
    g = null,
    S = null,
    N = null,
    C = o.w.get(A.t0) || !1;
function O(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = c.xT(t)), n;
}
function R() {
    if (((m = u.A.getChannel()), (g = u.A.getCategory()), null == m)) return !1;
    let e = m.getGuildId();
    (T = p = O(m)),
        null == p[S] && (S = e),
        (r = null != g),
        (i = c.r(m, g)),
        (N = null),
        (f = !1),
        (I = E.XlH.CLOSED),
        h.clear();
}
class L extends l.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(u.A, _.A);
    }
    hasChanges() {
        return f;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return p?.[e];
    }
    get editedPermissionIds() {
        return Array.from(h);
    }
    get permissionOverwrites() {
        return p;
    }
    get selectedOverwriteId() {
        return S;
    }
    get formState() {
        return I;
    }
    get isLockable() {
        return r;
    }
    get locked() {
        return i;
    }
    get channel() {
        return m;
    }
    get category() {
        return g;
    }
    get advancedMode() {
        return C;
    }
}
let y = new L(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != m || t !== E.p_A.PERMISSIONS) return !1;
        R();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: R,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: r } = e,
            a = p?.[t];
        if (null == a || null == m) return !1;
        (a = { ...a, allow: n, deny: r }),
            (p = { ...p, [t]: a }),
            h.add(t),
            (I = E.XlH.OPEN),
            (f = !s().isEqual(p, T)),
            (i = c.r(m, g));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != p && null != p[t]) S = t;
        else {
            if (null == m) return !1;
            N = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        u.A.getSection() === E.p_A.PERMISSIONS && R();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (I = E.XlH.CLOSED), (p = null), (T = null), (m = null), (g = null), (f = !1), h.clear(), (S = null), (N = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == m) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == m || m.id !== e || null == (m = _.A.getChannel(e))) return !1;
                    g = u.A.getCategory();
                    let t = m.getGuildId();
                    if (null == t) return !1;
                    T = O(m);
                    let n = {};
                    return (
                        h.forEach((e) => {
                            null != p && (n[e] = p[e]);
                        }),
                        null == n[t] && null == m.permissionOverwrites[t] && (n[t] = c.xT(t)),
                        null == (p = { ...m.permissionOverwrites, ...n })[S]
                            ? (S = t)
                            : null != N && null != p[N] && ((S = N), (N = null)),
                        (i = c.r(m, g)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        I = E.XlH.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (I = E.XlH.OPEN) : ((I = E.XlH.CLOSED), R());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (C = t), o.w.set(A.t0, t);
    },
});
