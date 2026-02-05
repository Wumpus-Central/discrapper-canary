i.d(e, { default: () => y }), i(321073);
var n = i(627968),
    a = i(64700),
    s = i(136722),
    o = i(311907),
    l = i(554146),
    c = i(827734),
    r = i(990078),
    d = i(732955),
    _ = i(397927),
    p = i(997509),
    E = i(636042),
    u = i(376092),
    S = i(317525),
    I = i(488926),
    N = i(45780),
    h = i(652215),
    T = i(49999),
    f = i(124759),
    m = i(985018),
    O = i(763481);
function x(t) {
    let { guild: e } = t,
        i = (0, o.bG)([S.A], () => S.A.getEveryoneRole(e));
    if (null == i) return null;
    let { name: a, color: s } = i;
    return (0, n.jsxs)("span", {
        className: O.xf,
        children: [
            (0, n.jsx)(_.WYI, { className: O.m4, color: s.toString(), background: !1, tooltip: !1 }),
            (0, n.jsx)(_.Text, {
                className: O.S3,
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children: a,
            }),
        ],
    });
}
let C = (t) => (t.toString() === h.xBc.MENTION_EVERYONE.toString() ? m.intl.string(m.t.yCpsQw) : (0, u.hx)(t));
function R(t) {
    let { permissions: e, step: i } = t;
    return 2 === i
        ? null
        : (0, n.jsxs)("div", {
              className: O.CZ,
              children: [
                  (0, n.jsx)(_.Text, {
                      className: O.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === i ? m.intl.string(m.t["0WZKI4"]) : m.intl.string(m.t.xU8RDk),
                  }),
                  (0, n.jsx)("div", {
                      className: O.lM,
                      children: e.map((t, e) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: O.ce,
                                  children: [
                                      (0, n.jsx)("div", { className: 0 === i ? O.I0 : O.dT }),
                                      (0, n.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: C(t),
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
function L(t) {
    let { permissions: e, step: i } = t;
    return 0 === e.length && 2 !== i
        ? null
        : (2 === i && (e = f.dR),
          (0, n.jsxs)("div", {
              className: O.CZ,
              children: [
                  (0, n.jsx)(_.Text, {
                      className: O.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === i ? m.intl.string(m.t.FgMS6i) : m.intl.string(m.t.Yo5qlq),
                  }),
                  (0, n.jsx)("div", {
                      className: O.lM,
                      children: e.map((t, e) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: O.ce,
                                  children: [
                                      (0, n.jsx)("div", { className: O.xE }),
                                      (0, n.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: C(t),
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
function U(t) {
    let { permissions: e, step: i } = t,
        { enabledPermissions: a, disabledPermissions: s } = e;
    return 0 === a.length && 2 !== i
        ? null
        : (0, n.jsxs)("div", {
              className: O.tp,
              children: [
                  2 !== i ? (0, n.jsx)(R, { permissions: a, step: i }) : null,
                  (0, n.jsx)(L, { permissions: s, step: i }),
              ],
          });
}
function g(t) {
    let { guild: e, permissions: i, step: a, canEveryoneModerate: s, isDefaultNotificationsAllMessages: o } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            o
                ? (0, n.jsxs)("div", {
                      className: O.J_,
                      children: [
                          (0, n.jsx)(_.yr3, {
                              size: "md",
                              className: O.aV,
                              color: c.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, n.jsx)(_.Text, {
                              variant: "text-md/normal",
                              children: m.intl.format(m.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, n.jsx)(r.m, {
                                          text: m.intl.string(m.t["3h2WyM"]),
                                          "aria-label": m.intl.string(m.t["3h2WyM"]),
                                          children: (0, n.jsx)(_.mir, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: O.Kk,
                                          }),
                                      }),
                              }),
                          }),
                      ],
                  })
                : null,
            s
                ? (0, n.jsxs)("div", {
                      className: O.J_,
                      children: [
                          (0, n.jsx)(_.yr3, {
                              size: "md",
                              className: O.aV,
                              color: c.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, n.jsx)(_.Text, { variant: "text-md/normal", children: m.intl.string(m.t.LfeFFr) }),
                          (0, n.jsx)(x, { guild: e }),
                      ],
                  })
                : null,
            (0, n.jsx)(U, { permissions: i, step: a }),
        ],
    });
}
function y(t) {
    let { guild: e, canEveryoneModerate: i, isDefaultNotificationsAllMessages: o, transitionState: c, onClose: r } = t,
        [_, u] = a.useState(0),
        O = a.useMemo(() => {
            let t = [],
                i = [];
            return (
                f.dR.map((n) => {
                    I.Ib(n, e) ? t.push(n) : i.push(n);
                }),
                { enabledPermissions: t, disabledPermissions: i }
            );
        }, [e]);
    if (null == e) return null;
    let x = () => {
            let t, n;
            i &&
                ((t = S.A.getEveryoneRole(e)),
                (n = s.TF(t.permissions, f.e$)),
                (0, E.JY)(e.id, [{ ...t, permissions: n }])),
                o &&
                    (p.A.updateGuild({ defaultMessageNotifications: h.orn.ONLY_MENTIONS }),
                    p.A.saveGuild(e.id, { defaultMessageNotifications: h.orn.ONLY_MENTIONS }));
        },
        C = [
            ...(0 === _
                ? [
                      {
                          variant: "secondary",
                          text: m.intl.string(m.t.gWQZvr),
                          onClick: () => {
                              r(), (0, N._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e.id, !0, T.i.DISMISS);
                          },
                      },
                  ]
                : []),
            {
                variant: "primary",
                text: 0 === _ ? (i ? m.intl.string(m.t.R7GC7b) : m.intl.string(m.t.iOSdAW)) : m.intl.string(m.t.mVuDq5),
                onClick: () => {
                    i ||
                        (x(),
                        r(),
                        (0, N._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? "", !0, T.i.PRIMARY)),
                        0 === _
                            ? (u(1), setTimeout(() => u(2), 3e3))
                            : 2 === _ &&
                              (x(),
                              r(),
                              (0, N._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? "", !0, T.i.PRIMARY));
                },
                loading: 1 === _,
            },
        ];
    return (0, n.jsx)(d.aFV, {
        transitionState: c,
        onClose: r,
        size: "md",
        title: i ? m.intl.string(m.t["7/ux15"]) : m.intl.string(m.t.sRcn4z),
        subtitle: i ? m.intl.string(m.t.aliKPx) : m.intl.string(m.t.F4KDOH),
        actions: C,
        children: (0, n.jsx)(g, {
            guild: e,
            permissions: O,
            step: _,
            canEveryoneModerate: i,
            isDefaultNotificationsAllMessages: o,
        }),
    });
}
