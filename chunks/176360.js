let i, a;
n.d(t, { A: () => D });
var r = n(735438),
    s = n.n(r),
    l = n(17928),
    o = n(506774),
    d = n(228366),
    c = n(488926),
    _ = n(863036),
    E = n(734057),
    u = n(652215),
    A = n(719366);
let I = new Set(),
    T = u.XlH.CLOSED,
    h = !1,
    S = null,
    N = null,
    f = null,
    p = null,
    m = null,
    O = null,
    C = o.w.get(A.t0) || !1;
function R(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = c.xT(t)), n;
}
function g() {
    if (((f = _.A.getChannel()), (p = _.A.getCategory()), null == f)) return !1;
    let e = f.getGuildId();
    (N = S = R(f)),
        null == S[m] && (m = e),
        (a = null != p),
        (i = c.r(f, p)),
        (O = null),
        (h = !1),
        (T = u.XlH.CLOSED),
        I.clear();
}
class L extends l.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(_.A, E.A);
    }
    hasChanges() {
        return h;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return S?.[e];
    }
    get editedPermissionIds() {
        return Array.from(I);
    }
    get permissionOverwrites() {
        return S;
    }
    get selectedOverwriteId() {
        return m;
    }
    get formState() {
        return T;
    }
    get isLockable() {
        return a;
    }
    get locked() {
        return i;
    }
    get channel() {
        return f;
    }
    get category() {
        return p;
    }
    get advancedMode() {
        return C;
    }
}
let D = new L(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != f || t !== u.p_A.PERMISSIONS) return !1;
        g();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: g,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: a } = e,
            r = S?.[t];
        if (null == r || null == f) return !1;
        (r = { ...r, allow: n, deny: a }),
            (S = { ...S, [t]: r }),
            I.add(t),
            (T = u.XlH.OPEN),
            (h = !s().isEqual(S, N)),
            (i = c.r(f, p));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != S && null != S[t]) m = t;
        else {
            if (null == f) return !1;
            O = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        _.A.getSection() === u.p_A.PERMISSIONS && g();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (T = u.XlH.CLOSED), (S = null), (N = null), (f = null), (p = null), (h = !1), I.clear(), (m = null), (O = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == f) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == f || f.id !== e || null == (f = E.A.getChannel(e))) return !1;
                    p = _.A.getCategory();
                    let t = f.getGuildId();
                    if (null == t) return !1;
                    N = R(f);
                    let n = {};
                    return (
                        I.forEach((e) => {
                            null != S && (n[e] = S[e]);
                        }),
                        null == n[t] && null == f.permissionOverwrites[t] && (n[t] = c.xT(t)),
                        null == (S = { ...f.permissionOverwrites, ...n })[m]
                            ? (m = t)
                            : null != O && null != S[O] && ((m = O), (O = null)),
                        (i = c.r(f, p)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        T = u.XlH.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (T = u.XlH.OPEN) : ((T = u.XlH.CLOSED), g());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (C = t), o.w.set(A.t0, t);
    },
});
