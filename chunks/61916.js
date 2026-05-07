i.d(s, { s: () => H });
var t = i(627968),
    a = i(64700),
    n = i(989349),
    l = i.n(n),
    r = i(17928),
    d = i(778712),
    o = i(56059),
    u = i(276293),
    c = i(661531),
    b = i(834730),
    m = i(966327),
    A = i(115718),
    x = i(47167),
    h = i(598104),
    p = i(255266),
    N = i(72563),
    E = i(223863),
    j = i(734057),
    D = i(71393),
    P = i(290863),
    g = i(222823),
    L = i(994500),
    _ = i(287809),
    v = i(58703),
    I = i(403362),
    z = i(427262),
    f = i(513480),
    y = i(359378),
    C = i(790782),
    T = i(745812);
function k(e) {
    let { user: s, subLabel: i, ...a } = e,
        n = z.Ay.useName(s),
        l = z.Ay.useUserTag(s, { decoration: "never" }),
        o = (0, r.bG)([L.A], () => L.A.getNickname(s.id)),
        u = (0, r.bG)([P.A], () => P.A.getStatus(s.id));
    return (0, t.jsx)(y.A, {
        listItemId: a.destination.id,
        icon: (0, t.jsx)(m.A, { "aria-hidden": !0, size: d._3.SIZE_32, user: s, status: u }),
        label: o ?? n,
        subLabel: i ?? l,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function G(e) {
    let { channel: s, subLabel: i, ...a } = e,
        n = (0, x.Ay)(s),
        l = (0, N.i)(s);
    return (0, t.jsx)(y.A, {
        listItemId: a.destination.id,
        icon: (0, t.jsx)(h.A, { "aria-hidden": !0, size: d._3.SIZE_32, channel: s }),
        label: n,
        subLabel: i ?? l,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function S(e) {
    let { channel: s, subLabel: i, ...a } = e,
        n = (0, r.bG)([D.A], () => D.A.getGuild(s?.guild_id)),
        d = (0, x.Ay)(s),
        m = (0, r.bG)([j.A, _.default, L.A], () => {
            let e = j.A.getChannel(s.parent_id);
            return null == e ? null : (0, x.m1)(e, _.default, L.A, !1);
        }),
        A = (0, r.bG)([g.Ay], () => g.Ay.lastMessageTimestamp(s.id, C.P.CHANNEL)),
        h = n?.name;
    if (s.isThread() || s.isForumPost()) {
        let e = s.isForumPost() ? o.b : u.N;
        h = (0, t.jsxs)("div", {
            className: T.vr,
            children: [
                (0, t.jsx)(e, { color: c.A.colors.TEXT_SUBTLE, className: T.Q9 }),
                (0, t.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: m }),
                null != A
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(b.E, {
                                  className: T.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, t.jsx)(b.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, v.Fe)(l()(A)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, t.jsx)(y.A, {
        listItemId: a.destination.id,
        icon: (0, t.jsx)(p.A, { size: p.q.SMALL_32, guild: n, channel: s }),
        label: d,
        subLabel: i ?? h,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className,
    });
}
function H(e) {
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
        c = a.useMemo(() => l?.map(E.I) ?? [], [l]),
        b = a.useCallback(
            (e) => {
                let { section: a, row: l } = e;
                if (a > 0) return;
                let { type: b, record: m } = s[l];
                if (b === A.rD.HEADER) return;
                let x = b === A.rD.USER ? { type: "user", id: m.id } : { type: "channel", id: m.id },
                    h = (0, E.I)(x),
                    p = (0, f.pE)(i, n, m, u),
                    N = c.includes(h),
                    j = {
                        key: h,
                        message: i,
                        destination: x,
                        subLabel: null != p ? p.label : void 0,
                        disabled: (d && !N) || null != p,
                        selected: N,
                        onPressDestination: r,
                        "aria-posinset": l + 1,
                        "aria-setsize": s.length,
                        className: o,
                    };
                return b === A.rD.USER
                    ? (0, t.jsx)(k, { user: m, ...j })
                    : b === A.rD.GROUP_DM
                      ? (0, t.jsx)(G, { channel: m, ...j })
                      : b === A.rD.TEXT_CHANNEL || b === A.rD.VOICE_CHANNEL
                        ? (0, t.jsx)(S, { channel: m, ...j })
                        : void (0, I.xb)(b);
            },
            [d, r, i, n, s, c, o, u],
        );
    return { sections: [s.length], sectionHeight: 0, rowHeight: 48, renderRow: b };
}
