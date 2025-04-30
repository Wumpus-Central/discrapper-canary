n.d(t, { Z: () => E }), n(388685), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(313201),
    c = n(243778),
    d = n(731722),
    u = n(993413),
    m = n(996073),
    p = n(594174),
    g = n(840720),
    h = n(921944),
    f = n(526761),
    b = n(388032),
    _ = n(170339);
let x = (0, o.hQ)(),
    E = r.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: o } = e,
            [E, j] = (0, c.US)([l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            C = r.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            O = (0, s.e7)([p.default], () => {
                var e;
                return (0, d.Pb)(null == (e = p.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            S = void 0 !== n ? n : O,
            v = r.useMemo(
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
            T = r.useCallback(
                (e) => {
                    var t, n, r;
                    if (null == e) return null;
                    let s = C.get(e.value);
                    if (null == s) return null;
                    let l = null == (t = s.profile) ? void 0 : t.tag;
                    return null == l
                        ? null
                        : (0, i.jsx)(g.Z, {
                              guildTag: l,
                              guildBadge: null != (r = null == (n = s.profile) ? void 0 : n.badge) ? r : void 0,
                              guildId: s.id,
                              guildName: e.label,
                              guildIcon: s.icon,
                              guildIconSize: 32
                          });
                },
                [C]
            ),
            N = r.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: T(t) });
                },
                [T]
            ),
            I = r.useCallback(
                (e) => {
                    j(h.L.TAKE_ACTION), null == o || o(e);
                },
                [j, o]
            ),
            y = r.useCallback((e) => e === S, [S]),
            A = r.useCallback((e) => e, []),
            P = r.useCallback(() => {
                j(h.L.TAKE_ACTION), null == o || o(null);
            }, [j, o]),
            R = r.useRef(null);
        return (
            (0, m.Z)(R, f.Y_.GUILD_TAG),
            (0, i.jsxs)(u.Z, {
                title: b.intl.string(b.t.Pdd1nZ),
                titleId: x,
                ref: R,
                titleIcon:
                    E === l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, i.jsx)(a.IGR, {
                        text: b.intl.string(b.t.y2b7CA),
                        className: _.newBadge
                    }),
                children: [
                    (0, i.jsx)(a.Text, {
                        className: _.subtitle,
                        variant: 'text-sm/normal',
                        children: b.intl.string(b.t.mlZ6Jy)
                    }),
                    (0, i.jsx)(a.PhF, {
                        className: _.select,
                        optionClassName: _.selectPopout,
                        isSelected: y,
                        options: v,
                        select: I,
                        renderOptionValue: N,
                        renderOptionLabel: T,
                        serialize: A,
                        clear: P,
                        clearable: null != S
                    })
                ]
            })
        );
    });
