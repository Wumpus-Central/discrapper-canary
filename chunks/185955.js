n.d(t, { A: () => O }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(843282),
    o = n(397927),
    l = n(915089),
    c = n(145497),
    u = n(685073),
    d = n(534400),
    f = n(128450),
    p = n(193658),
    _ = n(287809),
    h = n(581781),
    m = n(743981),
    g = n(355097),
    E = n(985018),
    b = n(86267);
let y = (0, l.Ld)(),
    O = i.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: l } = e,
            O = i.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            A = (0, a.bG)([_.default], () => {
                var e;
                return (0, u.Zo)(null == (e = _.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            v = void 0 !== n ? n : A,
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
            I = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = O.get(e.value);
                    if (null == a) return null;
                    let s = null == (n = a.profile) ? void 0 : n.tag;
                    return null == s
                        ? null
                        : (0, r.jsx)(h.A, {
                              guildTag: s,
                              guildBadge: null != (t = null == (i = a.profile) ? void 0 : i.badge) ? t : void 0,
                              guildId: a.id,
                              guildName: e.label,
                              guildIcon: a.icon,
                              guildIconSize: 32,
                          });
                },
                [O],
            ),
            T = i.useCallback(
                (e) => {
                    var t;
                    if (null == e) return null;
                    let n = O.get(e.value);
                    return null == n || null == (null == (t = n.profile) ? void 0 : t.tag)
                        ? null
                        : (0, r.jsx)(c.j, {
                              guildId: n.id,
                              guildName: n.name,
                              guildIcon: n.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [O],
            ),
            C = i.useCallback(
                (e) => {
                    var t, n, i;
                    if (null == e) return null;
                    let a = O.get(e.value);
                    if (null == a) return null;
                    let s = null == (n = a.profile) ? void 0 : n.tag;
                    return null == s
                        ? null
                        : (0, r.jsx)(d.o9, {
                              guildId: a.id,
                              guildTag: s,
                              guildBadge: null != (t = null == (i = a.profile) ? void 0 : i.badge) ? t : void 0,
                              badgeSize: m.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [O],
            ),
            N = i.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, r.jsx)(r.Fragment, { children: I(t) });
                },
                [I],
            ),
            R = i.useCallback(
                (e) => {
                    null == l || l(e);
                },
                [l],
            ),
            w = i.useCallback((e) => e === v, [v]),
            P = i.useCallback((e) => e, []),
            D = i.useCallback(() => {
                null == l || l(null);
            }, [l]),
            x = i.useRef(null);
        return (
            (0, p.A)(x, g._F.GUILD_TAG),
            (0, r.jsxs)(f.A, {
                title: E.intl.string(E.t.Pdd1nd),
                titleId: y,
                ref: x,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: b.VA,
                        variant: "text-sm/normal",
                        children: E.intl.string(E.t.mlZ6Jx),
                    }),
                    (0, r.jsx)(s.Pw, {
                        className: b.Lt,
                        optionClassName: b.S0,
                        isSelected: w,
                        options: S,
                        select: R,
                        renderLeading: T,
                        renderTrailing: C,
                        renderOptionValue: N,
                        serialize: P,
                        clear: D,
                        clearable: null != v,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
