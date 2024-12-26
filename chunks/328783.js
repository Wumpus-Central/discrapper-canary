n(47120), n(724458), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(313201),
    o = n(993413),
    c = n(594174),
    d = n(931240),
    u = n(353093),
    m = n(170871),
    h = n(981631),
    g = n(388032),
    p = n(735696);
let x = (0, a.hQ)();
t.Z = s.memo(function (e) {
    let { availableClans: t } = e,
        n = s.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
        a = (0, r.e7)([c.default], () => {
            var e;
            return (0, u.Pb)(null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild).guildId;
        }),
        S = s.useMemo(
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
        T = s.useCallback(
            (e) => {
                var t, s;
                if (null == e) return null;
                let r = n.get(e.value);
                if (null == r) return null;
                let l = null === (t = r.profile) || void 0 === t ? void 0 : t.tag;
                return null == l
                    ? null
                    : (0, i.jsx)(m.Z, {
                          clanTag: l,
                          clanBadge: null === (s = r.profile) || void 0 === s ? void 0 : s.badge,
                          guildId: r.id,
                          guildName: e.label,
                          guildIcon: r.icon,
                          guildIconSize: 32
                      });
            },
            [n]
        ),
        E = s.useCallback(
            (e) => {
                let t = e[0];
                return null == t ? null : (0, i.jsx)(i.Fragment, { children: T(t) });
            },
            [T]
        ),
        C = s.useCallback((e) => (0, d.nE)(e, !0, h.Sbl.USER_SETTINGS), []),
        _ = s.useCallback((e) => e === a, [a]),
        f = s.useCallback((e) => e, []),
        I = s.useCallback(() => (0, d.nE)(null, !1), []);
    return (0, i.jsxs)(o.Z, {
        title: g.intl.string(g.t.umdfaG),
        titleId: x,
        children: [
            (0, i.jsx)(l.Text, {
                className: p.subtitle,
                variant: 'text-sm/normal',
                children: g.intl.string(g.t.Mrf7fX)
            }),
            (0, i.jsx)(l.Select, {
                className: p.select,
                optionClassName: p.selectPopout,
                isSelected: _,
                options: S,
                select: C,
                renderOptionValue: E,
                renderOptionLabel: T,
                serialize: f,
                clear: I,
                clearable: null != a
            })
        ]
    });
});
