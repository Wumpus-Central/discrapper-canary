n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(699553),
    o = n(314852),
    c = n(434404),
    d = n(999382),
    u = n(203377);
function m() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([d.Z], () => d.Z.getErrors()),
        m = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
        h = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        g = r.useMemo(() => (0, u.LG)(n), [n]),
        x = r.useCallback(() => {
            var t, n;
            if (null == e || null == m) return;
            let i = {
                name: e.name,
                description: null !== (t = e.description) && void 0 !== t ? t : void 0,
                icon: null !== (n = e.icon) && void 0 !== n ? n : void 0,
                brandColorPrimary: m.brandColorPrimary
            };
            (0, a.p)(e.id, i);
        }, [e, m]),
        p = r.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, i.jsx)(s.Z, {
        submitting: h,
        errorMessage: g,
        onSave: x,
        onReset: p
    });
}
