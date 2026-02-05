n.d(t, { z: () => G });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    u = n.n(r),
    o = n(311907),
    c = n(397927),
    d = n(966327),
    m = n(964486),
    h = n(629357),
    b = n(47167),
    f = n(598104),
    x = n(255266),
    g = n(72563),
    p = n(223863),
    A = n(95701),
    _ = n(734057),
    v = n(71393),
    y = n(576705),
    S = n(290863),
    C = n(222823),
    j = n(994500),
    N = n(287809),
    T = n(405269),
    L = n(403362),
    D = n(427262),
    k = n(652215),
    w = n(790782),
    E = n(985018),
    P = n(116106);
function M(e) {
    let {
            destination: t,
            icon: n,
            label: s,
            subLabel: r,
            selected: u,
            disabled: o,
            onPressDestination: d,
            "aria-setsize": h,
            "aria-posinset": b,
        } = e,
        f = i.useRef(!1),
        x = i.useCallback(() => {
            o || d?.(t);
        }, [d, o, t]);
    return (
        (0, m.l0)(() => () => {
            f.current && ((f.current = !1), d?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, l.jsxs)(c.DUT, {
            className: a()(P.HP, { [P.r9]: o }),
            onClick: x,
            "aria-selected": u,
            "aria-setsize": h,
            "aria-posinset": b,
            children: [
                (0, l.jsxs)("div", {
                    className: P.D_,
                    children: [
                        (0, l.jsx)("div", { className: P.P0, children: n }),
                        (0, l.jsxs)("div", {
                            className: P.WD,
                            children: [
                                (0, l.jsx)(c.Text, {
                                    tag: "strong",
                                    className: P.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: s,
                                }),
                                (0, l.jsx)(c.Text, {
                                    className: P.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: r,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: P.kv, children: (0, l.jsx)(c.P7L, { checked: u }) }),
            ],
        })
    );
}
function F(e) {
    let { user: t, subLabel: n, ...i } = e,
        s = D.Ay.useName(t),
        a = D.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, o.bG)([j.A], () => j.A.getNickname(t.id)),
        u = (0, o.bG)([S.A], () => S.A.getStatus(t.id));
    return (0, l.jsx)(M, {
        ...i,
        icon: (0, l.jsx)(d.A, { "aria-hidden": !0, size: c._3J.SIZE_32, user: t, status: u }),
        label: r ?? s,
        subLabel: n ?? a,
    });
}
function z(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, b.Ay)(t),
        a = (0, g.i)(t);
    return (0, l.jsx)(M, {
        ...i,
        icon: (0, l.jsx)(f.A, { "aria-hidden": !0, size: c._3J.SIZE_32, channel: t }),
        label: s,
        subLabel: n ?? a,
    });
}
function I(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, o.bG)([v.A], () => v.A.getGuild(t?.guild_id)),
        a = (0, b.Ay)(t),
        r = (0, o.bG)([_.A, N.default, j.A], () => {
            let e = _.A.getChannel(t.parent_id);
            return null == e ? null : (0, b.m1)(e, N.default, j.A, !1);
        }),
        d = (0, o.bG)([C.Ay], () => C.Ay.lastMessageTimestamp(t.id, w.P.CHANNEL)),
        m = s?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? c.bSJ : c.N$i;
        m = (0, l.jsxs)("div", {
            className: P.vr,
            children: [
                (0, l.jsx)(e, { color: c.LU0.colors.TEXT_SUBTLE, className: P.Q9 }),
                (0, l.jsx)(c.Text, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != d
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(c.Text, {
                                  className: P.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, l.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, T.Fe)(u()(d)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(M, {
        ...i,
        icon: (0, l.jsx)(x.A, { size: x.q.SMALL_32, guild: s, channel: t }),
        label: a,
        subLabel: n ?? m,
    });
}
function G(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: s,
            disableSelection: a,
            originDestination: r,
        } = e,
        u = i.useMemo(() => n?.map(p.I) ?? [], [n]);
    return i.useMemo(() => {
        let e = t.filter((e) => e.type !== h.rD.HEADER);
        return e.map((t, n) => {
            let { type: i, record: o } = t,
                c = i === h.rD.USER ? { type: "user", id: o.id } : { type: "channel", id: o.id },
                d = (0, p.I)(c),
                m =
                    null != r
                        ? (function (e, t) {
                              if (t instanceof A.YB && (0, A.zy)(t.type)) {
                                  if (
                                      null != t.rateLimitPerUser &&
                                      t.rateLimitPerUser > 0 &&
                                      !(y.A.can(k.xBc.MANAGE_CHANNELS, t) || y.A.can(k.xBc.MANAGE_MESSAGES, t))
                                  )
                                      return { label: E.intl.string(E.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !y.A.can(k.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: E.intl.string(E.t.v8MLqz) };
                                  let n = (0, p._5)(t.id);
                                  if (e.id === n.id) return { label: E.intl.string(E.t.mD4gqe) };
                              }
                          })(r, o)
                        : null,
                b = u.includes(d),
                f = {
                    destination: c,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (a && !b) || null != m,
                    selected: b,
                    onPressDestination: s,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            return i === h.rD.USER
                ? (0, l.jsx)(F, { user: o, ...f }, d)
                : i === h.rD.GROUP_DM
                  ? (0, l.jsx)(z, { channel: o, ...f }, d)
                  : i === h.rD.TEXT_CHANNEL || i === h.rD.VOICE_CHANNEL
                    ? (0, l.jsx)(I, { channel: o, ...f }, d)
                    : void (0, L.xb)(i);
        });
    }, [a, s, r, t, u]);
}
