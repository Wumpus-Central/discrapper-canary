n.d(e, { default: () => L }), n(896048), n(321073);
var i = n(627968),
    o = n(64700),
    a = n(136722),
    s = n(311907),
    r = n(554146),
    l = n(827734),
    c = n(990078),
    d = n(732955),
    _ = n(397927),
    p = n(997509),
    u = n(636042),
    E = n(376092),
    S = n(317525),
    I = n(488926),
    N = n(45780),
    O = n(652215),
    h = n(49999),
    m = n(124759),
    T = n(985018),
    f = n(763481);
function y(t) {
    let { guild: e } = t,
        n = (0, s.bG)([S.A], () => S.A.getEveryoneRole(e));
    if (null == n) return null;
    let { name: o, color: a } = n;
    return (0, i.jsxs)("span", {
        className: f.xf,
        children: [
            (0, i.jsx)(_.WYI, {
                className: f.m4,
                color: a.toString(),
                background: !1,
                tooltip: !1,
            }),
            (0, i.jsx)(_.Text, {
                className: f.S3,
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children: o,
            }),
        ],
    });
}
let x = (t) => (t.toString() === O.xBc.MENTION_EVERYONE.toString() ? T.intl.string(T.t.yCpsQw) : (0, E.hx)(t));
function b(t) {
    let { permissions: e, step: n } = t;
    return 2 === n
        ? null
        : (0, i.jsxs)("div", {
              className: f.CZ,
              children: [
                  (0, i.jsx)(_.Text, {
                      className: f.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === n ? T.intl.string(T.t["0WZKI4"]) : T.intl.string(T.t.xU8RDk),
                  }),
                  (0, i.jsx)("div", {
                      className: f.lM,
                      children: e.map((t, e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: f.ce,
                                  children: [
                                      (0, i.jsx)("div", { className: 0 === n ? f.I0 : f.dT }),
                                      (0, i.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: x(t),
                                      }),
                                  ],
                              },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
function C(t) {
    let { permissions: e, step: n } = t;
    return 0 === e.length && 2 !== n
        ? null
        : (2 === n && (e = m.dR),
          (0, i.jsxs)("div", {
              className: f.CZ,
              children: [
                  (0, i.jsx)(_.Text, {
                      className: f.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === n ? T.intl.string(T.t.FgMS6i) : T.intl.string(T.t.Yo5qlq),
                  }),
                  (0, i.jsx)("div", {
                      className: f.lM,
                      children: e.map((t, e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: f.ce,
                                  children: [
                                      (0, i.jsx)("div", { className: f.xE }),
                                      (0, i.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: x(t),
                                      }),
                                  ],
                              },
                              e,
                          ),
                      ),
                  }),
              ],
          }));
}
function R(t) {
    let { permissions: e, step: n } = t,
        { enabledPermissions: o, disabledPermissions: a } = e;
    return 0 === o.length && 2 !== n
        ? null
        : (0, i.jsxs)("div", {
              className: f.tp,
              children: [
                  2 !== n
                      ? (0, i.jsx)(b, {
                            permissions: o,
                            step: n,
                        })
                      : null,
                  (0, i.jsx)(C, {
                      permissions: a,
                      step: n,
                  }),
              ],
          });
}
function g(t) {
    let { guild: e, permissions: n, step: o, canEveryoneModerate: a, isDefaultNotificationsAllMessages: s } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s
                ? (0, i.jsxs)("div", {
                      className: f.J_,
                      children: [
                          (0, i.jsx)(_.yr3, {
                              size: "md",
                              className: f.aV,
                              color: l.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: l.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(_.Text, {
                              variant: "text-md/normal",
                              children: T.intl.format(T.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, i.jsx)(c.m, {
                                          text: T.intl.string(T.t["3h2WyM"]),
                                          "aria-label": T.intl.string(T.t["3h2WyM"]),
                                          children: (0, i.jsx)(_.mir, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: f.Kk,
                                          }),
                                      }),
                              }),
                          }),
                      ],
                  })
                : null,
            a
                ? (0, i.jsxs)("div", {
                      className: f.J_,
                      children: [
                          (0, i.jsx)(_.yr3, {
                              size: "md",
                              className: f.aV,
                              color: l.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: l.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(_.Text, {
                              variant: "text-md/normal",
                              children: T.intl.string(T.t.LfeFFr),
                          }),
                          (0, i.jsx)(y, { guild: e }),
                      ],
                  })
                : null,
            (0, i.jsx)(R, {
                permissions: n,
                step: o,
            }),
        ],
    });
}
function L(t) {
    let { guild: e, canEveryoneModerate: n, isDefaultNotificationsAllMessages: s, transitionState: l, onClose: c } = t,
        [_, E] = o.useState(0),
        f = o.useMemo(() => {
            let t = [],
                n = [];
            return (
                m.dR.map((i) => {
                    I.Ib(i, e) ? t.push(i) : n.push(i);
                }),
                {
                    enabledPermissions: t,
                    disabledPermissions: n,
                }
            );
        }, [e]);
    if (null == e) return null;
    let y = () => {
            var t, i;
            let o, r;
            n &&
                ((o = S.A.getEveryoneRole(e)),
                (r = a.TF(o.permissions, m.e$)),
                (0, u.JY)(e.id, [
                    ((t = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    }),
                                )),
                                i.forEach(function (e) {
                                    var i;
                                    (i = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = i);
                                });
                        }
                        return t;
                    })({}, o)),
                    (i = i = { permissions: r }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                        : (function (t, e) {
                              var n = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(t);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    t),
                ])),
                s &&
                    (p.A.updateGuild({ defaultMessageNotifications: O.orn.ONLY_MENTIONS }),
                    p.A.saveGuild(e.id, { defaultMessageNotifications: O.orn.ONLY_MENTIONS }));
        },
        x = [
            ...(0 === _
                ? [
                      {
                          variant: "secondary",
                          text: T.intl.string(T.t.gWQZvr),
                          onClick: () => {
                              c(), (0, N._$)(r.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e.id, !0, h.i.DISMISS);
                          },
                      },
                  ]
                : []),
            {
                variant: "primary",
                text: 0 === _ ? (n ? T.intl.string(T.t.R7GC7b) : T.intl.string(T.t.iOSdAW)) : T.intl.string(T.t.mVuDq5),
                onClick: () => {
                    var t, i;
                    n ||
                        (y(),
                        c(),
                        (0, N._$)(
                            r.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                            null != (t = null == e ? void 0 : e.id) ? t : "",
                            !0,
                            h.i.PRIMARY,
                        )),
                        0 === _
                            ? (E(1), setTimeout(() => E(2), 3000))
                            : 2 === _ &&
                              (y(),
                              c(),
                              (0, N._$)(
                                  r.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                                  null != (i = null == e ? void 0 : e.id) ? i : "",
                                  !0,
                                  h.i.PRIMARY,
                              ));
                },
                loading: 1 === _,
            },
        ];
    return (0, i.jsx)(d.aFV, {
        transitionState: l,
        onClose: c,
        size: "md",
        title: n ? T.intl.string(T.t["7/ux15"]) : T.intl.string(T.t.sRcn4z),
        subtitle: n ? T.intl.string(T.t.aliKPx) : T.intl.string(T.t.F4KDOH),
        actions: x,
        children: (0, i.jsx)(g, {
            guild: e,
            permissions: f,
            step: _,
            canEveryoneModerate: n,
            isDefaultNotificationsAllMessages: s,
        }),
    });
}
