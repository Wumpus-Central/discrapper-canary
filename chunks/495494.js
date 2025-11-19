r.d(t, { default: () => h }), r(388685);
var n = r(54381),
    l = r(473749),
    i = r(793030),
    o = r(442837),
    a = r(481060),
    c = r(749210),
    s = r(910693),
    u = r(592125),
    p = r(51144),
    d = r(501517),
    f = r(981631),
    g = r(797013),
    b = r(388032),
    m = r(582604);
function y(e) {
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
function O(e, t) {
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
function h(e) {
    var { guildId: t, user: r, location: h, modReportId: j } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["guildId", "user", "location", "modReportId"]);
    let [x, P] = l.useState(""),
        [C, w] = l.useState(!1),
        k = (0, s.sE)(t, {
            location: h,
            targetUserId: r.id,
        }),
        { isModReportClosed: T, isModReport: S } = (0, o.cj)([u.Z], () => {
            let e = u.Z.getChannel(j);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        Z = l.useCallback(() => {
            if (
                (c.Z.kickUser(t, r.id, x, j).then(() => {
                    C && null != j && d.Z.resolveFlag(j);
                }),
                k(s.jQ.KICK),
                null != j)
            ) {
                var e;
                null == (e = v.onClose) || e.call(v);
            }
        }, [t, r.id, x, k, j, C, v]),
        E = l.useCallback((e) => {
            P(e);
        }, []);
    return null != j && S
        ? (0, n.jsx)(
              i.Modal,
              O(y({}, v), {
                  title: b.intl.formatToPlainString(b.t["1Ie87p"], { user: r.username }),
                  subtitle: b.intl.format(b.t["/yH0UT"], { user: "@".concat(p.ZP.getName(r)) }),
                  actions: [
                      {
                          text: b.intl.string(b.t["3glT6Z"]),
                          onClick: Z,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: T
                      ? void 0
                      : (0, n.jsx)(a.Checkbox, {
                            checked: C,
                            onChange: (e) => {
                                w(e);
                            },
                            label: b.intl.string(g.default["8yIKem"]),
                        }),
                  children: (0, n.jsx)(a.Kx8, {
                      label: b.intl.string(null != j ? b.t.hmKy8E : b.t["+2QEPt"]),
                      maxLength: f.GNZ,
                      onChange: E,
                      value: x,
                      rows: 2,
                  }),
              }),
          )
        : (0, n.jsxs)(
              a.ConfirmModal,
              O(
                  y(
                      {
                          header: b.intl.formatToPlainString(b.t["1Ie87p"], { user: r.username }),
                          confirmText: b.intl.string(b.t["3glT6Z"]),
                          cancelText: b.intl.string(b.t["ETE/oC"]),
                          onConfirm: Z,
                      },
                      v,
                  ),
                  {
                      children: [
                          (0, n.jsx)(a.Text, {
                              variant: "text-md/normal",
                              className: m.spacing,
                              children: b.intl.format(b.t["/yH0UT"], { user: "@".concat(p.ZP.getName(r)) }),
                          }),
                          (0, n.jsx)("div", {
                              className: m.spacing,
                              children: (0, n.jsx)(a.Kx8, {
                                  label: b.intl.string(b.t["+2QEPt"]),
                                  maxLength: f.GNZ,
                                  onChange: E,
                                  value: x,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
