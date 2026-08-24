i.d(s, { N: () => F, s: () => M });
var a = i(477900),
    t = i(582128),
    l = i(536637),
    n = i.n(l),
    r = i(17928),
    d = i(778712),
    u = i(56059),
    o = i(276293),
    b = i(661531),
    c = i(834730),
    m = i(658675),
    A = i(966327),
    p = i(115718),
    x = i(47167),
    L = i(598104),
    h = i(255266),
    g = i(72563),
    N = i(223863),
    E = i(734057),
    j = i(71393),
    C = i(290863),
    D = i(573163),
    f = i(994500),
    P = i(287809),
    v = i(58703),
    _ = i(403362),
    I = i(427262),
    z = i(513480),
    T = i(359378),
    k = i(790782),
    y = i(837695);
function G(e, s) {
    if (null != e) return "string" == typeof s && "" !== s ? `${e}, ${s}` : e;
}
function H(e) {
    let { user: s, subLabel: i, ...t } = e,
        l = I.Ay.useName(s),
        n = I.Ay.useUserTag(s, { decoration: "never" }),
        u = (0, r.bG)([f.A], () => f.A.getNickname(s.id)),
        o = (0, r.bG)([C.A], () => C.A.getStatus(s.id)),
        b = u ?? l,
        c = t["aria-label"] ?? G(b, i ?? n);
    return (0, a.jsx)(T.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(A.A, { "aria-hidden": !0, size: d._3.SIZE_32, user: s, status: o }),
        label: b,
        subLabel: i ?? n,
        subLabelLineClamp: t.subLabelLineClamp,
        selected: t.selected,
        disabled: t.disabled,
        trailing: t.trailing,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, b) : void 0,
        "aria-label": c,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function S(e) {
    let { channel: s, subLabel: i, ...t } = e,
        l = (0, x.Ay)(s),
        n = (0, g.i)(s),
        r = l ?? void 0,
        u = t["aria-label"] ?? G(r, i ?? n);
    return (0, a.jsx)(T.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(L.A, { "aria-hidden": !0, size: d._3.SIZE_32, channel: s }),
        label: l,
        subLabel: i ?? n,
        subLabelLineClamp: t.subLabelLineClamp,
        selected: t.selected,
        disabled: t.disabled,
        trailing: t.trailing,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, r) : void 0,
        "aria-label": u,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function w(e) {
    let { channel: s, subLabel: i, ...t } = e,
        l = (0, r.bG)([j.A], () => j.A.getGuild(s?.guild_id)),
        d = (0, x.Ay)(s),
        m = (0, r.bG)([E.A, P.default, f.A], () => {
            let e = E.A.getChannel(s.parent_id);
            return null == e ? null : (0, x.m1)(e, P.default, f.A, !1);
        }),
        A = (0, r.bG)([D.Ay], () => D.Ay.lastMessageTimestamp(s.id, k.P.CHANNEL)),
        p = l?.name,
        L = l?.name;
    if (s.isThread() || s.isForumPost()) {
        let e = s.isForumPost() ? u.b : o.N;
        (p = (0, a.jsxs)("div", {
            className: y.vr,
            children: [
                (0, a.jsx)(e, { color: b.A.colors.TEXT_SUBTLE, className: y.Q9 }),
                (0, a.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: m }),
                null != A
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(c.E, {
                                  className: y.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, a.jsx)(c.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, v.Fe)(n()(A)),
                              }),
                          ],
                      })
                    : null,
            ],
        })),
            (L = m);
    }
    let g = d ?? void 0,
        N = t["aria-label"] ?? G(g, i ?? L);
    return (0, a.jsx)(T.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(h.A, { size: h.q.SMALL_32, guild: l, channel: s }),
        label: d,
        subLabel: i ?? p,
        subLabelLineClamp: t.subLabelLineClamp,
        selected: t.selected,
        disabled: t.disabled,
        trailing: t.trailing,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, g) : void 0,
        "aria-label": N,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function F(e) {
    let { result: s, ...i } = e,
        { type: t, record: l } = s;
    if (t === p.rD.HEADER) return null;
    let n = (0, N.hY)(s);
    switch (t) {
        case p.rD.USER:
            return (0, a.jsx)(H, { user: l, destination: n, ...i });
        case p.rD.GROUP_DM:
            return (0, a.jsx)(S, { channel: l, destination: n, ...i });
        case p.rD.TEXT_CHANNEL:
        case p.rD.VOICE_CHANNEL:
            return (0, a.jsx)(w, { channel: l, destination: n, ...i });
        default:
            return (0, _.xb)(t);
    }
}
function M(e) {
    let {
            rowData: s,
            message: i,
            originChannel: l,
            selectedDestinations: n,
            handleToggleDestination: r,
            disableSelection: d,
            rowClassName: u,
            validateDestination: o,
        } = e,
        b = t.useMemo(() => n?.map(N.I) ?? [], [n]),
        c = t.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return;
                let c = s[n],
                    { type: A, record: x } = c;
                if (A === p.rD.HEADER) return;
                let L = (0, N.I)((0, N.hY)(c)),
                    h = (0, z.pE)(i, l, x, o),
                    g = b.includes(L),
                    E = (d && !g) || null != h;
                return (0, a.jsx)(
                    F,
                    {
                        result: c,
                        subLabel: null != h ? h.label : void 0,
                        subLabelLineClamp: h?.lineClamp,
                        disabled: E,
                        selected: g,
                        trailing: (0, a.jsx)(m.P, { checked: g, disabled: E }),
                        onPressDestination: r,
                        "aria-posinset": n + 1,
                        "aria-setsize": s.length,
                        className: u,
                    },
                    L,
                );
            },
            [d, r, i, l, s, b, u, o],
        );
    return { sections: [s.length], sectionHeight: 0, rowHeight: 48, renderRow: c };
}
