n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(434404),
    o = n(999382),
    c = n(203377);
function d() {
    let e = (0, l.e7)([o.Z], () => o.Z.getGuild()),
        t = (0, l.e7)([o.Z], () => o.Z.isSubmitting()),
        n = (0, l.e7)([o.Z], () => o.Z.getErrors()),
        d = r.useMemo(() => (0, c.LG)(n), [n]),
        u = r.useCallback(() => {
            if (null == e) return;
            let t = {
                name: e.name,
                description: e.description
            };
            a.Z.saveGuild(e.id, t);
        }, [e]),
        m = r.useCallback(() => {
            null != e && a.Z.init(e.id);
        }, [e]);
    return (0, i.jsx)(s.Z, {
        submitting: t,
        errorMessage: d,
        onSave: u,
        onReset: m
    });
}
