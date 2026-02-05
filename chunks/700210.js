"use strict";
n.d(t, { A: () => E }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(282956),
    l = n(264322),
    u = n(997509),
    c = n(780964),
    d = n(891912),
    _ = n(840065),
    f = n(546183),
    p = n(71393),
    h = n(576705),
    m = n(652215),
    g = n(985018);
function E(e) {
    let { user: t, application: E, guildId: A, context: I, onItemClick: T } = e,
        y = E?.id ?? t?.id,
        S = p.A.getGuild(A),
        v = (0, a.bG)([h.A], () => (null != S ? h.A.can(m.xBc.MANAGE_GUILD, S) : null)),
        C = !0,
        b = !0,
        N = (0, l.ON)(A, b),
        R = (0, l.A4)(C, b),
        O = (0, a.bG)([f.default], () => null != f.default.getNewestTokenForApplication(y)),
        { isUserApp: D, isGuildApp: L } = i.useMemo(() => {
            if (null == y) return { isGuildApp: !1, isUserApp: !1 };
            let e = Object.values(N.result?.sections ?? {}),
                t = Object.values(R.result?.sections ?? {});
            return {
                isGuildApp: e.some((e) => e.descriptor.application?.id === y),
                isUserApp: t.some((e) => e.descriptor.application?.id === y),
            };
        }, [N, R, y]);
    i.useEffect(() => {
        n(53656);
    }, []);
    let w = i.useCallback(() => {
            S?.id != null && (u.A.open(S.id, m.BEX.INTEGRATIONS), o.A.setSection(m.wLn.APPLICATION, y), T?.());
        }, [y, S?.id, T]),
        x = i.useCallback(() => {
            (0, _.openUserSettings)(c.X.AUTHORIZED_APPS_PANEL, { section: m.nc_.AUTHORIZED_APPS });
            let e = "";
            null != E ? (e = E.name) : null != t && (e = t.username),
                "" !== e && d.iU.setState({ searchQuery: e }),
                T?.();
        }, [E, T, t]);
    if (I === m.BRT.POPOUT) return null;
    let P = [];
    return (
        L &&
            v &&
            P.push(
                (0, r.jsx)(
                    s.Drp,
                    { id: "manage-server-integration", label: g.intl.string(g.t.IuSJT8), action: w },
                    "manage-server-integration",
                ),
            ),
        D &&
            O &&
            P.push(
                (0, r.jsx)(
                    s.Drp,
                    { id: "manage-authorized-app", label: g.intl.string(g.t.V8ruvz), action: x },
                    "manage-authorized-app",
                ),
            ),
        P
    );
}
