i.d(s, { s: () => M });
var a = i(477900),
    t = i(582128),
    n = i(989349),
    l = i.n(n),
    r = i(17928),
    d = i(778712),
    o = i(56059),
    u = i(276293),
    c = i(661531),
    b = i(834730),
    m = i(658675),
    A = i(966327),
    x = i(115718),
    h = i(47167),
    g = i(598104),
    p = i(255266),
    N = i(72563),
    E = i(223863),
    j = i(734057),
    D = i(71393),
    f = i(290863),
    P = i(568548),
    v = i(994500),
    L = i(287809),
    _ = i(58703),
    I = i(403362),
    z = i(427262),
    C = i(513480),
    T = i(359378),
    k = i(790782),
    y = i(761948);
function G(e, s) {
    if (null != e) return "string" == typeof s && "" !== s ? `${e}, ${s}` : e;
}
function H(e) {
    let { user: s, subLabel: i, ...t } = e,
        n = z.Ay.useName(s),
        l = z.Ay.useUserTag(s, { decoration: "never" }),
        o = (0, r.bG)([v.A], () => v.A.getNickname(s.id)),
        u = (0, r.bG)([f.A], () => f.A.getStatus(s.id)),
        c = o ?? n,
        b = t["aria-label"] ?? G(c, i ?? l);
    return (0, a.jsx)(T.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(A.A, { "aria-hidden": !0, size: d._3.SIZE_32, user: s, status: u }),
        label: c,
        subLabel: i ?? l,
        selected: t.selected,
        disabled: t.disabled,
        trailing: t.trailing,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, c) : void 0,
        "aria-label": b,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function S(e) {
    let { channel: s, subLabel: i, ...t } = e,
        n = (0, h.Ay)(s),
        l = (0, N.i)(s),
        r = n ?? void 0,
        o = t["aria-label"] ?? G(r, i ?? l);
    return (0, a.jsx)(T.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(g.A, { "aria-hidden": !0, size: d._3.SIZE_32, channel: s }),
        label: n,
        subLabel: i ?? l,
        selected: t.selected,
        disabled: t.disabled,
        trailing: t.trailing,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, r) : void 0,
        "aria-label": o,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function w(e) {
    let { channel: s, subLabel: i, ...t } = e,
        n = (0, r.bG)([D.A], () => D.A.getGuild(s?.guild_id)),
        d = (0, h.Ay)(s),
        m = (0, r.bG)([j.A, L.default, v.A], () => {
            let e = j.A.getChannel(s.parent_id);
            return null == e ? null : (0, h.m1)(e, L.default, v.A, !1);
        }),
        A = (0, r.bG)([P.Ay], () => P.Ay.lastMessageTimestamp(s.id, k.P.CHANNEL)),
        x = n?.name,
        g = n?.name;
    if (s.isThread() || s.isForumPost()) {
        let e = s.isForumPost() ? o.b : u.N;
        (x = (0, a.jsxs)("div", {
            className: y.vr,
            children: [
                (0, a.jsx)(e, { color: c.A.colors.TEXT_SUBTLE, className: y.Q9 }),
                (0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: m }),
                null != A
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(b.E, {
                                  className: y.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, a.jsx)(b.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, _.Fe)(l()(A)),
                              }),
                          ],
                      })
                    : null,
            ],
        })),
            (g = m);
    }
    let N = d ?? void 0,
        E = t["aria-label"] ?? G(N, i ?? g);
    return (0, a.jsx)(T.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(p.A, { size: p.q.SMALL_32, guild: n, channel: s }),
        label: d,
        subLabel: i ?? x,
        selected: t.selected,
        disabled: t.disabled,
        trailing: t.trailing,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, N) : void 0,
        "aria-label": E,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function F(e) {
    let { result: s, ...i } = e,
        { type: t, record: n } = s;
    if (t === x.rD.HEADER) return null;
    let l = (0, E.hY)(s);
    switch (t) {
        case x.rD.USER:
            return (0, a.jsx)(H, { user: n, destination: l, ...i });
        case x.rD.GROUP_DM:
            return (0, a.jsx)(S, { channel: n, destination: l, ...i });
        case x.rD.TEXT_CHANNEL:
        case x.rD.VOICE_CHANNEL:
            return (0, a.jsx)(w, { channel: n, destination: l, ...i });
        default:
            return (0, I.xb)(t);
    }
}
function M(e) {
    let {
            rowData: s,
            message: i,
            originChannel: n,
            selectedDestinations: l,
            handleToggleDestination: r,
            disableSelection: d,
            rowClassName: o,
            validateDestination: u,
        } = e,
        c = t.useMemo(() => l?.map(E.I) ?? [], [l]),
        b = t.useCallback(
            (e) => {
                let { section: t, row: l } = e;
                if (t > 0) return;
                let b = s[l],
                    { type: A, record: h } = b;
                if (A === x.rD.HEADER) return;
                let g = (0, E.I)((0, E.hY)(b)),
                    p = (0, C.pE)(i, n, h, u),
                    N = c.includes(g),
                    j = (d && !N) || null != p;
                return (0, a.jsx)(
                    F,
                    {
                        result: b,
                        subLabel: null != p ? p.label : void 0,
                        disabled: j,
                        selected: N,
                        trailing: (0, a.jsx)(m.P, { checked: N, disabled: j }),
                        onPressDestination: r,
                        "aria-posinset": l + 1,
                        "aria-setsize": s.length,
                        className: o,
                    },
                    g,
                );
            },
            [d, r, i, n, s, c, o, u],
        );
    return { sections: [s.length], sectionHeight: 0, rowHeight: 48, renderRow: b };
}
