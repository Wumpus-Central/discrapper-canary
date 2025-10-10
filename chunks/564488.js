n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(236413),
    s = n(866894),
    a = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
let g = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: g = !1 } = e,
        { hasChanges: m, editingRule: p, createNewEditingRule: f, setEditingRule: h } = (0, a.V)(),
        { isLoading: x } = (0, a.w)(),
        [b] = i.useState(() => !(0, l.Vb)(t)),
        j = (null == p ? void 0 : p.id) === t.id || n,
        _ = (0, s.U)(null == t ? void 0 : t.id),
        v = j && null != p ? p : t,
        C = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        O = i.useCallback(() => {
            f(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, f]),
        y = i.useCallback(
            (e) => {
                x || h(e, !0);
            },
            [x, h],
        );
    i.useEffect(() => {
        g && h(t, !0);
    }, [g, t, h]);
    let N = i.useCallback(() => {
        j
            ? m || h(null)
            : m
              ? C(() => {
                    h(t);
                })
              : h(t);
    }, [j, m, C, t, h]);
    return (0, r.jsx)(d.Z, {
        renderHeader: (0, r.jsx)(u.Z, {
            rule: v,
            forceSetup: b && !j && !_,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: _,
            onChangeRule: y,
            onSetupRule: O,
        }),
        isStuck: j && m,
        isExpanded: j,
        onExpand: N,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: v,
                isLoading: x,
                onChangeRule: y,
            }),
    });
});
