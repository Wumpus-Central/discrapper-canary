let r, i;
(n.d(t, { Z: () => x }), n(388685));
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
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
    E = f.QZA.CLOSED,
    y = !1,
    v = null,
    I = null,
    C = null,
    S = null,
    N = null,
    T = null,
    P = c.K.get(g.kf) || !1;
function j(e) {
    let t = e.getGuildId(),
        n = b({}, e.permissionOverwrites);
    return (null != t && null == n[t] && (n[t] = d.we(t)), n);
}
function A() {
    if (((C = p.Z.getChannel()), (S = p.Z.getCategory()), null == C)) return !1;
    let e = C.getGuildId();
    ((I = v = j(C)), null == v[N] && (N = e), (i = null != S), (r = d.o4(C, S)), (T = null), (y = !1), (E = f.QZA.CLOSED), O.clear());
}
class Z extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.Z);
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
        return N;
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
        return C;
    }
    get category() {
        return S;
    }
    get advancedMode() {
        return P;
    }
}
m(Z, 'displayName', 'ChannelSettingsPermissionsStore');
let x = new Z(u.Z, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != C || t !== f.CoT.PERMISSIONS) return !1;
        A();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: A,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: i } = e,
            l = null == v ? void 0 : v[t];
        if (null == l || null == C) return !1;
        ((l = _(b({}, l), {
            allow: n,
            deny: i
        })),
            (v = _(b({}, v), { [t]: l })),
            O.add(t),
            (E = f.QZA.OPEN),
            (y = !o().isEqual(v, I)),
            (r = d.o4(C, S)));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != v && null != v[t]) N = t;
        else {
            if (null == C) return !1;
            T = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        p.Z.getSection() === f.CoT.PERMISSIONS && A();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        ((E = f.QZA.CLOSED), (v = null), (I = null), (C = null), (S = null), (y = !1), O.clear(), (N = null), (T = null));
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == C) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == C || C.id !== e || null == (C = h.Z.getChannel(e))) return !1;
                    S = p.Z.getCategory();
                    let t = C.getGuildId();
                    if (null == t) return !1;
                    I = j(C);
                    let n = {};
                    return (
                        O.forEach((e) => {
                            null != v && (n[e] = v[e]);
                        }),
                        null == n[t] && null == C.permissionOverwrites[t] && (n[t] = d.we(t)),
                        null == (v = b({}, C.permissionOverwrites, n))[N] ? (N = t) : null != T && null != v[T] && ((N = T), (T = null)),
                        (r = d.o4(C, S)),
                        !0
                    );
                })(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        E = f.QZA.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let { silent: t } = e;
        t ? (E = f.QZA.OPEN) : ((E = f.QZA.CLOSED), A());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        ((P = t), c.K.set(g.kf, t));
    }
});
