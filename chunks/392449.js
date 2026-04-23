n.d(t, { z: () => B });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    u = n.n(r),
    o = n(311907),
    c = n(939249),
    d = n(834730),
    m = n(658675),
    h = n(778712),
    f = n(56059),
    g = n(276293),
    b = n(827734),
    x = n(966327),
    p = n(964486),
    A = n(629357),
    _ = n(47167),
    v = n(598104),
    S = n(255266),
    y = n(72563),
    C = n(223863),
    j = n(95701),
    N = n(734057),
    L = n(71393),
    E = n(576705),
    k = n(290863),
    D = n(222823),
    M = n(994500),
    P = n(287809),
    w = n(405269),
    T = n(403362),
    I = n(427262),
    q = n(652215),
    F = n(790782),
    G = n(985018),
    z = n(236167);
function R(e) {
    let {
            destination: t,
            icon: n,
            label: s,
            subLabel: r,
            selected: u,
            disabled: o,
            onPressDestination: h,
            "aria-setsize": f,
            "aria-posinset": g,
        } = e,
        b = i.useRef(!1),
        x = i.useCallback(() => {
            o || h?.(t);
        }, [h, o, t]);
    return (
        (0, p.l0)(() => () => {
            b.current && ((b.current = !1), h?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, l.jsxs)(c.D, {
            className: a()(z.HP, { [z.r9]: o }),
            onClick: x,
            "aria-selected": u,
            "aria-setsize": f,
            "aria-posinset": g,
            children: [
                (0, l.jsxs)("div", {
                    className: z.D_,
                    children: [
                        (0, l.jsx)("div", { className: z.P0, children: n }),
                        (0, l.jsxs)("div", {
                            className: z.WD,
                            children: [
                                (0, l.jsx)(d.E, {
                                    tag: "strong",
                                    className: z.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: s,
                                }),
                                (0, l.jsx)(d.E, {
                                    className: z.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: r,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: z.kv, children: (0, l.jsx)(m.P, { checked: u }) }),
            ],
        })
    );
}
function H(e) {
    let { user: t, subLabel: n, ...i } = e,
        s = I.Ay.useName(t),
        a = I.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, o.bG)([M.A], () => M.A.getNickname(t.id)),
        u = (0, o.bG)([k.A], () => k.A.getStatus(t.id));
    return (0, l.jsx)(R, {
        ...i,
        icon: (0, l.jsx)(x.A, { "aria-hidden": !0, size: h._3.SIZE_32, user: t, status: u }),
        label: r ?? s,
        subLabel: n ?? a,
    });
}
function U(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, _.Ay)(t),
        a = (0, y.i)(t);
    return (0, l.jsx)(R, {
        ...i,
        icon: (0, l.jsx)(v.A, { "aria-hidden": !0, size: h._3.SIZE_32, channel: t }),
        label: s,
        subLabel: n ?? a,
    });
}
function W(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, o.bG)([L.A], () => L.A.getGuild(t?.guild_id)),
        a = (0, _.Ay)(t),
        r = (0, o.bG)([N.A, P.default, M.A], () => {
            let e = N.A.getChannel(t.parent_id);
            return null == e ? null : (0, _.m1)(e, P.default, M.A, !1);
        }),
        c = (0, o.bG)([D.Ay], () => D.Ay.lastMessageTimestamp(t.id, F.P.CHANNEL)),
        m = s?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.b : g.N;
        m = (0, l.jsxs)("div", {
            className: z.vr,
            children: [
                (0, l.jsx)(e, { color: b.A.colors.TEXT_SUBTLE, className: z.Q9 }),
                (0, l.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != c
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.E, {
                                  className: z.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, l.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, w.Fe)(u()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(R, {
        ...i,
        icon: (0, l.jsx)(S.A, { size: S.q.SMALL_32, guild: s, channel: t }),
        label: a,
        subLabel: n ?? m,
    });
}
function B(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: s,
            disableSelection: a,
            originDestination: r,
        } = e,
        u = i.useMemo(() => n?.map(C.I) ?? [], [n]);
    return i.useMemo(() => {
        let e = t.filter((e) => e.type !== A.rD.HEADER);
        return e.map((t, n) => {
            let { type: i, record: o } = t,
                c = i === A.rD.USER ? { type: "user", id: o.id } : { type: "channel", id: o.id },
                d = (0, C.I)(c),
                m =
                    null != r
                        ? (function (e, t) {
                              if (t instanceof j.YB && (0, j.zy)(t.type)) {
                                  if (
                                      null != t.rateLimitPerUser &&
                                      t.rateLimitPerUser > 0 &&
                                      !(E.A.can(q.xBc.MANAGE_CHANNELS, t) || E.A.can(q.xBc.MANAGE_MESSAGES, t))
                                  )
                                      return { label: G.intl.string(G.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !E.A.can(q.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: G.intl.string(G.t.v8MLqz) };
                                  let n = (0, C._5)(t.id);
                                  if (e.id === n.id) return { label: G.intl.string(G.t.mD4gqe) };
                              }
                          })(r, o)
                        : null,
                h = u.includes(d),
                f = {
                    destination: c,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (a && !h) || null != m,
                    selected: h,
                    onPressDestination: s,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            return i === A.rD.USER
                ? (0, l.jsx)(H, { user: o, ...f }, d)
                : i === A.rD.GROUP_DM
                  ? (0, l.jsx)(U, { channel: o, ...f }, d)
                  : i === A.rD.TEXT_CHANNEL || i === A.rD.VOICE_CHANNEL
                    ? (0, l.jsx)(W, { channel: o, ...f }, d)
                    : void (0, T.xb)(i);
        });
    }, [a, s, r, t, u]);
}
