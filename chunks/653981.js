n.d(t, { default: () => b }), n(321073);
var i = n(477900),
    e = n(582128),
    l = n(136722),
    r = n(17928),
    a = n(554146),
    o = n(661531),
    c = n(189213),
    d = n(545442),
    u = n(834730),
    m = n(628284),
    x = n(866665),
    N = n(885574),
    E = n(468689),
    g = n(636042),
    h = n(376092),
    j = n(317525),
    f = n(488926),
    p = n(45780),
    I = n(652215),
    v = n(49999),
    S = n(124759),
    _ = n(375708),
    M = n(28986);
function C(s) {
    let { guild: t } = s,
        n = (0, r.bG)([j.A], () => j.A.getEveryoneRole(t));
    if (null == n) return null;
    let { name: e, color: l } = n;
    return (0, i.jsxs)("span", {
        className: M.xf,
        children: [
            (0, i.jsx)(d.W, { className: M.m4, color: l.toString(), background: !1, tooltip: !1 }),
            (0, i.jsx)(u.E, {
                className: M.S3,
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children: e,
            }),
        ],
    });
}
function A(s) {
    return s.toString() === I.xBc.MENTION_EVERYONE.toString() ? _.intl.string(_.t.yCpsQw) : (0, h.hx)(s);
}
function O(s) {
    let { permissions: t, step: n } = s;
    return 2 === n
        ? null
        : (0, i.jsxs)("div", {
              className: M.CZ,
              children: [
                  (0, i.jsx)(u.E, {
                      className: M.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === n ? _.intl.string(_.t["0WZKI4"]) : _.intl.string(_.t.xU8RDk),
                  }),
                  (0, i.jsx)("div", {
                      className: M.lM,
                      children: t.map((s, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: M.ce,
                                  children: [
                                      (0, i.jsx)("div", { className: 0 === n ? M.I0 : M.dT }),
                                      (0, i.jsx)(u.E, {
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
    let { permissions: t, step: n } = s;
    return 0 === t.length && 2 !== n
        ? null
        : (2 === n && (t = S.dR),
          (0, i.jsxs)("div", {
              className: M.CZ,
              children: [
                  (0, i.jsx)(u.E, {
                      className: M.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === n ? _.intl.string(_.t.FgMS6i) : _.intl.string(_.t.Yo5qlq),
                  }),
                  (0, i.jsx)("div", {
                      className: M.lM,
                      children: t.map((s, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: M.ce,
                                  children: [
                                      (0, i.jsx)("div", { className: M.xE }),
                                      (0, i.jsx)(u.E, {
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
    let { permissions: t, step: n } = s,
        { enabledPermissions: e, disabledPermissions: l } = t;
    return 0 === e.length && 2 !== n
        ? null
        : (0, i.jsxs)("div", {
              className: M.tp,
              children: [
                  2 !== n ? (0, i.jsx)(O, { permissions: e, step: n }) : null,
                  (0, i.jsx)(R, { permissions: l, step: n }),
              ],
          });
}
function y(s) {
    let { guild: t, permissions: n, step: e, canEveryoneModerate: l, isDefaultNotificationsAllMessages: r } = s;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r
                ? (0, i.jsxs)("div", {
                      className: M.J_,
                      children: [
                          (0, i.jsx)(m.y, {
                              size: "md",
                              className: M.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(u.E, {
                              variant: "text-md/normal",
                              children: _.intl.format(_.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, i.jsx)(x.m, {
                                          text: _.intl.string(_.t["3h2WyM"]),
                                          children: (0, i.jsx)("span", {
                                              tabIndex: 0,
                                              role: "img",
                                              "aria-label": _.intl.string(_.t["3h2WyM"]),
                                              className: M.BP,
                                              children: (0, i.jsx)(N.CircleInformationIcon, {
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
                ? (0, i.jsxs)("div", {
                      className: M.J_,
                      children: [
                          (0, i.jsx)(m.y, {
                              size: "md",
                              className: M.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(u.E, { variant: "text-md/normal", children: _.intl.string(_.t.LfeFFr) }),
                          (0, i.jsx)(C, { guild: t }),
                      ],
                  })
                : null,
            (0, i.jsx)(T, { permissions: n, step: e }),
        ],
    });
}
function b(s) {
    let { guild: t, canEveryoneModerate: n, isDefaultNotificationsAllMessages: r, transitionState: o, onClose: d } = s,
        [u, m] = e.useState(0),
        x = e.useMemo(() => {
            let s = [],
                n = [];
            return (
                S.dR.map((i) => {
                    f.Ib(i, t) ? s.push(i) : n.push(i);
                }),
                { enabledPermissions: s, disabledPermissions: n }
            );
        }, [t]);
    if (null == t) return null;
    function N() {
        n &&
            (function () {
                if (null == t) return;
                let s = j.A.getEveryoneRole(t),
                    n = l.TF(s.permissions, S.e$);
                (0, g.JY)(t.id, [{ ...s, permissions: n }]);
            })(),
            r &&
                null != t &&
                (E.A.updateGuild({ defaultMessageNotifications: I.orn.ONLY_MENTIONS }),
                E.A.saveGuild(t.id, { defaultMessageNotifications: I.orn.ONLY_MENTIONS }));
    }
    let h = [
        ...(0 === u
            ? [
                  {
                      variant: "secondary",
                      text: _.intl.string(_.t.gWQZvr),
                      onClick: function () {
                          null != t &&
                              (d(), (0, p._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, v.i.DISMISS));
                      },
                  },
              ]
            : []),
        {
            variant: "primary",
            text: 0 === u ? (n ? _.intl.string(_.t.R7GC7b) : _.intl.string(_.t.iOSdAW)) : _.intl.string(_.t.mVuDq5),
            onClick: function () {
                null != t &&
                    (n ||
                        (N(),
                        d(),
                        (0, p._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t?.id ?? "", !0, v.i.PRIMARY)),
                    0 === u
                        ? (m(1), setTimeout(() => m(2), 3e3))
                        : 2 === u &&
                          (N(),
                          d(),
                          (0, p._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t?.id ?? "", !0, v.i.PRIMARY)));
            },
            loading: 1 === u,
        },
    ];
    return (0, i.jsx)(c.Modal, {
        transitionState: o,
        onClose: d,
        size: "md",
        title: n ? _.intl.string(_.t["7/ux15"]) : _.intl.string(_.t.sRcn4z),
        subtitle: n ? _.intl.string(_.t.aliKPx) : _.intl.string(_.t.F4KDOH),
        actions: h,
        children: (0, i.jsx)(y, {
            guild: t,
            permissions: x,
            step: u,
            canEveryoneModerate: n,
            isDefaultNotificationsAllMessages: r,
        }),
    });
}
