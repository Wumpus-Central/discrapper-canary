n.d(t, { Z: () => I }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    l = n(313201),
    c = n(243778),
    u = n(305347),
    d = n(731722),
    f = n(172751),
    _ = n(993413),
    p = n(996073),
    h = n(594174),
    m = n(840720),
    g = n(921944),
    E = n(131085),
    b = n(526761),
    y = n(388032),
    O = n(999087);
let v = (0, l.hQ)(),
    I = i.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: l } = e,
            [I, T] = (0, c.US)([o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            S = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            A = (0, a.e7)([h.default], () => {
                var e;
                return (0, d.Pb)(null == (e = h.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            C = void 0 !== n ? n : A,
            N = i.useMemo(
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
                    let a = S.get(e.value);
                    if (null == a) return null;
                    let o = null == (t = a.profile) ? void 0 : t.tag;
                    return null == o
                        ? null
                        : (0, r.jsx)(m.Z, {
                              guildTag: o,
                              guildBadge: null != (i = null == (n = a.profile) ? void 0 : n.badge) ? i : void 0,
                              guildId: a.id,
                              guildName: e.label,
                              guildIcon: a.icon,
                              guildIconSize: 32,
                          });
                },
                [S],
            ),
            P = i.useCallback(
                (e) => {
                    var t;
                    if (null == e) return null;
                    let n = S.get(e.value);
                    return null == n || null == (null == (t = n.profile) ? void 0 : t.tag)
                        ? null
                        : (0, r.jsx)(u.Ft, {
                              guildId: n.id,
                              guildName: n.name,
                              guildIcon: n.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [S],
            ),
            D = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = S.get(e.value);
                    if (null == a) return null;
                    let o = null == (t = a.profile) ? void 0 : t.tag;
                    return null == o
                        ? null
                        : (0, r.jsx)(f.m0, {
                              guildId: a.id,
                              guildTag: o,
                              guildBadge: null != (i = null == (n = a.profile) ? void 0 : n.badge) ? i : void 0,
                              badgeSize: E.Gg.SIZE_16,
                              textColor: "interactive-normal",
                              textVariant: "text-sm/semibold",
                          });
                },
                [S],
            ),
            w = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: R(t) });
                },
                [R],
            ),
            x = i.useCallback(
                (e) => {
                    T(g.L.TAKE_ACTION), null == l || l(e);
                },
                [T, l],
            ),
            L = i.useCallback((e) => e === C, [C]),
            M = i.useCallback((e) => e, []),
            k = i.useCallback(() => {
                T(g.L.TAKE_ACTION), null == l || l(null);
            }, [T, l]),
            j = i.useRef(null);
        return (
            (0, p.Z)(j, b.Y_.GUILD_TAG),
            (0, r.jsxs)(_.Z, {
                title: y.intl.string(y.t.Pdd1nd),
                titleId: v,
                ref: j,
                titleIcon:
                    I === o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, r.jsx)(s.IGR, {
                        text: y.intl.string(y.t.y2b7CA),
                        className: O.newBadge,
                    }),
                children: [
                    (0, r.jsx)(s.Text, {
                        className: O.subtitle,
                        variant: "text-sm/normal",
                        children: y.intl.string(y.t.mlZ6Jx),
                    }),
                    (0, r.jsx)(s.PhF, {
                        className: O.select,
                        optionClassName: O.selectPopout,
                        isSelected: L,
                        options: N,
                        select: x,
                        renderLeading: P,
                        renderTrailing: D,
                        renderOptionValue: w,
                        serialize: M,
                        clear: k,
                        clearable: null != C,
                        maxVisibleItems: 8,
                    }),
                ],
            })
        );
    });
