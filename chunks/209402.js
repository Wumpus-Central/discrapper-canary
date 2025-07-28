n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(852860),
    s = n(699553),
    o = n(314852),
    c = n(434404),
    d = n(999382),
    u = n(195196),
    m = n(388032);
function g() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([d.Z], () => d.Z.getProfileError()),
        g = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
        p = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        h = i.useMemo(() => ((null == n ? void 0 : n.status) === 429 ? m.intl.string(u.default['bFRS/v']) : null == n ? void 0 : n.getAnyErrorMessage()), [n]),
        f = i.useCallback(() => {
            if (null == e || null == g) return;
            let t = {
                tag: g.tag,
                badge: g.badge,
                badgeColorPrimary: g.badgeColorPrimary,
                badgeColorSecondary: g.badgeColorSecondary
            };
            (0, s.pV)(e.id, t);
        }, [e, g]),
        x = i.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, r.jsx)(a.Z, {
        submitting: p,
        errorMessage: h,
        onSave: f,
        onReset: x
    });
}
