r.d(t, { default: () => m }), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(158954),
    i = r(311907),
    a = r(397927),
    c = r(686956),
    s = r(504049),
    u = r(734057),
    p = r(427262),
    f = r(226698),
    b = r(652215),
    d = r(641131),
    O = r(985018),
    y = r(544800);
function g(e) {
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
function h(e, t) {
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
function m(e) {
    let { guildId: t, user: r, location: m, modReportId: j } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                return o;
            }
            if (
                ((o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        o = Object.getOwnPropertyNames(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            return o;
        })(e, ["guildId", "user", "location", "modReportId"]),
        [P, x] = l.useState(""),
        [w, C] = l.useState(!1),
        E = (0, s.$9)(t, {
            location: m,
            targetUserId: r.id,
        }),
        { isModReportClosed: R, isModReport: T } = (0, i.cf)([u.A], () => {
            let e = u.A.getChannel(j);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        k = l.useCallback(() => {
            if (
                (c.A.kickUser(t, r.id, P, j).then(() => {
                    w && null != j && f.A.resolveFlag(j);
                }),
                E(s.Nj.KICK),
                null != j)
            ) {
                var e;
                null == (e = v.onClose) || e.call(v);
            }
        }, [t, r.id, P, E, j, w, v]),
        A = l.useCallback((e) => {
            x(e);
        }, []);
    return null != j && T
        ? (0, n.jsx)(
              o.Modal,
              h(g({}, v), {
                  title: O.intl.formatToPlainString(O.t["1Ie87p"], { user: r.username }),
                  subtitle: O.intl.format(O.t["/yH0UT"], { user: "@".concat(p.Ay.getName(r)) }),
                  actions: [
                      {
                          text: O.intl.string(O.t["3glT6Z"]),
                          onClick: k,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: R
                      ? void 0
                      : (0, n.jsx)(a.Checkbox, {
                            checked: w,
                            onChange: (e) => {
                                C(e);
                            },
                            label: O.intl.string(d.default["8yIKem"]),
                        }),
                  children: (0, n.jsx)(a.fs1, {
                      label: O.intl.string(null != j ? O.t.hmKy8E : O.t["+2QEPt"]),
                      maxLength: b.hlA,
                      onChange: A,
                      value: P,
                      rows: 2,
                  }),
              }),
          )
        : (0, n.jsxs)(
              a.VoidConfirmModal,
              h(
                  g(
                      {
                          header: O.intl.formatToPlainString(O.t["1Ie87p"], { user: r.username }),
                          confirmText: O.intl.string(O.t["3glT6Z"]),
                          cancelText: O.intl.string(O.t["ETE/oC"]),
                          onConfirm: k,
                      },
                      v,
                  ),
                  {
                      children: [
                          (0, n.jsx)(a.Text, {
                              variant: "text-md/normal",
                              className: y.Y,
                              children: O.intl.format(O.t["/yH0UT"], { user: "@".concat(p.Ay.getName(r)) }),
                          }),
                          (0, n.jsx)("div", {
                              className: y.Y,
                              children: (0, n.jsx)(a.fs1, {
                                  label: O.intl.string(O.t["+2QEPt"]),
                                  maxLength: b.hlA,
                                  onChange: A,
                                  value: P,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
