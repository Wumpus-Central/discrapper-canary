t.d(l, { A: () => A }), t(321073);
var n = t(627968),
    s = t(64700),
    i = t(17928),
    r = t(477782),
    a = t(282956),
    o = t(704824),
    c = t(264322),
    d = t(468689),
    u = t(780964),
    m = t(370997),
    p = t(766075),
    x = t(71393),
    h = t(576705),
    j = t(652215),
    N = t(375708);
function A(e) {
    let { user: l, application: A, guildId: g, context: v, onItemClick: I } = e,
        _ = x.A.getGuild(g),
        C = (0, i.bG)([h.A], () => (null != _ ? h.A.can(j.xBc.MANAGE_GUILD, _) : null)),
        T = (0, c.ON)(g, !0),
        E = (0, c.A4)(!0, !0),
        f = s.useMemo(
            () =>
                null != A
                    ? A.id
                    : l?.id != null
                      ? (T.result?.sectionIdsByBotId[l.id] ?? E.result?.sectionIdsByBotId[l.id] ?? l.id)
                      : void 0,
            [A, l?.id, T.result, E.result],
        ),
        b = l?.bot === !0 || null != A,
        { token: y } = (0, o.U)(b ? f : null),
        { isUserApp: S, isGuildApp: P } = s.useMemo(() => {
            if (null == f) return { isGuildApp: !1, isUserApp: !1 };
            let e = Object.values(T.result?.sections ?? {}),
                l = Object.values(E.result?.sections ?? {});
            return {
                isGuildApp: e.some((e) => e.descriptor.application?.id === f),
                isUserApp: l.some((e) => e.descriptor.application?.id === f),
            };
        }, [T, E, f]);
    s.useEffect(() => {
        t(53656);
    }, []);
    let R = s.useCallback(() => {
            _?.id != null && (d.A.open(_.id, j.BEX.INTEGRATIONS), a.A.setSection(j.wLn.APPLICATION, f), I?.());
        }, [f, _?.id, I]),
        D = s.useCallback(() => {
            (0, p.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
            let e = "";
            null != A ? (e = A.name) : null != l && (e = l.username),
                "" !== e && m.iU.setState({ searchQuery: e }),
                I?.();
        }, [A, I, l]);
    if (v === j.BRT.POPOUT) return null;
    let U = [];
    return (
        P &&
            C &&
            U.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-server-integration", label: N.intl.string(N.t.IuSJT8), action: R },
                    "manage-server-integration",
                ),
            ),
        S &&
            null != y &&
            U.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-authorized-app", label: N.intl.string(N.t.V8ruvz), action: D },
                    "manage-authorized-app",
                ),
            ),
        U
    );
}
