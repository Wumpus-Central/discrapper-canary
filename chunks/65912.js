n.d(t, {
    V: () => y,
    w: () => _
});
var r = n(392711),
    l = n.n(r),
    i = n(788347),
    a = n(372793),
    u = n(731965),
    o = n(881052),
    s = n(823379),
    c = n(539573),
    f = n(236413),
    E = n(85960),
    g = n(36459),
    d = n(422303),
    S = n(866894),
    O = n(981631),
    j = n(388032);
function N(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let p = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }),
    A = (0, a.F)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            var r, i;
            let a = t().editingRule,
                o = null != n && null != a && n.id === a.id,
                c = l().cloneDeep(n);
            null != c &&
                ((r = N({}, c)),
                (i = i = { actions: c.actions.filter(s.lm) }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                (c = r)),
                (0, u.j)(() =>
                    e({
                        editingRule: c,
                        hasChanges: o,
                        errorMessage: null
                    })
                );
        },
        createNewEditingRule: (t, n, r) => {
            let l = N({}, (0, f.ep)(t, n), null != r ? r : {});
            return (
                (0, u.j)(() =>
                    e({
                        editingRule: l,
                        hasChanges: !1
                    })
                ),
                l
            );
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, u.j)(() => e(N({}, p)));
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, u.j)(() => e(N({}, p))), null;
            try {
                var r, l, i;
                (0, f.DO)(t) && ((t.triggerMetadata.keywordFilter = (0, d.cb)((0, d.Ze)(null != (r = t.triggerMetadata.keywordFilter) ? r : []))), (t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null != (l = t.triggerMetadata.allowList) ? l : [])))), (0, f.Fn)(t) && (t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null != (i = t.triggerMetadata.allowList) ? i : []))), (0, E.yU)(t, n), (0, f.QO)(t);
            } catch (t) {
                return (
                    t instanceof c.V6
                        ? (0, u.j)(() => {
                              e({
                                  errorMessage: j.NW.string(j.t['4Dxaur']),
                                  isLoading: !1
                              });
                          })
                        : t instanceof c.uS
                          ? (0, u.j)(() => {
                                e({
                                    errorMessage: j.NW.string(j.t.hDPEu7),
                                    isLoading: !1
                                });
                            })
                          : (0, u.j)(() => {
                                e({
                                    errorMessage: t.message,
                                    isLoading: !1
                                });
                            }),
                    null
                );
            }
            try {
                (0, u.j)(() => {
                    e({ isLoading: !0 });
                });
                let n = null;
                return (n = (0, f.Vb)(t) && !(0, S.U)(t.id) ? await (0, g.Je)(t) : await (0, g.JK)(t)), (0, u.j)(() => e(N({}, p))), n;
            } catch (n) {
                let t = new o.Hx(n);
                (0, u.j)(() => {
                    e({
                        isLoading: !1,
                        errorMessage: (function (e) {
                            if (e.code === O.evJ.INVALID_FORM_BODY) {
                                var t, n;
                                if ((null == (n = e.errors) || null == (t = n.trigger_metadata) ? void 0 : t.regex_patterns) != null) return j.NW.string(j.t.hDPEu7);
                            }
                            return e.getAnyErrorMessage();
                        })(t)
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
function _() {
    return A(
        (e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            isLoading: e.isLoading,
            errorMessage: e.errorMessage,
            saveRule: e.saveRule,
            saveEditingRule: e.saveEditingRule,
            cancelEditingRule: e.cancelEditingRule
        }),
        i.X
    );
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = A(
            (e) => ({
                hasChanges: e.hasChanges,
                editingRule: e.editingRule,
                setEditingRule: e.setEditingRule,
                createNewEditingRule: e.createNewEditingRule
            }),
            i.X
        );
    return null != e && t.setEditingRule(e), t;
}
