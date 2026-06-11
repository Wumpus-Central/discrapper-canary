i.d(s, { s: () => H });
var a = i(627968),
    t = i(64700),
    l = i(989349),
    n = i.n(l),
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
    v = i(71393),
    D = i(290863),
    P = i(222823),
    g = i(994500),
    L = i(287809),
    _ = i(58703),
    I = i(403362),
    f = i(427262),
    z = i(513480),
    y = i(359378),
    C = i(790782),
    T = i(745812);
function k(e) {
    let { user: s, subLabel: i, ...t } = e,
        l = f.Ay.useName(s),
        n = f.Ay.useUserTag(s, { decoration: "never" }),
        o = (0, r.bG)([g.A], () => g.A.getNickname(s.id)),
        u = (0, r.bG)([D.A], () => D.A.getStatus(s.id)),
        c = o ?? l,
        b = i ?? n,
        A = null != b ? `${c}, ${b}` : c;
    return (0, a.jsx)(y.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(m.A, { "aria-hidden": !0, size: d._3.SIZE_32, user: s, status: u }),
        label: c,
        subLabel: i ?? n,
        selected: t.selected,
        disabled: t.disabled,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, c) : void 0,
        "aria-label": A,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function G(e) {
    let { channel: s, subLabel: i, ...t } = e,
        l = (0, x.Ay)(s),
        n = (0, N.i)(s),
        r = l ?? void 0,
        o = i ?? n,
        u = null != r && null != o ? `${r}, ${o}` : (r ?? void 0);
    return (0, a.jsx)(y.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(h.A, { "aria-hidden": !0, size: d._3.SIZE_32, channel: s }),
        label: l,
        subLabel: i ?? n,
        selected: t.selected,
        disabled: t.disabled,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, r) : void 0,
        "aria-label": u,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function S(e) {
    let { channel: s, subLabel: i, ...t } = e,
        l = (0, r.bG)([v.A], () => v.A.getGuild(s?.guild_id)),
        d = (0, x.Ay)(s),
        m = (0, r.bG)([j.A, L.default, g.A], () => {
            let e = j.A.getChannel(s.parent_id);
            return null == e ? null : (0, x.m1)(e, L.default, g.A, !1);
        }),
        A = (0, r.bG)([P.Ay], () => P.Ay.lastMessageTimestamp(s.id, C.P.CHANNEL)),
        h = l?.name,
        N = l?.name;
    if (s.isThread() || s.isForumPost()) {
        let e = s.isForumPost() ? o.b : u.N;
        (h = (0, a.jsxs)("div", {
            className: T.vr,
            children: [
                (0, a.jsx)(e, { color: c.A.colors.TEXT_SUBTLE, className: T.Q9 }),
                (0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: m }),
                null != A
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(b.E, {
                                  className: T.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, a.jsx)(b.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, _.Fe)(n()(A)),
                              }),
                          ],
                      })
                    : null,
            ],
        })),
            (N = m);
    }
    let E = d ?? void 0,
        D = i ?? N,
        I = null != E && null != D ? `${E}, ${D}` : (E ?? void 0);
    return (0, a.jsx)(y.A, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(p.A, { size: p.q.SMALL_32, guild: l, channel: s }),
        label: d,
        subLabel: i ?? h,
        selected: t.selected,
        disabled: t.disabled,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, E) : void 0,
        "aria-label": I,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function H(e) {
    let {
            rowData: s,
            message: i,
            originChannel: l,
            selectedDestinations: n,
            handleToggleDestination: r,
            disableSelection: d,
            rowClassName: o,
            validateDestination: u,
        } = e,
        c = t.useMemo(() => n?.map(E.I) ?? [], [n]),
        b = t.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return;
                let { type: b, record: m } = s[n];
                if (b === A.rD.HEADER) return;
                let x = b === A.rD.USER ? { type: "user", id: m.id } : { type: "channel", id: m.id },
                    h = (0, E.I)(x),
                    p = (0, z.pE)(i, l, m, u),
                    N = c.includes(h),
                    j = {
                        key: h,
                        message: i,
                        destination: x,
                        subLabel: null != p ? p.label : void 0,
                        disabled: (d && !N) || null != p,
                        selected: N,
                        onPressDestination: r,
                        "aria-posinset": n + 1,
                        "aria-setsize": s.length,
                        className: o,
                    };
                switch (b) {
                    case A.rD.USER:
                        return (0, a.jsx)(k, { user: m, ...j });
                    case A.rD.GROUP_DM:
                        return (0, a.jsx)(G, { channel: m, ...j });
                    case A.rD.TEXT_CHANNEL:
                    case A.rD.VOICE_CHANNEL:
                        return (0, a.jsx)(S, { channel: m, ...j });
                    default:
                        return (0, I.xb)(b);
                }
            },
            [d, r, i, l, s, c, o, u],
        );
    return { sections: [s.length], sectionHeight: 0, rowHeight: 48, renderRow: b };
}
