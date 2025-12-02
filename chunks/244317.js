n.d(t, { Z: () => m }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(772848),
    a = n(873546),
    s = n(159691),
    o = n(481060),
    c = n(626135),
    u = n(358085),
    d = n(289341),
    p = n(981631),
    f = n(186901),
    h = n(388032),
    g = n(87805);
function m(e) {
    let { applicationId: t } = e.match.params,
        [m, _] = i.useState(!1),
        b = i.useRef(!1),
        [E, O] = i.useState(null),
        v = !u.isPlatformEmbedded && !a.tq && !m,
        y = i.useMemo(() => (0, l.Z)(), []);
    return (i.useEffect(() => {
        v &&
            !0 !== b.current &&
            (Promise.resolve()
                .then(n.bind(n, 536285))
                .then((e) => {
                    let { default: n } = e;
                    n.request(p.Etm.DEEP_LINK, {
                        type: f.jE.ACTIVITIES,
                        params: {
                            applicationId: t,
                            url: location.href,
                            attemptId: y,
                        },
                    })
                        .then((e) => {
                            let n = null != e && e;
                            O(n),
                                c.default.track(p.rMx.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: y,
                                    rpc_success: n,
                                });
                        })
                        .catch(() => {
                            O(!1),
                                c.default.track(p.rMx.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: y,
                                    rpc_success: !1,
                                });
                        })
                        .then(() => n.disconnect());
                }),
            (b.current = !0));
    }, [t, v, y]),
    v && !1 !== E)
        ? !0 === E
            ? (0, r.jsxs)("div", {
                  className: g.container,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: "heading-xxl/bold",
                          children: h.intl.string(h.t.csrAMJ),
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          children: h.intl.string(h.t["m1+IBn"]),
                      }),
                      (0, r.jsx)(s.zxk, {
                          variant: "primary",
                          text: h.intl.string(h.t.fIv16B),
                          onClick: () => _(!0),
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: g.container,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: "heading-xxl/bold",
                          children: h.intl.string(h.t["Z+hCVU"]),
                      }),
                      (0, r.jsx)(o.$jN, {}),
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
