i(321073);
var t = i(477900),
    e = i(582128),
    l = i(136722),
    r = i(855986),
    a = i(554146),
    o = i(646514),
    c = i(189213),
    d = i(545442),
    u = i(834730),
    m = i(628284),
    x = i(866665),
    N = i(885574),
    E = i(727419),
    g = i(636042),
    h = i(376092),
    j = i(317525),
    I = i(488926),
    f = i(45780),
    p = i(652215),
    v = i(49999),
    S = i(124759),
    _ = i(792996),
    C = i(477919);
function M(s) {
    let { guild: n } = s,
        i = (0, r.bG)([j.A], () => j.A.getEveryoneRole(n));
    if (null == i) return null;
    let { name: e, color: l } = i;
    return (0, t.jsxs)("span", {
        className: C.xf,
        children: [
            (0, t.jsx)(d.W, { className: C.m4, color: l.toString(), background: !1, tooltip: !1 }),
            (0, t.jsx)(u.E, {
                className: C.S3,
                variant: "body-sm/medium",
                color: "interactive-text-active",
                children: e,
            }),
        ],
    });
}
function A(s) {
    return s.toString() === p.xBc.MENTION_EVERYONE.toString() ? _.intl.string(_.t.yCpsQw) : (0, h.hx)(s);
}
function b(s) {
    let { permissions: n, step: i } = s;
    return 2 === i
        ? null
        : (0, t.jsxs)("div", {
              className: C.CZ,
              children: [
                  (0, t.jsx)(u.E, {
                      className: C.qd,
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      children: 0 === i ? _.intl.string(_.t["0WZKI4"]) : _.intl.string(_.t.xU8RDk),
                  }),
                  (0, t.jsx)("div", {
                      className: C.lM,
                      children: n.map((s, n) =>
                          (0, t.jsxs)(
                              "div",
                              {
                                  className: C.ce,
                                  children: [
                                      (0, t.jsx)("div", { className: 0 === i ? C.I0 : C.dT }),
                                      (0, t.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          color: "text-default",
                                          children: A(s),
                                      }),
                                  ],
                              },
                              n,
                          ),
                      ),
                  }),
              ],
          });
}
function y(s) {
    let { permissions: n, step: i } = s;
    return 0 === n.length && 2 !== i
        ? null
        : (2 === i && (n = S.dR),
          (0, t.jsxs)("div", {
              className: C.CZ,
              children: [
                  (0, t.jsx)(u.E, {
                      className: C.qd,
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      children: 2 === i ? _.intl.string(_.t.FgMS6i) : _.intl.string(_.t.Yo5qlq),
                  }),
                  (0, t.jsx)("div", {
                      className: C.lM,
                      children: n.map((s, n) =>
                          (0, t.jsxs)(
                              "div",
                              {
                                  className: C.ce,
                                  children: [
                                      (0, t.jsx)("div", { className: C.xE }),
                                      (0, t.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          children: A(s),
                                      }),
                                  ],
                              },
                              n,
                          ),
                      ),
                  }),
              ],
          }));
}
function O(s) {
    let { permissions: n, step: i } = s,
        { enabledPermissions: e, disabledPermissions: l } = n;
    return 0 === e.length && 2 !== i
        ? null
        : (0, t.jsxs)("div", {
              className: C.tp,
              children: [
                  2 !== i ? (0, t.jsx)(b, { permissions: e, step: i }) : null,
                  (0, t.jsx)(y, { permissions: l, step: i }),
              ],
          });
}
function R(s) {
    let { guild: n, permissions: i, step: e, canEveryoneModerate: l, isDefaultNotificationsAllMessages: r } = s;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            r
                ? (0, t.jsxs)("div", {
                      className: C.J_,
                      children: [
                          (0, t.jsx)(m.CircleCheckIcon, {
                              size: "md",
                              className: C.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, t.jsx)(u.E, {
                              variant: "body-md/normal",
                              children: _.intl.format(_.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, t.jsx)(x.m, {
                                          text: _.intl.string(_.t["3h2WyM"]),
                                          children: (0, t.jsx)("span", {
                                              tabIndex: 0,
                                              role: "img",
                                              "aria-label": _.intl.string(_.t["3h2WyM"]),
                                              className: C.BP,
                                              children: (0, t.jsx)(N.CircleInformationIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: C.Kk,
                                              }),
                                          }),
                                      }),
                              }),
                          }),
                      ],
                  })
                : null,
            l
                ? (0, t.jsxs)("div", {
                      className: C.J_,
                      children: [
                          (0, t.jsx)(m.CircleCheckIcon, {
                              size: "md",
                              className: C.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, t.jsx)(u.E, { variant: "body-md/normal", children: _.intl.string(_.t.LfeFFr) }),
                          (0, t.jsx)(M, { guild: n }),
                      ],
                  })
                : null,
            (0, t.jsx)(O, { permissions: i, step: e }),
        ],
    });
}
i.d(
    n,
    {},
    {
        default: function (s) {
            let {
                    guild: n,
                    canEveryoneModerate: i,
                    isDefaultNotificationsAllMessages: r,
                    transitionState: o,
                    onClose: d,
                } = s,
                [u, m] = e.useState(0),
                x = e.useMemo(() => {
                    let s = [],
                        i = [];
                    return (
                        S.dR.map((t) => {
                            I.Ib(t, n) ? s.push(t) : i.push(t);
                        }),
                        { enabledPermissions: s, disabledPermissions: i }
                    );
                }, [n]);
            if (null == n) return null;
            function N() {
                (i &&
                    (function () {
                        if (null == n) return;
                        let s = j.A.getEveryoneRole(n),
                            i = l.TF(s.permissions, S.e$);
                        (0, g.JY)(n.id, [{ ...s, permissions: i }]);
                    })(),
                    r &&
                        null != n &&
                        (E.A.updateGuild({ defaultMessageNotifications: p.orn.ONLY_MENTIONS }),
                        E.A.saveGuild(n.id, { defaultMessageNotifications: p.orn.ONLY_MENTIONS })));
            }
            let h = [
                ...(0 === u
                    ? [
                          {
                              variant: "secondary",
                              text: _.intl.string(_.t.gWQZvr),
                              onClick: function () {
                                  null != n &&
                                      (d(),
                                      (0, f._$)(
                                          a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                                          n.id,
                                          !0,
                                          v.i.DISMISS,
                                      ));
                              },
                          },
                      ]
                    : []),
                {
                    variant: "primary",
                    text:
                        0 === u
                            ? i
                                ? _.intl.string(_.t.R7GC7b)
                                : _.intl.string(_.t.iOSdAW)
                            : _.intl.string(_.t.mVuDq5),
                    onClick: function () {
                        null != n &&
                            (i ||
                                (N(),
                                d(),
                                (0, f._$)(
                                    a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                                    n?.id ?? "",
                                    !0,
                                    v.i.PRIMARY,
                                )),
                            0 === u
                                ? (m(1), setTimeout(() => m(2), 3e3))
                                : 2 === u &&
                                  (N(),
                                  d(),
                                  (0, f._$)(
                                      a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                                      n?.id ?? "",
                                      !0,
                                      v.i.PRIMARY,
                                  )));
                    },
                    loading: 1 === u,
                },
            ];
            return (0, t.jsx)(c.a, {
                transitionState: o,
                onClose: d,
                size: "md",
                title: i ? _.intl.string(_.t["7/ux15"]) : _.intl.string(_.t.sRcn4z),
                subtitle: i ? _.intl.string(_.t.aliKPx) : _.intl.string(_.t.F4KDOH),
                actions: h,
                children: (0, t.jsx)(R, {
                    guild: n,
                    permissions: x,
                    step: u,
                    canEveryoneModerate: i,
                    isDefaultNotificationsAllMessages: r,
                }),
            });
        },
    },
);
