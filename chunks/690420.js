n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(627794),
    r = n(904813),
    a = n(268749),
    o = n(264349),
    d = n(713072),
    c = n(419707),
    u = n(645105);
let m = l.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: g, editingRule: h, createNewEditingRule: x, setEditingRule: _ } = (0, a.U)(),
        { isLoading: p } = (0, a.S)(),
        [A] = l.useState(() => !(0, s.wC)(t)),
        E = h?.id === t.id || n,
        f = (0, r.R)(t?.id),
        j = E && null != h ? h : t,
        N = l.useMemo(() => (0, o.cT)(t.name), [t?.name]),
        I = l.useCallback(() => {
            x(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, x]),
        C = l.useCallback(
            (e) => {
                p || _(e, !0);
            },
            [p, _],
        );
    l.useEffect(() => {
        m && _(t, !0);
    }, [m, t, _]);
    let b = l.useCallback(() => {
        E
            ? g || _(null)
            : g
              ? N(() => {
                    _(t);
                })
              : _(t);
    }, [E, g, N, t, _]);
    return (0, i.jsx)(c.A, {
        renderHeader: (0, i.jsx)(u.A, {
            rule: j,
            forceSetup: A && !E && !f,
            triggerType: t.triggerType,
            isEditMode: E,
            isDefaultRule: f,
            onChangeRule: C,
            onSetupRule: I,
        }),
        isStuck: E && g,
        isExpanded: E,
        onExpand: b,
        children: E && (0, i.jsx)(d.A, { rule: j, isLoading: p, onChangeRule: C }),
    });
});
