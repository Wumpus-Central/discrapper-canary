n.d(t, { Z: () => y }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    l = n(313201),
    c = n(243778),
    u = n(731722),
    d = n(993413),
    f = n(996073),
    _ = n(594174),
    p = n(840720),
    h = n(921944),
    m = n(526761),
    g = n(388032),
    E = n(999087);
let b = (0, l.hQ)(),
    y = i.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: l } = e,
            [y, O] = (0, c.US)([o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            v = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            I = (0, a.e7)([_.default], () => {
                var e;
                return (0, u.Pb)(null == (e = _.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            T = void 0 !== n ? n : I,
            S = i.useMemo(
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
            A = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = v.get(e.value);
                    if (null == a) return null;
                    let o = null == (t = a.profile) ? void 0 : t.tag;
                    return null == o
                        ? null
                        : (0, r.jsx)(p.Z, {
                              guildTag: o,
                              guildBadge: null != (i = null == (n = a.profile) ? void 0 : n.badge) ? i : void 0,
                              guildId: a.id,
                              guildName: e.label,
                              guildIcon: a.icon,
                              guildIconSize: 32,
                          });
                },
                [v],
            ),
            C = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: A(t) });
                },
                [A],
            ),
            N = i.useCallback(
                (e) => {
                    O(h.L.TAKE_ACTION), null == l || l(e);
                },
                [O, l],
            ),
            R = i.useCallback((e) => e === T, [T]),
            P = i.useCallback((e) => e, []),
            w = i.useCallback(() => {
                O(h.L.TAKE_ACTION), null == l || l(null);
            }, [O, l]),
            D = i.useRef(null);
        return (
            (0, f.Z)(D, m.Y_.GUILD_TAG),
            (0, r.jsxs)(d.Z, {
                title: g.intl.string(g.t.Pdd1nZ),
                titleId: b,
                ref: D,
                titleIcon:
                    y === o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, r.jsx)(s.IGR, {
                        text: g.intl.string(g.t.y2b7CA),
                        className: E.newBadge,
                    }),
                children: [
                    (0, r.jsx)(s.Text, {
                        className: E.subtitle,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.mlZ6Jy),
                    }),
                    (0, r.jsx)(s.PhF, {
                        className: E.select,
                        optionClassName: E.selectPopout,
                        isSelected: R,
                        options: S,
                        select: N,
                        renderOptionValue: C,
                        renderOptionLabel: A,
                        serialize: P,
                        clear: w,
                        clearable: null != T,
                    }),
                ],
            })
        );
    });
