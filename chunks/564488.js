n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(236413),
    s = n(866894),
    a = n(65912),
    o = n(572456),
    c = n(59192),
    u = n(11265),
    d = n(495892);
let m = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: g, editingRule: p, createNewEditingRule: f, setEditingRule: h } = (0, a.V)(),
        { isLoading: x } = (0, a.w)(),
        [b] = i.useState(() => !(0, l.Vb)(t)),
        j = (null == p ? void 0 : p.id) === t.id || n,
        _ = (0, s.U)(null == t ? void 0 : t.id),
        v = j && null != p ? p : t,
        O = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        C = i.useCallback(() => {
            f(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, f]),
        y = i.useCallback(
            (e) => {
                x || h(e, !0);
            },
            [x, h]
        );
    i.useEffect(() => {
        m && h(t, !0);
    }, [m, t, h]);
    let N = i.useCallback(() => {
        j
            ? g || h(null)
            : g
              ? O(() => {
                    h(t);
                })
              : h(t);
    }, [j, g, O, t, h]);
    return (0, r.jsx)(u.Z, {
        renderHeader: (0, r.jsx)(d.Z, {
            rule: v,
            forceSetup: b && !j && !_,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: _,
            onChangeRule: y,
            onSetupRule: C
        }),
        isStuck: j && g,
        isExpanded: j,
        onExpand: N,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: v,
                isLoading: x,
                onChangeRule: y
            })
    });
});
