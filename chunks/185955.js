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
    _ = n(128450),
    m = n(597551),
    g = n(287809),
    A = n(581781),
    x = n(743981),
    h = n(355097),
    p = n(985018),
    T = n(919501);
let E = (0, o.Ld)(),
    S = s.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: o } = e,
            S = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            C = (0, l.bG)([g.default], () => (0, c.Zo)(g.default.getCurrentUser()?.primaryGuild).guildId),
            f = void 0 !== n ? n : C,
            b = s.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            N = s.useCallback(
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
            I = s.useCallback(
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
            v = s.useCallback(
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
                              badgeSize: x.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [S],
            ),
            j = s.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: N(t) });
                },
                [N],
            ),
            y = s.useCallback(
                (e) => {
                    o?.(e);
                },
                [o],
            ),
            R = s.useCallback((e) => e === f, [f]),
            O = s.useCallback((e) => e, []),
            P = s.useCallback(() => {
                o?.(null);
            }, [o]),
            L = s.useRef(null);
        return (
            (0, m.A)(L, h._F.GUILD_TAG),
            (0, i.jsxs)(_.A, {
                title: p.intl.string(p.t.Pdd1nd),
                titleId: E,
                ref: L,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: T.VA,
                        variant: "text-sm/normal",
                        children: p.intl.string(p.t.mlZ6Jx),
                    }),
                    (0, i.jsx)(a.Pw, {
                        className: T.Lt,
                        optionClassName: T.S0,
                        isSelected: R,
                        options: b,
                        select: y,
                        renderLeading: I,
                        renderTrailing: v,
                        renderOptionValue: j,
                        serialize: O,
                        clear: P,
                        clearable: null != f,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
