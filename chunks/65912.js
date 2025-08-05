n.d(t, {
    V: () => A,
    w: () => S
});
var r = n(392711),
    i = n.n(r),
    a = n(94171),
    o = n(362383),
    s = n(731965),
    l = n(881052),
    c = n(823379),
    u = n(539573),
    d = n(236413),
    f = n(85960),
    _ = n(36459),
    p = n(422303),
    h = n(866894),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
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
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    if (e.code === m.evJ.INVALID_FORM_BODY) {
        var t, n;
        if ((null == (n = e.errors) || null == (t = n.trigger_metadata) ? void 0 : t.regex_patterns) != null) return g.intl.string(g.t.hDPEu7);
    }
    return e.getAnyErrorMessage();
}
let I = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }),
    T = (0, o.F)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            let r = t().editingRule,
                a = null != n && null != r && n.id === r.id,
                o = i().cloneDeep(n);
            (null != o && (o = O(b({}, o), { actions: o.actions.filter(c.lm) })),
                (0, s.j)(() =>
                    e({
                        editingRule: o,
                        hasChanges: a,
                        errorMessage: null
                    })
                ));
        },
        createNewEditingRule: (t, n, r) => {
            let i = b({}, (0, d.ep)(t, n), null != r ? r : {});
            return (
                (0, s.j)(() =>
                    e({
                        editingRule: i,
                        hasChanges: !1
                    })
                ),
                i
            );
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, s.j)(() => e(b({}, I)));
        },
        saveRule: async (t, n) => {
            if (null == t) return ((0, s.j)(() => e(b({}, I))), null);
            try {
                var r, i, a;
                ((0, d.DO)(t) && ((t.triggerMetadata.keywordFilter = (0, p.cb)((0, p.Ze)(null != (r = t.triggerMetadata.keywordFilter) ? r : []))), (t.triggerMetadata.allowList = (0, p.cb)((0, p.Ze)(null != (i = t.triggerMetadata.allowList) ? i : [])))), (0, d.Fn)(t) && (t.triggerMetadata.allowList = (0, p.cb)((0, p.Ze)(null != (a = t.triggerMetadata.allowList) ? a : []))), (0, f.yU)(t, n), (0, d.QO)(t));
            } catch (t) {
                return (
                    t instanceof u.V6
                        ? (0, s.j)(() => {
                              e({
                                  errorMessage: g.intl.string(g.t['4Dxaur']),
                                  isLoading: !1
                              });
                          })
                        : t instanceof u.uS
                          ? (0, s.j)(() => {
                                e({
                                    errorMessage: g.intl.string(g.t.hDPEu7),
                                    isLoading: !1
                                });
                            })
                          : (0, s.j)(() => {
                                e({
                                    errorMessage: t.message,
                                    isLoading: !1
                                });
                            }),
                    null
                );
            }
            try {
                (0, s.j)(() => {
                    e({ isLoading: !0 });
                });
                let n = null;
                return ((n = (0, d.Vb)(t) && !(0, h.U)(t.id) ? await (0, _.Je)(t) : await (0, _.JK)(t)), (0, s.j)(() => e(b({}, I))), n);
            } catch (n) {
                let t = new l.Hx(n);
                (0, s.j)(() => {
                    e({
                        isLoading: !1,
                        errorMessage: v(t)
                    });
                });
            }
            return null;
        },
        saveEditingRule: (e) => {
            let { editingRule: n, saveRule: r } = t();
            return r(n, e);
        }
    }));
function S() {
    return T(
        (e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            isLoading: e.isLoading,
            errorMessage: e.errorMessage,
            saveRule: e.saveRule,
            saveEditingRule: e.saveEditingRule,
            cancelEditingRule: e.cancelEditingRule
        }),
        a.X
    );
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = T(
            (e) => ({
                hasChanges: e.hasChanges,
                editingRule: e.editingRule,
                setEditingRule: e.setEditingRule,
                createNewEditingRule: e.createNewEditingRule
            }),
            a.X
        );
    return (null != e && t.setEditingRule(e), t);
}
