let r, i;
n.d(t, { Z: () => Z }), n(388685);
var l,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(433517),
    u = n(570140),
    d = n(700785),
    p = n(388610),
    f = n(592125),
    h = n(981631),
    g = n(71080);
function m(e, t, n) {
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
function b(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
let O = new Set(),
    E = h.QZA.CLOSED,
    y = !1,
    v = null,
    I = null,
    S = null,
    C = null,
    T = null,
    N = null,
    j = c.K.get(g.kf) || !1;
function P(e) {
    let t = e.getGuildId(),
        n = b({}, e.permissionOverwrites);
    return null != t && null == n[t] && (n[t] = d.we(t)), n;
}
function x() {
    if (((S = p.Z.getChannel()), (C = p.Z.getCategory()), null == S)) return !1;
    let e = S.getGuildId();
    (I = v = P(S)),
        null == v[T] && (T = e),
        (i = null != C),
        (r = d.o4(S, C)),
        (N = null),
        (y = !1),
        (E = h.QZA.CLOSED),
        O.clear();
}
class A extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z);
    }
    hasChanges() {
        return y;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == v ? void 0 : v[e];
    }
    get editedPermissionIds() {
        return Array.from(O);
    }
    get permissionOverwrites() {
        return v;
    }
    get selectedOverwriteId() {
        return T;
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
        return S;
    }
    get category() {
        return C;
    }
    get advancedMode() {
        return j;
    }
}
m(A, "displayName", "ChannelSettingsPermissionsStore");
let Z = new A(u.Z, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != S || t !== h.CoT.PERMISSIONS) return !1;
        x();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: i } = e,
            l = null == v ? void 0 : v[t];
        if (null == l || null == S) return !1;
        (l = _(b({}, l), {
            allow: n,
            deny: i,
        })),
            (v = _(b({}, v), { [t]: l })),
            O.add(t),
            (E = h.QZA.OPEN),
            (y = !o().isEqual(v, I)),
            (r = d.o4(S, C));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != v && null != v[t]) T = t;
        else {
            if (null == S) return !1;
            N = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        p.Z.getSection() === h.CoT.PERMISSIONS && x();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (E = h.QZA.CLOSED), (v = null), (I = null), (S = null), (C = null), (y = !1), O.clear(), (T = null), (N = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == S) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == S || S.id !== e || null == (S = f.Z.getChannel(e))) return !1;
                    C = p.Z.getCategory();
                    let t = S.getGuildId();
                    if (null == t) return !1;
                    I = P(S);
                    let n = {};
                    return (
                        O.forEach((e) => {
                            null != v && (n[e] = v[e]);
                        }),
                        null == n[t] && null == S.permissionOverwrites[t] && (n[t] = d.we(t)),
                        null == (v = b({}, S.permissionOverwrites, n))[T]
                            ? (T = t)
                            : null != N && null != v[N] && ((T = N), (N = null)),
                        (r = d.o4(S, C)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        E = h.QZA.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (E = h.QZA.OPEN) : ((E = h.QZA.CLOSED), x());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (j = t), c.K.set(g.kf, t);
    },
});
