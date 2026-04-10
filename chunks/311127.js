"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(136722),
    l = n(158954),
    a = n(311907),
    c = n(397927),
    o = n(260509),
    u = n(34457),
    d = n(696451),
    _ = n(317525),
    E = n(71393),
    A = n(287809),
    m = n(488926),
    I = n(661191),
    T = n(529942),
    g = n(164956),
    N = n(209700),
    f = n(652215),
    p = n(985018),
    C = n(698222);
function h(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        h = (0, a.bG)([E.A], () => E.A.getGuild(t)),
        R = (0, a.bG)([_.A], () => _.A.getRolesSnapshot(t)),
        x = (0, a.bG)([_.A], () => _.A.getSortedRoles(t)),
        { impersonateType: O, viewingRoles: M } = (0, a.cf)([g.A], () => ({
            impersonateType: g.A.getImpersonateType(t),
            viewingRoles: g.A.getViewingRoles(t),
        })),
        D = O === N._.SERVER_SHOP,
        U = (0, a.bG)([d.Ay], () => (null != n ? d.Ay.getTrueMember(t, n.id) : null)),
        P = null != h ? R[(0, o.af)(h)] : null,
        [L, v] = r.useState(() => {
            let e = null == M ? [] : I.default.keys(M);
            return null != P && e.push(P.id), e;
        }),
        y = r.useRef(h);
    r.useEffect(() => {
        let e = {},
            t = y.current;
        if (null != t && null != O) {
            for (let t of L) {
                let n = R[t];
                null != n && (e[t] = n);
            }
            (0, T.IA)(t.id, { type: O, roles: e });
        }
    }, [L, O, R]);
    let j = null != h && null != n && null != U ? x.find((e) => U.roles.includes(e.id)) : void 0,
        k = r.useMemo(
            () =>
                null != h && null != n
                    ? x
                          .filter((e) => !(0, u.Oy)(e))
                          .filter((e) => !D || e.tags?.subscription_listing_id != null)
                          .filter((e) => j?.id === e.id || m.wO(h, n.id, j, e))
                    : [],
            [h, n, D, j, x],
        ),
        b = r.useMemo(() => {
            let e = Array.from(k).map((e) => ({
                leading: S(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != h &&
                    null != P &&
                    e.push({ leading: S(P), value: P.id, label: P.name, id: P.id.toString(), disabled: !0 }),
                e
            );
        }, [k, h, P]);
    if (null == n || null == h || null == U) return null;
    let G = {};
    return (U.roles.forEach((e) => {
        let t = R[e];
        null != t && (G[t.id] = t);
    }),
    s.zy(m.aH({ forceRoles: G, context: h }), s.kg(f.xBc.MANAGE_GUILD, f.xBc.MANAGE_ROLES)) || (0, o.bM)(h, n))
        ? (0, i.jsx)("div", {
              className: C.kL,
              children: (0, i.jsxs)(c.iS7, {
                  selectionMode: "multiple",
                  options: b,
                  value: L,
                  onSelectionChange: (e) => {
                      v(e);
                  },
                  children: [
                      (0, i.jsx)(c.a32, { hideTags: !0, autoFocus: !0, placeholder: p.intl.string(p.t.Sojqsr) }),
                      (0, i.jsx)(c.X2W, { renderListItem: (e) => (0, i.jsx)(l.c$x, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(c.Text, { variant: "text-md/medium", children: p.intl.string(p.t.MNSTbY) });
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
