n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(236413),
    l = n(866894),
    a = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
let m = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: g, editingRule: p, createNewEditingRule: h, setEditingRule: f } = (0, a.V)(),
        { isLoading: x } = (0, a.w)(),
        [b] = i.useState(() => !(0, s.Vb)(t)),
        j = (null == p ? void 0 : p.id) === t.id || n,
        N = (0, l.U)(null == t ? void 0 : t.id),
        _ = j && null != p ? p : t,
        v = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        O = i.useCallback(() => {
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
    let y = i.useCallback(() => {
        j
            ? g || f(null)
            : g
              ? v(() => {
                    f(t);
                })
              : f(t);
    }, [j, g, v, t, f]);
    return (0, r.jsx)(d.Z, {
        renderHeader: (0, r.jsx)(u.Z, {
            rule: _,
            forceSetup: b && !j && !N,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: N,
            onChangeRule: C,
            onSetupRule: O
        }),
        isStuck: j && g,
        isExpanded: j,
        onExpand: y,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: _,
                isLoading: x,
                onChangeRule: C
            })
    });
});
