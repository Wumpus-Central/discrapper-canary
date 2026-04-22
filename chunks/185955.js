n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(843282),
    r = n(834730),
    o = n(915089),
    d = n(145497),
    u = n(685073),
    c = n(534400),
    g = n(128450),
    m = n(597551),
    _ = n(287809),
    A = n(581781),
    h = n(743981),
    p = n(355097),
    x = n(985018),
    E = n(688990);
let T = (0, o.Ld)(),
    S = s.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: o } = e,
            S = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            f = (0, l.bG)([_.default], () => (0, u.Zo)(_.default.getCurrentUser()?.primaryGuild).guildId),
            b = void 0 !== n ? n : f,
            C = s.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            v = s.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = S.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, i.jsx)(A.A, {
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [S],
            ),
            N = s.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = S.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, i.jsx)(d.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [S],
            ),
            I = s.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = S.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, i.jsx)(c.o9, {
                              guildId: t.id,
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: h.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [S],
            ),
            y = s.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: v(t) });
                },
                [v],
            ),
            j = s.useCallback(
                (e) => {
                    o?.(e);
                },
                [o],
            ),
            O = s.useCallback((e) => e === b, [b]),
            R = s.useCallback((e) => e, []),
            L = s.useCallback(() => {
                o?.(null);
            }, [o]),
            D = s.useRef(null);
        return (
            (0, m.A)(D, p._F.GUILD_TAG),
            (0, i.jsxs)(g.A, {
                title: x.intl.string(x.t.Pdd1nd),
                titleId: T,
                ref: D,
                children: [
                    (0, i.jsx)(r.E, {
                        className: E.VA,
                        variant: "text-sm/normal",
                        children: x.intl.string(x.t.mlZ6Jx),
                    }),
                    (0, i.jsx)(a.Pw, {
                        className: E.Lt,
                        optionClassName: E.S0,
                        isSelected: O,
                        options: C,
                        select: j,
                        renderLeading: N,
                        renderTrailing: I,
                        renderOptionValue: y,
                        serialize: R,
                        clear: L,
                        clearable: null != b,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
