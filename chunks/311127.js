n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(136722),
    r = n(158954),
    s = n(311907),
    o = n(397927),
    c = n(260509),
    d = n(34457),
    u = n(696451),
    _ = n(317525),
    m = n(71393),
    A = n(287809),
    E = n(488926),
    I = n(661191),
    T = n(529942),
    f = n(164956),
    N = n(209700),
    C = n(652215),
    g = n(985018),
    p = n(363721);
function h(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        h = (0, s.bG)([m.A], () => m.A.getGuild(t)),
        x = (0, s.bG)([_.A], () => _.A.getRolesSnapshot(t)),
        S = (0, s.bG)([_.A], () => _.A.getSortedRoles(t)),
        { impersonateType: O, viewingRoles: M } = (0, s.cf)([f.A], () => ({
            impersonateType: f.A.getImpersonateType(t),
            viewingRoles: f.A.getViewingRoles(t),
        })),
        D = O === N._.SERVER_SHOP,
        P = (0, s.bG)([u.Ay], () => (null != n ? u.Ay.getTrueMember(t, n.id) : null)),
        U = null != h ? x[(0, c.af)(h)] : null,
        [v, L] = a.useState(() => {
            let e = null == M ? [] : I.default.keys(M);
            return null != U && e.push(U.id), e;
        }),
        j = a.useRef(h);
    a.useEffect(() => {
        let e = {},
            t = j.current;
        if (null != t && null != O) {
            for (let t of v) {
                let n = x[t];
                null != n && (e[t] = n);
            }
            (0, T.IA)(t.id, { type: O, roles: e });
        }
    }, [v, O, x]);
    let y = null != h && null != n && null != P ? S.find((e) => P.roles.includes(e.id)) : void 0,
        b = a.useMemo(
            () =>
                null != h && null != n
                    ? S.filter((e) => !(0, d.Oy)(e))
                          .filter((e) => !D || e.tags?.subscription_listing_id != null)
                          .filter((e) => y?.id === e.id || E.wO(h, n.id, y, e))
                    : [],
            [h, n, D, y, S],
        ),
        k = a.useMemo(() => {
            let e = Array.from(b).map((e) => ({
                leading: R(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != h &&
                    null != U &&
                    e.push({ leading: R(U), value: U.id, label: U.name, id: U.id.toString(), disabled: !0 }),
                e
            );
        }, [b, h, U]);
    if (null == n || null == h || null == P) return null;
    let G = {};
    return (P.roles.forEach((e) => {
        let t = x[e];
        null != t && (G[t.id] = t);
    }),
    l.zy(E.aH({ forceRoles: G, context: h }), l.kg(C.xBc.MANAGE_GUILD, C.xBc.MANAGE_ROLES)) || (0, c.bM)(h, n))
        ? (0, i.jsx)("div", {
              className: p.kL,
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
function R(e) {
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
