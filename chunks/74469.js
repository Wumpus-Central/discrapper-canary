n.d(t, { Z: () => O }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(199849),
    s = n(481060),
    l = n(313201),
    c = n(305347),
    u = n(731722),
    d = n(172751),
    f = n(993413),
    p = n(996073),
    _ = n(594174),
    h = n(840720),
    m = n(131085),
    g = n(526761),
    E = n(388032),
    b = n(149782);
let y = (0, l.hQ)(),
    O = i.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: l } = e,
            O = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            v = (0, a.e7)([_.default], () => {
                var e;
                return (0, u.Pb)(null == (e = _.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            S = void 0 !== n ? n : v,
            I = i.useMemo(
                () =>
                    t.reduce((e, t) => {
                        var n;
                        return (
                            (null == (n = t.profile) ? void 0 : n.tag) != null &&
                                e.push({
                                    label: t.name,
                                    value: t.id,
                                }),
                            e
                        );
                    }, []),
                [t],
            ),
            T = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = O.get(e.value);
                    if (null == a) return null;
                    let o = null == (t = a.profile) ? void 0 : t.tag;
                    return null == o
                        ? null
                        : (0, r.jsx)(h.Z, {
                              guildTag: o,
                              guildBadge: null != (i = null == (n = a.profile) ? void 0 : n.badge) ? i : void 0,
                              guildId: a.id,
                              guildName: e.label,
                              guildIcon: a.icon,
                              guildIconSize: 32,
                          });
                },
                [O],
            ),
            C = i.useCallback(
                (e) => {
                    var t;
                    if (null == e) return null;
                    let n = O.get(e.value);
                    return null == n || null == (null == (t = n.profile) ? void 0 : t.tag)
                        ? null
                        : (0, r.jsx)(c.Ft, {
                              guildId: n.id,
                              guildName: n.name,
                              guildIcon: n.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [O],
            ),
            A = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = O.get(e.value);
                    if (null == a) return null;
                    let o = null == (t = a.profile) ? void 0 : t.tag;
                    return null == o
                        ? null
                        : (0, r.jsx)(d.m0, {
                              guildId: a.id,
                              guildTag: o,
                              guildBadge: null != (i = null == (n = a.profile) ? void 0 : n.badge) ? i : void 0,
                              badgeSize: m.Gg.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [O],
            ),
            N = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: T(t) });
                },
                [T],
            ),
            P = i.useCallback(
                (e) => {
                    null == l || l(e);
                },
                [l],
            ),
            w = i.useCallback((e) => e === S, [S]),
            R = i.useCallback((e) => e, []),
            D = i.useCallback(() => {
                null == l || l(null);
            }, [l]),
            x = i.useRef(null);
        return (
            (0, p.Z)(x, g.Y_.GUILD_TAG),
            (0, r.jsxs)(f.Z, {
                title: E.intl.string(E.t.Pdd1nd),
                titleId: y,
                ref: x,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: b.subtitle,
                        variant: "text-sm/normal",
                        children: E.intl.string(E.t.mlZ6Jx),
                    }),
                    (0, r.jsx)(o.B6, {
                        className: b.select,
                        optionClassName: b.selectPopout,
                        isSelected: w,
                        options: I,
                        select: P,
                        renderLeading: C,
                        renderTrailing: A,
                        renderOptionValue: N,
                        serialize: R,
                        clear: D,
                        clearable: null != S,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
