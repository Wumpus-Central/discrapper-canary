i.d(t, { default: () => b }), i(321073);
var n = i(477900),
    e = i(582128),
    l = i(136722),
    r = i(17928),
    a = i(554146),
    o = i(661531),
    c = i(189213),
    d = i(545442),
    u = i(834730),
    m = i(628284),
    x = i(866665),
    N = i(885574),
    E = i(468689),
    g = i(636042),
    h = i(376092),
    j = i(317525),
    p = i(488926),
    f = i(45780),
    v = i(652215),
    I = i(49999),
    S = i(124759),
    _ = i(375708),
    M = i(28986);
function C(s) {
    let { guild: t } = s,
        i = (0, r.bG)([j.A], () => j.A.getEveryoneRole(t));
    if (null == i) return null;
    let { name: e, color: l } = i;
    return (0, n.jsxs)("span", {
        className: M.xf,
        children: [
            (0, n.jsx)(d.W, { className: M.m4, color: l.toString(), background: !1, tooltip: !1 }),
            (0, n.jsx)(u.E, {
                className: M.S3,
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children: e,
            }),
        ],
    });
}
function A(s) {
    return s.toString() === v.xBc.MENTION_EVERYONE.toString() ? _.intl.string(_.t.yCpsQw) : (0, h.hx)(s);
}
function O(s) {
    let { permissions: t, step: i } = s;
    return 2 === i
        ? null
        : (0, n.jsxs)("div", {
              className: M.CZ,
              children: [
                  (0, n.jsx)(u.E, {
                      className: M.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === i ? _.intl.string(_.t["0WZKI4"]) : _.intl.string(_.t.xU8RDk),
                  }),
                  (0, n.jsx)("div", {
                      className: M.lM,
                      children: t.map((s, t) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: M.ce,
                                  children: [
                                      (0, n.jsx)("div", { className: 0 === i ? M.I0 : M.dT }),
                                      (0, n.jsx)(u.E, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: A(s),
                                      }),
                                  ],
                              },
                              t,
                          ),
                      ),
                  }),
              ],
          });
}
function R(s) {
    let { permissions: t, step: i } = s;
    return 0 === t.length && 2 !== i
        ? null
        : (2 === i && (t = S.dR),
          (0, n.jsxs)("div", {
              className: M.CZ,
              children: [
                  (0, n.jsx)(u.E, {
                      className: M.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === i ? _.intl.string(_.t.FgMS6i) : _.intl.string(_.t.Yo5qlq),
                  }),
                  (0, n.jsx)("div", {
                      className: M.lM,
                      children: t.map((s, t) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: M.ce,
                                  children: [
                                      (0, n.jsx)("div", { className: M.xE }),
                                      (0, n.jsx)(u.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: A(s),
                                      }),
                                  ],
                              },
                              t,
                          ),
                      ),
                  }),
              ],
          }));
}
function T(s) {
    let { permissions: t, step: i } = s,
        { enabledPermissions: e, disabledPermissions: l } = t;
    return 0 === e.length && 2 !== i
        ? null
        : (0, n.jsxs)("div", {
              className: M.tp,
              children: [
                  2 !== i ? (0, n.jsx)(O, { permissions: e, step: i }) : null,
                  (0, n.jsx)(R, { permissions: l, step: i }),
              ],
          });
}
function y(s) {
    let { guild: t, permissions: i, step: e, canEveryoneModerate: l, isDefaultNotificationsAllMessages: r } = s;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r
                ? (0, n.jsxs)("div", {
                      className: M.J_,
                      children: [
                          (0, n.jsx)(m.y, {
                              size: "md",
                              className: M.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, n.jsx)(u.E, {
                              variant: "text-md/normal",
                              children: _.intl.format(_.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, n.jsx)(x.m, {
                                          text: _.intl.string(_.t["3h2WyM"]),
                                          children: (0, n.jsx)("span", {
                                              tabIndex: 0,
                                              role: "img",
                                              "aria-label": _.intl.string(_.t["3h2WyM"]),
                                              className: M.BP,
                                              children: (0, n.jsx)(N.m, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: M.Kk,
                                              }),
                                          }),
                                      }),
                              }),
                          }),
                      ],
                  })
                : null,
            l
                ? (0, n.jsxs)("div", {
                      className: M.J_,
                      children: [
                          (0, n.jsx)(m.y, {
                              size: "md",
                              className: M.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, n.jsx)(u.E, { variant: "text-md/normal", children: _.intl.string(_.t.LfeFFr) }),
                          (0, n.jsx)(C, { guild: t }),
                      ],
                  })
                : null,
            (0, n.jsx)(T, { permissions: i, step: e }),
        ],
    });
}
function b(s) {
    let { guild: t, canEveryoneModerate: i, isDefaultNotificationsAllMessages: r, transitionState: o, onClose: d } = s,
        [u, m] = e.useState(0),
        x = e.useMemo(() => {
            let s = [],
                i = [];
            return (
                S.dR.map((n) => {
                    p.Ib(n, t) ? s.push(n) : i.push(n);
                }),
                { enabledPermissions: s, disabledPermissions: i }
            );
        }, [t]);
    if (null == t) return null;
    function N() {
        i &&
            (function () {
                if (null == t) return;
                let s = j.A.getEveryoneRole(t),
                    i = l.TF(s.permissions, S.e$);
                (0, g.JY)(t.id, [{ ...s, permissions: i }]);
            })(),
            r &&
                null != t &&
                (E.A.updateGuild({ defaultMessageNotifications: v.orn.ONLY_MENTIONS }),
                E.A.saveGuild(t.id, { defaultMessageNotifications: v.orn.ONLY_MENTIONS }));
    }
    let h = [
        ...(0 === u
            ? [
                  {
                      variant: "secondary",
                      text: _.intl.string(_.t.gWQZvr),
                      onClick: function () {
                          null != t &&
                              (d(), (0, f._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, I.i.DISMISS));
                      },
                  },
              ]
            : []),
        {
            variant: "primary",
            text: 0 === u ? (i ? _.intl.string(_.t.R7GC7b) : _.intl.string(_.t.iOSdAW)) : _.intl.string(_.t.mVuDq5),
            onClick: function () {
                null != t &&
                    (i ||
                        (N(),
                        d(),
                        (0, f._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t?.id ?? "", !0, I.i.PRIMARY)),
                    0 === u
                        ? (m(1), setTimeout(() => m(2), 3e3))
                        : 2 === u &&
                          (N(),
                          d(),
                          (0, f._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t?.id ?? "", !0, I.i.PRIMARY)));
            },
            loading: 1 === u,
        },
    ];
    return (0, n.jsx)(c.Modal, {
        transitionState: o,
        onClose: d,
        size: "md",
        title: i ? _.intl.string(_.t["7/ux15"]) : _.intl.string(_.t.sRcn4z),
        subtitle: i ? _.intl.string(_.t.aliKPx) : _.intl.string(_.t.F4KDOH),
        actions: h,
        children: (0, n.jsx)(y, {
            guild: t,
            permissions: x,
            step: u,
            canEveryoneModerate: i,
            isDefaultNotificationsAllMessages: r,
        }),
    });
}
