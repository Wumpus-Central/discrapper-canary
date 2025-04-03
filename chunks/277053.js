let r, i;
n.d(t, { Z: () => x }), n(47120);
var l,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(433517),
    u = n(570140),
    d = n(700785),
    p = n(388610),
    h = n(592125),
    f = n(981631),
    g = n(71080);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let E = new Set(),
    O = f.QZA.CLOSED,
    N = !1,
    y = null,
    I = null,
    v = null,
    C = null,
    S = null,
    T = null,
    P = c.K.get(g.kf) || !1;
function j(e) {
    let t = e.getGuildId(),
        n = b({}, e.permissionOverwrites);
    return null != t && null == n[t] && (n[t] = d.we(t)), n;
}
function A() {
    if (((v = p.Z.getChannel()), (C = p.Z.getCategory()), null == v)) return !1;
    let e = v.getGuildId();
    (I = y = j(v)), null == y[S] && (S = e), (i = null != C), (r = d.o4(v, C)), (T = null), (N = !1), (O = f.QZA.CLOSED), E.clear();
}
class Z extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.Z);
    }
    hasChanges() {
        return N;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == y ? void 0 : y[e];
    }
    get editedPermissionIds() {
        return Array.from(E);
    }
    get permissionOverwrites() {
        return y;
    }
    get selectedOverwriteId() {
        return S;
    }
    get formState() {
        return O;
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
        return C;
    }
    get advancedMode() {
        return P;
    }
}
m(Z, 'displayName', 'ChannelSettingsPermissionsStore');
let x = new Z(u.Z, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != v || t !== f.CoT.PERMISSIONS) return !1;
        A();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: A,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: i } = e,
            l = null == y ? void 0 : y[t];
        if (null == l || null == v) return !1;
        (l = _(b({}, l), {
            allow: n,
            deny: i
        })),
            (y = _(b({}, y), { [t]: l })),
            E.add(t),
            (O = f.QZA.OPEN),
            (N = !o().isEqual(y, I)),
            (r = d.o4(v, C));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != y && null != y[t]) S = t;
        else {
            if (null == v) return !1;
            T = t;
        }
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (O = f.QZA.CLOSED), (y = null), (I = null), (v = null), (C = null), (N = !1), E.clear(), (S = null), (T = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == v) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == v || v.id !== e || null == (v = h.Z.getChannel(e))) return !1;
                    C = p.Z.getCategory();
                    let t = v.getGuildId();
                    if (null == t) return !1;
                    I = j(v);
                    let n = {};
                    return (
                        E.forEach((e) => {
                            null != y && (n[e] = y[e]);
                        }),
                        null == n[t] && null == v.permissionOverwrites[t] && (n[t] = d.we(t)),
                        null == (y = b({}, v.permissionOverwrites, n))[S] ? (S = t) : null != T && null != y[T] && ((S = T), (T = null)),
                        (r = d.o4(v, C)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        O = f.QZA.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (O = f.QZA.OPEN) : ((O = f.QZA.CLOSED), A());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (P = t), c.K.set(g.kf, t);
    }
});
