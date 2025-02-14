let i, l;
n.d(t, { Z: () => O }), n(47120);
var r,
    a,
    s,
    o = n(392711),
    d = n.n(o),
    c = n(442837),
    u = n(433517),
    h = n(570140),
    m = n(700785),
    p = n(388610),
    g = n(592125),
    _ = n(981631),
    f = n(71080);
let E = new Set(),
    I = _.QZA.CLOSED,
    C = !1,
    N = null,
    v = null,
    T = null,
    S = null,
    A = null,
    Z = null,
    x = u.K.get(f.kf) || !1;
function b(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = m.we(t)), n;
}
function L() {
    if (((T = p.Z.getChannel()), (S = p.Z.getCategory()), null == T)) return !1;
    let e = T.getGuildId();
    (v = N = b(T)), null == N[A] && (A = e), (l = null != S), (i = m.o4(T, S)), (Z = null), (C = !1), (I = _.QZA.CLOSED), E.clear();
}
class y extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, g.Z);
    }
    hasChanges() {
        return C;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == N ? void 0 : N[e];
    }
    get editedPermissionIds() {
        return Array.from(E);
    }
    get permissionOverwrites() {
        return N;
    }
    get selectedOverwriteId() {
        return A;
    }
    get formState() {
        return I;
    }
    get isLockable() {
        return l;
    }
    get locked() {
        return i;
    }
    get channel() {
        return T;
    }
    get category() {
        return S;
    }
    get advancedMode() {
        return x;
    }
}
(s = 'ChannelSettingsPermissionsStore'),
    (a = 'displayName') in y
        ? Object.defineProperty(y, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[a] = s);
let O = new y(h.Z, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != T || t !== _.CoT.PERMISSIONS) return !1;
        L();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: L,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: l } = e,
            r = null == N ? void 0 : N[t];
        if (null == r || null == T) return !1;
        (r = {
            ...r,
            allow: n,
            deny: l
        }),
            (N = {
                ...N,
                [t]: r
            }),
            E.add(t),
            (I = _.QZA.OPEN),
            (C = !d().isEqual(N, v)),
            (i = m.o4(T, S));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != N && null != N[t]) A = t;
        else {
            if (null == T) return !1;
            Z = t;
        }
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (I = _.QZA.CLOSED), (N = null), (v = null), (T = null), (S = null), (C = !1), E.clear(), (A = null), (Z = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == T) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == T || T.id !== e || null == (T = g.Z.getChannel(e))) return !1;
                    S = p.Z.getCategory();
                    let t = T.getGuildId();
                    if (null == t) return !1;
                    v = b(T);
                    let n = {};
                    return (
                        E.forEach((e) => {
                            null != N && (n[e] = N[e]);
                        }),
                        null == n[t] && null == T.permissionOverwrites[t] && (n[t] = m.we(t)),
                        null ==
                        (N = {
                            ...T.permissionOverwrites,
                            ...n
                        })[A]
                            ? (A = t)
                            : null != Z && null != N[Z] && ((A = Z), (Z = null)),
                        (i = m.o4(T, S)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        I = _.QZA.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (I = _.QZA.OPEN) : ((I = _.QZA.CLOSED), L());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (x = t), u.K.set(f.kf, t);
    }
});
