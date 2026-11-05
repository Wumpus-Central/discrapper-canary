n(321073);
var t = n(477900),
    i = n(582128),
    s = n(855986),
    r = n(477782),
    a = n(282956),
    o = n(704824),
    c = n(264322),
    d = n(727419),
    u = n(780964),
    m = n(361328),
    p = n(766075),
    h = n(71393),
    x = n(576705),
    j = n(652215),
    A = n(792996);
n.d(
    l,
    {},
    {
        A: function (e) {
            let { user: l, application: N, guildId: g, context: I, onItemClick: v } = e,
                f = h.A.getGuild(g),
                C = (0, s.bG)([x.A], () => (null != f ? x.A.can(j.xBc.MANAGE_GUILD, f) : null)),
                E = (0, c.ON)(g, !0),
                T = (0, c.A4)(!0, !0),
                _ = i.useMemo(
                    () =>
                        null != N
                            ? N.id
                            : l?.id != null
                              ? (E.result?.sectionIdsByBotId[l.id] ?? T.result?.sectionIdsByBotId[l.id] ?? l.id)
                              : void 0,
                    [N, l?.id, E.result, T.result],
                ),
                b = l?.bot === !0 || null != N,
                { token: y } = (0, o.U)(b ? _ : null),
                { isUserApp: S, isGuildApp: P } = i.useMemo(() => {
                    if (null == _) return { isGuildApp: !1, isUserApp: !1 };
                    let e = Object.values(E.result?.sections ?? {}),
                        l = Object.values(T.result?.sections ?? {});
                    return {
                        isGuildApp: e.some((e) => e.descriptor.application?.id === _),
                        isUserApp: l.some((e) => e.descriptor.application?.id === _),
                    };
                }, [E, T, _]);
            i.useEffect(() => {
                n(53656);
            }, []);
            let R = i.useCallback(() => {
                    f?.id != null && (d.A.open(f.id, j.BEX.INTEGRATIONS), a.A.setSection(j.wLn.APPLICATION, _), v?.());
                }, [_, f?.id, v]),
                D = i.useCallback(() => {
                    (0, p.openUserSettings)(u.X.AUTHORIZED_APPS_CATEGORY);
                    let e = "";
                    (null != N ? (e = N.name) : null != l && (e = l.username),
                        "" !== e && m.iU.setState({ searchQuery: e }),
                        v?.());
                }, [N, v, l]);
            if (I === j.BRT.POPOUT) return null;
            let k = [];
            return (
                P &&
                    C &&
                    k.push(
                        (0, t.jsx)(
                            r.Dr,
                            { id: "manage-server-integration", label: A.intl.string(A.t.IuSJT8), action: R },
                            "manage-server-integration",
                        ),
                    ),
                S &&
                    null != y &&
                    k.push(
                        (0, t.jsx)(
                            r.Dr,
                            { id: "manage-authorized-app", label: A.intl.string(A.t.V8ruvz), action: D },
                            "manage-authorized-app",
                        ),
                    ),
                k
            );
        },
    },
);
