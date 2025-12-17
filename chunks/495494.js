r.d(t, { default: () => y }), r(388685);
var n = r(54381),
    o = r(473749),
    l = r(793030),
    i = r(442837),
    a = r(481060),
    c = r(749210),
    s = r(910693),
    u = r(592125),
    p = r(51144),
    d = r(501517),
    f = r(981631),
    g = r(792389),
    b = r(388032),
    O = r(242369);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function y(e) {
    var { guildId: t, user: r, location: y, modReportId: j } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["guildId", "user", "location", "modReportId"]);
    let [P, x] = o.useState(""),
        [C, E] = o.useState(!1),
        w = (0, s.sE)(t, {
            location: y,
            targetUserId: r.id,
        }),
        { isModReportClosed: T, isModReport: k } = (0, i.cj)([u.Z], () => {
            let e = u.Z.getChannel(j);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        R = o.useCallback(() => {
            if (
                (c.Z.kickUser(t, r.id, P, j).then(() => {
                    C && null != j && d.Z.resolveFlag(j);
                }),
                w(s.jQ.KICK),
                null != j)
            ) {
                var e;
                null == (e = v.onClose) || e.call(v);
            }
        }, [t, r.id, P, w, j, C, v]),
        S = o.useCallback((e) => {
            x(e);
        }, []);
    return null != j && k
        ? (0, n.jsx)(
              l.Modal,
              m(h({}, v), {
                  title: b.intl.formatToPlainString(b.t["1Ie87p"], { user: r.username }),
                  subtitle: b.intl.format(b.t["/yH0UT"], { user: "@".concat(p.ZP.getName(r)) }),
                  actions: [
                      {
                          text: b.intl.string(b.t["3glT6Z"]),
                          onClick: R,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: T
                      ? void 0
                      : (0, n.jsx)(a.Checkbox, {
                            checked: C,
                            onChange: (e) => {
                                E(e);
                            },
                            label: b.intl.string(g.default["8yIKem"]),
                        }),
                  children: (0, n.jsx)(a.Kx8, {
                      label: b.intl.string(null != j ? b.t.hmKy8E : b.t["+2QEPt"]),
                      maxLength: f.GNZ,
                      onChange: S,
                      value: P,
                      rows: 2,
                  }),
              }),
          )
        : (0, n.jsxs)(
              a.VoidConfirmModal,
              m(
                  h(
                      {
                          header: b.intl.formatToPlainString(b.t["1Ie87p"], { user: r.username }),
                          confirmText: b.intl.string(b.t["3glT6Z"]),
                          cancelText: b.intl.string(b.t["ETE/oC"]),
                          onConfirm: R,
                      },
                      v,
                  ),
                  {
                      children: [
                          (0, n.jsx)(a.Text, {
                              variant: "text-md/normal",
                              className: O.spacing,
                              children: b.intl.format(b.t["/yH0UT"], { user: "@".concat(p.ZP.getName(r)) }),
                          }),
                          (0, n.jsx)("div", {
                              className: O.spacing,
                              children: (0, n.jsx)(a.Kx8, {
                                  label: b.intl.string(b.t["+2QEPt"]),
                                  maxLength: f.GNZ,
                                  onChange: S,
                                  value: P,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
