n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(136722),
    r = n(158954),
    s = n(311907),
    o = n(397927),
    d = n(260509),
    c = n(34457),
    u = n(696451),
    m = n(317525),
    _ = n(71393),
    h = n(287809),
    p = n(488926),
    g = n(661191),
    A = n(529942),
    f = n(164956),
    x = n(209700),
    E = n(652215),
    C = n(985018),
    I = n(110927);
function T(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        T = (0, s.bG)([_.A], () => _.A.getGuild(t)),
        N = (0, s.bG)([m.A], () => m.A.getRolesSnapshot(t)),
        S = (0, s.bG)([m.A], () => m.A.getSortedRoles(t)),
        { impersonateType: b, viewingRoles: y } = (0, s.cf)([f.A], () => ({
            impersonateType: f.A.getImpersonateType(t),
            viewingRoles: f.A.getViewingRoles(t),
        })),
        j = b === x._.SERVER_SHOP,
        R = (0, s.bG)([u.Ay], () => (null != n ? u.Ay.getTrueMember(t, n.id) : null)),
        L = null != T ? N[(0, d.af)(T)] : null,
        [M, O] = l.useState(() => {
            let e = null == y ? [] : g.default.keys(y);
            return null != L && e.push(L.id), e;
        }),
        P = l.useRef(T);
    l.useEffect(() => {
        let e = {},
            t = P.current;
        if (null != t && null != b) {
            for (let t of M) {
                let n = N[t];
                null != n && (e[t] = n);
            }
            (0, A.IA)(t.id, { type: b, roles: e });
        }
    }, [M, b, N]);
    let D = null != T && null != n && null != R ? S.find((e) => R.roles.includes(e.id)) : void 0,
        k = l.useMemo(
            () =>
                null != T && null != n
                    ? S.filter((e) => !(0, c.Oy)(e))
                          .filter((e) => !j || e.tags?.subscription_listing_id != null)
                          .filter((e) => D?.id === e.id || p.wO(T, n.id, D, e))
                    : [],
            [T, n, j, D, S],
        ),
        U = l.useMemo(() => {
            let e = Array.from(k).map((e) => ({
                leading: v(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != T &&
                    null != L &&
                    e.push({ leading: v(L), value: L.id, label: L.name, id: L.id.toString(), disabled: !0 }),
                e
            );
        }, [k, T, L]);
    if (null == n || null == T || null == R) return null;
    let w = {};
    return (R.roles.forEach((e) => {
        let t = N[e];
        null != t && (w[t.id] = t);
    }),
    a.zy(p.aH({ forceRoles: w, context: T }), a.kg(E.xBc.MANAGE_GUILD, E.xBc.MANAGE_ROLES)) || (0, d.bM)(T, n))
        ? (0, i.jsx)("div", {
              className: I.kL,
              children: (0, i.jsxs)(o.iS7, {
                  selectionMode: "multiple",
                  options: U,
                  value: M,
                  onSelectionChange: (e) => {
                      O(e);
                  },
                  children: [
                      (0, i.jsx)(o.a32, { hideTags: !0, autoFocus: !0, placeholder: C.intl.string(C.t.Sojqsr) }),
                      (0, i.jsx)(o.X2W, { renderListItem: (e) => (0, i.jsx)(r.c$x, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(o.Text, { variant: "text-md/medium", children: C.intl.string(C.t.MNSTbY) });
}
function v(e) {
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
