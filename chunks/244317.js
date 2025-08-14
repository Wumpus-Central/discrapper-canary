n.d(t, { Z: () => h }), n(35282), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(680018),
    o = n(481060),
    s = n(358085),
    c = n(289341),
    u = n(981631),
    d = n(186901),
    p = n(388032),
    f = n(87805);
function h(e) {
    let { applicationId: t } = e.match.params,
        [h, g] = i.useState(!1),
        m = i.useRef(!1),
        [b, _] = i.useState(null),
        O = !s.isPlatformEmbedded && !l.tq && !h;
    return (i.useEffect(() => {
        O &&
            !0 !== m.current &&
            (Promise.resolve()
                .then(n.bind(n, 536285))
                .then((e) => {
                    let { default: n } = e;
                    n.request(u.Etm.DEEP_LINK, {
                        type: d.jE.ACTIVITIES,
                        params: {
                            applicationId: t,
                            url: location.href,
                        },
                    })
                        .then((e) => {
                            _(null != e && e);
                        })
                        .catch(() => _(!1))
                        .then(() => n.disconnect());
                }),
            (m.current = !0));
    }, [t, O]),
    O && !1 !== b)
        ? !0 === b
            ? (0, r.jsxs)("div", {
                  className: f.container,
                  children: [
                      (0, r.jsx)(o.X6q, {
                          variant: "heading-xxl/bold",
                          children: p.intl.string(p.t.csrAMD),
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          children: p.intl.string(p.t["m1+IBg"]),
                      }),
                      (0, r.jsx)(a.z, {
                          variant: "primary",
                          text: p.intl.string(p.t.fIv16O),
                          onClick: () => g(!0),
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: f.container,
                  children: [
                      (0, r.jsx)(o.X6q, {
                          variant: "heading-xxl/bold",
                          children: p.intl.string(p.t["Z+hCVV"]),
                      }),
                      (0, r.jsx)(o.$jN, {}),
                  ],
              })
        : (0, r.jsx)(
              c.Z,
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
