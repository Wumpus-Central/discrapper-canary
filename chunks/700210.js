"use strict";
n.d(t, { A: () => g }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(282956),
    l = n(264322),
    u = n(997509),
    c = n(780964),
    d = n(630457),
    _ = n(840065),
    f = n(546183),
    p = n(71393),
    h = n(576705),
    m = n(652215),
    E = n(985018);
function g(e) {
    let { user: t, application: g, guildId: A, context: I, onItemClick: T } = e,
        S = g?.id ?? t?.id,
        y = p.A.getGuild(A),
        v = (0, s.bG)([h.A], () => (null != y ? h.A.can(m.xBc.MANAGE_GUILD, y) : null)),
        N = !0,
        C = !0,
        R = (0, l.ON)(A, C),
        O = (0, l.A4)(N, C),
        b = (0, s.bG)([f.default], () => null != f.default.getNewestTokenForApplication(S)),
        { isUserApp: D, isGuildApp: L } = i.useMemo(() => {
            if (null == S) return { isGuildApp: !1, isUserApp: !1 };
            let e = Object.values(R.result?.sections ?? {}),
                t = Object.values(O.result?.sections ?? {});
            return {
                isGuildApp: e.some((e) => e.descriptor.application?.id === S),
                isUserApp: t.some((e) => e.descriptor.application?.id === S),
            };
        }, [R, O, S]);
    i.useEffect(() => {
        n(53656);
    }, []);
    let w = i.useCallback(() => {
            y?.id != null && (u.A.open(y.id, m.BEX.INTEGRATIONS), o.A.setSection(m.wLn.APPLICATION, S), T?.());
        }, [S, y?.id, T]),
        M = i.useCallback(() => {
            (0, _.openUserSettings)(c.X.AUTHORIZED_APPS_PANEL, { section: m.nc_.AUTHORIZED_APPS });
            let e = "";
            null != g ? (e = g.name) : null != t && (e = t.username),
                "" !== e && d.i.setState({ searchQuery: e }),
                T?.();
        }, [g, T, t]);
    if (I === m.BRT.POPOUT) return null;
    let x = [];
    return (
        L &&
            v &&
            x.push(
                (0, r.jsx)(
                    a.Drp,
                    { id: "manage-server-integration", label: E.intl.string(E.t.IuSJT8), action: w },
                    "manage-server-integration",
                ),
            ),
        D &&
            b &&
            x.push(
                (0, r.jsx)(
                    a.Drp,
                    { id: "manage-authorized-app", label: E.intl.string(E.t.V8ruvz), action: M },
                    "manage-authorized-app",
                ),
            ),
        x
    );
}
