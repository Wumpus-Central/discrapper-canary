n.d(t, {
    V: () => L,
    w: () => N
});
var r = n(392711),
    l = n.n(r),
    i = n(232713),
    a = n(65400),
    u = n(731965),
    o = n(881052),
    s = n(823379),
    E = n(539573),
    c = n(236413),
    d = n(85960),
    f = n(36459),
    g = n(422303),
    S = n(866894),
    A = n(981631),
    _ = n(388032);
let R = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }),
    j = (0, a.F)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            let r = t().editingRule,
                i = null != n && null != r && n.id === r.id,
                a = l().cloneDeep(n);
            null != a &&
                (a = {
                    ...a,
                    actions: a.actions.filter(s.lm)
                }),
                (0, u.j)(() =>
                    e({
                        editingRule: a,
                        hasChanges: i,
                        errorMessage: null
                    })
                );
        },
        createNewEditingRule: (t, n, r) => {
            let l = {
                ...(0, c.ep)(t, n),
                ...(null != r ? r : {})
            };
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
            (0, u.j)(() => e({ ...R }));
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, u.j)(() => e({ ...R })), null;
            try {
                var r, l, i;
                (0, c.DO)(t) && ((t.triggerMetadata.keywordFilter = (0, g.cb)((0, g.Ze)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : []))), (t.triggerMetadata.allowList = (0, g.cb)((0, g.Ze)(null !== (l = t.triggerMetadata.allowList) && void 0 !== l ? l : [])))), (0, c.Fn)(t) && (t.triggerMetadata.allowList = (0, g.cb)((0, g.Ze)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : []))), (0, d.yU)(t, n), (0, c.QO)(t);
            } catch (t) {
                return (
                    t instanceof E.V6
                        ? (0, u.j)(() => {
                              e({
                                  errorMessage: _.intl.string(_.t['4Dxaur']),
                                  isLoading: !1
                              });
                          })
                        : t instanceof E.uS
                          ? (0, u.j)(() => {
                                e({
                                    errorMessage: _.intl.string(_.t.hDPEu7),
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
                return (n = (0, c.Vb)(t) && !(0, S.U)(t.id) ? await (0, f.Je)(t) : await (0, f.JK)(t)), (0, u.j)(() => e({ ...R })), n;
            } catch (n) {
                let t = new o.Hx(n);
                (0, u.j)(() => {
                    e({
                        isLoading: !1,
                        errorMessage: (function (e) {
                            if (e.code === A.evJ.INVALID_FORM_BODY) {
                                var t, n;
                                if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null) return _.intl.string(_.t.hDPEu7);
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
function N() {
    return j(
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
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = j(
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
