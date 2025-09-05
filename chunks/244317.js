n.d(t, { Z: () => m }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(772848),
    a = n(873546),
    o = n(680018),
    s = n(481060),
    c = n(626135),
    u = n(358085),
    d = n(289341),
    p = n(981631),
    f = n(186901),
    h = n(388032),
    g = n(87805);
function m(e) {
    let { applicationId: t } = e.match.params,
        [m, b] = i.useState(!1),
        _ = i.useRef(!1),
        [O, E] = i.useState(null),
        y = !u.isPlatformEmbedded && !a.tq && !m,
        v = i.useMemo(() => (0, l.Z)(), []);
    return (i.useEffect(() => {
        y &&
            !0 !== _.current &&
            (Promise.resolve()
                .then(n.bind(n, 536285))
                .then((e) => {
                    let { default: n } = e;
                    n.request(p.Etm.DEEP_LINK, {
                        type: f.jE.ACTIVITIES,
                        params: {
                            applicationId: t,
                            url: location.href,
                            attemptId: v,
                        },
                    })
                        .then((e) => {
                            let n = null != e && e;
                            E(n),
                                c.default.track(p.rMx.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: v,
                                    rpc_success: n,
                                });
                        })
                        .catch(() => {
                            E(!1),
                                c.default.track(p.rMx.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: v,
                                    rpc_success: !1,
                                });
                        })
                        .then(() => n.disconnect());
                }),
            (_.current = !0));
    }, [t, y, v]),
    y && !1 !== O)
        ? !0 === O
            ? (0, r.jsxs)("div", {
                  className: g.container,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: "heading-xxl/bold",
                          children: h.intl.string(h.t.csrAMD),
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: "text-xs/semibold",
                          children: h.intl.string(h.t["m1+IBg"]),
                      }),
                      (0, r.jsx)(o.z, {
                          variant: "primary",
                          text: h.intl.string(h.t.fIv16O),
                          onClick: () => b(!0),
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: g.container,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: "heading-xxl/bold",
                          children: h.intl.string(h.t["Z+hCVV"]),
                      }),
                      (0, r.jsx)(s.$jN, {}),
                  ],
              })
        : (0, r.jsx)(
              d.Z,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, e),
          );
}
