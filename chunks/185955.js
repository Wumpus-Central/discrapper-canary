n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(843282),
    r = n(397927),
    o = n(915089),
    d = n(145497),
    c = n(685073),
    u = n(534400),
    m = n(128450),
    _ = n(597551),
    g = n(287809),
    x = n(581781),
    A = n(743981),
    h = n(355097),
    p = n(985018),
    f = n(591470);
let T = (0, o.Ld)(),
    S = s.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: o } = e,
            S = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            E = (0, l.bG)([g.default], () => (0, c.Zo)(g.default.getCurrentUser()?.primaryGuild).guildId),
            b = void 0 !== n ? n : E,
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
                        : (0, i.jsx)(x.A, {
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
                        : (0, i.jsx)(u.o9, {
                              guildId: t.id,
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: A.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [S],
            ),
            j = s.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: v(t) });
                },
                [v],
            ),
            y = s.useCallback(
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
            P = s.useRef(null);
        return (
            (0, _.A)(P, h._F.GUILD_TAG),
            (0, i.jsxs)(m.A, {
                title: p.intl.string(p.t.Pdd1nd),
                titleId: T,
                ref: P,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: f.VA,
                        variant: "text-sm/normal",
                        children: p.intl.string(p.t.mlZ6Jx),
                    }),
                    (0, i.jsx)(a.Pw, {
                        className: f.Lt,
                        optionClassName: f.S0,
                        isSelected: O,
                        options: C,
                        select: y,
                        renderLeading: N,
                        renderTrailing: I,
                        renderOptionValue: j,
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
