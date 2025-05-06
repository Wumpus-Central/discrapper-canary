n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(852860),
    a = n(699553),
    o = n(314852),
    c = n(434404),
    u = n(999382),
    d = n(817239),
    m = n(388032);
function g() {
    let e = (0, l.e7)([u.Z], () => u.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([u.Z], () => u.Z.getProfileError()),
        g = (0, l.e7)([u.Z], () => u.Z.getGuildProfile()),
        p = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        f = i.useMemo(() => ((null == n ? void 0 : n.status) === 429 ? m.intl.string(d.default['bFRS/v']) : null == n ? void 0 : n.getAnyErrorMessage()), [n]),
        h = i.useCallback(() => {
            if (null == e || null == g) return;
            let t = {
                tag: g.tag,
                badge: g.badge,
                badgeColorPrimary: g.badgeColorPrimary,
                badgeColorSecondary: g.badgeColorSecondary
            };
            (0, a.pV)(e.id, t);
        }, [e, g]),
        x = i.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, r.jsx)(s.Z, {
        submitting: p,
        errorMessage: f,
        onSave: h,
        onReset: x
    });
}
