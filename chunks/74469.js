n.d(t, { Z: () => I }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(199849),
    l = n(481060),
    c = n(313201),
    u = n(243778),
    d = n(305347),
    f = n(731722),
    p = n(172751),
    _ = n(993413),
    m = n(996073),
    h = n(594174),
    g = n(840720),
    E = n(921944),
    b = n(131085),
    y = n(526761),
    O = n(388032),
    v = n(999087);
let S = (0, c.hQ)(),
    I = i.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: c } = e,
            [I, T] = (0, u.US)([o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            A = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            C = (0, a.e7)([h.default], () => {
                var e;
                return (0, f.Pb)(null == (e = h.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            N = void 0 !== n ? n : C,
            P = i.useMemo(
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
            R = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = A.get(e.value);
                    if (null == a) return null;
                    let o = null == (t = a.profile) ? void 0 : t.tag;
                    return null == o
                        ? null
                        : (0, r.jsx)(g.Z, {
                              guildTag: o,
                              guildBadge: null != (i = null == (n = a.profile) ? void 0 : n.badge) ? i : void 0,
                              guildId: a.id,
                              guildName: e.label,
                              guildIcon: a.icon,
                              guildIconSize: 32,
                          });
                },
                [A],
            ),
            D = i.useCallback(
                (e) => {
                    var t;
                    if (null == e) return null;
                    let n = A.get(e.value);
                    return null == n || null == (null == (t = n.profile) ? void 0 : t.tag)
                        ? null
                        : (0, r.jsx)(d.Ft, {
                              guildId: n.id,
                              guildName: n.name,
                              guildIcon: n.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [A],
            ),
            w = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = A.get(e.value);
                    if (null == a) return null;
                    let o = null == (t = a.profile) ? void 0 : t.tag;
                    return null == o
                        ? null
                        : (0, r.jsx)(p.m0, {
                              guildId: a.id,
                              guildTag: o,
                              guildBadge: null != (i = null == (n = a.profile) ? void 0 : n.badge) ? i : void 0,
                              badgeSize: b.Gg.SIZE_16,
                              textColor: "interactive-normal",
                              textVariant: "text-sm/semibold",
                          });
                },
                [A],
            ),
            x = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: R(t) });
                },
                [R],
            ),
            L = i.useCallback(
                (e) => {
                    T(E.L.TAKE_ACTION), null == c || c(e);
                },
                [T, c],
            ),
            j = i.useCallback((e) => e === N, [N]),
            M = i.useCallback((e) => e, []),
            k = i.useCallback(() => {
                T(E.L.TAKE_ACTION), null == c || c(null);
            }, [T, c]),
            U = i.useRef(null);
        return (
            (0, m.Z)(U, y.Y_.GUILD_TAG),
            (0, r.jsxs)(_.Z, {
                title: O.intl.string(O.t.Pdd1nd),
                titleId: S,
                ref: U,
                titleIcon:
                    I === o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, r.jsx)(l.IGR, {
                        text: O.intl.string(O.t.y2b7CA),
                        className: v.newBadge,
                    }),
                children: [
                    (0, r.jsx)(l.Text, {
                        className: v.subtitle,
                        variant: "text-sm/normal",
                        children: O.intl.string(O.t.mlZ6Jx),
                    }),
                    (0, r.jsx)(s.B6, {
                        className: v.select,
                        optionClassName: v.selectPopout,
                        isSelected: j,
                        options: P,
                        select: L,
                        renderLeading: D,
                        renderTrailing: w,
                        renderOptionValue: x,
                        serialize: M,
                        clear: k,
                        clearable: null != N,
                        maxVisibleItems: 8,
                    }),
                ],
            })
        );
    });
