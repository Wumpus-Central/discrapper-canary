n.d(t, {
    B0: () => P,
    ZP: () => L,
    _I: () => A,
    xm: () => C,
}),
    n(49124);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(500923),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(493773),
    m = n(607070),
    g = n(367907),
    h = n(601964),
    f = n(626135),
    N = n(768581),
    I = n(956664),
    p = n(45966),
    O = n(819553),
    E = n(487533),
    S = n(279876),
    x = n(180504),
    T = n(790711),
    _ = n(535170),
    j = n(981631),
    v = n(388032),
    b = n(577436);
function D(e) {
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
function G(e, t) {
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
    let t = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        n = i.useRef(null);
    return (
        i.useEffect(() => {
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
function C() {
    let e = y(x);
    return (0, l.jsx)("div", {
        className: a()(b.leftArt, b.altFloat),
        children: (0, l.jsx)("div", {
            ref: e,
            className: b.grillingIsland,
        }),
    });
}
function P() {
    let e = y(_);
    return (0, l.jsx)("div", {
        className: a()(b.rightArt, b.altFloat),
        children: (0, l.jsx)("div", {
            ref: e,
            className: b.waffleIsland,
        }),
    });
}
function A(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: r } = e,
        s = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        d = i.useRef(null),
        u = y(S),
        g = N.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 96,
        });
    return (
        i.useEffect(() => {
            let e;
            return (
                null != d.current && null != g
                    ? (0, I.OF)(g).then((t) => {
                          let n = (0, E.Z)(JSON.parse(JSON.stringify(T)), g, t[0]);
                          e = o().loadAnimation({
                              container: d.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !s,
                              animationData: n,
                          });
                      })
                    : null != d.current &&
                      (e = o().loadAnimation({
                          container: d.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !s,
                          animationData: JSON.parse(JSON.stringify(T)),
                      })),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [g, d, s]),
        (0, l.jsxs)("div", {
            className: a()(b.centerArt, b.float),
            children: [
                (0, l.jsx)("div", {
                    className: a()(b.balloonDog, r),
                    ref: u,
                }),
                (0, l.jsx)("div", {
                    className: a()(b.mainIsland, n),
                    ref: d,
                }),
            ],
        })
    );
}
function L(e) {
    let { guild: t, onStart: n, onboardingStatus: r, headerId: a, disableTracking: s } = e,
        o = (0, c.e7)([p.Z], () => p.Z.isLoading()),
        m = i.useRef(!1);
    i.useEffect(() => {
        if (!s)
            return (
                f.default.track(
                    j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                    G(D({}, (0, g.hH)(t.id)), {
                        step: -1,
                        required: !0,
                    }),
                ),
                () => {
                    f.default.track(
                        j.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                        G(D({}, (0, g.hH)(t.id)), {
                            step: -1,
                            skipped: !m.current,
                            is_final_step: !1,
                            in_onboarding: !0,
                        }),
                    );
                }
            );
    }, [t.id, m, s]);
    let N = i.useMemo(() => (0, h.EB)(t, 135, !1, !0), [t]);
    return (
        (0, u.ZP)(() => {
            setTimeout(() => {
                (m.current = !0), n();
            }, 3000);
        }),
        (0, l.jsx)("div", {
            className: b.coverContainer,
            children: (0, l.jsxs)("div", {
                className: b.centerContent,
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsx)("img", {
                            className: b.guildImage,
                            src: N,
                            alt: "",
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: b.coverContent,
                        children: [
                            (0, l.jsx)(d.Text, {
                                className: b.coverTitle,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: a,
                                children: v.intl.format(v.t["j59F/c"], { guildName: null == t ? void 0 : t.name }),
                            }),
                            o
                                ? (0, l.jsx)(d.$jN, { className: b.__invalid_subtitle })
                                : r === O.uX.NOT_APPLICABLE
                                  ? (0, l.jsx)(d.Heading, {
                                        className: b.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: v.intl.string(v.t.Q5ibtV),
                                    })
                                  : (0, l.jsx)(d.Heading, {
                                        className: b.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: v.intl.string(v.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
