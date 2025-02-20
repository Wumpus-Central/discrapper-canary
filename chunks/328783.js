n.d(t, { Z: () => b }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(313201),
    o = n(993413),
    c = n(594174),
    d = n(931240),
    u = n(353093),
    m = n(170871),
    g = n(981631),
    p = n(388032),
    h = n(457713);
let f = (0, l.hQ)(),
    b = i.memo(function (e) {
        let { availableClans: t } = e,
            n = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, s.e7)([c.default], () => {
                var e;
                return (0, u.Pb)(null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild).guildId;
            }),
            b = i.useMemo(
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
            N = i.useCallback(
                (e) => {
                    var t, i;
                    if (null == e) return null;
                    let s = n.get(e.value);
                    if (null == s) return null;
                    let a = null === (t = s.profile) || void 0 === t ? void 0 : t.tag;
                    return null == a
                        ? null
                        : (0, r.jsx)(m.Z, {
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
            x = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: N(t) });
                },
                [N]
            ),
            _ = i.useCallback((e) => (0, d.nE)(e, !0, g.Sbl.USER_SETTINGS), []),
            E = i.useCallback((e) => e === l, [l]),
            j = i.useCallback((e) => e, []),
            C = i.useCallback(() => (0, d.nE)(null, !1), []);
        return (0, r.jsxs)(o.Z, {
            title: p.NW.string(p.t.umdfaG),
            titleId: f,
            children: [
                (0, r.jsx)(a.Text, {
                    className: h.subtitle,
                    variant: 'text-sm/normal',
                    children: p.NW.string(p.t.Mrf7fX)
                }),
                (0, r.jsx)(a.PhF, {
                    className: h.select,
                    optionClassName: h.selectPopout,
                    isSelected: E,
                    options: b,
                    select: _,
                    renderOptionValue: x,
                    renderOptionLabel: N,
                    serialize: j,
                    clear: C,
                    clearable: null != l
                })
            ]
        });
    });
