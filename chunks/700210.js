t.d(l, { A: () => A }), t(321073);
var n = t(627968),
    s = t(64700),
    i = t(17928),
    r = t(477782),
    a = t(282956),
    c = t(704824),
    o = t(264322),
    d = t(468689),
    u = t(780964),
    m = t(161236),
    p = t(858897),
    x = t(71393),
    h = t(576705),
    j = t(652215),
    N = t(375708);
function A(e) {
    let { user: l, application: A, guildId: g, context: v, onItemClick: I } = e,
        _ = A?.id ?? l?.id,
        C = x.A.getGuild(g),
        T = (0, i.bG)([h.A], () => (null != C ? h.A.can(j.xBc.MANAGE_GUILD, C) : null)),
        E = (0, o.ON)(g, !0),
        f = (0, o.A4)(!0, !0),
        b = l?.bot === !0 || null != A,
        { token: S } = (0, c.U)(b ? _ : null),
        { isUserApp: y, isGuildApp: P } = s.useMemo(() => {
            if (null == _) return { isGuildApp: !1, isUserApp: !1 };
            let e = Object.values(E.result?.sections ?? {}),
                l = Object.values(f.result?.sections ?? {});
            return {
                isGuildApp: e.some((e) => e.descriptor.application?.id === _),
                isUserApp: l.some((e) => e.descriptor.application?.id === _),
            };
        }, [E, f, _]);
    s.useEffect(() => {
        t(53656);
    }, []);
    let R = s.useCallback(() => {
            C?.id != null && (d.A.open(C.id, j.BEX.INTEGRATIONS), a.A.setSection(j.wLn.APPLICATION, _), I?.());
        }, [_, C?.id, I]),
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
            T &&
            U.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-server-integration", label: N.intl.string(N.t.IuSJT8), action: R },
                    "manage-server-integration",
                ),
            ),
        y &&
            null != S &&
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
