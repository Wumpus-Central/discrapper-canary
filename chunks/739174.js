n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(17928),
    c = n(990078),
    u = n(276293),
    m = n(834730),
    g = n(179866),
    h = n(97808),
    x = n(778712),
    p = n(194261),
    A = n(442433),
    b = n(392054),
    f = n(168186),
    _ = n(47167),
    j = n(713654),
    N = n(201275),
    v = n(657048),
    E = n(734057),
    C = n(696451),
    I = n(317525),
    T = n(994500),
    S = n(351906),
    y = n(287809),
    w = n(427262),
    O = n(652215),
    k = n(985018),
    L = n(428203);
function R(e) {
    let { guild: t, id: s, type: a, isLocked: r, lockTooltipText: d } = e,
        c = !r || null != d;
    o()(c, "No lockTooltipText provided while isLocked=true");
    let u = l.useCallback(
        (e) => {
            (0, A.L3)(e, async () => {
                let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                return (t) => (0, i.jsx)(e, { ...t, id: s, label: k.intl.string(k.t.oJ1Muw) });
            });
        },
        [s],
    );
    switch (a) {
        case b.RA.CHANNEL:
            return (0, i.jsx)(M, { guild: t, id: s, isLocked: r, lockTooltipText: d, openEntryContextMenu: u });
        case b.RA.ROLE:
            return (0, i.jsx)(D, { guild: t, id: s, isLocked: r, lockTooltipText: d, openEntryContextMenu: u });
        case b.RA.USER:
            return (0, i.jsx)(P, { guild: t, id: s, isLocked: r, lockTooltipText: d, openEntryContextMenu: u });
    }
}
function M(e) {
    let { guild: t, id: n, isLocked: s, lockTooltipText: r, openEntryContextMenu: o } = e,
        c = (0, f.Ap)(t.id),
        {
            icon: g,
            name: h,
            categoryName: x,
        } = (0, d.cf)([E.A, y.default, T.A], () => {
            if (c === n) return { name: k.intl.string(k.t["7YqSGx"]), icon: u.N };
            let e = E.A.getChannel(n),
                i = e?.parent_id != null ? E.A.getChannel(e.parent_id) : null;
            return {
                icon: null != e ? (0, j.gU)(e, t) : null,
                name: null != e ? (0, _.m1)(e, y.default, T.A) : void 0,
                categoryName: null != i ? (0, _.m1)(i, y.default, T.A) : void 0,
            };
        }, [c, t, n]),
        p = l.useCallback(
            (e) => {
                n !== c && o(e);
            },
            [c, n, o],
        );
    return null == g || null == h
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: p,
              className: L.Cv,
              children: [
                  (0, i.jsx)(g, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(L.p, L.Sl),
                  }),
                  (0, i.jsx)(m.E, { className: L.S3, color: "text-strong", variant: "text-md/normal", children: h }),
                  null != x
                      ? (0, i.jsxs)(m.E, { className: L.Tc, variant: "text-sm/normal", children: ["(", x, ")"] })
                      : null,
                  s ? (0, i.jsx)(G, { tooltipText: r }) : null,
              ],
          });
}
function D(e) {
    let { guild: t, id: s, isLocked: r, lockTooltipText: o } = e,
        c = (0, d.bG)([I.A], () => I.A.getRole(t.id, s)),
        u = (0, N.$7)({ guildId: t.id, roleId: s, size: 24 }),
        h = l.useCallback(
            (e) => {
                null != t &&
                    null != c &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await n.e("41072").then(n.bind(n, 165747));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t, role: c });
                    });
            },
            [t, c],
        );
    return c?.name == null
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: h,
              className: L.Cv,
              children: [
                  null != u
                      ? (0, i.jsx)(v.A, { className: a()(L.__invalid_icon, L.Sl), ...u })
                      : (0, i.jsx)(g.i, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(L.a, L.Sl),
                            color: c.colorString ?? O.TpD,
                        }),
                  (0, i.jsx)(m.E, {
                      className: L.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: c.name,
                  }),
                  r ? (0, i.jsx)(G, { tooltipText: o }) : null,
              ],
          });
}
function P(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: s, openEntryContextMenu: a } = e,
        r = (0, d.bG)([y.default], () => y.default.getUser(n)),
        o = (0, d.bG)([C.Ay], () => C.Ay.getMember(t.id, n)?.nick, [t.id, n]),
        c = (0, d.bG)([S.A], () => S.A.hidePersonalInformation);
    return null == r
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: L.Cv,
              children: [
                  (0, i.jsx)(h.eu, {
                      className: L.Sl,
                      src: r.getAvatarURL(t.id, 24),
                      "aria-label": r.username,
                      size: x._3.SIZE_24,
                  }),
                  (0, i.jsx)(m.E, {
                      className: L.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: o ?? r.username,
                  }),
                  c
                      ? null
                      : (0, i.jsx)(m.E, { className: L.Tc, variant: "text-sm/normal", children: w.Ay.getUserTag(r) }),
                  l ? (0, i.jsx)(G, { tooltipText: s }) : null,
              ],
          });
}
function G(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(c.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: L.hz,
            children: (0, i.jsx)(p.X, { size: "xs", color: "currentColor" }),
        }),
    });
}
