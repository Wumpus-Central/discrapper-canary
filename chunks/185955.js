n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(843282),
    r = n(397927),
    o = n(915089),
    c = n(145497),
    d = n(685073),
    u = n(534400),
    _ = n(128450),
    m = n(193658),
    A = n(287809),
    g = n(581781),
    h = n(743981),
    x = n(355097),
    p = n(985018),
    E = n(919501);
let C = (0, o.Ld)(),
    T = s.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: o } = e,
            T = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            S = (0, a.bG)([A.default], () => (0, d.Zo)(A.default.getCurrentUser()?.primaryGuild).guildId),
            I = void 0 !== n ? n : S,
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
            j = s.useCallback(
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
                              badgeSize: h.Sl.SIZE_16,
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
            R = s.useCallback((e) => e === I, [I]),
            y = s.useCallback((e) => e, []),
            P = s.useCallback(() => {
                o?.(null);
            }, [o]),
            L = s.useRef(null);
        return (
            (0, m.A)(L, x._F.GUILD_TAG),
            (0, i.jsxs)(_.A, {
                title: p.intl.string(p.t.Pdd1nd),
                titleId: C,
                ref: L,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: E.VA,
                        variant: "text-sm/normal",
                        children: p.intl.string(p.t.mlZ6Jx),
                    }),
                    (0, i.jsx)(l.Pw, {
                        className: E.Lt,
                        optionClassName: E.S0,
                        isSelected: R,
                        options: f,
                        select: O,
                        renderLeading: b,
                        renderTrailing: j,
                        renderOptionValue: v,
                        serialize: y,
                        clear: P,
                        clearable: null != I,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
