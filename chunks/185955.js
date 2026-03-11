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
    g = n(193658),
    A = n(287809),
    m = n(581781),
    h = n(743981),
    p = n(355097),
    x = n(985018),
    E = n(919501);
let T = (0, o.Ld)(),
    S = s.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: o } = e,
            S = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            C = (0, l.bG)([A.default], () => (0, c.Zo)(A.default.getCurrentUser()?.primaryGuild).guildId),
            I = void 0 !== n ? n : C,
            f = s.useMemo(
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
                        : (0, i.jsx)(m.A, {
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
            b = s.useCallback(
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
                              badgeSize: h.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [S],
            ),
            O = s.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: N(t) });
                },
                [N],
            ),
            j = s.useCallback(
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
            D = s.useRef(null);
        return (
            (0, g.A)(D, p._F.GUILD_TAG),
            (0, i.jsxs)(_.A, {
                title: x.intl.string(x.t.Pdd1nd),
                titleId: T,
                ref: D,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: E.VA,
                        variant: "text-sm/normal",
                        children: x.intl.string(x.t.mlZ6Jx),
                    }),
                    (0, i.jsx)(a.Pw, {
                        className: E.Lt,
                        optionClassName: E.S0,
                        isSelected: R,
                        options: f,
                        select: j,
                        renderLeading: b,
                        renderTrailing: v,
                        renderOptionValue: O,
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
