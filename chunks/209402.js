n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(852860),
    a = n(699553),
    o = n(314852),
    c = n(434404),
    u = n(999382);
function d() {
    let e = (0, l.e7)([u.Z], () => u.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([u.Z], () => u.Z.getProfileError()),
        d = (0, l.e7)([u.Z], () => u.Z.getGuildProfile()),
        m = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        g = i.useMemo(() => (null == n ? void 0 : n.getAnyErrorMessage()), [n]),
        p = i.useCallback(() => {
            if (null == e || null == d) return;
            let t = {
                tag: d.tag,
                badge: d.badge,
                badgeColorPrimary: d.badgeColorPrimary,
                badgeColorSecondary: d.badgeColorSecondary
            };
            (0, a.pV)(e.id, t);
        }, [e, d]),
        h = i.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, r.jsx)(s.Z, {
        submitting: m,
        errorMessage: g,
        onSave: p,
        onReset: h
    });
}
