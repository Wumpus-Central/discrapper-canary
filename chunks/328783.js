n.d(t, { Z: () => j }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(704215),
    l = n(481060),
    o = n(313201),
    c = n(243778),
    d = n(993413),
    u = n(996073),
    m = n(594174),
    g = n(931240),
    p = n(353093),
    h = n(170871),
    f = n(981631),
    b = n(921944),
    _ = n(526761),
    N = n(388032),
    x = n(989966);
let E = (0, o.hQ)(),
    j = i.memo(function (e) {
        let { availableClans: t } = e,
            [n, o] = (0, c.US)([a.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            j = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            C = (0, s.e7)([m.default], () => {
                var e;
                return (0, p.Pb)(null == (e = m.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            O = i.useMemo(
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
            S = i.useCallback(
                (e) => {
                    var t, n;
                    if (null == e) return null;
                    let i = j.get(e.value);
                    if (null == i) return null;
                    let s = null == (t = i.profile) ? void 0 : t.tag;
                    return null == s
                        ? null
                        : (0, r.jsx)(h.Z, {
                              clanTag: s,
                              clanBadge: null == (n = i.profile) ? void 0 : n.badge,
                              guildId: i.id,
                              guildName: e.label,
                              guildIcon: i.icon,
                              guildIconSize: 32
                          });
                },
                [j]
            ),
            v = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: S(t) });
                },
                [S]
            ),
            T = i.useCallback(
                (e) => {
                    o(b.L.TAKE_ACTION), (0, g.nE)(e, !0, f.Sbl.USER_SETTINGS);
                },
                [o]
            ),
            I = i.useCallback((e) => e === C, [C]),
            y = i.useCallback((e) => e, []),
            A = i.useCallback(() => {
                o(b.L.TAKE_ACTION), (0, g.nE)(null, !1);
            }, [o]),
            P = i.useRef(null);
        return (
            (0, u.Z)(P, _.Y_.GUILD_TAG),
            (0, r.jsxs)(d.Z, {
                title: N.NW.string(N.t.Pdd1nZ),
                titleId: E,
                ref: P,
                titleIcon:
                    n === a.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, r.jsx)(l.IGR, {
                        text: N.NW.string(N.t.y2b7CA),
                        className: x.newBadge
                    }),
                children: [
                    (0, r.jsx)(l.Text, {
                        className: x.subtitle,
                        variant: 'text-sm/normal',
                        children: N.NW.string(N.t.mlZ6Jy)
                    }),
                    (0, r.jsx)(l.PhF, {
                        className: x.select,
                        optionClassName: x.selectPopout,
                        isSelected: I,
                        options: O,
                        select: T,
                        renderOptionValue: v,
                        renderOptionLabel: S,
                        serialize: y,
                        clear: A,
                        clearable: null != C
                    })
                ]
            })
        );
    });
