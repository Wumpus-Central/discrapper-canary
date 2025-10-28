n.d(t, { Z: () => g }), n(804061), n(704826), n(35282), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    o = n(658722),
    l = n.n(o),
    s = n(481060),
    c = n(887580),
    a = n(492435),
    u = n(667344),
    d = n(493075),
    p = n(438159),
    b = n(572004),
    h = n(878209),
    j = n(388032);
function y(e) {
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
}
function m(e) {
    let { id: t, experiment: n, currentBucket: i, system: o } = e,
        l = (0, p.v)(n);
    return (0, r.jsxs)(
        s.sNh,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, a.rX)(o, t, null),
            children: [
                l.map((e) =>
                    (0, r.jsx)(
                        s.S89,
                        {
                            id: "".concat(e.id),
                            label: e.shortLabel,
                            checked: e.id === (null == i ? void 0 : i.variantId),
                            action: () => (0, a.rX)(o, t, e.id),
                        },
                        "".concat(e.id),
                    ),
                ),
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        b.wS &&
                            (0, r.jsx)(s.sNh, {
                                id: "copy-link",
                                label: "Copy Link",
                                action: () => {
                                    let e = (0, c.sZ)(t);
                                    (0, b.JG)(e, () => {
                                        (0, s.showToast)({
                                            id: "experiment-link-copied",
                                            message: "Copied experiment link",
                                            type: s.ToastType.SUCCESS,
                                        });
                                    });
                                },
                            }),
                        null != i &&
                            (0, r.jsx)(s.sNh, {
                                id: "clear-override",
                                label: "Clear Override",
                                color: "danger",
                                icon: s.XHJ,
                                action: () => (0, a.rX)(o, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}
function g() {
    let { experiments: e, overridesInfo: t } = (0, d.s)(),
        { experiments: n, overridesInfo: o } = (0, u.Q)(),
        c = i.useMemo(() => {
            let r = y({}, e, n),
                i = y({}, t, o);
            return (0, h.Tc)((0, h.Cg)(r), i).map((e) => {
                let { id: t, experiment: n } = e;
                return {
                    id: t,
                    experiment: n,
                    currentBucket: i[t],
                    system: n.system,
                };
            });
        }, [e, t, n, o]),
        [a, p] = i.useState(""),
        [b, g] = i.useState([]);
    i.useEffect(() => {
        if (0 === a.trim().length) return void g(c);
        g(c.filter((e) => l()(a, e.experiment.title.toLowerCase())));
    }, [c, a]);
    let f = i.useMemo(
            () =>
                c.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [c],
        ),
        O = i.useMemo(
            () =>
                b.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [b],
        ),
        x = i.useMemo(() => f.map(m), [f]),
        S = i.useMemo(() => O.map(m), [O]),
        P = (0, r.jsx)(
            s.II_,
            {
                id: "experiments-search",
                control: (e, t) => {
                    var n, i;
                    return (0, r.jsx)(
                        s.ne,
                        ((n = y({}, e)),
                        (i = i =
                            {
                                query: a,
                                onChange: p,
                                ref: t,
                                placeholder: j.intl.string(j.t["5h0QOP"]),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    );
                },
            },
            "experiments-search",
        );
    return x.length > 0
        ? [
              (0, r.jsx)(
                  s.kSQ,
                  {
                      label: "Overridden Experiments",
                      children: x,
                  },
                  "overridden-group",
              ),
              (0, r.jsx)(s.Clw, {}, "separator-2"),
              (0, r.jsxs)(
                  s.sNh,
                  {
                      id: "other-experiments",
                      label: "Other Experiments",
                      children: [P, S],
                  },
                  "other-experiments",
              ),
          ]
        : [P, ...S];
}
