n.d(t, { A: () => C }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(136722),
    a = n(44482),
    o = n(17928),
    s = n(834730),
    u = n(732771),
    d = n(260509),
    c = n(34457),
    E = n(696451),
    _ = n(317525),
    A = n(71393),
    I = n(287809),
    h = n(488926),
    T = n(935208),
    S = n(529942),
    p = n(164956),
    N = n(209700),
    O = n(652215),
    f = n(985018),
    g = n(59742);
function C(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        C = (0, o.bG)([A.A], () => A.A.getGuild(t)),
        U = (0, o.bG)([_.A], () => _.A.getRolesSnapshot(t)),
        D = (0, o.bG)([_.A], () => _.A.getSortedRoles(t)),
        { impersonateType: m, viewingRoles: y } = (0, o.cf)([p.A], () => ({
            impersonateType: p.A.getImpersonateType(t),
            viewingRoles: p.A.getViewingRoles(t),
        })),
        L = m === N._.SERVER_SHOP,
        M = (0, o.bG)([E.Ay], () => (null != n ? E.Ay.getTrueMember(t, n.id) : null)),
        b = null != C ? U[(0, d.af)(C)] : null,
        [G, v] = l.useState(() => {
            let e = null == y ? [] : T.default.keys(y);
            return null != b && e.push(b.id), e;
        }),
        P = l.useRef(C);
    l.useEffect(() => {
        let e = {},
            t = P.current;
        if (null != t && null != m) {
            for (let t of G) {
                let n = U[t];
                null != n && (e[t] = n);
            }
            (0, S.IA)(t.id, { type: m, roles: e });
        }
    }, [G, m, U]);
    let w = null != C && null != n && null != M ? D.find((e) => M.roles.includes(e.id)) : void 0,
        x = l.useMemo(
            () =>
                null != C && null != n
                    ? D.filter((e) => !(0, c.Oy)(e))
                          .filter((e) => !L || e.tags?.subscription_listing_id != null)
                          .filter((e) => w?.id === e.id || h.wO(C, n.id, w, e))
                    : [],
            [C, n, L, w, D],
        ),
        B = l.useMemo(() => {
            let e = Array.from(x).map((e) => ({
                leading: R(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != C &&
                    null != b &&
                    e.push({ leading: R(b), value: b.id, label: b.name, id: b.id.toString(), disabled: !0 }),
                e
            );
        }, [x, C, b]);
    if (null == n || null == C || null == M) return null;
    let F = {};
    return (M.roles.forEach((e) => {
        let t = U[e];
        null != t && (F[t.id] = t);
    }),
    r.zy(h.aH({ forceRoles: F, context: C }), r.kg(O.xBc.MANAGE_GUILD, O.xBc.MANAGE_ROLES)) || (0, d.bM)(C, n))
        ? (0, i.jsx)("div", {
              className: g.kL,
              children: (0, i.jsxs)(u.iS, {
                  selectionMode: "multiple",
                  options: B,
                  value: G,
                  onSelectionChange: (e) => {
                      v(e);
                  },
                  children: [
                      (0, i.jsx)(u.a3, { hideTags: !0, autoFocus: !0, placeholder: f.intl.string(f.t.Sojqsr) }),
                      (0, i.jsx)(u.X2, { renderListItem: (e) => (0, i.jsx)(a.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(s.E, { variant: "text-md/medium", children: f.intl.string(f.t.MNSTbY) });
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
