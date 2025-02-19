let r, i;
n.d(t, { Z: () => x }), n(47120);
var l,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(433517),
    u = n(570140),
    d = n(700785),
    p = n(388610),
    h = n(592125),
    g = n(981631),
    f = n(71080);
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
    O = g.QZA.CLOSED,
    N = !1,
    v = null,
    y = null,
    I = null,
    C = null,
    S = null,
    T = null,
    P = c.K.get(f.kf) || !1;
function j(e) {
    let t = e.getGuildId(),
        n = b({}, e.permissionOverwrites);
    return null != t && null == n[t] && (n[t] = d.we(t)), n;
}
function A() {
    if (((I = p.Z.getChannel()), (C = p.Z.getCategory()), null == I)) return !1;
    let e = I.getGuildId();
    (y = v = j(I)), null == v[S] && (S = e), (i = null != C), (r = d.o4(I, C)), (T = null), (N = !1), (O = g.QZA.CLOSED), E.clear();
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
        return null == v ? void 0 : v[e];
    }
    get editedPermissionIds() {
        return Array.from(E);
    }
    get permissionOverwrites() {
        return v;
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
        return I;
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
        if (null != I || t !== g.CoT.PERMISSIONS) return !1;
        A();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: A,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: i } = e,
            l = null == v ? void 0 : v[t];
        if (null == l || null == I) return !1;
        (l = _(b({}, l), {
            allow: n,
            deny: i
        })),
            (v = _(b({}, v), { [t]: l })),
            E.add(t),
            (O = g.QZA.OPEN),
            (N = !a().isEqual(v, y)),
            (r = d.o4(I, C));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != v && null != v[t]) S = t;
        else {
            if (null == I) return !1;
            T = t;
        }
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (O = g.QZA.CLOSED), (v = null), (y = null), (I = null), (C = null), (N = !1), E.clear(), (S = null), (T = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == I) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == I || I.id !== e || null == (I = h.Z.getChannel(e))) return !1;
                    C = p.Z.getCategory();
                    let t = I.getGuildId();
                    if (null == t) return !1;
                    y = j(I);
                    let n = {};
                    return (
                        E.forEach((e) => {
                            null != v && (n[e] = v[e]);
                        }),
                        null == n[t] && null == I.permissionOverwrites[t] && (n[t] = d.we(t)),
                        null == (v = b({}, I.permissionOverwrites, n))[S] ? (S = t) : null != T && null != v[T] && ((S = T), (T = null)),
                        (r = d.o4(I, C)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        O = g.QZA.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (O = g.QZA.OPEN) : ((O = g.QZA.CLOSED), A());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (P = t), c.K.set(f.kf, t);
    }
});
