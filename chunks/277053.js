let i, r;
n(47120);
var l,
    a,
    s,
    o,
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    h = n(433517),
    m = n(570140),
    p = n(700785),
    g = n(388610),
    f = n(592125),
    _ = n(981631),
    E = n(71080);
let I = new Set(),
    C = _.QZA.CLOSED,
    N = !1,
    v = null,
    S = null,
    T = null,
    A = null,
    b = null,
    Z = null,
    x = h.K.get(E.kf) || !1;
function L(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = p.we(t)), n;
}
function P() {
    if (((T = g.Z.getChannel()), (A = g.Z.getCategory()), null == T)) return !1;
    let e = T.getGuildId();
    (S = v = L(T)), null == v[b] && (b = e), (r = null != A), (i = p.o4(T, A)), (Z = null), (N = !1), (C = _.QZA.CLOSED), I.clear();
}
class O extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.Z);
    }
    hasChanges() {
        return N;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == v ? void 0 : v[e];
    }
    get editedPermissionIds() {
        return Array.from(I);
    }
    get permissionOverwrites() {
        return v;
    }
    get selectedOverwriteId() {
        return b;
    }
    get formState() {
        return C;
    }
    get isLockable() {
        return r;
    }
    get locked() {
        return i;
    }
    get channel() {
        return T;
    }
    get category() {
        return A;
    }
    get advancedMode() {
        return x;
    }
}
(o = 'ChannelSettingsPermissionsStore'),
    (s = 'displayName') in (a = O)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new O(m.Z, {
        CHANNEL_SETTINGS_SET_SECTION: function (e) {
            let { section: t } = e;
            if (null != T || t !== _.CoT.PERMISSIONS) return !1;
            P();
        },
        CHANNEL_SETTINGS_PERMISSIONS_INIT: P,
        CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
            let { id: t, allow: n, deny: r } = e,
                l = null == v ? void 0 : v[t];
            if (null == l || null == T) return !1;
            (l = {
                ...l,
                allow: n,
                deny: r
            }),
                (v = {
                    ...v,
                    [t]: l
                }),
                I.add(t),
                (C = _.QZA.OPEN),
                (N = !d().isEqual(v, S)),
                (i = p.o4(T, A));
        },
        CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
            let { id: t } = e;
            if (null != v && null != v[t]) b = t;
            else {
                if (null == T) return !1;
                Z = t;
            }
        },
        CHANNEL_SETTINGS_CLOSE: function () {
            (C = _.QZA.CLOSED), (v = null), (S = null), (T = null), (A = null), (N = !1), I.clear(), (b = null), (Z = null);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == T) return !1;
            let n = !1;
            for (let e of t)
                !1 !==
                    (function (e) {
                        if (null == T || T.id !== e || null == (T = f.Z.getChannel(e))) return !1;
                        A = g.Z.getCategory();
                        let t = T.getGuildId();
                        if (null == t) return !1;
                        S = L(T);
                        let n = {};
                        return (
                            I.forEach((e) => {
                                null != v && (n[e] = v[e]);
                            }),
                            null == n[t] && null == T.permissionOverwrites[t] && (n[t] = p.we(t)),
                            null ==
                            (v = {
                                ...T.permissionOverwrites,
                                ...n
                            })[b]
                                ? (b = t)
                                : null != Z && null != v[Z] && ((b = Z), (Z = null)),
                            (i = p.o4(T, A)),
                            !0
                        );
                    })(e.id) && (n = !0);
            return n;
        },
        CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
            C = _.QZA.SUBMITTING;
        },
        CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
            let { silent: t } = e;
            t ? (C = _.QZA.OPEN) : ((C = _.QZA.CLOSED), P());
        },
        CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
            let { advancedMode: t } = e;
            (x = t), h.K.set(E.kf, t);
        }
    }));
