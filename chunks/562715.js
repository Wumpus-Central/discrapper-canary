t.d(n, { Z: () => m }), t(953529);
var l = t(951288),
    i = t(647438),
    a = t(780384),
    o = t(481060),
    r = t(410030),
    s = t(726542),
    u = t(298692),
    c = t(826380),
    d = t(388032);
function m(e) {
    var n, t;
    let { connection: m } = e,
        h = (0, r.ZP)(),
        x =
            null != (t = null != m.provider_id ? (null == (n = s.Z.get(m.provider_id)) ? void 0 : n.name) : null)
                ? t
                : d.intl.string(d.t.NzCoRx),
        { hasConnection: f, canConnect: g, startConnection: p, loading: v } = (0, u.B)(m.provider_id),
        j = i.useCallback(async () => {
            await p("Guild Onboarding");
        }, [p]),
        C = i.useMemo(() => {
            if (null != m.provider_id) {
                let e = s.Z.get(m.provider_id),
                    n =
                        (null == e ? void 0 : e.icon) != null
                            ? (0, a.wj)(h)
                                ? e.icon.darkPNG
                                : e.icon.lightPNG
                            : null;
                if (null != n)
                    return (0, l.jsx)("img", {
                        src: n,
                        alt: x,
                        width: 40,
                        height: 40,
                    });
            }
            return (0, l.jsx)(o.xPt, {
                size: "custom",
                width: 40,
                height: 40,
                color: "currentColor",
            });
        }, [m.provider_id, h, x]);
    return (0, l.jsx)(c.Z, {
        displayName: x,
        description: m.description,
        icon: C,
        isLoading: v,
        isConnected: f,
        canConnect: g,
        onConnect: j,
    });
}
