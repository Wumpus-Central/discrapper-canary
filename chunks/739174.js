var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(855986),
    d = n(276293),
    u = n(834730),
    m = n(957485),
    g = n(97808),
    h = n(778712),
    x = n(866665),
    p = n(194261),
    A = n(442433),
    b = n(392054),
    f = n(168186),
    j = n(47167),
    N = n(713654),
    E = n(69282),
    C = n(657048),
    v = n(734057),
    I = n(696451),
    T = n(317525),
    y = n(994500),
    S = n(351906),
    k = n(287809),
    O = n(427262),
    w = n(652215),
    L = n(792996),
    R = n(924466);
function M(e) {
    let { guild: t, id: n, isLocked: s, lockTooltipText: r, openEntryContextMenu: o } = e,
        m = (0, f.Ap)(t.id),
        {
            icon: g,
            name: h,
            categoryName: x,
        } = (0, c.cf)(
            [v.A, k.default, y.A],
            () => {
                if (m === n) return { name: L.intl.string(L.t["7YqSGx"]), icon: d.TextIcon };
                let e = v.A.getChannel(n),
                    i = e?.parent_id != null ? v.A.getChannel(e.parent_id) : null;
                return {
                    icon: null != e ? (0, N.gU)(e, t) : null,
                    name: null != e ? (0, j.m1)(e, k.default, y.A) : void 0,
                    categoryName: null != i ? (0, j.m1)(i, k.default, y.A) : void 0,
                };
            },
            [m, t, n],
        ),
        p = l.useCallback(
            (e) => {
                n !== m && o(e);
            },
            [m, n, o],
        );
    return null == g || null == h
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: p,
              className: R.Cv,
              children: [
                  (0, i.jsx)(g, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(R.p, R.Sl),
                  }),
                  (0, i.jsx)(u.E, { className: R.S3, color: "text-strong", variant: "body-md/normal", children: h }),
                  null != x
                      ? (0, i.jsxs)(u.E, { className: R.Tc, variant: "body-sm/normal", children: ["(", x, ")"] })
                      : null,
                  s ? (0, i.jsx)(W, { tooltipText: r }) : null,
              ],
          });
}
function _(e) {
    let { guild: t, id: s, isLocked: r, lockTooltipText: o } = e,
        d = (0, c.bG)([T.A], () => T.A.getRole(t.id, s)),
        g = (0, E.Xx)({ guildId: t.id, roleId: s, size: 24 }),
        h = l.useCallback(
            (e) => {
                null != t &&
                    null != d &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await n.e(41072).then(n.bind(n, 165747));
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
                  null != g
                      ? (0, i.jsx)(C.A, { className: a()(R.__invalid_icon, R.Sl), ...g })
                      : (0, i.jsx)(m.ShieldUserIcon, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(R.a, R.Sl),
                            color: d.colorString ?? w.TpD,
                        }),
                  (0, i.jsx)(u.E, {
                      className: R.S3,
                      color: "text-strong",
                      variant: "body-md/normal",
                      children: d.name,
                  }),
                  r ? (0, i.jsx)(W, { tooltipText: o }) : null,
              ],
          });
}
function P(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: s, openEntryContextMenu: a } = e,
        r = (0, c.bG)([k.default], () => k.default.getUser(n)),
        o = (0, c.bG)([I.Ay], () => I.Ay.getMember(t.id, n)?.nick, [t.id, n]),
        d = (0, c.bG)([S.A], () => S.A.hidePersonalInformation);
    return null == r
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: R.Cv,
              children: [
                  (0, i.jsx)(g.eu, {
                      className: R.Sl,
                      src: r.getAvatarURL(t.id, 24),
                      "aria-label": r.username,
                      size: h._3.SIZE_24,
                  }),
                  (0, i.jsx)(u.E, {
                      className: R.S3,
                      color: "text-strong",
                      variant: "body-md/normal",
                      children: o ?? r.username,
                  }),
                  d
                      ? null
                      : (0, i.jsx)(u.E, { className: R.Tc, variant: "body-sm/normal", children: O.Ay.getUserTag(r) }),
                  l ? (0, i.jsx)(W, { tooltipText: s }) : null,
              ],
          });
}
function W(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(x.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: R.hz,
            children: (0, i.jsx)(p.LockIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guild: t, id: s, type: a, isLocked: r, lockTooltipText: c } = e,
                d = !r || null != c;
            o()(d, "No lockTooltipText provided while isLocked=true");
            let u = l.useCallback(
                (e) => {
                    (0, A.L3)(e, async () => {
                        let { default: e } = await n.e(715687).then(n.bind(n, 646938));
                        return (t) => (0, i.jsx)(e, { ...t, id: s, label: L.intl.string(L.t.oJ1Muw) });
                    });
                },
                [s],
            );
            switch (a) {
                case b.RA.CHANNEL:
                    return (0, i.jsx)(M, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
                case b.RA.ROLE:
                    return (0, i.jsx)(_, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
                case b.RA.USER:
                    return (0, i.jsx)(P, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
            }
        },
    },
);
