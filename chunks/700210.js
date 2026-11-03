(t.d(l, { A: () => A }), t(321073));
var n = t(477900),
    i = t(582128),
    s = t(17928),
    r = t(477782),
    a = t(282956),
    o = t(704824),
    c = t(264322),
    d = t(468689),
    u = t(780964),
    m = t(370997),
    p = t(766075),
    h = t(71393),
    x = t(576705),
    j = t(652215),
    N = t(105292);
function A(e) {
    let { user: l, application: A, guildId: g, context: f, onItemClick: I } = e,
        v = h.A.getGuild(g),
        C = (0, s.bG)([x.A], () => (null != v ? x.A.can(j.xBc.MANAGE_GUILD, v) : null)),
        T = (0, c.ON)(g, !0),
        _ = (0, c.A4)(!0, !0),
        E = i.useMemo(
            () =>
                null != A
                    ? A.id
                    : l?.id != null
                      ? (T.result?.sectionIdsByBotId[l.id] ?? _.result?.sectionIdsByBotId[l.id] ?? l.id)
                      : void 0,
            [A, l?.id, T.result, _.result],
        ),
        b = l?.bot === !0 || null != A,
        { token: y } = (0, o.U)(b ? E : null),
        { isUserApp: S, isGuildApp: P } = i.useMemo(() => {
            if (null == E) return { isGuildApp: !1, isUserApp: !1 };
            let e = Object.values(T.result?.sections ?? {}),
                l = Object.values(_.result?.sections ?? {});
            return {
                isGuildApp: e.some((e) => e.descriptor.application?.id === E),
                isUserApp: l.some((e) => e.descriptor.application?.id === E),
            };
        }, [T, _, E]);
    i.useEffect(() => {
        t(53656);
    }, []);
    let R = i.useCallback(() => {
            v?.id != null && (d.A.open(v.id, j.BEX.INTEGRATIONS), a.A.setSection(j.wLn.APPLICATION, E), I?.());
        }, [E, v?.id, I]),
        D = i.useCallback(() => {
            (0, p.openUserSettings)(u.X.AUTHORIZED_APPS_CATEGORY);
            let e = "";
            (null != A ? (e = A.name) : null != l && (e = l.username),
                "" !== e && m.iU.setState({ searchQuery: e }),
                I?.());
        }, [A, I, l]);
    if (f === j.BRT.POPOUT) return null;
    let G = [];
    return (
        P &&
            C &&
            G.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-server-integration", label: N.intl.string(N.t.IuSJT8), action: R },
                    "manage-server-integration",
                ),
            ),
        S &&
            null != y &&
            G.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-authorized-app", label: N.intl.string(N.t.V8ruvz), action: D },
                    "manage-authorized-app",
                ),
            ),
        G
    );
}
