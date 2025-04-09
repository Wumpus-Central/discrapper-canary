n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(236413),
    a = n(866894),
    l = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
let m = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: g, editingRule: p, createNewEditingRule: f, setEditingRule: h } = (0, l.V)(),
        { isLoading: b } = (0, l.w)(),
        [x] = i.useState(() => !(0, s.Vb)(t)),
        j = (null == p ? void 0 : p.id) === t.id || n,
        N = (0, a.U)(null == t ? void 0 : t.id),
        v = j && null != p ? p : t,
        _ = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        y = i.useCallback(() => {
            f(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, f]),
        O = i.useCallback(
            (e) => {
                b || h(e, !0);
            },
            [b, h]
        );
    i.useEffect(() => {
        m && h(t, !0);
    }, [m, t, h]);
    let C = i.useCallback(() => {
        j
            ? g || h(null)
            : g
              ? _(() => {
                    h(t);
                })
              : h(t);
    }, [j, g, _, t, h]);
    return (0, r.jsx)(d.Z, {
        renderHeader: (0, r.jsx)(u.Z, {
            rule: v,
            forceSetup: x && !j && !N,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: N,
            onChangeRule: O,
            onSetupRule: y
        }),
        isStuck: j && g,
        isExpanded: j,
        onExpand: C,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: v,
                isLoading: b,
                onChangeRule: O
            })
    });
});
