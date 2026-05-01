l.d(t, { A: () => C }), l(321073);
var n = l(627968),
    i = l(64700),
    r = l(136722),
    s = l(44482),
    a = l(17928),
    u = l(834730),
    o = l(732771),
    c = l(260509),
    d = l(34457),
    E = l(696451),
    h = l(317525),
    _ = l(71393),
    T = l(287809),
    A = l(488926),
    S = l(935208),
    I = l(529942),
    p = l(164956),
    f = l(209700),
    N = l(652215),
    g = l(985018),
    O = l(59742);
function C(e) {
    let { guildId: t } = e,
        l = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
        C = (0, a.bG)([_.A], () => _.A.getGuild(t)),
        y = (0, a.bG)([h.A], () => h.A.getRolesSnapshot(t)),
        U = (0, a.bG)([h.A], () => h.A.getSortedRoles(t)),
        { impersonateType: D, viewingRoles: m } = (0, a.cf)([p.A], () => ({
            impersonateType: p.A.getImpersonateType(t),
            viewingRoles: p.A.getViewingRoles(t),
        })),
        L = D === f._.SERVER_SHOP,
        M = (0, a.bG)([E.Ay], () => (null != l ? E.Ay.getTrueMember(t, l.id) : null)),
        v = null != C ? y[(0, c.af)(C)] : null,
        [b, x] = i.useState(() => {
            let e = null == m ? [] : S.default.keys(m);
            return null != v && e.push(v.id), e;
        }),
        G = i.useRef(C);
    i.useEffect(() => {
        let e = {},
            t = G.current;
        if (null != t && null != D) {
            for (let t of b) {
                let l = y[t];
                null != l && (e[t] = l);
            }
            (0, I.IA)(t.id, { type: D, roles: e });
        }
    }, [b, D, y]);
    let w = null != C && null != l && null != M ? U.find((e) => M.roles.includes(e.id)) : void 0,
        P = i.useMemo(
            () =>
                null != C && null != l
                    ? U.filter((e) => !(0, d.Oy)(e))
                          .filter((e) => !L || e.tags?.subscription_listing_id != null)
                          .filter((e) => w?.id === e.id || A.wO(C, l.id, w, e))
                    : [],
            [C, l, L, w, U],
        ),
        j = i.useMemo(() => {
            let e = Array.from(P).map((e) => ({
                leading: R(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != C &&
                    null != v &&
                    e.push({ leading: R(v), value: v.id, label: v.name, id: v.id.toString(), disabled: !0 }),
                e
            );
        }, [P, C, v]);
    if (null == l || null == C || null == M) return null;
    let k = {};
    return (M.roles.forEach((e) => {
        let t = y[e];
        null != t && (k[t.id] = t);
    }),
    r.zy(A.aH({ forceRoles: k, context: C }), r.kg(N.xBc.MANAGE_GUILD, N.xBc.MANAGE_ROLES)) || (0, c.bM)(C, l))
        ? (0, n.jsx)("div", {
              className: O.kL,
              children: (0, n.jsxs)(o.iS, {
                  selectionMode: "multiple",
                  options: j,
                  value: b,
                  onSelectionChange: (e) => {
                      x(e);
                  },
                  children: [
                      (0, n.jsx)(o.a3, { hideTags: !0, autoFocus: !0, placeholder: g.intl.string(g.t.Sojqsr) }),
                      (0, n.jsx)(o.X2, { renderListItem: (e) => (0, n.jsx)(s.c, { ...e }) }),
                  ],
              }),
          })
        : (0, n.jsx)(u.E, { variant: "text-md/medium", children: g.intl.string(g.t.MNSTbY) });
}
function R(e) {
    return () =>
        (0, n.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("circle", { cx: "6", cy: "6", r: "6", fill: e.colorString ?? "currentColor" }),
        });
}
