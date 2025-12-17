n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(236413),
    a = n(866894),
    s = n(65912),
    o = n(572456),
    c = n(59192),
    d = n(11265),
    u = n(495892);
let g = i.memo(function (e) {
    let { rule: t, persistEdit: n = !1, initWithEdit: g = !1 } = e,
        { hasChanges: f, editingRule: m, createNewEditingRule: b, setEditingRule: p } = (0, s.V)(),
        { isLoading: h } = (0, s.w)(),
        [x] = i.useState(() => !(0, l.Vb)(t)),
        j = (null == m ? void 0 : m.id) === t.id || n,
        v = (0, a.U)(null == t ? void 0 : t.id),
        O = j && null != m ? m : t,
        C = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]),
        y = i.useCallback(() => {
            b(t.guildId, t.triggerType);
        }, [t.guildId, t.triggerType, b]),
        N = i.useCallback(
            (e) => {
                h || p(e, !0);
            },
            [h, p],
        );
    i.useEffect(() => {
        g && p(t, !0);
    }, [g, t, p]);
    let E = i.useCallback(() => {
        j
            ? f || p(null)
            : f
              ? C(() => {
                    p(t);
                })
              : p(t);
    }, [j, f, C, t, p]);
    return (0, r.jsx)(d.Z, {
        renderHeader: (0, r.jsx)(u.Z, {
            rule: O,
            forceSetup: x && !j && !v,
            triggerType: t.triggerType,
            isEditMode: j,
            isDefaultRule: v,
            onChangeRule: N,
            onSetupRule: y,
        }),
        isStuck: j && f,
        isExpanded: j,
        onExpand: E,
        children:
            j &&
            (0, r.jsx)(c.Z, {
                rule: O,
                isLoading: h,
                onChangeRule: N,
            }),
    });
});
