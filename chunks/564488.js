n(47120);
var i = n(200651),
    r = n(192379),
    l = n(236413),
    s = n(866894),
    a = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
t.Z = r.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: h, editingRule: g, createNewEditingRule: x, setEditingRule: p } = (0, a.V)(),
        { isLoading: f } = (0, a.w)(),
        [C] = r.useState(() => !(0, l.Vb)(t)),
        v = (null == g ? void 0 : g.id) === t.id || n,
        N = (0, s.U)(null == t ? void 0 : t.id),
        _ = v && null != g ? g : t,
        I = r.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
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
              ? I(() => {
                    p(t);
                })
              : p(t);
    }, [v, h, I, t, p]);
    return (0, i.jsx)(d.Z, {
        renderHeader: (0, i.jsx)(u.Z, {
            rule: _,
            forceSetup: C && !v && !N,
            triggerType: t.triggerType,
            isEditMode: v,
            isDefaultRule: N,
            onChangeRule: j,
            onSetupRule: T
        }),
        isStuck: v && h,
        isExpanded: v,
        onExpand: b,
        children:
            v &&
            (0, i.jsx)(c.Z, {
                rule: _,
                isLoading: f,
                onChangeRule: j
            })
    });
});
