n.d(t, { Z: () => u }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(852860),
    l = n(699553),
    o = n(314852),
    c = n(434404),
    d = n(999382);
function u() {
    let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, s.e7)([d.Z], () => d.Z.getProfileError()),
        u = (0, s.e7)([d.Z], () => d.Z.getGuildProfile()),
        m = (0, s.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        g = i.useMemo(() => (null == n ? void 0 : n.getAnyErrorMessage()), [n]),
        p = i.useCallback(() => {
            if (null == e || null == u) return;
            let t = {
                name: u.name,
                description: u.description,
                icon: u.icon,
                brandColorPrimary: u.brandColorPrimary,
                traits: u.traits,
                visibility: u.visibility,
                gameApplicationIds: u.gameApplicationIds,
                customBanner: u.customBanner
            };
            (0, l.pV)(e.id, t);
        }, [e, u]),
        h = i.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, r.jsx)(a.Z, {
        submitting: m,
        errorMessage: g,
        onSave: p,
        onReset: h
    });
}
