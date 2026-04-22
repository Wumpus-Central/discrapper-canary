"use strict";
n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(136722),
    s = n(44482),
    a = n(311907),
    o = n(834730),
    c = n(389723),
    u = n(260509),
    d = n(34457),
    _ = n(696451),
    E = n(317525),
    A = n(71393),
    m = n(287809),
    I = n(488926),
    T = n(661191),
    N = n(529942),
    g = n(164956),
    p = n(209700),
    C = n(652215),
    f = n(985018),
    h = n(59742);
function R(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([m.default], () => m.default.getCurrentUser()),
        R = (0, a.bG)([A.A], () => A.A.getGuild(t)),
        O = (0, a.bG)([E.A], () => E.A.getRolesSnapshot(t)),
        x = (0, a.bG)([E.A], () => E.A.getSortedRoles(t)),
        { impersonateType: M, viewingRoles: D } = (0, a.cf)([g.A], () => ({
            impersonateType: g.A.getImpersonateType(t),
            viewingRoles: g.A.getViewingRoles(t),
        })),
        P = M === p._.SERVER_SHOP,
        U = (0, a.bG)([_.Ay], () => (null != n ? _.Ay.getTrueMember(t, n.id) : null)),
        y = null != R ? O[(0, u.af)(R)] : null,
        [L, v] = r.useState(() => {
            let e = null == D ? [] : T.default.keys(D);
            return null != y && e.push(y.id), e;
        }),
        j = r.useRef(R);
    r.useEffect(() => {
        let e = {},
            t = j.current;
        if (null != t && null != M) {
            for (let t of L) {
                let n = O[t];
                null != n && (e[t] = n);
            }
            (0, N.IA)(t.id, { type: M, roles: e });
        }
    }, [L, M, O]);
    let k = null != R && null != n && null != U ? x.find((e) => U.roles.includes(e.id)) : void 0,
        b = r.useMemo(
            () =>
                null != R && null != n
                    ? x
                          .filter((e) => !(0, d.Oy)(e))
                          .filter((e) => !P || e.tags?.subscription_listing_id != null)
                          .filter((e) => k?.id === e.id || I.wO(R, n.id, k, e))
                    : [],
            [R, n, P, k, x],
        ),
        G = r.useMemo(() => {
            let e = Array.from(b).map((e) => ({
                leading: S(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != R &&
                    null != y &&
                    e.push({ leading: S(y), value: y.id, label: y.name, id: y.id.toString(), disabled: !0 }),
                e
            );
        }, [b, R, y]);
    if (null == n || null == R || null == U) return null;
    let w = {};
    return (U.roles.forEach((e) => {
        let t = O[e];
        null != t && (w[t.id] = t);
    }),
    l.zy(I.aH({ forceRoles: w, context: R }), l.kg(C.xBc.MANAGE_GUILD, C.xBc.MANAGE_ROLES)) || (0, u.bM)(R, n))
        ? (0, i.jsx)("div", {
              className: h.kL,
              children: (0, i.jsxs)(c.iS, {
                  selectionMode: "multiple",
                  options: G,
                  value: L,
                  onSelectionChange: (e) => {
                      v(e);
                  },
                  children: [
                      (0, i.jsx)(c.a3, { hideTags: !0, autoFocus: !0, placeholder: f.intl.string(f.t.Sojqsr) }),
                      (0, i.jsx)(c.X2, { renderListItem: (e) => (0, i.jsx)(s.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(o.E, { variant: "text-md/medium", children: f.intl.string(f.t.MNSTbY) });
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
