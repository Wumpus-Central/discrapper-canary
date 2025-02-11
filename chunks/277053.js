let i, l;
n.d(t, { Z: () => P }), n(47120);
var r,
    a,
    s,
    o = n(392711),
    c = n.n(o),
    d = n(442837),
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
    v = null,
    N = null,
    T = null,
    S = null,
    Z = null,
    A = null,
    b = u.K.get(f.kf) || !1;
function x(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = m.we(t)), n;
}
function L() {
    if (((T = p.Z.getChannel()), (S = p.Z.getCategory()), null == T)) return !1;
    let e = T.getGuildId();
    (N = v = x(T)), null == v[Z] && (Z = e), (l = null != S), (i = m.o4(T, S)), (A = null), (C = !1), (I = _.QZA.CLOSED), E.clear();
}
class y extends (r = d.ZP.Store) {
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
        return null == v ? void 0 : v[e];
    }
    get editedPermissionIds() {
        return Array.from(E);
    }
    get permissionOverwrites() {
        return v;
    }
    get selectedOverwriteId() {
        return Z;
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
        return b;
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
let P = new y(h.Z, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != T || t !== _.CoT.PERMISSIONS) return !1;
        L();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: L,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: l } = e,
            r = null == v ? void 0 : v[t];
        if (null == r || null == T) return !1;
        (r = {
            ...r,
            allow: n,
            deny: l
        }),
            (v = {
                ...v,
                [t]: r
            }),
            E.add(t),
            (I = _.QZA.OPEN),
            (C = !c().isEqual(v, N)),
            (i = m.o4(T, S));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != v && null != v[t]) Z = t;
        else {
            if (null == T) return !1;
            A = t;
        }
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (I = _.QZA.CLOSED), (v = null), (N = null), (T = null), (S = null), (C = !1), E.clear(), (Z = null), (A = null);
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
                    N = x(T);
                    let n = {};
                    return (
                        E.forEach((e) => {
                            null != v && (n[e] = v[e]);
                        }),
                        null == n[t] && null == T.permissionOverwrites[t] && (n[t] = m.we(t)),
                        null ==
                        (v = {
                            ...T.permissionOverwrites,
                            ...n
                        })[Z]
                            ? (Z = t)
                            : null != A && null != v[A] && ((Z = A), (A = null)),
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
        (b = t), u.K.set(f.kf, t);
    }
});
