s.d(t, { s: () => j });
var l = s(627968),
    i = s(64700),
    a = s(503698),
    n = s.n(a),
    r = s(989349),
    A = s.n(r),
    u = s(837381),
    _ = s(311907),
    c = s(397927),
    h = s(966327),
    d = s(629357),
    I = s(47167),
    o = s(598104),
    L = s(255266),
    E = s(72563),
    N = s(223863),
    C = s(734057),
    f = s(71393),
    g = s(290863),
    b = s(222823),
    P = s(994500),
    m = s(287809),
    x = s(405269),
    G = s(403362),
    D = s(427262),
    T = s(513480),
    S = s(790782),
    p = s(967789);
function y(e) {
    let {
            destination: t,
            icon: s,
            label: a,
            subLabel: r,
            selected: A,
            disabled: _,
            onPressDestination: h,
            "aria-setsize": d,
            "aria-posinset": I,
            className: o,
        } = e,
        L = (0, u.rm)(t.id),
        E = i.useCallback(() => {
            h?.(t);
        }, [h, t]);
    return (0, l.jsxs)(c.DUT, {
        className: n()(p.HP, o, { [p.r9]: _ }),
        onClick: _ ? void 0 : E,
        "aria-selected": A,
        "aria-setsize": d,
        "aria-posinset": I,
        ...L,
        children: [
            (0, l.jsxs)("div", {
                className: p.D_,
                children: [
                    (0, l.jsx)("div", { className: p.P0, children: s }),
                    (0, l.jsxs)("div", {
                        className: p.WD,
                        children: [
                            (0, l.jsx)(c.Text, {
                                tag: "strong",
                                color: _ ? "text-muted" : void 0,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: a,
                            }),
                            (0, l.jsx)(c.Text, { variant: "text-xs/normal", color: "text-muted", children: r }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: p.kv, children: (0, l.jsx)(c.P7L, { checked: !!A, disabled: _ }) }),
        ],
    });
}
function F(e) {
    let { user: t, subLabel: s, ...i } = e,
        a = D.Ay.useName(t),
        n = D.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, _.bG)([P.A], () => P.A.getNickname(t.id)),
        A = (0, _.bG)([g.A], () => g.A.getStatus(t.id));
    return (0, l.jsx)(y, {
        ...i,
        icon: (0, l.jsx)(h.A, { "aria-hidden": !0, size: c._3J.SIZE_32, user: t, status: A }),
        label: r ?? a,
        subLabel: s ?? n,
    });
}
function O(e) {
    let { channel: t, subLabel: s, ...i } = e,
        a = (0, I.Ay)(t),
        n = (0, E.i)(t);
    return (0, l.jsx)(y, {
        ...i,
        icon: (0, l.jsx)(o.A, { "aria-hidden": !0, size: c._3J.SIZE_32, channel: t }),
        label: a,
        subLabel: s ?? n,
    });
}
function W(e) {
    let { channel: t, subLabel: s, ...i } = e,
        a = (0, _.bG)([f.A], () => f.A.getGuild(t?.guild_id)),
        n = (0, I.Ay)(t),
        r = (0, _.bG)([C.A, m.default, P.A], () => {
            let e = C.A.getChannel(t.parent_id);
            return null == e ? null : (0, I.m1)(e, m.default, P.A, !1);
        }),
        u = (0, _.bG)([b.Ay], () => b.Ay.lastMessageTimestamp(t.id, S.P.CHANNEL)),
        h = a?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? c.bSJ : c.N$i;
        h = (0, l.jsxs)("div", {
            className: p.vr,
            children: [
                (0, l.jsx)(e, { color: c.LU0.colors.TEXT_SUBTLE, className: p.Q9 }),
                (0, l.jsx)(c.Text, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != u
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(c.Text, {
                                  className: p.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, l.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, x.Fe)(A()(u)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(y, {
        ...i,
        icon: (0, l.jsx)(L.A, { size: L.q.SMALL_32, guild: a, channel: t }),
        label: n,
        subLabel: s ?? h,
    });
}
function j(e) {
    let {
            rowData: t,
            message: s,
            originChannel: a,
            selectedDestinations: n,
            handleToggleDestination: r,
            disableSelection: A,
            rowClassName: u,
            validateDestination: _,
        } = e,
        c = i.useMemo(() => n?.map(N.I) ?? [], [n]),
        h = i.useCallback(
            (e) => {
                let { section: i, row: n } = e;
                if (i > 0) return;
                let { type: h, record: I } = t[n];
                if (h === d.rD.HEADER) return;
                let o = h === d.rD.USER ? { type: "user", id: I.id } : { type: "channel", id: I.id },
                    L = (0, N.I)(o),
                    E = (0, T.pE)(s, a, I, _),
                    C = c.includes(L),
                    f = {
                        key: L,
                        message: s,
                        destination: o,
                        subLabel: null != E ? E.label : void 0,
                        disabled: (A && !C) || null != E,
                        selected: C,
                        onPressDestination: r,
                        "aria-posinset": n + 1,
                        "aria-setsize": t.length,
                        className: u,
                    };
                return h === d.rD.USER
                    ? (0, l.jsx)(F, { user: I, ...f })
                    : h === d.rD.GROUP_DM
                      ? (0, l.jsx)(O, { channel: I, ...f })
                      : h === d.rD.TEXT_CHANNEL || h === d.rD.VOICE_CHANNEL
                        ? (0, l.jsx)(W, { channel: I, ...f })
                        : void (0, G.xb)(h);
            },
            [A, r, s, a, t, c, u, _],
        );
    return { sections: [t.length], sectionHeight: 0, rowHeight: 48, renderRow: h };
}
