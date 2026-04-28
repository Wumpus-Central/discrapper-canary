t.d(n, { S: () => E, U: () => L });
var r = t(735438),
    i = t.n(r),
    l = t(942381),
    a = t(265690),
    s = t(121894),
    u = t(845584),
    o = t(403362),
    g = t(753738),
    d = t(627794),
    c = t(53594),
    R = t(137207),
    h = t(789821),
    C = t(904813),
    f = t(652215),
    w = t(985018);
let M = Object.freeze({ editingRule: null, hasChanges: !1, isLoading: !1, errorMessage: null }),
    p = (0, a.h)((e, n) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (t) => {
            let r = n().editingRule,
                l = null != t && null != r && t.id === r.id,
                a = i().cloneDeep(t);
            null != a && (a = { ...a, actions: a.actions.filter(o.Vq) }),
                (0, s.r)(() => e({ editingRule: a, hasChanges: l, errorMessage: null }));
        },
        createNewEditingRule: (n, t, r) => {
            let i = { ...(0, d._I)(n, t), ...(r ?? {}) };
            return (0, s.r)(() => e({ editingRule: i, hasChanges: !1 })), i;
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, s.r)(() => e({ ...M }));
        },
        saveRule: async (n, t) => {
            if (null == n) return (0, s.r)(() => e({ ...M })), null;
            try {
                (0, d.KU)(n) &&
                    ((n.triggerMetadata.keywordFilter = (0, h.HR)((0, h.Uq)(n.triggerMetadata.keywordFilter ?? []))),
                    (n.triggerMetadata.allowList = (0, h.HR)((0, h.Uq)(n.triggerMetadata.allowList ?? [])))),
                    (0, d.ZG)(n) &&
                        (n.triggerMetadata.allowList = (0, h.HR)((0, h.Uq)(n.triggerMetadata.allowList ?? []))),
                    (0, c.xG)(n, t),
                    (0, d.uV)(n);
            } catch (n) {
                return (
                    n instanceof g.lH
                        ? (0, s.r)(() => {
                              e({ errorMessage: w.intl.string(w.t["4Dxaus"]), isLoading: !1 });
                          })
                        : n instanceof g.Nr
                          ? (0, s.r)(() => {
                                e({ errorMessage: w.intl.string(w.t.hDPEu1), isLoading: !1 });
                            })
                          : (0, s.r)(() => {
                                e({ errorMessage: n.message, isLoading: !1 });
                            }),
                    null
                );
            }
            try {
                (0, s.r)(() => {
                    e({ isLoading: !0 });
                });
                let t = null;
                return (
                    (t = (0, d.wC)(n) && !(0, C.R)(n.id) ? await (0, R.Vj)(n) : await (0, R.G6)(n)),
                    (0, s.r)(() => e({ ...M })),
                    t
                );
            } catch (t) {
                let n = new u.LG(t);
                (0, s.r)(() => {
                    e({
                        isLoading: !1,
                        errorMessage:
                            n.code === f.t02.INVALID_FORM_BODY && n.errors?.trigger_metadata?.regex_patterns != null
                                ? w.intl.string(w.t.hDPEu1)
                                : n.getAnyErrorMessage(),
                    });
                });
            }
            return null;
        },
        saveEditingRule: (e) => {
            let { editingRule: t, saveRule: r } = n();
            return r(t, e);
        },
    }));
function E() {
    return p(
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
        n = p(
            (e) => ({
                hasChanges: e.hasChanges,
                editingRule: e.editingRule,
                setEditingRule: e.setEditingRule,
                createNewEditingRule: e.createNewEditingRule,
            }),
            l.x,
        );
    return null != e && n.setEditingRule(e), n;
}
