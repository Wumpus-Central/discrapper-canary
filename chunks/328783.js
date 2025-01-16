n(47120), n(724458), n(653041);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(313201),
    o = n(993413),
    c = n(594174),
    d = n(931240),
    u = n(353093),
    m = n(170871),
    g = n(981631),
    h = n(388032),
    p = n(735696);
let x = (0, l.hQ)();
t.Z = r.memo(function (e) {
    let { availableClans: t } = e,
        n = r.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
        l = (0, s.e7)([c.default], () => {
            var e;
            return (0, u.Pb)(null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild).guildId;
        }),
        f = r.useMemo(
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
        _ = r.useCallback(
            (e) => {
                var t, r;
                if (null == e) return null;
                let s = n.get(e.value);
                if (null == s) return null;
                let a = null === (t = s.profile) || void 0 === t ? void 0 : t.tag;
                return null == a
                    ? null
                    : (0, i.jsx)(m.Z, {
                          clanTag: a,
                          clanBadge: null === (r = s.profile) || void 0 === r ? void 0 : r.badge,
                          guildId: s.id,
                          guildName: e.label,
                          guildIcon: s.icon,
                          guildIconSize: 32
                      });
            },
            [n]
        ),
        E = r.useCallback(
            (e) => {
                let t = e[0];
                return null == t ? null : (0, i.jsx)(i.Fragment, { children: _(t) });
            },
            [_]
        ),
        C = r.useCallback((e) => (0, d.nE)(e, !0, g.Sbl.USER_SETTINGS), []),
        T = r.useCallback((e) => e === l, [l]),
        S = r.useCallback((e) => e, []),
        b = r.useCallback(() => (0, d.nE)(null, !1), []);
    return (0, i.jsxs)(o.Z, {
        title: h.intl.string(h.t.umdfaG),
        titleId: x,
        children: [
            (0, i.jsx)(a.Text, {
                className: p.subtitle,
                variant: 'text-sm/normal',
                children: h.intl.string(h.t.Mrf7fX)
            }),
            (0, i.jsx)(a.Select, {
                className: p.select,
                optionClassName: p.selectPopout,
                isSelected: T,
                options: f,
                select: C,
                renderOptionValue: E,
                renderOptionLabel: _,
                serialize: S,
                clear: b,
                clearable: null != l
            })
        ]
    });
});
