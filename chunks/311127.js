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
    T = n(661191),
    I = n(529942),
    N = n(164956),
    g = n(209700),
    f = n(652215),
    C = n(985018),
    h = n(60697);
function p(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        p = (0, s.bG)([A.A], () => A.A.getGuild(t)),
        x = (0, s.bG)([_.A], () => _.A.getRolesSnapshot(t)),
        R = (0, s.bG)([_.A], () => _.A.getSortedRoles(t)),
        { impersonateType: O, viewingRoles: M } = (0, s.cf)([N.A], () => ({
            impersonateType: N.A.getImpersonateType(t),
            viewingRoles: N.A.getViewingRoles(t),
        })),
        D = O === g._.SERVER_SHOP,
        L = (0, s.bG)([u.Ay], () => (null != n ? u.Ay.getTrueMember(t, n.id) : null)),
        U = null != p ? x[(0, c.af)(p)] : null,
        [P, v] = l.useState(() => {
            let e = null == M ? [] : T.default.keys(M);
            return null != U && e.push(U.id), e;
        }),
        j = l.useRef(p);
    l.useEffect(() => {
        let e = {},
            t = j.current;
        if (null != t && null != O) {
            for (let t of P) {
                let n = x[t];
                null != n && (e[t] = n);
            }
            (0, I.IA)(t.id, { type: O, roles: e });
        }
    }, [P, O, x]);
    let y = null != p && null != n && null != L ? R.find((e) => L.roles.includes(e.id)) : void 0,
        k = l.useMemo(
            () =>
                null != p && null != n
                    ? R.filter((e) => !(0, d.Oy)(e))
                          .filter((e) => !D || e.tags?.subscription_listing_id != null)
                          .filter((e) => y?.id === e.id || E.wO(p, n.id, y, e))
                    : [],
            [p, n, D, y, R],
        ),
        b = l.useMemo(() => {
            let e = Array.from(k).map((e) => ({
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
        }, [k, p, U]);
    if (null == n || null == p || null == L) return null;
    let G = {};
    return (L.roles.forEach((e) => {
        let t = x[e];
        null != t && (G[t.id] = t);
    }),
    a.zy(E.aH({ forceRoles: G, context: p }), a.kg(f.xBc.MANAGE_GUILD, f.xBc.MANAGE_ROLES)) || (0, c.bM)(p, n))
        ? (0, i.jsx)("div", {
              className: h.kL,
              children: (0, i.jsxs)(o.iS7, {
                  selectionMode: "multiple",
                  options: b,
                  value: P,
                  onSelectionChange: (e) => {
                      v(e);
                  },
                  children: [
                      (0, i.jsx)(o.a32, { hideTags: !0, autoFocus: !0, placeholder: C.intl.string(C.t.Sojqsr) }),
                      (0, i.jsx)(o.X2W, { renderListItem: (e) => (0, i.jsx)(r.c$x, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(o.Text, { variant: "text-md/medium", children: C.intl.string(C.t.MNSTbY) });
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
