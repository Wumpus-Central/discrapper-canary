n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(36525),
    a = n(250527),
    o = n(837011),
    d = n(997509),
    c = n(555337);
function u() {
    let e = (0, s.bG)([c.A], () => c.A.getGuild()),
        t = e?.id,
        n = (0, s.bG)([c.A], () => c.A.getProfileError()),
        u = (0, s.bG)([c.A], () => c.A.getGuildProfile()),
        m = (0, s.bG)([o.A], () => o.A.getIsUpdating(t)),
        g = l.useMemo(() => n?.getAnyErrorMessage(), [n]),
        h = l.useCallback(() => {
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
            (0, a._C)(e.id, t);
        }, [e, u]),
        x = l.useCallback(() => {
            null != t && d.A.init(t);
        }, [t]);
    return (0, i.jsx)(r.A, { submitting: m, errorMessage: g, onSave: h, onReset: x });
}
