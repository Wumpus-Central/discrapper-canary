n.d(t, { Z: () => m }), n(47120);
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
        { hasChanges: p, editingRule: g, createNewEditingRule: h, setEditingRule: f } = (0, l.V)(),
        { isLoading: b } = (0, l.w)(),
        [x] = i.useState(() => !(0, s.Vb)(t)),
        j = (null == g ? void 0 : g.id) === t.id || n,
        N = (0, a.U)(null == t ? void 0 : t.id),
        v = j && null != g ? g : t,
        _ = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        O = i.useCallback(() => {
            h(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, h]),
        y = i.useCallback(
            (e) => {
                !b && f(e, !0);
            },
            [b, f]
        );
    i.useEffect(() => {
        m && f(t, !0);
    }, [m, t, f]);
    let C = i.useCallback(() => {
        j
            ? p || f(null)
            : p
              ? _(() => {
                    f(t);
                })
              : f(t);
    }, [j, p, _, t, f]);
    return (0, r.jsx)(d.Z, {
        renderHeader: (0, r.jsx)(u.Z, {
            rule: v,
            forceSetup: x && !j && !N,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: N,
            onChangeRule: y,
            onSetupRule: O
        }),
        isStuck: j && p,
        isExpanded: j,
        onExpand: C,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: v,
                isLoading: b,
                onChangeRule: y
            })
    });
});
