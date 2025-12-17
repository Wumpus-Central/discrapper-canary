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
    g = n(981631),
    h = n(71080);
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
let E = new Set(),
    O = g.QZA.CLOSED,
    v = !1,
    y = null,
    I = null,
    C = null,
    S = null,
    T = null,
    N = null,
    j = c.K.get(h.kf) || !1;
function P(e) {
    let t = e.getGuildId(),
        n = b({}, e.permissionOverwrites);
    return null != t && null == n[t] && (n[t] = d.we(t)), n;
}
function x() {
    if (((C = p.Z.getChannel()), (S = p.Z.getCategory()), null == C)) return !1;
    let e = C.getGuildId();
    (I = y = P(C)),
        null == y[T] && (T = e),
        (i = null != S),
        (r = d.o4(C, S)),
        (N = null),
        (v = !1),
        (O = g.QZA.CLOSED),
        E.clear();
}
class A extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z);
    }
    hasChanges() {
        return v;
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
        return T;
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
        return C;
    }
    get category() {
        return S;
    }
    get advancedMode() {
        return j;
    }
}
m(A, "displayName", "ChannelSettingsPermissionsStore");
let Z = new A(u.Z, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let { section: t } = e;
        if (null != C || t !== g.CoT.PERMISSIONS) return !1;
        x();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let { id: t, allow: n, deny: i } = e,
            l = null == y ? void 0 : y[t];
        if (null == l || null == C) return !1;
        (l = _(b({}, l), {
            allow: n,
            deny: i,
        })),
            (y = _(b({}, y), { [t]: l })),
            E.add(t),
            (O = g.QZA.OPEN),
            (v = !o().isEqual(y, I)),
            (r = d.o4(C, S));
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let { id: t } = e;
        if (null != y && null != y[t]) T = t;
        else {
            if (null == C) return !1;
            N = t;
        }
    },
    CHANNEL_SETTINGS_INIT: function () {
        p.Z.getSection() === g.CoT.PERMISSIONS && x();
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        (O = g.QZA.CLOSED), (y = null), (I = null), (C = null), (S = null), (v = !1), E.clear(), (T = null), (N = null);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == C) return !1;
        let n = !1;
        for (let e of t)
            !1 !==
                (function (e) {
                    if (null == C || C.id !== e || null == (C = f.Z.getChannel(e))) return !1;
                    S = p.Z.getCategory();
                    let t = C.getGuildId();
                    if (null == t) return !1;
                    I = P(C);
                    let n = {};
                    return (
                        E.forEach((e) => {
                            null != y && (n[e] = y[e]);
                        }),
                        null == n[t] && null == C.permissionOverwrites[t] && (n[t] = d.we(t)),
                        null == (y = b({}, C.permissionOverwrites, n))[T]
                            ? (T = t)
                            : null != N && null != y[N] && ((T = N), (N = null)),
                        (r = d.o4(C, S)),
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
        t ? (O = g.QZA.OPEN) : ((O = g.QZA.CLOSED), x());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let { advancedMode: t } = e;
        (j = t), c.K.set(h.kf, t);
    },
});
