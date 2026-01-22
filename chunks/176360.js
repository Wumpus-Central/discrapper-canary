let r, i;
n.d(t, {
    A: () => w,
}),
    n(896048);
var l,
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    c = n(506774),
    u = n(73153),
    d = n(488926),
    p = n(863036),
    f = n(734057),
    h = n(652215),
    A = n(737045);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = new Set(),
    E = h.XlH.CLOSED,
    O = !1,
    y = null,
    I = null,
    v = null,
    S = null,
    C = null,
    N = null,
    T = c.w.get(A.t0) || !1;

function j(e) {
    let t = e.getGuildId(),
        n = m({}, e.permissionOverwrites);
    return null != t && null == n[t] && (n[t] = d.xT(t)), n;
}

function x() {
    if (((v = p.A.getChannel()), (S = p.A.getCategory()), null == v)) return !1;
    let e = v.getGuildId();
    (I = y = j(v)),
        null == y[C] && (C = e),
        (i = null != S),
        (r = d.r(v, S)),
        (N = null),
        (O = !1),
        (E = h.XlH.CLOSED),
        _.clear();
}
class P extends (l = o.Ay.Store) {
    initialize() {
        this.waitFor(p.A, f.A);
    }
    hasChanges() {
        return O;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == y ? void 0 : y[e];
    }
    get editedPermissionIds() {
        return Array.from(_);
    }
    get permissionOverwrites() {
        return y;
    }
    get selectedOverwriteId() {
        return C;
    }
    get formState() {
        return E;
    }
    get isLockable() {
        return i;
    }
    get locked() {
        return r;
    }
    get channel() {
        return v;
    }
    get category() {
        return S;
    }
    get advancedMode() {
        return T;
    }
}
g(P, "displayName", "ChannelSettingsPermissionsStore");
let w = new P(u.h, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != v || t !== h.p_A.PERMISSIONS) return !1;
        x();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: i } = e,
            l = null == y ? void 0 : y[t];
        if (null == l || null == v) return !1;
        (l = b(m({}, l), {
            allow: n,
            deny: i,
        })),
            (y = b(m({}, y), {
                [t]: l,
            })),
            _.add(t),
            (E = h.XlH.OPEN),
            (O = !s().isEqual(y, I)),
            (r = d.r(v, S));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != y && null != y[t]) C = t;
        else {
            if (null == v) return !1;
            N = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        p.A.getSection() === h.p_A.PERMISSIONS && x();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (E = h.XlH.CLOSED), (y = null), (I = null), (v = null), (S = null), (O = !1), _.clear(), (C = null), (N = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == v) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == v || v.id !== e || null == (v = f.A.getChannel(e))) return !1;
                    S = p.A.getCategory();
                    let t = v.getGuildId();
                    if (null == t) return !1;
                    I = j(v);
                    let n = {};
                    return (
                        _.forEach((e) => {
                            null != y && (n[e] = y[e]);
                        }),
                        null == n[t] && null == v.permissionOverwrites[t] && (n[t] = d.xT(t)),
                        null == (y = m({}, v.permissionOverwrites, n))[C]
                            ? (C = t)
                            : null != N && null != y[N] && ((C = N), (N = null)),
                        (r = d.r(v, S)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        E = h.XlH.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (E = h.XlH.OPEN) : ((E = h.XlH.CLOSED), x());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (T = t), c.w.set(A.t0, t);
    },
});
