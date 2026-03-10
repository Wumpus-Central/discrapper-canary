n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(136722),
    r = n(158954),
    s = n(311907),
    o = n(397927),
    c = n(260509),
    d = n(34457),
    u = n(696451),
    _ = n(317525),
    A = n(71393),
    m = n(287809),
    E = n(488926),
    I = n(661191),
    T = n(529942),
    f = n(164956),
    N = n(209700),
    C = n(652215),
    g = n(985018),
    h = n(110927);
function p(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        p = (0, s.bG)([A.A], () => A.A.getGuild(t)),
        R = (0, s.bG)([_.A], () => _.A.getRolesSnapshot(t)),
        x = (0, s.bG)([_.A], () => _.A.getSortedRoles(t)),
        { impersonateType: O, viewingRoles: M } = (0, s.cf)([f.A], () => ({
            impersonateType: f.A.getImpersonateType(t),
            viewingRoles: f.A.getViewingRoles(t),
        })),
        D = O === N._.SERVER_SHOP,
        P = (0, s.bG)([u.Ay], () => (null != n ? u.Ay.getTrueMember(t, n.id) : null)),
        U = null != p ? R[(0, c.af)(p)] : null,
        [v, L] = l.useState(() => {
            let e = null == M ? [] : I.default.keys(M);
            return null != U && e.push(U.id), e;
        }),
        y = l.useRef(p);
    l.useEffect(() => {
        let e = {},
            t = y.current;
        if (null != t && null != O) {
            for (let t of v) {
                let n = R[t];
                null != n && (e[t] = n);
            }
            (0, T.IA)(t.id, { type: O, roles: e });
        }
    }, [v, O, R]);
    let j = null != p && null != n && null != P ? x.find((e) => P.roles.includes(e.id)) : void 0,
        b = l.useMemo(
            () =>
                null != p && null != n
                    ? x
                          .filter((e) => !(0, d.Oy)(e))
                          .filter((e) => !D || e.tags?.subscription_listing_id != null)
                          .filter((e) => j?.id === e.id || E.wO(p, n.id, j, e))
                    : [],
            [p, n, D, j, x],
        ),
        k = l.useMemo(() => {
            let e = Array.from(b).map((e) => ({
                leading: S(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != p &&
                    null != U &&
                    e.push({ leading: S(U), value: U.id, label: U.name, id: U.id.toString(), disabled: !0 }),
                e
            );
        }, [b, p, U]);
    if (null == n || null == p || null == P) return null;
    let G = {};
    return (P.roles.forEach((e) => {
        let t = R[e];
        null != t && (G[t.id] = t);
    }),
    a.zy(E.aH({ forceRoles: G, context: p }), a.kg(C.xBc.MANAGE_GUILD, C.xBc.MANAGE_ROLES)) || (0, c.bM)(p, n))
        ? (0, i.jsx)("div", {
              className: h.kL,
              children: (0, i.jsxs)(o.iS7, {
                  selectionMode: "multiple",
                  options: k,
                  value: v,
                  onSelectionChange: (e) => {
                      L(e);
                  },
                  children: [
                      (0, i.jsx)(o.a32, { hideTags: !0, autoFocus: !0, placeholder: g.intl.string(g.t.Sojqsr) }),
                      (0, i.jsx)(o.X2W, { renderListItem: (e) => (0, i.jsx)(r.c$x, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(o.Text, { variant: "text-md/medium", children: g.intl.string(g.t.MNSTbY) });
}
function S(e) {
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
