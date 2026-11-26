n.d(t, { A: () => M });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(276293),
    d = n(834730),
    u = n(957485),
    m = n(97808),
    g = n(778712),
    h = n(866665),
    x = n(194261),
    A = n(442433),
    p = n(392054),
    b = n(713654),
    f = n(69282),
    j = n(657048),
    N = n(427262),
    C = n(855986),
    v = n(168186),
    E = n(47167),
    I = n(734057),
    T = n(696451),
    y = n(317525),
    S = n(994500),
    k = n(351906),
    O = n(287809),
    w = n(652215),
    L = n(792996),
    R = n(924466);
function M(e) {
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
        case p.RA.CHANNEL:
            return (0, i.jsx)(_, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
        case p.RA.ROLE:
            return (0, i.jsx)(P, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
        case p.RA.USER:
            return (0, i.jsx)(G, { guild: t, id: s, isLocked: r, lockTooltipText: c, openEntryContextMenu: u });
    }
}
function _(e) {
    let { guild: t, id: n, isLocked: s, lockTooltipText: r, openEntryContextMenu: o } = e,
        {
            isAllChannels: u,
            icon: m,
            name: g,
            categoryName: h,
        } = (function (e, t, n) {
            let i = t === (0, v.Ap)(e.id),
                {
                    icon: l,
                    name: s,
                    categoryName: a,
                } = (0, C.cf)(
                    [I.A, O.default, S.A],
                    () => {
                        if (i) return { icon: void 0, name: void 0, categoryName: void 0 };
                        let l = I.A.getChannel(t),
                            s = l?.parent_id != null ? I.A.getChannel(l.parent_id) : null;
                        return {
                            icon: null != l ? n(l, e) : void 0,
                            name: null != l ? (0, E.m1)(l, O.default, S.A) : void 0,
                            categoryName: null != s ? (0, E.m1)(s, O.default, S.A) : void 0,
                        };
                    },
                    [n, e, t, i],
                );
            return { isAllChannels: i, icon: l, name: s, categoryName: a };
        })(t, n, b.gU),
        x = u ? c.TextIcon : m,
        A = u ? L.intl.string(L.t["7YqSGx"]) : g,
        p = l.useCallback(
            (e) => {
                u || o(e);
            },
            [u, o],
        );
    return null == x || null == A
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: p,
              className: R.Cv,
              children: [
                  (0, i.jsx)(x, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(R.p, R.Sl),
                  }),
                  (0, i.jsx)(d.E, { className: R.S3, color: "text-strong", variant: "body-md/normal", children: A }),
                  null != h
                      ? (0, i.jsxs)(d.E, { className: R.Tc, variant: "body-sm/normal", children: ["(", h, ")"] })
                      : null,
                  s ? (0, i.jsx)(W, { tooltipText: r }) : null,
              ],
          });
}
function P(e) {
    var t;
    let { guild: s, id: r, isLocked: o, lockTooltipText: c } = e,
        m = ((t = s.id), (0, C.bG)([y.A], () => y.A.getRole(t, r), [t, r])),
        g = (0, f.Xx)({ guildId: s.id, roleId: r, size: 24 }),
        h = l.useCallback(
            (e) => {
                null != s &&
                    null != m &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await n.e(41072).then(n.bind(n, 165747));
                        return (t) => (0, i.jsx)(e, { ...t, guild: s, role: m });
                    });
            },
            [s, m],
        );
    return m?.name == null
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: h,
              className: R.Cv,
              children: [
                  null != g
                      ? (0, i.jsx)(j.A, { className: a()(R.__invalid_icon, R.Sl), ...g })
                      : (0, i.jsx)(u.ShieldUserIcon, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(R.a, R.Sl),
                            color: m.colorString ?? w.TpD,
                        }),
                  (0, i.jsx)(d.E, {
                      className: R.S3,
                      color: "text-strong",
                      variant: "body-md/normal",
                      children: m.name,
                  }),
                  o ? (0, i.jsx)(W, { tooltipText: c }) : null,
              ],
          });
}
function G(e) {
    var t;
    let n,
        { guild: l, id: s, isLocked: a, lockTooltipText: r, openEntryContextMenu: o } = e,
        {
            user: c,
            nick: u,
            showTag: h,
        } = ((t = l.id),
        (n = (0, C.bG)([O.default], () => O.default.getUser(s), [s])),
        {
            user: n,
            nick: (0, C.bG)([T.Ay], () => T.Ay.getMember(t, s)?.nick, [t, s]),
            showTag: !(0, C.bG)([k.A], () => k.A.hidePersonalInformation),
        });
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: o,
              className: R.Cv,
              children: [
                  (0, i.jsx)(m.eu, {
                      className: R.Sl,
                      src: c.getAvatarURL(l.id, 24),
                      "aria-label": c.username,
                      size: g._3.SIZE_24,
                  }),
                  (0, i.jsx)(d.E, {
                      className: R.S3,
                      color: "text-strong",
                      variant: "body-md/normal",
                      children: u ?? c.username,
                  }),
                  h
                      ? (0, i.jsx)(d.E, { className: R.Tc, variant: "body-sm/normal", children: N.Ay.getUserTag(c) })
                      : null,
                  a ? (0, i.jsx)(W, { tooltipText: r }) : null,
              ],
          });
}
function W(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(h.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: R.hz,
            children: (0, i.jsx)(x.LockIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
