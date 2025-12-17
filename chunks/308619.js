n.d(t, { Z: () => u }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(796027),
    s = n(699553),
    o = n(314852),
    c = n(434404),
    d = n(999382);
function u() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([d.Z], () => d.Z.getProfileError()),
        u = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
        g = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        f = i.useMemo(() => (null == n ? void 0 : n.getAnyErrorMessage()), [n]),
        m = i.useCallback(() => {
            if (null == e || null == u) return;
            let t = {
                name: u.name,
                description: u.description,
                icon: u.icon,
                brandColorPrimary: u.brandColorPrimary,
                traits: u.traits,
                visibility: u.visibility,
                gameApplicationIds: u.gameApplicationIds,
                customBanner: u.customBanner,
            };
            (0, s.pV)(e.id, t);
        }, [e, u]),
        b = i.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, r.jsx)(a.Z, {
        submitting: g,
        errorMessage: f,
        onSave: m,
        onReset: b,
    });
}
