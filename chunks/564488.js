n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(236413),
    s = n(866894),
    a = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
let m = r.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: m = !1 } = e,
        { hasChanges: h, editingRule: g, createNewEditingRule: x, setEditingRule: p } = (0, a.V)(),
        { isLoading: _ } = (0, a.w)(),
        [C] = r.useState(() => !(0, l.Vb)(t)),
        f = (null == g ? void 0 : g.id) === t.id || n,
        v = (0, s.U)(null == t ? void 0 : t.id),
        N = f && null != g ? g : t,
        j = r.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        I = r.useCallback(() => {
            x(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, x]),
        E = r.useCallback(
            (e) => {
                !_ && p(e, !0);
            },
            [_, p]
        );
    r.useEffect(() => {
        m && p(t, !0);
    }, [m, t, p]);
    let b = r.useCallback(() => {
        f
            ? h || p(null)
            : h
              ? j(() => {
                    p(t);
                })
              : p(t);
    }, [f, h, j, t, p]);
    return (0, i.jsx)(d.Z, {
        renderHeader: (0, i.jsx)(u.Z, {
            rule: N,
            forceSetup: C && !f && !v,
            triggerType: t.triggerType,
            isEditMode: f,
            isDefaultRule: v,
            onChangeRule: E,
            onSetupRule: I
        }),
        isStuck: f && h,
        isExpanded: f,
        onExpand: b,
        children:
            f &&
            (0, i.jsx)(c.Z, {
                rule: N,
                isLoading: _,
                onChangeRule: E
            })
    });
});
