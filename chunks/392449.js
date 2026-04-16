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
    x = n(47167),
    f = n(598104),
    g = n(255266),
    b = n(72563),
    p = n(223863),
    A = n(95701),
    _ = n(734057),
    v = n(71393),
    S = n(576705),
    y = n(290863),
    C = n(222823),
    j = n(994500),
    N = n(287809),
    L = n(405269),
    T = n(403362),
    k = n(427262),
    D = n(652215),
    M = n(790782),
    w = n(985018),
    E = n(236167);
function P(e) {
    let {
            destination: t,
            icon: n,
            label: s,
            subLabel: r,
            selected: u,
            disabled: o,
            onPressDestination: d,
            "aria-setsize": h,
            "aria-posinset": x,
        } = e,
        f = i.useRef(!1),
        g = i.useCallback(() => {
            o || d?.(t);
        }, [d, o, t]);
    return (
        (0, m.l0)(() => () => {
            f.current && ((f.current = !1), d?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, l.jsxs)(c.DUT, {
            className: a()(E.HP, { [E.r9]: o }),
            onClick: g,
            "aria-selected": u,
            "aria-setsize": h,
            "aria-posinset": x,
            children: [
                (0, l.jsxs)("div", {
                    className: E.D_,
                    children: [
                        (0, l.jsx)("div", { className: E.P0, children: n }),
                        (0, l.jsxs)("div", {
                            className: E.WD,
                            children: [
                                (0, l.jsx)(c.Text, {
                                    tag: "strong",
                                    className: E.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: s,
                                }),
                                (0, l.jsx)(c.Text, {
                                    className: E.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: r,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: E.kv, children: (0, l.jsx)(c.P7L, { checked: u }) }),
            ],
        })
    );
}
function I(e) {
    let { user: t, subLabel: n, ...i } = e,
        s = k.Ay.useName(t),
        a = k.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, o.bG)([j.A], () => j.A.getNickname(t.id)),
        u = (0, o.bG)([y.A], () => y.A.getStatus(t.id));
    return (0, l.jsx)(P, {
        ...i,
        icon: (0, l.jsx)(d.A, { "aria-hidden": !0, size: c._3J.SIZE_32, user: t, status: u }),
        label: r ?? s,
        subLabel: n ?? a,
    });
}
function q(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, x.Ay)(t),
        a = (0, b.i)(t);
    return (0, l.jsx)(P, {
        ...i,
        icon: (0, l.jsx)(f.A, { "aria-hidden": !0, size: c._3J.SIZE_32, channel: t }),
        label: s,
        subLabel: n ?? a,
    });
}
function F(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, o.bG)([v.A], () => v.A.getGuild(t?.guild_id)),
        a = (0, x.Ay)(t),
        r = (0, o.bG)([_.A, N.default, j.A], () => {
            let e = _.A.getChannel(t.parent_id);
            return null == e ? null : (0, x.m1)(e, N.default, j.A, !1);
        }),
        d = (0, o.bG)([C.Ay], () => C.Ay.lastMessageTimestamp(t.id, M.P.CHANNEL)),
        m = s?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? c.bSJ : c.N$i;
        m = (0, l.jsxs)("div", {
            className: E.vr,
            children: [
                (0, l.jsx)(e, { color: c.LU0.colors.TEXT_SUBTLE, className: E.Q9 }),
                (0, l.jsx)(c.Text, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != d
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(c.Text, {
                                  className: E.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, l.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, L.Fe)(u()(d)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(P, {
        ...i,
        icon: (0, l.jsx)(g.A, { size: g.q.SMALL_32, guild: s, channel: t }),
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
                                      !(S.A.can(D.xBc.MANAGE_CHANNELS, t) || S.A.can(D.xBc.MANAGE_MESSAGES, t))
                                  )
                                      return { label: w.intl.string(w.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !S.A.can(D.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: w.intl.string(w.t.v8MLqz) };
                                  let n = (0, p._5)(t.id);
                                  if (e.id === n.id) return { label: w.intl.string(w.t.mD4gqe) };
                              }
                          })(r, o)
                        : null,
                x = u.includes(d),
                f = {
                    destination: c,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (a && !x) || null != m,
                    selected: x,
                    onPressDestination: s,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            return i === h.rD.USER
                ? (0, l.jsx)(I, { user: o, ...f }, d)
                : i === h.rD.GROUP_DM
                  ? (0, l.jsx)(q, { channel: o, ...f }, d)
                  : i === h.rD.TEXT_CHANNEL || i === h.rD.VOICE_CHANNEL
                    ? (0, l.jsx)(F, { channel: o, ...f }, d)
                    : void (0, T.xb)(i);
        });
    }, [a, s, r, t, u]);
}
