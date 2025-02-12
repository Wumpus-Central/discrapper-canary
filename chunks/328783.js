n.d(t, { Z: () => p }), n(47120), n(724458), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(313201),
    o = n(993413),
    c = n(594174),
    d = n(931240),
    u = n(353093),
    h = n(170871),
    m = n(981631),
    g = n(388032),
    x = n(197171);
let _ = (0, a.hQ)(),
    p = s.memo(function (e) {
        let { availableClans: t } = e,
            n = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            a = (0, l.e7)([c.default], () => {
                var e;
                return (0, u.Pb)(null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild).guildId;
            }),
            p = s.useMemo(
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
            E = s.useCallback(
                (e) => {
                    var t, s;
                    if (null == e) return null;
                    let l = n.get(e.value);
                    if (null == l) return null;
                    let r = null === (t = l.profile) || void 0 === t ? void 0 : t.tag;
                    return null == r
                        ? null
                        : (0, i.jsx)(h.Z, {
                              clanTag: r,
                              clanBadge: null === (s = l.profile) || void 0 === s ? void 0 : s.badge,
                              guildId: l.id,
                              guildName: e.label,
                              guildIcon: l.icon,
                              guildIconSize: 32
                          });
                },
                [n]
            ),
            C = s.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: E(t) });
                },
                [E]
            ),
            N = s.useCallback((e) => (0, d.nE)(e, !0, m.Sbl.USER_SETTINGS), []),
            f = s.useCallback((e) => e === a, [a]),
            I = s.useCallback((e) => e, []),
            T = s.useCallback(() => (0, d.nE)(null, !1), []);
        return (0, i.jsxs)(o.Z, {
            title: g.intl.string(g.t.umdfaG),
            titleId: _,
            children: [
                (0, i.jsx)(r.Text, {
                    className: x.subtitle,
                    variant: 'text-sm/normal',
                    children: g.intl.string(g.t.Mrf7fX)
                }),
                (0, i.jsx)(r.PhF, {
                    className: x.select,
                    optionClassName: x.selectPopout,
                    isSelected: f,
                    options: p,
                    select: N,
                    renderOptionValue: C,
                    renderOptionLabel: E,
                    serialize: I,
                    clear: T,
                    clearable: null != a
                })
            ]
        });
    });
