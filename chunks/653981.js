e.d(s, { default: () => C }), e(321073);
var i = e(627968),
    n = e(64700),
    l = e(136722),
    a = e(311907),
    o = e(554146),
    r = e(827734),
    c = e(990078),
    d = e(189213),
    _ = e(545442),
    E = e(834730),
    S = e(628284),
    u = e(885574),
    f = e(997509),
    m = e(636042),
    h = e(376092),
    p = e(317525),
    N = e(488926),
    I = e(45780),
    T = e(652215),
    x = e(49999),
    O = e(124759),
    R = e(985018),
    g = e(909906);
function L(t) {
    let { guild: s } = t,
        e = (0, a.bG)([p.A], () => p.A.getEveryoneRole(s));
    if (null == e) return null;
    let { name: n, color: l } = e;
    return (0, i.jsxs)("span", {
        className: g.xf,
        children: [
            (0, i.jsx)(_.W, { className: g.m4, color: l.toString(), background: !1, tooltip: !1 }),
            (0, i.jsx)(E.E, {
                className: g.S3,
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children: n,
            }),
        ],
    });
}
let G = (t) => (t.toString() === T.xBc.MENTION_EVERYONE.toString() ? R.intl.string(R.t.yCpsQw) : (0, h.hx)(t));
function A(t) {
    let { permissions: s, step: e } = t;
    return 2 === e
        ? null
        : (0, i.jsxs)("div", {
              className: g.CZ,
              children: [
                  (0, i.jsx)(E.E, {
                      className: g.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === e ? R.intl.string(R.t["0WZKI4"]) : R.intl.string(R.t.xU8RDk),
                  }),
                  (0, i.jsx)("div", {
                      className: g.lM,
                      children: s.map((t, s) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: g.ce,
                                  children: [
                                      (0, i.jsx)("div", { className: 0 === e ? g.I0 : g.dT }),
                                      (0, i.jsx)(E.E, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: G(t),
                                      }),
                                  ],
                              },
                              s,
                          ),
                      ),
                  }),
              ],
          });
}
function U(t) {
    let { permissions: s, step: e } = t;
    return 0 === s.length && 2 !== e
        ? null
        : (2 === e && (s = O.dR),
          (0, i.jsxs)("div", {
              className: g.CZ,
              children: [
                  (0, i.jsx)(E.E, {
                      className: g.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === e ? R.intl.string(R.t.FgMS6i) : R.intl.string(R.t.Yo5qlq),
                  }),
                  (0, i.jsx)("div", {
                      className: g.lM,
                      children: s.map((t, s) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: g.ce,
                                  children: [
                                      (0, i.jsx)("div", { className: g.xE }),
                                      (0, i.jsx)(E.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: G(t),
                                      }),
                                  ],
                              },
                              s,
                          ),
                      ),
                  }),
              ],
          }));
}
function j(t) {
    let { permissions: s, step: e } = t,
        { enabledPermissions: n, disabledPermissions: l } = s;
    return 0 === n.length && 2 !== e
        ? null
        : (0, i.jsxs)("div", {
              className: g.tp,
              children: [
                  2 !== e ? (0, i.jsx)(A, { permissions: n, step: e }) : null,
                  (0, i.jsx)(U, { permissions: l, step: e }),
              ],
          });
}
function v(t) {
    let { guild: s, permissions: e, step: n, canEveryoneModerate: l, isDefaultNotificationsAllMessages: a } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a
                ? (0, i.jsxs)("div", {
                      className: g.J_,
                      children: [
                          (0, i.jsx)(S.y, {
                              size: "md",
                              className: g.aV,
                              color: r.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: r.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(E.E, {
                              variant: "text-md/normal",
                              children: R.intl.format(R.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, i.jsx)(c.m, {
                                          text: R.intl.string(R.t["3h2WyM"]),
                                          "aria-label": R.intl.string(R.t["3h2WyM"]),
                                          children: (0, i.jsx)(u.m, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: g.Kk,
                                          }),
                                      }),
                              }),
                          }),
                      ],
                  })
                : null,
            l
                ? (0, i.jsxs)("div", {
                      className: g.J_,
                      children: [
                          (0, i.jsx)(S.y, {
                              size: "md",
                              className: g.aV,
                              color: r.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: r.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(E.E, { variant: "text-md/normal", children: R.intl.string(R.t.LfeFFr) }),
                          (0, i.jsx)(L, { guild: s }),
                      ],
                  })
                : null,
            (0, i.jsx)(j, { permissions: e, step: n }),
        ],
    });
}
function C(t) {
    let { guild: s, canEveryoneModerate: e, isDefaultNotificationsAllMessages: a, transitionState: r, onClose: c } = t,
        [_, E] = n.useState(0),
        S = n.useMemo(() => {
            let t = [],
                e = [];
            return (
                O.dR.map((i) => {
                    N.Ib(i, s) ? t.push(i) : e.push(i);
                }),
                { enabledPermissions: t, disabledPermissions: e }
            );
        }, [s]);
    if (null == s) return null;
    let u = () => {
            let t, i;
            e &&
                ((t = p.A.getEveryoneRole(s)),
                (i = l.TF(t.permissions, O.e$)),
                (0, m.JY)(s.id, [{ ...t, permissions: i }])),
                a &&
                    (f.A.updateGuild({ defaultMessageNotifications: T.orn.ONLY_MENTIONS }),
                    f.A.saveGuild(s.id, { defaultMessageNotifications: T.orn.ONLY_MENTIONS }));
        },
        h = [
            ...(0 === _
                ? [
                      {
                          variant: "secondary",
                          text: R.intl.string(R.t.gWQZvr),
                          onClick: () => {
                              c(), (0, I._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, s.id, !0, x.i.DISMISS);
                          },
                      },
                  ]
                : []),
            {
                variant: "primary",
                text: 0 === _ ? (e ? R.intl.string(R.t.R7GC7b) : R.intl.string(R.t.iOSdAW)) : R.intl.string(R.t.mVuDq5),
                onClick: () => {
                    e ||
                        (u(),
                        c(),
                        (0, I._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, s?.id ?? "", !0, x.i.PRIMARY)),
                        0 === _
                            ? (E(1), setTimeout(() => E(2), 3e3))
                            : 2 === _ &&
                              (u(),
                              c(),
                              (0, I._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, s?.id ?? "", !0, x.i.PRIMARY));
                },
                loading: 1 === _,
            },
        ];
    return (0, i.jsx)(d.Modal, {
        transitionState: r,
        onClose: c,
        size: "md",
        title: e ? R.intl.string(R.t["7/ux15"]) : R.intl.string(R.t.sRcn4z),
        subtitle: e ? R.intl.string(R.t.aliKPx) : R.intl.string(R.t.F4KDOH),
        actions: h,
        children: (0, i.jsx)(v, {
            guild: s,
            permissions: S,
            step: _,
            canEveryoneModerate: e,
            isDefaultNotificationsAllMessages: a,
        }),
    });
}
