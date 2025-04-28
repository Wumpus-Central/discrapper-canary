n.d(t, { Z: () => j }), n(388685), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(313201),
    c = n(243778),
    d = n(321114),
    u = n(731722),
    m = n(993413),
    p = n(996073),
    g = n(594174),
    h = n(840720),
    f = n(921944),
    b = n(526761),
    _ = n(388032),
    x = n(170339);
let E = (0, o.hQ)(),
    j = r.memo(function (e) {
        let { availablePrimaryGuilds: t } = e,
            [n, o] = (0, c.US)([l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            j = r.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            C = (0, s.e7)([g.default], () => {
                var e;
                return (0, u.Pb)(null == (e = g.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            O = r.useMemo(
                () =>
                    t.reduce((e, t) => {
                        var n;
                        return (
                            (null == (n = t.profile) ? void 0 : n.tag) != null &&
                                e.push({
                                    label: t.name,
                                    value: t.id
                                }),
                            e
                        );
                    }, []),
                [t]
            ),
            S = r.useCallback(
                (e) => {
                    var t, n, r;
                    if (null == e) return null;
                    let s = j.get(e.value);
                    if (null == s) return null;
                    let l = null == (t = s.profile) ? void 0 : t.tag;
                    return null == l
                        ? null
                        : (0, i.jsx)(h.Z, {
                              guildTag: l,
                              guildBadge: null != (r = null == (n = s.profile) ? void 0 : n.badge) ? r : void 0,
                              guildId: s.id,
                              guildName: e.label,
                              guildIcon: s.icon,
                              guildIconSize: 32
                          });
                },
                [j]
            ),
            v = r.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: S(t) });
                },
                [S]
            ),
            T = r.useCallback(
                (e) => {
                    o(f.L.TAKE_ACTION), (0, d.c)(e, !0);
                },
                [o]
            ),
            I = r.useCallback((e) => e === C, [C]),
            N = r.useCallback((e) => e, []),
            y = r.useCallback(() => {
                o(f.L.TAKE_ACTION), (0, d.c)(null, !1);
            }, [o]),
            A = r.useRef(null);
        return (
            (0, p.Z)(A, b.Y_.GUILD_TAG),
            (0, i.jsxs)(m.Z, {
                title: _.intl.string(_.t.Pdd1nZ),
                titleId: E,
                ref: A,
                titleIcon:
                    n === l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, i.jsx)(a.IGR, {
                        text: _.intl.string(_.t.y2b7CA),
                        className: x.newBadge
                    }),
                children: [
                    (0, i.jsx)(a.Text, {
                        className: x.subtitle,
                        variant: 'text-sm/normal',
                        children: _.intl.string(_.t.mlZ6Jy)
                    }),
                    (0, i.jsx)(a.PhF, {
                        className: x.select,
                        optionClassName: x.selectPopout,
                        isSelected: I,
                        options: O,
                        select: T,
                        renderOptionValue: v,
                        renderOptionLabel: S,
                        serialize: N,
                        clear: y,
                        clearable: null != C
                    })
                ]
            })
        );
    });
