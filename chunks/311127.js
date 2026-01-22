n.d(t, { A: () => T }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(136722),
    s = n(311907),
    o = n(389723),
    l = n(332661),
    c = n(397927),
    u = n(260509),
    d = n(34457),
    f = n(696451),
    p = n(317525),
    _ = n(71393),
    h = n(287809),
    m = n(488926),
    g = n(661191),
    E = n(529942),
    b = n(164956),
    y = n(209700),
    O = n(652215),
    A = n(985018),
    v = n(110927);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        S = (0, s.bG)([_.A], () => _.A.getGuild(t)),
        T = (0, s.bG)([p.A], () => p.A.getRolesSnapshot(t)),
        N = (0, s.bG)([p.A], () => p.A.getSortedRoles(t)),
        { impersonateType: R, viewingRoles: w } = (0, s.cf)([b.A], () => ({
            impersonateType: b.A.getImpersonateType(t),
            viewingRoles: b.A.getViewingRoles(t),
        })),
        P = R === y._.SERVER_SHOP,
        D = (0, s.bG)([f.Ay], () => (null != n ? f.Ay.getTrueMember(t, n.id) : null)),
        x = null != S ? T[(0, u.af)(S)] : null,
        [L, j] = i.useState(() => {
            let e = null == w ? [] : g.default.keys(w);
            return null != x && e.push(x.id), e;
        }),
        M = i.useRef(S);
    i.useEffect(() => {
        let e = {},
            t = M.current;
        if (null != t && null != R) {
            for (let t of L) {
                let n = T[t];
                null != n && (e[t] = n);
            }
            (0, E.IA)(t.id, {
                type: R,
                roles: e,
            });
        }
    }, [L, R, T]);
    let k = null != S && null != n && null != D ? N.find((e) => D.roles.includes(e.id)) : void 0,
        U = i.useMemo(
            () =>
                null != S && null != n
                    ? N.filter((e) => !(0, d.Oy)(e))
                          .filter((e) => {
                              var t;
                              return !P || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == k ? void 0 : k.id) === e.id || m.wO(S, n.id, k, e))
                    : [],
            [S, n, P, k, N],
        ),
        G = i.useMemo(() => {
            let e = Array.from(U).map((e) => ({
                leading: C(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != S &&
                    null != x &&
                    e.push({
                        leading: C(x),
                        value: x.id,
                        label: x.name,
                        id: x.id.toString(),
                        disabled: !0,
                    }),
                e
            );
        }, [U, S, x]);
    if (null == n || null == S || null == D) return null;
    let V = {};
    return (D.roles.forEach((e) => {
        let t = T[e];
        null != t && (V[t.id] = t);
    }),
    a.zy(
        m.aH({
            forceRoles: V,
            context: S,
        }),
        a.kg(O.xBc.MANAGE_GUILD, O.xBc.MANAGE_ROLES),
    ) || (0, u.bM)(S, n))
        ? (0, r.jsx)("div", {
              className: v.kL,
              children: (0, r.jsxs)(o.iS, {
                  selectionMode: "multiple",
                  options: G,
                  value: L,
                  onSelectionChange: (e) => {
                      j(e);
                  },
                  children: [
                      (0, r.jsx)(o.a3, {
                          hideTags: !0,
                          autoFocus: !0,
                          placeholder: A.intl.string(A.t.Sojqsr),
                      }),
                      (0, r.jsx)(o.X2, { renderListItem: (e) => (0, r.jsx)(l.c, I({}, e)) }),
                  ],
              }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              children: A.intl.string(A.t.MNSTbY),
          });
}
function C(e) {
    return () => {
        var t;
        return (0, r.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("circle", {
                cx: "6",
                cy: "6",
                r: "6",
                fill: null != (t = e.colorString) ? t : "currentColor",
            }),
        });
    };
}
