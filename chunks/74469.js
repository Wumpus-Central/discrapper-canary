n.d(t, { Z: () => S }), n(388685), n(539854);
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
    p = n(993413),
    _ = n(996073),
    m = n(594174),
    h = n(840720),
    g = n(921944),
    E = n(131085),
    b = n(526761),
    y = n(388032),
    O = n(999087);
let v = (0, l.hQ)(),
    S = i.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: l } = e,
            [S, I] = (0, c.US)([o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            T = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            A = (0, a.e7)([m.default], () => {
                var e;
                return (0, d.Pb)(null == (e = m.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
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
            P = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = T.get(e.value);
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
                [T],
            ),
            R = i.useCallback(
                (e) => {
                    var t;
                    if (null == e) return null;
                    let n = T.get(e.value);
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
                [T],
            ),
            w = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = T.get(e.value);
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
                [T],
            ),
            D = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: P(t) });
                },
                [P],
            ),
            x = i.useCallback(
                (e) => {
                    I(g.L.TAKE_ACTION), null == l || l(e);
                },
                [I, l],
            ),
            L = i.useCallback((e) => e === C, [C]),
            j = i.useCallback((e) => e, []),
            M = i.useCallback(() => {
                I(g.L.TAKE_ACTION), null == l || l(null);
            }, [I, l]),
            k = i.useRef(null);
        return (
            (0, _.Z)(k, b.Y_.GUILD_TAG),
            (0, r.jsxs)(p.Z, {
                title: y.intl.string(y.t.Pdd1nd),
                titleId: v,
                ref: k,
                titleIcon:
                    S === o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
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
                        renderLeading: R,
                        renderTrailing: w,
                        renderOptionValue: D,
                        serialize: j,
                        clear: M,
                        clearable: null != C,
                        maxVisibleItems: 8,
                    }),
                ],
            })
        );
    });
