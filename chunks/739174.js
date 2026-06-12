n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(17928),
    d = n(990078),
    u = n(276293),
    m = n(834730),
    g = n(957485),
    h = n(97808),
    x = n(778712),
    A = n(194261),
    p = n(442433),
    b = n(392054),
    f = n(168186),
    j = n(47167),
    N = n(713654),
    E = n(201275),
    C = n(657048),
    v = n(734057),
    T = n(696451),
    I = n(317525),
    S = n(994500),
    y = n(351906),
    O = n(287809),
    k = n(427262),
    L = n(652215),
    w = n(375708),
    R = n(428203);
function M(e) {
    let { guild: t, id: s, type: a, isLocked: r, lockTooltipText: c } = e,
        d = !r || null != c;
    o()(d, "No lockTooltipText provided while isLocked=true");
    let u = l.useCallback(
        (e) => {
            (0, p.L3)(e, async () => {
                let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                return (t) => (0, i.jsx)(e, { ...t, id: s, label: w.intl.string(w.t.oJ1Muw) });
            });
        },
        [s],
    );
    switch (a) {
        case b.RA.CHANNEL:
            return (0, i.jsx)(_, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
        case b.RA.ROLE:
            return (0, i.jsx)(P, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
        case b.RA.USER:
            return (0, i.jsx)(W, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
    }
}
function _(e) {
    let { guild: t, id: n, isLocked: s, lockTooltipText: r, openEntryContextMenu: o } = e,
        d = (0, f.Ap)(t.id),
        {
            icon: g,
            name: h,
            categoryName: x,
        } = (0, c.cf)([v.A, O.default, S.A], () => {
            if (d === n) return { name: w.intl.string(w.t["7YqSGx"]), icon: u.N };
            let e = v.A.getChannel(n),
                i = e?.parent_id != null ? v.A.getChannel(e.parent_id) : null;
            return {
                icon: null != e ? (0, N.gU)(e, t) : null,
                name: null != e ? (0, j.m1)(e, O.default, S.A) : void 0,
                categoryName: null != i ? (0, j.m1)(i, O.default, S.A) : void 0,
            };
        }, [d, t, n]),
        A = l.useCallback(
            (e) => {
                n !== d && o(e);
            },
            [d, n, o],
        );
    return null == g || null == h
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: A,
              className: R.Cv,
              children: [
                  (0, i.jsx)(g, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(R.p, R.Sl),
                  }),
                  (0, i.jsx)(m.E, { className: R.S3, color: "text-strong", variant: "text-md/normal", children: h }),
                  null != x
                      ? (0, i.jsxs)(m.E, { className: R.Tc, variant: "text-sm/normal", children: ["(", x, ")"] })
                      : null,
                  s ? (0, i.jsx)(G, { tooltipText: r }) : null,
              ],
          });
}
function P(e) {
    let { guild: t, id: s, isLocked: r, lockTooltipText: o } = e,
        d = (0, c.bG)([I.A], () => I.A.getRole(t.id, s)),
        u = (0, E.$7)({ guildId: t.id, roleId: s, size: 24 }),
        h = l.useCallback(
            (e) => {
                null != t &&
                    null != d &&
                    (0, p.L3)(e, async () => {
                        let { default: e } = await n.e("41072").then(n.bind(n, 165747));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t, role: d });
                    });
            },
            [t, d],
        );
    return d?.name == null
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: h,
              className: R.Cv,
              children: [
                  null != u
                      ? (0, i.jsx)(C.A, { className: a()(R.__invalid_icon, R.Sl), ...u })
                      : (0, i.jsx)(g.i, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(R.a, R.Sl),
                            color: d.colorString ?? L.TpD,
                        }),
                  (0, i.jsx)(m.E, {
                      className: R.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: d.name,
                  }),
                  r ? (0, i.jsx)(G, { tooltipText: o }) : null,
              ],
          });
}
function W(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: s, openEntryContextMenu: a } = e,
        r = (0, c.bG)([O.default], () => O.default.getUser(n)),
        o = (0, c.bG)([T.Ay], () => T.Ay.getMember(t.id, n)?.nick, [t.id, n]),
        d = (0, c.bG)([y.A], () => y.A.hidePersonalInformation);
    return null == r
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: R.Cv,
              children: [
                  (0, i.jsx)(h.eu, {
                      className: R.Sl,
                      src: r.getAvatarURL(t.id, 24),
                      "aria-label": r.username,
                      size: x._3.SIZE_24,
                  }),
                  (0, i.jsx)(m.E, {
                      className: R.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: o ?? r.username,
                  }),
                  d
                      ? null
                      : (0, i.jsx)(m.E, { className: R.Tc, variant: "text-sm/normal", children: k.Ay.getUserTag(r) }),
                  l ? (0, i.jsx)(G, { tooltipText: s }) : null,
              ],
          });
}
function G(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(d.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: R.hz,
            children: (0, i.jsx)(A.X, { size: "xs", color: "currentColor" }),
        }),
    });
}
