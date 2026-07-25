i.d(s, { s: () => Z });
var a = i(627968),
    t = i(64700),
    l = i(989349),
    n = i.n(l),
    r = i(17928),
    d = i(778712),
    o = i(56059),
    c = i(276293),
    u = i(661531),
    b = i(834730),
    m = i(966327),
    x = i(115718),
    h = i(47167),
    v = i(598104),
    A = i(255266),
    N = i(72563),
    j = i(223863),
    p = i(734057),
    E = i(71393),
    D = i(290863),
    P = i(568548),
    g = i(994500),
    f = i(287809),
    _ = i(58703),
    L = i(403362),
    z = i(427262),
    I = i(513480),
    C = i(503698),
    k = i.n(C),
    y = i(837381),
    T = i(187322),
    S = i(939249),
    G = i(658675),
    H = i(375708),
    $ = i(542787);
function U(e) {
    let {
            listItemId: s,
            icon: i,
            label: t,
            subLabel: l,
            selected: n,
            disabled: r,
            onPress: d,
            "aria-label": o,
            "aria-setsize": c,
            "aria-posinset": u,
            className: m,
        } = e,
        x = (0, y.rm)(s),
        h = !0 === n && null != o ? H.intl.formatToPlainString(H.t.QymItZ, { text: o }) : o;
    return (0, a.jsx)(T.vN, {
        offset: { right: 4, bottom: 4 },
        children: (0, a.jsxs)(S.D, {
            className: k()($.HP, m, { [$.r9]: r }),
            onClick: r ? void 0 : d,
            "aria-label": h,
            "aria-selected": n,
            "aria-disabled": r,
            "aria-setsize": c,
            "aria-posinset": u,
            ...x,
            children: [
                (0, a.jsxs)("div", {
                    className: $.D_,
                    children: [
                        (0, a.jsx)("div", { className: $.P0, children: i }),
                        (0, a.jsxs)("div", {
                            className: $.WD,
                            children: [
                                (0, a.jsx)(b.E, {
                                    tag: "strong",
                                    color: r ? "text-muted" : void 0,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: t,
                                }),
                                null != l
                                    ? (0, a.jsx)(b.E, { variant: "text-xs/normal", color: "text-muted", children: l })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: $.kv, children: (0, a.jsx)(G.P, { checked: !!n, disabled: r }) }),
            ],
        }),
    });
}
var w = i(790782),
    F = i(761948);
function M(e) {
    let { user: s, subLabel: i, ...t } = e,
        l = z.Ay.useName(s),
        n = z.Ay.useUserTag(s, { decoration: "never" }),
        o = (0, r.bG)([g.A], () => g.A.getNickname(s.id)),
        c = (0, r.bG)([D.A], () => D.A.getStatus(s.id)),
        u = o ?? l,
        b = i ?? n,
        x = null != b ? `${u}, ${b}` : u;
    return (0, a.jsx)(U, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(m.A, { "aria-hidden": !0, size: d._3.SIZE_32, user: s, status: c }),
        label: u,
        subLabel: i ?? n,
        selected: t.selected,
        disabled: t.disabled,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, u) : void 0,
        "aria-label": x,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function R(e) {
    let { channel: s, subLabel: i, ...t } = e,
        l = (0, h.Ay)(s),
        n = (0, N.i)(s),
        r = l ?? void 0,
        o = i ?? n,
        c = null != r && null != o ? `${r}, ${o}` : (r ?? void 0);
    return (0, a.jsx)(U, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(v.A, { "aria-hidden": !0, size: d._3.SIZE_32, channel: s }),
        label: l,
        subLabel: i ?? n,
        selected: t.selected,
        disabled: t.disabled,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, r) : void 0,
        "aria-label": c,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function Q(e) {
    let { channel: s, subLabel: i, ...t } = e,
        l = (0, r.bG)([E.A], () => E.A.getGuild(s?.guild_id)),
        d = (0, h.Ay)(s),
        m = (0, r.bG)([p.A, f.default, g.A], () => {
            let e = p.A.getChannel(s.parent_id);
            return null == e ? null : (0, h.m1)(e, f.default, g.A, !1);
        }),
        x = (0, r.bG)([P.Ay], () => P.Ay.lastMessageTimestamp(s.id, w.P.CHANNEL)),
        v = l?.name,
        N = l?.name;
    if (s.isThread() || s.isForumPost()) {
        let e = s.isForumPost() ? o.b : c.N;
        (v = (0, a.jsxs)("div", {
            className: F.vr,
            children: [
                (0, a.jsx)(e, { color: u.A.colors.TEXT_SUBTLE, className: F.Q9 }),
                (0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: m }),
                null != x
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(b.E, {
                                  className: F.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, a.jsx)(b.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, _.Fe)(n()(x)),
                              }),
                          ],
                      })
                    : null,
            ],
        })),
            (N = m);
    }
    let j = d ?? void 0,
        D = i ?? N,
        L = null != j && null != D ? `${j}, ${D}` : (j ?? void 0);
    return (0, a.jsx)(U, {
        listItemId: t.destination.id,
        icon: (0, a.jsx)(A.A, { size: A.q.SMALL_32, guild: l, channel: s }),
        label: d,
        subLabel: i ?? v,
        selected: t.selected,
        disabled: t.disabled,
        onPress: null != t.onPressDestination ? () => t.onPressDestination?.(t.destination, j) : void 0,
        "aria-label": L,
        "aria-setsize": t["aria-setsize"],
        "aria-posinset": t["aria-posinset"],
        className: t.className,
    });
}
function Z(e) {
    let {
            rowData: s,
            message: i,
            originChannel: l,
            selectedDestinations: n,
            handleToggleDestination: r,
            disableSelection: d,
            rowClassName: o,
            validateDestination: c,
        } = e,
        u = t.useMemo(() => n?.map(j.I) ?? [], [n]),
        b = t.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return;
                let { type: b, record: m } = s[n];
                if (b === x.rD.HEADER) return;
                let h = b === x.rD.USER ? { type: "user", id: m.id } : { type: "channel", id: m.id },
                    v = (0, j.I)(h),
                    A = (0, I.pE)(i, l, m, c),
                    N = u.includes(v),
                    p = {
                        key: v,
                        message: i,
                        destination: h,
                        subLabel: null != A ? A.label : void 0,
                        disabled: (d && !N) || null != A,
                        selected: N,
                        onPressDestination: r,
                        "aria-posinset": n + 1,
                        "aria-setsize": s.length,
                        className: o,
                    };
                switch (b) {
                    case x.rD.USER:
                        return (0, a.jsx)(M, { user: m, ...p });
                    case x.rD.GROUP_DM:
                        return (0, a.jsx)(R, { channel: m, ...p });
                    case x.rD.TEXT_CHANNEL:
                    case x.rD.VOICE_CHANNEL:
                        return (0, a.jsx)(Q, { channel: m, ...p });
                    default:
                        return (0, L.xb)(b);
                }
            },
            [d, r, i, l, s, u, o, c],
        );
    return { sections: [s.length], sectionHeight: 0, rowHeight: 48, renderRow: b };
}
