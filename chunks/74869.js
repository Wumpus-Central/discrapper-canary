n.d(t, { Z: () => b }), n(804061), n(704826), n(35282), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(658722),
    o = n.n(a),
    s = n(481060),
    l = n(492435),
    c = n(667344),
    u = n(493075),
    d = n(438159),
    f = n(878209),
    _ = n(388032);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { id: t, experiment: n, currentBucket: i, system: a } = e,
        o = (0, d.v)(n);
    return (0, r.jsxs)(
        s.sNh,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, l.rX)(a, t, null),
            children: [
                o.map((e) =>
                    (0, r.jsx)(
                        s.S89,
                        {
                            id: "".concat(e.id),
                            label: e.shortLabel,
                            checked: e.id === (null == i ? void 0 : i.variantId),
                            action: () => (0, l.rX)(a, t, e.id),
                        },
                        "".concat(e.id),
                    ),
                ),
                (0, r.jsx)(s.kSQ, {
                    children:
                        null != i &&
                        (0, r.jsx)(s.sNh, {
                            id: "clear-override",
                            label: "Clear Override",
                            color: "danger",
                            icon: s.XHJ,
                            action: () => (0, l.rX)(a, t, null),
                        }),
                }),
            ],
        },
        t,
    );
}
function b() {
    let { experiments: e, overridesInfo: t } = (0, u.s)(),
        { experiments: n, overridesInfo: a } = (0, c.Q)(),
        l = i.useMemo(() => {
            let r = h({}, e, n),
                i = h({}, t, a);
            return (0, f.Tc)((0, f.Cg)(r), i).map((e) => {
                let { id: t, experiment: n } = e;
                return {
                    id: t,
                    experiment: n,
                    currentBucket: i[t],
                    system: n.system,
                };
            });
        }, [e, t, n, a]),
        [d, p] = i.useState(""),
        [m, b] = i.useState([]);
    i.useEffect(() => {
        if (0 === d.trim().length) return void b(l);
        b(l.filter((e) => o()(d, e.experiment.title.toLowerCase())));
    }, [l, d]);
    let y = i.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [l],
        ),
        O = i.useMemo(
            () =>
                m.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [m],
        ),
        v = i.useMemo(() => y.map(E), [y]),
        I = i.useMemo(() => O.map(E), [O]),
        T = (0, r.jsx)(
            s.II_,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, r.jsx)(
                        s.ne,
                        g(h({}, e), {
                            query: d,
                            onChange: p,
                            ref: t,
                            placeholder: _.intl.string(_.t["5h0QOD"]),
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
