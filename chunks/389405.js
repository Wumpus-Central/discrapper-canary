n.d(t, {
    A: () => g,
}),
    n(747238),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(835245),
    a = n(607399),
    s = n(732955),
    o = n(397927),
    c = n(954571),
    u = n(723702),
    d = n(394727),
    p = n(652215),
    f = n(613057),
    h = n(985018),
    A = n(742249);

function g(e) {
    let { applicationId: t } = e.match.params,
        [g, m] = i.useState(!1),
        b = i.useRef(!1),
        [_, E] = i.useState(null),
        O = !u.isPlatformEmbedded && !a.Fr && !g,
        y = i.useMemo(() => (0, l.A)(), []);
    return (i.useEffect(() => {
        O &&
            !0 !== b.current &&
            (Promise.resolve()
                .then(n.bind(n, 129014))
                .then((e) => {
                    let { default: n } = e;
                    n.request(p.e$_.DEEP_LINK, {
                        type: f.XK.ACTIVITIES,
                        params: {
                            applicationId: t,
                            url: location.href,
                            attemptId: y,
                        },
                    })
                        .then((e) => {
                            let n = null != e && e;
                            E(n),
                                c.default.track(p.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: y,
                                    rpc_success: n,
                                });
                        })
                        .catch(() => {
                            E(!1),
                                c.default.track(p.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: y,
                                    rpc_success: !1,
                                });
                        })
                        .then(() => n.disconnect());
                }),
            (b.current = !0));
    }, [t, O, y]),
    O && !1 !== _)
        ? !0 === _
            ? (0, r.jsxs)("div", {
                  className: A.k,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: "heading-xxl/bold",
                          children: h.intl.string(h.t.csrAMJ),
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          children: h.intl.string(h.t["m1+IBn"]),
                      }),
                      (0, r.jsx)(s.$nd, {
                          variant: "primary",
                          text: h.intl.string(h.t.fIv16B),
                          onClick: () => m(!0),
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: A.k,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: "heading-xxl/bold",
                          children: h.intl.string(h.t["Z+hCVU"]),
                      }),
                      (0, r.jsx)(o.y$y, {}),
                  ],
              })
        : (0, r.jsx)(
              d.A,
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
