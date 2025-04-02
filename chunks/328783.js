n.d(t, { Z: () => x }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    o = n(313201),
    l = n(993413),
    c = n(996073),
    d = n(594174),
    u = n(931240),
    m = n(353093),
    g = n(170871),
    p = n(981631),
    h = n(526761),
    f = n(388032),
    b = n(898912);
let N = (0, o.hQ)(),
    x = i.memo(function (e) {
        let { availableClans: t } = e,
            n = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            o = (0, s.e7)([d.default], () => {
                var e;
                return (0, m.Pb)(null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild).guildId;
            }),
            x = i.useMemo(
                () =>
                    t.reduce((e, t) => {
                        var n;
                        return (
                            (null === (n = t.profile) || void 0 === n ? void 0 : n.tag) != null &&
                                e.push({
                                    label: t.name,
                                    value: t.id
                                }),
                            e
                        );
                    }, []),
                [t]
            ),
            _ = i.useCallback(
                (e) => {
                    var t, i;
                    if (null == e) return null;
                    let s = n.get(e.value);
                    if (null == s) return null;
                    let a = null === (t = s.profile) || void 0 === t ? void 0 : t.tag;
                    return null == a
                        ? null
                        : (0, r.jsx)(g.Z, {
                              clanTag: a,
                              clanBadge: null === (i = s.profile) || void 0 === i ? void 0 : i.badge,
                              guildId: s.id,
                              guildName: e.label,
                              guildIcon: s.icon,
                              guildIconSize: 32
                          });
                },
                [n]
            ),
            E = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: _(t) });
                },
                [_]
            ),
            j = i.useCallback((e) => (0, u.nE)(e, !0, p.Sbl.USER_SETTINGS), []),
            O = i.useCallback((e) => e === o, [o]),
            C = i.useCallback((e) => e, []),
            v = i.useCallback(() => (0, u.nE)(null, !1), []),
            S = i.useRef(null);
        return (
            (0, c.Z)(S, h.Y_.GUILD_TAG),
            (0, r.jsxs)(l.Z, {
                title: f.NW.string(f.t.Pdd1nZ),
                titleId: N,
                ref: S,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: b.subtitle,
                        variant: 'text-sm/normal',
                        children: f.NW.string(f.t.mlZ6Jy)
                    }),
                    (0, r.jsx)(a.PhF, {
                        className: b.select,
                        optionClassName: b.selectPopout,
                        isSelected: O,
                        options: x,
                        select: j,
                        renderOptionValue: E,
                        renderOptionLabel: _,
                        serialize: C,
                        clear: v,
                        clearable: null != o
                    })
                ]
            })
        );
    });
