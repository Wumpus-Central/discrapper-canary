let i, r;
n.d(t, { A: () => v });
var a = n(735438),
    l = n.n(a),
    s = n(311907),
    o = n(506774),
    d = n(73153),
    u = n(488926),
    c = n(863036),
    A = n(734057),
    h = n(652215),
    _ = n(737045);
let E = new Set(),
    p = h.XlH.CLOSED,
    m = !1,
    g = null,
    I = null,
    C = null,
    f = null,
    T = null,
    S = null,
    N = o.w.get(_.t0) || !1;
function O(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = u.xT(t)), n;
}
function L() {
    if (((C = c.A.getChannel()), (f = c.A.getCategory()), null == C)) return !1;
    let e = C.getGuildId();
    (I = g = O(C)),
        null == g[T] && (T = e),
        (r = null != f),
        (i = u.r(C, f)),
        (S = null),
        (m = !1),
        (p = h.XlH.CLOSED),
        E.clear();
}
class y extends s.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(c.A, A.A);
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
        return Array.from(E);
    }
    get permissionOverwrites() {
        return g;
    }
    get selectedOverwriteId() {
        return T;
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
        return f;
    }
    get advancedMode() {
        return N;
    }
}
let v = new y(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != C || t !== h.p_A.PERMISSIONS) return !1;
        L();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: L,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: r } = e,
            a = g?.[t];
        if (null == a || null == C) return !1;
        (a = { ...a, allow: n, deny: r }),
            (g = { ...g, [t]: a }),
            E.add(t),
            (p = h.XlH.OPEN),
            (m = !l().isEqual(g, I)),
            (i = u.r(C, f));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != g && null != g[t]) T = t;
        else {
            if (null == C) return !1;
            S = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        c.A.getSection() === h.p_A.PERMISSIONS && L();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (p = h.XlH.CLOSED), (g = null), (I = null), (C = null), (f = null), (m = !1), E.clear(), (T = null), (S = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == C) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == C || C.id !== e || null == (C = A.A.getChannel(e))) return !1;
                    f = c.A.getCategory();
                    let t = C.getGuildId();
                    if (null == t) return !1;
                    I = O(C);
                    let n = {};
                    return (
                        E.forEach((e) => {
                            null != g && (n[e] = g[e]);
                        }),
                        null == n[t] && null == C.permissionOverwrites[t] && (n[t] = u.xT(t)),
                        null == (g = { ...C.permissionOverwrites, ...n })[T]
                            ? (T = t)
                            : null != S && null != g[S] && ((T = S), (S = null)),
                        (i = u.r(C, f)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        p = h.XlH.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (p = h.XlH.OPEN) : ((p = h.XlH.CLOSED), L());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (N = t), o.w.set(_.t0, t);
    },
});
