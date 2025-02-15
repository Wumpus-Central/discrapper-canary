n.d(t, { Z: () => u });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(699553),
    o = n(314852),
    c = n(434404),
    d = n(999382);
function u() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([d.Z], () => d.Z.getProfileError()),
        u = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
        m = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        h = r.useMemo(() => (null == n ? void 0 : n.getAnyErrorMessage()), [n]),
        g = r.useCallback(() => {
            var t, n;
            if (null == e || null == u) return;
            let i = {
                name: e.name,
                description: null !== (t = e.description) && void 0 !== t ? t : void 0,
                icon: null !== (n = e.icon) && void 0 !== n ? n : void 0,
                brandColorPrimary: u.brandColorPrimary,
                traits: u.traits,
                visibility: u.visibility,
                gameApplicationIds: u.gameApplicationIds
            };
            (0, a.pV)(e.id, i);
        }, [e, u]),
        x = r.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, i.jsx)(s.Z, {
        submitting: m,
        errorMessage: h,
        onSave: g,
        onReset: x
    });
}
