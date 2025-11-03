n.d(t, { Z: () => O }), n(804061), n(704826), n(35282), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(658722),
    o = n.n(a),
    s = n(481060),
    l = n(922699),
    c = n(492435),
    u = n(667344),
    d = n(493075),
    f = n(438159),
    _ = n(572004),
    p = n(878209),
    h = n(388032);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { id: t, experiment: n, currentBucket: i, system: a } = e,
        o = (0, f.v)(n);
    return (0, r.jsxs)(
        s.sNh,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, c.rX)(a, t, null),
            children: [
                o.map((e) =>
                    (0, r.jsx)(
                        s.S89,
                        {
                            id: "".concat(e.id),
                            label: e.shortLabel,
                            checked: e.id === (null == i ? void 0 : i.variantId),
                            action: () => (0, c.rX)(a, t, e.id),
                        },
                        "".concat(e.id),
                    ),
                ),
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        _.wS &&
                            (0, r.jsx)(s.sNh, {
                                id: "copy-link",
                                label: "Copy Link",
                                action: () => {
                                    let e = (0, l.sZ)(t);
                                    (0, _.JG)(e, () => {
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
                                action: () => (0, c.rX)(a, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}
function O() {
    let { experiments: e, overridesInfo: t } = (0, d.sI)(),
        { experiments: n, overridesInfo: a } = (0, u.Qb)(),
        l = i.useMemo(() => {
            let r = g({}, e, n),
                i = g({}, t, a);
            return (0, p.Tc)((0, p.Cg)(r), i).map((e) => {
                let { id: t, experiment: n } = e;
                return {
                    id: t,
                    experiment: n,
                    currentBucket: i[t],
                    system: n.system,
                };
            });
        }, [e, t, n, a]),
        [c, f] = i.useState(""),
        [_, m] = i.useState([]);
    i.useEffect(() => {
        if (0 === c.trim().length) return void m(l);
        m(l.filter((e) => o()(c, e.experiment.title.toLowerCase())));
    }, [l, c]);
    let E = i.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [l],
        ),
        O = i.useMemo(
            () =>
                _.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [_],
        ),
        v = i.useMemo(() => E.map(y), [E]),
        I = i.useMemo(() => O.map(y), [O]),
        T = (0, r.jsx)(
            s.II_,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, r.jsx)(
                        s.ne,
                        b(g({}, e), {
                            query: c,
                            onChange: f,
                            ref: t,
                            placeholder: h.intl.string(h.t["5h0QOP"]),
                        }),
                    ),
            },
            "experiments-search",
        );
    return v.length > 0
        ? [
              (0, r.jsx)(
                  s.kSQ,
                  {
                      label: "Overridden Experiments",
                      children: v,
                  },
                  "overridden-group",
              ),
              (0, r.jsx)(s.Clw, {}, "separator-2"),
              (0, r.jsxs)(
                  s.sNh,
                  {
                      id: "other-experiments",
                      label: "Other Experiments",
                      children: [T, I],
                  },
                  "other-experiments",
              ),
          ]
        : [T, ...I];
}
