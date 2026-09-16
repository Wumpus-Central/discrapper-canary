s.d(t, { N: () => H, s: () => U });
var n = s(477900),
    a = s(582128),
    i = s(536637),
    l = s.n(i),
    r = s(17928),
    u = s(778712),
    o = s(56059),
    d = s(276293),
    c = s(661531),
    m = s(834730),
    b = s(658675),
    g = s(966327),
    A = s(115718),
    f = s(47167),
    p = s(598104),
    h = s(255266),
    E = s(72563),
    C = s(446244),
    x = s(734057),
    L = s(71393),
    S = s(290863),
    _ = s(573163),
    D = s(994500),
    N = s(287809),
    I = s(58703),
    P = s(403362),
    j = s(427262),
    v = s(473511),
    y = s(359378),
    G = s(790782),
    T = s(837695);
function R(e, t) {
    if (null != e) return "string" == typeof t && "" !== t ? `${e}, ${t}` : e;
}
function z(e) {
    let { user: t, subLabel: s, ...a } = e,
        i = j.Ay.useName(t),
        l = j.Ay.useUserTag(t, { decoration: "never" }),
        o = (0, r.bG)([D.A], () => D.A.getNickname(t.id)),
        d = (0, r.bG)([S.A], () => S.A.getStatus(t.id)),
        c = o ?? i,
        m = a["aria-label"] ?? R(c, s ?? l);
    return (0, n.jsx)(y.A, {
        listItemId: a.destination.id,
        icon: (0, n.jsx)(g.A, { "aria-hidden": !0, size: u._3.SIZE_32, user: t, status: d }),
        label: c,
        subLabel: s ?? l,
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
function M(e) {
    let { channel: t, subLabel: s, ...a } = e,
        i = (0, f.Ay)(t),
        l = (0, E.i)(t),
        r = i ?? void 0,
        o = a["aria-label"] ?? R(r, s ?? l);
    return (0, n.jsx)(y.A, {
        listItemId: a.destination.id,
        icon: (0, n.jsx)(p.A, { "aria-hidden": !0, size: u._3.SIZE_32, channel: t }),
        label: i,
        subLabel: s ?? l,
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
function k(e) {
    let { channel: t, subLabel: s, ...a } = e,
        i = (0, r.bG)([L.A], () => L.A.getGuild(t?.guild_id)),
        u = (0, f.Ay)(t),
        b = (0, r.bG)([x.A, N.default, D.A], () => {
            let e = x.A.getChannel(t.parent_id);
            return null == e ? null : (0, f.m1)(e, N.default, D.A, !1);
        }),
        g = (0, r.bG)([_.Ay], () => _.Ay.lastMessageTimestamp(t.id, G.P.CHANNEL)),
        A = i?.name,
        p = i?.name;
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
                                  children: (0, I.Fe)(l()(g)),
                              }),
                          ],
                      })
                    : null,
            ],
        })),
            (p = b));
    }
    let E = u ?? void 0,
        C = a["aria-label"] ?? R(E, s ?? p);
    return (0, n.jsx)(y.A, {
        listItemId: a.destination.id,
        icon: (0, n.jsx)(h.A, { size: h.q.SMALL_32, guild: i, channel: t }),
        label: u,
        subLabel: s ?? A,
        subLabelLineClamp: a.subLabelLineClamp,
        selected: a.selected,
        disabled: a.disabled,
        trailing: a.trailing,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination, E) : void 0,
        "aria-label": C,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function H(e) {
    let { result: t, ...s } = e,
        { type: a, record: i } = t;
    if (a === A.rD.HEADER) return null;
    let l = (0, C.hY)(t);
    switch (a) {
        case A.rD.USER:
            return (0, n.jsx)(z, { user: i, destination: l, ...s });
        case A.rD.GROUP_DM:
            return (0, n.jsx)(M, { channel: i, destination: l, ...s });
        case A.rD.TEXT_CHANNEL:
        case A.rD.VOICE_CHANNEL:
            return (0, n.jsx)(k, { channel: i, destination: l, ...s });
        default:
            return (0, P.xb)(a);
    }
}
function U(e) {
    let {
            rowData: t,
            message: s,
            originChannel: i,
            selectedDestinations: l,
            handleToggleDestination: r,
            disableSelection: u,
            rowClassName: o,
            validateDestination: d,
        } = e,
        c = a.useMemo(() => l?.map(C.I) ?? [], [l]),
        m = a.useCallback(
            (e) => {
                let { section: a, row: l } = e;
                if (a > 0) return;
                let m = t[l],
                    { type: g, record: f } = m;
                if (g === A.rD.HEADER) return;
                let p = (0, C.I)((0, C.hY)(m)),
                    h = (0, v.pE)(s, i, f, d),
                    E = c.includes(p),
                    x = (u && !E) || null != h;
                return (0, n.jsx)(
                    H,
                    {
                        result: m,
                        subLabel: null != h ? h.label : void 0,
                        subLabelLineClamp: h?.lineClamp,
                        disabled: x,
                        selected: E,
                        trailing: (0, n.jsx)(b.P, { checked: E, disabled: x }),
                        onPressDestination: r,
                        "aria-posinset": l + 1,
                        "aria-setsize": t.length,
                        className: o,
                    },
                    p,
                );
            },
            [u, r, s, i, t, c, o, d],
        );
    return { sections: [t.length], sectionHeight: 0, rowHeight: 48, renderRow: m };
}
