n.d(t, {
    A: () => E,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(136722),
    a = n(311907),
    s = n(389723),
    o = n(332661),
    c = n(397927),
    u = n(260509),
    d = n(34457),
    p = n(696451),
    m = n(317525),
    f = n(71393),
    g = n(287809),
    h = n(488926),
    _ = n(661191),
    b = n(529942),
    A = n(164956),
    y = n(209700),
    v = n(652215),
    x = n(985018),
    O = n(110927);

function E(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        E = (0, a.bG)([f.A], () => f.A.getGuild(t)),
        C = (0, a.bG)([m.A], () => m.A.getRolesSnapshot(t)),
        I = (0, a.bG)([m.A], () => m.A.getSortedRoles(t)),
        { impersonateType: S, viewingRoles: T } = (0, a.cf)([A.A], () => ({
            impersonateType: A.A.getImpersonateType(t),
            viewingRoles: A.A.getViewingRoles(t),
        })),
        N = S === y._.SERVER_SHOP,
        P = (0, a.bG)([p.Ay], () => (null != n ? p.Ay.getTrueMember(t, n.id) : null)),
        w = null != E ? C[(0, u.af)(E)] : null,
        [R, D] = i.useState(() => {
            let e = null == T ? [] : _.default.keys(T);
            return null != w && e.push(w.id), e;
        }),
        L = i.useRef(E);
    i.useEffect(() => {
        let e = {},
            t = L.current;
        if (null != t && null != S) {
            for (let t of R) {
                let n = C[t];
                null != n && (e[t] = n);
            }
            (0, b.IA)(t.id, {
                type: S,
                roles: e,
            });
        }
    }, [R, S, C]);
    let M = null != E && null != n && null != P ? I.find((e) => P.roles.includes(e.id)) : void 0,
        k = i.useMemo(
            () =>
                null != E && null != n
                    ? I.filter((e) => !(0, d.Oy)(e))
                          .filter((e) => {
                              var t;
                              return !N || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == M ? void 0 : M.id) === e.id || h.wO(E, n.id, M, e))
                    : [],
            [E, n, N, M, I],
        ),
        U = i.useMemo(() => {
            let e = Array.from(k).map((e) => ({
                leading: j(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != E &&
                    null != w &&
                    e.push({
                        leading: j(w),
                        value: w.id,
                        label: w.name,
                        id: w.id.toString(),
                        disabled: !0,
                    }),
                e
            );
        }, [k, E, w]);
    if (null == n || null == E || null == P) return null;
    let G = {};
    return (P.roles.forEach((e) => {
        let t = C[e];
        null != t && (G[t.id] = t);
    }),
    l.zy(
        h.aH({
            forceRoles: G,
            context: E,
        }),
        l.kg(v.xBc.MANAGE_GUILD, v.xBc.MANAGE_ROLES),
    ) || (0, u.bM)(E, n))
        ? (0, r.jsx)("div", {
              className: O.kL,
              children: (0, r.jsxs)(s.iS, {
                  selectionMode: "multiple",
                  options: U,
                  value: R,
                  onSelectionChange: (e) => {
                      D(e);
                  },
                  children: [
                      (0, r.jsx)(s.a3, {
                          hideTags: !0,
                          autoFocus: !0,
                          placeholder: x.intl.string(x.t.Sojqsr),
                      }),
                      (0, r.jsx)(s.X2, {
                          renderListItem: (e) =>
                              (0, r.jsx)(
                                  o.c,
                                  (function (e) {
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
                                                  var r;
                                                  (r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0,
                                                            })
                                                          : (e[t] = r);
                                              });
                                      }
                                      return e;
                                  })({}, e),
                              ),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              children: x.intl.string(x.t.MNSTbY),
          });
}

function j(e) {
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
