t.d(s, { s: () => G });
var i = t(627968),
    l = t(64700),
    n = t(989349),
    a = t.n(n),
    r = t(17928),
    u = t(778712),
    d = t(56059),
    o = t(276293),
    c = t(661531),
    m = t(834730),
    h = t(966327),
    f = t(115718),
    b = t(47167),
    A = t(598104),
    x = t(255266),
    g = t(72563),
    p = t(223863),
    v = t(734057),
    N = t(71393),
    j = t(290863),
    L = t(222823),
    y = t(994500),
    E = t(287809),
    P = t(58703),
    D = t(403362),
    _ = t(427262),
    S = t(513480),
    C = t(359378),
    I = t(790782),
    T = t(745812);
function k(e) {
    let { user: s, subLabel: t, ...l } = e,
        n = _.Ay.useName(s),
        a = _.Ay.useUserTag(s, { decoration: "never" }),
        d = (0, r.bG)([y.A], () => y.A.getNickname(s.id)),
        o = (0, r.bG)([j.A], () => j.A.getStatus(s.id));
    return (0, i.jsx)(C.A, {
        listItemId: l.destination.id,
        icon: (0, i.jsx)(h.A, { "aria-hidden": !0, size: u._3.SIZE_32, user: s, status: o }),
        label: d ?? n,
        subLabel: t ?? a,
        selected: l.selected,
        disabled: l.disabled,
        onPress: null != l.onPressDestination ? () => l.onPressDestination?.(l.destination) : void 0,
        "aria-setsize": l["aria-setsize"],
        "aria-posinset": l["aria-posinset"],
        className: l.className,
    });
}
function z(e) {
    let { channel: s, subLabel: t, ...l } = e,
        n = (0, b.Ay)(s),
        a = (0, g.i)(s);
    return (0, i.jsx)(C.A, {
        listItemId: l.destination.id,
        icon: (0, i.jsx)(A.A, { "aria-hidden": !0, size: u._3.SIZE_32, channel: s }),
        label: n,
        subLabel: t ?? a,
        selected: l.selected,
        disabled: l.disabled,
        onPress: null != l.onPressDestination ? () => l.onPressDestination?.(l.destination) : void 0,
        "aria-setsize": l["aria-setsize"],
        "aria-posinset": l["aria-posinset"],
        className: l.className,
    });
}
function M(e) {
    let { channel: s, subLabel: t, ...l } = e,
        n = (0, r.bG)([N.A], () => N.A.getGuild(s?.guild_id)),
        u = (0, b.Ay)(s),
        h = (0, r.bG)([v.A, E.default, y.A], () => {
            let e = v.A.getChannel(s.parent_id);
            return null == e ? null : (0, b.m1)(e, E.default, y.A, !1);
        }),
        f = (0, r.bG)([L.Ay], () => L.Ay.lastMessageTimestamp(s.id, I.P.CHANNEL)),
        A = n?.name;
    if (s.isThread() || s.isForumPost()) {
        let e = s.isForumPost() ? d.b : o.N;
        A = (0, i.jsxs)("div", {
            className: T.vr,
            children: [
                (0, i.jsx)(e, { color: c.A.colors.TEXT_SUBTLE, className: T.Q9 }),
                (0, i.jsx)(m.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: h }),
                null != f
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(m.E, {
                                  className: T.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, i.jsx)(m.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, P.Fe)(a()(f)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsx)(C.A, {
        listItemId: l.destination.id,
        icon: (0, i.jsx)(x.A, { size: x.q.SMALL_32, guild: n, channel: s }),
        label: u,
        subLabel: t ?? A,
        selected: l.selected,
        disabled: l.disabled,
        onPress: null != l.onPressDestination ? () => l.onPressDestination?.(l.destination) : void 0,
        "aria-setsize": l["aria-setsize"],
        "aria-posinset": l["aria-posinset"],
        className: l.className,
    });
}
function G(e) {
    let {
            rowData: s,
            message: t,
            originChannel: n,
            selectedDestinations: a,
            handleToggleDestination: r,
            disableSelection: u,
            rowClassName: d,
            validateDestination: o,
        } = e,
        c = l.useMemo(() => a?.map(p.I) ?? [], [a]),
        m = l.useCallback(
            (e) => {
                let { section: l, row: a } = e;
                if (l > 0) return;
                let { type: m, record: h } = s[a];
                if (m === f.rD.HEADER) return;
                let b = m === f.rD.USER ? { type: "user", id: h.id } : { type: "channel", id: h.id },
                    A = (0, p.I)(b),
                    x = (0, S.pE)(t, n, h, o),
                    g = c.includes(A),
                    v = {
                        key: A,
                        message: t,
                        destination: b,
                        subLabel: null != x ? x.label : void 0,
                        disabled: (u && !g) || null != x,
                        selected: g,
                        onPressDestination: r,
                        "aria-posinset": a + 1,
                        "aria-setsize": s.length,
                        className: d,
                    };
                return m === f.rD.USER
                    ? (0, i.jsx)(k, { user: h, ...v })
                    : m === f.rD.GROUP_DM
                      ? (0, i.jsx)(z, { channel: h, ...v })
                      : m === f.rD.TEXT_CHANNEL || m === f.rD.VOICE_CHANNEL
                        ? (0, i.jsx)(M, { channel: h, ...v })
                        : void (0, D.xb)(m);
            },
            [u, r, t, n, s, c, d, o],
        );
    return { sections: [s.length], sectionHeight: 0, rowHeight: 48, renderRow: m };
}
