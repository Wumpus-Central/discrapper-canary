n.d(t, {
    S: () => R,
    U: () => y,
});
var r = n(735438),
    l = n.n(r),
    i = n(942381),
    a = n(265690),
    u = n(121894),
    o = n(198982),
    s = n(403362),
    c = n(753738),
    E = n(627794),
    A = n(53594),
    g = n(137207),
    S = n(789821),
    f = n(904813),
    O = n(652215),
    d = n(985018);
function p(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let h = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null,
    }),
    _ = (0, a.h)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            var r, i;
            let a = t().editingRule,
                o = null != n && null != a && n.id === a.id,
                c = l().cloneDeep(n);
            null != c &&
                ((r = p({}, c)),
                (i = i = { actions: c.actions.filter(s.Vq) }),
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
                (0, u.r)(() =>
                    e({
                        editingRule: c,
                        hasChanges: o,
                        errorMessage: null,
                    }),
                );
        },
        createNewEditingRule: (t, n, r) => {
            let l = p({}, (0, E._I)(t, n), null != r ? r : {});
            return (
                (0, u.r)(() =>
                    e({
                        editingRule: l,
                        hasChanges: !1,
                    }),
                ),
                l
            );
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, u.r)(() => e(p({}, h)));
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, u.r)(() => e(p({}, h))), null;
            try {
                var r, l, i;
                (0, E.KU)(t) &&
                    ((t.triggerMetadata.keywordFilter = (0, S.HR)(
                        (0, S.Uq)(null != (r = t.triggerMetadata.keywordFilter) ? r : []),
                    )),
                    (t.triggerMetadata.allowList = (0, S.HR)(
                        (0, S.Uq)(null != (l = t.triggerMetadata.allowList) ? l : []),
                    ))),
                    (0, E.ZG)(t) &&
                        (t.triggerMetadata.allowList = (0, S.HR)(
                            (0, S.Uq)(null != (i = t.triggerMetadata.allowList) ? i : []),
                        )),
                    (0, A.xG)(t, n),
                    (0, E.uV)(t);
            } catch (t) {
                return (
                    t instanceof c.lH
                        ? (0, u.r)(() => {
                              e({
                                  errorMessage: d.intl.string(d.t["4Dxaus"]),
                                  isLoading: !1,
                              });
                          })
                        : t instanceof c.Nr
                          ? (0, u.r)(() => {
                                e({
                                    errorMessage: d.intl.string(d.t.hDPEu1),
                                    isLoading: !1,
                                });
                            })
                          : (0, u.r)(() => {
                                e({
                                    errorMessage: t.message,
                                    isLoading: !1,
                                });
                            }),
                    null
                );
            }
            try {
                (0, u.r)(() => {
                    e({ isLoading: !0 });
                });
                let n = null;
                return (
                    (n = (0, E.wC)(t) && !(0, f.R)(t.id) ? await (0, g.Vj)(t) : await (0, g.G6)(t)),
                    (0, u.r)(() => e(p({}, h))),
                    n
                );
            } catch (n) {
                let t = new o.LG(n);
                (0, u.r)(() => {
                    e({
                        isLoading: !1,
                        errorMessage: (function (e) {
                            if (e.code === O.t02.INVALID_FORM_BODY) {
                                var t, n;
                                if (
                                    (null == (n = e.errors) || null == (t = n.trigger_metadata)
                                        ? void 0
                                        : t.regex_patterns) != null
                                )
                                    return d.intl.string(d.t.hDPEu1);
                            }
                            return e.getAnyErrorMessage();
                        })(t),
                    });
                });
            }
            return null;
        },
        saveEditingRule: (e) => {
            let { editingRule: n, saveRule: r } = t();
            return r(n, e);
        },
    }));
function R() {
    return _(
        (e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            isLoading: e.isLoading,
            errorMessage: e.errorMessage,
            saveRule: e.saveRule,
            saveEditingRule: e.saveEditingRule,
            cancelEditingRule: e.cancelEditingRule,
        }),
        i.x,
    );
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = _(
            (e) => ({
                hasChanges: e.hasChanges,
                editingRule: e.editingRule,
                setEditingRule: e.setEditingRule,
                createNewEditingRule: e.createNewEditingRule,
            }),
            i.x,
        );
    return null != e && t.setEditingRule(e), t;
}
