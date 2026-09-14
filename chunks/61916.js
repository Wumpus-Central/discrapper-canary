s.d(t, { N: () => R, s: () => U });
var n = s(477900),
    a = s(582128),
    l = s(536637),
    i = s.n(l),
    r = s(17928),
    u = s(778712),
    o = s(56059),
    d = s(276293),
    c = s(661531),
    m = s(834730),
    b = s(658675),
    g = s(966327),
    A = s(115718),
    h = s(47167),
    p = s(598104),
    f = s(255266),
    E = s(72563),
    x = s(446244),
    L = s(734057),
    C = s(71393),
    S = s(290863),
    _ = s(573163),
    N = s(994500),
    I = s(287809),
    D = s(58703),
    P = s(403362),
    j = s(427262),
    y = s(513480),
    v = s(359378),
    G = s(790782),
    T = s(837695);
function z(e, t) {
    if (null != e) return "string" == typeof t && "" !== t ? `${e}, ${t}` : e;
}
function M(e) {
    let { user: t, subLabel: s, ...a } = e,
        l = j.Ay.useName(t),
        i = j.Ay.useUserTag(t, { decoration: "never" }),
        o = (0, r.bG)([N.A], () => N.A.getNickname(t.id)),
        d = (0, r.bG)([S.A], () => S.A.getStatus(t.id)),
        c = o ?? l,
        m = a["aria-label"] ?? z(c, s ?? i);
    return (0, n.jsx)(v.A, {
        listItemId: a.destination.id,
        icon: (0, n.jsx)(g.A, { "aria-hidden": !0, size: u._3.SIZE_32, user: t, status: d }),
        label: c,
        subLabel: s ?? i,
        subLabelLineClamp: a.subLabelLineClamp,
        selected: a.selected,
        disabled: a.disabled,
        trailing: a.trailing,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination, c) : void 0,
        "aria-label": m,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function k(e) {
    let { channel: t, subLabel: s, ...a } = e,
        l = (0, h.Ay)(t),
        i = (0, E.i)(t),
        r = l ?? void 0,
        o = a["aria-label"] ?? z(r, s ?? i);
    return (0, n.jsx)(v.A, {
        listItemId: a.destination.id,
        icon: (0, n.jsx)(p.A, { "aria-hidden": !0, size: u._3.SIZE_32, channel: t }),
        label: l,
        subLabel: s ?? i,
        subLabelLineClamp: a.subLabelLineClamp,
        selected: a.selected,
        disabled: a.disabled,
        trailing: a.trailing,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination, r) : void 0,
        "aria-label": o,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function H(e) {
    let { channel: t, subLabel: s, ...a } = e,
        l = (0, r.bG)([C.A], () => C.A.getGuild(t?.guild_id)),
        u = (0, h.Ay)(t),
        b = (0, r.bG)([L.A, I.default, N.A], () => {
            let e = L.A.getChannel(t.parent_id);
            return null == e ? null : (0, h.m1)(e, I.default, N.A, !1);
        }),
        g = (0, r.bG)([_.Ay], () => _.Ay.lastMessageTimestamp(t.id, G.P.CHANNEL)),
        A = l?.name,
        p = l?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? o.b : d.N;
        ((A = (0, n.jsxs)("div", {
            className: T.vr,
            children: [
                (0, n.jsx)(e, { color: c.A.colors.TEXT_SUBTLE, className: T.Q9 }),
                (0, n.jsx)(m.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: b }),
                null != g
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(m.E, {
                                  className: T.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, n.jsx)(m.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, D.Fe)(i()(g)),
                              }),
                          ],
                      })
                    : null,
            ],
        })),
            (p = b));
    }
    let E = u ?? void 0,
        x = a["aria-label"] ?? z(E, s ?? p);
    return (0, n.jsx)(v.A, {
        listItemId: a.destination.id,
        icon: (0, n.jsx)(f.A, { size: f.q.SMALL_32, guild: l, channel: t }),
        label: u,
        subLabel: s ?? A,
        subLabelLineClamp: a.subLabelLineClamp,
        selected: a.selected,
        disabled: a.disabled,
        trailing: a.trailing,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination, E) : void 0,
        "aria-label": x,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function R(e) {
    let { result: t, ...s } = e,
        { type: a, record: l } = t;
    if (a === A.rD.HEADER) return null;
    let i = (0, x.hY)(t);
    switch (a) {
        case A.rD.USER:
            return (0, n.jsx)(M, { user: l, destination: i, ...s });
        case A.rD.GROUP_DM:
            return (0, n.jsx)(k, { channel: l, destination: i, ...s });
        case A.rD.TEXT_CHANNEL:
        case A.rD.VOICE_CHANNEL:
            return (0, n.jsx)(H, { channel: l, destination: i, ...s });
        default:
            return (0, P.xb)(a);
    }
}
function U(e) {
    let {
            rowData: t,
            message: s,
            originChannel: l,
            selectedDestinations: i,
            handleToggleDestination: r,
            disableSelection: u,
            rowClassName: o,
            validateDestination: d,
        } = e,
        c = a.useMemo(() => i?.map(x.I) ?? [], [i]),
        m = a.useCallback(
            (e) => {
                let { section: a, row: i } = e;
                if (a > 0) return;
                let m = t[i],
                    { type: g, record: h } = m;
                if (g === A.rD.HEADER) return;
                let p = (0, x.I)((0, x.hY)(m)),
                    f = (0, y.pE)(s, l, h, d),
                    E = c.includes(p),
                    L = (u && !E) || null != f;
                return (0, n.jsx)(
                    R,
                    {
                        result: m,
                        subLabel: null != f ? f.label : void 0,
                        subLabelLineClamp: f?.lineClamp,
                        disabled: L,
                        selected: E,
                        trailing: (0, n.jsx)(b.P, { checked: E, disabled: L }),
                        onPressDestination: r,
                        "aria-posinset": i + 1,
                        "aria-setsize": t.length,
                        className: o,
                    },
                    p,
                );
            },
            [u, r, s, l, t, c, o, d],
        );
    return { sections: [t.length], sectionHeight: 0, rowHeight: 48, renderRow: m };
}
