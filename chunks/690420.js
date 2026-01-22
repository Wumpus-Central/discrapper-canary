n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(627794),
    s = n(904813),
    a = n(268749),
    c = n(264349),
    o = n(713072),
    d = n(419707),
    u = n(645105);
let f = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: f = !1 } = e,
        { hasChanges: g, editingRule: b, createNewEditingRule: m, setEditingRule: p } = (0, a.U)(),
        { isLoading: x } = (0, a.S)(),
        [h] = i.useState(() => !(0, l.wC)(t)),
        j = (null == b ? void 0 : b.id) === t.id || n,
        O = (0, s.R)(null == t ? void 0 : t.id),
        y = j && null != b ? b : t,
        v = i.useMemo(() => (0, c.cT)(t.name), [null == t ? void 0 : t.name]),
        A = i.useCallback(() => {
            m(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, m]),
        E = i.useCallback(
            (e) => {
                x || p(e, !0);
            },
            [x, p],
        );
    i.useEffect(() => {
        f && p(t, !0);
    }, [f, t, p]);
    let N = i.useCallback(() => {
        j
            ? g || p(null)
            : g
              ? v(() => {
                    p(t);
                })
              : p(t);
    }, [j, g, v, t, p]);
    return (0, r.jsx)(d.A, {
        renderHeader: (0, r.jsx)(u.A, {
            rule: y,
            forceSetup: h && !j && !O,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: O,
            onChangeRule: E,
            onSetupRule: A,
        }),
        isStuck: j && g,
        isExpanded: j,
        onExpand: N,
        children:
            j &&
            (0, r.jsx)(o.A, {
                rule: y,
                isLoading: x,
                onChangeRule: E,
            }),
    });
});
