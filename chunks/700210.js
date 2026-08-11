l.d(t, { A: () => N }), l(321073);
var n = l(477900),
    i = l(582128),
    s = l(17928),
    r = l(477782),
    a = l(282956),
    o = l(704824),
    c = l(264322),
    d = l(468689),
    u = l(780964),
    m = l(370997),
    p = l(766075),
    x = l(71393),
    h = l(576705),
    j = l(652215),
    A = l(375708);
function N(e) {
    let { user: t, application: N, guildId: g, context: f, onItemClick: v } = e,
        C = x.A.getGuild(g),
        I = (0, s.bG)([h.A], () => (null != C ? h.A.can(j.xBc.MANAGE_GUILD, C) : null)),
        T = (0, c.ON)(g, !0),
        _ = (0, c.A4)(!0, !0),
        E = i.useMemo(
            () =>
                null != N
                    ? N.id
                    : t?.id != null
                      ? (T.result?.sectionIdsByBotId[t.id] ?? _.result?.sectionIdsByBotId[t.id] ?? t.id)
                      : void 0,
            [N, t?.id, T.result, _.result],
        ),
        b = t?.bot === !0 || null != N,
        { token: y } = (0, o.U)(b ? E : null),
        { isUserApp: S, isGuildApp: P } = i.useMemo(() => {
            if (null == E) return { isGuildApp: !1, isUserApp: !1 };
            let e = Object.values(T.result?.sections ?? {}),
                t = Object.values(_.result?.sections ?? {});
            return {
                isGuildApp: e.some((e) => e.descriptor.application?.id === E),
                isUserApp: t.some((e) => e.descriptor.application?.id === E),
            };
        }, [T, _, E]);
    i.useEffect(() => {
        l(53656);
    }, []);
    let R = i.useCallback(() => {
            C?.id != null && (d.A.open(C.id, j.BEX.INTEGRATIONS), a.A.setSection(j.wLn.APPLICATION, E), v?.());
        }, [E, C?.id, v]),
        D = i.useCallback(() => {
            (0, p.openUserSettings)(u.X.AUTHORIZED_APPS_CATEGORY);
            let e = "";
            null != N ? (e = N.name) : null != t && (e = t.username),
                "" !== e && m.iU.setState({ searchQuery: e }),
                v?.();
        }, [N, v, t]);
    if (f === j.BRT.POPOUT) return null;
    let U = [];
    return (
        P &&
            I &&
            U.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-server-integration", label: A.intl.string(A.t.IuSJT8), action: R },
                    "manage-server-integration",
                ),
            ),
        S &&
            null != y &&
            U.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-authorized-app", label: A.intl.string(A.t.V8ruvz), action: D },
                    "manage-authorized-app",
                ),
            ),
        U
    );
}
