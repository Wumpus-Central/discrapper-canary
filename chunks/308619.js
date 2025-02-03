n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(699553),
    o = n(934269),
    c = n(434404),
    d = n(999382),
    u = n(203377);
function m() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = (0, l.e7)([d.Z], () => d.Z.isSubmitting()),
        n = (0, l.e7)([d.Z], () => d.Z.getErrors()),
        { guildProfile: m } = (0, o.u)(null == e ? void 0 : e.id),
        h = r.useMemo(() => (0, u.LG)(n), [n]),
        g = r.useCallback(() => {
            if (null == e) return;
            let t = {
                name: e.name,
                description: e.description
            };
            c.Z.saveGuild(e.id, t);
        }, [e]),
        x = r.useCallback(() => {
            null != e && c.Z.init(e.id), null != m && (0, a.V)(m);
        }, [e, m]);
    return (0, i.jsx)(s.Z, {
        submitting: t,
        errorMessage: h,
        onSave: g,
        onReset: x
    });
}
