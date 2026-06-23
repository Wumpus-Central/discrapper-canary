e.d(t, { default: () => b }), e(321073);
var i = e(627968),
    n = e(64700),
    l = e(136722),
    r = e(17928),
    a = e(554146),
    o = e(661531),
    c = e(990078),
    d = e(189213),
    m = e(545442),
    u = e(834730),
    x = e(628284),
    N = e(885574),
    E = e(468689),
    g = e(636042),
    h = e(376092),
    j = e(317525),
    p = e(488926),
    v = e(45780),
    I = e(652215),
    S = e(49999),
    _ = e(124759),
    f = e(375708),
    M = e(909906);
function C(s) {
    let { guild: t } = s,
        e = (0, r.bG)([j.A], () => j.A.getEveryoneRole(t));
    if (null == e) return null;
    let { name: n, color: l } = e;
    return (0, i.jsxs)("span", {
        className: M.xf,
        children: [
            (0, i.jsx)(m.W, { className: M.m4, color: l.toString(), background: !1, tooltip: !1 }),
            (0, i.jsx)(u.E, {
                className: M.S3,
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children: n,
            }),
        ],
    });
}
function A(s) {
    return s.toString() === I.xBc.MENTION_EVERYONE.toString() ? f.intl.string(f.t.yCpsQw) : (0, h.hx)(s);
}
function O(s) {
    let { permissions: t, step: e } = s;
    return 2 === e
        ? null
        : (0, i.jsxs)("div", {
              className: M.CZ,
              children: [
                  (0, i.jsx)(u.E, {
                      className: M.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 0 === e ? f.intl.string(f.t["0WZKI4"]) : f.intl.string(f.t.xU8RDk),
                  }),
                  (0, i.jsx)("div", {
                      className: M.lM,
                      children: t.map((s, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: M.ce,
                                  children: [
                                      (0, i.jsx)("div", { className: 0 === e ? M.I0 : M.dT }),
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
    let { permissions: t, step: e } = s;
    return 0 === t.length && 2 !== e
        ? null
        : (2 === e && (t = _.dR),
          (0, i.jsxs)("div", {
              className: M.CZ,
              children: [
                  (0, i.jsx)(u.E, {
                      className: M.qd,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: 2 === e ? f.intl.string(f.t.FgMS6i) : f.intl.string(f.t.Yo5qlq),
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
    let { permissions: t, step: e } = s,
        { enabledPermissions: n, disabledPermissions: l } = t;
    return 0 === n.length && 2 !== e
        ? null
        : (0, i.jsxs)("div", {
              className: M.tp,
              children: [
                  2 !== e ? (0, i.jsx)(O, { permissions: n, step: e }) : null,
                  (0, i.jsx)(R, { permissions: l, step: e }),
              ],
          });
}
function y(s) {
    let { guild: t, permissions: e, step: n, canEveryoneModerate: l, isDefaultNotificationsAllMessages: r } = s;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r
                ? (0, i.jsxs)("div", {
                      className: M.J_,
                      children: [
                          (0, i.jsx)(x.y, {
                              size: "md",
                              className: M.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(u.E, {
                              variant: "text-md/normal",
                              children: f.intl.format(f.t.K8Eg4P, {
                                  infoHook: () =>
                                      (0, i.jsx)(c.m, {
                                          text: f.intl.string(f.t["3h2WyM"]),
                                          children: (0, i.jsx)("span", {
                                              tabIndex: 0,
                                              role: "img",
                                              "aria-label": f.intl.string(f.t["3h2WyM"]),
                                              className: M.BP,
                                              children: (0, i.jsx)(N.m, {
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
                          (0, i.jsx)(x.y, {
                              size: "md",
                              className: M.aV,
                              color: o.A.unsafe_rawColors.GREEN_360.css,
                              secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                          }),
                          (0, i.jsx)(u.E, { variant: "text-md/normal", children: f.intl.string(f.t.LfeFFr) }),
                          (0, i.jsx)(C, { guild: t }),
                      ],
                  })
                : null,
            (0, i.jsx)(T, { permissions: e, step: n }),
        ],
    });
}
function b(s) {
    let { guild: t, canEveryoneModerate: e, isDefaultNotificationsAllMessages: r, transitionState: o, onClose: c } = s,
        [m, u] = n.useState(0),
        x = n.useMemo(() => {
            let s = [],
                e = [];
            return (
                _.dR.map((i) => {
                    p.Ib(i, t) ? s.push(i) : e.push(i);
                }),
                { enabledPermissions: s, disabledPermissions: e }
            );
        }, [t]);
    if (null == t) return null;
    function N() {
        let s, i;
        e &&
            ((s = j.A.getEveryoneRole(t)),
            (i = l.TF(s.permissions, _.e$)),
            (0, g.JY)(t.id, [{ ...s, permissions: i }])),
            r &&
                (E.A.updateGuild({ defaultMessageNotifications: I.orn.ONLY_MENTIONS }),
                E.A.saveGuild(t.id, { defaultMessageNotifications: I.orn.ONLY_MENTIONS }));
    }
    let h = [
        ...(0 === m
            ? [
                  {
                      variant: "secondary",
                      text: f.intl.string(f.t.gWQZvr),
                      onClick: () => {
                          c(), (0, v._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, S.i.DISMISS);
                      },
                  },
              ]
            : []),
        {
            variant: "primary",
            text: 0 === m ? (e ? f.intl.string(f.t.R7GC7b) : f.intl.string(f.t.iOSdAW)) : f.intl.string(f.t.mVuDq5),
            onClick: () => {
                e ||
                    (N(),
                    c(),
                    (0, v._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t?.id ?? "", !0, S.i.PRIMARY)),
                    0 === m
                        ? (u(1), setTimeout(() => u(2), 3e3))
                        : 2 === m &&
                          (N(),
                          c(),
                          (0, v._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t?.id ?? "", !0, S.i.PRIMARY));
            },
            loading: 1 === m,
        },
    ];
    return (0, i.jsx)(d.Modal, {
        transitionState: o,
        onClose: c,
        size: "md",
        title: e ? f.intl.string(f.t["7/ux15"]) : f.intl.string(f.t.sRcn4z),
        subtitle: e ? f.intl.string(f.t.aliKPx) : f.intl.string(f.t.F4KDOH),
        actions: h,
        children: (0, i.jsx)(y, {
            guild: t,
            permissions: x,
            step: m,
            canEveryoneModerate: e,
            isDefaultNotificationsAllMessages: r,
        }),
    });
}
