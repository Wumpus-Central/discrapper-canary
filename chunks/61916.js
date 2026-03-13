s.d(t, { s: () => F });
var i = s(627968),
    a = s(64700),
    l = s(989349),
    n = s.n(l),
    r = s(311907),
    A = s(397927),
    u = s(966327),
    d = s(629357),
    _ = s(47167),
    c = s(598104),
    o = s(255266),
    h = s(72563),
    I = s(223863),
    L = s(734057),
    E = s(71393),
    N = s(290863),
    C = s(222823),
    P = s(994500),
    m = s(287809),
    b = s(405269),
    f = s(403362),
    g = s(427262),
    x = s(513480),
    D = s(359378),
    G = s(790782),
    p = s(893323);
function T(e) {
    let { user: t, subLabel: s, ...a } = e,
        l = g.Ay.useName(t),
        n = g.Ay.useUserTag(t, { decoration: "never" }),
        d = (0, r.bG)([P.A], () => P.A.getNickname(t.id)),
        _ = (0, r.bG)([N.A], () => N.A.getStatus(t.id));
    return (0, i.jsx)(D.A, {
        listItemId: a.destination.id,
        icon: (0, i.jsx)(u.A, { "aria-hidden": !0, size: A._3J.SIZE_32, user: t, status: _ }),
        label: d ?? l,
        subLabel: s ?? n,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function S(e) {
    let { channel: t, subLabel: s, ...a } = e,
        l = (0, _.Ay)(t),
        n = (0, h.i)(t);
    return (0, i.jsx)(D.A, {
        listItemId: a.destination.id,
        icon: (0, i.jsx)(c.A, { "aria-hidden": !0, size: A._3J.SIZE_32, channel: t }),
        label: l,
        subLabel: s ?? n,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function y(e) {
    let { channel: t, subLabel: s, ...a } = e,
        l = (0, r.bG)([E.A], () => E.A.getGuild(t?.guild_id)),
        u = (0, _.Ay)(t),
        d = (0, r.bG)([L.A, m.default, P.A], () => {
            let e = L.A.getChannel(t.parent_id);
            return null == e ? null : (0, _.m1)(e, m.default, P.A, !1);
        }),
        c = (0, r.bG)([C.Ay], () => C.Ay.lastMessageTimestamp(t.id, G.P.CHANNEL)),
        h = l?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? A.bSJ : A.N$i;
        h = (0, i.jsxs)("div", {
            className: p.vr,
            children: [
                (0, i.jsx)(e, { color: A.LU0.colors.TEXT_SUBTLE, className: p.Q9 }),
                (0, i.jsx)(A.Text, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: d }),
                null != c
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(A.Text, {
                                  className: p.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, i.jsx)(A.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, b.Fe)(n()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsx)(D.A, {
        listItemId: a.destination.id,
        icon: (0, i.jsx)(o.A, { size: o.q.SMALL_32, guild: l, channel: t }),
        label: u,
        subLabel: s ?? h,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function F(e) {
    let {
            rowData: t,
            message: s,
            originChannel: l,
            selectedDestinations: n,
            handleToggleDestination: r,
            disableSelection: A,
            rowClassName: u,
            validateDestination: _,
        } = e,
        c = a.useMemo(() => n?.map(I.I) ?? [], [n]),
        o = a.useCallback(
            (e) => {
                let { section: a, row: n } = e;
                if (a > 0) return;
                let { type: o, record: h } = t[n];
                if (o === d.rD.HEADER) return;
                let L = o === d.rD.USER ? { type: "user", id: h.id } : { type: "channel", id: h.id },
                    E = (0, I.I)(L),
                    N = (0, x.pE)(s, l, h, _),
                    C = c.includes(E),
                    P = {
                        key: E,
                        message: s,
                        destination: L,
                        subLabel: null != N ? N.label : void 0,
                        disabled: (A && !C) || null != N,
                        selected: C,
                        onPressDestination: r,
                        "aria-posinset": n + 1,
                        "aria-setsize": t.length,
                        className: u,
                    };
                return o === d.rD.USER
                    ? (0, i.jsx)(T, { user: h, ...P })
                    : o === d.rD.GROUP_DM
                      ? (0, i.jsx)(S, { channel: h, ...P })
                      : o === d.rD.TEXT_CHANNEL || o === d.rD.VOICE_CHANNEL
                        ? (0, i.jsx)(y, { channel: h, ...P })
                        : void (0, f.xb)(o);
            },
            [A, r, s, l, t, c, u, _],
        );
    return { sections: [t.length], sectionHeight: 0, rowHeight: 48, renderRow: o };
}
