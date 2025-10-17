n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(236413),
    a = n(866894),
    s = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
let g = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: g = !1 } = e,
        { hasChanges: m, editingRule: p, createNewEditingRule: f, setEditingRule: h } = (0, s.V)(),
        { isLoading: b } = (0, s.w)(),
        [x] = i.useState(() => !(0, l.Vb)(t)),
        j = (null == p ? void 0 : p.id) === t.id || n,
        v = (0, a.U)(null == t ? void 0 : t.id),
        _ = j && null != p ? p : t,
        C = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        O = i.useCallback(() => {
            f(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, f]),
        y = i.useCallback(
            (e) => {
                b || h(e, !0);
            },
            [b, h],
        );
    i.useEffect(() => {
        g && h(t, !0);
    }, [g, t, h]);
    let E = i.useCallback(() => {
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
            rule: _,
            forceSetup: x && !j && !v,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: v,
            onChangeRule: y,
            onSetupRule: O,
        }),
        isStuck: j && m,
        isExpanded: j,
        onExpand: E,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: _,
                isLoading: b,
                onChangeRule: y,
            }),
    });
});
