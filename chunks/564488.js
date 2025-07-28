(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(236413),
    a = n(866894),
    s = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
let m = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: g, editingRule: p, createNewEditingRule: h, setEditingRule: f } = (0, s.V)(),
        { isLoading: x } = (0, s.w)(),
        [b] = i.useState(() => !(0, l.Vb)(t)),
        j = (null == p ? void 0 : p.id) === t.id || n,
        v = (0, a.U)(null == t ? void 0 : t.id),
        _ = j && null != p ? p : t,
        O = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        y = i.useCallback(() => {
            h(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, h]),
        C = i.useCallback(
            (e) => {
                x || f(e, !0);
            },
            [x, f]
        );
    i.useEffect(() => {
        m && f(t, !0);
    }, [m, t, f]);
    let N = i.useCallback(() => {
        j
            ? g || f(null)
            : g
              ? O(() => {
                    f(t);
                })
              : f(t);
    }, [j, g, O, t, f]);
    return (0, r.jsx)(d.Z, {
        renderHeader: (0, r.jsx)(u.Z, {
            rule: _,
            forceSetup: b && !j && !v,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: v,
            onChangeRule: C,
            onSetupRule: y
        }),
        isStuck: j && g,
        isExpanded: j,
        onExpand: N,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: _,
                isLoading: x,
                onChangeRule: C
            })
    });
});
