n.d(t, { S: () => N, U: () => L });
var r = n(735438),
    i = n.n(r),
    l = n(942381),
    a = n(265690),
    u = n(121894),
    s = n(198982),
    E = n(403362),
    o = n(753738),
    A = n(627794),
    c = n(53594),
    g = n(137207),
    S = n(789821),
    d = n(904813),
    _ = n(652215),
    h = n(985018);
let R = Object.freeze({ editingRule: null, hasChanges: !1, isLoading: !1, errorMessage: null }),
    M = (0, a.h)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            let r = t().editingRule,
                l = null != n && null != r && n.id === r.id,
                a = i().cloneDeep(n);
            null != a && (a = { ...a, actions: a.actions.filter(E.Vq) }),
                (0, u.r)(() => e({ editingRule: a, hasChanges: l, errorMessage: null }));
        },
        createNewEditingRule: (t, n, r) => {
            let i = { ...(0, A._I)(t, n), ...(r ?? {}) };
            return (0, u.r)(() => e({ editingRule: i, hasChanges: !1 })), i;
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, u.r)(() => e({ ...R }));
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, u.r)(() => e({ ...R })), null;
            try {
                (0, A.KU)(t) &&
                    ((t.triggerMetadata.keywordFilter = (0, S.HR)((0, S.Uq)(t.triggerMetadata.keywordFilter ?? []))),
                    (t.triggerMetadata.allowList = (0, S.HR)((0, S.Uq)(t.triggerMetadata.allowList ?? [])))),
                    (0, A.ZG)(t) &&
                        (t.triggerMetadata.allowList = (0, S.HR)((0, S.Uq)(t.triggerMetadata.allowList ?? []))),
                    (0, c.xG)(t, n),
                    (0, A.uV)(t);
            } catch (t) {
                return (
                    t instanceof o.lH
                        ? (0, u.r)(() => {
                              e({ errorMessage: h.intl.string(h.t["4Dxaus"]), isLoading: !1 });
                          })
                        : t instanceof o.Nr
                          ? (0, u.r)(() => {
                                e({ errorMessage: h.intl.string(h.t.hDPEu1), isLoading: !1 });
                            })
                          : (0, u.r)(() => {
                                e({ errorMessage: t.message, isLoading: !1 });
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
                    (n = (0, A.wC)(t) && !(0, d.R)(t.id) ? await (0, g.Vj)(t) : await (0, g.G6)(t)),
                    (0, u.r)(() => e({ ...R })),
                    n
                );
            } catch (n) {
                let t = new s.LG(n);
                (0, u.r)(() => {
                    e({
                        isLoading: !1,
                        errorMessage:
                            t.code === _.t02.INVALID_FORM_BODY && t.errors?.trigger_metadata?.regex_patterns != null
                                ? h.intl.string(h.t.hDPEu1)
                                : t.getAnyErrorMessage(),
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
function N() {
    return M(
        (e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            isLoading: e.isLoading,
            errorMessage: e.errorMessage,
            saveRule: e.saveRule,
            saveEditingRule: e.saveEditingRule,
            cancelEditingRule: e.cancelEditingRule,
        }),
        l.x,
    );
}
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = M(
            (e) => ({
                hasChanges: e.hasChanges,
                editingRule: e.editingRule,
                setEditingRule: e.setEditingRule,
                createNewEditingRule: e.createNewEditingRule,
            }),
            l.x,
        );
    return null != e && t.setEditingRule(e), t;
}
