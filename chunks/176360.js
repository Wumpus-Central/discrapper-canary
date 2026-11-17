let i, r;
var a = n(435558),
    s = n.n(a),
    l = n(855986),
    o = n(506774),
    d = n(73153),
    c = n(443063),
    u = n(587895),
    _ = n(488926),
    E = n(863036),
    A = n(734057),
    f = n(652215),
    h = n(290261);
let I = new Set(),
    p = f.XlH.CLOSED,
    m = !1,
    g = null,
    T = null,
    S = null,
    N = null,
    C = null,
    O = null,
    R = o.w.get(h.t0) || !1;
function L(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return (null != t && null == n[t] && (n[t] = _.xT(t)), n);
}
function y() {
    if (((S = E.A.getChannel()), (N = E.A.getCategory()), null == S)) return !1;
    let e = S.getGuildId();
    ((T = g = L(S)),
        null == g[C] && (C = e),
        (r = null != N),
        (i = _.r(S, N, (0, c.GY)(S))),
        (O = null),
        (m = !1),
        (p = f.XlH.CLOSED),
        I.clear());
}
class D extends l.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(E.A, A.A, u.A);
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
        return Array.from(I);
    }
    get permissionOverwrites() {
        return g;
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
let b = new D(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != S || t !== f.p_A.PERMISSIONS) return !1;
        y();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: y,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: r } = e,
            a = g?.[t];
        if (null == a || null == S) return !1;
        ((a = { ...a, allow: n, deny: r }),
            (g = { ...g, [t]: a }),
            I.add(t),
            (p = f.XlH.OPEN),
            (m = !s().isEqual(g, T)),
            (i = _.r(S, N, (0, c.GY)(S))));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != g && null != g[t]) C = t;
        else {
            if (null == S) return !1;
            O = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        E.A.getSection() === f.p_A.PERMISSIONS && y();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        ((p = f.XlH.CLOSED),
            (g = null),
            (T = null),
            (S = null),
            (N = null),
            (m = !1),
            I.clear(),
            (C = null),
            (O = null));
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
                    T = L(S);
                    let n = {};
                    return (
                        I.forEach((e) => {
                            null != g && (n[e] = g[e]);
                        }),
                        null == n[t] && null == S.permissionOverwrites[t] && (n[t] = _.xT(t)),
                        null == (g = { ...S.permissionOverwrites, ...n })[C]
                            ? (C = t)
                            : null != O && null != g[O] && ((C = O), (O = null)),
                        (i = _.r(S, N, (0, c.GY)(S))),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        p = f.XlH.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (p = f.XlH.OPEN) : ((p = f.XlH.CLOSED), y());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        ((R = t), o.w.set(h.t0, t));
    },
    APPLICATION_FETCH_SUCCESS: function () {
        if (null == S || S.type !== f.rbe.GUILD_APP) return !1;
        let e = i;
        return (i = _.r(S, N, (0, c.GY)(S))) !== e;
    },
});
n.d(t, {}, { A: b });
