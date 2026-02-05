n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(843282),
    l = n(397927),
    o = n(915089),
    c = n(145497),
    d = n(685073),
    u = n(534400),
    _ = n(128450),
    m = n(193658),
    A = n(287809),
    g = n(581781),
    E = n(743981),
    h = n(355097),
    p = n(985018),
    C = n(86267);
let x = (0, o.Ld)(),
    T = s.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: o } = e,
            T = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            I = (0, r.bG)([A.default], () => (0, d.Zo)(A.default.getCurrentUser()?.primaryGuild).guildId),
            S = void 0 !== n ? n : I,
            f = s.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            N = s.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = T.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, i.jsx)(g.A, {
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [T],
            ),
            b = s.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = T.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, i.jsx)(c.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [T],
            ),
            R = s.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = T.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, i.jsx)(u.o9, {
                              guildId: t.id,
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: E.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [T],
            ),
            v = s.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: N(t) });
                },
                [N],
            ),
            O = s.useCallback(
                (e) => {
                    o?.(e);
                },
                [o],
            ),
            j = s.useCallback((e) => e === S, [S]),
            P = s.useCallback((e) => e, []),
            y = s.useCallback(() => {
                o?.(null);
            }, [o]),
            L = s.useRef(null);
        return (
            (0, m.A)(L, h._F.GUILD_TAG),
            (0, i.jsxs)(_.A, {
                title: p.intl.string(p.t.Pdd1nd),
                titleId: x,
                ref: L,
                children: [
                    (0, i.jsx)(l.Text, {
                        className: C.VA,
                        variant: "text-sm/normal",
                        children: p.intl.string(p.t.mlZ6Jx),
                    }),
                    (0, i.jsx)(a.Pw, {
                        className: C.Lt,
                        optionClassName: C.S0,
                        isSelected: j,
                        options: f,
                        select: O,
                        renderLeading: b,
                        renderTrailing: R,
                        renderOptionValue: v,
                        serialize: P,
                        clear: y,
                        clearable: null != S,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
