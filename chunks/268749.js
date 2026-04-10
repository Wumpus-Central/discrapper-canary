"use strict";
n.d(t, { S: () => f, U: () => p });
var i = n(735438),
    r = n.n(i),
    s = n(942381),
    l = n(265690),
    a = n(121894),
    c = n(198982),
    o = n(403362),
    u = n(753738),
    d = n(627794),
    _ = n(53594),
    E = n(137207),
    A = n(789821),
    m = n(904813),
    I = n(652215),
    T = n(985018);
let g = Object.freeze({ editingRule: null, hasChanges: !1, isLoading: !1, errorMessage: null }),
    N = (0, l.h)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            let i = t().editingRule,
                s = null != n && null != i && n.id === i.id,
                l = r().cloneDeep(n);
            null != l && (l = { ...l, actions: l.actions.filter(o.Vq) }),
                (0, a.r)(() => e({ editingRule: l, hasChanges: s, errorMessage: null }));
        },
        createNewEditingRule: (t, n, i) => {
            let r = { ...(0, d._I)(t, n), ...(i ?? {}) };
            return (0, a.r)(() => e({ editingRule: r, hasChanges: !1 })), r;
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, a.r)(() => e({ ...g }));
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, a.r)(() => e({ ...g })), null;
            try {
                (0, d.KU)(t) &&
                    ((t.triggerMetadata.keywordFilter = (0, A.HR)((0, A.Uq)(t.triggerMetadata.keywordFilter ?? []))),
                    (t.triggerMetadata.allowList = (0, A.HR)((0, A.Uq)(t.triggerMetadata.allowList ?? [])))),
                    (0, d.ZG)(t) &&
                        (t.triggerMetadata.allowList = (0, A.HR)((0, A.Uq)(t.triggerMetadata.allowList ?? []))),
                    (0, _.xG)(t, n),
                    (0, d.uV)(t);
            } catch (t) {
                return (
                    t instanceof u.lH
                        ? (0, a.r)(() => {
                              e({ errorMessage: T.intl.string(T.t["4Dxaus"]), isLoading: !1 });
                          })
                        : t instanceof u.Nr
                          ? (0, a.r)(() => {
                                e({ errorMessage: T.intl.string(T.t.hDPEu1), isLoading: !1 });
                            })
                          : (0, a.r)(() => {
                                e({ errorMessage: t.message, isLoading: !1 });
                            }),
                    null
                );
            }
            try {
                (0, a.r)(() => {
                    e({ isLoading: !0 });
                });
                let n = null;
                return (
                    (n = (0, d.wC)(t) && !(0, m.R)(t.id) ? await (0, E.Vj)(t) : await (0, E.G6)(t)),
                    (0, a.r)(() => e({ ...g })),
                    n
                );
            } catch (n) {
                let t = new c.LG(n);
                (0, a.r)(() => {
                    e({
                        isLoading: !1,
                        errorMessage:
                            t.code === I.t02.INVALID_FORM_BODY && t.errors?.trigger_metadata?.regex_patterns != null
                                ? T.intl.string(T.t.hDPEu1)
                                : t.getAnyErrorMessage(),
                    });
                });
            }
            return null;
        },
        saveEditingRule: (e) => {
            let { editingRule: n, saveRule: i } = t();
            return i(n, e);
        },
    }));
function f() {
    return N(
        (e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            isLoading: e.isLoading,
            errorMessage: e.errorMessage,
            saveRule: e.saveRule,
            saveEditingRule: e.saveEditingRule,
            cancelEditingRule: e.cancelEditingRule,
        }),
        s.x,
    );
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = N(
            (e) => ({
                hasChanges: e.hasChanges,
                editingRule: e.editingRule,
                setEditingRule: e.setEditingRule,
                createNewEditingRule: e.createNewEditingRule,
            }),
            s.x,
        );
    return null != e && t.setEditingRule(e), t;
}
