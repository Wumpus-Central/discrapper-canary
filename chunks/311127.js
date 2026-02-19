n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(136722),
    r = n(158954),
    s = n(311907),
    o = n(397927),
    c = n(260509),
    d = n(34457),
    u = n(696451),
    m = n(317525),
    _ = n(71393),
    A = n(287809),
    h = n(488926),
    f = n(661191),
    E = n(529942),
    g = n(164956),
    p = n(209700),
    x = n(652215),
    C = n(985018),
    I = n(110927);
function T(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        T = (0, s.bG)([_.A], () => _.A.getGuild(t)),
        S = (0, s.bG)([m.A], () => m.A.getRolesSnapshot(t)),
        R = (0, s.bG)([m.A], () => m.A.getSortedRoles(t)),
        { impersonateType: v, viewingRoles: M } = (0, s.cf)([g.A], () => ({
            impersonateType: g.A.getImpersonateType(t),
            viewingRoles: g.A.getViewingRoles(t),
        })),
        j = v === p._.SERVER_SHOP,
        O = (0, s.bG)([u.Ay], () => (null != n ? u.Ay.getTrueMember(t, n.id) : null)),
        b = null != T ? S[(0, c.af)(T)] : null,
        [y, L] = l.useState(() => {
            let e = null == M ? [] : f.default.keys(M);
            return null != b && e.push(b.id), e;
        }),
        D = l.useRef(T);
    l.useEffect(() => {
        let e = {},
            t = D.current;
        if (null != t && null != v) {
            for (let t of y) {
                let n = S[t];
                null != n && (e[t] = n);
            }
            (0, E.IA)(t.id, { type: v, roles: e });
        }
    }, [y, v, S]);
    let U = null != T && null != n && null != O ? R.find((e) => O.roles.includes(e.id)) : void 0,
        P = l.useMemo(
            () =>
                null != T && null != n
                    ? R.filter((e) => !(0, d.Oy)(e))
                          .filter((e) => !j || e.tags?.subscription_listing_id != null)
                          .filter((e) => U?.id === e.id || h.wO(T, n.id, U, e))
                    : [],
            [T, n, j, U, R],
        ),
        k = l.useMemo(() => {
            let e = Array.from(P).map((e) => ({
                leading: N(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != T &&
                    null != b &&
                    e.push({ leading: N(b), value: b.id, label: b.name, id: b.id.toString(), disabled: !0 }),
                e
            );
        }, [P, T, b]);
    if (null == n || null == T || null == O) return null;
    let G = {};
    return (O.roles.forEach((e) => {
        let t = S[e];
        null != t && (G[t.id] = t);
    }),
    a.zy(h.aH({ forceRoles: G, context: T }), a.kg(x.xBc.MANAGE_GUILD, x.xBc.MANAGE_ROLES)) || (0, c.bM)(T, n))
        ? (0, i.jsx)("div", {
              className: I.kL,
              children: (0, i.jsxs)(o.iS7, {
                  selectionMode: "multiple",
                  options: k,
                  value: y,
                  onSelectionChange: (e) => {
                      L(e);
                  },
                  children: [
                      (0, i.jsx)(o.a32, { hideTags: !0, autoFocus: !0, placeholder: C.intl.string(C.t.Sojqsr) }),
                      (0, i.jsx)(o.X2W, { renderListItem: (e) => (0, i.jsx)(r.c$x, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(o.Text, { variant: "text-md/medium", children: C.intl.string(C.t.MNSTbY) });
}
function N(e) {
    return () =>
        (0, i.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("circle", { cx: "6", cy: "6", r: "6", fill: e.colorString ?? "currentColor" }),
        });
}
