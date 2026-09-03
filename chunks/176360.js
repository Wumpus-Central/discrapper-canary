let i, r;
n.d(t, { A: () => v });
var a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(506774),
    d = n(228366),
    c = n(443063),
    u = n(587895),
    _ = n(488926),
    E = n(863036),
    A = n(734057),
    h = n(652215),
    I = n(719366);
let f = new Set(),
    p = h.XlH.CLOSED,
    T = !1,
    m = null,
    g = null,
    S = null,
    N = null,
    C = null,
    O = null,
    R = o.w.get(I.t0) || !1;
function L(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = _.xT(t)), n;
}
function y() {
    if (((S = E.A.getChannel()), (N = E.A.getCategory()), null == S)) return !1;
    let e = S.getGuildId();
    (g = m = L(S)),
        null == m[C] && (C = e),
        (r = null != N),
        (i = _.r(S, N, (0, c.GY)(S))),
        (O = null),
        (T = !1),
        (p = h.XlH.CLOSED),
        f.clear();
}
class D extends l.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(E.A, A.A, u.A);
    }
    hasChanges() {
        return T;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return m?.[e];
    }
    get editedPermissionIds() {
        return Array.from(f);
    }
    get permissionOverwrites() {
        return m;
    }
    get selectedOverwriteId() {
        return C;
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
        return S;
    }
    get category() {
        return N;
    }
    get advancedMode() {
        return R;
    }
}
let v = new D(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != S || t !== h.p_A.PERMISSIONS) return !1;
        y();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: y,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: r } = e,
            a = m?.[t];
        if (null == a || null == S) return !1;
        (a = { ...a, allow: n, deny: r }),
            (m = { ...m, [t]: a }),
            f.add(t),
            (p = h.XlH.OPEN),
            (T = !s().isEqual(m, g)),
            (i = _.r(S, N, (0, c.GY)(S)));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != m && null != m[t]) C = t;
        else {
            if (null == S) return !1;
            O = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        E.A.getSection() === h.p_A.PERMISSIONS && y();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (p = h.XlH.CLOSED), (m = null), (g = null), (S = null), (N = null), (T = !1), f.clear(), (C = null), (O = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == S) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == S || S.id !== e || null == (S = A.A.getChannel(e))) return !1;
                    N = E.A.getCategory();
                    let t = S.getGuildId();
                    if (null == t) return !1;
                    g = L(S);
                    let n = {};
                    return (
                        f.forEach((e) => {
                            null != m && (n[e] = m[e]);
                        }),
                        null == n[t] && null == S.permissionOverwrites[t] && (n[t] = _.xT(t)),
                        null == (m = { ...S.permissionOverwrites, ...n })[C]
                            ? (C = t)
                            : null != O && null != m[O] && ((C = O), (O = null)),
                        (i = _.r(S, N, (0, c.GY)(S))),
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
        t ? (p = h.XlH.OPEN) : ((p = h.XlH.CLOSED), y());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (R = t), o.w.set(I.t0, t);
    },
    APPLICATION_FETCH_SUCCESS: function () {
        if (null == S || S.type !== h.rbe.GUILD_APP) return !1;
        let e = i;
        return (i = _.r(S, N, (0, c.GY)(S))) !== e;
    },
});
