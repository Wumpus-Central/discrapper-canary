t.d(n, { A: () => A });
var l = t(627968),
    i = t(64700),
    a = t(462887),
    r = t(173936),
    o = t(736653),
    s = t(573648),
    c = t(58149),
    u = t(749403),
    d = t(954571),
    m = t(184952),
    h = t(652215),
    p = t(985018);
function A(e) {
    let { connection: n, guildId: t, location: A } = e,
        g = (0, o.Ay)(),
        x = (null != n.provider_id ? s.A.get(n.provider_id)?.name : null) ?? p.intl.string(p.t.NzCoRx),
        { hasConnection: f, canConnect: C, startConnection: j, loading: v } = (0, u.p)(n.provider_id),
        y = i.useCallback(async () => {
            d.default.track(h.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, c.H$)(t),
                connection_type: "provider",
                provider_id: n.provider_id ?? void 0,
                location: A,
            }),
                await j(A);
        }, [j, t, n.provider_id, A]),
        _ = i.useMemo(() => {
            if (null != n.provider_id) {
                let e = s.A.get(n.provider_id),
                    t = e?.icon != null ? ((0, a.M)(g) ? e.icon.darkPNG : e.icon.lightPNG) : null;
                if (null != t) return (0, l.jsx)("img", { src: t, alt: x, width: 40, height: 40 });
            }
            return (0, l.jsx)(r.q, { size: "custom", width: 40, height: 40, color: "currentColor" });
        }, [n.provider_id, g, x]);
    return (0, l.jsx)(m.A, {
        displayName: x,
        description: n.description,
        icon: _,
        isLoading: v,
        isConnected: f,
        canConnect: C,
        onConnect: y,
    });
}
