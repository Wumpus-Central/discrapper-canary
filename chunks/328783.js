n.d(t, { Z: () => C }), n(388685), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
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
    x = n(388032),
    E = n(989966);
let j = (0, o.hQ)(),
    C = r.memo(function (e) {
        let { availableClans: t } = e,
            [n, o] = (0, c.US)([l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            C = r.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            O = (0, s.e7)([m.default], () => {
                var e;
                return (0, p.Pb)(null == (e = m.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            S = r.useMemo(
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
            v = r.useCallback(
                (e) => {
                    var t, n;
                    if (null == e) return null;
                    let r = C.get(e.value);
                    if (null == r) return null;
                    let s = null == (t = r.profile) ? void 0 : t.tag;
                    return null == s
                        ? null
                        : (0, i.jsx)(h.Z, {
                              clanTag: s,
                              clanBadge: null == (n = r.profile) ? void 0 : n.badge,
                              guildId: r.id,
                              guildName: e.label,
                              guildIcon: r.icon,
                              guildIconSize: 32
                          });
                },
                [C]
            ),
            T = r.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: v(t) });
                },
                [v]
            ),
            I = r.useCallback(
                (e) => {
                    o(b.L.TAKE_ACTION), (0, g.nE)(e, !0, f.Sbl.USER_SETTINGS);
                },
                [o]
            ),
            N = r.useCallback((e) => e === O, [O]),
            y = r.useCallback((e) => e, []),
            A = r.useCallback(() => {
                o(b.L.TAKE_ACTION), (0, g.nE)(null, !1);
            }, [o]),
            P = r.useRef(null);
        return (
            (0, u.Z)(P, _.Y_.GUILD_TAG),
            (0, i.jsxs)(d.Z, {
                title: x.intl.string(x.t.Pdd1nZ),
                titleId: j,
                ref: P,
                titleIcon:
                    n === l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, i.jsx)(a.IGR, {
                        text: x.intl.string(x.t.y2b7CA),
                        className: E.newBadge
                    }),
                children: [
                    (0, i.jsx)(a.Text, {
                        className: E.subtitle,
                        variant: 'text-sm/normal',
                        children: x.intl.string(x.t.mlZ6Jy)
                    }),
                    (0, i.jsx)(a.PhF, {
                        className: E.select,
                        optionClassName: E.selectPopout,
                        isSelected: N,
                        options: S,
                        select: I,
                        renderOptionValue: T,
                        renderOptionLabel: v,
                        serialize: y,
                        clear: A,
                        clearable: null != O
                    })
                ]
            })
        );
    });
