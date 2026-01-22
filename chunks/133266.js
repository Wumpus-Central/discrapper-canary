n.d(t, {
    Ay: () => L,
    Mm: () => G,
    RA: () => P,
    j5: () => C,
}),
    n(457529);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(883885),
    o = n.n(a),
    c = n(311907),
    d = n(397927),
    u = n(964486),
    m = n(775602),
    g = n(58149),
    f = n(260509),
    h = n(954571),
    N = n(486020),
    I = n(515718),
    p = n(591552),
    O = n(713125),
    S = n(71876),
    E = n(739408),
    A = n(113473),
    x = n(694268),
    _ = n(896018),
    j = n(652215),
    T = n(985018),
    b = n(986700);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let t = (0, c.bG)([m.A], () => m.A.useReducedMotion),
        n = r.useRef(null);
    return (
        r.useEffect(() => {
            let l;
            return (
                null != n.current &&
                    (l = o().loadAnimation({
                        container: n.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !t,
                        animationData: JSON.parse(JSON.stringify(e)),
                    })),
                () => {
                    null == l || l.destroy();
                }
            );
        }, [n, t, e]),
        n
    );
}
function G() {
    let e = y(A);
    return (0, l.jsx)("div", {
        className: s()(b.vV, b.KP),
        children: (0, l.jsx)("div", {
            ref: e,
            className: b.yi,
        }),
    });
}
function P() {
    let e = y(_);
    return (0, l.jsx)("div", {
        className: s()(b.M8, b.KP),
        children: (0, l.jsx)("div", {
            ref: e,
            className: b.D8,
        }),
    });
}
function C(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: i } = e,
        a = (0, c.bG)([m.A], () => m.A.useReducedMotion),
        d = r.useRef(null),
        u = y(E),
        g = N.Ay.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 96,
        });
    return (
        r.useEffect(() => {
            let e;
            return (
                null != d.current && null != g
                    ? (0, I.S4)(g).then((t) => {
                          let n = (0, S.A)(JSON.parse(JSON.stringify(x)), g, t[0]);
                          e = o().loadAnimation({
                              container: d.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !a,
                              animationData: n,
                          });
                      })
                    : null != d.current &&
                      (e = o().loadAnimation({
                          container: d.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !a,
                          animationData: JSON.parse(JSON.stringify(x)),
                      })),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [g, d, a]),
        (0, l.jsxs)("div", {
            className: s()(b.tu, b.fV),
            children: [
                (0, l.jsx)("div", {
                    className: s()(b.Sb, i),
                    ref: u,
                }),
                (0, l.jsx)("div", {
                    className: s()(b.$h, n),
                    ref: d,
                }),
            ],
        })
    );
}
function L(e) {
    let { guild: t, onStart: n, onboardingStatus: i, headerId: s, disableTracking: a } = e,
        o = (0, c.bG)([p.A], () => p.A.isLoading()),
        m = r.useRef(!1);
    r.useEffect(() => {
        if (!a)
            return (
                h.default.track(
                    j.HAw.GUILD_ONBOARDING_STEP_VIEWED,
                    D(v({}, (0, g.H$)(t.id)), {
                        step: -1,
                        required: !0,
                    }),
                ),
                () => {
                    h.default.track(
                        j.HAw.GUILD_ONBOARDING_STEP_COMPLETED,
                        D(v({}, (0, g.H$)(t.id)), {
                            step: -1,
                            skipped: !m.current,
                            is_final_step: !1,
                            in_onboarding: !0,
                        }),
                    );
                }
            );
    }, [t.id, m, a]);
    let N = r.useMemo(() => (0, f.Iv)(t, 135, !1, !0), [t]);
    return (
        (0, u.Ay)(() => {
            setTimeout(() => {
                (m.current = !0), n();
            }, 3000);
        }),
        (0, l.jsx)("div", {
            className: b.PY,
            children: (0, l.jsxs)("div", {
                className: b.Fo,
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsx)("img", {
                            className: b.D3,
                            src: N,
                            alt: "",
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: b.rD,
                        children: [
                            (0, l.jsx)(d.Text, {
                                className: b.CH,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: s,
                                children: T.intl.format(T.t["j59F/c"], { guildName: null == t ? void 0 : t.name }),
                            }),
                            o
                                ? (0, l.jsx)(d.y$y, { className: b.__invalid_subtitle })
                                : i === O.$o.NOT_APPLICABLE
                                  ? (0, l.jsx)(d.Heading, {
                                        className: b.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: T.intl.string(T.t.Q5ibtV),
                                    })
                                  : (0, l.jsx)(d.Heading, {
                                        className: b.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: T.intl.string(T.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
