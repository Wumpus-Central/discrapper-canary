let i, r;
n.d(t, { A: () => y });
var a = n(735438),
    l = n.n(a),
    s = n(311907),
    o = n(506774),
    d = n(73153),
    c = n(488926),
    u = n(863036),
    A = n(734057),
    h = n(652215),
    _ = n(737045);
let m = new Set(),
    p = h.XlH.CLOSED,
    g = !1,
    E = null,
    f = null,
    I = null,
    C = null,
    N = null,
    T = null,
    S = o.w.get(_.t0) || !1;
function x(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = c.xT(t)), n;
}
function v() {
    if (((I = u.A.getChannel()), (C = u.A.getCategory()), null == I)) return !1;
    let e = I.getGuildId();
    (f = E = x(I)),
        null == E[N] && (N = e),
        (r = null != C),
        (i = c.r(I, C)),
        (T = null),
        (g = !1),
        (p = h.XlH.CLOSED),
        m.clear();
}
class b extends s.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(u.A, A.A);
    }
    hasChanges() {
        return g;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return E?.[e];
    }
    get editedPermissionIds() {
        return Array.from(m);
    }
    get permissionOverwrites() {
        return E;
    }
    get selectedOverwriteId() {
        return N;
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
        return I;
    }
    get category() {
        return C;
    }
    get advancedMode() {
        return S;
    }
}
let y = new b(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != I || t !== h.p_A.PERMISSIONS) return !1;
        v();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: v,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: r } = e,
            a = E?.[t];
        if (null == a || null == I) return !1;
        (a = { ...a, allow: n, deny: r }),
            (E = { ...E, [t]: a }),
            m.add(t),
            (p = h.XlH.OPEN),
            (g = !l().isEqual(E, f)),
            (i = c.r(I, C));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != E && null != E[t]) N = t;
        else {
            if (null == I) return !1;
            T = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        u.A.getSection() === h.p_A.PERMISSIONS && v();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (p = h.XlH.CLOSED), (E = null), (f = null), (I = null), (C = null), (g = !1), m.clear(), (N = null), (T = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == I) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == I || I.id !== e || null == (I = A.A.getChannel(e))) return !1;
                    C = u.A.getCategory();
                    let t = I.getGuildId();
                    if (null == t) return !1;
                    f = x(I);
                    let n = {};
                    return (
                        m.forEach((e) => {
                            null != E && (n[e] = E[e]);
                        }),
                        null == n[t] && null == I.permissionOverwrites[t] && (n[t] = c.xT(t)),
                        null == (E = { ...I.permissionOverwrites, ...n })[N]
                            ? (N = t)
                            : null != T && null != E[T] && ((N = T), (T = null)),
                        (i = c.r(I, C)),
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
        t ? (p = h.XlH.OPEN) : ((p = h.XlH.CLOSED), v());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (S = t), o.w.set(_.t0, t);
    },
});
