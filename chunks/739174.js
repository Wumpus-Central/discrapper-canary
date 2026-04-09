n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    m = n(442433),
    g = n(392054),
    x = n(168186),
    h = n(47167),
    p = n(713654),
    A = n(201275),
    b = n(657048),
    f = n(734057),
    _ = n(696451),
    N = n(317525),
    j = n(994500),
    v = n(351906),
    T = n(287809),
    C = n(427262),
    I = n(652215),
    E = n(985018),
    S = n(348326);
function y(e) {
    let { guild: t, id: s, type: a, isLocked: r, lockTooltipText: d } = e,
        c = !r || null != d;
    o()(c, "No lockTooltipText provided while isLocked=true");
    let u = l.useCallback(
        (e) => {
            (0, m.L3)(e, async () => {
                let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                return (t) => (0, i.jsx)(e, { ...t, id: s, label: E.intl.string(E.t.oJ1Muw) });
            });
        },
        [s],
    );
    switch (a) {
        case g.RA.CHANNEL:
            return (0, i.jsx)(O, { guild: t, id: s, isLocked: r, lockTooltipText: d, openEntryContextMenu: u });
        case g.RA.ROLE:
            return (0, i.jsx)(w, { guild: t, id: s, isLocked: r, lockTooltipText: d, openEntryContextMenu: u });
        case g.RA.USER:
            return (0, i.jsx)(R, { guild: t, id: s, isLocked: r, lockTooltipText: d, openEntryContextMenu: u });
    }
}
function O(e) {
    let { guild: t, id: n, isLocked: s, lockTooltipText: r, openEntryContextMenu: o } = e,
        c = (0, x.Ap)(t.id),
        {
            icon: m,
            name: g,
            categoryName: A,
        } = (0, d.cf)([f.A, T.default, j.A], () => {
            if (c === n) return { name: E.intl.string(E.t["7YqSGx"]), icon: u.N$i };
            let e = f.A.getChannel(n),
                i = e?.parent_id != null ? f.A.getChannel(e.parent_id) : null;
            return {
                icon: null != e ? (0, p.gU)(e, t) : null,
                name: null != e ? (0, h.m1)(e, T.default, j.A) : void 0,
                categoryName: null != i ? (0, h.m1)(i, T.default, j.A) : void 0,
            };
        }, [c, t, n]),
        b = l.useCallback(
            (e) => {
                n !== c && o(e);
            },
            [c, n, o],
        );
    return null == m || null == g
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: b,
              className: S.Cv,
              children: [
                  (0, i.jsx)(m, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(S.p, S.Sl),
                  }),
                  (0, i.jsx)(u.Text, { className: S.S3, color: "text-strong", variant: "text-md/normal", children: g }),
                  null != A
                      ? (0, i.jsxs)(u.Text, { className: S.Tc, variant: "text-sm/normal", children: ["(", A, ")"] })
                      : null,
                  s ? (0, i.jsx)(k, { tooltipText: r }) : null,
              ],
          });
}
function w(e) {
    let { guild: t, id: s, isLocked: r, lockTooltipText: o } = e,
        c = (0, d.bG)([N.A], () => N.A.getRole(t.id, s)),
        g = (0, A.$7)({ guildId: t.id, roleId: s, size: 24 }),
        x = l.useCallback(
            (e) => {
                null != t &&
                    null != c &&
                    (0, m.L3)(e, async () => {
                        let { default: e } = await n.e("41072").then(n.bind(n, 165747));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t, role: c });
                    });
            },
            [t, c],
        );
    return c?.name == null
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: x,
              className: S.Cv,
              children: [
                  null != g
                      ? (0, i.jsx)(b.A, { className: a()(S.__invalid_icon, S.Sl), ...g })
                      : (0, i.jsx)(u.iTF, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(S.a, S.Sl),
                            color: c.colorString ?? I.TpD,
                        }),
                  (0, i.jsx)(u.Text, {
                      className: S.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: c.name,
                  }),
                  r ? (0, i.jsx)(k, { tooltipText: o }) : null,
              ],
          });
}
function R(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: s, openEntryContextMenu: a } = e,
        r = (0, d.bG)([T.default], () => T.default.getUser(n)),
        o = (0, d.bG)([_.Ay], () => _.Ay.getMember(t.id, n)?.nick, [t.id, n]),
        c = (0, d.bG)([v.A], () => v.A.hidePersonalInformation);
    return null == r
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: S.Cv,
              children: [
                  (0, i.jsx)(u.euF, {
                      className: S.Sl,
                      src: r.getAvatarURL(t.id, 24),
                      "aria-label": r.username,
                      size: u._3J.SIZE_24,
                  }),
                  (0, i.jsx)(u.Text, {
                      className: S.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: o ?? r.username,
                  }),
                  c
                      ? null
                      : (0, i.jsx)(u.Text, {
                            className: S.Tc,
                            variant: "text-sm/normal",
                            children: C.Ay.getUserTag(r),
                        }),
                  l ? (0, i.jsx)(k, { tooltipText: s }) : null,
              ],
          });
}
function k(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(c.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: S.hz,
            children: (0, i.jsx)(u.XAi, { size: "xs", color: "currentColor" }),
        }),
    });
}
