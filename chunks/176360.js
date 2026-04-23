let i, r;
n.d(t, { A: () => b });
var a = n(735438),
    l = n.n(a),
    s = n(17928),
    o = n(506774),
    d = n(228366),
    u = n(488926),
    c = n(863036),
    _ = n(734057),
    A = n(652215),
    h = n(719366);
let E = new Set(),
    p = A.XlH.CLOSED,
    m = !1,
    I = null,
    g = null,
    C = null,
    T = null,
    f = null,
    N = null,
    S = o.w.get(h.t0) || !1;
function O(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = u.xT(t)), n;
}
function L() {
    if (((C = c.A.getChannel()), (T = c.A.getCategory()), null == C)) return !1;
    let e = C.getGuildId();
    (g = I = O(C)),
        null == I[f] && (f = e),
        (r = null != T),
        (i = u.r(C, T)),
        (N = null),
        (m = !1),
        (p = A.XlH.CLOSED),
        E.clear();
}
class y extends s.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(c.A, _.A);
    }
    hasChanges() {
        return m;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return I?.[e];
    }
    get editedPermissionIds() {
        return Array.from(E);
    }
    get permissionOverwrites() {
        return I;
    }
    get selectedOverwriteId() {
        return f;
    }
    get formState() {
        return p;
    }
    get isLockable() {
        return r;
    }
    get locked() {
        return i;
    }
    get channel() {
        return C;
    }
    get category() {
        return T;
    }
    get advancedMode() {
        return S;
    }
}
let b = new y(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != C || t !== A.p_A.PERMISSIONS) return !1;
        L();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: L,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: r } = e,
            a = I?.[t];
        if (null == a || null == C) return !1;
        (a = { ...a, allow: n, deny: r }),
            (I = { ...I, [t]: a }),
            E.add(t),
            (p = A.XlH.OPEN),
            (m = !l().isEqual(I, g)),
            (i = u.r(C, T));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != I && null != I[t]) f = t;
        else {
            if (null == C) return !1;
            N = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        c.A.getSection() === A.p_A.PERMISSIONS && L();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (p = A.XlH.CLOSED), (I = null), (g = null), (C = null), (T = null), (m = !1), E.clear(), (f = null), (N = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == C) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == C || C.id !== e || null == (C = _.A.getChannel(e))) return !1;
                    T = c.A.getCategory();
                    let t = C.getGuildId();
                    if (null == t) return !1;
                    g = O(C);
                    let n = {};
                    return (
                        E.forEach((e) => {
                            null != I && (n[e] = I[e]);
                        }),
                        null == n[t] && null == C.permissionOverwrites[t] && (n[t] = u.xT(t)),
                        null == (I = { ...C.permissionOverwrites, ...n })[f]
                            ? (f = t)
                            : null != N && null != I[N] && ((f = N), (N = null)),
                        (i = u.r(C, T)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        p = A.XlH.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (p = A.XlH.OPEN) : ((p = A.XlH.CLOSED), L());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (S = t), o.w.set(h.t0, t);
    },
});
