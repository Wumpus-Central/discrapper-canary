n.d(t, { Z: () => E }), n(804061), n(704826), n(35282), n(388685), n(781311);
var r = n(255367),
    i = n(73800),
    o = n(658722),
    a = n.n(o),
    s = n(481060),
    l = n(492435),
    c = n(667344),
    u = n(493075),
    d = n(878209),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { id: t, experiment: n, currentBucket: i, system: o } = e;
    return (0, r.jsxs)(
        s.sNh,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, l.rX)(o, t, null),
            children: [
                n.variants.map((e) =>
                    (0, r.jsx)(
                        s.S89,
                        {
                            id: "".concat(e.id),
                            label: e.shortLabel,
                            checked: e.id === (null == i ? void 0 : i.variantId),
                            action: () => (0, l.rX)(o, t, e.id),
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
                            action: () => (0, l.rX)(o, t, null),
                        }),
                }),
            ],
        },
        t,
    );
}
function E() {
    let { experiments: e, overridesInfo: t } = (0, u.s)(),
        { experiments: n, overridesInfo: o } = (0, c.Q)(),
        l = i.useMemo(() => {
            let r = p({}, e, n),
                i = p({}, t, o);
            return (0, d.Tc)((0, d.Cg)(r), i).map((e) => {
                let { id: t, experiment: n } = e;
                return {
                    id: t,
                    experiment: n,
                    currentBucket: i[t],
                    system: n.system,
                };
            });
        }, [e, t, n, o]),
        [_, h] = i.useState(""),
        [E, b] = i.useState([]);
    i.useEffect(() => {
        if (0 === _.trim().length) return void b(l);
        b(l.filter((e) => a()(_, e.experiment.title.toLowerCase())));
    }, [l, _]);
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
                E.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [E],
        ),
        v = i.useMemo(() => y.map(g), [y]),
        I = i.useMemo(() => O.map(g), [O]),
        T = (0, r.jsx)(
            s.II_,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, r.jsx)(
                        s.ne,
                        m(p({}, e), {
                            query: _,
                            onChange: h,
                            ref: t,
                            placeholder: f.intl.string(f.t["5h0QOD"]),
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
