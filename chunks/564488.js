n(47120);
var i = n(200651),
    r = n(192379),
    l = n(236413),
    a = n(866894),
    s = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
t.Z = r.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: h, editingRule: g, createNewEditingRule: x, setEditingRule: p } = (0, s.V)(),
        { isLoading: f } = (0, s.w)(),
        [C] = r.useState(() => !(0, l.Vb)(t)),
        v = (null == g ? void 0 : g.id) === t.id || n,
        _ = (0, a.U)(null == t ? void 0 : t.id),
        I = v && null != g ? g : t,
        N = r.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        T = r.useCallback(() => {
            x(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, x]),
        j = r.useCallback(
            (e) => {
                if (!f) p(e, !0);
            },
            [f, p]
        );
    r.useEffect(() => {
        m && p(t, !0);
    }, [m, t, p]);
    let b = r.useCallback(() => {
        v
            ? !h && p(null)
            : h
              ? N(() => {
                    p(t);
                })
              : p(t);
    }, [v, h, N, t, p]);
    return (0, i.jsx)(d.Z, {
        renderHeader: (0, i.jsx)(u.Z, {
            rule: I,
            forceSetup: C && !v && !_,
            triggerType: t.triggerType,
            isEditMode: v,
            isDefaultRule: _,
            onChangeRule: j,
            onSetupRule: T
        }),
        isStuck: v && h,
        isExpanded: v,
        onExpand: b,
        children:
            v &&
            (0, i.jsx)(c.Z, {
                rule: I,
                isLoading: f,
                onChangeRule: j
            })
    });
});
