"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(627794),
    r = n(904813),
    a = n(268749),
    o = n(264349),
    d = n(713072),
    c = n(419707),
    u = n(645105);
let m = s.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: g, editingRule: x, createNewEditingRule: h, setEditingRule: _ } = (0, a.U)(),
        { isLoading: A } = (0, a.S)(),
        [p] = s.useState(() => !(0, l.wC)(t)),
        f = x?.id === t.id || n,
        j = (0, r.R)(t?.id),
        N = f && null != x ? x : t,
        E = s.useMemo(() => (0, o.cT)(t.name), [t?.name]),
        b = s.useCallback(() => {
            h(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, h]),
        T = s.useCallback(
            (e) => {
                A || _(e, !0);
            },
            [A, _],
        );
    s.useEffect(() => {
        m && _(t, !0);
    }, [m, t, _]);
    let C = s.useCallback(() => {
        f
            ? g || _(null)
            : g
              ? E(() => {
                    _(t);
                })
              : _(t);
    }, [f, g, E, t, _]);
    return (0, i.jsx)(c.A, {
        renderHeader: (0, i.jsx)(u.A, {
            rule: N,
            forceSetup: p && !f && !j,
            triggerType: t.triggerType,
            isEditMode: f,
            isDefaultRule: j,
            onChangeRule: T,
            onSetupRule: b,
        }),
        isStuck: f && g,
        isExpanded: f,
        onExpand: C,
        children: f && (0, i.jsx)(d.A, { rule: N, isLoading: A, onChangeRule: T }),
    });
});
